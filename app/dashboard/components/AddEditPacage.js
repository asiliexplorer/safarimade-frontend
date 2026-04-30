"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { toast } from "react-hot-toast";
import { ArrowLeft, ArrowRight, CheckCircle2, Circle, CircleDashed, Image as ImageIcon, Trash2, Upload, X } from "lucide-react";
import { useCreatePackageMutation, useUpdatePackageMutation } from "../../redux/features/admin/PackageApi";
import { API_BASE_URL } from "../../redux/features/api/BaseApi";
import currencyFormatter from "currency-formatter";

const CATEGORY_OPTIONS = ["SAFARI", "WILDEBEEST", "KILIMANJARO", "ZANZIBAR"];
const PRICE_TYPE_OPTIONS = ["FIXED", "CUSTOM"];

const STEPS = [
  { id: "basics", title: "Basics", description: "Core identity, package ID, and pricing model" },
  { id: "story", title: "Story", description: "Summary, descriptions, and style" },
  { id: "journey", title: "Journey", description: "Destinations and stays" },
  { id: "final", title: "Final", description: "Highlights, inclusions, and visibility" },
];

function toCsv(value) {
  if (!Array.isArray(value)) return "";
  return value.join(", ");
}

function parseCsv(text) {
  if (!text) return [];
  return text
    .split(",")
    .map((item) => item.trim())
    .filter(Boolean);
}

function createDestination() {
  return {
    place: "",
    nights: "",
    description: "",
    accommodation: {
      name: "",
      type: "",
      highlights: "",
      images: "",
    },
  };
}

function normalizeDestination(item = {}) {
  return {
    place: item.place || "",
    nights: item.nights?.toString?.() || item.nights || "",
    description: item.description || "",
    accommodation: {
      name: item.accommodation?.name || "",
      type: item.accommodation?.type || "",
      highlights: toCsv(item.accommodation?.highlights),
      images: toCsv(item.accommodation?.images),
    },
  };
}

function buildStructuredList(initialList, factory, normalizer) {
  const list = Array.isArray(initialList) ? initialList : [];
  if (!list.length) return [factory()];
  return list.map((item) => normalizer(item));
}

function buildInitialState(data) {
  return {
    id: data?.id?.toString() || "",
    name: data?.name || "",
    slug: data?.slug || "",
    offeredBy: data?.offeredBy || "Asili Explorer Safaris",
    category: data?.category || "SAFARI",
    duration: data?.duration?.toString() || "",
    nights: data?.nights?.toString() || "",
    priceType: data?.priceType || "FIXED",
    priceFrom: data?.priceFrom?.toString() || "",
    currency: data?.currency || "USD",
    travelStyle: data?.travelStyle || "",
    themes: toCsv(data?.themes),
    bestFor: toCsv(data?.bestFor),
    experienceSummary: data?.experienceSummary || "",
    shortDescription: data?.shortDescription || "",
    fullDescription: data?.fullDescription || "",
    destinationsDetailed: buildStructuredList(data?.destinationsDetailed, createDestination, normalizeDestination),
    highlights: toCsv(data?.highlights),
    mainImage: data?.mainImage || "",
    gallery: toCsv(data?.gallery),
    pricingNotes: data?.pricingNotes || "",
    inclusionsIncluded: toCsv(data?.inclusions?.included),
    inclusionsExcluded: toCsv(data?.inclusions?.excluded),
    gettingThereDescription: data?.gettingThere?.description || "",
    isActive: data?.isActive ?? true,
  };
}

function Field({ label, children, hint, full = false }) {
  return (
    <label className={`space-y-1 ${full ? "md:col-span-2" : ""}`}>
      <div className="flex items-center justify-between gap-3">
        <span className="text-sm font-medium text-[#4f4335]">{label}</span>
        {hint ? <span className="text-xs text-[#8b7b68]">{hint}</span> : null}
      </div>
      {children}
    </label>
  );
}

function Input(props) {
  return <input {...props} className={`w-full rounded-lg border border-[#dcccba] bg-white px-3 py-2 outline-none transition focus:border-[#8B6F47] focus:ring-2 focus:ring-[#8B6F47]/15 ${props.className || ""}`} />;
}

function Textarea(props) {
  return <textarea {...props} className={`w-full rounded-lg border border-[#dcccba] bg-white px-3 py-2 outline-none transition focus:border-[#8B6F47] focus:ring-2 focus:ring-[#8B6F47]/15 ${props.className || ""}`} />;
}

