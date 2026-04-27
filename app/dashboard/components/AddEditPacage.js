"use client";

import { useEffect, useMemo, useState } from "react";
import { toast } from "react-hot-toast";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Circle,
  CircleDashed,
} from "lucide-react";
import {
  useCreatePackageMutation,
  useUpdatePackageMutation,
} from "../../redux/features/admin/PackageApi";

const CATEGORY_OPTIONS = ["SAFARIS", "WILDEBEEST", "KILIMANJARO", "ZANZIBAR"];

const STEPS = [
  {
    id: "basic",
    title: "Basics",
    description: "Core package identity and commercial info",
  },
  {
    id: "story",
    title: "Story",
    description: "Description, style, and experience",
  },
  {
    id: "media",
    title: "Media",
    description: "Images, highlights, and destination lists",
  },
  {
    id: "itinerary",
    title: "Itinerary",
    description: "Route, day-by-day plan, and logistics",
  },
  {
    id: "advanced",
    title: "Advanced",
    description: "Pricing tables, inclusions, and visibility",
  },
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

function parseJsonField(text, fallback, label) {
  if (!text || !text.trim()) return fallback;
  try {
    return JSON.parse(text);
  } catch (error) {
    throw new Error(`${label} must be valid JSON`);
  }
}

function buildInitialState(data) {
  const route = data?.route || { start: "", end: "", days: [] };
  const activitiesTransportation = data?.activitiesTransportation || {
    activities: [],
    vehicle: "",
    transfer: "",
  };
  const accommodationMeals = data?.accommodationMeals || {
    note: "",
    schedule: [],
  };
  const inclusions = data?.inclusions || { included: [], excluded: [] };
  const rates = data?.rates || { disclaimer: "", pricing: [] };
  const gettingThere = data?.gettingThere || { description: "", details: [] };

  return {
    name: data?.name || "",
    category: data?.category || "SAFARIS",
    offeredBy: data?.offeredBy || "",
    tourOperator: data?.tourOperator || "",
    rating: data?.rating?.toString() || "",
    reviewCount: data?.reviewCount?.toString() || "",
    shortDescription: data?.shortDescription || "",
    fullDescription: data?.fullDescription || "",
    duration: data?.duration?.toString() || "",
    price: data?.price?.toString() || "",
    startingFrom: data?.startingFrom || "",
    comfortLevel: data?.comfortLevel || "",
    tourType: data?.tourType || "",
    safariType: data?.safariType || "",
    image: data?.image || "",
    specializedTours: toCsv(data?.specializedTours),
    features: toCsv(data?.features),
    gallery: toCsv(data?.gallery),
    highlights: toCsv(data?.highlights),
    destinations: toCsv(data?.destinations),
    tourFeatures: toCsv(data?.tourFeatures),
    routeJson: JSON.stringify(route, null, 2),
    activitiesTransportationJson: JSON.stringify(activitiesTransportation, null, 2),
    accommodationMealsJson: JSON.stringify(accommodationMeals, null, 2),
    dayByDayJson: JSON.stringify(data?.dayByDay || [], null, 2),
    ratesJson: JSON.stringify(rates, null, 2),
    inclusionsJson: JSON.stringify(inclusions, null, 2),
    gettingThereJson: JSON.stringify(gettingThere, null, 2),
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
  return (
    <input
      {...props}
      className={`w-full rounded-lg border border-[#dcccba] bg-white px-3 py-2 outline-none transition focus:border-[#8B6F47] focus:ring-2 focus:ring-[#8B6F47]/15 ${props.className || ""}`}
    />
  );
}

function Textarea(props) {
  return (
    <textarea
      {...props}
      className={`w-full rounded-lg border border-[#dcccba] bg-white px-3 py-2 outline-none transition focus:border-[#8B6F47] focus:ring-2 focus:ring-[#8B6F47]/15 ${props.className || ""}`}
    />
  );
}

export default function AddEditPacage({ initialData, onCancel, onSuccess }) {
  const isEditing = Boolean(initialData?._id);
  const [createPackage, { isLoading: creating }] = useCreatePackageMutation();
  const [updatePackage, { isLoading: updating }] = useUpdatePackageMutation();

  const [formData, setFormData] = useState(buildInitialState(initialData));
  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    setFormData(buildInitialState(initialData));
    setCurrentStep(0);
  }, [initialData]);

  const loading = creating || updating;

  const payloadPreview = useMemo(() => {
    try {
      return {
        name: formData.name,
        category: formData.category,
        duration: formData.duration ? Number(formData.duration) : undefined,
        price: formData.price ? Number(formData.price) : undefined,
        isActive: formData.isActive,
      };
    } catch {
      return null;
    }
  }, [formData]);

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const goNext = () => {
    if (currentStep === 0) {
      if (!formData.name.trim()) {
        toast.error("Package name is required");
        return;
      }
      if (!formData.category) {
        toast.error("Category is required");
        return;
      }
    }

    setCurrentStep((step) => Math.min(STEPS.length - 1, step + 1));
  };

  const goPrevious = () => {
    setCurrentStep((step) => Math.max(0, step - 1));
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

    let payload;
    try {
      payload = {
        name: formData.name.trim(),
        category: formData.category,
        offeredBy: formData.offeredBy.trim() || undefined,
        tourOperator: formData.tourOperator.trim() || undefined,
        rating: formData.rating ? Number(formData.rating) : undefined,
        reviewCount: formData.reviewCount ? Number(formData.reviewCount) : undefined,
        shortDescription: formData.shortDescription.trim() || undefined,
        fullDescription: formData.fullDescription.trim() || undefined,
        duration: formData.duration ? Number(formData.duration) : undefined,
        price: formData.price ? Number(formData.price) : undefined,
        startingFrom: formData.startingFrom.trim() || undefined,
        comfortLevel: formData.comfortLevel.trim() || undefined,
        tourType: formData.tourType.trim() || undefined,
        safariType: formData.safariType.trim() || undefined,
        image: formData.image.trim() || undefined,
        specializedTours: parseCsv(formData.specializedTours),
        features: parseCsv(formData.features),
        gallery: parseCsv(formData.gallery),
        highlights: parseCsv(formData.highlights),
        destinations: parseCsv(formData.destinations),
        tourFeatures: parseCsv(formData.tourFeatures),
        route: parseJsonField(formData.routeJson, { start: "", end: "", days: [] }, "Route"),
        activitiesTransportation: parseJsonField(
          formData.activitiesTransportationJson,
          { activities: [], vehicle: "", transfer: "" },
          "Activities & transportation"
        ),
        accommodationMeals: parseJsonField(
          formData.accommodationMealsJson,
          { note: "", schedule: [] },
          "Accommodation & meals"
        ),
        dayByDay: parseJsonField(formData.dayByDayJson, [], "Day by day"),
        rates: parseJsonField(formData.ratesJson, { disclaimer: "", pricing: [] }, "Rates"),
        inclusions: parseJsonField(
          formData.inclusionsJson,
          { included: [], excluded: [] },
          "Inclusions"
        ),
        gettingThere: parseJsonField(
          formData.gettingThereJson,
          { description: "", details: [] },
          "Getting there"
        ),
        isActive: Boolean(formData.isActive),
        createdByAdmin: true,
      };
    } catch (error) {
      toast.error(error.message || "Please fix invalid JSON fields");
      return;
    }

    try {
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
    }
  };

  const stepContent = [
    <div key="basic" className="space-y-6">
      <div className="grid gap-4 md:grid-cols-2">
        <Field label="Package Name *">
          <Input
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="e.g. Big Five Safari Adventure"
          />
        </Field>

        <Field label="Category *">
          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="w-full rounded-lg border border-[#dcccba] bg-white px-3 py-2 outline-none transition focus:border-[#8B6F47] focus:ring-2 focus:ring-[#8B6F47]/15"
          >
            {CATEGORY_OPTIONS.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </Field>

        <Field label="Duration (days)">
          <Input type="number" name="duration" value={formData.duration} onChange={handleChange} />
        </Field>

        <Field label="Price">
          <Input type="number" name="price" value={formData.price} onChange={handleChange} />
        </Field>

        <Field label="Starting From">
          <Input name="startingFrom" value={formData.startingFrom} onChange={handleChange} />
        </Field>

        <Field label="Offered By">
          <Input name="offeredBy" value={formData.offeredBy} onChange={handleChange} />
        </Field>

        <Field label="Tour Operator">
          <Input name="tourOperator" value={formData.tourOperator} onChange={handleChange} />
        </Field>

        <Field label="Rating">
          <Input type="number" step="0.1" name="rating" value={formData.rating} onChange={handleChange} />
        </Field>

        <Field label="Review Count">
          <Input type="number" name="reviewCount" value={formData.reviewCount} onChange={handleChange} />
        </Field>
      </div>
    </div>,
    <div key="story" className="space-y-6">
      <div className="grid gap-4 md:grid-cols-2">
        <Field label="Comfort Level">
          <Input name="comfortLevel" value={formData.comfortLevel} onChange={handleChange} />
        </Field>

        <Field label="Tour Type">
          <Input name="tourType" value={formData.tourType} onChange={handleChange} />
        </Field>

        <Field label="Safari Type">
          <Input name="safariType" value={formData.safariType} onChange={handleChange} />
        </Field>
      </div>

      <Field label="Short Description" full>
        <Textarea
          name="shortDescription"
          value={formData.shortDescription}
          onChange={handleChange}
          className="min-h-24"
        />
      </Field>

      <Field label="Full Description" full>
        <Textarea
          name="fullDescription"
          value={formData.fullDescription}
          onChange={handleChange}
          className="min-h-40"
        />
      </Field>
    </div>,
    <div key="media" className="space-y-6">
      <div className="grid gap-4 md:grid-cols-2">
        <Field label="Main Image URL" full>
          <Input name="image" value={formData.image} onChange={handleChange} />
        </Field>

        <Field label="Gallery Images" full hint="Comma separated URLs">
          <Input name="gallery" value={formData.gallery} onChange={handleChange} />
        </Field>

        <Field label="Highlights" full hint="Comma separated">
          <Input name="highlights" value={formData.highlights} onChange={handleChange} />
        </Field>

        <Field label="Destinations" full hint="Comma separated">
          <Input name="destinations" value={formData.destinations} onChange={handleChange} />
        </Field>

        <Field label="Specialized Tours" full hint="Comma separated">
          <Input name="specializedTours" value={formData.specializedTours} onChange={handleChange} />
        </Field>

        <Field label="Features" full hint="Comma separated">
          <Input name="features" value={formData.features} onChange={handleChange} />
        </Field>

        <Field label="Tour Features" full hint="Comma separated">
          <Input name="tourFeatures" value={formData.tourFeatures} onChange={handleChange} />
        </Field>
      </div>
    </div>,
    <div key="itinerary" className="space-y-6">
      <Field label="Route JSON" full hint="start, end, days">
        <Textarea
          name="routeJson"
          value={formData.routeJson}
          onChange={handleChange}
          className="min-h-44 font-mono text-sm"
        />
      </Field>

      <Field label="Day By Day JSON" full hint="array of daily itinerary objects">
        <Textarea
          name="dayByDayJson"
          value={formData.dayByDayJson}
          onChange={handleChange}
          className="min-h-52 font-mono text-sm"
        />
      </Field>

      <Field label="Activities & Transportation JSON" full>
        <Textarea
          name="activitiesTransportationJson"
          value={formData.activitiesTransportationJson}
          onChange={handleChange}
          className="min-h-36 font-mono text-sm"
        />
      </Field>

      <Field label="Accommodation & Meals JSON" full>
        <Textarea
          name="accommodationMealsJson"
          value={formData.accommodationMealsJson}
          onChange={handleChange}
          className="min-h-36 font-mono text-sm"
        />
      </Field>
    </div>,
    <div key="advanced" className="space-y-6">
      <Field label="Rates JSON" full>
        <Textarea
          name="ratesJson"
          value={formData.ratesJson}
          onChange={handleChange}
          className="min-h-36 font-mono text-sm"
        />
      </Field>

      <Field label="Inclusions JSON" full>
        <Textarea
          name="inclusionsJson"
          value={formData.inclusionsJson}
          onChange={handleChange}
          className="min-h-32 font-mono text-sm"
        />
      </Field>

      <Field label="Getting There JSON" full>
        <Textarea
          name="gettingThereJson"
          value={formData.gettingThereJson}
          onChange={handleChange}
          className="min-h-32 font-mono text-sm"
        />
      </Field>

      <div className="flex items-center justify-between rounded-xl border border-[#ebdfcf] bg-[#fffaf4] px-4 py-3">
        <label className="flex items-center gap-2 text-sm font-medium text-[#5f523f]">
          <input
            type="checkbox"
            name="isActive"
            checked={formData.isActive}
            onChange={handleChange}
            className="h-4 w-4"
          />
          Package is active
        </label>

        <div className="text-xs text-[#8a7a67]">
          Preview: {payloadPreview ? JSON.stringify(payloadPreview) : "N/A"}
        </div>
      </div>
    </div>,
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f7efe2] via-[#fcfaf5] to-[#efe6d8] text-[#2f251c]">
      <div className="flex min-h-screen flex-col lg:flex-row">
        <aside className="border-b border-[#dfcfb8] bg-[#2f251c] px-5 py-6 text-white lg:w-80 lg:border-b-0 lg:border-r lg:px-6">
          <div className="mb-6 flex items-start justify-between gap-4 lg:block">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-[#c6b08f]">Package Wizard</p>
              <h2 className="mt-2 text-2xl font-semibold">
                {isEditing ? "Edit Package" : "Create Package"}
              </h2>
              <p className="mt-2 text-sm text-white/70">
                Move through the sections on the left. The current step is highlighted, and you can jump to any step.
              </p>
            </div>

            <button
              type="button"
              onClick={onCancel}
              className="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white/10 px-3 py-2 text-sm font-semibold text-white transition hover:bg-white/15 lg:mt-5"
            >
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
                <button
                  key={step.id}
                  type="button"
                  onClick={() => setCurrentStep(index)}
                  className={`flex w-full items-start gap-3 rounded-2xl border px-4 py-4 text-left transition ${
                    isActive
                      ? "border-[#f0d6ae] bg-[#3d3125]"
                      : "border-white/10 bg-white/5 hover:bg-white/10"
                  }`}
                >
                  <Icon
                    size={18}
                    className={isActive ? "mt-0.5 text-[#f1c98d]" : isDone ? "mt-0.5 text-emerald-300" : "mt-0.5 text-white/45"}
                  />
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-semibold text-white">{index + 1}. {step.title}</span>
                    </div>
                    <p className={`mt-1 text-xs ${isActive ? "text-[#f6e2c6]" : "text-white/60"}`}>
                      {step.description}
                    </p>
                  </div>
                </button>
              );
            })}
          </nav>
        </aside>

        <main className="flex-1 overflow-y-auto px-4 py-6 sm:px-6 lg:px-8 lg:py-8">
          <div className="mx-auto max-w-6xl rounded-3xl border border-[#e8dccb] bg-white/92 p-5 shadow-[0_24px_80px_rgba(68,49,25,0.12)] backdrop-blur-sm sm:p-6 lg:p-8">
            <div className="mb-6 flex flex-col gap-4 border-b border-[#f0e5d6] pb-5 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#a07f4c]">
                  Step {currentStep + 1} of {STEPS.length}
                </p>
                <h1 className="mt-2 text-3xl font-semibold text-[#382d22]">
                  {STEPS[currentStep].title}
                </h1>
                <p className="mt-2 text-sm text-[#7d705f]">{STEPS[currentStep].description}</p>
              </div>

              <div className="rounded-2xl border border-[#ecdfcf] bg-[#fffaf4] px-4 py-3 text-sm text-[#6d604d]">
                {isEditing ? "Editing an existing package" : "Creating a new package"}
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-8">
              {stepContent[currentStep]}

              <div className="flex flex-col gap-3 border-t border-[#f0e5d6] pt-5 sm:flex-row sm:items-center sm:justify-between">
                <div className="text-sm text-[#7a6b58]">
                  You can jump between steps using the sidebar without losing entered data.
                </div>

                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={goPrevious}
                    disabled={currentStep === 0 || loading}
                    className="inline-flex items-center gap-2 rounded-lg border border-[#d8c9b7] px-4 py-2 font-semibold text-[#6a5a46] transition hover:bg-[#f7f1e8] disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    <ArrowLeft size={16} />
                    Previous
                  </button>

                  {currentStep < STEPS.length - 1 ? (
                    <button
                      type="button"
                      onClick={goNext}
                      disabled={loading}
                      className="inline-flex items-center gap-2 rounded-lg bg-[#8B6F47] px-4 py-2 font-semibold text-white transition hover:bg-[#6f5737] disabled:cursor-not-allowed disabled:opacity-60"
                    >
                      Next
                      <ArrowRight size={16} />
                    </button>
                  ) : (
                    <button
                      type="submit"
                      disabled={loading}
                      className="inline-flex items-center gap-2 rounded-lg bg-[#8B6F47] px-5 py-2 font-semibold text-white transition hover:bg-[#6f5737] disabled:cursor-not-allowed disabled:opacity-60"
                    >
                      {loading ? "Saving..." : isEditing ? "Update Package" : "Create Package"}
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
