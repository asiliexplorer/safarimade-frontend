// app/packages/[id]/page.js
"use client"
import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { 
  FaStar, FaChevronLeft, FaChevronRight, FaSearch, FaTimes, 
  FaMapMarkerAlt, FaGlobe, FaPhone, FaCheck, FaInfoCircle, 
  FaCalendarAlt, FaUserFriends, FaBed, FaUtensils, FaTicketAlt,
  FaMap, FaPlane, FaCar, FaShieldAlt, FaAward, FaHeart,
  FaClock, FaUser, FaMountain, FaUmbrellaBeach, FaCamera,
  FaLeaf, FaTree, FaPaw, FaSun, FaWater, FaMoneyBillWave,
  FaHeadset, FaPassport, FaSuitcase, FaWifi, FaSwimmer
} from 'react-icons/fa';
import { mockPackages } from '../../../lib/mockData';

const PackageDetailsPage = () => {
  const params = useParams();
  const { id } = params;

  const [activeTab, setActiveTab] = useState('overview');
  const [packageData, setPackageData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isFavorite, setIsFavorite] = useState(false);

  // Fetch package data
  useEffect(() => {
    if (!id) {
      setLoading(false);
      return;
    }

    const fetchData = async () => {
      try {
        await new Promise(resolve => setTimeout(resolve, 800));
        const pkg = mockPackages.find(p => p.id === parseInt(id));
        if (pkg) {
          setPackageData(pkg);
        }
      } catch (error) {
        console.error('Error fetching package:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  // Tab Content Components - ALL TABS FILLED WITH DATA
  const renderOverviewTab = () => (
    <div className="space-y-8">
      {/* Hero Gallery */}
      <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
        <div className="aspect-w-16 aspect-h-9 h-96">
          <img
            src={packageData.gallery[currentImageIndex]}
            alt={`Gallery image ${currentImageIndex + 1}`}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute bottom-6 left-6 right-6 flex justify-between items-center">
          <div className="flex space-x-2">
            {packageData.gallery.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentImageIndex 
                    ? 'bg-white scale-125' 
                    : 'bg-white/50 hover:bg-white/80'
                }`}
              />
            ))}
          </div>
          <div className="flex space-x-3">
            <button 
              onClick={() => setCurrentImageIndex(prev => prev > 0 ? prev - 1 : packageData.gallery.length - 1)}
              className="bg-white/90 text-[#465b2d] p-3 rounded-full hover:bg-white transition-all duration-300 shadow-lg border border-gray-200"
            >
              <FaChevronLeft className="w-4 h-4" />
            </button>
            <button 
              onClick={() => setCurrentImageIndex(prev => prev < packageData.gallery.length - 1 ? prev + 1 : 0)}
              className="bg-white/90 text-[#465b2d] p-3 rounded-full hover:bg-white transition-all duration-300 shadow-lg border border-gray-200"
            >
              <FaChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { icon: FaCalendarAlt, value: packageData.duration, label: 'Days Adventure' },
          { icon: FaUserFriends, value: packageData.groupSize, label: 'Group Size' },
          { icon: FaMapMarkerAlt, value: packageData.destinations?.length || 4, label: 'Destinations' },
          { icon: FaShieldAlt, value: packageData.difficulty, label: 'Experience Level' }
        ].map((stat, index) => (
          <div key={index} className="bg-white rounded-2xl p-6 text-center shadow-lg border border-gray-100">
            <div className="w-12 h-12 bg-[#465b2d] rounded-2xl flex items-center justify-center mx-auto mb-3">
              <stat.icon className="text-white text-xl" />
            </div>
            <div className="text-2xl font-bold text-gray-800 mb-1">{stat.value}</div>
            <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
          </div>
        ))}
      </div>

      {/* Route Summary */}
      {/* <div className="bg-white rounded-3xl shadow-2xl p-8 border border-gray-100">
        <div className="flex items-center mb-8">
          <div className="w-3 h-8 bg-[#465b2d] rounded-full mr-4"></div>
          <h3 className="text-2xl font-bold text-gray-800">Journey Itinerary</h3>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {packageData.route.days.map((day, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-[#465b2d] text-white flex items-center justify-center mb-2">
                <span className="font-bold">{day.day}</span>
              </div>
              <p className="text-sm font-medium text-[#465b2d]">{day.location}</p>
            </div>
          ))}
        </div>
      </div> */}
      <div className="bg-white rounded-3xl shadow-2xl p-8 border border-gray-100">
        <div className="flex items-center mb-8">
          <div className="w-3 h-8 bg-[#465b2d] rounded-full mr-4"></div>
          <h3 className="text-2xl font-bold text-gray-800">Journey Itinerary</h3>
        </div>
        <div className="relative">
          <div className="absolute left-6 top-0 bottom-0 w-1 bg-[#465b2d] hidden md:block"></div>
          <div className="space-y-6">
            {packageData.route.days.map((day, index) => (
              <div key={index} className="flex items-start space-x-6 group">
                <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-[#465b2d] text-white flex items-center justify-center relative z-10 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <span className="font-bold text-lg">D{day.day}</span>
                </div>
                <div className="flex-1 bg-gradient-to-r from-gray-50 to-white rounded-2xl p-6 border border-gray-200 hover:border-[#465b2d] transition-all duration-300 group-hover:shadow-lg">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                    <h4 className="text-xl font-bold text-[#465b2d] group-hover:text-[#3a4a24] transition-colors duration-300">{day.location}</h4>
                    <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full mt-2 md:mt-0">Day {day.day}</span>
                  </div>
                  <p className="text-gray-600 leading-relaxed">Experience the breathtaking beauty and diverse wildlife of {day.location}. This day includes guided tours, wildlife viewing, and immersive cultural experiences.</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Tour Features */}
      <div className="bg-white rounded-3xl shadow-2xl p-8 border border-gray-100">
        <div className="flex items-center mb-8">
          <div className="w-3 h-8 bg-[#465b2d] rounded-full mr-4"></div>
          <h3 className="text-2xl font-bold text-gray-800">Tour Highlights</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {packageData.tourFeatures.map((feature, index) => (
            <div key={index} className="flex items-center p-4 bg-white rounded-xl border border-gray-200">
              <div className="w-10 h-10 bg-[#465b2d] rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                <FaCheck className="w-4 h-4 text-white" />
              </div>
              <span className="text-gray-700 font-medium">{feature}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Activities & Transportation */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white rounded-3xl shadow-2xl p-8 border border-gray-100">
          <div className="flex items-center mb-6">
            <FaMountain className="text-[#465b2d] text-xl mr-4" />
            <h3 className="text-xl font-bold text-gray-800">Adventure Activities</h3>
          </div>
          <div className="space-y-3">
            {packageData.activitiesTransportation.activities.map((activity, index) => (
              <div key={index} className="flex items-center p-3 bg-gray-50 rounded-xl border border-gray-200">
                <FaCheck className="text-[#465b2d] mr-3 flex-shrink-0" />
                <span className="text-gray-700">{activity}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-3xl shadow-2xl p-8 border border-gray-100">
          <div className="flex items-center mb-6">
            <FaCar className="text-[#465b2d] text-xl mr-4" />
            <h3 className="text-xl font-bold text-gray-800">Transport & Comfort</h3>
          </div>
          <div className="space-y-4">
            <div className="flex items-center p-4 bg-gray-50 rounded-xl border border-gray-200">
              <FaCar className="text-[#465b2d] text-2xl mr-4" />
              <div>
                <div className="font-semibold text-gray-800">Vehicle Type</div>
                <div className="text-gray-700">{packageData.activitiesTransportation.vehicle}</div>
              </div>
            </div>
            <div className="flex items-center p-4 bg-gray-50 rounded-xl border border-gray-200">
              <FaPlane className="text-[#465b2d] text-2xl mr-4" />
              <div>
                <div className="font-semibold text-gray-800">Transfers Included</div>
                <div className="text-gray-700">{packageData.activitiesTransportation.transfer}</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Accommodation & Meals */}
      <div className="bg-white rounded-3xl shadow-2xl p-8 border border-gray-100">
        <div className="flex items-center mb-8">
          <FaBed className="text-[#465b2d] text-xl mr-4" />
          <h3 className="text-2xl font-bold text-gray-800">Accommodation & Meals</h3>
        </div>
        <p className="text-gray-600 mb-6 p-4 bg-gray-50 rounded-xl border border-gray-200">{packageData.accommodationMeals.note}</p>
        
        <div className="overflow-x-auto rounded-2xl border border-gray-200">
          <table className="min-w-full bg-white">
            <thead className="bg-[#465b2d] text-white">
              <tr>
                <th className="py-4 px-6 text-left font-semibold">Day</th>
                <th className="py-4 px-6 text-left font-semibold">Accommodation</th>
                <th className="py-4 px-6 text-left font-semibold">Type</th>
                <th className="py-4 px-6 text-left font-semibold">Meals</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {packageData.accommodationMeals.schedule.map((item, index) => (
                <tr key={index} className="hover:bg-gray-50 transition-colors duration-200">
                  <td className="py-4 px-6 font-semibold text-gray-800">{item.day}</td>
                  <td className="py-4 px-6 text-gray-700">{item.accommodation}</td>
                  <td className="py-4 px-6 text-gray-600">{item.accommodationType}</td>
                  <td className="py-4 px-6">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800 border border-green-200">
                      {item.meals}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Gallery */}
      <div className="bg-white rounded-3xl shadow-2xl p-8 border border-gray-100">
        <div className="flex items-center mb-8">
          <FaCamera className="text-[#465b2d] text-xl mr-4" />
          <h3 className="text-2xl font-bold text-gray-800">Photo Gallery</h3>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {packageData.gallery.map((img, index) => (
            <div key={index} className="aspect-square overflow-hidden rounded-xl">
              <img
                src={img}
                alt={`Gallery image ${index + 1}`}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderDayByDayTab = () => (
    <div className="space-y-8">
      {packageData.dayByDay.map((day, index) => (
        <div key={index} className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
          {/* Day Header */}
          <div className="bg-[#465b2d] p-8 text-white">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <div>
                <h3 className="text-3xl font-bold">DAY {day.day}</h3>
                <p className="text-xl font-semibold mt-2 opacity-90">{day.location}</p>
              </div>
              <div className="flex items-center mt-4 md:mt-0">
                <div className="flex text-yellow-300 mr-3">
                  {[...Array(5)].map((_, i) => (
                    <FaStar
                      key={i}
                      className={`w-5 h-5 ${
                        i < (day.rating || packageData.rating)
                          ? 'fill-current'
                          : 'text-yellow-200 opacity-50'
                      }`}
                    />
                  ))}
                </div>
                <span className="text-sm opacity-90 bg-white/20 px-3 py-1 rounded-full">{day.date || "Flexible Date"}</span>
              </div>
            </div>
          </div>

          {/* Day Content */}
          <div className="p-8">
            <div className="flex flex-col lg:flex-row gap-8">
              {/* Left Column - Day Details */}
              <div className="lg:w-2/3">
                <p className="text-gray-700 mb-8 text-lg leading-relaxed bg-gray-50 p-6 rounded-2xl border border-gray-200">
                  {day.description}
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Accommodation */}
                  <div className="bg-white rounded-2xl p-6 border border-gray-200">
                    <h4 className="font-bold text-gray-800 mb-3 flex items-center text-lg">
                      <FaBed className="text-[#465b2d] mr-3" />
                      Accommodation
                    </h4>
                    <p className="text-gray-700 font-semibold">{day.accommodation}</p>
                    <p className="text-gray-600 text-sm mt-1">{day.accommodationType}</p>
                  </div>
                  
                  {/* Meals & Drinks */}
                  <div className="bg-white rounded-2xl p-6 border border-gray-200">
                    <h4 className="font-bold text-gray-800 mb-3 flex items-center text-lg">
                      <FaUtensils className="text-[#465b2d] mr-3" />
                      Meals & Drinks
                    </h4>
                    <p className="text-gray-700 font-semibold">{day.meals}</p>
                    <p className="text-gray-600 text-sm mt-1">{day.drinks}</p>
                  </div>
                </div>

                {/* Best Times & Wildlife Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                  {/* Best Times */}
                  <div className="bg-white rounded-2xl p-6 border border-gray-200">
                    <h4 className="font-bold text-gray-800 mb-4 flex items-center">
                      <FaSun className="text-[#465b2d] mr-3" />
                      Best Times to Visit
                    </h4>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center p-3 bg-gray-50 rounded-xl border border-gray-200">
                        <span className="text-gray-700 font-medium">Best Time</span>
                        <span className="text-[#465b2d] font-semibold">{day.bestTimeToVisit}</span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-gray-50 rounded-xl border border-gray-200">
                        <span className="text-gray-700 font-medium">High Season</span>
                        <span className="text-[#465b2d] font-semibold">{day.highSeason}</span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-gray-50 rounded-xl border border-gray-200">
                        <span className="text-gray-700 font-medium">Best Weather</span>
                        <span className="text-[#465b2d] font-semibold">{day.bestWeather}</span>
                      </div>
                    </div>
                  </div>

                  {/* Wildlife */}
                  <div className="bg-white rounded-2xl p-6 border border-gray-200">
                    <h4 className="font-bold text-gray-800 mb-4 flex items-center">
                      <FaPaw className="text-[#465b2d] mr-3" />
                      Wildlife Spotted
                    </h4>
                    <div className="space-y-3">
                      {day.wildlife.map((animal, idx) => (
                        <div key={idx} className="flex justify-between items-center p-3 bg-gray-50 rounded-xl border border-gray-200">
                          <span className="text-gray-700 font-medium">{animal.animal}</span>
                          <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                            animal.abundance === 'Abundant' ? 'bg-green-100 text-green-800 border border-green-200' :
                            animal.abundance === 'Common' ? 'bg-blue-100 text-blue-800 border border-blue-200' :
                            'bg-gray-100 text-gray-800 border border-gray-200'
                          }`}>
                            {animal.abundance}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column - Images and User Info */}
              <div className="lg:w-1/3">
                {/* User & Rating */}
                <div className="bg-white rounded-2xl p-6 border border-gray-200 mb-6">
                  <div className="flex items-center mb-4">
                    <img
                      src={day.avatar || packageData.image}
                      alt={`${day.username || 'Guide'} preview`}
                      className="w-16 h-16 rounded-2xl object-cover mr-4 border-2 border-gray-200"
                    />
                    <div>
                      <h5 className="font-bold text-gray-800">Your Guide</h5>
                      <div className="flex text-yellow-400 mt-1">
                        {[...Array(5)].map((_, i) => (
                          <FaStar
                            key={i}
                            className={`w-4 h-4 ${
                              i < (day.rating || packageData.rating)
                                ? 'fill-current'
                                : 'text-gray-300'
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 text-center bg-gray-50 p-3 rounded-xl border border-gray-200">
                    {day.date || "Available dates upon request"}
                  </p>
                </div>

                {/* Day Images */}
                <div className="bg-white rounded-2xl p-6 border border-gray-200">
                  <h4 className="font-bold text-gray-800 mb-4 text-center flex items-center justify-center">
                    <FaCamera className="text-[#465b2d] mr-2" />
                    Day Gallery
                  </h4>
                  <div className="grid grid-cols-2 gap-3">
                    {day.images.map((img, imgIndex) => (
                      <div key={imgIndex} className="aspect-square overflow-hidden rounded-xl">
                        <img
                          src={img}
                          alt={`Day ${day.day} image ${imgIndex + 1}`}
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  const renderRatesTab = () => (
    <div className="space-y-8">
      {/* Pricing Header */}
      <div className="bg-white rounded-3xl shadow-2xl p-8 border border-gray-100">
        <div className="flex items-center mb-6">
          <FaMoneyBillWave className="text-[#465b2d] text-2xl mr-4" />
          <h3 className="text-2xl font-bold text-gray-800">Pricing Information</h3>
        </div>
        
        {/* Price Cards */}
        

        {/* Detailed Pricing Table */}
        <div className="bg-white rounded-2xl p-6 border border-gray-200 overflow-x-auto">
          <h4 className="text-xl font-bold text-gray-800 mb-4">Detailed Pricing Per Person (USD)</h4>
          <table className="min-w-full bg-white">
            <thead className="bg-[#465b2d] text-white">
              <tr>
                <th className="py-3 px-4 text-left">Period</th>
                <th className="py-3 px-4 text-left">Solo</th>
                <th className="py-3 px-4 text-left">2 People</th>
                <th className="py-3 px-4 text-left">4 People</th>
                <th className="py-3 px-4 text-left">6 People</th>
                <th className="py-3 px-4 text-left">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {packageData.rates.pricing.map((rate, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="py-3 px-4 font-medium text-gray-800">{rate.period}</td>
                  <td className="py-3 px-4 text-gray-700">{rate.solo}</td>
                  <td className="py-3 px-4 text-gray-700">{rate.oneRoomTwoPeople}</td>
                  <td className="py-3 px-4 text-gray-700">{rate.oneRoomFourPeople}</td>
                  <td className="py-3 px-4 text-gray-700">{rate.threeRoomsSixPeople}</td>
                  <td className="py-3 px-4">
                    <button className="bg-[#465b2d] text-white px-4 py-2 rounded-lg text-sm hover:bg-[#3a4a24] transition-colors duration-200">
                      Get Quote
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Price Disclaimer */}
      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-2xl">
        <div className="flex">
          <FaInfoCircle className="text-yellow-500 text-xl mt-1 mr-4 flex-shrink-0" />
          <div>
            <h4 className="font-bold text-yellow-800 mb-2">Important Pricing Information</h4>
            <p className="text-yellow-700">
              Rates are per person and exclude the international flight from/to your home country. 
              This tour accepts children of all ages. Children under 12 receive a 15% discount and children under 2 are free.
              Prices include all government taxes and park fees. Payment plans available.
            </p>
          </div>
        </div>
      </div>
    </div>
  );

  const renderInclusionsTab = () => (
    <div className="space-y-8">
      {/* Header */}
      <div className="bg-white rounded-3xl shadow-2xl p-8 border border-gray-100 text-center">
        <h3 className="text-2xl font-bold text-gray-800 mb-4">What's Included in Your Safari</h3>
        <p className="text-gray-600 max-w-2xl mx-auto">
          We believe in transparent pricing. Here's exactly what you get with your adventure package.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Included */}
        <div className="bg-white rounded-3xl shadow-2xl p-8 border border-gray-100">
          <div className="flex items-center mb-8">
            <div className="w-12 h-12 bg-green-100 rounded-2xl flex items-center justify-center mr-4">
              <FaCheck className="text-green-600 text-xl" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-800">Included in Your Package</h3>
              <p className="text-green-600 font-semibold">Everything you need for a perfect adventure</p>
            </div>
          </div>
          
          <div className="space-y-4">
            {packageData.inclusions.included.map((item, index) => (
              <div key={index} className="flex items-center p-4 bg-green-50 rounded-xl border border-green-200">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <FaCheck className="w-4 h-4 text-white" />
                </div>
                <span className="text-gray-700 font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Excluded */}
        <div className="bg-white rounded-3xl shadow-2xl p-8 border border-gray-100">
          <div className="flex items-center mb-8">
            <div className="w-12 h-12 bg-red-100 rounded-2xl flex items-center justify-center mr-4">
              <FaTimes className="text-red-600 text-xl" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-800">Not Included</h3>
              <p className="text-red-600 font-semibold">Additional items you might need</p>
            </div>
          </div>
          
          <div className="space-y-4">
            {packageData.inclusions.excluded.map((item, index) => (
              <div key={index} className="flex items-center p-4 bg-red-50 rounded-xl border border-red-200">
                <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <FaTimes className="w-4 h-4 text-white" />
                </div>
                <span className="text-gray-700 font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Additional Info */}
      <div className="bg-white rounded-3xl shadow-2xl p-8 border border-gray-100">
        <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Additional Information</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center p-4 bg-blue-50 rounded-2xl border border-blue-200">
            <FaMoneyBillWave className="text-[#465b2d] text-3xl mx-auto mb-3" />
            <h4 className="font-semibold text-gray-800 mb-2">Payment Terms</h4>
            <p className="text-gray-600 text-sm">30% deposit to secure, balance due 60 days before departure</p>
          </div>
          <div className="text-center p-4 bg-green-50 rounded-2xl border border-green-200">
            <FaHeadset className="text-[#465b2d] text-3xl mx-auto mb-3" />
            <h4 className="font-semibold text-gray-800 mb-2">24/7 Support</h4>
            <p className="text-gray-600 text-sm">Dedicated support team available throughout your journey</p>
          </div>
          <div className="text-center p-4 bg-purple-50 rounded-2xl border border-purple-200">
            <FaShieldAlt className="text-[#465b2d] text-3xl mx-auto mb-3" />
            <h4 className="font-semibold text-gray-800 mb-2">Travel Protection</h4>
            <p className="text-gray-600 text-sm">Comprehensive insurance options available</p>
          </div>
        </div>
      </div>
    </div>
  );

  const renderGettingThereTab = () => (
    <div className="space-y-8">
      {/* Header */}
      <div className="bg-white rounded-3xl shadow-2xl p-8 border border-gray-100">
        <div className="flex items-center mb-6">
          <FaMap className="text-[#465b2d] text-2xl mr-4" />
          <h3 className="text-2xl font-bold text-gray-800">Getting to Your Adventure</h3>
        </div>
        <p className="text-gray-700 mb-6 text-lg">{packageData.gettingThere.description}</p>
        
        <div className="space-y-4">
          {packageData.gettingThere.details.map((detail, index) => (
            <div key={index} className="flex items-start p-4 bg-gray-50 rounded-xl border border-gray-200">
              <div className="w-6 h-6 bg-[#465b2d] rounded-full flex items-center justify-center mr-4 flex-shrink-0 mt-0.5">
                <FaCheck className="w-3 h-3 text-white" />
              </div>
              <span className="text-gray-700">{detail}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Flight Information */}
        <div className="bg-white rounded-3xl shadow-2xl p-8 border border-gray-100">
          <div className="flex items-center mb-6">
            <FaPlane className="text-[#465b2d] text-xl mr-4" />
            <h3 className="text-xl font-bold text-gray-800">International Flights</h3>
          </div>
          <div className="space-y-4">
            <div className="p-4 bg-blue-50 rounded-xl border border-blue-200">
              <div className="font-semibold text-blue-800 mb-2">Recommended Airports</div>
              <ul className="text-blue-700 space-y-1 text-sm">
                <li>• Kilimanjaro International Airport (JRO)</li>
                <li>• Julius Nyerere International Airport (DAR)</li>
                <li>• Arusha Airport (ARK)</li>
              </ul>
            </div>
            <div className="p-4 bg-green-50 rounded-xl border border-green-200">
              <div className="font-semibold text-green-800 mb-2">Airline Partners</div>
              <p className="text-green-700 text-sm">We work with all major airlines and can help you find the best routes and fares.</p>
            </div>
          </div>
        </div>

        {/* Ground Transportation */}
        <div className="bg-white rounded-3xl shadow-2xl p-8 border border-gray-100">
          <div className="flex items-center mb-6">
            <FaCar className="text-[#465b2d] text-xl mr-4" />
            <h3 className="text-xl font-bold text-gray-800">Ground Transfers</h3>
          </div>
          <div className="space-y-4">
            <div className="p-4 bg-gray-50 rounded-xl border border-gray-200">
              <div className="font-semibold text-gray-800 mb-2">Airport Pickup</div>
              <p className="text-gray-700 text-sm">Complimentary airport transfer included from any major Tanzanian airport.</p>
            </div>
            <div className="p-4 bg-amber-50 rounded-xl border border-amber-200">
              <div className="font-semibold text-amber-800 mb-2">Travel Time</div>
              <p className="text-amber-700 text-sm">Most destinations are within 2-4 hours drive from arrival airports.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Travel Requirements */}
      <div className="bg-white rounded-3xl shadow-2xl p-8 border border-gray-100">
        <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Travel Requirements</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="text-center p-4 bg-white rounded-xl border border-gray-200">
            <FaPassport className="text-[#465b2d] text-2xl mx-auto mb-2" />
            <div className="font-semibold text-gray-800">Valid Passport</div>
            <div className="text-gray-600 text-sm">6+ months validity</div>
          </div>
          <div className="text-center p-4 bg-white rounded-xl border border-gray-200">
            <FaSuitcase className="text-[#465b2d] text-2xl mx-auto mb-2" />
            <div className="font-semibold text-gray-800">Visa</div>
            <div className="text-gray-600 text-sm">Required for most nationalities</div>
          </div>
          <div className="text-center p-4 bg-white rounded-xl border border-gray-200">
            <FaShieldAlt className="text-[#465b2d] text-2xl mx-auto mb-2" />
            <div className="font-semibold text-gray-800">Vaccinations</div>
            <div className="text-gray-600 text-sm">Yellow fever recommended</div>
          </div>
          <div className="text-center p-4 bg-white rounded-xl border border-gray-200">
            <FaWifi className="text-[#465b2d] text-2xl mx-auto mb-2" />
            <div className="font-semibold text-gray-800">Connectivity</div>
            <div className="text-gray-600 text-sm">Available in most areas</div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderOfferedByTab = () => (
    <div className="space-y-8">
      {/* Company Profile */}
      <div className="bg-white rounded-3xl shadow-2xl p-8 border border-gray-100">
        <div className="flex flex-col lg:flex-row items-start lg:items-center gap-8">
          <div className="flex-shrink-0">
            <div className="w-32 h-32 rounded-2xl bg-[#465b2d] flex items-center justify-center text-white text-4xl font-bold">
              {packageData.tourOperator?.charAt(0) || "S"}
            </div>
          </div>
          <div className="flex-1">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
              <h2 className="text-3xl font-bold text-gray-800">{packageData.tourOperator}</h2>
              <div className="flex items-center mt-2 md:mt-0">
                <div className="flex text-yellow-400 mr-2">
                  {[...Array(5)].map((_, i) => (
                    <FaStar
                      key={i}
                      className={`w-5 h-5 ${
                        i < Math.floor(packageData.rating)
                          ? 'fill-current'
                          : 'text-gray-300'
                      }`}
                    />
                  ))}
                </div>
                <span className="text-lg font-semibold text-gray-700">
                  {packageData.rating}/5 ({packageData.reviewCount} Reviews)
                </span>
              </div>
            </div>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              {packageData.fullDescription}
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-[#465b2d] text-white px-6 py-3 rounded-xl font-semibold hover:bg-[#3a4a24] transition-colors duration-300">
                Contact Operator
              </button>
              <button className="border-2 border-[#465b2d] text-[#465b2d] px-6 py-3 rounded-xl font-semibold hover:bg-[#465b2d] hover:text-white transition-all duration-300">
                View All Tours
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Company Details */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Contact Information */}
        <div className="bg-white rounded-3xl shadow-2xl p-8 border border-gray-100">
          <h3 className="text-2xl font-bold text-gray-800 mb-6">Contact Information</h3>
          <div className="space-y-4">
            <div className="flex items-center p-4 bg-gray-50 rounded-xl border border-gray-200">
              <FaPhone className="text-[#465b2d] mr-4" />
              <div>
                <div className="font-semibold text-gray-800">Phone</div>
                <div className="text-gray-600">+255 123 456 7890</div>
              </div>
            </div>
            <div className="flex items-center p-4 bg-gray-50 rounded-xl border border-gray-200">
              <FaGlobe className="text-[#465b2d] mr-4" />
              <div>
                <div className="font-semibold text-gray-800">Email</div>
                <div className="text-gray-600">info@souloftanzania.com</div>
              </div>
            </div>
            <div className="flex items-center p-4 bg-gray-50 rounded-xl border border-gray-200">
              <FaMapMarkerAlt className="text-[#465b2d] mr-4" />
              <div>
                <div className="font-semibold text-gray-800">Main Office</div>
                <div className="text-gray-600">Arusha, Tanzania</div>
              </div>
            </div>
          </div>
        </div>

        {/* Office Locations */}
        <div className="bg-white rounded-3xl shadow-2xl p-8 border border-gray-100">
          <h3 className="text-2xl font-bold text-gray-800 mb-6">Our Locations</h3>
          <div className="space-y-4">
            <div className="p-4 bg-blue-50 rounded-xl border border-blue-200">
              <h4 className="font-semibold text-blue-800 mb-2">Headquarters</h4>
              <p className="text-blue-700 text-sm">Arusha, Tanzania - Main booking and operations center</p>
            </div>
            <div className="p-4 bg-green-50 rounded-xl border border-green-200">
              <h4 className="font-semibold text-green-800 mb-2">Satellite Office</h4>
              <p className="text-green-700 text-sm">Dar es Salaam, Tanzania - Customer service and support</p>
            </div>
            <div className="p-4 bg-amber-50 rounded-xl border border-amber-200">
              <h4 className="font-semibold text-amber-800 mb-2">International Partner</h4>
              <p className="text-amber-700 text-sm">Nairobi, Kenya - Regional coordination and logistics</p>
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="bg-white rounded-3xl shadow-2xl p-8 border border-gray-100">
        <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">Why Travel With Us</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center p-6 bg-white rounded-2xl border border-gray-200">
            <FaAward className="text-[#465b2d] text-3xl mx-auto mb-3" />
            <h4 className="font-bold text-lg mb-2">Award Winning</h4>
            <p className="text-gray-600 text-sm">Recognized as Tanzania's premier safari operator since 2010</p>
          </div>
          <div className="text-center p-6 bg-white rounded-2xl border border-gray-200">
            <FaShieldAlt className="text-[#465b2d] text-3xl mx-auto mb-3" />
            <h4 className="font-bold text-lg mb-2">Fully Licensed</h4>
            <p className="text-gray-600 text-sm">All guides licensed and trained in wilderness first aid</p>
          </div>
          <div className="text-center p-6 bg-white rounded-2xl border border-gray-200">
            <FaHeadset className="text-[#465b2d] text-3xl mx-auto mb-3" />
            <h4 className="font-bold text-lg mb-2">24/7 Support</h4>
            <p className="text-gray-600 text-sm">Round-the-clock support throughout your journey</p>
          </div>
        </div>
      </div>
    </div>
  );

  // Loading state
  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#465b2d] mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading package details...</p>
        </div>
      </div>
    );
  }

  if (!packageData) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-2">Package Not Found</h1>
          <p className="text-gray-600 mb-4">Sorry, we couldn't find the package you're looking for.</p>
          <Link href="/packages" className="text-[#465b2d] hover:underline">
            ← Back to All Packages
          </Link>
        </div>
      </div>
    );
  }

  const tabs = [
    { id: 'overview', label: 'Tour Overview', icon: FaGlobe },
    { id: 'day-by-day', label: 'Day by Day', icon: FaCalendarAlt },
    { id: 'rates', label: 'Pricing', icon: FaTicketAlt },
    { id: 'inclusions', label: 'Inclusions', icon: FaCheck },
    { id: 'getting-there', label: 'Getting There', icon: FaMap },
    { id: 'offered-by', label: 'Tour Operator', icon: FaUserFriends }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
     <div 
  className="relative bg-cover bg-center bg-no-repeat py-16 lg:py-20"
  style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url(${packageData.gallery[0]})` }}
>
  {/* Dark Overlay */}
  <div className="absolute inset-0 bg-black/30"></div>
  
  <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <Link 
      href="/packages" 
      className="inline-flex items-center text-white hover:text-gray-200 mb-8 transition-colors duration-200 font-semibold group"
    >
      <FaChevronLeft className="mr-2 group-hover:-translate-x-1 transition-transform duration-300" />
      Back to All Packages
    </Link>

    {/* Enhanced Package Header Card with Glass Effect */}
    <div className="bg-white/10 backdrop-blur-md rounded-3xl border border-white/20 p-8 lg:p-10 text-white shadow-2xl mb-8">
      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between">
        <div className="flex-1">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-4 border border-white/30">
            <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
            <span className="text-sm font-bold tracking-wide">PREMIUM SAFARI EXPERIENCE</span>
          </div>
          
          <h1 className="text-4xl lg:text-5xl font-bold mb-4 leading-tight drop-shadow-lg">
            {packageData.name}
          </h1>
          
          <p className="text-xl text-white/90 mb-6 max-w-3xl leading-relaxed drop-shadow-md">
            {packageData.fullDescription}
          </p>

          {/* Enhanced Stats with Icons */}
          <div className="flex flex-wrap gap-4 mb-6">
            <div className="flex items-center bg-white/20 backdrop-blur-sm px-4 py-2 rounded-xl border border-white/30">
              <FaMapMarkerAlt className="mr-2 text-white" />
              <span className="font-medium">{packageData.location}</span>
            </div>
            <div className="flex items-center bg-white/20 backdrop-blur-sm px-4 py-2 rounded-xl border border-white/30">
              <FaCalendarAlt className="mr-2 text-white" />
              <span className="font-medium">{packageData.duration} Days</span>
            </div>
            <div className="flex items-center bg-white/20 backdrop-blur-sm px-4 py-2 rounded-xl border border-white/30">
              <FaUserFriends className="mr-2 text-white" />
              <span className="font-medium">Max {packageData.groupSize}</span>
            </div>
            <div className="flex items-center bg-white/20 backdrop-blur-sm px-4 py-2 rounded-xl border border-white/30">
              <FaStar className="mr-2 text-yellow-300" />
              <span className="font-medium">{packageData.rating}/5 Rating</span>
            </div>
          </div>

          {/* Rating */}
          <div className="flex items-center">
            <div className="flex text-yellow-300 mr-4">
              {[...Array(5)].map((_, i) => (
                <FaStar
                  key={i}
                  className={`w-6 h-6 ${
                    i < Math.floor(packageData.rating) ? 'fill-current' : 'text-yellow-200 opacity-50'
                  }`}
                />
              ))}
            </div>
            <span className="text-xl font-semibold text-white drop-shadow-md">
              {packageData.rating}/5 · {packageData.reviewCount} Reviews
            </span>
          </div>
        </div>

        {/* Booking Card */}
        <div className="mt-8 lg:mt-0 lg:ml-8">
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 shadow-2xl">
            <div className="text-center mb-4">
              <div className="text-4xl font-bold text-white mb-2">${packageData.price}</div>
              <div className="text-white/80 font-medium">per person</div>
            </div>
            <button className="w-full bg-white text-[#465b2d] font-bold py-4 rounded-xl hover:bg-gray-100 transition-all duration-300 mb-3 shadow-lg transform hover:scale-105">
              Book Now
            </button>
            <button 
              onClick={() => setIsFavorite(!isFavorite)}
              className="w-full border-2 border-white text-white py-4 rounded-xl font-semibold hover:bg-white/10 transition-all duration-300 flex items-center justify-center"
            >
              <FaHeart className={`mr-3 ${isFavorite ? 'text-red-400 fill-current' : ''}`} />
              {isFavorite ? 'Saved to Wishlist' : 'Save Package'}
            </button>
          </div>
        </div>
      </div>
    </div>

    {/* Enhanced Custom Trip Section */}
    <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
      <div className="flex items-center">
        <div className="w-3 h-3 bg-yellow-400 rounded-full mr-3 animate-pulse"></div>
        <p className="text-white/90 text-lg leading-relaxed font-medium">
          You can choose one of our popular Tanzania itineraries or build your own trip exactly the way you love it. 
          Let us know which national parks and islands you like and we will design the perfect Tanzania vacation for you.
        </p>
      </div>
    </div>
  </div>

  {/* Decorative Elements */}
  <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black/20 to-transparent"></div>
</div> 

      {/* Main Content with Sidebar Tabs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Tabs - Left Side */}
          <div className="lg:w-1/4">
            <div className="bg-white rounded-3xl shadow-2xl border border-gray-200 p-6 sticky top-8">
              <h3 className="text-xl font-bold text-gray-800 mb-6 text-center">Package Details</h3>
              <nav className="space-y-3">
                {tabs.map((tab) => {
                  const IconComponent = tab.icon;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`w-full flex items-center px-6 py-4 rounded-2xl font-semibold transition-all duration-300 text-left ${
                        activeTab === tab.id
                          ? 'bg-[#465b2d] text-white shadow-md'
                          : 'text-gray-600 hover:text-[#465b2d] hover:bg-gray-50'
                      }`}
                    >
                      <IconComponent className={`mr-4 w-5 h-5 ${activeTab === tab.id ? 'text-white' : 'text-[#465b2d]'}`} />
                      {tab.label}
                    </button>
                  );
                })}
              </nav>

              {/* Quick Contact */}
              <div className="mt-8 p-6 bg-gray-50 rounded-2xl border border-gray-200">
                <h4 className="font-bold text-gray-800 mb-3 flex items-center">
                  <FaPhone className="text-[#465b2d] mr-2" />
                  Need Help?
                </h4>
                <p className="text-gray-600 text-sm mb-4">Our travel experts are here to help you plan your perfect adventure.</p>
                <button className="w-full bg-[#465b2d] text-white py-3 rounded-xl font-semibold hover:bg-[#3a4a24] transition-colors duration-200">
                  Contact Us
                </button>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:w-3/4">
            <div className="bg-transparent rounded-3xl">
              {activeTab === 'overview' && renderOverviewTab()}
              {activeTab === 'day-by-day' && renderDayByDayTab()}
              {activeTab === 'rates' && renderRatesTab()}
              {activeTab === 'inclusions' && renderInclusionsTab()}
              {activeTab === 'getting-there' && renderGettingThereTab()}
              {activeTab === 'offered-by' && renderOfferedByTab()}
            </div>

            {/* Bottom CTA */}
            <div className="mt-12 bg-white rounded-3xl p-8 border border-gray-200 text-center shadow-2xl">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
                Ready to Book Your Dream Safari?
              </h2>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                Get a free, customized quote for your Tanzania adventure. Our experts are ready to design the perfect trip for you.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/travel-proposal" className="bg-[#465b2d] text-white px-8 py-4 rounded-xl font-semibold hover:bg-[#3a4a24] transition-colors duration-200 shadow-md">
                  MAKE A REQUEST
                </Link>
                <Link href="/packages" className="border-2 border-[#465b2d] text-[#465b2d] px-8 py-4 rounded-xl font-semibold hover:bg-[#465b2d] hover:text-white transition-colors duration-200">
                  VIEW ALL PACKAGES
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Action Button for Mobile */}
      <div className="fixed bottom-6 right-6 z-50 lg:hidden">
        <div className="bg-[#465b2d] text-white p-4 rounded-full shadow-2xl">
          <div className="text-center">
            <div className="font-bold text-lg">${packageData.price}</div>
            <div className="text-xs opacity-90">per person</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PackageDetailsPage;