// app/travel-proposal/page.js
'use client';

import { useState } from 'react';
import Link from 'next/link';
import toast from 'react-hot-toast';
import { 
  FaCheck, 
  FaCalendar, 
  FaUser, 
  FaDollarSign, 
  FaPhone, 
  FaEnvelope, 
  FaMapMarkerAlt,
  FaStar,
  FaArrowLeft,
  FaShieldAlt,
  FaClock,
  FaAward,
  FaHeadset
} from 'react-icons/fa';

// Color constants
const COLORS = {
  primary: '#465b2d',
  primaryDark: '#3a4a25',
  primaryLight: '#5a7245',
  accent: '#8a9a6d',
  light: '#f8f9f7',
  muted: '#6b7b5a',
  gold: '#d4af37'
};

export default function TravelProposalPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    // Step 1: Travel Preferences
    activities: [],
    days: 12,
    travelWith: '',
    arrivalDate: '',
    budget: 4500,
    
    // Step 2: Travelers
    adults: 2,
    children: 0,
    adultAges: ['', ''],
    
    // Step 3: Contact & Notes
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    country: 'United States',
    notes: '',
    newsletter: false,
    coupon: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const steps = [
    { number: 1, title: 'Travel Plan', icon: FaCalendar },
    { number: 2, title: 'Travelers', icon: FaUser },
    { number: 3, title: 'Contact Details', icon: FaEnvelope }
  ];

  const validateStep = (step) => {
    const newErrors = {};

    switch (step) {
      case 1:
        if (formData.activities.length === 0) {
          newErrors.activities = "Please select at least one activity";
        }
        if (!formData.arrivalDate) {
          newErrors.arrivalDate = "Please select an arrival date";
        }
        if (!formData.travelWith) {
          newErrors.travelWith = "Please select who you're traveling with";
        }
        break;

      case 2:
        if (formData.adults < 1) {
          newErrors.adults = "Please select at least 1 adult";
        }
        formData.adultAges.forEach((age, index) => {
          if (age === '' && index < formData.adults) {
            newErrors[`adultAge${index + 1}`] = "Please select age";
          }
        });
        break;

      case 3:
        if (!formData.firstName.trim()) {
          newErrors.firstName = "First name is required";
        }
        if (!formData.lastName.trim()) {
          newErrors.lastName = "Last name is required";
        }
        if (!formData.email.trim()) {
          newErrors.email = "Email is required";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
          newErrors.email = "Please enter a valid email address";
        }
        if (!formData.phone.trim()) {
          newErrors.phone = "Phone number is required";
        }
        break;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep(currentStep)) {
      setCurrentStep(prev => Math.min(prev + 1, 3));
    }
  };

  const handleBack = () => {
    setCurrentStep(prev => Math.max(prev - 1, 1));
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === 'checkbox') {
      if (name === 'activities') {
        const isChecked = e.target.checked;
        setFormData(prev => {
          const currentActivities = [...prev.activities];
          if (isChecked) {
            currentActivities.push(value);
          } else {
            const index = currentActivities.indexOf(value);
            if (index > -1) currentActivities.splice(index, 1);
          }
          return { ...prev, activities: currentActivities };
        });
      } else {
        setFormData(prev => ({ ...prev, [name]: checked }));
      }
    } else if (name.startsWith('adultAge')) {
      const index = parseInt(name.replace('adultAge', '')) - 1;
      const newAges = [...formData.adultAges];
      newAges[index] = value;
      setFormData(prev => ({ ...prev, adultAges: newAges }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleNumberChange = (field, change) => {
    const currentValue = parseInt(formData[field]) || 0;
    const newValue = Math.max(0, currentValue + change);
    
    if ((field === 'adults' || field === 'children') && newValue > 10) return;
    
    setFormData(prev => {
      let updatedData = { ...prev, [field]: newValue };
      
      if (field === 'adults') {
        const newAges = [...prev.adultAges];
        if (newValue > prev.adultAges.length) {
          for (let i = prev.adultAges.length; i < newValue; i++) {
            newAges.push('');
          }
        } else if (newValue < prev.adultAges.length) {
          newAges.splice(newValue);
        }
        updatedData.adultAges = newAges;
      }
      
      return updatedData;
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateStep(3)) return;
    
    setIsSubmitting(true);
    
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      toast.success("Your travel proposal request has been sent! We'll contact you within 24 hours.");
      
      // Reset form
      setFormData({
        activities: [],
        days: 12,
        travelWith: '',
        arrivalDate: '',
        budget: 4500,
        adults: 2,
        children: 0,
        adultAges: ['', ''],
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        country: 'United States',
        notes: '',
        newsletter: false,
        coupon: ''
      });
      setCurrentStep(1);
      
    } catch (error) {
      toast.error("There was an error submitting your request. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const renderError = (fieldName) => {
    if (errors[fieldName]) {
      return <div className="text-red-500 text-sm mt-1">{errors[fieldName]}</div>;
    }
    return null;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-emerald-50/20">
      {/* Header */}
      {/* <div className="bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link 
              href="/"
              className="flex items-center text-gray-600 hover:text-emerald-700 transition-colors font-medium"
            >
              <FaArrowLeft className="mr-2" />
              Back to Home
            </Link>
            <div className="text-right">
              <h1 className="text-2xl font-bold text-gray-900">Tanzania Specialist</h1>
              <p className="text-gray-600 text-sm">Crafting Unforgettable African Adventures</p>
            </div>
          </div>
        </div>
      </div> */}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Progress Steps */}
        <div className="mb-12">
          <div className="flex justify-center">
            {steps.map((step, index) => {
              const StepIcon = step.icon;
              return (
                <div key={step.number} className="flex items-center">
                  <div className={`flex flex-col items-center transition-all duration-300 ${
                    currentStep >= step.number ? 'text-[#465b2d]' : 'text-gray-400'
                  }`}>
                    <div className={`w-16 h-16 rounded-full flex items-center justify-center border-2 transition-all ${
                      currentStep >= step.number 
                        ? 'bg-[#465b2d] border-emerald-700 text-white shadow-lg' 
                        : 'border-gray-300 bg-white'
                    }`}>
                      {currentStep > step.number ? <FaCheck className="w-6 h-6" /> : <StepIcon className="w-6 h-6" />}
                    </div>
                    <span className="text-sm font-medium mt-3 hidden sm:block">{step.title}</span>
                    <span className="text-xs text-gray-500 mt-1 hidden sm:block">Step {step.number}</span>
                  </div>
                  {index < steps.length - 1 && (
                    <div className={`w-20 h-1 mx-4 transition-all duration-300 ${
                      currentStep > step.number ? 'bg-[#465b2d]' : 'bg-gray-300'
                    }`} />
                  )}
                </div>
              );
            })}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Form */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
              {/* Form Header */}
              <div 
                className="text-white p-8"
                style={{ backgroundColor: COLORS.primary }}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="text-3xl font-bold mb-2">Custom Safari Proposal</h2>
                    <p className="text-emerald-100 text-lg">
                      Let us craft your perfect Tanzanian adventure. Get a personalized itinerary within 24 hours.
                    </p>
                  </div>
                  {/* <div className="hidden md:flex items-center space-x-2 bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2">
                    <FaDollarSign className="text-emerald-200" />
                    <span className="font-semibold">USD</span>
                  </div> */}
                </div>
              </div>

              <form onSubmit={handleSubmit} className="p-8">
                {/* Step 1: Travel Preferences */}
                {currentStep === 1 && (
                  <div className="space-y-8">
                    <div className="text-center mb-8">
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">Plan Your Adventure</h3>
                      <p className="text-gray-600">Tell us about your dream safari experience</p>
                    </div>
                      
                    {/* Activities */}
                    <div className="mb-8">
                      <label className="block text-lg font-semibold text-gray-900 mb-4">
                        What experiences interest you? *
                      </label>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {[
                          { value: 'safari', label: 'Wildlife Safari', description: 'Game drives in national parks', icon: '🦁' },
                          { value: 'beach', label: 'Beach Holiday', description: 'Relax on Zanzibar beaches', icon: '🏖️' },
                          { value: 'kilimanjaro', label: 'Kilimanjaro Climb', description: 'Summit Africa\'s highest peak', icon: '⛰️' },
                          { value: 'migration', label: 'Great Migration', description: 'Witness the river crossings', icon: '🐃' }
                        ].map((activity) => (
                          <label 
                            key={activity.value}
                            className={`relative flex cursor-pointer rounded-xl border-2 p-4 transition-all hover:shadow-md ${
                              formData.activities.includes(activity.value)
                                ? 'border-emerald-500 bg-emerald-50 shadow-sm'
                                : 'border-gray-200 hover:border-gray-300'
                            }`}
                          >
                            <input
                              type="checkbox"
                              name="activities"
                              value={activity.value}
                              checked={formData.activities.includes(activity.value)}
                              onChange={handleChange}
                              className="sr-only"
                            />
                            <div className="flex items-start space-x-4">
                              <span className="text-2xl">{activity.icon}</span>
                              <div>
                                <div className="font-semibold text-gray-900">{activity.label}</div>
                                <div className="text-sm text-gray-500 mt-1">{activity.description}</div>
                              </div>
                            </div>
                            <div className={`absolute top-3 right-3 w-5 h-5 rounded border flex items-center justify-center ${
                              formData.activities.includes(activity.value)
                                ? 'bg-emerald-500 border-emerald-500'
                                : 'border-gray-300'
                            }`}>
                              {formData.activities.includes(activity.value) && (
                                <FaCheck className="w-3 h-3 text-white" />
                              )}
                            </div>
                          </label>
                        ))}
                      </div>
                      {renderError('activities')}
                    </div>

                    {/* Travel Duration */}
                    <div className="mb-8">
                      <label className="block text-lg font-semibold text-gray-900 mb-4">
                        Trip Duration: <span className="text-[#465b2d] font-bold">{formData.days} days</span>
                      </label>
                      <div className="bg-gray-50 rounded-xl p-6">
                        <input
                          type="range"
                          min="3"
                          max="21"
                          value={formData.days}
                          onChange={(e) => setFormData(prev => ({ ...prev, days: parseInt(e.target.value) }))}
                          className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-[#465b2d] [&::-webkit-slider-thumb]:shadow-lg"
                        />
                        <div className="flex justify-between text-sm text-gray-500 mt-4">
                          <span>3 days</span>
                          <span className="font-medium">Recommended: 10-14 days</span>
                          <span>21+ days</span>
                        </div>
                      </div>
                    </div>

                    {/* Travel Companions */}
                    <div className="mb-8">
                      <label className="block text-lg font-semibold text-gray-900 mb-4">
                        Who are you traveling with? *
                      </label>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                        {[
                          { value: 'honeymoon', label: 'Honeymoon', emoji: '💕' },
                          { value: 'family', label: 'Family', emoji: '👨‍👩‍👧‍👦' },
                          { value: 'couple', label: 'Couple', emoji: '👫' },
                          { value: 'solo', label: 'Solo', emoji: '👤' },
                          { value: 'friends', label: 'Friends', emoji: '👥' },
                          { value: 'other', label: 'Other', emoji: '✨' }
                        ].map((option) => (
                          <label key={option.value} className="relative">
                            <input
                              type="radio"
                              name="travelWith"
                              value={option.value}
                              checked={formData.travelWith === option.value}
                              onChange={handleChange}
                              className="sr-only"
                            />
                            <div className={`w-full text-center py-4 rounded-xl border-2 transition-all cursor-pointer hover:shadow-md ${
                              formData.travelWith === option.value
                                ? 'border-emerald-500 bg-emerald-50 text-emerald-700 shadow-sm'
                                : 'border-gray-200 hover:border-gray-300 text-gray-700'
                            }`}>
                              <div className="text-2xl mb-2">{option.emoji}</div>
                              <div className="font-medium">{option.label}</div>
                            </div>
                          </label>
                        ))}
                      </div>
                      {renderError('travelWith')}
                    </div>

                    {/* Arrival Date */}
                    <div className="mb-8">
                      <label className="block text-lg font-semibold text-gray-900 mb-4">
                        Preferred Arrival Date *
                      </label>
                      <div className="max-w-md">
                        <div className="relative">
                          <input
                            type="date"
                            name="arrivalDate"
                            value={formData.arrivalDate}
                            onChange={handleChange}
                            className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 text-lg"
                          />
                          <FaCalendar className="absolute right-4 top-4 text-gray-400 text-lg" />
                        </div>
                        {renderError('arrivalDate')}
                      </div>
                    </div>

                    {/* Budget */}
                    <div>
                      <label className="block text-lg font-semibold text-gray-900 mb-4">
                        Budget Range: <span className="text-[#465b2d] font-bold">${formData.budget.toLocaleString()} per person</span>
                      </label>
                      <div className="bg-gray-50 rounded-xl p-6">
                        <input
                          type="range"
                          min="1500"
                          max="7500"
                          step="500"
                          value={formData.budget}
                          onChange={(e) => setFormData(prev => ({ ...prev, budget: parseInt(e.target.value) }))}
                          className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-[#465b2d] [&::-webkit-slider-thumb]:shadow-lg"
                        />
                        <div className="flex justify-between text-sm text-gray-500 mt-4">
                          <span>$1,500</span>
                          <span className="font-medium">Mid-range: $3,000-5,000</span>
                          <span>$7,500+</span>
                        </div>
                        <p className="text-sm text-gray-600 mt-3 text-center">Budget excludes international flights</p>
                      </div>
                    </div>
                  </div>
                )}

                {/* Step 2: Travelers */}
                {currentStep === 2 && (
                  <div className="space-y-8">
                    <div className="text-center mb-8">
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">Travel Group Details</h3>
                      <p className="text-gray-600">Tell us about your travel companions</p>
                    </div>
                      
                    {/* Adults */}
                    <div className="mb-8">
                      <label className="block text-lg font-semibold text-gray-900 mb-6">
                        Number of Adults *
                      </label>
                      <div className="bg-gray-50 rounded-xl p-8 text-center">
                        <div className="flex items-center justify-center space-x-8 mb-8">
                          <button
                            type="button"
                            onClick={() => handleNumberChange('adults', -1)}
                            disabled={formData.adults <= 1}
                            className="w-14 h-14 rounded-full bg-white border-2 border-gray-300 hover:border-emerald-500 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center text-2xl font-bold transition-all shadow-sm hover:shadow-md"
                          >
                            -
                          </button>
                          <span className="text-5xl font-bold text-gray-900 min-w-12 text-center">{formData.adults}</span>
                          <button
                            type="button"
                            onClick={() => handleNumberChange('adults', 1)}
                            disabled={formData.adults >= 10}
                            className="w-14 h-14 rounded-full bg-white border-2 border-gray-300 hover:border-emerald-500 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center text-2xl font-bold transition-all shadow-sm hover:shadow-md"
                          >
                            +
                          </button>
                        </div>
                        {renderError('adults')}
                      </div>
                      
                      {/* Adult Ages */}
                      <div className="mt-8 space-y-4">
                        <h4 className="font-semibold text-gray-900 mb-4">Ages of Adults *</h4>
                        {Array.from({ length: formData.adults }, (_, i) => (
                          <div key={i} className="flex items-center space-x-4 bg-gray-50 rounded-xl p-4">
                            <label className="text-gray-700 min-w-20 font-medium">Adult {i + 1}</label>
                            <select
                              name={`adultAge${i + 1}`}
                              value={formData.adultAges[i] || ''}
                              onChange={handleChange}
                              className="flex-1 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                            >
                              <option value="">Select age</option>
                              {Array.from({ length: 73 }, (_, j) => j + 18).map(age => (
                                <option key={age} value={age}>{age} years old</option>
                              ))}
                            </select>
                            {renderError(`adultAge${i + 1}`)}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Children */}
                    <div>
                      <label className="block text-lg font-semibold text-gray-900 mb-6">
                        Number of Children
                      </label>
                      <div className="bg-gray-50 rounded-xl p-8 text-center">
                        <div className="flex items-center justify-center space-x-8">
                          <button
                            type="button"
                            onClick={() => handleNumberChange('children', -1)}
                            disabled={formData.children <= 0}
                            className="w-14 h-14 rounded-full bg-white border-2 border-gray-300 hover:border-emerald-500 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center text-2xl font-bold transition-all shadow-sm hover:shadow-md"
                          >
                            -
                          </button>
                          <span className="text-5xl font-bold text-gray-900 min-w-12 text-center">{formData.children}</span>
                          <button
                            type="button"
                            onClick={() => handleNumberChange('children', 1)}
                            disabled={formData.children >= 10}
                            className="w-14 h-14 rounded-full bg-white border-2 border-gray-300 hover:border-emerald-500 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center text-2xl font-bold transition-all shadow-sm hover:shadow-md"
                          >
                            +
                          </button>
                        </div>
                        <p className="text-sm text-gray-600 mt-4">Children under 18 years old</p>
                      </div>
                    </div>
                  </div>
                )}

                {/* Step 3: Contact & Notes */}
                {currentStep === 3 && (
                  <div className="space-y-8">
                    <div className="text-center mb-8">
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">Contact Information</h3>
                      <p className="text-gray-600">We'll use this to send your personalized proposal</p>
                    </div>
                      
                    {/* Personal Information */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-3">First Name *</label>
                        <input
                          type="text"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleChange}
                          placeholder="Your first name"
                          className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                        />
                        {renderError('firstName')}
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-3">Last Name *</label>
                        <input
                          type="text"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleChange}
                          placeholder="Your last name"
                          className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                        />
                        {renderError('lastName')}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-3">Email Address *</label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="your.email@example.com"
                          className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                        />
                        {renderError('email')}
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-3">Phone Number *</label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+1 (555) 123-4567"
                          className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                        />
                        {renderError('phone')}
                      </div>
                    </div>

                    <div className="mb-8">
                      <label className="block text-sm font-semibold text-gray-700 mb-3">Country *</label>
                      <select
                        name="country"
                        value={formData.country}
                        onChange={handleChange}
                        className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                      >
                        <option value="United States">United States</option>
                        <option value="United Kingdom">United Kingdom</option>
                        <option value="Canada">Canada</option>
                        <option value="Australia">Australia</option>
                        <option value="Germany">Germany</option>
                        <option value="France">France</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>

                    {/* Additional Notes */}
                    <div className="mb-8">
                      <label className="block text-sm font-semibold text-gray-700 mb-3">
                        Additional Preferences or Special Requests
                      </label>
                      <textarea
                        name="notes"
                        value={formData.notes}
                        onChange={handleChange}
                        rows="5"
                        placeholder="Tell us about any specific interests, dietary requirements, accommodation preferences, or special occasions..."
                        className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 resize-none"
                      ></textarea>
                    </div>

                    {/* Coupon & Newsletter */}
                    <div className="space-y-6">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-3">Discount Code (Optional)</label>
                        <input
                          type="text"
                          name="coupon"
                          value={formData.coupon}
                          onChange={handleChange}
                          placeholder="Enter coupon code"
                          className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                        />
                      </div>
                      
                      <label className="flex items-start space-x-4 p-4 bg-gray-50 rounded-xl cursor-pointer hover:bg-gray-100 transition-colors">
                        <input
                          type="checkbox"
                          name="newsletter"
                          checked={formData.newsletter}
                          onChange={handleChange}
                          className="mt-1 w-5 h-5 text-emerald-600 border-gray-300 rounded focus:ring-emerald-500"
                        />
                        <div>
                          <div className="font-medium text-gray-900">Receive Safari Inspiration</div>
                          <div className="text-sm text-gray-600 mt-1">
                            Get exclusive offers, travel tips, and safari inspiration. Unsubscribe at any time.
                          </div>
                        </div>
                      </label>
                    </div>
                  </div>
                )}

                {/* Navigation Buttons */}
                <div className="flex justify-between pt-8 border-t border-gray-200 mt-12">
                  <button
                    type="button"
                    onClick={handleBack}
                    disabled={currentStep === 1}
                    className="px-8 py-4 border border-gray-300 text-gray-700 rounded-xl hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors font-medium"
                  >
                    Back
                  </button>

                  {currentStep < 3 ? (
                    <button
                      type="button"
                      onClick={handleNext}
                      className="px-8 py-4 bg-[#465b2d] text-white rounded-xl hover:bg-[#324120] transition-colors font-semibold shadow-lg hover:shadow-xl"
                    >
                      Continue to Next Step
                    </button>
                  ) : (
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="px-8 py-4 bg-emerald-600 text-white rounded-xl hover:bg-emerald-700 disabled:opacity-70 disabled:cursor-not-allowed transition-colors font-semibold shadow-lg hover:shadow-xl"
                      style={{ backgroundColor: COLORS.primary }}
                    >
                      {isSubmitting ? (
                        <div className="flex items-center">
                          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
                          Submitting Your Request...
                        </div>
                      ) : (
                        'Submit Travel Proposal Request'
                      )}
                    </button>
                  )}
                </div>
              </form>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="space-y-6 sticky top-6">
              {/* Benefits Card */}
              <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">Why Choose Us?</h3>
                
                <div className="space-y-5">
                  {[
                    { icon: FaAward, text: "15+ Years Local Expertise", color: "text-yellow-500" },
                    { icon: FaShieldAlt, text: "Best Price Guarantee", color: "text-green-500" },
                    { icon: FaHeadset, text: "24/7 Travel Support", color: "text-blue-500" },
                    { icon: FaClock, text: "24-Hour Response Time", color: "text-purple-500" },
                    { icon: FaStar, text: "4.9/5 Customer Rating", color: "text-orange-500" }
                  ].map((item, index) => (
                    <div key={index} className="flex items-center space-x-4">
                      <div className={`w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center ${item.color}`}>
                        <item.icon className="w-5 h-5" />
                      </div>
                      <span className="text-sm font-medium text-gray-700">{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Contact Card */}
              <div 
                className="rounded-2xl p-6 text-white shadow-xl"
                style={{ backgroundColor: COLORS.primary }}
              >
                <h3 className="text-xl font-bold mb-6 text-center">Get in Touch</h3>
                
                <div className="space-y-4">
                  <div className="flex items-center space-x-4 p-3 bg-white/10 rounded-lg">
                    <FaPhone className="w-5 h-5 text-emerald-200" />
                    <div>
                      <div className="font-semibold">+255 784 123 456</div>
                      <div className="text-emerald-100 text-sm">Call us anytime</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4 p-3 bg-white/10 rounded-lg">
                    <FaEnvelope className="w-5 h-5 text-emerald-200" />
                    <div>
                      <div className="font-semibold">info@safaritripbooking.com</div>
                      <div className="text-emerald-100 text-sm">Email us</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4 p-3 bg-white/10 rounded-lg">
                    <FaMapMarkerAlt className="w-5 h-5 text-emerald-200" />
                    <div>
                      <div className="font-semibold">Arusha, Tanzania</div>
                      <div className="text-emerald-100 text-sm">Our headquarters</div>
                    </div>
                  </div>
                </div>

                {/* Guarantee */}
                <div className="mt-6 p-4 bg-white/20 rounded-lg text-center">
                  <FaCheck className="w-6 h-6 text-emerald-200 mx-auto mb-2" />
                  <div className="font-semibold">24-Hour Response Guarantee</div>
                  <div className="text-emerald-100 text-sm mt-1">Get your personalized proposal within 24 hours</div>
                </div>
              </div>

              {/* Trust Indicators */}
              <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
                <h4 className="font-semibold text-gray-900 mb-4 text-center">Trusted By</h4>
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div className="bg-white p-3 rounded-lg shadow-sm">
                    <div className="text-2xl font-bold text-gray-900">2,500+</div>
                    <div className="text-xs text-gray-600">Happy Travelers</div>
                  </div>
                  <div className="bg-white p-3 rounded-lg shadow-sm">
                    <div className="text-2xl font-bold text-gray-900">15+</div>
                    <div className="text-xs text-gray-600">Years Experience</div>
                  </div>
                  <div className="bg-white p-3 rounded-lg shadow-sm">
                    <div className="text-2xl font-bold text-gray-900">4.9/5</div>
                    <div className="text-xs text-gray-600">Average Rating</div>
                  </div>
                  <div className="bg-white p-3 rounded-lg shadow-sm">
                    <div className="text-2xl font-bold text-gray-900">24h</div>
                    <div className="text-xs text-gray-600">Response Time</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}