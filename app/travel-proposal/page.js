'use client';
import { useRouter } from "next/navigation";
import { useMemo, useState } from 'react';
import Link from 'next/link';
import toast from 'react-hot-toast';
import { Country } from 'country-state-city';
import { useCreateTravelProposalMutation } from '../redux/features/siteSetiing/travelProposal/TravelProposalApi';
import {
  FaArrowLeft,
  FaAward,
  FaCalendar,
  FaCheck,
  FaClock,
  FaEnvelope,
  FaHeadset,
  FaMapMarkerAlt,
  FaPhone,
  FaShieldAlt,
  FaStar,
  FaUser
} from 'react-icons/fa';
import { redirect } from 'next/navigation';

const COLORS = {
  primary: '#8B6F47',
  primaryDark: '#324120',
  panel: '#f8f6f1',
  text: '#273023',
  muted: '#64725d'
};

const DESTINATION_OPTIONS = [
  'ZANZIBAR',
  'KILIMANJARO',
  'SAFARIS',
  'WILDEBEEST MIGRATION',
];

const REASON_OPTIONS = [
  { value: 'big5', label: 'Big 5 Safari' },
  { value: 'migration', label: 'Great Migration' },
  { value: 'family', label: 'Family Safari' },
  { value: 'honeymoon', label: 'Honeymoon' },
  { value: 'beach', label: 'Bush & Beach' },
  { value: 'friends', label: 'Trip with friends' },
  { value: 'adventure', label: 'Adventure' },
  { value: 'wellness', label: 'Wellness' }
];

