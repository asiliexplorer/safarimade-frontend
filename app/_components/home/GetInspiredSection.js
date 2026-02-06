// components/GetInspiredSection.js
"use client";

import Link from "next/link";

const GetInspiredSection = () => {
  return (
    <section className="py-16 bg-white ">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#2c5c2c] mb-4 tracking-wide">
            GET INSPIRED
          </h2>
          <h3 className="text-2xl md:text-3xl font-semibold text-[#8B5A4A] mb-6">
            DISCOVER AND EXPLORE
          </h3>
          <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
            Embark on an unforgettable journey through Tanzania with Tanzania
            Specialist and our experts. Our past travelers confirm: it's an
            unforgettable experience. Come aboard for a remarkable journey
            through this beautiful country.
          </p>
        </div>

        {/* Card 1: Customer Experiences - Text Left, Image Right */}
        <div className="flex justify-center flex-col lg:flex-row gap-2 mb-4 items-stretch">
          {/* Text Content - Larger side */}
          {/* <div className="lg:w-1/2 bg-gradient-to-br from-[#2c5c2c] to-[#1e401e] text-white rounded-2xl p-6 shadow-2xl"> */}
          <div className="lg:w-2/4 bg-gradient-to-br from-[#2c5c2c] to-[#1e401e] text-white rounded-l-2xl p-6 shadow-2xl border-l border-t border-b border-[#3b7a3b]">
            <h3 className="text-xl font-bold uppercase mb-3 tracking-wide">
              GREAT CUSTOMER EXPERIENCES
            </h3>

            <p className="text-md opacity-70 mb-2 leading-relaxed">
              Discover the stories of Tanzania Specialist travelers.
              <br />
              Click through and enjoy their wonderful experiences.
              <br />
              Create your own adventure and explore Tanzania with us.
            </p>

            {/* Ratings with Stars */}
            <div className="space-y-4 mb-2 flex">
              {/* Rating 1 */}
              <div className="flex  flex-col items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <span className="text-md font-bold">4.9/5</span>
                  <div className="flex space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-4 h-4 text-yellow-400 fill-current"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
                <span className="text-xs opacity-90">
                  Based on 3455+ reviews
                </span>
              </div>

              {/* Rating 2 */}
              <div className="flex flex-col items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <span className="text-md font-bold">4.7/5</span>
                  <div className="flex space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-4 h-4 text-yellow-400 fill-current"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
                <span className="text-xs opacity-90">
                  Based on 828+ reviews
                </span>
              </div>
            </div>

            <Link href="/blog" className="group inline-flex items-center bg-white/80  text-[#465b2d] font-semibold py-2 px-6 rounded-xl transition duration-300 transform hover:scale-105 shadow-lg">
              READ MORE
              <svg
                className="ml-3 w-5 h-5 transform group-hover:translate-x-1 transition duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </Link>
          </div>

          {/* Image - Smaller side */}
          <div className="lg:w-1/4 relative h-64 lg:h-auto rounded-tr-2xl rounded-br-2xl overflow-hidden shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1516426122078-c23e76319801?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="Happy travelers in Tanzania"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
          </div>
        </div>

        {/* Card 2: National Parks - Image Left, Text Right */}
        <div className="flex justify-center flex-col lg:flex-row gap-2 mb-4 items-stretch">
          {/* Image - Smaller side */}
          <div className="lg:w-1/4 relative h-64 lg:h-auto rounded-tl-2xl rounded-bl-2xl overflow-hidden shadow-2xl">
            <img
              src="https://cdn-ajfhi.nitrocdn.com/KGztweKcUtUgsFQkUHxObgZRMXOaBfJI/assets/images/optimized/rev-e4b7f67/tanzania-specialist.com/wp-content/uploads/2023/07/animal_national_parks-580x580.jpg"
              alt="Tanzania National Parks"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
          </div>

          {/* Text Content - Larger side */}
          {/* <div className="lg:w-2/4 bg-gradient-to-br from-[#e74c3c] to-[#c0392b]  rounded-2xl p-6 shadow-2xl"> */}
          <div className="lg:w-2/4 relative h-64 lg:h-auto bg-gray-400 p-6 rounded-tr-2xl rounded-br-2xl overflow-hidden shadow-2xl">
            <h3 className="text-xl font-bold uppercase mb-3 tracking-wide">
              NATIONAL PARKS
            </h3>

            <p className="text-md opacity-70 mb-2 leading-relaxed">
              Experience the national parks of Tanzania with our experienced
              guides. From the Serengeti to the Ngorongoro Crater, each park
              offers a unique experience. Let yourself be amazed by the rich
              biodiversity and breathtaking landscapes of this beautiful
              country.
            </p>

            <Link href="parks" className="g absolute bottom-4 right-4 roup inline-flex items-center bg-white hover:bg-gray-100 text-[#465b2d]  font-semibold py-2 px-6 rounded-xl transition duration-300 transform hover:scale-105 shadow-lg">
              EXPLORE PARKS
              <svg
                className="ml-3 w-5 h-5 transform group-hover:translate-x-1 transition duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </Link>
          </div>
        </div>

        {/* Card 3: Activities - Text Left, Image Right */}
        <div className="flex  justify-center flex-col lg:flex-row gap-2 mb-4 items-stretch">
          {/* Text Content - Larger side */}
          <div className="lg:w-1/4 relative h-64 lg:h-auto bg-gradient-to-br from-[#3498db] to-[#2980b9] text-white rounded-tl-2xl rounded-bl-2xl p-3 shadow-2xl">
            <h3 className="text-xl font-bold uppercase mb-2 tracking-wide">
              ACTIVITIES
            </h3>

            <p className="text-md mb-1opacity-70 leading-relaxed">
              Get ready to be amazed by the fantastic excursions offered by
              Tanzania Specialist. From safari adventures to cultural
              experiences, we offer a wide range of activities that will make
              your journey unforgettable. Click through and explore all the
              possibilities.
            </p>

            <button className="group inline-flex items-center bg-white hover:bg-gray-100 text-[#465b2d] font-semibold py-2 px-6 rounded-xl transition duration-300 transform hover:scale-105 shadow-lg">
              DISCOVER ACTIVITIES
              <svg
                className="ml-3 w-5 h-5 transform group-hover:translate-x-1 transition duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </button>
          </div>

          {/* Image - Smaller side */}
          <div className="lg:w-2/4 relative h-64 lg:h-auto rounded-tr-2xl rounded-br-2xl overflow-hidden shadow-2xl">
            <img
              src="https://cdn-ajfhi.nitrocdn.com/KGztweKcUtUgsFQkUHxObgZRMXOaBfJI/assets/images/optimized/rev-e4b7f67/tanzania-specialist.com/wp-content/uploads/2023/07/balloon_home-1230x580.jpg"
              alt="Tanzania Activities"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
          </div>
        </div>

        {/* Card 4: Accommodations - Image Left, Text Right */}
        <div className="flex justify-center flex-col lg:flex-row gap-2  items-stretch">
          {/* Text Content - Larger side */}
          <div className="lg:w-2/4 relative lg:h-auto h-64 bg-gradient-to-br from-[#996756] to-[#996756] text-white rounded-tl-2xl rounded-bl-2xl p-6 shadow-2xl">
            <h3 className="text-xl font-bold uppercase mb-3 tracking-wide">
              ACCOMMODATIONS
            </h3>

            <p className="text-md opacity-70 mb-2 leading-relaxed">
              Choose from our amazing accommodations during your journey through
              Tanzania. Whether you're looking for a luxurious lodge with
              stunning views or a rustic camp close to nature, we have something
              for every taste and budget. Click through and explore all the
              possibilities.
            </p>

            <button className="group inline-flex items-center bg-white hover:bg-gray-100 text-[#465b2d] font-semibold py-2 px-6 rounded-xl transition duration-300 transform hover:scale-105 shadow-lg">
              VIEW ACCOMMODATIONS
              <svg
                className="ml-3 w-5 h-5 transform group-hover:translate-x-1 transition duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </button>
          </div>

          {/* Image - Smaller side */}
          <div className="lg:w-1/4 relative h-64 lg:h-auto rounded-tr-2xl rounded-br-2xl overflow-hidden shadow-2xl">
            <img
              src="https://cdn-ajfhi.nitrocdn.com/KGztweKcUtUgsFQkUHxObgZRMXOaBfJI/assets/images/optimized/rev-e4b7f67/tanzania-specialist.com/wp-content/uploads/2023/08/Accommodation-example-Tanzania-Specialist.jpg"
              alt="Tanzania Accommodations"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
          </div>
        </div>

<div className="flex flex-wrap justify-center gap-4 lg:justify-between p-6 mt-18">
  {[
    { label: "SAFARIS", href: "/packages" },
    { label: "KILIMANJARO", href: "/kilimanjaro" },
    { label: "ZANZIBAR", href: "/zanzibar" },
    { label: "NATIONAL PARKS", href: "/parks" },
    { label: "HONEYMOON", href: "/" },
  ].map((item, i) => (
    <Link
      key={i}
      href={item.href}
      className="w-full sm:w-[45%] md:w-[30%] lg:w-[18%] px-6 py-3 bg-white text-[#465b2d] border-2 border-[#465b2d] font-semibold rounded-lg shadow-md hover:bg-[#465b2d] hover:text-white transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-xl text-center"
    >
      {item.label}
    </Link>
  ))}
</div>

      </div>
    </section>
  );
};

export default GetInspiredSection;