export default function AddEditPacage({ initialData, onCancel, onSuccess }) {
  const isEditing = Boolean(initialData?._id);
  const [createPackage, { isLoading: creating }] = useCreatePackageMutation();
  const [updatePackage, { isLoading: updating }] = useUpdatePackageMutation();
  const [formData, setFormData] = useState(buildInitialState(initialData));
  const [currentStep, setCurrentStep] = useState(0);
  const [mainImageFile, setMainImageFile] = useState(null);
  const [mainImagePreview, setMainImagePreview] = useState(initialData?.mainImage || "");
  const [galleryFiles, setGalleryFiles] = useState([]);
  const [galleryPreviewItems, setGalleryPreviewItems] = useState([]);
  const [destPendingFiles, setDestPendingFiles] = useState({});
  const [destPreviewItems, setDestPreviewItems] = useState({});
  const [mainImageUploading, setMainImageUploading] = useState(false);
  const [galleryUploading, setGalleryUploading] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const submitLockRef = useRef(false);

  useEffect(() => {
    setFormData(buildInitialState(initialData));
    setCurrentStep(0);
    setMainImageFile(null);
    setMainImagePreview(initialData?.mainImage || "");
    setGalleryFiles([]);
    setGalleryPreviewItems([]);
    setDestPendingFiles({});
    setDestPreviewItems({});
  }, [initialData]);

  useEffect(() => {
    return () => {
      if (mainImagePreview && mainImagePreview.startsWith("blob:")) {
        URL.revokeObjectURL(mainImagePreview);
      }
      galleryPreviewItems.forEach((item) => {
        if (item.previewUrl.startsWith("blob:")) {
          URL.revokeObjectURL(item.previewUrl);
        }
      });
      Object.values(destPreviewItems).flat().forEach((p) => {
        if (p.previewUrl && p.previewUrl.startsWith("blob:")) URL.revokeObjectURL(p.previewUrl);
      });
    };
  }, [galleryPreviewItems, mainImagePreview, destPreviewItems]);

  const loading = isSubmitting || creating || updating;

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const updateListItem = (field, index, key, value) => {
    setFormData((prev) => {
      const nextList = [...prev[field]];
      nextList[index] = { ...nextList[index], [key]: value };
      return { ...prev, [field]: nextList };
    });
  };

  const updateNestedListItem = (field, index, nestedKey, key, value) => {
    setFormData((prev) => {
      const nextList = [...prev[field]];
      nextList[index] = { ...nextList[index], [nestedKey]: { ...nextList[index][nestedKey], [key]: value } };
      return { ...prev, [field]: nextList };
    });
  };

  const addListItem = (field, factory) => {
    setFormData((prev) => ({ ...prev, [field]: [factory(), ...prev[field]] }));
  };

  const removeListItem = (field, index) => {
    setFormData((prev) => {
      const nextList = prev[field].filter((_, i) => i !== index);
      return { ...prev, [field]: nextList.length ? nextList : field === "destinationsDetailed" ? [createDestination()] : [] };
    });
  };

  const updateInclusions = (key, value) => setFormData((prev) => ({ ...prev, [key]: value }));

  const getAuthHeaders = () => {
    const headers = {};
    if (typeof window !== "undefined") {
      const token = localStorage.getItem("accessToken");
      if (token) headers.Authorization = `Bearer ${token}`;
    }
    return headers;
  };

  const uploadImages = async (files) => {
    const formDataPayload = new FormData();
    files.forEach((file) => formDataPayload.append("images", file));
    
    try {
      const headers = getAuthHeaders();
      // Do NOT set Content-Type header when using FormData - browser will set it with boundary
      const response = await fetch(`${API_BASE_URL}/uploads/images`, {
        method: "POST",
        headers, // Only include Authorization header
        body: formDataPayload,
      });

      const data = await response.json().catch(() => null);
      
      if (!response.ok) {
        const errorMsg = data?.message || `Upload failed with status ${response.status}`;
        console.error("Upload error response:", { status: response.status, data });
        throw new Error(errorMsg);
      }
      
      if (!data?.data?.urls || !Array.isArray(data.data.urls)) {
        console.warn("Unexpected upload response format:", data);
        throw new Error("Invalid upload response format");
      }
      
      return data.data.urls;
    } catch (error) {
      console.error("Image upload error:", error);
      throw error;
    }
  };

  const handleMainImageUpload = async (event) => {
    const file = event.target.files?.[0];
    event.target.value = "";
    if (!file) return;
    if (mainImagePreview && mainImagePreview.startsWith("blob:")) URL.revokeObjectURL(mainImagePreview);
    setMainImageFile(file);
    setMainImagePreview(URL.createObjectURL(file));
    setFormData((prev) => ({ ...prev, mainImage: "" }));
  };

  const handleGalleryUpload = (event) => {
    const files = Array.from(event.target.files || []);
    event.target.value = "";
    if (!files.length) return;
    const newPreviewItems = files.map((file) => ({ file, previewUrl: URL.createObjectURL(file) }));
    setGalleryFiles((prev) => [...prev, ...files]);
    setGalleryPreviewItems((prev) => [...prev, ...newPreviewItems]);
  };

  const removeGalleryImage = (url) => {
    setFormData((prev) => ({ ...prev, gallery: parseCsv(prev.gallery).filter((i) => i !== url).join(", ") }));
  };

  const removePendingGalleryImage = (previewUrl) => {
    setGalleryPreviewItems((prev) => {
      const next = prev.filter((item) => {
        if (item.previewUrl !== previewUrl) return true;
        if (item.previewUrl.startsWith("blob:")) URL.revokeObjectURL(item.previewUrl);
        return false;
      });
      return next;
    });
    setGalleryFiles((prev) => {
      const previewItem = galleryPreviewItems.find((item) => item.previewUrl === previewUrl);
      if (!previewItem) return prev;
      return prev.filter((file) => file !== previewItem.file);
    });
  };

  const handleDestAccommodationFiles = (index, event) => {
    const files = Array.from(event.target.files || []);
    event.target.value = "";
    if (!files.length) return;
    const newPreviewItems = files.map((file) => ({ file, previewUrl: URL.createObjectURL(file) }));
    setDestPendingFiles((prev) => ({ ...prev, [index]: [...(prev[index] || []), ...files] }));
    setDestPreviewItems((prev) => ({ ...prev, [index]: [...(prev[index] || []), ...newPreviewItems] }));
  };

  const removeDestPendingImage = (index, previewUrl) => {
    setDestPreviewItems((prev) => {
      const next = (prev[index] || []).filter((p) => p.previewUrl !== previewUrl);
      if (previewUrl.startsWith("blob:")) URL.revokeObjectURL(previewUrl);
      return { ...prev, [index]: next };
    });
    setDestPendingFiles((prev) => {
      const previews = destPreviewItems[index] || [];
      const removed = previews.find((p) => p.previewUrl === previewUrl);
      if (!removed) return prev;
      const nextFiles = (prev[index] || []).filter((f) => f !== removed.file);
      return { ...prev, [index]: nextFiles };
    });
  };

  const removeMainImage = () => {
    if (mainImagePreview && mainImagePreview.startsWith("blob:")) URL.revokeObjectURL(mainImagePreview);
    setMainImageFile(null);
    setMainImagePreview("");
    setFormData((prev) => ({ ...prev, mainImage: "" }));
  };

  const goNext = () => {
    if (currentStep === 0) {
      if (!formData.name.trim()) return toast.error("Package name is required");
      if (!formData.category) return toast.error("Category is required");
    }
    setCurrentStep((s) => Math.min(STEPS.length - 1, s + 1));
  };

  const goPrevious = () => setCurrentStep((s) => Math.max(0, s - 1));

  const deleteUnusedImages = async (imagesToDelete) => {
    if (!imagesToDelete.length) return;
    
    try {
      const response = await fetch(`${API_BASE_URL}/uploads/images/delete`, {
        method: "POST",
        headers: { ...getAuthHeaders(), "Content-Type": "application/json" },
        body: JSON.stringify({ urls: imagesToDelete }),
      });

      if (!response.ok) {
        const data = await response.json().catch(() => null);
        console.warn("Failed to delete images from Cloudinary:", data);
      }
    } catch (error) {
      console.warn("Image deletion error (non-blocking):", error);
    }
  };

  const identifyDeletedImages = () => {
    const deleted = [];

    const oldMainImage = initialData?.mainImage;
    if (oldMainImage && oldMainImage !== formData.mainImage && !mainImageFile) {
      deleted.push(oldMainImage);
    }

    const oldGallery = parseCsv(initialData?.gallery?.join(",") || "");
    const newGallery = parseCsv(formData.gallery);
    oldGallery.forEach((img) => {
      if (!newGallery.includes(img)) {
        deleted.push(img);
      }
    });

    const oldDestinations = initialData?.destinationsDetailed || [];
    oldDestinations.forEach((oldDest, index) => {
      const oldAccomImages = parseCsv(
        Array.isArray(oldDest.accommodation?.images)
          ? oldDest.accommodation.images.join(",")
          : oldDest.accommodation?.images || ""
      );
      const newDest = formData.destinationsDetailed[index];
      const newAccomImages = parseCsv(newDest?.accommodation?.images || "");

      oldAccomImages.forEach((img) => {
        if (!newAccomImages.includes(img)) {
          deleted.push(img);
        }
      });
    });

    return deleted.filter(Boolean);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!formData.name.trim()) {
      toast.error("Package name is required");
      setCurrentStep(0);
      return;
    }
    if (!formData.category) {
      toast.error("Category is required");
      setCurrentStep(0);
      return;
    }
    if (submitLockRef.current) return;

    submitLockRef.current = true;
    setIsSubmitting(true);

    try {
      setMainImageUploading(Boolean(mainImageFile));
      setGalleryUploading(galleryFiles.length > 0);

      if (isEditing) {
        const unusedImages = identifyDeletedImages();
        if (unusedImages.length > 0) {
          console.log("Cleaning up unused images:", unusedImages);
          await deleteUnusedImages(unusedImages);
        }
      }

      const uploadedDestImagesMap = {};
      const destKeys = Object.keys(destPendingFiles || {});
      for (const key of destKeys) {
        const files = destPendingFiles[key] || [];
        if (!files.length) continue;
        try {
          const urls = await uploadImages(files);
          uploadedDestImagesMap[key] = urls;
        } catch (err) {
          const errorMsg = err?.message || "Unknown upload error";
          console.error(`Destination ${Number(key) + 1} upload failed:`, err);
          toast.error(`Failed to upload images for destination ${Number(key) + 1}: ${errorMsg}`);
          throw err; // Re-throw to stop the entire operation
        }
      }

      let uploadedMainImage = formData.mainImage.trim() || undefined;
      let uploadedGallery = parseCsv(formData.gallery);

      if (mainImageFile) {
        try {
          const urls = await uploadImages([mainImageFile]);
          if (urls.length > 0) uploadedMainImage = urls[0];
        } catch (err) {
          console.error("Main image upload failed:", err);
          toast.error(`Main image upload failed: ${err?.message || "Unknown error"}`);
          throw err;
        }
      }

      if (galleryFiles.length > 0) {
        try {
          const uploadedUrls = await uploadImages(galleryFiles);
          uploadedGallery = [...uploadedGallery, ...uploadedUrls];
        } catch (err) {
          console.error("Gallery upload failed:", err);
          toast.error(`Gallery upload failed: ${err?.message || "Unknown error"}`);
          throw err;
        }
      }

      const payload = {
        id: formData.id ? Number(formData.id) : undefined,
        name: formData.name.trim(),
        slug: formData.slug.trim() || undefined,
        offeredBy: formData.offeredBy.trim() || "Asili Explorer Safaris",
        category: formData.category,
        duration: formData.duration ? Number(formData.duration) : undefined,
        nights: formData.nights ? Number(formData.nights) : undefined,
        travelStyle: formData.travelStyle.trim() || undefined,
        themes: parseCsv(formData.themes),
        bestFor: parseCsv(formData.bestFor),
        experienceSummary: formData.experienceSummary.trim() || undefined,
        shortDescription: formData.shortDescription.trim() || undefined,
        fullDescription: formData.fullDescription.trim() || undefined,
        destinationsDetailed: formData.destinationsDetailed
          .flatMap((item, index) => (item.place.trim() || item.description.trim() || item.nights ? [{ item, index }] : []))
          .map(({ item, index }) => ({
            place: item.place.trim() || undefined,
            nights: item.nights ? Number(item.nights) : undefined,
            description: item.description.trim() || undefined,
            accommodation: {
              name: item.accommodation.name.trim() || undefined,
              type: item.accommodation.type.trim() || undefined,
              highlights: parseCsv(item.accommodation.highlights),
              images: [...parseCsv(item.accommodation.images), ...(uploadedDestImagesMap[index] || [])],
            },
          })),
        highlights: parseCsv(formData.highlights),
        mainImage: uploadedMainImage,
        gallery: uploadedGallery,
        priceType: formData.priceType,
        priceFrom: formData.priceFrom ? Number(formData.priceFrom) : undefined,
        currency: formData.currency.trim() || undefined,
        pricingNotes: formData.pricingNotes.trim() || undefined,
        inclusions: {
          included: parseCsv(formData.inclusionsIncluded),
          excluded: parseCsv(formData.inclusionsExcluded),
        },
        gettingThere: { description: formData.gettingThereDescription.trim() || undefined },
        isActive: Boolean(formData.isActive),
      };

      if (isEditing) {
        await updatePackage({ id: initialData._id, ...payload }).unwrap();
        toast.success("Package updated");
      } else {
        await createPackage(payload).unwrap();
        toast.success("Package created");
      }
      onSuccess?.();
    } catch (error) {
      const message = error?.data?.message || error?.error || "Failed to save package";
      toast.error(message);
    } finally {
      submitLockRef.current = false;
      setIsSubmitting(false);
      setMainImageUploading(false);
      setGalleryUploading(false);
    }
  };

  const stepContent = [
    <div key="basics" className="space-y-6">
      <div className="grid gap-4 md:grid-cols-2">
        {/* <Field label="Package ID" hint="Auto-generated if empty">
          <Input type="number" name="id" value={formData.id} onChange={handleChange} placeholder="e.g. 24" min="1"  />
        </Field> */}

        <Field label="Package Name *" hint="Public title shown on website">
          <Input name="name" value={formData.name} onChange={handleChange} placeholder="e.g. 10 Days Serengeti & Zanzibar Luxury Safari" />
        </Field>

        <Field label="Slug (This will be used in the URL )" hint="Auto-generated if empty">
          <Input name="slug" value={formData.slug} onChange={handleChange} placeholder="e.g. serengeti-zanzibar-luxury-safari" />
        </Field>
        <Field label="Category *">
          <select name="category" value={formData.category} onChange={handleChange} className="w-full rounded-lg border border-[#dcccba] bg-white px-3 py-2 outline-none transition focus:border-[#8B6F47] focus:ring-2 focus:ring-[#8B6F47]/15">
            {CATEGORY_OPTIONS.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </Field>

        <Field label="Offered By" hint="Defaults to Asili Explorer Safaris">
          <Input name="offeredBy" value={formData.offeredBy} onChange={handleChange} placeholder="Asili Explorer Safaris" />
        </Field>

        <Field label="Duration (Days)" hint="Total number of days">
          <Input type="number" name="duration" value={formData.duration} onChange={handleChange} placeholder="e.g. 10" />
        </Field>

        <Field label="Nights" hint="Usually days - 1">
          <Input type="number" name="nights" value={formData.nights} onChange={handleChange} placeholder="e.g. 9" />
        </Field>
        <Field label="Price Type">
          <select name="priceType" value={formData.priceType} onChange={handleChange} className="w-full rounded-lg border border-[#dcccba] bg-white px-3 py-2 outline-none transition focus:border-[#8B6F47] focus:ring-2 focus:ring-[#8B6F47]/15">
            {PRICE_TYPE_OPTIONS.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </Field>
        <Field label="Starting Price" hint="Minimum price per person">
          <Input type="number" name="priceFrom" value={formData.priceFrom} onChange={handleChange} placeholder="e.g. 4200" />
        </Field>
        <Field label="Currency" hint="Select pricing currency">
          {Array.isArray(currencyFormatter.currencies)
            ? (
                <select name="currency" value={formData.currency} onChange={handleChange} className="w-full rounded-lg border border-[#dcccba] bg-white px-3 py-2 outline-none transition focus:border-[#8B6F47] focus:ring-2 focus:ring-[#8B6F47]/15">
                  {currencyFormatter.currencies.map((c) => (
                    <option key={c.code} value={c.code}>
                      {c.code}
                      {c.symbol ? ` — ${c.symbol}` : ""}
                    </option>
                  ))}
                </select>
              ) : null}
        </Field>
      </div>
    </div>,

    <div key="story" className="space-y-6">
      <div className="grid gap-4 md:grid-cols-2">
        <Field label="Travel Style" hint="Short theme of trip">
          <Input name="travelStyle" value={formData.travelStyle} onChange={handleChange} placeholder="e.g. Safari + Beach" />
        </Field>

        <Field label="Experience Summary" hint="A short pitch for the package" full>
          <Textarea name="experienceSummary" rows={8} value={formData.experienceSummary} onChange={handleChange} placeholder="A seamless safari and beach journey designed for comfort and wildlife sightings." />
        </Field>

        <Field label="Themes" hint="Comma separated">
          <Input name="themes" value={formData.themes} onChange={handleChange} placeholder="Luxury, Honeymoon, Wildlife, Adventure" />
        </Field>

        <Field label="Best For" hint="Target audience (comma separated)">
          <Input name="bestFor" value={formData.bestFor} onChange={handleChange} placeholder="Couples, Families, Friends" />
        </Field>
      </div>

      <Field label="Short Description" hint="1–2 lines shown on cards" full>
        <Textarea name="shortDescription" rows={4} value={formData.shortDescription} onChange={handleChange} placeholder="A perfect mix of Big Five safari and Zanzibar beach relaxation." />
      </Field>

      <Field label="Full Description" hint="Detailed story of the tour" full>
        <Textarea name="fullDescription" rows={8} value={formData.fullDescription} onChange={handleChange} placeholder="Describe the full experience, destinations, and what makes this tour special..." />
      </Field>

      <div className="space-y-4 rounded-2xl border border-[#e8dccb] bg-[#fffaf4] p-4">
        <div className="flex items-center justify-between gap-3">
          <div>
            <h3>Main Image (Cover Photo)</h3>
            <p>Upload the main image shown on the package page header.</p>
          </div>
          {formData.mainImage ? (
            <button type="button" onClick={removeMainImage} className="inline-flex items-center gap-2 rounded-lg border border-rose-200 bg-rose-50 px-3 py-2 text-sm font-semibold text-rose-700">
              <X size={14} />
              Remove
            </button>
          ) : null}
        </div>

        <label className="flex cursor-pointer flex-col items-center justify-center gap-3 rounded-2xl border-2 border-dashed border-[#d9c7af] bg-white px-4 py-8 text-center transition hover:border-[#8B6F47] hover:bg-[#fffdf8]">
          <Upload className="h-7 w-7 text-[#8B6F47]" />
          <div>
            <div className="text-sm font-semibold text-[#3a2d21]">{mainImageUploading ? "Uploading main image..." : "Click to upload cover image"}</div>
            <div className="mt-1 text-xs text-[#8b7b68]">JPG, PNG, WebP up to 15MB</div>
          </div>
          <input type="file" accept="image/*" className="hidden" onChange={handleMainImageUpload} />
        </label>

        {mainImagePreview || formData.mainImage ? (
          <div className="overflow-hidden  rounded-2xl border border-[#e1d4c1] bg-white shadow-sm">
            <img src={mainImagePreview || formData.mainImage} alt="Main preview" className="w-400  " />
          </div>
        ) : (
          <div className="flex items-center gap-3 rounded-2xl border border-dashed border-[#d9c7af] bg-white px-4 py-6 text-sm text-[#7a6b58]">
            <ImageIcon className="h-5 w-5 text-[#a38866]" />
            No cover image uploaded yet.
          </div>
        )}
      </div>

      <div className="space-y-4 rounded-2xl border border-[#e8dccb] bg-[#fffaf4] p-4">
        <div className="flex items-center justify-between gap-3">
          <div>
            <h3>Gallery Images</h3>
            <p>Upload multiple images to showcase destinations, wildlife, and accommodations.</p>
          </div>
          <label className="inline-flex cursor-pointer items-center gap-2 rounded-lg bg-[#8B6F47] px-3 py-2 text-sm font-semibold text-white transition hover:bg-[#6f5737]">
            <Upload size={15} />
            {galleryUploading ? "Uploading..." : "Add images"}
            <input type="file" accept="image/*" multiple className="hidden" onChange={handleGalleryUpload} />
          </label>
        </div>

        {[...parseCsv(formData.gallery), ...galleryPreviewItems.map((item) => item.previewUrl)].length > 0 ? (
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {parseCsv(formData.gallery).map((imageUrl) => (
              <div key={imageUrl} className="overflow-hidden rounded-2xl border border-[#e1d4c1] bg-white shadow-sm">
                <div className="relative">
                  <img src={imageUrl} alt="Gallery preview" className="h-44 w-full object-cover" />
                  <button type="button" onClick={() => removeGalleryImage(imageUrl)} className="absolute right-3 top-3 inline-flex h-8 w-8 items-center justify-center rounded-full bg-black/55 text-white backdrop-blur-sm transition hover:bg-black/75">
                    <Trash2 size={14} />
                  </button>
                </div>
              </div>
            ))}
            {galleryPreviewItems.map((item) => (
              <div key={item.previewUrl} className="overflow-hidden rounded-2xl border border-[#e1d4c1] bg-white shadow-sm">
                <div className="relative">
                  <img src={item.previewUrl} alt="Gallery preview" className="h-44 w-full object-cover" />
                  <button type="button" onClick={() => removePendingGalleryImage(item.previewUrl)} className="absolute right-3 top-3 inline-flex h-8 w-8 items-center justify-center rounded-full bg-black/55 text-white backdrop-blur-sm transition hover:bg-black/75">
                    <Trash2 size={14} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="flex items-center gap-3 rounded-2xl border border-dashed border-[#d9c7af] bg-white px-4 py-6 text-sm text-[#7a6b58]">
            <ImageIcon className="h-5 w-5 text-[#a38866]" />
            No gallery images uploaded yet.
          </div>
        )}
      </div>

      <Field label="Highlights" full hint="Comma separated">
        <Input name="highlights" value={formData.highlights} onChange={handleChange} placeholder="Game drives, Great Migration, Luxury stays" />
      </Field>
    </div>,

    <div key="journey" className="space-y-6">
      <div className="space-y-4 rounded-2xl border border-[#e8dccb] bg-[#fffaf4] p-4">
        <div className="flex items-center justify-between gap-3">
          <div>
            <h3 className="text-lg font-semibold text-[#3a2d21]">Destinations detailed</h3>
          </div>
          <button type="button" onClick={() => addListItem("destinationsDetailed", createDestination)} className="rounded-lg bg-[#8B6F47] px-3 py-2 text-sm font-semibold text-white">
            Add destination
          </button>
        </div>
        <div className="space-y-4">
          {formData.destinationsDetailed.map((item, index) => (
            <div key={`destination-${index}`} className="rounded-2xl border border-[#e1d4c1] bg-white p-4">
              <div className="mb-4 flex items-center justify-between gap-3">
                <h4 className="font-semibold text-[#3a2d21]">Destination {index + 1}</h4>
                <button type="button" onClick={() => removeListItem("destinationsDetailed", index)} className="text-sm font-semibold text-rose-600">
                  Remove
                </button>
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                <Field label="Destination Name" hint="City or park name">
                  <Input value={item.place} onChange={(e) => updateListItem("destinationsDetailed", index, "place", e.target.value)} placeholder="e.g. Serengeti National Park" />
                </Field>

                <Field label="Nights Stayed" hint="How many nights here">
                  <Input type="number" value={item.nights} onChange={(e) => updateListItem("destinationsDetailed", index, "nights", e.target.value)} placeholder="e.g. 3" />
                </Field>

                <Field label="Destination Description" hint="Short overview of this place" full>
                  <Textarea value={item.description} onChange={(e) => updateListItem("destinationsDetailed", index, "description", e.target.value)} placeholder="Famous for wildlife and the Great Migration..." />
                </Field>
                <Field label="Accommodation Name">
                  <Input value={item.accommodation.name} onChange={(e) => updateNestedListItem("destinationsDetailed", index, "accommodation", "name", e.target.value)} placeholder="e.g. Serengeti Migration Camp" />
                </Field>

                <Field label="Accommodation Type">
                  <Input value={item.accommodation.type} onChange={(e) => updateNestedListItem("destinationsDetailed", index, "accommodation", "type", e.target.value)} placeholder="e.g. Luxury Camp, Lodge, Hotel" />
                </Field>

                <Field label="Accommodation Highlights" hint="Comma separated" full>
                  <Input value={item.accommodation.highlights} onChange={(e) => updateNestedListItem("destinationsDetailed", index, "accommodation", "highlights", e.target.value)} placeholder="River view, Luxury tents, Wildlife nearby" />
                </Field>
                <Field label="Accommodation images" hint="Upload from computer" full>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <label className="inline-flex cursor-pointer items-center gap-2 rounded-lg bg-[#8B6F47] px-3 py-2 text-sm font-semibold text-white transition hover:bg-[#6f5737]">
                        <Upload size={15} />
                        Add images
                        <input type="file" accept="image/*" multiple className="hidden" onChange={(e) => handleDestAccommodationFiles(index, e)} />
                      </label>
                      <div className="text-xs text-[#7a6b58]">Upload from your PC to add images. Existing URLs can still be kept below.</div>
                    </div>

                    <div className="grid gap-3 sm:grid-cols-3">
                      {parseCsv(item.accommodation.images).map((url) => (
                        <div key={url} className="relative overflow-hidden rounded-lg border border-[#e1d4c1] bg-white">
                          <img src={url} className="h-28 w-full object-cover" alt="acc" />
                          <button
                            type="button"
                            onClick={() => {
                              const next = parseCsv(item.accommodation.images).filter((i) => i !== url);
                              updateNestedListItem("destinationsDetailed", index, "accommodation", "images", next.join(", "));
                            }}
                            className="absolute right-2 top-2 inline-flex h-7 w-7 items-center justify-center rounded-full bg-black/55 text-white"
                          >
                            <Trash2 size={12} />
                          </button>
                        </div>
                      ))}

                      {(destPreviewItems[index] || []).map((p) => (
                        <div key={p.previewUrl} className="relative overflow-hidden rounded-lg border border-[#e1d4c1] bg-white">
                          <img src={p.previewUrl} className="h-58 w-full object-cover" alt="preview" />
                          <button type="button" onClick={() => removeDestPendingImage(index, p.previewUrl)} className="absolute right-2 top-2 inline-flex h-7 w-7 items-center justify-center rounded-full bg-black/55 text-white">
                            <Trash2 size={12} />
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                </Field>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>,

    <div key="final" className="space-y-6">
      <div className="space-y-4 rounded-2xl border border-[#e8dccb] bg-[#fffaf4] p-4">
        <div>
          <h3 className="text-lg font-semibold text-[#3a2d21]">Inclusions</h3>
          <p className="text-sm text-[#7c6d5a]">Use the fields below. The app will create the included/excluded JSON.</p>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          <Field label="Included" hint="Comma separated" full>
            <Input value={formData.inclusionsIncluded} onChange={(e) => updateInclusions("inclusionsIncluded", e.target.value)} placeholder="Accommodation, Meals, Game drives, Park fees" />
          </Field>

          <Field label="Excluded" hint="Comma separated" full>
            <Input value={formData.inclusionsExcluded} onChange={(e) => updateInclusions("inclusionsExcluded", e.target.value)} placeholder="Flights, Visa, Insurance" />
          </Field>
        </div>
      </div>

      <div className="space-y-4 rounded-2xl border border-[#e8dccb] bg-[#fffaf4] p-4">
        <div>
          <h3 className="text-lg font-semibold text-[#3a2d21]">Getting there</h3>
          <p className="text-sm text-[#7c6d5a]">Write a short description and list the travel notes as separate entries.</p>
        </div>
        <Field label="Travel Instructions" full>
          <Textarea value={formData.gettingThereDescription} onChange={(e) => updateInclusions("gettingThereDescription", e.target.value)} placeholder="Fly into Kilimanjaro International Airport..." />
        </Field>
      </div>
      <Field label="Pricing Notes" full>
        <Textarea name="pricingNotes" value={formData.pricingNotes} onChange={handleChange} placeholder="Price changes depending on season and room category..." />
      </Field>

      <div className="flex flex-wrap items-center justify-between gap-3 rounded-xl border border-[#ebdfcf] bg-[#fffaf4] px-4 py-3">
        <label className="flex items-center gap-2 text-sm font-medium text-[#5f523f]">
          <input type="checkbox" name="isActive" checked={formData.isActive} onChange={handleChange} className="h-4 w-4" />
          Package is active
        </label>
      </div>
    </div>,
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f7efe2] via-[#fcfaf5] to-[#efe6d8] text-[#2f251c] lg:h-screen lg:overflow-hidden">
      <div className="flex min-h-screen flex-col lg:h-screen lg:flex-row lg:overflow-hidden">
        <aside className="border-b border-[#dfcfb8] bg-[#2f251c] px-5 py-6 text-white lg:sticky lg:top-0 lg:h-screen lg:w-80 lg:self-start lg:overflow-y-auto lg:border-b-0 lg:border-r lg:px-6">
          <div className="mb-6 flex items-start justify-between gap-4 lg:block">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-[#c6b08f]">Safari Manager</p>
              <h2 className="mt-2 text-2xl font-semibold">{isEditing ? "Edit Package" : "Create Package"}</h2>
              <p className="mt-2 text-sm text-white/70">Jump between steps on the left. Your entries stay in place until you save.</p>
            </div>
            <button type="button" onClick={onCancel} className="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white/10 px-3 py-2 text-sm font-semibold text-white transition hover:bg-white/15 lg:mt-5">
              <ArrowLeft size={16} />
              Back
            </button>
          </div>

          <nav className="space-y-2">
            {STEPS.map((step, index) => {
              const isActive = index === currentStep;
              const isDone = index < currentStep;
              const Icon = isDone ? CheckCircle2 : isActive ? CircleDashed : Circle;
              return (
                <button key={step.id} type="button" onClick={() => setCurrentStep(index)} className={`flex w-full items-start gap-3 rounded-2xl border px-4 py-4 text-left transition ${isActive ? "border-[#f0d6ae] bg-[#3d3125]" : "border-white/10 bg-white/5 hover:bg-white/10"}`}>
                  <Icon size={18} className={isActive ? "mt-0.5 text-[#f1c98d]" : isDone ? "mt-0.5 text-emerald-300" : "mt-0.5 text-white/45"} />
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-semibold text-white">{index + 1}. {step.title}</span>
                    </div>
                    <p className={`mt-1 text-xs ${isActive ? "text-[#f6e2c6]" : "text-white/60"}`}>{step.description}</p>
                  </div>
                </button>
              );
            })}
          </nav>
        </aside>

        <main className="flex-1 overflow-y-auto px-4 py-6 sm:px-6 lg:min-h-0 lg:px-8 lg:py-8">
          <div className="mx-auto max-w-6xl rounded-3xl border border-[#e8dccb] bg-white/92 p-5 shadow-[0_24px_80px_rgba(68,49,25,0.12)] backdrop-blur-sm sm:p-6 lg:p-8">
            <div className="mb-6 flex flex-col gap-4 border-b border-[#f0e5d6] pb-5 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#a07f4c]">Step {currentStep + 1} of {STEPS.length}</p>
                <h1 className="mt-2 text-3xl font-semibold text-[#382d22]">{STEPS[currentStep].title}</h1>
                <p className="mt-2 text-sm text-[#7d705f]">{STEPS[currentStep].description}</p>
              </div>

              <div className="rounded-2xl border border-[#ecdfcf] bg-[#fffaf4] px-4 py-3 text-sm text-[#6d604d]">{isEditing ? "Editing an existing package" : "Creating a new package"}</div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-8">
              {stepContent[currentStep]}

              <div className="flex flex-col gap-3 border-t border-[#f0e5d6] pt-5 sm:flex-row sm:items-center sm:justify-between">
                <div className="text-sm text-[#7a6b58]">You can jump between steps without losing entered data.</div>

                <div className="flex items-center gap-3">
                  <button type="button" onClick={goPrevious} disabled={currentStep === 0 || loading} className="inline-flex items-center gap-2 rounded-lg border border-[#d8c9b7] px-4 py-2 font-semibold text-[#6a5a46] transition hover:bg-[#f7f1e8] disabled:cursor-not-allowed disabled:opacity-50">
                    <ArrowLeft size={16} />
                    Previous
                  </button>

                  {currentStep < STEPS.length - 1 ? (
                    <button type="button" onClick={goNext} disabled={loading} className="inline-flex items-center gap-2 rounded-lg bg-[#8B6F47] px-4 py-2 font-semibold text-white transition hover:bg-[#6f5737] disabled:cursor-not-allowed disabled:opacity-60">
                      Next
                      <ArrowRight size={16} />
                    </button>
                  ) : (
                    <button type="submit" disabled={loading} className="inline-flex items-center gap-2 rounded-lg bg-[#8B6F47] px-5 py-2 font-semibold text-white transition hover:bg-[#6f5737] disabled:cursor-not-allowed disabled:opacity-60">
                      {loading ? (isEditing ? "Updating..." : "Creating...") : isEditing ? "Update Package" : "Create Package"}
                    </button>
                  )}
                </div>
              </div>
            </form>
          </div>
        </main>
      </div>
    </div>
  );
}