export default function TravelProposalPage() {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});
  const [createTravelProposal] = useCreateTravelProposalMutation();
  const [formData, setFormData] = useState({
    destinationKnowledge: '',
    destination: '',
    reasons: [],
    tripDuration: 10,
    arrivalDate: '',
    travelWith: '',
    adults: 2,
    children: 0,
    budget: 4500,
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    whatsapp: '',
    country: 'United States',
    notes: '',
    newsletter: false
  });

  const countryOptions = useMemo(
    () => Country.getAllCountries().map((country) => country.name).sort((firstCountry, secondCountry) => firstCountry.localeCompare(secondCountry)),
    []
  );

  const steps = useMemo(
    () => [
      { number: 1, title: 'Destination', icon: FaMapMarkerAlt },
      { number: 2, title: 'Travel Style', icon: FaStar },
      { number: 3, title: 'Trip Details', icon: FaCalendar },
      { number: 4, title: 'Contact', icon: FaEnvelope }
    ],
    []
  );

  const toggleArrayValue = (field, value) => {
    setFormData((prev) => {
      const currentValues = [...prev[field]];
      const index = currentValues.indexOf(value);

      if (index > -1) {
        currentValues.splice(index, 1);
      } else {
        currentValues.push(value);
      }

      return { ...prev, [field]: currentValues };
    });
  };

  const validateStep = (step) => {
    const nextErrors = {};

    if (step === 1) {
      if (!formData.destinationKnowledge) {
        nextErrors.destinationKnowledge = 'Choose one option to continue';
      }
      if (formData.destinationKnowledge === 'yes' && !formData.destination) {
        nextErrors.destination = 'Select a destination';
      }
    }

    if (step === 2) {
      if (formData.reasons.length === 0) {
        nextErrors.reasons = 'Select at least one reason';
      }
    }

    if (step === 3) {
      if (!formData.arrivalDate) {
        nextErrors.arrivalDate = 'Select an arrival date';
      }
      if (!formData.travelWith) {
        nextErrors.travelWith = 'Select who you are traveling with';
      }
    }

    if (step === 4) {
      if (!formData.firstName.trim()) nextErrors.firstName = 'First name is required';
      if (!formData.lastName.trim()) nextErrors.lastName = 'Last name is required';
      if (!formData.email.trim()) {
        nextErrors.email = 'Email is required';
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
        nextErrors.email = 'Please enter a valid email address';
      }
      if (!formData.phone.trim()) nextErrors.phone = 'Phone number is required';
      if (!formData.whatsapp.trim()) nextErrors.whatsapp = 'WhatsApp number is required';
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep(currentStep)) {
      setCurrentStep((prev) => Math.min(prev + 1, 4));
    }
  };

  const handleBack = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1));
  };

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;

    if (type === 'checkbox') {
      setFormData((prev) => ({ ...prev, [name]: checked }));
      return;
    }

    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleNumberChange = (field, change) => {
    setFormData((prev) => {
      const currentValue = Number(prev[field]) || 0;
      const nextValue = Math.max(0, Math.min(10, currentValue + change));
      return { ...prev, [field]: nextValue };
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!validateStep(4)) return;

    setIsSubmitting(true);

    try {
      const payload = {
        ...formData,
        // keep backward compatibility with older backend key
        wattsapp: formData.whatsapp,
      };
      console.log('[TravelProposal][Frontend] submitting payload:', payload);
      console.log('[TravelProposal][Frontend] endpoint:', '/travel-proposals');
      const result = await createTravelProposal(payload).unwrap();
      console.log('[TravelProposal][Frontend] response:', result);

      if (!result?.success) {
        throw new Error(result?.message || 'Failed to submit request');
      }

      toast.success('Your itinerary request has been sent. We will contact you within 24 hours.');
      setFormData({
        destinationKnowledge: '',
        destination: '',
        reasons: [],
        tripDuration: 10,
        arrivalDate: '',
        travelWith: '',
        adults: 2,
        children: 0,
        budget: 4500,
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        whatsapp: '',
        country: 'United States',
        notes: '',
        newsletter: false
      });
      router.replace('/');
      setErrors({});
     
    } catch (error) {
      toast.error(error?.message || 'There was an error submitting your request. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const renderError = (fieldName) =>
    errors[fieldName] ? <div className="mt-2 text-sm text-red-500">{errors[fieldName]}</div> : null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f7f5ef] via-white to-[#eef3ea] text-gray-900">
      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <div className="mb-6 flex items-center justify-between gap-4 rounded-2xl border border-[#e7e0d5] bg-white/90 px-4 py-3 shadow-sm backdrop-blur">
          <Link href="/" className="flex items-center gap-2 text-sm font-semibold text-gray-600 transition-colors hover:text-[#8B6F47]">
            <FaArrowLeft />
            Back to home
          </Link>
          <div className="text-right">
            <div className="text-sm font-semibold uppercase tracking-[0.2em] text-[#8B6F47]">Itinerary Request</div>
            <div className="text-sm text-gray-500">Fast, guided safari planning</div>
          </div>
        </div>

        <div className="mb-10 ml-26  flex flex-wrap items-center justify-start gap-4 sm:gap-6">
          {steps.map((step, index) => {
            const StepIcon = step.icon;
            const isActive = currentStep >= step.number;

            return (
              <div key={step.number} className="flex items-center gap-4">
                <div className={`flex flex-col items-center transition-all duration-300 ${isActive ? 'text-[#8B6F47]' : 'text-gray-400'}`}>
                  <div className={`flex h-14 w-14 items-center justify-center rounded-full border-2 transition-all ${isActive ? 'border-[#8B6F47] bg-[#8B6F47] text-white shadow-lg' : 'border-gray-300 bg-white'}`}>
                    {currentStep > step.number ? <FaCheck className="h-5 w-5" /> : <StepIcon className="h-5 w-5" />}
                  </div>
                  <span className="mt-3 hidden text-sm font-medium sm:block">{step.title}</span>
                </div>
                {index < steps.length - 1 && <div className={`h-1 w-12 rounded-full sm:w-20 ${currentStep > step.number ? 'bg-[#8B6F47]' : 'bg-gray-300'}`} />}
              </div>
            );
          })}
          
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-4 mt-8">
          <div className="lg:col-span-3">
            <div className="overflow-hidden rounded-3xl border border-[#e7e0d5] bg-white shadow-[0_20px_80px_rgba(34,40,28,0.08)]">
              <div className="border-b border-[#ebe4d8] bg-[#8B6F47] px-6 py-8 text-white sm:px-8">
                <h1 className="text-3xl font-bold sm:text-4xl">Your African safari starts here</h1>
                <p className="mt-3 max-w-2xl text-base text-white/90 sm:text-lg">
                  Answer a few short questions and our travel team will shape a trip around your interests, timing, and budget.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="px-6 py-8 sm:px-8">
                {currentStep === 1 && (
                  <section className="space-y-8">
                    <div>
                      <h2 className="text-2xl font-bold text-gray-900">Do you know where you want to travel to?</h2>
                      <p className="mt-2 text-gray-600">Choose the option that best matches where you are in the planning process.</p>
                    </div>

                    <div className="grid gap-4 md:grid-cols-3">
                      {[
                        { value: 'yes', label: 'Yes, I do!' },
                        { value: 'idea', label: 'I have an idea, need advice' },
                        { value: 'no', label: 'No - Help me decide!' }
                      ].map((option) => (
                        <button
                          key={option.value}
                          type="button"
                          onClick={() => setFormData((prev) => ({ ...prev, destinationKnowledge: option.value, destination: option.value === 'no' ? '' : prev.destination }))}
                          className={`rounded-2xl border-2 px-5 py-5 text-left text-lg font-semibold transition-all hover:-translate-y-0.5 hover:shadow-md ${formData.destinationKnowledge === option.value ? 'border-[#8B6F47] bg-[#f7f2ea] text-[#8B6F47]' : 'border-gray-200 bg-white text-gray-700'}`}
                        >
                          {option.label}
                        </button>
                      ))}
                    </div>
                    {renderError('destinationKnowledge')}

                    {formData.destinationKnowledge === 'yes' && (
                      <div>
                        <label className="mb-3 block text-lg font-semibold text-gray-900">Where in Africa would you like to go?</label>
                        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 xl:grid-cols-4">
                          {DESTINATION_OPTIONS.map((destination) => (
                            <button
                              key={destination}
                              type="button"
                              onClick={() => setFormData((prev) => ({ ...prev, destination }))}
                              className={`rounded-2xl border px-4 py-3 text-left text-sm font-semibold transition-all ${formData.destination === destination ? 'border-[#8B6F47] bg-[#8B6F47] text-white shadow-md' : 'border-gray-200 bg-white text-gray-700 hover:border-gray-300'}`}
                            >
                              {destination}
                            </button>
                          ))}
                        </div>
                        {renderError('destination')}
                      </div>
                    )}
                  </section>
                )}

                {currentStep === 2 && (
                  <section className="space-y-8">
                    <div>
                      <h2 className="text-2xl font-bold text-gray-900">Why are you coming to Africa?</h2>
                      <p className="mt-2 text-gray-600">You can select more than one option so we can tailor the trip properly.</p>
                    </div>

                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
                      {REASON_OPTIONS.map((option) => {
                        const isSelected = formData.reasons.includes(option.value);

                        return (
                          <button
                            key={option.value}
                            type="button"
                            onClick={() => toggleArrayValue('reasons', option.value)}
                            className={`relative rounded-2xl border-2 px-5 py-5 text-left text-lg font-semibold transition-all hover:-translate-y-0.5 hover:shadow-md ${isSelected ? 'border-[#8B6F47] bg-[#f7f2ea] text-[#8B6F47]' : 'border-gray-200 bg-white text-gray-700'}`}
                          >
                            {option.label}
                            {isSelected && <FaCheck className="absolute right-4 top-4 h-4 w-4 text-[#8B6F47]" />}
                          </button>
                        );
                      })}
                    </div>
                    {renderError('reasons')}
                  </section>
                )}

                {currentStep === 3 && (
                  <section className="space-y-8">
                    <div>
                      <h2 className="text-2xl font-bold text-gray-900">Tell us a little more about the trip</h2>
                      <p className="mt-2 text-gray-600">These details help us match your itinerary to the right properties and timing.</p>
                    </div>

                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                      <div className="rounded-2xl bg-[#faf8f3] p-5">
                        <label className="mb-3 block text-base font-semibold text-gray-900">Preferred arrival date *</label>
                        <input
                          type="date"
                          name="arrivalDate"
                          value={formData.arrivalDate}
                          onChange={handleChange}
                          className="w-full rounded-xl border border-gray-300 bg-white p-4 text-base focus:border-[#8B6F47] focus:ring-2 focus:ring-[#8B6F47]/20"
                        />
                        {renderError('arrivalDate')}
                      </div>

                      <div className="rounded-2xl bg-[#faf8f3] p-5">
                        <label className="mb-3 block text-base font-semibold text-gray-900">Trip duration: {formData.tripDuration} days</label>
                        <input
                          type="range"
                          min="3"
                          max="21"
                          value={formData.tripDuration}
                          onChange={(event) => setFormData((prev) => ({ ...prev, tripDuration: Number(event.target.value) }))}
                          className="w-full accent-[#8B6F47]"
                        />
                        <div className="mt-3 flex justify-between text-sm text-gray-500">
                          <span>3 days</span>
                          <span>Recommended 10-14 days</span>
                          <span>21+ days</span>
                        </div>
                      </div>

                      <div className="rounded-2xl bg-[#faf8f3] p-5">
                        <label className="mb-3 block text-base font-semibold text-gray-900">Who are you traveling with? *</label>
                        <div className="grid grid-cols-2 gap-3 md:grid-cols-3">
                          {['Couple', 'Family', 'Solo', 'Friends', 'Honeymoon', 'Other'].map((item) => (
                            <button
                              key={item}
                              type="button"
                              onClick={() => setFormData((prev) => ({ ...prev, travelWith: item }))}
                              className={`rounded-xl border px-3 py-3 text-sm font-semibold transition-all ${formData.travelWith === item ? 'border-[#8B6F47] bg-[#8B6F47] text-white' : 'border-gray-200 bg-white text-gray-700'}`}
                            >
                              {item}
                            </button>
                          ))}
                        </div>
                        {renderError('travelWith')}
                      </div>

                      <div className="rounded-2xl bg-[#faf8f3] p-5">
                        <label className="mb-3 block text-base font-semibold text-gray-900">Budget range: ${formData.budget.toLocaleString()} per person</label>
                        <input
                          type="range"
                          min="1500"
                          max="7500"
                          step="500"
                          value={formData.budget}
                          onChange={(event) => setFormData((prev) => ({ ...prev, budget: Number(event.target.value) }))}
                          className="w-full accent-[#8B6F47]"
                        />
                        <div className="mt-3 flex justify-between text-sm text-gray-500">
                          <span>$1,500</span>
                          <span>Mid-range $3,000-5,000</span>
                          <span>$7,500+</span>
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                      <div className="rounded-2xl bg-[#faf8f3] p-5">
                        <label className="mb-3 block text-base font-semibold text-gray-900">Adults</label>
                        <div className="flex items-center justify-between rounded-xl border border-gray-200 bg-white p-3">
                          <button type="button" onClick={() => handleNumberChange('adults', -1)} disabled={formData.adults <= 1} className="h-10 w-10 rounded-full border border-gray-300 text-xl font-bold text-gray-700 disabled:opacity-40">
                            -
                          </button>
                          <span className="text-2xl font-bold text-gray-900">{formData.adults}</span>
                          <button type="button" onClick={() => handleNumberChange('adults', 1)} disabled={formData.adults >= 10} className="h-10 w-10 rounded-full border border-gray-300 text-xl font-bold text-gray-700 disabled:opacity-40">
                            +
                          </button>
                        </div>
                      </div>

                      <div className="rounded-2xl bg-[#faf8f3] p-5">
                        <label className="mb-3 block text-base font-semibold text-gray-900">Children</label>
                        <div className="flex items-center justify-between rounded-xl border border-gray-200 bg-white p-3">
                          <button type="button" onClick={() => handleNumberChange('children', -1)} disabled={formData.children <= 0} className="h-10 w-10 rounded-full border border-gray-300 text-xl font-bold text-gray-700 disabled:opacity-40">
                            -
                          </button>
                          <span className="text-2xl font-bold text-gray-900">{formData.children}</span>
                          <button type="button" onClick={() => handleNumberChange('children', 1)} disabled={formData.children >= 10} className="h-10 w-10 rounded-full border border-gray-300 text-xl font-bold text-gray-700 disabled:opacity-40">
                            +
                          </button>
                        </div>
                      </div>
                    </div>
                  </section>
                )}

                {currentStep === 4 && (
                  <section className="space-y-8">
                    <div>
                      <h2 className="text-2xl font-bold text-gray-900">Your personal details</h2>
                      <p className="mt-2 text-gray-600">We'll use these to send your tailored itinerary and next steps.</p>
                    </div>

                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                      <div>
                        <label className="mb-2 block text-sm font-semibold text-gray-700">First name *</label>
                        <input
                          type="text"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleChange}
                          className="w-full rounded-xl border border-gray-300 p-4 focus:border-[#8B6F47] focus:ring-2 focus:ring-[#8B6F47]/20"
                        />
                        {renderError('firstName')}
                      </div>
                      <div>
                        <label className="mb-2 block text-sm font-semibold text-gray-700">Last name *</label>
                        <input
                          type="text"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleChange}
                          className="w-full rounded-xl border border-gray-300 p-4 focus:border-[#8B6F47] focus:ring-2 focus:ring-[#8B6F47]/20"
                        />
                        {renderError('lastName')}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                      <div>
                        <label className="mb-2 block text-sm font-semibold text-gray-700">Email address *</label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full rounded-xl border border-gray-300 p-4 focus:border-[#8B6F47] focus:ring-2 focus:ring-[#8B6F47]/20"
                        />
                        {renderError('email')}
                      </div>
                      <div>
                        <label className="mb-2 block text-sm font-semibold text-gray-700">Phone number *</label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full rounded-xl border border-gray-300 p-4 focus:border-[#8B6F47] focus:ring-2 focus:ring-[#8B6F47]/20"
                        />
                        {renderError('phone')}
                      </div>
                        <div>
                        <label className="mb-2 block text-sm font-semibold text-gray-700">WhatsApp number *</label>
                        <input
                          type="tel"
                          name="whatsapp"
                          value={formData.whatsapp}
                          onChange={handleChange}
                          className="w-full rounded-xl border border-gray-300 p-4 focus:border-[#8B6F47] focus:ring-2 focus:ring-[#8B6F47]/20"
                        />
                        {renderError('whatsapp')}
                      </div>
                    </div>

                    <div>
                      <label className="mb-2 block text-sm font-semibold text-gray-700">Country</label>
                      <select
                        name="country"
                        value={formData.country}
                        onChange={handleChange}
                        className="w-full rounded-xl border border-gray-300 p-4 focus:border-[#8B6F47] focus:ring-2 focus:ring-[#8B6F47]/20"
                      >
                        {countryOptions.map((country) => (
                          <option key={country} value={country}>
                            {country}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="mb-2 block text-sm font-semibold text-gray-700">Additional notes</label>
                      <textarea
                        name="notes"
                        value={formData.notes}
                        onChange={handleChange}
                        rows="5"
                        className="w-full rounded-xl border border-gray-300 p-4 focus:border-[#8B6F47] focus:ring-2 focus:ring-[#8B6F47]/20"
                        placeholder="Tell us anything else that would help us tailor the trip."
                      />
                    </div>

                    <label className="flex items-start gap-4 rounded-2xl bg-[#faf8f3] p-4">
                      <input
                        type="checkbox"
                        name="newsletter"
                        checked={formData.newsletter}
                        onChange={handleChange}
                        className="mt-1 h-5 w-5 rounded border-gray-300 text-[#8B6F47] focus:ring-[#8B6F47]"
                      />
                      <div>
                        <div className="font-semibold text-gray-900">Receive safari inspiration</div>
                        <div className="mt-1 text-sm text-gray-600">Get travel tips, new packages, and special offers.</div>
                      </div>
                    </label>
                  </section>
                )}

                <div className="mt-10 flex flex-col-reverse gap-4 border-t border-gray-200 pt-8 sm:flex-row sm:justify-between">
                  <button
                    type="button"
                    onClick={handleBack}
                    disabled={currentStep === 1}
                    className="rounded-xl border border-gray-300 px-6 py-4 font-semibold text-gray-700 transition-colors hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    Back
                  </button>

                  {currentStep < 4 ? (
                    <button
                      type="button"
                      onClick={handleNext}
                      className="rounded-xl bg-[#8B6F47] px-6 py-4 font-semibold text-white shadow-lg transition-colors hover:bg-[#324120]"
                    >
                      Next
                    </button>
                  ) : (
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="rounded-xl bg-[#8B6F47] px-6 py-4 font-semibold text-white shadow-lg transition-colors hover:bg-[#324120] disabled:cursor-not-allowed disabled:opacity-70"
                    >
                      {isSubmitting ? 'Submitting...' : 'Submit Request'}
                    </button>
                  )}
                </div>
              </form>
            </div>
          </div>

          <aside className="lg:col-span-1">
            <div className="sticky top-6 space-y-6">
              <div className="rounded-3xl border border-[#e7e0d5] bg-white p-6 shadow-lg">
                <h3 className="text-xl font-bold text-gray-900">Why choose us?</h3>
                <div className="mt-6 space-y-4">
                  {[
                    { icon: FaAward, title: '15+ Years Local Expertise' },
                    { icon: FaShieldAlt, title: 'Best Price Guarantee' },
                    { icon: FaHeadset, title: '24/7 Travel Support' },
                    { icon: FaClock, title: '24-Hour Response Time' },
                    { icon: FaStar, title: '4.9/5 Customer Rating' }
                  ].map((item, index) => {
                    const Icon = item.icon;
                    return (
                      <div key={index} className="flex items-center gap-4">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#f5efe6] text-[#8B6F47]">
                          <Icon className="h-5 w-5" />
                        </div>
                        <span className="text-sm font-medium text-gray-700">{item.title}</span>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="rounded-3xl bg-[#8B6F47] p-6 text-white shadow-lg">
                <h3 className="text-xl font-bold">Get in touch</h3>
                <div className="mt-5 space-y-4">
                  <div className="flex items-center gap-4 rounded-2xl bg-white/10 p-3">
                    <FaPhone className="h-5 w-5 text-[#f3e5c8]" />
                    <div>
                      <div className="font-semibold">+255 784 123 456</div>
                      <div className="text-sm text-white/80">Call us anytime</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 rounded-2xl bg-white/10 p-3">
                    <FaEnvelope className="h-5 w-5 text-[#f3e5c8]" />
                    <div>
                      <div className="font-semibold">info@safaritripbooking.com</div>
                      <div className="text-sm text-white/80">Email us</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 rounded-2xl bg-white/10 p-3">
                    <FaMapMarkerAlt className="h-5 w-5 text-[#f3e5c8]" />
                    <div>
                      <div className="font-semibold">Arusha, Tanzania</div>
                      <div className="text-sm text-white/80">Our headquarters</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
