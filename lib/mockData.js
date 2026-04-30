export const safariPackages = [
  {
    id: 1,
    offeredBy: "Asili Explorer Safaris",
    name: "6-Day Majestic Tanzania Safari",
    slug: "6-day-majestic-tanzania-safari",
    category: "SAFARI",
    duration: 6,
    nights: 5,
    travelStyle: "Luxury Game Drive Safari",
    themes: ["wildlife", "adventure", "nature"],
    bestFor: ["families", "couples", "wildlife enthusiasts"],
    experienceSummary: "Explore the best of Tanzania in 6 days, visiting Tarangire, Lake Manyara, Serengeti, and Ngorongoro Crater. Enjoy breathtaking landscapes, diverse wildlife, and unforgettable game drives through iconic national parks.",
    shortDescription: "Explore the best of Tanzania in 6 days with game drives through Tarangire, Lake Manyara, Serengeti, and Ngorongoro Crater.",
    fullDescription: "In this tour, you will have the opportunity to visit the most iconic parks of the northern safari circuit of Tanzania – Tarangire National Park, Lake Manyara National Park, Serengeti National Park (where you will stay 2 nights), and Ngorongoro Crater. Experience the abundance of wildlife in each park with dedicated game drives.",
    destinationsDetailed: [
      {
        place: "Tarangire National Park",
        nights: 1,
        description: "Famous for its diverse landscape with nine vegetation zones and the largest concentration of elephants in Tanzania.",
        accommodation: {
          name: "Tarangire Sopa Lodge",
          type: "Mid-range Lodge",
          highlights: ["River view", "Game drives", "Wildlife nearby"],
          images: ["https://images.unsplash.com/photo-1516426122078-c23e76319801?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"]
        }
      },
      {
        place: "Lake Manyara National Park",
        nights: 1,
        description: "Small but stunning park with lush acacia forest, giant figs, and mahogany trees. Home to tree-climbing lions and large baboon populations.",
        accommodation: {
          name: "Escarpment Luxury Lodge Manyara",
          type: "Luxury Lodge",
          highlights: ["Lake view", "Escarpment views", "Luxury amenities"],
          images: ["https://images.unsplash.com/photo-1573843988976-8a4c7a9b0e6a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"]
        }
      },
      {
        place: "Serengeti National Park",
        nights: 2,
        description: "The most famous national park in the world, home to the Great Migration and 2 million wildebeests, hundreds of thousands of zebras, and all kinds of antelopes.",
        accommodation: {
          name: "Nyikani Camp Central Serengeti",
          type: "Mid-range Tented Camp",
          highlights: ["Central location", "Game drives", "Migration views"],
          images: ["https://images.unsplash.com/photo-1551632811-561732d1c5e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"]
        }
      },
      {
        place: "Ngorongoro Crater",
        nights: 1,
        description: "The 8th wonder of the Natural World. The crater spreads for 102 sq. miles and has 2,000 ft high walls, making it virtually Noah's ark.",
        accommodation: {
          name: "Ngorongoro Serena Safari Lodge",
          type: "Luxury Lodge",
          highlights: ["Crater rim location", "Luxury amenities", "Stunning views"],
          images: ["https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"]
        }
      }
    ],
    highlights: ["Tarangire National Park", "Lake Manyara National Park", "Serengeti National Park (2 nights)", "Ngorongoro Crater", "Big Five sightings", "Game drives", "Luxury accommodations"],
    mainImage:  "https://images.unsplash.com/photo-1542882346-4b19cc95a3f4?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    gallery: [
      "https://images.unsplash.com/photo-1577971132997-c10be9372519?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    
      "https://plus.unsplash.com/premium_photo-1664304370557-233bccc0ac85?q=80&w=1179&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1688374134784-308b995e7cf7?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    ],
    priceType: "FIXED",
    priceFrom: 2890,
    currency: "USD",
    pricingNotes: "Price per person. Children under 12 receive a discount.",
    inclusions: {
      included: ["Park fees", "All meals", "Accommodation", "Professional driver/guide", "Transportation", "Airport transfer"],
      excluded: ["International flights", "Travel insurance", "Tips", "Personal items", "Visa fees"]
    },
    gettingThere: {
      description: "This tour starts and ends in Arusha. Fly to Kilimanjaro International Airport (JRO) near Arusha."
    },
    isActive: true,
    createdAt: new Date("2025-10-01"),
    updatedAt: new Date("2026-04-28")
  },
  {
    id: 2,
    offeredBy: "Asili Explorer Safaris",
    name: "10-Day Epic Tanzania & Kenya Safari",
    slug: "10-day-epic-tanzania-kenya-safari",
    category: "SAFARI",
    duration: 10,
    nights: 9,
    travelStyle: "Luxury Cross-Border Safari",
    themes: ["wildlife", "adventure", "luxury"],
    bestFor: ["couples", "families", "adventure seekers"],
    experienceSummary: "An epic 10-day journey through Tanzania and Kenya showcasing the greatest wildlife experiences of East Africa.",
    shortDescription: "Experience the best of Tanzania and Kenya in 10 days with safaris through Serengeti, Ngorongoro, and Maasai Mara.",
    fullDescription: "This comprehensive cross-border safari takes you through Tanzania's iconic parks and into Kenya's famous Maasai Mara, offering unparalleled wildlife viewing and authentic East African experiences.",
    destinationsDetailed: [
      {
        place: "Serengeti National Park",
        nights: 3,
        description: "Explore the Great Migration and vast plains of the world-famous Serengeti.",
        accommodation: {
          name: "Serengeti Luxury Camp",
          type: "Luxury Tented Camp",
          highlights: ["Central location", "Luxury amenities", "Game drives"],
          images: ["https://images.unsplash.com/photo-1551632811-561732d1c5e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"]
        }
      },
      {
        place: "Ngorongoro Crater",
        nights: 2,
        description: "Visit the 8th wonder of the Natural World with exceptional wildlife densities.",
        accommodation: {
          name: "Ngorongoro Lodge",
          type: "Luxury Lodge",
          highlights: ["Crater rim location", "Luxury amenities", "Stunning views"],
          images: ["https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"]
        }
      },
      {
        place: "Maasai Mara National Reserve",
        nights: 3,
        description: "Experience Kenya's premier wildlife destination with the Great Migration.",
        accommodation: {
          name: "Mara Luxury Safari Lodge",
          type: "Luxury Lodge",
          highlights: ["Game drive access", "Mara River views", "Luxury amenities"],
          images: ["https://images.unsplash.com/photo-1516426122078-c23e76319801?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"]
        }
      }
    ],
    highlights: ["Serengeti National Park", "Great Migration", "Ngorongoro Crater", "Maasai Mara", "Big Five sightings", "Luxury accommodations", "Cross-border experience"],
    mainImage:"https://images.unsplash.com/photo-1516426122078-c23e76319801?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    gallery: [
       "https://images.unsplash.com/photo-1577971132997-c10be9372519?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
         "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      
      "https://images.unsplash.com/photo-1597877774402-d04cad0b7596?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1703934169695-9c91c8bc69c3?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
   
    ],
    priceType: "FIXED",
    priceFrom: 3890,
    currency: "USD",
    pricingNotes: "Price per person. Includes domestic flights.",
    inclusions: {
      included: ["All meals", "Accommodation", "Park fees", "Game drives", "Professional guides", "Domestic flights", "Airport transfers"],
      excluded: ["International flights", "Kenya visa", "Travel insurance", "Tips", "Personal items"]
    },
    gettingThere: {
      description: "Tour starts in Dar es Salaam, Tanzania and ends in Nairobi, Kenya. Fly to Julius Nyerere International Airport (DAR)."
    },
    isActive: true,
    createdAt: new Date("2025-10-01"),
    updatedAt: new Date("2026-04-28")
  },
  {
    id: 3,
    offeredBy: "Asili Explorer Safaris",
    name: "7-Day Classic Serengeti & Ngorongoro Safari",
    slug: "7-day-classic-serengeti-ngorongoro-safari",
    category: "SAFARI",
    duration: 7,
    nights: 6,
    travelStyle: "Classic Safari Adventure",
    themes: ["wildlife", "adventure", "nature"],
    bestFor: ["families", "couples", "nature lovers"],
    experienceSummary: "Experience the classic northern Tanzania safari circuit with focused time in the world-renowned Serengeti and magnificent Ngorongoro Crater.",
    shortDescription: "Dedicated 7-day safari featuring Serengeti and Ngorongoro Crater with expert guides and quality accommodations.",
    fullDescription: "This classic safari combines extended time in the Serengeti National Park with visits to other northern circuit parks, offering excellent wildlife viewing opportunities throughout.",
    destinationsDetailed: [
      {
        place: "Serengeti National Park",
        nights: 3,
        description: "Home to the Great Migration and 2 million wildebeests. Exceptional game drives.",
        accommodation: {
          name: "Serengeti Classic Camp",
          type: "Mid-range Tented Camp",
          highlights: ["Central location", "Game drives", "Comfortable amenities"],
          images: ["https://images.unsplash.com/photo-1551632811-561732d1c5e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"]
        }
      },
      {
        place: "Ngorongoro Crater",
        nights: 2,
        description: "The 8th wonder with exceptional Big Five sightings.",
        accommodation: {
          name: "Ngorongoro Classic Lodge",
          type: "Mid-range Lodge",
          highlights: ["Crater views", "Game drives", "Comfortable amenities"],
          images: ["https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"]
        }
      },
      {
        place: "Lake Manyara National Park",
        nights: 1,
        description: "Beautiful park with tree-climbing lions and diverse wildlife.",
        accommodation: {
          name: "Lake Manyara Lodge",
          type: "Mid-range Lodge",
          highlights: ["Lake views", "Game drives", "Comfortable amenities"],
          images: ["https://images.unsplash.com/photo-1573843988976-8a4c7a9b0e6a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"]
        }
      }
    ],
    highlights: ["Serengeti extended time", "Great Migration", "Ngorongoro Crater", "Lake Manyara", "Big Five sightings", "Quality accommodations"],
    mainImage: "https://images.unsplash.com/photo-1577971132997-c10be9372519?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    gallery: [
      "https://images.unsplash.com/photo-1664270716975-33992d17fdb3?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1516426122078-c23e76319801?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    ],
    priceType: "FIXED",
    priceFrom: 2490,
    currency: "USD",
    pricingNotes: "Price per person.",
    inclusions: {
      included: ["Accommodation (6 nights)", "All meals", "Game drives", "Professional guides", "Park fees", "Airport transfer"],
      excluded: ["International flights", "Travel insurance", "Tips", "Personal items"]
    },
    gettingThere: {
      description: "Tour starts and ends in Arusha. Fly to Kilimanjaro International Airport (JRO)."
    },
    isActive: true,
    createdAt: new Date("2025-10-01"),
    updatedAt: new Date("2026-04-28")
  },
  {
    id: 4,
    offeredBy: "Asili Explorer Safaris",
    name: "4-Day Budget Tarangire & Lake Manyara Safari",
    slug: "4-day-budget-tarangire-lake-manyara",
    category: "SAFARI",
    duration: 4,
    nights: 3,
    travelStyle: "Budget Safari Adventure",
    themes: ["wildlife", "budget-friendly", "nature"],
    bestFor: ["solo travelers", "budget travelers", "first-time safari goers"],
    experienceSummary: "An affordable safari option combining Tarangire and Lake Manyara parks with budget-friendly accommodations.",
    shortDescription: "Budget-friendly 4-day safari through Tarangire and Lake Manyara parks with comfortable budget accommodations.",
    fullDescription: "This budget-friendly safari option provides excellent value while maintaining quality wildlife viewing experiences in two of Tanzania's most prolific parks.",
    destinationsDetailed: [
      {
        place: "Tarangire National Park",
        nights: 2,
        description: "Famous for abundant elephants and diverse wildlife.",
        accommodation: {
          name: "Tarangire Budget Lodge",
          type: "Budget Lodge",
          highlights: ["Basic amenities", "Game drives", "Value for money"],
          images: ["https://images.unsplash.com/photo-1516426122078-c23e76319801?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"]
        }
      },
      {
        place: "Lake Manyara National Park",
        nights: 1,
        description: "Stunning lake scenery with tree-climbing lions.",
        accommodation: {
          name: "Lake Manyara Budget Camp",
          type: "Budget Tented Camp",
          highlights: ["Basic amenities", "Game drives", "Lake views"],
          images: ["https://images.unsplash.com/photo-1573843988976-8a4c7a9b0e6a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"]
        }
      }
    ],
    highlights: ["Elephant viewing", "Tree-climbing lions", "Lake Manyara scenery", "Budget-friendly", "Quality game drives"],
    mainImage: "https://images.unsplash.com/photo-1577971132997-c10be9372519?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    gallery: [
      
      "https://images.unsplash.com/photo-1577971132997-c10be9372519?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1664270716975-33992d17fdb3?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1659639237065-2024e2acb382?q=80&w=627&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    ],
    priceType: "FIXED",
    priceFrom: 1290,
    currency: "USD",
    pricingNotes: "Budget option. Price per person.",
    inclusions: {
      included: ["Accommodation (3 nights)", "All meals", "Game drives", "Professional guides", "Park fees"],
      excluded: ["International flights", "Travel insurance", "Tips", "Personal items", "Airport transfer"]
    },
    gettingThere: {
      description: "Tour starts and ends in Arusha."
    },
    isActive: true,
    createdAt: new Date("2025-10-01"),
    updatedAt: new Date("2026-04-28")
  }
  ,{
    id: 5,
    offeredBy: "Asili Explorer Safaris",
    name: "8-Day Ultimate Tanzania Safari - Luxury",
    slug: "8-day-ultimate-tanzania-safari-luxury",
    category: "SAFARI",
    duration: 8,
    nights: 7,
    travelStyle: "Luxury Safari",
    themes: ["wildlife", "adventure", "luxury"],
    bestFor: ["couples", "families", "photographers"],
    experienceSummary: "A premium northern circuit safari with Tarangire, Lake Manyara, Serengeti, and Ngorongoro in luxury style.",
    shortDescription: "Experience Tanzania in ultimate luxury across 8 days with premium lodges, private guiding, and seamless transfers.",
    fullDescription: "This luxury safari explores Tanzania's northern circuit in style with Tarangire, Lake Manyara, the Serengeti for three nights, and the Ngorongoro Crater.",
    destinationsDetailed: [
      { place: "Tarangire National Park", nights: 1, description: "Elephant-rich start to the safari.", accommodation: { name: "Tarangire Treetops", type: "Luxury lodge", highlights: ["Treehouse style", "Game drives", "Views"], images: ["https://images.unsplash.com/photo-1546182990-d3048558c36b?auto=format&fit=crop&w=1200&q=80"] } },
      { place: "Lake Manyara National Park", nights: 1, description: "Scenic lake and escarpment views.", accommodation: { name: "Lake Manyara Serena Lodge", type: "Luxury lodge", highlights: ["Lake views", "Escarpment views", "Luxury amenities"], images: ["https://images.unsplash.com/photo-1573843988976-8a4c7a9b0e6a?auto=format&fit=crop&w=1200&q=80"] } },
      { place: "Serengeti National Park", nights: 3, description: "Three nights for migration, cats, and classic plains game.", accommodation: { name: "Four Seasons Safari Lodge Serengeti", type: "Luxury lodge", highlights: ["Premium lodge", "Infinity pool", "Wildlife views"], images: ["https://images.unsplash.com/photo-1551632811-561732d1c5e0?auto=format&fit=crop&w=1200&q=80"] } },
      { place: "Ngorongoro Crater", nights: 2, description: "End with crater game drives and rim-side relaxation.", accommodation: { name: "&Beyond Ngorongoro Crater Lodge", type: "Ultra-luxury lodge", highlights: ["Crater rim", "Butler service", "Stunning views"], images: ["https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?auto=format&fit=crop&w=1200&q=80"] } }
    ],
    highlights: ["Tarangire National Park", "Lake Manyara National Park", "Serengeti National Park (3 nights)", "Ngorongoro Crater", "Luxury lodges", "Private guide"],
    mainImage: "https://images.unsplash.com/photo-1542085215-673021bf5caa?auto=format&fit=crop&w=1600&q=80",
    gallery: ["https://images.unsplash.com/photo-1659639237065-2024e2acb382?q=80&w=627&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", "https://images.unsplash.com/photo-1667377503962-5f90ce619b89?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://plus.unsplash.com/premium_photo-1661836037413-6b826387c96d?q=80&w=1861&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    ],
    priceType: "FIXED",
    priceFrom: 4250,
    currency: "USD",
    pricingNotes: "Price per person. Premium accommodations included.",
    inclusions: { included: ["Park fees", "Luxury accommodation", "Private guide", "4x4 vehicle", "Meals as listed", "Airport transfers"], excluded: ["International flights", "Travel insurance", "Tips", "Personal items"] },
    gettingThere: { description: "Starts and ends in Arusha." },
    isActive: true,
    createdAt: new Date("2025-10-01"),
    updatedAt: new Date("2026-04-28")
  },
  {
    id: 6,
    offeredBy: "Asili Explorer Safaris",
    name: "7-Day Family-Friendly Tanzania Safari",
    slug: "7-day-family-friendly-tanzania-safari",
    category: "SAFARI",
    duration: 7,
    nights: 6,
    travelStyle: "Family Safari",
    themes: ["wildlife", "family", "educational"],
    bestFor: ["families", "children", "first-time safari goers"],
    experienceSummary: "A gentle-paced northern circuit safari with child-friendly lodges, pools, and educational activities.",
    shortDescription: "A family safari designed for children 5+ with shorter game drives, pools, and fun activities.",
    fullDescription: "This family-oriented safari balances wildlife excitement with comfort and safety, with kid-approved meals, swimming pools, and naturalist guides.",
    destinationsDetailed: [
      { place: "Tarangire National Park", nights: 1, description: "Elephant-focused introduction to safari life.", accommodation: { name: "Tarangire Safari Lodge", type: "Mid-range lodge", highlights: ["Pool", "Family rooms", "Wildlife nearby"], images: ["https://images.unsplash.com/photo-1560250037-7f0b8b3c4a2e?auto=format&fit=crop&w=1200&q=80"] } },
      { place: "Lake Manyara National Park", nights: 1, description: "Short drive and a chance for tree-climbing lions and flamingos.", accommodation: { name: "Lake Manyara Kilimo Camp", type: "Eco-lodge", highlights: ["Garden setting", "Pool", "Family friendly"], images: ["https://images.unsplash.com/photo-1573843988976-8a4c7a9b0e6a?auto=format&fit=crop&w=1200&q=80"] } },
      { place: "Serengeti National Park", nights: 2, description: "Flexible game drives and wildlife bingo for children.", accommodation: { name: "Serengeti Kati Kati Tented Camp", type: "Comfortable tented camp", highlights: ["En-suite bathrooms", "Game drives", "Kids activities"], images: ["https://images.unsplash.com/photo-1551632811-561732d1c5e0?auto=format&fit=crop&w=1200&q=80"] } },
      { place: "Ngorongoro Crater", nights: 2, description: "Family-friendly crater exploration and relaxed lodge time.", accommodation: { name: "Ngorongoro Rhino Lodge", type: "Family-friendly lodge", highlights: ["Crater access", "Family suites", "Relaxed pace"], images: ["https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?auto=format&fit=crop&w=1200&q=80"] } }
    ],
    highlights: ["Family suites available", "Child-friendly activities", "Swimming pools at lodges", "Private vehicle with child seats"],
    mainImage: "https://plus.unsplash.com/premium_photo-1664302622341-e04fadaa8574?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    gallery: ["https://images.unsplash.com/photo-1551632811-561732d1c5e0?auto=format&fit=crop&w=1200&q=80","https://images.unsplash.com/photo-1560250037-7f0b8b3c4a2e?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1678461048112-2bb5298f7187?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    ],
    priceType: "FIXED",
    priceFrom: 3150,
    currency: "USD",
    pricingNotes: "Price per person. Family pricing available.",
    inclusions: { included: ["Park fees", "Family lodges", "Private 4x4", "All meals", "Airport transfers", "Junior Ranger kits"], excluded: ["International flights", "Travel insurance", "Tips", "Optional cultural visits"] },
    gettingThere: { description: "Starts and ends in Arusha." },
    isActive: true,
    createdAt: new Date("2025-10-01"),
    updatedAt: new Date("2026-04-28")
  }
];

export const kilimanjaroPackages = [
   {
  id: 24,
  offeredBy: "Asili Explorer Safaris",
    name: "5-Day Kilimanjaro Trek - Marangu Route",
    slug: "5-day-kilimanjaro-trek-marangu-route",
    category: "KILIMANJARO",
    duration: 5,
    nights: 4,
    travelStyle: "Mountain Trekking",
    themes: ["adventure", "mountain climbing", "nature"],
    bestFor: ["adventurers", "fitness enthusiasts", "mountain lovers"],
    experienceSummary: "Conquer Africa's highest peak via the popular Marangu Route with hut accommodation and a steady ascent to Uhuru Peak.",
    shortDescription: "Climb Mount Kilimanjaro via the Marangu Route with comfortable hut accommodation and reach Uhuru Peak, Africa's highest point.",
    fullDescription: "This 5-day trek on the Marangu Route offers hut accommodation and a steady ascent to Uhuru Peak, the highest point in Africa (5,895m). Guided by experienced professionals with all necessary equipment provided.",
    destinationsDetailed: [
      {
        place: "Marangu Gate to Mandara Huts",
        nights: 1,
        description: "Trek through lush montane forest to Mandara Huts at 2,700m.",
        accommodation: {
          name: "Mandara Huts",
          type: "Basic Mountain Hut",
          highlights: ["Mountain hut", "Forest views", "Basic amenities"],
          images: ["https://images.unsplash.com/photo-1551632811-561732d1c5e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"]
        }
      },
      {
        place: "Mandara Huts to Horombo Huts",
        nights: 1,
        description: "Continue trek through moorland to Horombo Huts at 3,720m.",
        accommodation: {
          name: "Horombo Huts",
          type: "Basic Mountain Hut",
          highlights: ["Mountain hut", "Moorland views", "Basic amenities"],
          images: ["https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"]
        }
      },
      {
        place: "Horombo Huts to Kibo Huts",
        nights: 1,
        description: "Ascend to alpine desert zone. Reach Kibo Huts at 4,700m.",
        accommodation: {
          name: "Kibo Huts",
          type: "Basic Mountain Hut",
          highlights: ["Alpine hut", "Crater views", "Basic amenities"],
          images: ["https://images.unsplash.com/photo-1516426122078-c23e76319801?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"]
        }
      },
      {
        place: "Kibo Huts to Uhuru Peak to Mweka Gate",
        nights: 1,
        description: "Summit attempt starting midnight. Reach Uhuru Peak at 5,895m.",
        accommodation: {
          name: "None (Day Trek)",
          type: "Day Trek",
          highlights: ["Summit experience", "Sunrise views", "Achievement"],
          images: []
        }
      }
    ],
    highlights: ["Summit Mount Kilimanjaro", "Uhuru Peak experience", "Diverse ecosystems", "Comfortable hut accommodation", "Professional guides", "All equipment provided"],
    mainImage: "https://images.unsplash.com/photo-1691677543751-f47087859ecd?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    gallery: [
      "https://images.unsplash.com/photo-1691677543751-f47087859ecd?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://plus.unsplash.com/premium_photo-1661936361131-c421746dcd0d?q=80&w=959&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    ],
    priceType: "FIXED",
    priceFrom: 1950,
    currency: "USD",
    pricingNotes: "Price per person. Minimum age 10 years.",
    inclusions: {
      included: ["Mountain hut accommodation", "All meals", "Professional guide", "Trekking poles", "Park fees", "Equipment"],
      excluded: ["International flights", "Travel insurance", "Tips", "Personal items", "Sleeping bag rental"]
    },
    gettingThere: {
      description: "Trek starts and ends in Moshi. Fly to Kilimanjaro International Airport (JRO)."
    },
    isActive: true,
    createdAt: new Date("2025-10-01"),
    updatedAt: new Date("2026-04-28")
  },
  {
    id: 7,
    offeredBy: "Asili Explorer Safaris",
    name: "7-Day Machame Route Climb",
    slug: "7-day-machame-route-climb",
    category: "KILIMANJARO",
    duration: 7,
    nights: 6,
    travelStyle: "Mountain Trekking",
    themes: ["climbing", "adventure", "mountaineering"],
    bestFor: ["adventure seekers", "trekkers", "photographers"],
    experienceSummary: "The classic scenic route up Kilimanjaro with strong acclimatization and varied landscapes.",
    shortDescription: "Climb Kilimanjaro via the scenic Machame Route with excellent acclimatization and high summit success.",
    fullDescription: "The Machame Route is the most popular Kilimanjaro route, known for its diverse landscapes from rainforest to alpine desert and a strong summit success rate.",
    destinationsDetailed: [
      { place: "Machame Gate to Machame Camp", nights: 1, description: "Rainforest approach to the mountain.", accommodation: { name: "Machame Camp", type: "Basic mountain tent", highlights: ["Rainforest", "First camp", "Trekking"], images: ["https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=1200&q=80"] } },
      { place: "Machame Camp to Shira Camp", nights: 1, description: "Climb into the moorland zone.", accommodation: { name: "Shira Camp", type: "High-altitude tent", highlights: ["Shira Plateau", "Views of Kibo", "Acclimatization"], images: ["https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=1200&q=80"] } },
      { place: "Shira to Barranco Camp", nights: 2, description: "Lava Tower acclimatization and the Barranco Wall.", accommodation: { name: "Barranco Camp", type: "Scenic cliffside camp", highlights: ["Barranco Wall", "Acclimatization", "Views"], images: ["https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1200&q=80"] } },
      { place: "Barafu Camp to Uhuru Peak", nights: 2, description: "Summit push and descent to Mweka.", accommodation: { name: "Mweka Camp", type: "Descent camp", highlights: ["Summit day", "Uhuru Peak", "Descent"], images: ["https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=1200&q=80"] } }
    ],
    highlights: ["Best scenery", "Great acclimatization", "High success rate"],
    mainImage: "https://tanzania-specialist.com/wp-content/uploads/2023/08/19-Kilimanjaro-marangu-1024x683.jpg",
    gallery: ["https://tanzania-specialist.com/wp-content/uploads/2023/08/19-Kilimanjaro-marangu-1024x683.jpg", "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=1200&q=80"],
    priceType: "FIXED",
    priceFrom: 2400,
    currency: "USD",
    pricingNotes: "Price per person. Includes park fees, guides, porters, meals, and transfers.",
    inclusions: { included: ["Park fees", "Guides", "Porters", "Meals", "Transfers"], excluded: ["Tips", "Visa", "Flights", "Insurance"] },
    gettingThere: { description: "Tour starts and ends in Arusha." },
    isActive: true,
    createdAt: new Date("2025-10-01"),
    updatedAt: new Date("2026-04-28")
  },
  {
    id: 8,
    offeredBy: "Asili Explorer Safaris",
    name: "6-Day Marangu Route Climb",
    slug: "6-day-marangu-route-climb",
    category: "KILIMANJARO",
    duration: 6,
    nights: 5,
    travelStyle: "Mountain Trekking",
    themes: ["climbing", "budget travel", "first-time climbers"],
    bestFor: ["budget climbers", "first-time climbers", "trekkers"],
    experienceSummary: "The only route with hut accommodation and a direct ascent to the summit.",
    shortDescription: "Climb Kilimanjaro via the Marangu Route with hut lodging and an acclimatization day.",
    fullDescription: "Known as the Coca-Cola Route, Marangu offers shared hut accommodation, a gentler trail, and a straightforward path to the summit.",
    destinationsDetailed: [
      { place: "Marangu Gate to Mandara Hut", nights: 1, description: "Rainforest trek to the first hut.", accommodation: { name: "Mandara Hut", type: "Mountain hut", highlights: ["Hut lodging", "Rainforest", "Easy start"], images: ["https://tanzania-specialist.com/wp-content/uploads/2023/08/21-Kilimanjaro-Lemosho-1024x767.jpg"] } },
      { place: "Mandara Hut to Horombo Hut", nights: 2, description: "Moorland ascent with an acclimatization day.", accommodation: { name: "Horombo Hut", type: "Mountain hut", highlights: ["Dining hall", "Acclimatization", "Basic comfort"], images: ["https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1200&q=80"] } },
      { place: "Horombo Hut to Kibo Hut", nights: 1, description: "Cross the alpine desert to summit base camp.", accommodation: { name: "Kibo Hut", type: "Summit base hut", highlights: ["Base camp", "Summit preparation", "Higher altitude"], images: ["https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=1200&q=80"] } },
      { place: "Kibo Hut to Uhuru Peak to Horombo", nights: 1, description: "Summit attempt and descent for recovery.", accommodation: { name: "Horombo Hut", type: "Recovery hut", highlights: ["Summit day", "Recovery", "Descent"], images: [] } }
    ],
    highlights: ["Hut accommodation", "Direct route", "Budget friendly"],
    mainImage: "https://tanzania-specialist.com/wp-content/uploads/2023/08/21-Kilimanjaro-Lemosho-1024x767.jpg",
    gallery: ["https://tanzania-specialist.com/wp-content/uploads/2023/08/21-Kilimanjaro-Lemosho-1024x767.jpg", "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1200&q=80"],
    priceType: "FIXED",
    priceFrom: 2100,
    currency: "USD",
    pricingNotes: "Price per person. Hut fees included.",
    inclusions: { included: ["Hut accommodation", "Meals", "Guides", "Porters", "Park fees"], excluded: ["Sleeping bag", "Tips", "Flights", "Insurance"] },
    gettingThere: { description: "Starts and ends in Arusha." },
    isActive: true,
    createdAt: new Date("2025-10-01"),
    updatedAt: new Date("2026-04-28")
  },
  {
    id: 9,
    offeredBy: "Asili Explorer Safaris",
    name: "8-Day Lemosho Route Climb",
    slug: "8-day-lemosho-route-climb",
    category: "KILIMANJARO",
    duration: 8,
    nights: 7,
    travelStyle: "Mountain Trekking",
    themes: ["climbing", "photography", "premium experience"],
    bestFor: ["serious trekkers", "photographers", "adventure seekers"],
    experienceSummary: "A scenic and less crowded route with excellent acclimatization and high success rates.",
    shortDescription: "Begin on Kilimanjaro’s western flank for a scenic, less-traveled climb with strong acclimatization.",
    fullDescription: "The Lemosho Route offers some of Kilimanjaro's best scenery, fewer crowds, and a high summit success rate thanks to excellent acclimatization.",
    destinationsDetailed: [
      { place: "Lemosho Gate to Mti Mkubwa Camp", nights: 1, description: "Enter pristine rainforest.", accommodation: { name: "Mti Mkubwa Camp", type: "Forest camp", highlights: ["Rainforest", "Colobus monkeys", "First night"], images: ["https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=1200&q=80"] } },
      { place: "Mti Mkubwa to Shira 1 Camp", nights: 1, description: "Move onto the Shira Plateau.", accommodation: { name: "Shira 1 Camp", type: "Moorland camp", highlights: ["Plateau views", "Acclimatization", "Open landscapes"], images: ["https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=1200&q=80"] } },
      { place: "Shira to Barranco Camp", nights: 4, description: "Acclimatize through Moir and Barranco before summit push.", accommodation: { name: "Barafu Camp", type: "Summit base camp", highlights: ["Barranco Wall", "Acclimatization", "Summit base"], images: ["https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=1200&q=80"] } },
      { place: "Summit to Mweka Camp", nights: 1, description: "Reach Uhuru Peak and descend to Mweka.", accommodation: { name: "Mweka Camp", type: "Descent camp", highlights: ["Summit day", "Descent", "Achievement"], images: [] } }
    ],
    highlights: ["Most scenic", "High success rate", "Less crowded"],
    mainImage: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=1600&q=80",
    gallery: ["https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=1200&q=80", "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=1200&q=80"],
    priceType: "FIXED",
    priceFrom: 2800,
    currency: "USD",
    pricingNotes: "Premium 8-day package with strong acclimatization.",
    inclusions: { included: ["Park fees", "Guides", "Porters", "Camping equipment", "Meals", "Transfers"], excluded: ["Sleeping bag", "Tips", "Flights", "Insurance"] },
    gettingThere: { description: "Starts in Arusha." },
    isActive: true,
    createdAt: new Date("2025-10-01"),
    updatedAt: new Date("2026-04-28")
  },
  {
    id: 10,
    offeredBy: "Asili Explorer Safaris",
    name: "7-Day Rongai Route Climb",
    slug: "7-day-rongai-route-climb",
    category: "KILIMANJARO",
    duration: 7,
    nights: 6,
    travelStyle: "Mountain Trekking",
    themes: ["climbing", "adventure", "off-the-beaten-path"],
    bestFor: ["trekkers", "adventure seekers", "photographers"],
    experienceSummary: "Approach Kilimanjaro from the dry north for a quieter trek and unique mountain views.",
    shortDescription: "A remote northern approach with drier conditions and strong acclimatization.",
    fullDescription: "Rongai is the only route approaching from the north, offering fewer crowds, drier conditions, and a distinct perspective of Kibo and Mawenzi.",
    destinationsDetailed: [
      { place: "Rongai Gate to First Cave", nights: 1, description: "Forest approach from the north.", accommodation: { name: "First Cave Camp", type: "Forest-edge camp", highlights: ["Remote start", "Northern approach", "Wildlife"], images: ["https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1200&q=80"] } },
      { place: "First Cave to Kikelewa Cave", nights: 1, description: "Climb through moorland with views of Mawenzi.", accommodation: { name: "Kikelewa Cave", type: "Moorland camp", highlights: ["Mawenzi views", "Quiet trail", "Acclimatization"], images: ["https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=1200&q=80"] } },
      { place: "Mawenzi Tarn to Kibo Hut", nights: 3, description: "Traverse alpine desert to base camp and summit.", accommodation: { name: "Kibo Hut", type: "Summit base", highlights: ["Base camp", "Summit push", "High altitude"], images: ["https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=1200&q=80"] } },
      { place: "Uhuru Peak to Marangu Gate", nights: 1, description: "Summit and descend via Marangu Gate.", accommodation: { name: "Horombo Hut", type: "Recovery hut", highlights: ["Summit day", "Descent", "Recovery"], images: [] } }
    ],
    highlights: ["Drier conditions", "Less crowded", "Unique views"],
    mainImage: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    gallery: ["https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1200&q=80", "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=1200&q=80"],
    priceType: "FIXED",
    priceFrom: 2450,
    currency: "USD",
    pricingNotes: "Price per person. Includes all park fees, meals, guides, and transfers.",
    inclusions: { included: ["Park fees", "Guides", "Porters", "Meals", "Transfers"], excluded: ["Sleeping bag", "Tips", "Flights", "Insurance"] },
    gettingThere: { description: "Tour starts and ends in Arusha." },
    isActive: true,
    createdAt: new Date("2025-10-01"),
    updatedAt: new Date("2026-04-28")
  },
  {
    id: 11,
    offeredBy: "Asili Explorer Safaris",
    name: "9-Day Northern Circuit Climb",
    slug: "9-day-northern-circuit-climb",
    category: "KILIMANJARO",
    duration: 9,
    nights: 8,
    travelStyle: "Mountain Trekking",
    themes: ["climbing", "premium", "high success", "photography"],
    bestFor: ["serious trekkers", "photographers", "adventure seekers"],
    experienceSummary: "The longest route for maximum acclimatization and the highest summit success rates.",
    shortDescription: "Circumnavigate Kilimanjaro for the best acclimatization and a 95%+ success rate.",
    fullDescription: "The Northern Circuit is the ultimate Kilimanjaro experience, combining maximum acclimatization with minimal crowds and a near-complete lap of the mountain.",
    destinationsDetailed: [
      { place: "Lemosho Gate to Shira Plateau", nights: 3, description: "Scenic approach and gradual acclimatization.", accommodation: { name: "Shira Plateau Camps", type: "Premium mountain camp", highlights: ["Wide views", "Acclimatization", "Quiet trail"], images: ["https://tanzania-specialist.com/wp-content/uploads/2023/08/22-Kilimanjaro-Shira-1024x768.jpg"] } },
      { place: "Northern Slopes", nights: 2, description: "Remote, little-traveled terrain with strong acclimatization.", accommodation: { name: "Buffalo Camp", type: "Remote camp", highlights: ["Northern slopes", "Rarely visited", "Wild scenery"], images: ["https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=1200&q=80"] } },
      { place: "Barafu Camp", nights: 1, description: "Summit base before the final push.", accommodation: { name: "Barafu Camp", type: "Summit base", highlights: ["Summit prep", "High altitude", "Rest"], images: ["https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=1200&q=80"] } },
      { place: "Mweka Gate to Arusha", nights: 1, description: "Final descent and return to Arusha.", accommodation: { name: "Mweka Camp", type: "Descent camp", highlights: ["Descent", "Certificate", "Completion"], images: [] } }
    ],
    highlights: ["Best acclimatization", "Highest success", "Complete experience"],
    mainImage: "https://tanzania-specialist.com/wp-content/uploads/2023/08/22-Kilimanjaro-Shira-1024x768.jpg",
    gallery: ["https://tanzania-specialist.com/wp-content/uploads/2023/08/22-Kilimanjaro-Shira-1024x768.jpg", "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=1200&q=80"],
    priceType: "FIXED",
    priceFrom: 3200,
    currency: "USD",
    pricingNotes: "Premium 9-day package with highest success rate.",
    inclusions: { included: ["Park fees", "Guides", "Porters", "Premium tents", "Meals", "Transfers"], excluded: ["Sleeping bag", "Tips", "Flights", "Insurance"] },
    gettingThere: { description: "Starts in Arusha." },
    isActive: true,
    createdAt: new Date("2025-10-01"),
    updatedAt: new Date("2026-04-28")
  }
]

export const wildebeestMigrationPackages = [
  {
    id: 12,
    offeredBy: "Asili Explorer Safaris",
    name: "7-Day Great Migration River Crossing Safari",
    slug: "7-day-great-migration-river-crossing-safari",
    category: "WILDEBEEST",
    duration: 7,
    nights: 6,
    travelStyle: "Migration Focused Safari",
    themes: ["wildlife", "migration", "adventure", "photography"],
    bestFor: ["adventure seekers", "wildlife photographers", "nature lovers"],
    experienceSummary: "Track the herds from central Serengeti to the Mara River with expert migration guides.",
    shortDescription: "A private 7-day migration safari focused on river crossings, predator action, and Ngorongoro finale.",
    fullDescription: "This itinerary is designed around prime river-crossing season and focuses on maximum time in northern Serengeti migration zones. Expect flexible game drives, private guiding, and classic migration camps in the heart of the action.",
    destinationsDetailed: [
      {
        place: "Central Serengeti",
        nights: 2,
        description: "Begin with game drives in Seronera valley while following herd movement and predator interactions.",
        accommodation: {
          name: "Kati Kati Tented Camp",
          type: "Mid-range tented camp",
          highlights: ["Central location", "Game drives", "Comfortable stay"],
          images: ["https://images.unsplash.com/photo-1557050543-4d5f4e07ef46?auto=format&fit=crop&w=1200&q=80"]
        }
      },
      {
        place: "Northern Serengeti & Mara River",
        nights: 3,
        description: "Focus on river-crossing points and nearby valleys where the herds gather before crossing.",
        accommodation: {
          name: "Nyikani Migration Camp",
          type: "Mid-range migration camp",
          highlights: ["Migration views", "River proximity", "Expert guides"],
          images: ["https://images.unsplash.com/photo-1508817628294-5a453fa0b8fb?auto=format&fit=crop&w=1200&q=80"]
        }
      },
      {
        place: "Ngorongoro Crater",
        nights: 1,
        description: "Finish with a crater game drive and a strong chance of Big Five sightings before returning to Arusha.",
        accommodation: {
          name: "Ngorongoro Farm House",
          type: "Lodge in Karatu",
          highlights: ["Crater access", "Relaxed finish", "Comfortable lodge"],
          images: ["https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?auto=format&fit=crop&w=1200&q=80"]
        }
      }
    ],
    highlights: ["Northern Serengeti river crossing zones", "Mara River migration movement", "Central Serengeti predator action", "Ngorongoro Crater finale"],
    mainImage: "https://images.unsplash.com/photo-1557050543-4d5f4e07ef46?auto=format&fit=crop&w=1600&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1557050543-4d5f4e07ef46?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1508817628294-5a453fa0b8fb?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=1200&q=80"
    ],
    priceType: "FIXED",
    priceFrom: 3890,
    currency: "USD",
    pricingNotes: "Rates are per person sharing and exclude international flights.",
    inclusions: {
      included: ["Park fees", "Private guide", "4x4 vehicle", "Accommodation and meals as listed"],
      excluded: ["Flights", "Visa", "Insurance", "Tips", "Personal items"]
    },
    gettingThere: {
      description: "Starts and ends in Arusha."
    },
    isActive: true,
    createdAt: new Date("2025-07-01"),
    updatedAt: new Date("2026-04-28")
  },
  {
    id: 13,
    offeredBy: "Asili Explorer Safaris",
    name: "5-Day Ndutu Calving Season Migration Safari",
    slug: "5-day-ndutu-calving-season-migration-safari",
    category: "WILDEBEEST",
    duration: 5,
    nights: 4,
    travelStyle: "Mid-range Migration Safari",
    themes: ["wildlife", "migration", "photography", "calving season"],
    bestFor: ["wildlife enthusiasts", "photographers", "nature lovers"],
    experienceSummary: "Designed for January-March calving season in Southern Serengeti and Ndutu plains.",
    shortDescription: "A short migration safari built around calving season action in Ndutu and Southern Serengeti.",
    fullDescription: "Perfect for the calving season, this itinerary targets the Southern Serengeti and Ndutu plains where predator action is high and newborn herds are abundant.",
    destinationsDetailed: [
      {
        place: "Ndutu Calving Areas",
        nights: 2,
        description: "Follow calving herds across open plains where predator encounters are frequent.",
        accommodation: {
          name: "Ndutu Heritage Camp",
          type: "Mid-range tented camp",
          highlights: ["Calving season access", "Migration views", "Comfortable camp"],
          images: ["https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?auto=format&fit=crop&w=1200&q=80"]
        }
      },
      {
        place: "Southern Serengeti",
        nights: 1,
        description: "Explore open plains and kopjes where cats often patrol migration routes.",
        accommodation: {
          name: "Kati Kati Camp",
          type: "Tented camp",
          highlights: ["Game drive access", "Wildlife movement", "Mid-range comfort"],
          images: ["https://images.unsplash.com/photo-1535941339077-2dd1c7963098?auto=format&fit=crop&w=1200&q=80"]
        }
      },
      {
        place: "Ngorongoro Crater",
        nights: 1,
        description: "End with a morning crater drive before transferring back to Arusha.",
        accommodation: {
          name: "End of tour",
          type: "No accommodation",
          highlights: ["Crater finale", "Big Five chance", "Return transfer"],
          images: []
        }
      }
    ],
    highlights: ["Ndutu plains", "Southern Serengeti", "Calving season herds", "Predator encounters"],
    mainImage: "https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?auto=format&fit=crop&w=1600&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1551632811-561732d1c5e0?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1535941339077-2dd1c7963098?auto=format&fit=crop&w=1200&q=80"
    ],
    priceType: "FIXED",
    priceFrom: 2990,
    currency: "USD",
    pricingNotes: "Rates are per person based on double occupancy.",
    inclusions: {
      included: ["Park fees", "Guide", "4x4", "Meals and lodging as shown"],
      excluded: ["International flights", "Visa", "Insurance", "Tips"]
    },
    gettingThere: {
      description: "Starts and ends in Arusha."
    },
    isActive: true,
    createdAt: new Date("2025-07-01"),
    updatedAt: new Date("2026-04-28")
  },
  {
    id: 14,
    offeredBy: "Asili Explorer Safaris",
    name: "8-Day Luxury Great Migration Fly-In Safari",
    slug: "8-day-luxury-great-migration-fly-in-safari",
    category: "WILDEBEEST",
    duration: 8,
    nights: 7,
    travelStyle: "Luxury Fly-In Safari",
    themes: ["luxury", "migration", "photography", "fly-in"],
    bestFor: ["luxury travelers", "photographers", "couples"],
    experienceSummary: "Luxury fly-in migration safari with premium lodges and maximum wildlife time.",
    shortDescription: "Minimize road transfers and maximize migration sightings with scenic flights between key Serengeti sectors.",
    fullDescription: "This luxury itinerary keeps travel time low and wildlife time high, using scenic flights to move between the Serengeti sectors and focus on the best migration action.",
    destinationsDetailed: [
      {
        place: "Arusha",
        nights: 1,
        description: "Arrival briefing and migration season planning with your guide.",
        accommodation: {
          name: "Arusha Coffee Lodge",
          type: "Luxury lodge",
          highlights: ["Arrival comfort", "Trip briefing", "Relaxed start"],
          images: ["https://images.unsplash.com/photo-1508817628294-5a453fa0b8fb?auto=format&fit=crop&w=1200&q=80"]
        }
      },
      {
        place: "Central Serengeti",
        nights: 2,
        description: "Fly into Serengeti for cat-rich game drives and herd tracking.",
        accommodation: {
          name: "Namiri Plains",
          type: "Luxury camp",
          highlights: ["Central Serengeti access", "Luxury camp", "Game drives"],
          images: ["https://images.unsplash.com/photo-1535941339077-2dd1c7963098?auto=format&fit=crop&w=1200&q=80"]
        }
      },
      {
        place: "Northern Serengeti",
        nights: 4,
        description: "Spend multiple days near major crossing points with flexible game drives and premium camp service.",
        accommodation: {
          name: "Serengeti Bushtops",
          type: "Luxury camp",
          highlights: ["Migration focus", "Flexible game drives", "Premium dining"],
          images: ["https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?auto=format&fit=crop&w=1200&q=80"]
        }
      },
      {
        place: "Arusha",
        nights: 0,
        description: "Morning flight out and end of safari services.",
        accommodation: {
          name: "End of tour",
          type: "No accommodation",
          highlights: ["Return flight", "End of tour", "No road transfer"],
          images: []
        }
      }
    ],
    highlights: ["Fly-in access", "Northern Serengeti", "Luxury tented suites", "Private migration guide"],
    mainImage: "https://images.unsplash.com/photo-1508817628294-5a453fa0b8fb?auto=format&fit=crop&w=1600&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1508817628294-5a453fa0b8fb?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1535941339077-2dd1c7963098?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?auto=format&fit=crop&w=1200&q=80"
    ],
    priceType: "FIXED",
    priceFrom: 7420,
    currency: "USD",
    pricingNotes: "Rates are per person sharing including scheduled bush flights.",
    inclusions: {
      included: ["Luxury camps", "Internal flights", "Guide and vehicle", "Park fees"],
      excluded: ["International flights", "Visa", "Insurance", "Premium spirits"]
    },
    gettingThere: {
      description: "Starts and ends in Arusha with bush flights."
    },
    isActive: true,
    createdAt: new Date("2025-07-01"),
    updatedAt: new Date("2026-04-28")
  },
  {
    id: 15,
    offeredBy: "Asili Explorer Safaris",
    name: "6-Day Budget Wildebeest Migration Camping Safari",
    slug: "6-day-budget-wildebeest-migration-camping-safari",
    category: "WILDEBEEST",
    duration: 6,
    nights: 5,
    travelStyle: "Budget Camping Safari",
    themes: ["budget-friendly", "wildlife", "migration", "camping"],
    bestFor: ["budget travelers", "backpackers", "adventure travelers"],
    experienceSummary: "Affordable migration camping safari covering central and northern Serengeti zones.",
    shortDescription: "A value-focused migration itinerary with classic public camps and shared game drives.",
    fullDescription: "A budget-friendly option for travelers who want classic migration access, full camping support, and the flexibility of a shared safari vehicle.",
    destinationsDetailed: [
      {
        place: "Central Serengeti",
        nights: 1,
        description: "Transfer from Arusha and enjoy an afternoon game drive before campsite setup.",
        accommodation: {
          name: "Seronera Public Campsite",
          type: "Budget camping",
          highlights: ["Shared safari style", "Game drives", "Affordable"],
          images: ["https://images.unsplash.com/photo-1535941339077-2dd1c7963098?auto=format&fit=crop&w=1200&q=80"]
        }
      },
      {
        place: "Northern Serengeti",
        nights: 3,
        description: "Full migration tracking days in active herd corridors.",
        accommodation: {
          name: "Lobo Public Campsite",
          type: "Budget camping",
          highlights: ["Migration timing", "Shared game drives", "Camping support"],
          images: ["https://images.unsplash.com/photo-1557050543-4d5f4e07ef46?auto=format&fit=crop&w=1200&q=80"]
        }
      },
      {
        place: "Ngorongoro Highlands",
        nights: 1,
        description: "Scenic transfer and overnight near the crater rim.",
        accommodation: {
          name: "Simba Campsite",
          type: "Budget camping",
          highlights: ["Crater access", "Scenic stop", "Basic camp"],
          images: []
        }
      }
    ],
    highlights: ["Budget-friendly migration route", "Public camps", "Serengeti migration tracking"],
    mainImage: "https://images.unsplash.com/photo-1535941339077-2dd1c7963098?auto=format&fit=crop&w=1600&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1535941339077-2dd1c7963098?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1557050543-4d5f4e07ef46?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=1200&q=80"
    ],
    priceType: "FIXED",
    priceFrom: 2190,
    currency: "USD",
    pricingNotes: "Rates are per person in shared basis.",
    inclusions: {
      included: ["Camping equipment", "Guide", "Meals", "Park fees"],
      excluded: ["Flights", "Visa", "Insurance", "Tips", "Sleeping bag rental"]
    },
    gettingThere: {
      description: "Starts and ends in Arusha."
    },
    isActive: true,
    createdAt: new Date("2025-07-01"),
    updatedAt: new Date("2026-04-28")
  }
];

// Zanzibar Packages - Now using proper schema
export const zanzibarPackages = [
  {
    id: 16,
    offeredBy: "Asili Explorer Safaris",
    name: "3-Day Zanzibar Beach Getaway",
    slug: "3-day-zanzibar-beach-getaway",
    category: "ZANZIBAR",
    duration: 3,
    nights: 2,
    travelStyle: "Beach Relaxation",
    themes: ["beach", "relaxation", "culture"],
    bestFor: ["couples", "honeymooners", "beach lovers"],
    experienceSummary: "Escape to paradise with this short but sweet Zanzibar beach holiday. Perfect for a quick getaway.",
    shortDescription: "Relax on Zanzibar's pristine beaches with accommodation at a selected beach resort and half-board meals.",
    fullDescription: "Perfect for a quick getaway, this 3-day package includes transfers, accommodation at a selected beach resort, and half-board meals. Spend your days lounging on the beach, snorkeling, or exploring Stone Town.",
    destinationsDetailed: [
      {
        place: "Zanzibar Beach",
        nights: 2,
        description: "Pristine beaches with crystal clear waters, white sand, and stunning sunsets.",
        accommodation: {
          name: "Zanzibar Beach Resort",
          type: "Beach Resort",
          highlights: ["Beach access", "Water sports", "Restaurant & Bar"],
          images: ["https://images.unsplash.com/photo-1559494487-a5bbc635ed2b?q=80&w=858&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"]
        }
      }
    ],
    highlights: ["Pristine beaches", "Snorkeling opportunities", "Stone Town exploration", "Water sports", "Spa services", "Sunset views"],
    mainImage: "https://images.unsplash.com/photo-1559494487-a5bbc635ed2b?q=80&w=858&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    gallery: [
      "https://images.unsplash.com/photo-1559494487-a5bbc635ed2b?q=80&w=858&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1574482620811-1aa16ffe3c82?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    ],
    priceType: "FIXED",
    priceFrom: 850,
    currency: "USD",
    pricingNotes: "Price per person. Half-board meals included.",
    inclusions: {
      included: ["Accommodation (2 nights)", "Half-board meals", "Airport transfer", "Beach access"],
      excluded: ["International flights", "Travel insurance", "Excursions", "Tips", "Personal items"]
    },
    gettingThere: {
      description: "Fly to Abeid Amani Karume International Airport (ZNZ) in Zanzibar."
    },
    isActive: true,
    createdAt: new Date("2025-10-01"),
    updatedAt: new Date("2026-04-28")
  },
  {
    id: 17,
    offeredBy: "Asili Explorer Safaris",
    name: "7-Day Beach Paradise - Zanzibar",
    slug: "7-day-beach-paradise-zanzibar",
    category: "ZANZIBAR",
    duration: 7,
    nights: 6,
    travelStyle: "Luxury Beach Escape",
    themes: ["beach", "relaxation", "water sports"],
    bestFor: ["couples", "honeymooners", "beach lovers"],
    experienceSummary: "Seven days of pure paradise on Zanzibar's pristine beaches with luxury accommodations and world-class amenities.",
    shortDescription: "Enjoy 7 days of luxury beach relaxation on Zanzibar with water sports, spa, and fine dining.",
    fullDescription: "Extended beach vacation in luxury setting on Zanzibar's best beaches with full amenities and optional island excursions.",
    destinationsDetailed: [
      {
        place: "Zanzibar Beaches",
        nights: 6,
        description: "Pristine white sand beaches with crystal clear turquoise waters.",
        accommodation: {
          name: "Zanzibar Luxury Beach Resort",
          type: "Luxury Beach Resort",
          highlights: ["Beachfront location", "Spa services", "Water sports", "Fine dining"],
          images: ["https://images.unsplash.com/photo-1559494487-a5bbc635ed2b?q=80&w=858&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"]
        }
      }
    ],
    highlights: ["Luxury beachfront resort", "Water sports", "Spa and wellness", "Fine dining", "Sunset views", "Snorkeling"],
    mainImage: "https://images.unsplash.com/photo-1559494487-a5bbc635ed2b?q=80&w=858&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    gallery: [
      "https://images.unsplash.com/photo-1559494487-a5bbc635ed2b?q=80&w=858&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1574482620811-1aa16ffe3c82?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    ],
    priceType: "FIXED",
    priceFrom: 2490,
    currency: "USD",
    pricingNotes: "Luxury all-inclusive option. Price per person.",
    inclusions: {
      included: ["Luxury accommodation", "All meals", "Spa access", "Water sports", "Airport transfer"],
      excluded: ["International flights", "Tips", "Personal items"]
    },
    gettingThere: {
      description: "Fly to Zanzibar Airport (ZNZ). Direct or via Dar es Salaam."
    },
    isActive: true,
    createdAt: new Date("2025-10-01"),
    updatedAt: new Date("2026-04-28")
  },
  {
    id: 18,
    offeredBy: "Asili Explorer Safaris",
    name: "5-Day Budget Zanzibar Getaway",
    slug: "5-day-budget-zanzibar-getaway",
    category: "ZANZIBAR",
    duration: 5,
    nights: 4,
    travelStyle: "Budget Beach Holiday",
    themes: ["beach", "budget-friendly", "relaxation"],
    bestFor: ["budget travelers", "families", "backpackers"],
    experienceSummary: "Affordable beach holiday on Zanzibar with comfortable budget accommodations and stunning beach access.",
    shortDescription: "Budget-friendly 5-day beach holiday on Zanzibar with comfortable accommodations and beach activities.",
    fullDescription: "Affordable Zanzibar vacation offering great value with quality beach accommodations and activities.",
    destinationsDetailed: [
      {
        place: "Zanzibar Beaches",
        nights: 4,
        description: "Beautiful beaches with good value accommodations.",
        accommodation: {
          name: "Zanzibar Budget Beach Lodge",
          type: "Budget Beach Lodge",
          highlights: ["Beach access", "Basic amenities", "Value for money"],
          images: ["https://images.unsplash.com/photo-1559494487-a5bbc635ed2b?q=80&w=858&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"]
        }
      }
    ],
    highlights: ["Beach access", "Budget accommodations", "Swimming", "Relaxation", "Local food"],
    mainImage: "https://images.unsplash.com/photo-1559494487-a5bbc635ed2b?q=80&w=858&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    gallery: [
      "https://images.unsplash.com/photo-1559494487-a5bbc635ed2b?q=80&w=858&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    ],
    priceType: "FIXED",
    priceFrom: 550,
    currency: "USD",
    pricingNotes: "Budget option. Price per person.",
    inclusions: {
      included: ["Accommodation (4 nights)", "Basic meals", "Beach access"],
      excluded: ["International flights", "Excursions", "Tips", "Personal items"]
    },
    gettingThere: {
      description: "Fly to Zanzibar Airport (ZNZ)."
    },
    isActive: true,
    createdAt: new Date("2025-10-01"),
    updatedAt: new Date("2026-04-28")
  }
  ,{
    id: 19,
    offeredBy: "Asili Explorer Safaris",
    name: "7-Day Beach Paradise Escape - Zanzibar",
    slug: "7-day-beach-paradise-escape-zanzibar",
    category: "ZANZIBAR",
    duration: 7,
    nights: 6,
    travelStyle: "Luxury Beach Escape",
    themes: ["beach", "relaxation", "water sports"],
    bestFor: ["couples", "honeymooners", "beach lovers"],
    experienceSummary: "Luxury beachfront escape with spa time, water sports, and sunset dhow cruises.",
    shortDescription: "A 7-day luxury beach holiday with private beach access and premium resort service.",
    fullDescription: "Enjoy Zanzibar's pristine beaches in a luxury all-inclusive setting with spa treatments, gourmet dining, and optional Stone Town and spice tours.",
    destinationsDetailed: [
      { place: "Nungwi Beach", nights: 6, description: "White sands and turquoise waters with luxury resort stays.", accommodation: { name: "The Z Hotel Zanzibar", type: "Luxury beachfront suite", highlights: ["Ocean view", "Spa", "Private beach"], images: ["https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1200&q=80"] } }
    ],
    highlights: ["Private beach access", "Daily spa treatments", "All-inclusive gourmet meals", "Sunset dhow cruise"],
    mainImage: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1600&q=80",
    gallery: ["https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1200&q=80", "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80"],
    priceType: "FIXED",
    priceFrom: 1200,
    currency: "USD",
    pricingNotes: "Price per person based on double occupancy.",
    inclusions: { included: ["Luxury beach resort", "All meals", "Premium drinks", "Spa treatment", "Sunset dhow cruise", "Airport transfers"], excluded: ["International flights", "Visa", "Travel insurance", "Tips"] },
    gettingThere: { description: "Tour starts and ends at Zanzibar International Airport (ZNZ)." },
    isActive: true,
    createdAt: new Date("2025-10-01"),
    updatedAt: new Date("2026-04-28")
  },
  {
    id: 20,
    offeredBy: "Asili Explorer Safaris",
    name: "6-Day Cultural Zanzibar Explorer",
    slug: "6-day-cultural-zanzibar-explorer",
    category: "ZANZIBAR",
    duration: 6,
    nights: 5,
    travelStyle: "Cultural Beach Tour",
    themes: ["culture", "history", "beach", "family"],
    bestFor: ["families", "culture lovers", "first-time visitors"],
    experienceSummary: "Blend Stone Town, spice farms, Jozani Forest, and beach relaxation in one balanced itinerary.",
    shortDescription: "Discover Zanzibar's history, spice farms, and coastal culture with beach time in Kendwa.",
    fullDescription: "This Zanzibar trip combines cultural sightseeing and beach relaxation, including Stone Town, spice plantations, Jozani Forest, and Kendwa Beach.",
    destinationsDetailed: [
      { place: "Stone Town", nights: 3, description: "Historic core with guided walking tours and heritage stays.", accommodation: { name: "Zanzibar Palace Hotel", type: "Boutique heritage hotel", highlights: ["Stone Town", "Historic charm", "Central location"], images: ["https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80"] } },
      { place: "Kendwa Beach", nights: 2, description: "Finish with beach time and resort relaxation.", accommodation: { name: "Kendwa Rocks Beach Resort", type: "Mid-range beachfront lodge", highlights: ["Beachfront", "Ocean views", "Relaxation"], images: ["https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1200&q=80"] } }
    ],
    highlights: ["Stone Town UNESCO site", "Spice farm tour", "Jozani Forest", "Kendwa beach relaxation"],
    mainImage: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1600&q=80",
    gallery: ["https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80", "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1200&q=80"],
    priceType: "FIXED",
    priceFrom: 980,
    currency: "USD",
    pricingNotes: "Price per person. Family-friendly pacing.",
    inclusions: { included: ["Stone Town hotel", "Beach resort", "Daily breakfast", "Guided tours", "All transfers"], excluded: ["Flights", "Visa", "Travel insurance", "Tips"] },
    gettingThere: { description: "Starts at Zanzibar International Airport (ZNZ)." },
    isActive: true,
    createdAt: new Date("2025-10-01"),
    updatedAt: new Date("2026-04-28")
  },
  {
    id: 21,
    offeredBy: "Asili Explorer Safaris",
    name: "8-Day Honeymoon Bliss - Zanzibar",
    slug: "8-day-honeymoon-bliss-zanzibar",
    category: "ZANZIBAR",
    duration: 8,
    nights: 7,
    travelStyle: "Honeymoon Escape",
    themes: ["honeymoon", "luxury", "romance", "beach"],
    bestFor: ["honeymooners", "couples"],
    experienceSummary: "A romantic island escape with private villa stays, sunset cruises, and couples spa time.",
    shortDescription: "Celebrate love in paradise with private villas, candlelit dinners, and ocean views.",
    fullDescription: "This honeymoon package includes a private villa, couples spa experiences, romantic dinners, snorkeling, and sunset dhow sailing.",
    destinationsDetailed: [
      { place: "Pongwe Beach", nights: 7, description: "Private beachfront villa and romantic relaxation.", accommodation: { name: "The Palms Zanzibar", type: "Private luxury villa with pool", highlights: ["Private pool", "Butler service", "Romantic setting"], images: ["https://images.unsplash.com/photo-1659639237065-2024e2acb382?auto=format&fit=crop&w=1200&q=80"] } }
    ],
    highlights: ["Private pool villa", "Daily breakfast in bed", "Couples spa package", "Private sunset cruise"],
    mainImage: "https://images.unsplash.com/photo-1659639237065-2024e2acb382?q=80&w=627&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    gallery: ["https://images.unsplash.com/photo-1659639237065-2024e2acb382?auto=format&fit=crop&w=1200&q=80", "https://images.unsplash.com/photo-1507699622108-4be1e9b8a580?auto=format&fit=crop&w=1200&q=80"],
    priceType: "FIXED",
    priceFrom: 2450,
    currency: "USD",
    pricingNotes: "Price for two people based on double occupancy.",
    inclusions: { included: ["Private villa", "All meals", "Premium drinks", "Spa treatment", "Sunset dhow cruise", "Transfers"], excluded: ["Flights", "Visa", "Insurance", "Tips"] },
    gettingThere: { description: "Starts at Zanzibar International Airport (ZNZ)." },
    isActive: true,
    createdAt: new Date("2025-10-01"),
    updatedAt: new Date("2026-04-28")
  },
  {
    id: 22,
    offeredBy: "Asili Explorer Safaris",
    name: "7-Day Family Zanzibar Adventure",
    slug: "7-day-family-zanzibar-adventure",
    category: "ZANZIBAR",
    duration: 7,
    nights: 6,
    travelStyle: "Family Beach Holiday",
    themes: ["family", "kids", "beach", "educational"],
    bestFor: ["families", "children", "educational travel"],
    experienceSummary: "Kid-friendly beach holiday with shallow lagoons, cultural tours, and family suites.",
    shortDescription: "A family Zanzibar holiday with safe swimming beaches, spice tours, and turtle sanctuaries.",
    fullDescription: "Perfect for families, this Zanzibar itinerary features safe beaches, interactive spice tours, turtle sanctuaries, and spacious family rooms.",
    destinationsDetailed: [
      { place: "Paje Beach", nights: 2, description: "Shallow lagoons and beach club activities.", accommodation: { name: "White Sands Luxury Villas & Spa", type: "Family suite resort", highlights: ["Family suites", "Pool", "Kids' club"], images: ["https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1200&q=80"] } },
      { place: "Jambiani", nights: 1, description: "Calm coast and turtle sanctuary visit.", accommodation: { name: "White Sands Luxury Villas & Spa", type: "Family suite resort", highlights: ["Safe swimming", "Family friendly", "Educational"], images: ["https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1200&q=80"] } },
      { place: "Stone Town", nights: 2, description: "Family history walk and scavenger hunt through the old city.", accommodation: { name: "White Sands Luxury Villas & Spa", type: "Family suite resort", highlights: ["Cultural outing", "Guided tour", "Kids activities"], images: ["https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80"] } },
      { place: "Zanzibar Airport", nights: 1, description: "Final beach day and departure.", accommodation: { name: "End of tour", type: "No accommodation", highlights: ["Departure", "Airport transfer", "End of tour"], images: [] } }
    ],
    highlights: ["Family-friendly resort", "Turtle sanctuary visit", "Interactive spice farm", "Safe swimming lagoons"],
    mainImage: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1600&q=80",
    gallery: ["https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1200&q=80", "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80"],
    priceType: "FIXED",
    priceFrom: 1350,
    currency: "USD",
    pricingNotes: "Price per adult with child discounts available.",
    inclusions: { included: ["Family resort", "All meals", "Guided activities", "Transfers", "Entrance fees", "Kids welcome pack"], excluded: ["Flights", "Visa", "Travel insurance", "Tips"] },
    gettingThere: { description: "Starts at Zanzibar International Airport (ZNZ)." },
    isActive: true,
    createdAt: new Date("2025-10-01"),
    updatedAt: new Date("2026-04-28")
  },
  {
    id: 23,
    offeredBy: "Asili Explorer Safaris",
    name: "10-Day All-Inclusive Luxury Zanzibar",
    slug: "10-day-all-inclusive-luxury-zanzibar",
    category: "ZANZIBAR",
    duration: 10,
    nights: 9,
    travelStyle: "All-Inclusive Luxury",
    themes: ["luxury", "all-inclusive", "wellness", "beach"],
    bestFor: ["luxury travelers", "couples", "wellness seekers"],
    experienceSummary: "An indulgent all-inclusive stay with spa time, water sports, private tours, and 5-star service.",
    shortDescription: "Ultimate all-inclusive Zanzibar escape with premium drinks, gourmet dining, and unlimited relaxation.",
    fullDescription: "This luxury island holiday includes a private villa, premium dining, unlimited spa and water sports, private tours, and optional helicopter transfer.",
    destinationsDetailed: [
      { place: "Bwejuu Beach", nights: 9, description: "Private villa stay on the southern coast.", accommodation: { name: "Essque Zalu Zanzibar", type: "Private ocean villa with pool", highlights: ["Infinity pool", "Butler service", "Ocean views"], images: ["https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=1200&q=80"] } }
    ],
    highlights: ["All-inclusive premium plan", "Unlimited spa and water sports", "Private island picnic", "24/7 butler service"],
    mainImage: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=1600&q=80",
    gallery: ["https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=1200&q=80", "https://images.unsplash.com/photo-1507699622108-4be1e9b8a580?auto=format&fit=crop&w=1200&q=80"],
    priceType: "FIXED",
    priceFrom: 3200,
    currency: "USD",
    pricingNotes: "Price per person based on double occupancy.",
    inclusions: { included: ["Luxury villa", "All meals", "Premium drinks", "Excursions", "Spa", "Transfers"], excluded: ["Flights", "Visa", "Insurance", "Helicopter tour", "Gratuities"] },
    gettingThere: { description: "Starts at Zanzibar International Airport (ZNZ)." },
    isActive: true,
    createdAt: new Date("2025-10-01"),
    updatedAt: new Date("2026-04-28")
  }
];

export { safariPackages, kilimanjaroPackages, wildebeestMigrationPackages, zanzibarPackages };

// Combine all packages for gallery and general listing
const mockPackages = [
  ...safariPackages,
  ...kilimanjaroPackages,
  ...wildebeestMigrationPackages,
  ...zanzibarPackages
];

// Filter options data
export const filterOptions = {
  categories: [
    { id: 'all', name: 'All Packages' },
    { id: 'safari', name: 'Safari' },
    { id: 'kilimanjaro', name: 'Kilimanjaro' },
    { id: 'zanzibar', name: 'Zanzibar' },
    { id: 'combined', name: 'Combined' }
  ],
  durations: [
    { id: 'all', name: 'Any Duration' },
    { id: 'short', name: '1-5 Days' },
    { id: 'medium', name: '6-10 Days' },
    { id: 'long', name: '11+ Days' }
  ],
  difficulties: [
    { id: 'all', name: 'Any Difficulty' },
    { id: 'easy', name: 'Easy' },
    { id: 'moderate', name: 'Moderate' },
    { id: 'challenging', name: 'Challenging' }
  ],
  priceRanges: [
    { id: 'all', name: 'Any Price' },
    { id: 'budget', name: 'Under $1500' },
    { id: 'mid', name: '$1500 - $3000' },
    { id: 'luxury', name: '$3000+' }
  ],
  comfortLevels: [
    { id: 'all', name: 'All Comfort Levels' },
    { id: 'budget', name: 'Budget' },
    { id: 'mid-range', name: 'Mid-Range' },
    { id: 'luxury', name: 'Luxury' },
    { id: 'luxury+', name: 'Luxury+' }
  ],
  tourTypes: [
    { id: 'all', name: 'All Tour Types' },
    { id: 'private', name: 'Private Tour' },
    { id: 'shared', name: 'Shared Tour' }
  ],
  safariTypes: [
    { id: 'all', name: 'All Safari Types' },
    { id: 'lodge', name: 'Lodge' },
    { id: 'tented', name: 'Tented Camp' },
    { id: 'hotel', name: 'Hotel' },
    { id: 'camping', name: 'Camping' }
  ],
  specializedTours: [
    { id: 'fly-in-safaris', name: 'Fly-in Safaris' },
    { id: 'family', name: 'Family' },
    { id: 'beach-time', name: 'Beach Time' },
    { id: 'honeymoon', name: 'Honeymoon' },
    { id: 'gorilla-trekking', name: 'Gorilla Trekking' },
    { id: 'walking-safaris', name: 'Walking Safaris' }
  ],
  otherFeatures: [
    { id: 'airport-transfer', name: 'Airport Transfer Included' },
    { id: 'customizable', name: 'Itinerary Can Be Customized' },
    { id: 'domestic-flight', name: 'Domestic Flight Included' }
  ]
};

export { mockPackages };
// --- Enhanced mockParksData for Country Detail Page ---
export const mockParksData = {
  tanzania: {
    countryName: "Tanzania",
    pageTitle: "Tanzania Safari - Complete Travel Guide",
    overallRating: 4.8,
    totalReviews: 1988,
    safariCount: "8,009 Tanzania Safaris",
    
    // Navigation tabs
    tabs: [
      "Overview",
      "Parks & Reserves", 
      "Reviews",
      "Wildlife",
      "Birds",
      "Best Time To Visit",
      "Weather & Climate",
      "Popular Routes",
      "How To Get There",
      "Malaria & Vaccinations",
      "Staying Safe"
    ],

    // --- TAB 1: Overview --- (UPDATED)
    overview: {
      expert: {
        name: "Philip Briggs",
        byline: "Africa Expert & Author",
        bio: "Philip is a renowned Africa expert and author of many guidebooks to African destinations, including the Bradt guide to Tanzania."
      },
      summary: "Tanzania, with its three safari circuits, is one of Africa's top wildlife destinations. The popular Northern circuit incorporates bucket-list landmarks such as Serengeti National Park, Ngorongoro Crater and Mt Kilimanjaro. Repeat visitors might prefer the remote wilderness vibe of the Southern or Western circuits. For some beach time, the 'Spice Island' of Zanzibar is only a short flight away.",
      stats: {
        rates: "$216 to $636",
        bestTimeToGo: "June to October; January to February (For wildebeest calving)",
        highSeason: "July to March (North), June to October (South and west)",
        size: "947,303km² / 365,756mi²"
      },
      prosCons: {
        pros: [
          "Superb wildlife viewing, including the annual wildebeest migration in Serengeti",
          "Off-the-beaten-track safaris in Katavi and Ruaha National Parks",
          "Several wildlife-viewing circuits for repeat visits",
          "Best chimp trekking in Africa in Gombe and Mahale Mountains National Parks",
          "Beach holiday extensions on Zanzibar",
          "Traditional cultures"
        ],
        cons: [
          "Relatively expensive safari destination",
          "Some popular parks can be crowded"
        ]
      },
      // NEW FIELDS REQUIRED BY COMPONENT
      wildlifeSection: {
        title: "Wildlife",
        content: "Tanzania offers excellent wildlife viewing. If it's your goal to tick off the Big Five, you're in luck. Elephant, buffalo and lion are easily seen. If you're visiting the Ngorongoro Crater, you'll probably spot black rhino too. Although common, leopards are very secretive.",
        moreLink: "More about Wildlife"
      },
      thingsToDo: {
        title: "Things to Do in Tanzania",
        content: "Beyond wildlife viewing, Tanzania offers incredible cultural experiences, beach relaxation on Zanzibar, and mountain climbing on Kilimanjaro."
      },
      reviews: {
        expert: {
          rating: 4.8,
          count: 18
        },
        user: {
          rating: 4.8,
          count: 1972
        }
      },
      premierParks: {
        title: "Premier Parks",
        list: [
          "Serengeti National Park",
          "Ngorongoro Crater", 
          "Nyerere National Park",
          "Ruaha National Park"
        ],
        allParksNote: "View all 15 parks"
      }
    },

    // --- TAB 2: Parks & Reserves --- (UPDATED)
    parksAndReserves: {
      premierParks: [
        { name: "Ngorongoro Crater", tag: "Best Park" },
        { name: "Nyerere National Park", tag: "Best Park" },
        { name: "Ruaha National Park", tag: "Best Park" },
        { name: "Serengeti National Park", tag: "Best Park" }
      ],
      allParks: [
        {
          name: "Arusha National Park",
          rating: 4.2,
          reviews: 112,
          highlights: "Classic safaris, hiking, antelope species, buffalo, giraffe, Kilimanjaro colobus",
          image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
          slug: "arusha-national-park"
        },
        {
          name: "Gombe National Park", 
          rating: 4.5,
          reviews: 23,
          highlights: "Chimpanzee trekking, other primate species present",
          image: "https://images.unsplash.com/photo-1709403337027-45324f24fae3?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          slug: "gombe-national-park"
        },
        {
          name: "Katavi National Park",
          rating: 4.5,
          reviews: 34,
          highlights: "Classic and walking safaris, four of the Big Five (no rhino), many hippo",
          image: "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
          slug: "katavi-national-park"
        },
        {
          name: "Lake Manyara National Park",
          rating: 4.0,
          reviews: 315,
          highlights: "Classic, walking and canoe safaris, treetop walkway, four of the Big Five (no rhino)",
          image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
          slug: "lake-manyara-national-park"
        },
        {
          name: "Mahale Mountains National Park",
          rating: 4.4,
          reviews: 21,
          highlights: "Chimpanzee trekking, other primate species present",
          image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
          slug: "mahale-mountains-national-park"
        },
        {
          name: "Mikumi National Park",
          rating: 4.2,
          reviews: 90,
          highlights: "Classic and walking safaris, four of the Big Five (no rhino)",
          image: "https://images.unsplash.com/photo-1573843988976-8a4c7a9b0e6a?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
          slug: "mikumi-national-park"
        },
        {
          name: "Ngorongoro Crater",
          rating: 4.8,
          reviews: 604,
          highlights: "Classic safaris, abundant wildlife including the Big Five",
          image: "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
          slug: "ngorongoro-crater"
        },
        {
          name: "Nyerere National Park",
          rating: 4.6,
          reviews: 111,
          highlights: "Classic, walking and boat safaris, four of the Big Five (no rhino), wild dog",
          image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
          slug: "nyerere-national-park"
        },
        {
          name: "Ruaha National Park",
          rating: 4.7,
          reviews: 75,
          highlights: "Classic and walking safaris, four of the Big Five (no rhino), cheetah, wild dog",
          image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
          slug: "ruaha-national-park"
        },
        {
          name: "Serengeti National Park",
          rating: 4.9,
          reviews: 554,
          highlights: "Classic safaris, Big Five (rhino very rare), big cats, wildebeest migration",
          image: "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
          slug: "serengeti-national-park"
        },
        {
          name: "Tarangire National Park",
          rating: 4.6,
          reviews: 386,
          highlights: "Classic and walking safaris, four of the Big Five (no rhino), lots of elephant",
          image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
          slug: "tarangire-national-park"
        }
      ]
    },

    // --- TAB 3: Reviews --- (UPDATED)
    reviews: {
      expertRating: 4.8,
      expertReviews: 18,
      userRating: 4.8,
      userReviews: 1972,
      latestExpertReview: {
        author: "Tim Bewer",
        country: "US",
        title: "Crowded Favorites and Well-Kept Secrets",
        rating: 5,
        fullReview: "Tanzania is home to Serengeti National Park and Ngorongoro Crater; and this fact alone makes a solid case for declaring it Africa's best safari country. But, of course, there's much more that just these two places. Most visitors stick to the Northern circuit, but the Southern and Western circuits offer incredible wilderness experiences without the crowds."
      },
      latestUserReview: {
        author: "Cristian Corona",
        country: "IT",
        date: "Oct 22, 2025",
        rating: 5,
        review: "One of the most beautiful and fantastic places to go on safari, with fantastic unspoiled nature, a large number of animals, and many felines, Tanzania offers a true immersion in the savana in a truly welcoming and wild environment!"
      }
    },

    // --- TAB 4: Wildlife --- (UPDATED)
    wildlife: {
      abundanceLegend: ["Abundant", "Common", "Occasional", "Rare", "None"],
      speciesAbundance: {
        "Elephant": "Abundant",
        "Giraffe": "Abundant", 
        "Hippo": "Abundant",
        "Buffalo": "Abundant",
        "Zebra": "Abundant",
        "Wildebeest": "Abundant",
        "White Rhino": "None",
        "Black Rhino": "Rare",
        "Lion": "Common",
        "Leopard": "Occasional",
        "Cheetah": "Occasional",
        "Hyena": "Common",
        "Wild Dog": "Rare"
      },
      wildlifeRating: {
        expertRating: 4.8,
        expertReviews: 18,
        userRating: 4.8,
        userReviews: 1972
      },
      wildebeestMigration: {
        title: "Wildebeest Migration",
        description: "The wildebeest migration is one of Africa's greatest wildlife spectacles. At least 2 million hooved animals – mainly wildebeest, but also zebra and gazelle – move around the Mara-Serengeti ecosystem.",
        highlights: "Highlights of this 800km/500mi circular trek include the wildebeest calving on the Southern Serengeti plains and the dramatic Mara River crossings in the north."
      },
      // NEW FIELD REQUIRED BY COMPONENT
      parkRatings: [
        { park: "Serengeti NP", rating: 4.9, count: 554 },
        { park: "Ngorongoro Crater", rating: 4.8, count: 604 },
        { park: "Ruaha NP", rating: 4.7, count: 75 },
        { park: "Nyerere NP", rating: 4.6, count: 111 },
        { park: "Tarangire NP", rating: 4.6, count: 386 }
      ]
    },

    // --- TAB 5: Birds --- (UPDATED)
    birds: {
      summary: "Tanzania is an incredible birding destination. It has one of the largest species lists of any African country: over 1,100 birds have been recorded, of which more than 800 are resident and nearly 200 are regular migrants.",
      birdingRating: {
        expertRating: 4.8,
        expertReviews: 18,
        userRating: 4.8,
        userReviews: 1972
      },
      notableBirds: [
        { name: "Common ostrich", abundance: "Common" },
        { name: "Fischer's lovebird", abundance: "Locally common & endemic" },
        { name: "Palm-nut vulture", abundance: "Occasional" },
        { name: "Red-and-yellow barbet", abundance: "Locally common" },
        { name: "Superb starling", abundance: "Common" }
      ],
      bestTime: "The birdlife in Tanzania is good year-round but at its best from November to April when Palearctic and intra-African migratory birds are present. At this time, many resident bird species are in breeding plumage and nesting.",
      bestParks: [
        { park: "Arusha NP", rating: 4.2, count: 76 },
        { park: "Tarangire NP", rating: 4.4, count: 247 },
        { park: "Lake Manyara NP", rating: 4.1, count: 220 },
        { park: "Ruaha NP", rating: 4.4, count: 60 },
        { park: "Serengeti NP", rating: 4.5, count: 389 },
        { park: "Ngorongoro Crater", rating: 4.3, count: 400 }
      ]
    },

    // --- TAB 6: Best Time To Visit --- (UPDATED)
    bestTimeToVisit: {
      summary: "The best time to visit Tanzania is during the Dry season, from June to October, when wildlife viewing is generally at its best. This is also the best time to see the wildebeest migration in Serengeti National Park.",
      keyInfo: {
        bestTime: "June to October (All parks), January to February (Serengeti for the wildebeest calving)",
        highSeason: "July to March (Northern circuit parks), June to October (Southern and Western circuit parks)",
        lowSeason: "April and May (Many lodges are closed in the Southern and Western circuit parks)",
        bestWeather: "June to October (Little to no rainfall)"
      },
      monthlyChart: [
        { month: "January", wildlife: 5 },
        { month: "February", wildlife: 5 },
        { month: "March", wildlife: 4 },
        { month: "April", wildlife: 3 },
        { month: "May", wildlife: 3 },
        { month: "June", wildlife: 5 },
        { month: "July", wildlife: 5 },
        { month: "August", wildlife: 5 },
        { month: "September", wildlife: 5 },
        { month: "October", wildlife: 5 },
        { month: "November", wildlife: 4 },
        { month: "December", wildlife: 5 }
      ],
      // NEW FIELDS REQUIRED BY COMPONENT
      drySeason: {
        months: "June to October",
        highlights: [
          "Excellent wildlife viewing",
          "Animals gather around water sources",
          "Clear skies and minimal rainfall",
          "Best time for photography"
        ]
      },
      wetSeason: {
        months: "November to May", 
        highlights: [
          "Lush green landscapes",
          "Bird watching is at its best",
          "Fewer tourists and lower prices",
          "Wildebeest calving season"
        ]
      }
    },

    // --- TAB 7: Weather & Climate --- (UPDATED)
    weatherAndClimate: {
      summary: "Tanzania has a pleasant, tropical climate, but it has large regional climatic variations influenced by several factors, including altitude. The hottest and most humid part of the country is the coast.",
      climateChart: {
        location: "Arusha - 1,400m / 4,594ft",
        temperatureData: [
          { month: "Jan", min: 10, max: 28 },
          { month: "Feb", min: 10, max: 28 },
          { month: "Mar", min: 11, max: 27 },
          { month: "Apr", min: 13, max: 25 },
          { month: "May", min: 11, max: 22 },
          { month: "Jun", min: 8, max: 21 },
          { month: "Jul", min: 9, max: 20 },
          { month: "Aug", min: 8, max: 22 },
          { month: "Sep", min: 8, max: 24 },
          { month: "Oct", min: 10, max: 26 },
          { month: "Nov", min: 10, max: 27 },
          { month: "Dec", min: 10, max: 27 }
        ],
        rainfallData: [
          { month: "Jan", rainfall: 50 },
          { month: "Feb", rainfall: 80 },
          { month: "Mar", rainfall: 170 },
          { month: "Apr", rainfall: 360 },
          { month: "May", rainfall: 210 },
          { month: "Jun", rainfall: 30 },
          { month: "Jul", rainfall: 10 },
          { month: "Aug", rainfall: 10 },
          { month: "Sep", rainfall: 20 },
          { month: "Oct", rainfall: 30 },
          { month: "Nov", rainfall: 110 },
          { month: "Dec", rainfall: 100 }
        ]
      },
      drySeason: {
        months: "June to October",
        description: "There is little rainfall in the Dry season and the humidity is very low. It cools off at night. Be sure to pack warm clothing because morning game drives in open vehicles will be cold.",
        details: [
          "June to September – Afternoon temperatures are usually between 20°C/68°F and 30°C/86°F",
          "October – It's the end of the Dry season. It is hot and the first rains will come as a relief."
        ]
      },
      wetSeason: {
        months: "November to May",
        description: "During most of the Wet season, afternoon temperatures are consistently hot (around 30°C/86°F) but it is colder above 1,300m/4,265ft.",
        details: [
          "November & December – 'Short rains' – It rains regularly for about a month",
          "January & February – The northern parks and coastal areas tend to have a break",
          "March to May – 'Long rains' – These are the wettest months"
        ]
      },
      // NEW FIELD REQUIRED BY COMPONENT
      expert: {
        name: "Philip Briggs",
        bio: "Philip is a renowned Africa expert and author of many guidebooks to African destinations, including the Bradt guide to Tanzania."
      }
    },

    // --- TAB 8: Popular Routes --- (NO CHANGES NEEDED - matches component)
    popularRoutes: {
      northernCircuit: {
        title: "Northern Circuit",
        duration: "(1 to 2 weeks)",
        description: "The Northern safari circuit is the most popular circuit in Tanzania. In most cases, you will fly to Kilimanjaro International Airport (JRO) or Arusha Airport (ARK) near Arusha, the gateway of the Northern circuit.",
        destinations: [
          "Arusha National Park (0.5 to 2 days) is a scenic park dominated by Mt Meru with views of Mt Kilimanjaro on clear days",
          "Lake Manyara National Park (1 day) protects an abundance of wildlife in a beautiful setting below the Rift Valley escarpment",
          "Tarangire National Park (1 to 3 days) is home to massive elephant herds that gather around the Tarangire River in the Dry season",
          "Ngorongoro Crater (1 to 2 days) where it's not unusual to see the Big Five in one day",
          "Serengeti National Park (3 to 5 days) offers top wildlife viewing and a chance to witness the spectacular wildebeest migration"
        ],
        addOns: [
          "Zanzibar Island for relaxing on gorgeous beaches",
          "Gombe National Park or Mahale Mountains National Park for chimpanzee trekking",
          "Kilimanjaro National Park for climbing Africa's tallest mountain"
        ]
      },
      southernCircuit: {
        title: "Southern Circuit",
        duration: "(1 to 2 weeks)",
        description: "The off-the-beaten-track character of the Southern safari circuit makes for a holistic wilderness experience.",
        destinations: [
          "Mikumi National Park (1 to 2 days) has great animal concentrations (especially buffalo and elephant) in the Dry season",
          "Nyerere National Park (3 to 5 days) offers a combination of game drives, boat trips and walking safaris",
          "Ruaha National Park (3 to 5 days) is home to an incredible variety of animals including wild dogs"
        ],
        addOns: [
          "Zanzibar Island for relaxing on gorgeous beaches and spice tours"
        ]
      },
      westernCircuit: {
        title: "Western Circuit",
        duration: "(1 week)",
        description: "Tanzania's Western safari circuit is remote and exclusive. It combines an off-the-beaten-track classic safari with chimp trekking.",
        destinations: [
          "Mahale Mountains National Park or Gombe National Park (2 to 5 days) for the best chimpanzee trekking in Africa",
          "Katavi National Park (2 to 5 days) offers excellent wildlife viewing in the Dry season with superb wilderness appeal"
        ],
        addOns: [
          "Zanzibar Island for relaxing on gorgeous beaches and scuba diving"
        ]
      }
    },

    // --- TAB 9: How To Get There --- (NO CHANGES NEEDED - matches component)
    howToGetThere: {
      description: "Most safaris in Tanzania start from Arusha or Dar es Salaam, with international flights arriving at Kilimanjaro International Airport (JRO) or Julius Nyerere International Airport (DAR).",
      details: [
        "International flights connect through major hubs like Nairobi, Addis Ababa, or Dubai",
        "Domestic flights connect major parks and cities",
        "Road transfers are arranged by safari operators",
        "Visa requirements vary by nationality - check before travel"
      ]
    },

    // --- TAB 10: Malaria & Vaccinations --- (NO CHANGES NEEDED - matches component)
    malariaVaccinations: {
      expert: {
        name: "Philip Briggs",
        bio: "Philip is a renowned Africa expert and author of many guidebooks to African destinations, including the Bradt guide to Tanzania."
      },
      vaccinations: "Yellow fever vaccination is required if traveling from a yellow fever endemic country. Routine vaccinations should be up to date. Hepatitis A, Typhoid, and Malaria prophylaxis are recommended.",
      malariaRisk: "Malaria is present throughout Tanzania, including all safari areas. Prophylaxis is strongly recommended. Use mosquito repellent, wear long sleeves, and sleep under mosquito nets.",
      moreInfo: [
        { country: "Australia", url: "www.smartraveller.gov.au" },
        { country: "Canada", url: "travel.gc.ca" },
        { country: "United Kingdom", url: "www.gov.uk" },
        { country: "United States", url: "wwwnc.cdc.gov/travel" }
      ]
    },

    // --- TAB 11: Staying Safe --- (NO CHANGES NEEDED - matches component)
    stayingSafe: {
      expert: {
        name: "Philip Briggs", 
        bio: "Philip is a renowned Africa expert and author of many guidebooks to African destinations, including the Bradt guide to Tanzania."
      },
      summary: "Tanzania is generally safe for tourists, especially when on organized safaris. Exercise normal precautions in cities and follow your guide's instructions in wildlife areas.",
      safetyTips: [
        {
          title: "Wildlife Safety",
          description: "Always follow your guide's instructions. Never approach wild animals on foot and stay in your vehicle during game drives.",
          link: "View Wildlife Safety Guidelines"
        },
        {
          title: "Urban Safety", 
          description: "Be aware of your surroundings in cities. Don't display valuables and use registered taxis after dark.",
          link: "Urban Safety Tips"
        },
        {
          title: "Health Safety",
          description: "Drink bottled water, use insect repellent, and have comprehensive travel insurance.",
          link: "Health Safety Information"
        }
      ],
      governmentAdvice: [
        { country: "Australia", url: "www.smartraveller.gov.au" },
        { country: "Canada", url: "travel.gc.ca" },
        { country: "United Kingdom", url: "www.gov.uk" },
        { country: "United States", url: "travel.state.gov" }
      ]
    }
  },




  // === 1. Ngorongoro Crater ===
  ngorongoroCrater: {
    overview: {
      breadcrumbs: ["Home", "Countries & Parks", "Tanzania", "Ngorongoro Crater"],
      expert: {
        name: "Philip Briggs",
        byline: "By Philip Briggs",
        bio: "Philip is a renowned Africa expert and author of many guidebooks to African destinations, including the Bradt guide to Tanzania."
      },
      summary: "A visit to the Ngorongoro Crater is an experience of a lifetime. As the world’s only intact caldera, the crater is the top attraction of the 8,292km² Ngorongoro Conservation Area. There are few places that have comparable wildlife densities. It is not unusual to see the Big Five in one day here. And all this is in the most amazing setting with a backdrop of the 600m-/1,968ft-high crater wall.",
      stats: {
        "Best Time To Go": "June to October (Wildlife viewing is best)",
        "High Season": "Most of the year – July to March (Expect crowds)",
        "Size": "260km² / 100mi²",
        "Altitude": "1,027-3,522m / 3,369-11,555ft"
      },
      prosCons: {
        pros: [
          "Top wildlife viewing all year round",
          "Superb for spotting predators",
          "Black rhino is easily seen",
          "Beautiful scenery",
          "Staying on the crater rim offers great views into the crater",
          "Cultural visit to a Maasai village can be arranged"
        ],
        cons: [
          "Very crowded throughout the year",
          "Entrance to the crater is very expensive"
        ]
      },
      media: { photos: true, map: true }
    },
    reviews: {
      expertRating: 4.4,
      expertReviews: 17,
      userRating: 4.8,
      userReviews: 587,
      latestExpertReview: {
        author: "Stuart Butler",
        country: "UK",
        title: "More than a Crater",
        rating: 4,
        fullReview: "This world renowned extinct volcanic crater covers a simply enormous 260km sq and is the largest intact volcanic caldera on the planet, but visitors don’t come here merely for the geology..."
      },
      latestUserReview: {
        author: "Gerjanne Bosman",
        country: "NL",
        date: "Oct 13, 2025",
        rating: 4,
        review: "I didn't like it that much. Maybe because I fell in love with the Serengeti and we have visited Ngorongoro after the Serengeti"
      }
    },
    wildlife: {
      expert: { name: "Philip Briggs", bio: "..." },
      summary: "The Ngorongoro Crater is without a doubt Tanzania’s most productive Big Five destination. The crater floor teems with wildlife, and predator sightings tend to be exceptional.",
      abundanceLegend: ["Abundant", "Common", "Occasional", "Rare", "None"],
      speciesAbundance: {
        "Elephant": "Common",
        "Giraffe": "None",
        "Hippo": "Common",
        "Buffalo": "Abundant",
        "Zebra": "Abundant",
        "Wildebeest": "Abundant",
        "White Rhino": "None",
        "Black Rhino": "Common",
        "Lion": "Common",
        "Leopard": "Occasional",
        "Cheetah": "None",
        "Hyena": "Abundant",
        "Wild Dog": "None"
      },
      wildlifeRating: { expertRating: 4.4, expertReviews: 17, userRating: 4.8, userReviews: 587 },
      highlights: "Most safari heavyweights are well represented in the crater. Black rhino is the star attraction...",
      bestTimeForWildlife: "Wildlife viewing is excellent in the Ngorongoro Crater throughout the year, although animals are most easily spotted during the Dry season (June to October)."
    },
    birds: {
      expert: { name: "Philip Briggs", bio: "..." },
      summary: "There is excellent birding to be had in the Ngorongoro Crater. Even from a great distance, you’ll see flocks of pink flamingos in Lake Magadi.",
      birdingRating: { expertRating: 4.4, expertReviews: 17, userRating: 4.8, userReviews: 587 },
      notableBirds: [
        { name: "Augur buzzard", abundance: "Common" },
        { name: "Black kite", abundance: "Common" },
        { name: "Kori bustard", abundance: "Common" },
        { name: "Grey crowned crane", abundance: "Common" }
      ],
      facts: { totalSpecies: "500+", migratorySeason: "November to April" },
      bestTimeForBirding: "The birdlife in the Ngorongoro Crater is good throughout the year. However, the variety is greatest from November to April..."
    },
    bestTimeToVisit: {
      expert: { name: "Philip Briggs", bio: "..." },
      monthlyRatings: {
        January: "Excellent", February: "Excellent", March: "Good", April: "Good",
        May: "Excellent", June: "Excellent", July: "Excellent", August: "Excellent",
        September: "Excellent", October: "Excellent", November: "Excellent", December: "Excellent"
      },
      keyInfo: {
        bestTime: "June to October (Wildlife viewing is best)",
        highSeason: "Most of the year – July to March",
        lowSeason: "April and May",
        bestWeather: "June to October",
        worstWeather: "March and April"
      },
      drySeason: {
        months: "June to October",
        highlights: [
          "Wildlife is easier to spot since the grass is shorter",
          "There is little rainfall and lots of sunshine",
          "It gets crowded",
          "Mornings and nights get very cold so you’ll need winter clothes"
        ]
      },
      wetSeason: {
        months: "November to May",
        highlights: [
          "Wildlife viewing is excellent, even in the Wet season",
          "The scenery is green and beautiful",
          "April and May are low-season months so there are fewer visitors",
          "Birding is in its prime due to the presence of migratory birds from November to April"
        ]
      }
    },
    weatherAndClimate: {
      expert: { name: "Philip Briggs", bio: "..." },
      summary: "The Ngorongoro Crater has a mild, temperate climate. The area experiences a Wet season with two rainy periods...",
      climateChart: {
        location: "Ngorongoro Conservation Area – 1,027-3,522m",
        temperatureData: [
          { month: "January", min: 13, max: 25 },
          { month: "February", min: 13, max: 25 },
          { month: "March", min: 13, max: 26 },
          { month: "April", min: 13, max: 25 },
          { month: "May", min: 12, max: 24 },
          { month: "June", min: 11, max: 23 },
          { month: "July", min: 10, max: 22 },
          { month: "August", min: 10, max: 23 },
          { month: "September", min: 12, max: 24 },
          { month: "October", min: 13, max: 25 },
          { month: "November", min: 13, max: 25 },
          { month: "December", min: 13, max: 25 }
        ],
        rainfallData: [
          { month: "January", rainfall: 91 },
          { month: "February", rainfall: 99 },
          { month: "March", rainfall: 132 },
          { month: "April", rainfall: 143 },
          { month: "May", rainfall: 53 },
          { month: "June", rainfall: 7 },
          { month: "July", rainfall: 4 },
          { month: "August", rainfall: 5 },
          { month: "September", rainfall: 7 },
          { month: "October", rainfall: 25 },
          { month: "November", rainfall: 83 },
          { month: "December", rainfall: 111 }
        ]
      },
      drySeason: {
        months: "June to October",
        details: [
          "Afternoon temperatures are usually around 19°C/66°F on the crater floor",
          "Sunny, cloudless skies are normal",
          "It gets cold at night, and it can freeze on the crater rim"
        ]
      },
      wetSeason: {
        months: "November to May",
        details: [
          "Daytime temperatures are usually around 23°C/73°F",
          "Short rains (Nov–Dec), long rains (Mar–May)",
          "Rarely rains all day"
        ]
      }
    },
    howToGetThere: {
      expert: { name: "Philip Briggs", bio: "..." },
      summary: "Most people visit the Ngorongoro Crater as part of a Northern circuit safari...",
      access: {
        fromArusha: "3-hour drive (180km) on tarred road",
        fromSerengeti: "3-hour drive (140km)",
        fromLakeManyara: "2-hour drive (80km)",
        fromTarangire: "4-hour drive (180km)"
      },
      airports: [
        { code: "JRO", name: "Kilimanjaro International Airport", note: "50km from Arusha" },
        { code: "DAR", name: "Julius Nyerere International Airport", note: "Fly to ARK or JRO" }
      ],
      domesticAirlines: [
        "Coastal Aviation", "Air Excel", "Regional Air", "Safari Air Link",
        "Auric Air", "Air Tanzania", "Precision Air", "ZanAir", "As Salaam Air"
      ]
    },
    malariaAndSafety: {
      expert: { name: "Philip Briggs", bio: "..." },
      safety: {
        summary: "The Ngorongoro Crater is a very safe destination in our opinion. Crime is rare in Tanzania’s parks and reserves.",
        tips: [
          "Crime is rare in parks",
          "Take normal precautions in cities like Arusha",
          "Follow guide instructions during wildlife viewing"
        ]
      },
      malaria: {
        risk: "Low to moderate (due to high altitude >2,000m)",
        prevention: [
          "DEET-based repellent",
          "Antimalarial medication (consult doctor)",
          "Cover skin in evenings"
        ]
      },
      vaccinations: "Consult travel doctor for recommended vaccines"
    }
  },

  // === 2. Serengeti National Park ===
  serengetiNationalPark: {
    overview: {
      breadcrumbs: ["Home", "Countries & Parks", "Tanzania", "Serengeti National Park"],
      expert: { name: "Philip Briggs", bio: "..." },
      summary: "The Serengeti is Tanzania's most famous park, home to the Great Migration and exceptional year-round wildlife viewing. It forms part of the larger Serengeti-Mara ecosystem spanning Tanzania and Kenya.",
      stats: {
        "Best Time To Go": "June–Oct (migration), Jan–Feb (calving)",
        "High Season": "July to March",
        "Size": "14,763km² / 5,700mi²",
        "Altitude": "920–1,850m / 3,018–6,070ft"
      },
      prosCons: {
        pros: [
          "Witness the Great Migration",
          "Big cat sightings (lion, leopard, cheetah)",
          "Year-round wildlife viewing",
          "Hot air balloon safaris",
          "Multiple ecosystems"
        ],
        cons: [
          "Can be crowded in peak season",
          "Long drives between regions",
          "Expensive park fees"
        ]
      },
      media: { photos: true, map: true }
    },
    reviews: {
      expertRating: 4.9,
      expertReviews: 200,
      userRating: 4.9,
      userReviews: 554,
      latestExpertReview: {
        author: "Tim Bewer",
        country: "US",
        title: "Crowded Favorites and Well-Kept Secrets",
        rating: 5,
        fullReview: "Tanzania is home to Serengeti National Park and Ngorongoro Crater; and this fact alone makes a solid case for declaring it Africa’s best safari country..."
      },
      latestUserReview: {
        author: "Cristian Corona",
        country: "IT",
        date: "Oct 22, 2025",
        rating: 5,
        review: "One of the most beautiful and fantastic places to go on safari..."
      }
    },
    wildlife: {
      expert: { name: "Philip Briggs", bio: "..." },
      summary: "The Serengeti hosts over 2 million wildebeest, plus lions, leopards, cheetahs, and elephants. It's one of the best places in Africa to see the Big Five.",
      abundanceLegend: ["Abundant", "Common", "Occasional", "Rare", "None"],
      speciesAbundance: {
        "Elephant": "Abundant",
        "Giraffe": "Abundant",
        "Hippo": "Common",
        "Buffalo": "Abundant",
        "Zebra": "Abundant",
        "Wildebeest": "Abundant",
        "White Rhino": "None",
        "Black Rhino": "Rare",
        "Lion": "Abundant",
        "Leopard": "Common",
        "Cheetah": "Common",
        "Hyena": "Abundant",
        "Wild Dog": "Rare"
      },
      wildlifeRating: { expertRating: 4.9, expertReviews: 200, userRating: 4.9, userReviews: 554 },
      highlights: "Home to the Great Migration... best cheetah sightings in Africa...",
      bestTimeForWildlife: "Dry season (Jun–Oct) for migration; Jan–Feb for calving..."
    },
    birds: {
      expert: { name: "Philip Briggs", bio: "..." },
      summary: "Over 500 bird species recorded, including ostrich, kori bustard, and migratory waterfowl.",
      birdingRating: { expertRating: 4.5, expertReviews: 150, userRating: 4.5, userReviews: 389 },
      notableBirds: [
        { name: "Ostrich", abundance: "Common" },
        { name: "Kori bustard", abundance: "Common" },
        { name: "Secretary bird", abundance: "Occasional" },
        { name: "Martial eagle", abundance: "Rare" }
      ],
      facts: { totalSpecies: "500+", migratorySeason: "November to April" },
      bestTimeForBirding: "Year-round, but best Nov–Apr for migrants"
    },
    bestTimeToVisit: {
      expert: { name: "Philip Briggs", bio: "..." },
      monthlyRatings: {
        January: "Excellent", February: "Excellent", March: "Fair", April: "Fair",
        May: "Fair", June: "Excellent", July: "Excellent", August: "Excellent",
        September: "Excellent", October: "Excellent", November: "Good", December: "Good"
      },
      keyInfo: {
        bestTime: "June to October; January to February",
        highSeason: "July to March",
        lowSeason: "April and May",
        bestWeather: "June to October",
        worstWeather: "March to May"
      },
      drySeason: {
        months: "June to October",
        highlights: [
          "Great Migration in Northern Serengeti",
          "Mara River crossings (Jul–Oct)",
          "Excellent predator sightings"
        ]
      },
      wetSeason: {
        months: "November to May",
        highlights: [
          "Wildebeest calving (Jan–Feb)",
          "Green, lush landscapes",
          "Fewer tourists (Apr–May)"
        ]
      }
    },
    weatherAndClimate: {
      expert: { name: "Philip Briggs", bio: "..." },
      summary: "The Serengeti has a classic East African savanna climate with distinct wet and dry seasons.",
      climateChart: {
        location: "Serengeti National Park – 920-1,850m",
        temperatureData: [
          { month: "January", min: 16, max: 29 },
          { month: "February", min: 16, max: 29 },
          { month: "March", min: 16, max: 28 },
          { month: "April", min: 15, max: 26 },
          { month: "May", min: 14, max: 25 },
          { month: "June", min: 13, max: 24 },
          { month: "July", min: 12, max: 23 },
          { month: "August", min: 12, max: 24 },
          { month: "September", min: 13, max: 26 },
          { month: "October", min: 15, max: 28 },
          { month: "November", min: 16, max: 28 },
          { month: "December", min: 16, max: 28 }
        ],
        rainfallData: [
          { month: "January", rainfall: 80 },
          { month: "February", rainfall: 100 },
          { month: "March", rainfall: 150 },
          { month: "April", rainfall: 250 },
          { month: "May", rainfall: 120 },
          { month: "June", rainfall: 20 },
          { month: "July", rainfall: 10 },
          { month: "August", rainfall: 10 },
          { month: "September", rainfall: 15 },
          { month: "October", rainfall: 30 },
          { month: "November", rainfall: 70 },
          { month: "December", rainfall: 90 }
        ]
      },
      drySeason: {
        months: "June to October",
        details: [
          "Sunny days, cool nights",
          "Dust can reduce visibility",
          "Animals congregate at water sources"
        ]
      },
      wetSeason: {
        months: "November to May",
        details: [
          "Short rains (Nov–Dec), long rains (Mar–May)",
          "Roads can become muddy",
          "Lush vegetation"
        ]
      }
    },
    howToGetThere: {
      expert: { name: "Philip Briggs", bio: "..." },
      summary: "Accessed via scheduled or chartered flights from Arusha or road transfers (long drive).",
      access: {
        fromArusha: "8-hour drive or 1.5-hour flight",
        fromNgorongoro: "3-hour drive (140km)",
        fromLakeManyara: "4-hour drive (160km)"
      },
      airports: [
        { code: "SEU", name: "Seronera Airstrip", note: "Central Serengeti" },
        { code: "KGR", name: "Kogatende Airstrip", note: "Northern Serengeti" },
        { code: "MRE", name: "Mwiba Airstrip", note: "Southern Serengeti" }
      ],
      domesticAirlines: [
        "Coastal Aviation", "Auric Air", "Safari Air Link", "Air Excel"
      ]
    },
    malariaAndSafety: {
      expert: { name: "Philip Briggs", bio: "..." },
      safety: {
        summary: "Serengeti is very safe for tourists. Crime is virtually non-existent in the park.",
        tips: [
          "Always stay with your guide",
          "Never approach wild animals",
          "Follow park rules strictly"
        ]
      },
      malaria: {
        risk: "High (low altitude, wet season)",
        prevention: [
          "Antimalarial prophylaxis essential",
          "DEET repellent",
          "Mosquito nets at camps"
        ]
      },
      vaccinations: "Yellow fever certificate required if arriving from endemic country"
    }
  },

  // === 3. Tarangire National Park ===
  tarangireNationalPark: {
    overview: {
      breadcrumbs: ["Home", "Countries & Parks", "Tanzania", "Tarangire National Park"],
      expert: { name: "Philip Briggs", bio: "..." },
      summary: "Famous for its massive elephant herds and iconic baobab trees, Tarangire is a dry-season haven for wildlife. The Tarangire River sustains large concentrations of animals when other parks dry up.",
      stats: {
        "Best Time To Go": "June to October",
        "High Season": "June to October",
        "Size": "2,850km² / 1,100mi²",
        "Altitude": "1,000–1,500m / 3,280–4,920ft"
      },
      prosCons: {
        pros: [
          "Largest elephant population in Tanzania",
          "Iconic baobab trees",
          "Less crowded than Serengeti",
          "Excellent dry-season wildlife"
        ],
        cons: [
          "Wildlife disperses in wet season",
          "Limited Big Five (no rhino)",
          "Fewer predators than Serengeti"
        ]
      },
      media: { photos: true, map: true }
    },
    reviews: {
      expertRating: 4.6,
      expertReviews: 30,
      userRating: 4.6,
      userReviews: 386,
      latestExpertReview: {
        author: "Tim Bewer",
        country: "US",
        title: "Elephant Paradise",
        rating: 5,
        fullReview: "Tarangire is the place to see elephants in Tanzania. The baobabs create a quintessential African landscape..."
      },
      latestUserReview: {
        author: "Maria Schmidt",
        country: "DE",
        date: "Oct 10, 2025",
        rating: 5,
        review: "Saw over 100 elephants in one day! The baobabs are magical."
      }
    },
    wildlife: {
      expert: { name: "Philip Briggs", bio: "..." },
      summary: "Home to 3,000+ elephants, plus lion, leopard, and rare antelope like kudu and oryx. Four of the Big Five (no rhino).",
      abundanceLegend: ["Abundant", "Common", "Occasional", "Rare", "None"],
      speciesAbundance: {
        "Elephant": "Abundant",
        "Giraffe": "Abundant",
        "Hippo": "Common",
        "Buffalo": "Abundant",
        "Zebra": "Common",
        "Wildebeest": "Common",
        "White Rhino": "None",
        "Black Rhino": "None",
        "Lion": "Common",
        "Leopard": "Occasional",
        "Cheetah": "Rare",
        "Hyena": "Common",
        "Wild Dog": "Rare"
      },
      wildlifeRating: { expertRating: 4.6, expertReviews: 30, userRating: 4.6, userReviews: 386 },
      highlights: "Dry season (Jun–Oct) brings elephants to the Tarangire River...",
      bestTimeForWildlife: "June to October for best game viewing"
    },
    birds: {
      expert: { name: "Philip Briggs", bio: "..." },
      summary: "Over 550 bird species, including yellow-collared lovebird and ashy starling (endemic to northern Tanzania).",
      birdingRating: { expertRating: 4.4, expertReviews: 25, userRating: 4.4, userReviews: 247 },
      notableBirds: [
        { name: "Yellow-collared lovebird", abundance: "Common & endemic" },
        { name: "Ashy starling", abundance: "Common & endemic" },
        { name: "Klipspringer", abundance: "Rare" }
      ],
      facts: { totalSpecies: "550+", migratorySeason: "November to April" },
      bestTimeForBirding: "Year-round; endemics visible in dry season"
    },
    bestTimeToVisit: {
      expert: { name: "Philip Briggs", bio: "..." },
      monthlyRatings: {
        January: "Fair", February: "Fair", March: "Fair", April: "Fair",
        May: "Fair", June: "Good", July: "Excellent", August: "Excellent",
        September: "Excellent", October: "Excellent", November: "Excellent", December: "Good"
      },
      keyInfo: {
        bestTime: "June to October",
        highSeason: "June to October",
        lowSeason: "April and May",
        bestWeather: "June to October",
        worstWeather: "March to May"
      },
      drySeason: {
        months: "June to October",
        highlights: [
          "Elephant concentrations along the river",
          "Clear views under baobabs",
          "Excellent photography conditions"
        ]
      },
      wetSeason: {
        months: "November to May",
        highlights: [
          "Green scenery and birding",
          "Fewer tourists (Apr–May)",
          "Lush vegetation"
        ]
      }
    },
    weatherAndClimate: {
      expert: { name: "Philip Briggs", bio: "..." },
      summary: "Hot and dry in the dry season; warm and wet in the wet season. One of Tanzania's hotter parks.",
      climateChart: {
        location: "Tarangire National Park – 1,000-1,500m",
        temperatureData: [
          { month: "January", min: 18, max: 32 },
          { month: "February", min: 18, max: 32 },
          { month: "March", min: 18, max: 31 },
          { month: "April", min: 17, max: 29 },
          { month: "May", min: 16, max: 28 },
          { month: "June", min: 14, max: 27 },
          { month: "July", min: 13, max: 26 },
          { month: "August", min: 13, max: 27 },
          { month: "September", min: 15, max: 29 },
          { month: "October", min: 17, max: 31 },
          { month: "November", min: 18, max: 31 },
          { month: "December", min: 18, max: 31 }
        ],
        rainfallData: [
          { month: "January", rainfall: 70 },
          { month: "February", rainfall: 90 },
          { month: "March", rainfall: 140 },
          { month: "April", rainfall: 200 },
          { month: "May", rainfall: 80 },
          { month: "June", rainfall: 10 },
          { month: "July", rainfall: 5 },
          { month: "August", rainfall: 5 },
          { month: "September", rainfall: 10 },
          { month: "October", rainfall: 20 },
          { month: "November", rainfall: 50 },
          { month: "December", rainfall: 60 }
        ]
      },
      drySeason: {
        months: "June to October",
        details: [
          "Hot days, cool nights",
          "Dust can reduce visibility",
          "Animals gather at the Tarangire River"
        ]
      },
      wetSeason: {
        months: "November to May",
        details: [
          "Afternoon showers common",
          "Roads can become muddy",
          "Lush green landscapes"
        ]
      }
    },
    howToGetThere: {
      expert: { name: "Philip Briggs", bio: "..." },
      summary: "3-hour drive from Arusha or fly into Tarangire Airstrip.",
      access: {
        fromArusha: "3-hour drive (180km)",
        fromNgorongoro: "4-hour drive (200km)",
        fromSerengeti: "5-hour drive (250km)"
      },
      airports: [
        { code: "TRE", name: "Tarangire Airstrip", note: "Seasonal flights" }
      ],
      domesticAirlines: ["Coastal Aviation", "Auric Air"]
    },
    malariaAndSafety: {
      expert: { name: "Philip Briggs", bio: "..." },
      safety: {
        summary: "Tarangire is very safe for tourists. Crime is virtually non-existent in the park.",
        tips: [
          "Always stay with your guide",
          "Never approach wild animals",
          "Follow park rules strictly"
        ]
      },
      malaria: {
        risk: "Moderate to high",
        prevention: [
          "Antimalarial medication recommended",
          "DEET repellent",
          "Mosquito nets at camps"
        ]
      },
      vaccinations: "Standard travel vaccines recommended"
    }
  },

  // === 4. Lake Manyara National Park ===
  lakeManyaraNationalPark: {
    overview: {
      breadcrumbs: ["Home", "Countries & Parks", "Tanzania", "Lake Manyara National Park"],
      expert: { name: "Philip Briggs", bio: "..." },
      summary: "Famous for tree-climbing lions and huge flocks of flamingos, Lake Manyara is a compact but diverse park at the base of the Rift Valley escarpment. It offers a great introduction to Tanzanian wildlife.",
      stats: {
        "Best Time To Go": "June to October",
        "High Season": "July to March",
        "Size": "330km² / 127mi²",
        "Altitude": "960–1,500m / 3,150–4,920ft"
      },
      prosCons: {
        pros: [
          "Tree-climbing lions",
          "Flamingo flocks on the lake",
          "Treetop walkway",
          "Easy access from Arusha",
          "Compact and manageable"
        ],
        cons: [
          "Small size limits game viewing",
          "Can be crowded",
          "Limited Big Five (no rhino)"
        ]
      },
      media: { photos: true, map: true }
    },
    reviews: {
      expertRating: 4.0,
      expertReviews: 18,
      userRating: 4.0,
      userReviews: 315,
      latestExpertReview: {
        author: "Stuart Butler",
        country: "UK",
        title: "Compact but Spectacular",
        rating: 4,
        fullReview: "Lake Manyara packs a lot into a small area. The tree-climbing lions are a unique sight..."
      },
      latestUserReview: {
        author: "James Wilson",
        country: "UK",
        date: "Oct 5, 2025",
        rating: 4,
        review: "Saw tree-climbing lions! The flamingos were amazing."
      }
    },
    wildlife: {
      expert: { name: "Philip Briggs", bio: "..." },
      summary: "Known for tree-climbing lions, large elephant herds, and over 400 bird species including flamingos.",
      abundanceLegend: ["Abundant", "Common", "Occasional", "Rare", "None"],
      speciesAbundance: {
        "Elephant": "Abundant",
        "Giraffe": "Abundant",
        "Hippo": "Abundant",
        "Buffalo": "Abundant",
        "Zebra": "Common",
        "Wildebeest": "Common",
        "White Rhino": "None",
        "Black Rhino": "None",
        "Lion": "Common",
        "Leopard": "Rare",
        "Cheetah": "None",
        "Hyena": "Common",
        "Wild Dog": "None"
      },
      wildlifeRating: { expertRating: 4.0, expertReviews: 18, userRating: 4.0, userReviews: 315 },
      highlights: "Tree-climbing lions are a unique sight... flamingos gather on Lake Manyara...",
      bestTimeForWildlife: "Dry season (Jun–Oct) for best viewing"
    },
    birds: {
      expert: { name: "Philip Briggs", bio: "..." },
      summary: "Over 400 bird species, including greater flamingo, pelican, fish eagle, and hammerkop.",
      birdingRating: { expertRating: 4.1, expertReviews: 20, userRating: 4.1, userReviews: 220 },
      notableBirds: [
        { name: "Greater flamingo", abundance: "Abundant (dry season)" },
        { name: "Pelican", abundance: "Common" },
        { name: "Fish eagle", abundance: "Common" },
        { name: "Hammerkop", abundance: "Common" }
      ],
      facts: { totalSpecies: "400+", migratorySeason: "November to April" },
      bestTimeForBirding: "Year-round; flamingos best in dry season"
    },
    bestTimeToVisit: {
      expert: { name: "Philip Briggs", bio: "..." },
      monthlyRatings: {
        January: "Good", February: "Good", March: "Fair", April: "Fair",
        May: "Good", June: "Excellent", July: "Excellent", August: "Excellent",
        September: "Excellent", October: "Excellent", November: "Good", December: "Good"
      },
      keyInfo: {
        bestTime: "June to October",
        highSeason: "July to March",
        lowSeason: "April and May",
        bestWeather: "June to October",
        worstWeather: "March to May"
      },
      drySeason: {
        months: "June to October",
        highlights: [
          "Flamingo concentrations on the lake",
          "Tree-climbing lions active",
          "Clear views and good photography"
        ]
      },
      wetSeason: {
        months: "November to May",
        highlights: [
          "Green scenery and migratory birds (Nov–Apr)",
          "Fewer tourists (Apr–May)",
          "Lush vegetation"
        ]
      }
    },
    weatherAndClimate: {
      expert: { name: "Philip Briggs", bio: "..." },
      summary: "Mild year-round; wet Nov–May. Cooler at higher elevations near the escarpment.",
      climateChart: {
        location: "Lake Manyara National Park – 960-1,500m",
        temperatureData: [
          { month: "January", min: 16, max: 28 },
          { month: "February", min: 16, max: 28 },
          { month: "March", min: 16, max: 27 },
          { month: "April", min: 15, max: 25 },
          { month: "May", min: 14, max: 24 },
          { month: "June", min: 12, max: 23 },
          { month: "July", min: 11, max: 22 },
          { month: "August", min: 12, max: 23 },
          { month: "September", min: 14, max: 25 },
          { month: "October", min: 15, max: 27 },
          { month: "November", min: 16, max: 27 },
          { month: "December", min: 16, max: 27 }
        ],
        rainfallData: [
          { month: "January", rainfall: 80 },
          { month: "February", rainfall: 100 },
          { month: "March", rainfall: 150 },
          { month: "April", rainfall: 250 },
          { month: "May", rainfall: 120 },
          { month: "June", rainfall: 20 },
          { month: "July", rainfall: 10 },
          { month: "August", rainfall: 10 },
          { month: "September", rainfall: 15 },
          { month: "October", rainfall: 30 },
          { month: "November", rainfall: 70 },
          { month: "December", rainfall: 90 }
        ]
      },
      drySeason: {
        months: "June to October",
        details: [
          "Cool nights",
          "Sunny days",
          "Animals gather near the lake"
        ]
      },
      wetSeason: {
        months: "November to May",
        details: [
          "Afternoon showers common",
          "Roads can become muddy",
          "Lush green landscapes"
        ]
      }
    },
    howToGetThere: {
      expert: { name: "Philip Briggs", bio: "..." },
      summary: "2-hour drive from Arusha or fly into Lake Manyara Airstrip.",
      access: {
        fromArusha: "2-hour drive (120km)",
        fromNgorongoro: "2-hour drive (80km)",
        fromTarangire: "3-hour drive (150km)"
      },
      airports: [
        { code: "LKY", name: "Lake Manyara Airstrip", note: "Seasonal flights" }
      ],
      domesticAirlines: ["Coastal Aviation", "Auric Air"]
    },
    malariaAndSafety: {
      expert: { name: "Philip Briggs", bio: "..." },
      safety: {
        summary: "Lake Manyara is very safe for tourists. Crime is virtually non-existent in the park.",
        tips: [
          "Always stay with your guide",
          "Never approach wild animals",
          "Follow park rules strictly"
        ]
      },
      malaria: {
        risk: "Moderate",
        prevention: [
          "DEET repellent",
          "Antimalarial medication recommended",
          "Mosquito nets at camps"
        ]
      },
      vaccinations: "Standard travel vaccines recommended"
    }},
  
  // === 5. Ruaha National Park ===
  ruahaNationalPark: {
    overview: {
      breadcrumbs: ["Home", "Countries & Parks", "Tanzania", "Ruaha National Park"],
      expert: { name: "Philip Briggs", byline: "By Philip Briggs", bio: "Philip is a renowned Africa expert and author of many guidebooks to African destinations, including the Bradt guide to Tanzania." },
      summary: "Tanzania’s largest national park, Ruaha is a remote wilderness with dramatic landscapes, large elephant herds, and excellent wild dog sightings. It forms part of the Rungwa-Kizigo-Muhesi ecosystem.",
      stats: {
        "Best Time To Go": "June to October",
        "High Season": "June to October",
        "Size": "20,226km² / 7,809mi²",
        "Altitude": "600–1,300m / 1,970–4,265ft"
      },
      prosCons: {
        pros: [
          "True wilderness experience",
          "Wild dog stronghold",
          "Dramatic scenery with baobabs and river gorges",
          "High lion density"
        ],
        cons: [
          "Very remote and hot",
          "Closed Apr–May",
          "Limited infrastructure"
        ]
      },
      media: { photos: true, map: true }
    },
    reviews: {
      expertRating: 4.7,
      expertReviews: 18,
      userRating: 4.7,
      userReviews: 75,
      latestExpertReview: {
        author: "Tim Bewer",
        country: "US",
        title: "Africa's Best-Kept Secret",
        rating: 5,
        fullReview: "Ruaha is Tanzania's hidden gem. Few tourists, incredible wildlife, and a true sense of wilderness..."
      },
      latestUserReview: {
        author: "Anna Müller",
        country: "DE",
        date: "Oct 18, 2025",
        rating: 5,
        review: "Saw wild dogs hunting! The remoteness made it feel like we had Africa to ourselves."
      }
    },
    wildlife: {
      expert: { name: "Philip Briggs", bio: "..." },
      summary: "Home to 10% of the world’s lion population and large numbers of wild dog, cheetah, and elephant.",
      abundanceLegend: ["Abundant", "Common", "Occasional", "Rare", "None"],
      speciesAbundance: {
        "Elephant": "Abundant",
        "Giraffe": "Common",
        "Hippo": "Common",
        "Buffalo": "Abundant",
        "Zebra": "Common",
        "Wildebeest": "Common",
        "White Rhino": "None",
        "Black Rhino": "None",
        "Lion": "Abundant",
        "Leopard": "Common",
        "Cheetah": "Occasional",
        "Hyena": "Common",
        "Wild Dog": "Common"
      },
      wildlifeRating: { expertRating: 4.7, expertReviews: 18, userRating: 4.7, userReviews: 75 },
      highlights: "One of Africa’s best places to see wild dogs. Lions are exceptionally numerous.",
      bestTimeForWildlife: "Dry season (Jun–Oct) when animals gather at the Great Ruaha River."
    },
    birds: {
      expert: { name: "Philip Briggs", bio: "..." },
      summary: "Over 570 bird species, including crested barbet, yellow-throated sandgrouse, and racket-tailed roller.",
      birdingRating: { expertRating: 4.4, expertReviews: 15, userRating: 4.4, userReviews: 60 },
      notableBirds: [
        { name: "Crested barbet", abundance: "Common" },
        { name: "Racket-tailed roller", abundance: "Common" },
        { name: "Yellow-throated sandgrouse", abundance: "Common" },
        { name: "Ashy starling", abundance: "Endemic" }
      ],
      facts: { totalSpecies: "570+", migratorySeason: "November to April" },
      bestTimeForBirding: "Year-round; endemics visible in dry season"
    },
    bestTimeToVisit: {
      expert: { name: "Philip Briggs", bio: "..." },
      monthlyRatings: {
        January: "Fair", February: "Fair", March: "Poor", April: "Poor",
        May: "Fair", June: "Excellent", July: "Excellent", August: "Excellent",
        September: "Excellent", October: "Excellent", November: "Good", December: "Fair"
      },
      keyInfo: {
        bestTime: "June to October",
        highSeason: "June to October",
        lowSeason: "April and May",
        bestWeather: "June to October",
        worstWeather: "March to May"
      },
      drySeason: {
        months: "June to October",
        highlights: [
          "Animals congregate at the Great Ruaha River",
          "Excellent predator sightings",
          "Clear views in open woodlands"
        ]
      },
      wetSeason: {
        months: "November to May",
        highlights: [
          "Lush green scenery",
          "Fewer tourists (Apr–May)",
          "Migratory birds (Nov–Apr)"
        ]
      }
    },
    weatherAndClimate: {
      expert: { name: "Philip Briggs", bio: "..." },
      summary: "Hot and dry in the dry season; warm and wet in the wet season. One of Tanzania's hotter parks.",
      climateChart: {
        location: "Ruaha National Park – 600-1,300m",
        temperatureData: [
          { month: "January", min: 20, max: 34 },
          { month: "February", min: 20, max: 33 },
          { month: "March", min: 20, max: 32 },
          { month: "April", min: 19, max: 30 },
          { month: "May", min: 17, max: 29 },
          { month: "June", min: 15, max: 28 },
          { month: "July", min: 14, max: 27 },
          { month: "August", min: 15, max: 28 },
          { month: "September", min: 17, max: 30 },
          { month: "October", min: 19, max: 33 },
          { month: "November", min: 20, max: 33 },
          { month: "December", min: 20, max: 33 }
        ],
        rainfallData: [
          { month: "January", rainfall: 120 },
          { month: "February", rainfall: 140 },
          { month: "March", rainfall: 180 },
          { month: "April", rainfall: 100 },
          { month: "May", rainfall: 30 },
          { month: "June", rainfall: 5 },
          { month: "July", rainfall: 2 },
          { month: "August", rainfall: 2 },
          { month: "September", rainfall: 5 },
          { month: "October", rainfall: 20 },
          { month: "November", rainfall: 50 },
          { month: "December", rainfall: 100 }
        ]
      },
      drySeason: {
        months: "June to October",
        details: [
          "Very hot days, cool nights",
          "Dust can reduce visibility",
          "Animals gather at water sources"
        ]
      },
      wetSeason: {
        months: "November to May",
        details: [
          "Afternoon showers common",
          "Roads can become impassable (Apr–May)",
          "Lush vegetation"
        ]
      }
    },
    howToGetThere: {
      expert: { name: "Philip Briggs", bio: "..." },
      summary: "Fly into Ruaha Airstrip from Dar es Salaam or Iringa.",
      access: {
        fromDar: "1-hour flight or 8-hour drive",
        fromIringa: "2-hour drive (120km)"
      },
      airports: [
        { code: "IRI", name: "Iringa Airport", note: "Regional hub" },
        { code: "DAR", name: "Julius Nyerere International Airport", note: "International gateway" }
      ],
      domesticAirlines: ["Coastal Aviation", "Auric Air", "Safari Air Link"]
    },
    malariaAndSafety: {
      expert: { name: "Philip Briggs", bio: "..." },
      safety: {
        summary: "Ruaha is very safe for tourists. Crime is virtually non-existent in the park.",
        tips: [
          "Always stay with your guide",
          "Never approach wild animals",
          "Follow park rules strictly"
        ]
      },
      malaria: {
        risk: "High (low altitude, wet season)",
        prevention: [
          "Antimalarial prophylaxis essential",
          "DEET repellent",
          "Mosquito nets at camps"
        ]
      },
      vaccinations: "Yellow fever certificate required if arriving from endemic country"
    }
  },

  // === 6. Nyerere National Park (Selous) ===
  nyerereNationalPark: {
    overview: {
      breadcrumbs: ["Home", "Countries & Parks", "Tanzania", "Nyerere National Park"],
      expert: { name: "Philip Briggs", bio: "..." },
      summary: "Africa’s largest game reserve, Nyerere (formerly Selous) offers boat safaris, walking safaris, and wild dog sightings in a true wilderness setting.",
      stats: {
        "Best Time To Go": "June to October",
        "High Season": "June to October",
        "Size": "50,000km² / 19,305mi²",
        "Altitude": "100–300m / 330–980ft"
      },
      prosCons: {
        pros: [
          "Boat and walking safaris",
          "Wild dog sightings",
          "Uncrowded",
          "Rufiji River ecosystem"
        ],
        cons: [
          "Remote",
          "Closed Apr–May",
          "Less Big Five density"
        ]
      },
      media: { photos: true, map: true }
    },
    reviews: {
      expertRating: 4.6,
      expertReviews: 20,
      userRating: 4.6,
      userReviews: 111,
      latestExpertReview: {
        author: "Stuart Butler",
        country: "UK",
        title: "Wilderness Paradise",
        rating: 5,
        fullReview: "Nyerere offers a true wilderness experience with activities you won't find elsewhere..."
      },
      latestUserReview: {
        author: "Lars Jensen",
        country: "DK",
        date: "Oct 15, 2025",
        rating: 4,
        review: "The boat safari on the Rufiji River was magical. Saw hippos, crocs, and birds everywhere."
      }
    },
    wildlife: {
      expert: { name: "Philip Briggs", bio: "..." },
      summary: "Home to 30% of Tanzania’s wild dogs, plus elephant, hippo, and crocodile. Four of the Big Five (no rhino).",
      abundanceLegend: ["Abundant", "Common", "Occasional", "Rare", "None"],
      speciesAbundance: {
        "Elephant": "Common",
        "Giraffe": "Rare",
        "Hippo": "Abundant",
        "Buffalo": "Abundant",
        "Zebra": "Rare",
        "Wildebeest": "Rare",
        "White Rhino": "None",
        "Black Rhino": "None",
        "Lion": "Common",
        "Leopard": "Occasional",
        "Cheetah": "None",
        "Hyena": "Common",
        "Wild Dog": "Common"
      },
      wildlifeRating: { expertRating: 4.6, expertReviews: 20, userRating: 4.6, userReviews: 111 },
      highlights: "Boat safaris offer unique hippo and crocodile viewing. Wild dogs are frequently seen.",
      bestTimeForWildlife: "Dry season (Jun–Oct) for best wildlife and boat safaris on the Rufiji River."
    },
    birds: {
      expert: { name: "Philip Briggs", bio: "..." },
      summary: "Over 440 bird species, including African skimmer, Pel's fishing owl, and kingfishers.",
      birdingRating: { expertRating: 4.4, expertReviews: 18, userRating: 4.4, userReviews: 109 },
      notableBirds: [
        { name: "African skimmer", abundance: "Common" },
        { name: "Pel's fishing owl", abundance: "Rare" },
        { name: "Giant kingfisher", abundance: "Common" },
        { name: "African fish eagle", abundance: "Common" }
      ],
      facts: { totalSpecies: "440+", migratorySeason: "November to April" },
      bestTimeForBirding: "Year-round; riverine species best in dry season"
    },
    bestTimeToVisit: {
      expert: { name: "Philip Briggs", bio: "..." },
      monthlyRatings: {
        January: "Fair", February: "Fair", March: "Poor", April: "Poor",
        May: "Fair", June: "Excellent", July: "Excellent", August: "Excellent",
        September: "Excellent", October: "Excellent", November: "Good", December: "Fair"
      },
      keyInfo: {
        bestTime: "June to October",
        highSeason: "June to October",
        lowSeason: "April and May",
        bestWeather: "June to October",
        worstWeather: "March to May"
      },
      drySeason: {
        months: "June to October",
        highlights: [
          "Boat safaris on Rufiji River",
          "Walking safaris permitted",
          "Wild dog sightings"
        ]
      },
      wetSeason: {
        months: "November to May",
        highlights: [
          "Lush green scenery",
          "Fewer tourists (Apr–May)",
          "Migratory birds (Nov–Apr)"
        ]
      }
    },
    weatherAndClimate: {
      expert: { name: "Philip Briggs", bio: "..." },
      summary: "Hot and humid year-round due to low elevation and proximity to the Indian Ocean.",
      climateChart: {
        location: "Nyerere National Park – 100-300m",
        temperatureData: [
          { month: "January", min: 22, max: 33 },
          { month: "February", min: 22, max: 32 },
          { month: "March", min: 22, max: 31 },
          { month: "April", min: 21, max: 30 },
          { month: "May", min: 19, max: 29 },
          { month: "June", min: 17, max: 28 },
          { month: "July", min: 16, max: 27 },
          { month: "August", min: 17, max: 28 },
          { month: "September", min: 19, max: 30 },
          { month: "October", min: 21, max: 32 },
          { month: "November", min: 22, max: 32 },
          { month: "December", min: 22, max: 32 }
        ],
        rainfallData: [
          { month: "January", rainfall: 150 },
          { month: "February", rainfall: 180 },
          { month: "March", rainfall: 250 },
          { month: "April", rainfall: 200 },
          { month: "May", rainfall: 80 },
          { month: "June", rainfall: 20 },
          { month: "July", rainfall: 10 },
          { month: "August", rainfall: 10 },
          { month: "September", rainfall: 15 },
          { month: "October", rainfall: 40 },
          { month: "November", rainfall: 80 },
          { month: "December", rainfall: 120 }
        ]
      },
      drySeason: {
        months: "June to October",
        details: [
          "Hot and dry",
          "River levels ideal for boat safaris",
          "Animals gather at water sources"
        ]
      },
      wetSeason: {
        months: "November to May",
        details: [
          "Hot and humid",
          "Heavy rains (Mar–May)",
          "Some camps closed (Apr–May)"
        ]
      }
    },
    howToGetThere: {
      expert: { name: "Philip Briggs", bio: "..." },
      summary: "Fly into Selous Airstrip from Dar es Salaam.",
      access: {
        fromDar: "1-hour flight or 6-hour drive"
      },
      airports: [
        { code: "DAR", name: "Julius Nyerere International Airport", note: "International gateway" }
      ],
      domesticAirlines: ["Coastal Aviation", "Auric Air", "Safari Air Link"]
    },
    malariaAndSafety: {
      expert: { name: "Philip Briggs", bio: "..." },
      safety: {
        summary: "Nyerere is very safe for tourists. Crime is virtually non-existent in the park.",
        tips: [
          "Always stay with your guide",
          "Follow walking safari rules",
          "Use insect repellent"
        ]
      },
      malaria: {
        risk: "Very high (low altitude, riverine)",
        prevention: [
          "Antimalarial prophylaxis essential",
          "DEET repellent",
          "Mosquito nets at camps"
        ]
      },
      vaccinations: "Yellow fever certificate required if arriving from endemic country"
    }
  },

  // === 7. Katavi National Park ===
  kataviNationalPark: {
    overview: {
      breadcrumbs: ["Home", "Countries & Parks", "Tanzania", "Katavi National Park"],
      expert: { name: "Philip Briggs", bio: "..." },
      summary: "One of Tanzania’s most remote and untouched parks, Katavi offers a true wilderness experience with massive hippo pods and buffalo herds.",
      stats: {
        "Best Time To Go": "June to October",
        "High Season": "June to October",
        "Size": "4,471km² / 1,726mi²",
        "Altitude": "900–1,100m / 2,950–3,610ft"
      },
      prosCons: {
        pros: [
          "True wilderness",
          "Huge hippo concentrations",
          "Few tourists",
          "Intimate safari experience"
        ],
        cons: [
          "Very remote",
          "Difficult access",
          "Closed Apr–May"
        ]
      },
      media: { photos: true, map: true }
    },
    reviews: {
      expertRating: 4.5,
      expertReviews: 12,
      userRating: 4.5,
      userReviews: 34,
      latestExpertReview: {
        author: "Tim Bewer",
        country: "US",
        title: "Africa's Last Wilderness",
        rating: 5,
        fullReview: "Katavi is as wild as Africa gets. Few roads, few people, and incredible wildlife..."
      },
      latestUserReview: {
        author: "Sophie Dubois",
        country: "FR",
        date: "Oct 12, 2025",
        rating: 5,
        review: "Saw hundreds of hippos in one pod! The remoteness was challenging but worth it."
      }
    },
    wildlife: {
      expert: { name: "Philip Briggs", bio: "..." },
      summary: "Home to one of Africa’s largest hippo populations, plus lion, leopard, and large buffalo herds. Four of the Big Five (no rhino).",
      abundanceLegend: ["Abundant", "Common", "Occasional", "Rare", "None"],
      speciesAbundance: {
        "Elephant": "Common",
        "Giraffe": "Rare",
        "Hippo": "Abundant",
        "Buffalo": "Abundant",
        "Zebra": "Common",
        "Wildebeest": "Common",
        "White Rhino": "None",
        "Black Rhino": "None",
        "Lion": "Common",
        "Leopard": "Occasional",
        "Cheetah": "None",
        "Hyena": "Common",
        "Wild Dog": "Rare"
      },
      wildlifeRating: { expertRating: 4.5, expertReviews: 12, userRating: 4.5, userReviews: 34 },
      highlights: "Katavi has some of Africa’s largest hippo pods, with hundreds congregating in shrinking pools.",
      bestTimeForWildlife: "Dry season (Jun–Oct) when animals congregate at shrinking water sources."
    },
    birds: {
      expert: { name: "Philip Briggs", bio: "..." },
      summary: "Over 400 bird species, including fish eagle, saddle-billed stork, and African skimmer.",
      birdingRating: { expertRating: 4.3, expertReviews: 10, userRating: 4.3, userReviews: 30 },
      notableBirds: [
        { name: "Saddle-billed stork", abundance: "Common" },
        { name: "African skimmer", abundance: "Common" },
        { name: "Fish eagle", abundance: "Common" },
        { name: "Goliath heron", abundance: "Common" }
      ],
      facts: { totalSpecies: "400+", migratorySeason: "November to April" },
      bestTimeForBirding: "Year-round; waterbirds best in dry season"
    },
    bestTimeToVisit: {
      expert: { name: "Philip Briggs", bio: "..." },
      monthlyRatings: {
        January: "Fair", February: "Fair", March: "Poor", April: "Poor",
        May: "Poor", June: "Good", July: "Excellent", August: "Excellent",
        September: "Excellent", October: "Excellent", November: "Fair", December: "Fair"
      },
      keyInfo: {
        bestTime: "June to October",
        highSeason: "June to October",
        lowSeason: "April and May",
        bestWeather: "June to October",
        worstWeather: "March to May"
      },
      drySeason: {
        months: "June to October",
        highlights: [
          "Massive hippo pods in shrinking pools",
          "Buffalo herds up to 1,000 strong",
          "Excellent predator sightings"
        ]
      },
      wetSeason: {
        months: "November to May",
        highlights: [
          "Lush green scenery",
          "Park closed Apr–May",
          "Migratory birds (Nov–Apr)"
        ]
      }
    },
    weatherAndClimate: {
      expert: { name: "Philip Briggs", bio: "..." },
      summary: "Hot and dry in the dry season; very wet in the wet season. One of Tanzania's more extreme climates.",
      climateChart: {
        location: "Katavi National Park – 900-1,100m",
        temperatureData: [
          { month: "January", min: 19, max: 31 },
          { month: "February", min: 19, max: 30 },
          { month: "March", min: 19, max: 29 },
          { month: "April", min: 18, max: 28 },
          { month: "May", min: 16, max: 27 },
          { month: "June", min: 14, max: 26 },
          { month: "July", min: 13, max: 25 },
          { month: "August", min: 14, max: 26 },
          { month: "September", min: 16, max: 28 },
          { month: "October", min: 18, max: 30 },
          { month: "November", min: 19, max: 30 },
          { month: "December", min: 19, max: 30 }
        ],
        rainfallData: [
          { month: "January", rainfall: 150 },
          { month: "February", rainfall: 180 },
          { month: "March", rainfall: 250 },
          { month: "April", rainfall: 200 },
          { month: "May", rainfall: 80 },
          { month: "June", rainfall: 10 },
          { month: "July", rainfall: 5 },
          { month: "August", rainfall: 5 },
          { month: "September", rainfall: 10 },
          { month: "October", rainfall: 40 },
          { month: "November", rainfall: 80 },
          { month: "December", rainfall: 120 }
        ]
      },
      drySeason: {
        months: "June to October",
        details: [
          "Hot days, cool nights",
          "Dust can reduce visibility",
          "Animals gather at water sources"
        ]
      },
      wetSeason: {
        months: "November to May",
        details: [
          "Heavy rains (Mar–May)",
          "Roads become impassable",
          "Park closed Apr–May"
        ]
      }
    },
    howToGetThere: {
      expert: { name: "Philip Briggs", bio: "..." },
      summary: "Fly into Katavi Airstrip from Dar es Salaam or Ruaha.",
      access: {
        fromDar: "2-hour flight",
        fromRuaha: "1-hour flight"
      },
      airports: [
        { code: "KTL", name: "Katavi Airstrip", note: "Seasonal flights" }
      ],
      domesticAirlines: ["Coastal Aviation", "Auric Air"]
    },
    malariaAndSafety: {
      expert: { name: "Philip Briggs", bio: "..." },
      safety: {
        summary: "Katavi is very safe for tourists. Crime is virtually non-existent in the park.",
        tips: [
          "Always stay with your guide",
          "Follow park rules strictly",
          "Be prepared for remoteness"
        ]
      },
      malaria: {
        risk: "High (low altitude, wet season)",
        prevention: [
          "Antimalarial prophylaxis essential",
          "DEET repellent",
          "Mosquito nets at camps"
        ]
      },
      vaccinations: "Yellow fever certificate required if arriving from endemic country"
    }
  },

  // === 8. Arusha National Park ===
  arushaNationalPark: {
    overview: {
      breadcrumbs: ["Home", "Countries & Parks", "Tanzania", "Arusha National Park"],
      expert: { name: "Philip Briggs", bio: "..." },
      summary: "Arusha National Park offers scenic views of Mount Meru and Mount Kilimanjaro, with diverse habitats from montane forest to alpine desert.",
      stats: {
        "Best Time To Go": "June to October",
        "High Season": "July to March",
        "Size": "137km² / 53mi²",
        "Altitude": "1,400–4,566m / 4,593–14,980ft"
      },
      prosCons: {
        pros: [
          "Stunning mountain scenery",
          "Close to Arusha city",
          "Good for day trips",
          "Mount Meru hiking"
        ],
        cons: [
          "Limited big game",
          "Not part of the Northern Circuit loop",
          "Fewer predators"
        ]
      },
      media: { photos: true, map: true }
    },
    reviews: {
      expertRating: 4.2,
      expertReviews: 15,
      userRating: 4.2,
      userReviews: 112,
      latestExpertReview: {
        author: "Stuart Butler",
        country: "UK",
        title: "Mountain Beauty",
        rating: 4,
        fullReview: "Arusha NP is perfect for those short on time or looking for mountain scenery..."
      },
      latestUserReview: {
        author: "Emma Thompson",
        country: "UK",
        date: "Oct 20, 2025",
        rating: 4,
        review: "Beautiful views of Kilimanjaro! Saw giraffes and colobus monkeys."
      }
    },
    wildlife: {
      expert: { name: "Philip Briggs", bio: "..." },
      summary: "Home to giraffe, buffalo, zebra, and the rare Kilimanjaro colobus monkey. Predators are scarce.",
      abundanceLegend: ["Abundant", "Common", "Occasional", "Rare", "None"],
      speciesAbundance: {
        "Elephant": "Rare",
        "Giraffe": "Common",
        "Hippo": "Common",
        "Buffalo": "Common",
        "Zebra": "Common",
        "Wildebeest": "Rare",
        "White Rhino": "None",
        "Black Rhino": "None",
        "Lion": "Rare",
        "Leopard": "Rare",
        "Cheetah": "None",
        "Hyena": "Rare",
        "Wild Dog": "None"
      },
      wildlifeRating: { expertRating: 4.0, expertReviews: 15, userRating: 4.2, userReviews: 112 },
      highlights: "The Kilimanjaro colobus monkey is endemic to this region and easily seen in the forest.",
      bestTimeForWildlife: "Dry season (Jun–Oct) offers best wildlife viewing and clear mountain views."
    },
    birds: {
      expert: { name: "Philip Briggs", bio: "..." },
      summary: "Over 400 bird species, including turacos, hornbills, and eagles in the montane forest.",
      birdingRating: { expertRating: 4.2, expertReviews: 12, userRating: 4.2, userReviews: 76 },
      notableBirds: [
        { name: "Hartlaub's turaco", abundance: "Common" },
        { name: "Silvery-cheeked hornbill", abundance: "Common" },
        { name: "African crowned eagle", abundance: "Occasional" },
        { name: "Mountain buzzard", abundance: "Common" }
      ],
      facts: { totalSpecies: "400+", migratorySeason: "November to April" },
      bestTimeForBirding: "Year-round; forest species best in dry season"
    },
    bestTimeToVisit: {
      expert: { name: "Philip Briggs", bio: "..." },
      monthlyRatings: {
        January: "Good", February: "Good", March: "Fair", April: "Fair",
        May: "Good", June: "Excellent", July: "Excellent", August: "Excellent",
        September: "Excellent", October: "Excellent", November: "Good", December: "Good"
      },
      keyInfo: {
        bestTime: "June to October",
        highSeason: "July to March",
        lowSeason: "April and May",
        bestWeather: "June to October",
        worstWeather: "March to May"
      },
      drySeason: {
        months: "June to October",
        highlights: [
          "Clear views of Kilimanjaro",
          "Best wildlife viewing",
          "Ideal for hiking Mount Meru"
        ]
      },
      wetSeason: {
        months: "November to May",
        highlights: [
          "Lush green scenery",
          "Fewer tourists (Apr–May)",
          "Migratory birds (Nov–Apr)"
        ]
      }
    },
    weatherAndClimate: {
      expert: { name: "Philip Briggs", bio: "..." },
      summary: "Mild temperatures year-round due to high altitude. Cooler at higher elevations.",
      climateChart: {
        location: "Arusha National Park – 1,400-4,566m",
        temperatureData: [
          { month: "January", min: 10, max: 28 },
          { month: "February", min: 10, max: 28 },
          { month: "March", min: 11, max: 27 },
          { month: "April", min: 13, max: 25 },
          { month: "May", min: 11, max: 22 },
          { month: "June", min: 8, max: 21 },
          { month: "July", min: 9, max: 20 },
          { month: "August", min: 8, max: 22 },
          { month: "September", min: 8, max: 24 },
          { month: "October", min: 10, max: 26 },
          { month: "November", min: 10, max: 27 },
          { month: "December", min: 10, max: 27 }
        ],
        rainfallData: [
          { month: "January", rainfall: 50 },
          { month: "February", rainfall: 80 },
          { month: "March", rainfall: 170 },
          { month: "April", rainfall: 360 },
          { month: "May", rainfall: 210 },
          { month: "June", rainfall: 30 },
          { month: "July", rainfall: 10 },
          { month: "August", rainfall: 10 },
          { month: "September", rainfall: 20 },
          { month: "October", rainfall: 30 },
          { month: "November", rainfall: 110 },
          { month: "December", rainfall: 100 }
        ]
      },
      drySeason: {
        months: "June to October",
        details: [
          "Mild days, cool nights",
          "Clear mountain views",
          "Ideal for hiking"
        ]
      },
      wetSeason: {
        months: "November to May",
        details: [
          "Afternoon showers common",
          "Lush vegetation",
          "Mount Meru climbing possible year-round"
        ]
      }
    },
    howToGetThere: {
      expert: { name: "Philip Briggs", bio: "..." },
      summary: "Easily accessible from Arusha city (45-minute drive).",
      access: {
        fromArusha: "45-minute drive (30km)"
      },
      airports: [
        { code: "ARK", name: "Arusha Airport", note: "Domestic flights" },
        { code: "JRO", name: "Kilimanjaro International Airport", note: "50km from Arusha" }
      ],
      domesticAirlines: ["Coastal Aviation", "Auric Air", "Precision Air"]
    },
    malariaAndSafety: {
      expert: { name: "Philip Briggs", bio: "..." },
      safety: {
        summary: "Arusha NP is very safe for tourists. Crime is rare in the park.",
        tips: [
          "Always stay with your guide",
          "Follow park rules",
          "Be cautious in Arusha city"
        ]
      },
      malaria: {
        risk: "Low (high altitude)",
        prevention: [
          "DEET repellent",
          "Cover skin in evenings"
        ]
      },
      vaccinations: "Standard travel vaccines recommended"
    }
  },
 
  // === 9. Gombe National Park ===
  gombeNationalPark: {
    overview: {
      breadcrumbs: ["Home", "Countries & Parks", "Tanzania", "Gombe National Park"],
      expert: { name: "Philip Briggs", byline: "By Philip Briggs", bio: "Philip is a renowned Africa expert and author of many guidebooks to African destinations, including the Bradt guide to Tanzania." },
      summary: "Gombe is Tanzania’s smallest park but world-famous for Jane Goodall’s chimpanzee research. Located on the eastern shore of Lake Tanganyika, it offers an intimate primate experience in dense forest.",
      stats: {
        "Best Time To Go": "May to October",
        "High Season": "June to September",
        "Size": "52km² / 20mi²",
        "Altitude": "770–1,600m / 2,526–5,250ft"
      },
      prosCons: {
        pros: [
          "Best chimp trekking in Africa",
          "Intimate wildlife experience",
          "Lake Tanganyika access",
          "Historic research site"
        ],
        cons: [
          "Remote location",
          "Expensive access",
          "Limited other wildlife",
          "Weather-dependent"
        ]
      },
      media: { photos: true, map: true }
    },
    reviews: {
      expertRating: 4.5,
      expertReviews: 20,
      userRating: 4.5,
      userReviews: 23,
      latestExpertReview: {
        author: "Tim Bewer",
        country: "US",
        title: "Chimpanzee Paradise",
        rating: 5,
        fullReview: "Gombe offers the most intimate chimp experience in Africa. Walking through the forest with Jane Goodall's legacy all around you is unforgettable..."
      },
      latestUserReview: {
        author: "Sarah Johnson",
        country: "UK",
        date: "Oct 8, 2025",
        rating: 5,
        review: "Saw chimps within 30 minutes! They were so relaxed and natural. Worth every penny."
      }
    },
    wildlife: {
      expert: { name: "Philip Briggs", bio: "..." },
      summary: "Famous for habituated chimpanzee communities. Also home to red colobus monkeys, bushbabies, and forest birds.",
      abundanceLegend: ["Abundant", "Common", "Occasional", "Rare", "None"],
      speciesAbundance: {
        "Chimpanzee": "Abundant",
        "Red Colobus": "Common",
        "Bushbaby": "Occasional",
        "Leopard": "Rare",
        "Elephant": "None",
        "Lion": "None",
        "Giraffe": "None",
        "Hippo": "None",
        "Buffalo": "None",
        "Zebra": "None",
        "Wildebeest": "None",
        "Black Rhino": "None",
        "Hyena": "None"
      },
      wildlifeRating: { expertRating: 4.5, expertReviews: 20, userRating: 4.5, userReviews: 23 },
      highlights: "Home to 100+ habituated chimpanzees. Red colobus monkeys are frequently seen.",
      bestTimeForWildlife: "Dry season (May–Oct) offers easier trekking and better chimp visibility."
    },
    birds: {
      expert: { name: "Philip Briggs", bio: "..." },
      summary: "Over 200 bird species, including fish eagle, palm-nut vulture, and forest specialists.",
      birdingRating: { expertRating: 4.3, expertReviews: 15, userRating: 4.3, userReviews: 20 },
      notableBirds: [
        { name: "African fish eagle", abundance: "Common" },
        { name: "Palm-nut vulture", abundance: "Occasional" },
        { name: "Blue-headed sunbird", abundance: "Endemic" },
        { name: "Green tinkerbird", abundance: "Rare" }
      ],
      facts: { totalSpecies: "200+", migratorySeason: "November to April" },
      bestTimeForBirding: "Year-round; forest species best in dry season"
    },
    bestTimeToVisit: {
      expert: { name: "Philip Briggs", bio: "..." },
      monthlyRatings: {
        January: "Fair", February: "Fair", March: "Fair", April: "Poor",
        May: "Fair", June: "Good", July: "Excellent", August: "Excellent",
        September: "Excellent", October: "Excellent", November: "Good", December: "Fair"
      },
      keyInfo: {
        bestTime: "May to October",
        highSeason: "June to September",
        lowSeason: "April and May",
        bestWeather: "May to October",
        worstWeather: "March to April"
      },
      drySeason: {
        months: "May to October",
        highlights: [
          "Easier chimp trekking on dry trails",
          "Better chimp visibility in thinner foliage",
          "Fewer mosquitoes"
        ]
      },
      wetSeason: {
        months: "November to April",
        highlights: [
          "Lush green forest",
          "Fewer tourists",
          "Migratory birds (Nov–Apr)"
        ]
      }
    },
    weatherAndClimate: {
      expert: { name: "Philip Briggs", bio: "..." },
      summary: "Hot and humid year-round due to low elevation and proximity to Lake Tanganyika.",
      climateChart: {
        location: "Gombe National Park – 770-1,600m",
        temperatureData: [
          { month: "January", min: 20, max: 30 },
          { month: "February", min: 20, max: 30 },
          { month: "March", min: 20, max: 29 },
          { month: "April", min: 19, max: 28 },
          { month: "May", min: 18, max: 27 },
          { month: "June", min: 17, max: 26 },
          { month: "July", min: 16, max: 25 },
          { month: "August", min: 17, max: 26 },
          { month: "September", min: 18, max: 28 },
          { month: "October", min: 19, max: 29 },
          { month: "November", min: 20, max: 29 },
          { month: "December", min: 20, max: 30 }
        ],
        rainfallData: [
          { month: "January", rainfall: 100 },
          { month: "February", rainfall: 120 },
          { month: "March", rainfall: 180 },
          { month: "April", rainfall: 250 },
          { month: "May", rainfall: 100 },
          { month: "June", rainfall: 20 },
          { month: "July", rainfall: 10 },
          { month: "August", rainfall: 10 },
          { month: "September", rainfall: 20 },
          { month: "October", rainfall: 50 },
          { month: "November", rainfall: 80 },
          { month: "December", rainfall: 100 }
        ]
      },
      drySeason: {
        months: "May to October",
        details: [
          "Hot and dry",
          "Dust-free trails for trekking",
          "Lower humidity"
        ]
      },
      wetSeason: {
        months: "November to April",
        details: [
          "Hot and humid",
          "Heavy rains (Mar–Apr)",
          "Slippery trails"
        ]
      }
    },
    howToGetThere: {
      expert: { name: "Philip Briggs", bio: "..." },
      summary: "Accessed via boat from Kigoma on Lake Tanganyika.",
      access: {
        fromKigoma: "2–3 hour boat ride"
      },
      airports: [
        { code: "TKQ", name: "Kigoma Airport", note: "Regional flights from Dar" }
      ],
      domesticAirlines: ["Coastal Aviation", "Auric Air"]
    },
    malariaAndSafety: {
      expert: { name: "Philip Briggs", bio: "..." },
      safety: {
        summary: "Gombe is very safe for tourists. Crime is virtually non-existent in the park.",
        tips: [
          "Always stay with your guide during chimp trekking",
          "Follow ranger instructions",
          "Be cautious in Kigoma town"
        ]
      },
      malaria: {
        risk: "Very high (low altitude, lake proximity)",
        prevention: [
          "Antimalarial prophylaxis essential",
          "DEET repellent",
          "Mosquito nets at camps"
        ]
      },
      vaccinations: "Yellow fever certificate required if arriving from endemic country"
    }
  },

  // === 10. Mahale Mountains National Park ===
  mahaleMountainsNationalPark: {
    overview: {
      breadcrumbs: ["Home", "Countries & Parks", "Tanzania", "Mahale Mountains National Park"],
      expert: { name: "Philip Briggs", bio: "..." },
      summary: "Located on the shores of Lake Tanganyika, Mahale offers pristine chimp trekking in a stunning mountainous rainforest setting. It's one of Africa's most remote and exclusive destinations.",
      stats: {
        "Best Time To Go": "May to October",
        "High Season": "June to September",
        "Size": "1,613km² / 623mi²",
        "Altitude": "780–2,462m / 2,560–8,077ft"
      },
      prosCons: {
        pros: [
          "World-class chimp trekking",
          "Remote and pristine",
          "Lake access with beaches",
          "Exclusive experience"
        ],
        cons: [
          "Very expensive",
          "Logistically complex",
          "Limited to dry season",
          "No road access"
        ]
      },
      media: { photos: true, map: true }
    },
    reviews: {
      expertRating: 4.4,
      expertReviews: 15,
      userRating: 4.4,
      userReviews: 21,
      latestExpertReview: {
        author: "Stuart Butler",
        country: "UK",
        title: "Africa's Last Wilderness",
        rating: 5,
        fullReview: "Mahale is as wild as it gets. Chimp trekking on forested slopes above Lake Tanganyika is a truly magical experience..."
      },
      latestUserReview: {
        author: "David Chen",
        country: "SG",
        date: "Oct 11, 2025",
        rating: 4,
        review: "Incredible chimp encounters! The beach lodge was perfect after long treks."
      }
    },
    wildlife: {
      expert: { name: "Philip Briggs", bio: "..." },
      summary: "Home to 1,000+ chimpanzees and other primates like red colobus and blue monkeys.",
      abundanceLegend: ["Abundant", "Common", "Occasional", "Rare", "None"],
      speciesAbundance: {
        "Chimpanzee": "Abundant",
        "Red Colobus": "Common",
        "Blue Monkey": "Common",
        "Leopard": "Rare",
        "Elephant": "Rare",
        "Lion": "None",
        "Giraffe": "None",
        "Hippo": "Common",
        "Buffalo": "Rare",
        "Zebra": "None",
        "Wildebeest": "None",
        "Black Rhino": "None",
        "Hyena": "None"
      },
      wildlifeRating: { expertRating: 4.4, expertReviews: 15, userRating: 4.4, userReviews: 21 },
      highlights: "One of Africa's largest chimp populations. Hippos in Lake Tanganyika.",
      bestTimeForWildlife: "Dry season (May–Oct) for easier trekking and chimp visibility."
    },
    birds: {
      expert: { name: "Philip Briggs", bio: "..." },
      summary: "Over 300 bird species, including fish eagle, crested guineafowl, and forest specialists.",
      birdingRating: { expertRating: 4.2, expertReviews: 12, userRating: 4.2, userReviews: 18 },
      notableBirds: [
        { name: "African fish eagle", abundance: "Common" },
        { name: "Crested guineafowl", abundance: "Common" },
        { name: "Green tinkerbird", abundance: "Rare" },
        { name: "Blue-headed sunbird", abundance: "Endemic" }
      ],
      facts: { totalSpecies: "300+", migratorySeason: "November to April" },
      bestTimeForBirding: "Year-round; forest species best in dry season"
    },
    bestTimeToVisit: {
      expert: { name: "Philip Briggs", bio: "..." },
      monthlyRatings: {
        January: "Fair", February: "Fair", March: "Fair", April: "Poor",
        May: "Fair", June: "Good", July: "Excellent", August: "Excellent",
        September: "Excellent", October: "Excellent", November: "Good", December: "Fair"
      },
      keyInfo: {
        bestTime: "May to October",
        highSeason: "June to September",
        lowSeason: "April and May",
        bestWeather: "May to October",
        worstWeather: "March to April"
      },
      drySeason: {
        months: "May to October",
        highlights: [
          "Easier chimp trekking on dry trails",
          "Better visibility in thinner foliage",
          "Beach time on Lake Tanganyika"
        ]
      },
      wetSeason: {
        months: "November to April",
        highlights: [
          "Lush green forest",
          "Fewer tourists",
          "Migratory birds (Nov–Apr)"
        ]
      }
    },
    weatherAndClimate: {
      expert: { name: "Philip Briggs", bio: "..." },
      summary: "Hot and humid year-round due to low elevation and proximity to Lake Tanganyika.",
      climateChart: {
        location: "Mahale Mountains – 780-2,462m",
        temperatureData: [
          { month: "January", min: 20, max: 30 },
          { month: "February", min: 20, max: 30 },
          { month: "March", min: 20, max: 29 },
          { month: "April", min: 19, max: 28 },
          { month: "May", min: 18, max: 27 },
          { month: "June", min: 17, max: 26 },
          { month: "July", min: 16, max: 25 },
          { month: "August", min: 17, max: 26 },
          { month: "September", min: 18, max: 28 },
          { month: "October", min: 19, max: 29 },
          { month: "November", min: 20, max: 29 },
          { month: "December", min: 20, max: 30 }
        ],
        rainfallData: [
          { month: "January", rainfall: 100 },
          { month: "February", rainfall: 120 },
          { month: "March", rainfall: 180 },
          { month: "April", rainfall: 250 },
          { month: "May", rainfall: 100 },
          { month: "June", rainfall: 20 },
          { month: "July", rainfall: 10 },
          { month: "August", rainfall: 10 },
          { month: "September", rainfall: 20 },
          { month: "October", rainfall: 50 },
          { month: "November", rainfall: 80 },
          { month: "December", rainfall: 100 }
        ]
      },
      drySeason: {
        months: "May to October",
        details: [
          "Hot and dry",
          "Dust-free trails for trekking",
          "Lower humidity"
        ]
      },
      wetSeason: {
        months: "November to April",
        details: [
          "Hot and humid",
          "Heavy rains (Mar–Apr)",
          "Slippery trails"
        ]
      }
    },
    howToGetThere: {
      expert: { name: "Philip Briggs", bio: "..." },
      summary: "Fly to Kigoma, then take a boat to Mahale.",
      access: {
        fromKigoma: "3–4 hour boat ride"
      },
      airports: [
        { code: "TKQ", name: "Kigoma Airport", note: "Regional flights from Dar" }
      ],
      domesticAirlines: ["Coastal Aviation", "Auric Air"]
    },
    malariaAndSafety: {
      expert: { name: "Philip Briggs", bio: "..." },
      safety: {
        summary: "Mahale is very safe for tourists. Crime is virtually non-existent in the park.",
        tips: [
          "Always stay with your guide during chimp trekking",
          "Follow ranger instructions",
          "Be cautious in Kigoma town"
        ]
      },
      malaria: {
        risk: "Very high (low altitude, lake proximity)",
        prevention: [
          "Antimalarial prophylaxis essential",
          "DEET repellent",
          "Mosquito nets at camps"
        ]
      },
      vaccinations: "Yellow fever certificate required if arriving from endemic country"
    }
  },

  // === 11. Mikumi National Park ===
  mikumiNationalPark: {
    overview: {
      breadcrumbs: ["Home", "Countries & Parks", "Tanzania", "Mikumi National Park"],
      expert: { name: "Philip Briggs", bio: "..." },
      summary: "Often called the 'Serengeti in miniature,' Mikumi is easily accessible from Dar es Salaam and offers classic savanna wildlife viewing with good infrastructure.",
      stats: {
        "Best Time To Go": "June to October",
        "High Season": "June to October",
        "Size": "3,230km² / 1,247mi²",
        "Altitude": "300–800m / 980–2,625ft"
      },
      prosCons: {
        pros: [
          "Easy access from Dar es Salaam",
          "Good wildlife density",
          "Affordable",
          "Well-maintained roads"
        ],
        cons: [
          "Can be busy",
          "Less exclusive",
          "Not part of main circuits"
        ]
      },
      media: { photos: true, map: true }
    },
    reviews: {
      expertRating: 4.2,
      expertReviews: 10,
      userRating: 4.2,
      userReviews: 90,
      latestExpertReview: {
        author: "Tim Bewer",
        country: "US",
        title: "Serengeti Lite",
        rating: 4,
        fullReview: "Mikumi offers excellent value for money. Great for those short on time or budget..."
      },
      latestUserReview: {
        author: "Raj Patel",
        country: "IN",
        date: "Oct 14, 2025",
        rating: 4,
        review: "Saw lions, elephants, and giraffes all in one day! Great introduction to Tanzanian wildlife."
      }
    },
    wildlife: {
      expert: { name: "Philip Briggs", bio: "..." },
      summary: "Home to lion, leopard, elephant, giraffe, zebra, and wildebeest. Four of the Big Five (no rhino).",
      abundanceLegend: ["Abundant", "Common", "Occasional", "Rare", "None"],
      speciesAbundance: {
        "Elephant": "Abundant",
        "Giraffe": "Abundant",
        "Hippo": "Common",
        "Buffalo": "Abundant",
        "Zebra": "Abundant",
        "Wildebeest": "Abundant",
        "White Rhino": "None",
        "Black Rhino": "None",
        "Lion": "Common",
        "Leopard": "Occasional",
        "Cheetah": "Rare",
        "Hyena": "Common",
        "Wild Dog": "Rare"
      },
      wildlifeRating: { expertRating: 4.2, expertReviews: 10, userRating: 4.2, userReviews: 90 },
      highlights: "The Mkata Floodplain offers excellent game viewing year-round.",
      bestTimeForWildlife: "Dry season (Jun–Oct) for best game viewing along the Mkata Floodplain."
    },
    birds: {
      expert: { name: "Philip Briggs", bio: "..." },
      summary: "Over 400 bird species, including yellow-throated longclaw, bateleur eagle, and waterfowl.",
      birdingRating: { expertRating: 4.1, expertReviews: 8, userRating: 4.1, userReviews: 85 },
      notableBirds: [
        { name: "Yellow-throated longclaw", abundance: "Common" },
        { name: "Bateleur eagle", abundance: "Common" },
        { name: "Saddle-billed stork", abundance: "Common" },
        { name: "African skimmer", abundance: "Occasional" }
      ],
      facts: { totalSpecies: "400+", migratorySeason: "November to April" },
      bestTimeForBirding: "Year-round; waterbirds best in dry season"
    },
    bestTimeToVisit: {
      expert: { name: "Philip Briggs", bio: "..." },
      monthlyRatings: {
        January: "Good", February: "Good", March: "Fair", April: "Poor",
        May: "Good", June: "Excellent", July: "Excellent", August: "Excellent",
        September: "Excellent", October: "Excellent", November: "Good", December: "Good"
      },
      keyInfo: {
        bestTime: "June to October",
        highSeason: "June to October",
        lowSeason: "April and May",
        bestWeather: "June to October",
        worstWeather: "March to May"
      },
      drySeason: {
        months: "June to October",
        highlights: [
          "Animals congregate at Mkata Floodplain",
          "Excellent visibility",
          "Dust can reduce air quality"
        ]
      },
      wetSeason: {
        months: "November to May",
        highlights: [
          "Lush green scenery",
          "Fewer tourists (Apr–May)",
          "Migratory birds (Nov–Apr)"
        ]
      }
    },
    weatherAndClimate: {
      expert: { name: "Philip Briggs", bio: "..." },
      summary: "Hot and dry in the dry season; warm and wet in the wet season. One of Tanzania's hotter parks.",
      climateChart: {
        location: "Mikumi National Park – 300-800m",
        temperatureData: [
          { month: "January", min: 22, max: 34 },
          { month: "February", min: 22, max: 33 },
          { month: "March", min: 22, max: 32 },
          { month: "April", min: 21, max: 30 },
          { month: "May", min: 19, max: 29 },
          { month: "June", min: 17, max: 28 },
          { month: "July", min: 16, max: 27 },
          { month: "August", min: 17, max: 28 },
          { month: "September", min: 19, max: 30 },
          { month: "October", min: 21, max: 33 },
          { month: "November", min: 22, max: 33 },
          { month: "December", min: 22, max: 33 }
        ],
        rainfallData: [
          { month: "January", rainfall: 120 },
          { month: "February", rainfall: 140 },
          { month: "March", rainfall: 180 },
          { month: "April", rainfall: 250 },
          { month: "May", rainfall: 80 },
          { month: "June", rainfall: 20 },
          { month: "July", rainfall: 10 },
          { month: "August", rainfall: 10 },
          { month: "September", rainfall: 15 },
          { month: "October", rainfall: 40 },
          { month: "November", rainfall: 80 },
          { month: "December", rainfall: 120 }
        ]
      },
      drySeason: {
        months: "June to October",
        details: [
          "Very hot days, cool nights",
          "Dust can reduce visibility",
          "Animals gather at water sources"
        ]
      },
      wetSeason: {
        months: "November to May",
        details: [
          "Afternoon showers common",
          "Roads can become muddy",
          "Lush vegetation"
        ]
      }
    },
    howToGetThere: {
      expert: { name: "Philip Briggs", bio: "..." },
      summary: "4-hour drive from Dar es Salaam or fly into Mikumi Airstrip.",
      access: {
        fromDar: "4-hour drive (280km)"
      },
      airports: [
        { code: "DAR", name: "Julius Nyerere International Airport", note: "International gateway" }
      ],
      domesticAirlines: ["Coastal Aviation", "Auric Air"]
    },
    malariaAndSafety: {
      expert: { name: "Philip Briggs", bio: "..." },
      safety: {
        summary: "Mikumi is very safe for tourists. Crime is virtually non-existent in the park.",
        tips: [
          "Always stay with your guide",
          "Never approach wild animals",
          "Follow park rules strictly"
        ]
      },
      malaria: {
        risk: "High (low altitude, wet season)",
        prevention: [
          "Antimalarial prophylaxis essential",
          "DEET repellent",
          "Mosquito nets at camps"
        ]
      },
      vaccinations: "Yellow fever certificate required if arriving from endemic country"
    }
  },

  // === 12. Mkomazi National Park ===
  mkomaziNationalPark: {
    overview: {
      breadcrumbs: ["Home", "Countries & Parks", "Tanzania", "Mkomazi National Park"],
      expert: { name: "Philip Briggs", bio: "..." },
      summary: "Bordering Kenya’s Tsavo West, Mkomazi is a conservation success story with a rhino sanctuary and diverse landscapes from acacia savanna to rugged mountains.",
      stats: {
        "Best Time To Go": "June to October",
        "High Season": "June to October",
        "Size": "3,234km² / 1,249mi²",
        "Altitude": "300–1,000m / 980–3,280ft"
      },
      prosCons: {
        pros: [
          "Black rhino sanctuary",
          "Conservation focus",
          "Scenic views",
          "Less crowded"
        ],
        cons: [
          "Wildlife can be hard to spot",
          "Remote",
          "Limited infrastructure"
        ]
      },
      media: { photos: true, map: true }
    },
    reviews: {
      expertRating: 3.9,
      expertReviews: 8,
      userRating: 3.9,
      userReviews: 12,
      latestExpertReview: {
        author: "Stuart Butler",
        country: "UK",
        title: "Conservation Success",
        rating: 4,
        fullReview: "Mkomazi is a testament to successful conservation. The rhino sanctuary is impressive..."
      },
      latestUserReview: {
        author: "Michael Weber",
        country: "DE",
        date: "Oct 16, 2025",
        rating: 4,
        review: "Saw rhinos in the sanctuary! The landscape is dramatic and there were few other tourists."
      }
    },
    wildlife: {
      expert: { name: "Philip Briggs", bio: "..." },
      summary: "Home to black rhino (in sanctuary), elephant, giraffe, and oryx. Big Five present but hard to see.",
      abundanceLegend: ["Abundant", "Common", "Occasional", "Rare", "None"],
      speciesAbundance: {
        "Elephant": "Common",
        "Giraffe": "Common",
        "Hippo": "Rare",
        "Buffalo": "Common",
        "Zebra": "Common",
        "Wildebeest": "Common",
        "White Rhino": "None",
        "Black Rhino": "Rare",
        "Lion": "Occasional",
        "Leopard": "Rare",
        "Cheetah": "Rare",
        "Hyena": "Common",
        "Wild Dog": "Rare"
      },
      wildlifeRating: { expertRating: 3.9, expertReviews: 8, userRating: 3.9, userReviews: 12 },
      highlights: "The Tony Fitzjohn/George Adamson African Wildlife Preservation Trust runs a successful rhino sanctuary.",
      bestTimeForWildlife: "Dry season (Jun–Oct) for better wildlife visibility."
    },
    birds: {
      expert: { name: "Philip Briggs", bio: "..." },
      summary: "Over 450 bird species, including vulturine guineafowl, martial eagle, and hornbills.",
      birdingRating: { expertRating: 4.0, expertReviews: 6, userRating: 4.0, userReviews: 10 },
      notableBirds: [
        { name: "Vulturine guineafowl", abundance: "Common" },
        { name: "Martial eagle", abundance: "Rare" },
        { name: "Silvery-cheeked hornbill", abundance: "Common" },
        { name: "Yellow-billed oxpecker", abundance: "Common" }
      ],
      facts: { totalSpecies: "450+", migratorySeason: "November to April" },
      bestTimeForBirding: "Year-round; raptors best in dry season"
    },
    bestTimeToVisit: {
      expert: { name: "Philip Briggs", bio: "..." },
      monthlyRatings: {
        January: "Fair", February: "Fair", March: "Fair", April: "Poor",
        May: "Fair", June: "Good", July: "Excellent", August: "Excellent",
        September: "Excellent", October: "Excellent", November: "Good", December: "Fair"
      },
      keyInfo: {
        bestTime: "June to October",
        highSeason: "June to October",
        lowSeason: "April and May",
        bestWeather: "June to October",
        worstWeather: "March to May"
      },
      drySeason: {
        months: "June to October",
        highlights: [
          "Animals gather at water sources",
          "Better visibility in sparse vegetation",
          "Rhino sanctuary visits"
        ]
      },
      wetSeason: {
        months: "November to May",
        highlights: [
          "Lush green scenery",
          "Fewer tourists (Apr–May)",
          "Migratory birds (Nov–Apr)"
        ]
      }
    },
    weatherAndClimate: {
      expert: { name: "Philip Briggs", bio: "..." },
      summary: "Hot and dry in the dry season; warm and wet in the wet season. Semi-arid climate.",
      climateChart: {
        location: "Mkomazi National Park – 300-1,000m",
        temperatureData: [
          { month: "January", min: 22, max: 34 },
          { month: "February", min: 22, max: 33 },
          { month: "March", min: 22, max: 32 },
          { month: "April", min: 21, max: 30 },
          { month: "May", min: 19, max: 29 },
          { month: "June", min: 17, max: 28 },
          { month: "July", min: 16, max: 27 },
          { month: "August", min: 17, max: 28 },
          { month: "September", min: 19, max: 30 },
          { month: "October", min: 21, max: 33 },
          { month: "November", min: 22, max: 33 },
          { month: "December", min: 22, max: 33 }
        ],
        rainfallData: [
          { month: "January", rainfall: 100 },
          { month: "February", rainfall: 120 },
          { month: "March", rainfall: 150 },
          { month: "April", rainfall: 200 },
          { month: "May", rainfall: 60 },
          { month: "June", rainfall: 15 },
          { month: "July", rainfall: 5 },
          { month: "August", rainfall: 5 },
          { month: "September", rainfall: 10 },
          { month: "October", rainfall: 30 },
          { month: "November", rainfall: 60 },
          { month: "December", rainfall: 100 }
        ]
      },
      drySeason: {
        months: "June to October",
        details: [
          "Very hot days, cool nights",
          "Dust can reduce visibility",
          "Sparse vegetation"
        ]
      },
      wetSeason: {
        months: "November to May",
        details: [
          "Afternoon showers common",
          "Roads can become muddy",
          "Lush vegetation"
        ]
      }
    },
    howToGetThere: {
      expert: { name: "Philip Briggs", bio: "..." },
      summary: "Fly to Kilimanjaro or drive from Arusha (5–6 hours).",
      access: {
        fromArusha: "5–6 hour drive (300km)",
        fromMoshi: "3-hour drive (180km)"
      },
      airports: [
        { code: "JRO", name: "Kilimanjaro International Airport", note: "50km from Arusha" }
      ],
      domesticAirlines: ["Coastal Aviation", "Auric Air"]
    },
    malariaAndSafety: {
      expert: { name: "Philip Briggs", bio: "..." },
      safety: {
        summary: "Mkomazi is very safe for tourists. Crime is virtually non-existent in the park.",
        tips: [
          "Always stay with your guide",
          "Never approach wild animals",
          "Follow park rules strictly"
        ]
      },
      malaria: {
        risk: "Moderate (low altitude, wet season)",
        prevention: [
          "Antimalarial medication recommended",
          "DEET repellent",
          "Mosquito nets at camps"
        ]
      },
      vaccinations: "Yellow fever certificate required if arriving from endemic country"
    }
  },

   // === 13. Grumeti Game Reserve ===
  grumetiGameReserve: {
    overview: {
      breadcrumbs: ["Home", "Countries & Parks", "Tanzania", "Grumeti Game Reserve"],
      expert: { name: "Philip Briggs", byline: "By Philip Briggs", bio: "Philip is a renowned Africa expert and author of many guidebooks to African destinations, including the Bradt guide to Tanzania." },
      summary: "Part of the Greater Serengeti ecosystem, Grumeti is a private reserve offering exclusive game viewing during the wildebeest migration. Located in the western corridor, it's known for dramatic river crossings.",
      stats: {
        "Best Time To Go": "May to July",
        "High Season": "May to July",
        "Size": "1,476km² / 570mi²",
        "Altitude": "1,200–1,500m / 3,940–4,920ft"
      },
      prosCons: {
        pros: [
          "Exclusive access",
          "Migration river crossings",
          "Luxury lodges",
          "Fewer tourists"
        ],
        cons: [
          "Very expensive",
          "Private reserve (extra fees)",
          "Limited to migration season"
        ]
      },
      media: { photos: true, map: true }
    },
    reviews: {
      expertRating: 4.7,
      expertReviews: 10,
      userRating: 4.8,
      userReviews: 0,
      latestExpertReview: {
        author: "Tim Bewer",
        country: "US",
        title: "Exclusive Migration Experience",
        rating: 5,
        fullReview: "Grumeti offers an exclusive Serengeti experience with dramatic river crossings during the Great Migration..."
      },
      latestUserReview: {
        author: "James Wilson",
        country: "UK",
        date: "Oct 19, 2025",
        rating: 5,
        review: "Saw wildebeest crossing the Grumeti River! The luxury lodge was worth every penny."
      }
    },
    wildlife: {
      expert: { name: "Philip Briggs", bio: "..." },
      summary: "Part of the Serengeti migration route. Big Five present (rhino very rare). Excellent predator sightings.",
      abundanceLegend: ["Abundant", "Common", "Occasional", "Rare", "None"],
      speciesAbundance: {
        "Elephant": "Common",
        "Giraffe": "Common",
        "Hippo": "Abundant",
        "Buffalo": "Abundant",
        "Zebra": "Abundant",
        "Wildebeest": "Abundant",
        "White Rhino": "None",
        "Black Rhino": "Rare",
        "Lion": "Common",
        "Leopard": "Occasional",
        "Cheetah": "Occasional",
        "Hyena": "Common",
        "Wild Dog": "Rare"
      },
      wildlifeRating: { expertRating: 4.7, expertReviews: 10, userRating: 4.8, userReviews: 0 },
      highlights: "Dramatic Grumeti River crossings during May–July migration...",
      bestTimeForWildlife: "May–July for migration river crossings"
    },
    birds: {
      expert: { name: "Philip Briggs", bio: "..." },
      summary: "Over 450 bird species, including fish eagle, saddle-billed stork, and migratory waterfowl.",
      birdingRating: { expertRating: 4.3, expertReviews: 8, userRating: 4.3, userReviews: 0 },
      notableBirds: [
        { name: "African fish eagle", abundance: "Common" },
        { name: "Saddle-billed stork", abundance: "Common" },
        { name: "Goliath heron", abundance: "Common" },
        { name: "African skimmer", abundance: "Occasional" }
      ],
      facts: { totalSpecies: "450+", migratorySeason: "November to April" },
      bestTimeForBirding: "Year-round; waterbirds best in dry season"
    },
    bestTimeToVisit: {
      expert: { name: "Philip Briggs", bio: "..." },
      monthlyRatings: {
        January: "Fair", February: "Fair", March: "Fair", April: "Poor",
        May: "Excellent", June: "Excellent", July: "Excellent", August: "Good",
        September: "Fair", October: "Fair", November: "Fair", December: "Fair"
      },
      keyInfo: {
        bestTime: "May to July",
        highSeason: "May to July",
        lowSeason: "August to April",
        bestWeather: "May to July",
        worstWeather: "March to April"
      },
      drySeason: {
        months: "May to July",
        highlights: [
          "Dramatic wildebeest river crossings",
          "Exclusive game viewing",
          "Luxury lodge experience"
        ]
      },
      wetSeason: {
        months: "August to April",
        highlights: [
          "Fewer tourists",
          "Lush green scenery",
          "Migratory birds (Nov–Apr)"
        ]
      }
    },
    weatherAndClimate: {
      expert: { name: "Philip Briggs", bio: "..." },
      summary: "Classic Serengeti climate with distinct wet and dry seasons.",
      climateChart: {
        location: "Grumeti Game Reserve – 1,200-1,500m",
        temperatureData: [
          { month: "January", min: 16, max: 29 },
          { month: "February", min: 16, max: 29 },
          { month: "March", min: 16, max: 28 },
          { month: "April", min: 15, max: 26 },
          { month: "May", min: 14, max: 25 },
          { month: "June", min: 13, max: 24 },
          { month: "July", min: 12, max: 23 },
          { month: "August", min: 12, max: 24 },
          { month: "September", min: 13, max: 26 },
          { month: "October", min: 15, max: 28 },
          { month: "November", min: 16, max: 28 },
          { month: "December", min: 16, max: 28 }
        ],
        rainfallData: [
          { month: "January", rainfall: 80 },
          { month: "February", rainfall: 100 },
          { month: "March", rainfall: 150 },
          { month: "April", rainfall: 250 },
          { month: "May", rainfall: 120 },
          { month: "June", rainfall: 20 },
          { month: "July", rainfall: 10 },
          { month: "August", rainfall: 10 },
          { month: "September", rainfall: 15 },
          { month: "October", rainfall: 30 },
          { month: "November", rainfall: 70 },
          { month: "December", rainfall: 90 }
        ]
      },
      drySeason: {
        months: "May to July",
        details: [
          "Sunny days, cool nights",
          "Dust can reduce visibility",
          "Animals congregate at water sources"
        ]
      },
      wetSeason: {
        months: "August to April",
        details: [
          "Short rains (Nov–Dec), long rains (Mar–May)",
          "Roads can become muddy",
          "Lush vegetation"
        ]
      }
    },
    howToGetThere: {
      expert: { name: "Philip Briggs", bio: "..." },
      summary: "Accessed via scheduled or chartered flights from Arusha or Seronera.",
      access: {
        fromArusha: "1.5-hour flight",
        fromSerengeti: "30-minute flight"
      },
      airports: [
        { code: "GRU", name: "Grumeti Airstrip", note: "Private reserve airstrip" }
      ],
      domesticAirlines: ["Coastal Aviation", "Auric Air", "Safari Air Link"]
    },
    malariaAndSafety: {
      expert: { name: "Philip Briggs", bio: "..." },
      safety: {
        summary: "Grumeti is very safe for tourists. Crime is virtually non-existent in the reserve.",
        tips: [
          "Always stay with your guide",
          "Follow reserve rules strictly",
          "Private reserve access controlled"
        ]
      },
      malaria: {
        risk: "High (low altitude, wet season)",
        prevention: [
          "Antimalarial prophylaxis essential",
          "DEET repellent",
          "Mosquito nets at lodges"
        ]
      },
      vaccinations: "Yellow fever certificate required if arriving from endemic country"
    }
  },

  // === 14. Rubondo Island National Park ===
  rubondoIslandNationalPark: {
    overview: {
      breadcrumbs: ["Home", "Countries & Parks", "Tanzania", "Rubondo Island National Park"],
      expert: { name: "Philip Briggs", bio: "..." },
      summary: "Located in Lake Victoria, Rubondo is a unique island park with chimpanzees, sitatunga antelope, and rich birdlife. It offers a rare combination of lake and forest ecosystems.",
      stats: {
        "Best Time To Go": "June to September",
        "High Season": "June to September",
        "Size": "240km² / 93mi²",
        "Altitude": "1,100–1,300m / 3,610–4,265ft"
      },
      prosCons: {
        pros: [
          "Unique island setting",
          "Chimp reintroduction project",
          "Boat safaris",
          "Few tourists"
        ],
        cons: [
          "Remote",
          "Limited wildlife density",
          "Weather-dependent"
        ]
      },
      media: { photos: true, map: true }
    },
    reviews: {
      expertRating: 4.3,
      expertReviews: 5,
      userRating: 4.3,
      userReviews: 4,
      latestExpertReview: {
        author: "Stuart Butler",
        country: "UK",
        title: "Island Wilderness",
        rating: 4,
        fullReview: "Rubondo offers a unique island safari experience with chimps and lake activities..."
      },
      latestUserReview: {
        author: "Emma Thompson",
        country: "UK",
        date: "Oct 17, 2025",
        rating: 4,
        review: "Saw chimps and sitatunga! The boat safari on Lake Victoria was magical."
      }
    },
    wildlife: {
      expert: { name: "Philip Briggs", bio: "..." },
      summary: "Home to reintroduced chimpanzees, sitatunga, elephant, and over 200 bird species.",
      abundanceLegend: ["Abundant", "Common", "Occasional", "Rare", "None"],
      speciesAbundance: {
        "Chimpanzee": "Occasional",
        "Sitatunga": "Rare",
        "Elephant": "Rare",
        "Giraffe": "None",
        "Hippo": "Common",
        "Buffalo": "Rare",
        "Zebra": "None",
        "Wildebeest": "None",
        "Black Rhino": "None",
        "Lion": "None",
        "Leopard": "Rare",
        "Hyena": "Rare",
        "Wild Dog": "None"
      },
      wildlifeRating: { expertRating: 4.3, expertReviews: 5, userRating: 4.3, userReviews: 4 },
      highlights: "One of Africa's few island national parks with chimp reintroduction...",
      bestTimeForWildlife: "Dry season (Jun–Sep) for better chimp trekking"
    },
    birds: {
      expert: { name: "Philip Briggs", bio: "..." },
      summary: "Over 200 bird species, including fish eagle, African skimmer, and waterfowl.",
      birdingRating: { expertRating: 4.2, expertReviews: 4, userRating: 4.2, userReviews: 3 },
      notableBirds: [
        { name: "African fish eagle", abundance: "Common" },
        { name: "African skimmer", abundance: "Common" },
        { name: "Goliath heron", abundance: "Common" },
        { name: "Pied kingfisher", abundance: "Common" }
      ],
      facts: { totalSpecies: "200+", migratorySeason: "November to April" },
      bestTimeForBirding: "Year-round; waterbirds best in dry season"
    },
    bestTimeToVisit: {
      expert: { name: "Philip Briggs", bio: "..." },
      monthlyRatings: {
        January: "Fair", February: "Fair", March: "Poor", April: "Poor",
        May: "Fair", June: "Good", July: "Excellent", August: "Excellent",
        September: "Good", October: "Fair", November: "Fair", December: "Fair"
      },
      keyInfo: {
        bestTime: "June to September",
        highSeason: "June to September",
        lowSeason: "April and May",
        bestWeather: "June to September",
        worstWeather: "March to May"
      },
      drySeason: {
        months: "June to September",
        highlights: [
          "Better chimp trekking conditions",
          "Boat safaris on Lake Victoria",
          "Fewer mosquitoes"
        ]
      },
      wetSeason: {
        months: "October to May",
        highlights: [
          "Lush green island",
          "Migratory birds (Nov–Apr)",
          "Fewer tourists"
        ]
      }
    },
    weatherAndClimate: {
      expert: { name: "Philip Briggs", bio: "..." },
      summary: "Hot and humid year-round due to Lake Victoria proximity.",
      climateChart: {
        location: "Rubondo Island – 1,100-1,300m",
        temperatureData: [
          { month: "January", min: 18, max: 28 },
          { month: "February", min: 18, max: 28 },
          { month: "March", min: 18, max: 27 },
          { month: "April", min: 17, max: 26 },
          { month: "May", min: 16, max: 25 },
          { month: "June", min: 15, max: 24 },
          { month: "July", min: 14, max: 23 },
          { month: "August", min: 15, max: 24 },
          { month: "September", min: 16, max: 26 },
          { month: "October", min: 17, max: 27 },
          { month: "November", min: 18, max: 27 },
          { month: "December", min: 18, max: 27 }
        ],
        rainfallData: [
          { month: "January", rainfall: 100 },
          { month: "February", rainfall: 120 },
          { month: "March", rainfall: 180 },
          { month: "April", rainfall: 250 },
          { month: "May", rainfall: 100 },
          { month: "June", rainfall: 30 },
          { month: "July", rainfall: 20 },
          { month: "August", rainfall: 20 },
          { month: "September", rainfall: 40 },
          { month: "October", rainfall: 80 },
          { month: "November", rainfall: 120 },
          { month: "December", rainfall: 150 }
        ]
      },
      drySeason: {
        months: "June to September",
        details: [
          "Lower humidity",
          "Better boat conditions",
          "Easier forest trekking"
        ]
      },
      wetSeason: {
        months: "October to May",
        details: [
          "High humidity",
          "Heavy rains (Mar–May)",
          "Boat safaris weather-dependent"
        ]
      }
    },
    howToGetThere: {
      expert: { name: "Philip Briggs", bio: "..." },
      summary: "Fly to Mwanza, then take a boat to Rubondo.",
      access: {
        fromMwanza: "1-hour boat ride"
      },
      airports: [
        { code: "MWZ", name: "Mwanza Airport", note: "Regional flights from Dar" }
      ],
      domesticAirlines: ["Coastal Aviation", "Auric Air"]
    },
    malariaAndSafety: {
      expert: { name: "Philip Briggs", bio: "..." },
      safety: {
        summary: "Rubondo is very safe for tourists. Crime is virtually non-existent on the island.",
        tips: [
          "Always stay with your guide during chimp trekking",
          "Follow boat safety rules",
          "Be cautious in Mwanza city"
        ]
      },
      malaria: {
        risk: "Very high (lake proximity)",
        prevention: [
          "Antimalarial prophylaxis essential",
          "DEET repellent",
          "Mosquito nets at lodge"
        ]
      },
      vaccinations: "Yellow fever certificate required if arriving from endemic country"
    }
  },

  // === 15. Saadani National Park ===
  saadaniNationalPark: {
    overview: {
      breadcrumbs: ["Home", "Countries & Parks", "Tanzania", "Saadani National Park"],
      expert: { name: "Philip Briggs", bio: "..." },
      summary: "Tanzania’s only coastal national park, Saadani combines beach and bush with game drives and boat safaris on the Wami River. It's perfect for combining safari and beach holidays.",
      stats: {
        "Best Time To Go": "June to October",
        "High Season": "June to October",
        "Size": "1,100km² / 425mi²",
        "Altitude": "0–200m / 0–656ft"
      },
      prosCons: {
        pros: [
          "Beach and bush combo",
          "Boat safaris on Wami River",
          "Easy access from Zanzibar",
          "Unique coastal ecosystem"
        ],
        cons: [
          "Limited wildlife density",
          "Not for serious safari-goers",
          "Can be hot and humid"
        ]
      },
      media: { photos: true, map: true }
    },
    reviews: {
      expertRating: 3.4,
      expertReviews: 8,
      userRating: 3.4,
      userReviews: 18,
      latestExpertReview: {
        author: "Tim Bewer",
        country: "US",
        title: "Beach & Bush Combo",
        rating: 4,
        fullReview: "Saadani is perfect for those wanting to combine safari and beach time..."
      },
      latestUserReview: {
        author: "Maria Schmidt",
        country: "DE",
        date: "Oct 21, 2025",
        rating: 3,
        review: "Nice beach but limited wildlife. Good for relaxation after a Serengeti safari."
      }
    },
    wildlife: {
      expert: { name: "Philip Briggs", bio: "..." },
      summary: "Home to giraffe, buffalo, lion, and hippo. Wildlife is thinly populated compared to other parks.",
      abundanceLegend: ["Abundant", "Common", "Occasional", "Rare", "None"],
      speciesAbundance: {
        "Elephant": "Rare",
        "Giraffe": "Common",
        "Hippo": "Common",
        "Buffalo": "Common",
        "Zebra": "Rare",
        "Wildebeest": "Rare",
        "White Rhino": "None",
        "Black Rhino": "None",
        "Lion": "Occasional",
        "Leopard": "Rare",
        "Cheetah": "None",
        "Hyena": "Occasional",
        "Wild Dog": "None"
      },
      wildlifeRating: { expertRating: 3.4, expertReviews: 8, userRating: 3.4, userReviews: 18 },
      highlights: "Tanzania's only coastal national park with beach access...",
      bestTimeForWildlife: "Dry season (Jun–Oct) for best game viewing"
    },
    birds: {
      expert: { name: "Philip Briggs", bio: "..." },
      summary: "Over 400 bird species, including fish eagle, palm-nut vulture, and coastal waterfowl.",
      birdingRating: { expertRating: 3.8, expertReviews: 6, userRating: 3.8, userReviews: 15 },
      notableBirds: [
        { name: "African fish eagle", abundance: "Common" },
        { name: "Palm-nut vulture", abundance: "Common" },
        { name: "Goliath heron", abundance: "Common" },
        { name: "Mangrove kingfisher", abundance: "Rare" }
      ],
      facts: { totalSpecies: "400+", migratorySeason: "November to April" },
      bestTimeForBirding: "Year-round; coastal species best in dry season"
    },
    bestTimeToVisit: {
      expert: { name: "Philip Briggs", bio: "..." },
      monthlyRatings: {
        January: "Fair", February: "Fair", March: "Fair", April: "Poor",
        May: "Fair", June: "Good", July: "Excellent", August: "Excellent",
        September: "Excellent", October: "Good", November: "Fair", December: "Fair"
      },
      keyInfo: {
        bestTime: "June to October",
        highSeason: "June to October",
        lowSeason: "April and May",
        bestWeather: "June to October",
        worstWeather: "March to May"
      },
      drySeason: {
        months: "June to October",
        highlights: [
          "Best game viewing",
          "Beach weather ideal",
          "Boat safaris on Wami River"
        ]
      },
      wetSeason: {
        months: "November to May",
        highlights: [
          "Lush green scenery",
          "Fewer tourists (Apr–May)",
          "Migratory birds (Nov–Apr)"
        ]
      }
    },
    weatherAndClimate: {
      expert: { name: "Philip Briggs", bio: "..." },
      summary: "Hot and humid year-round due to coastal location.",
      climateChart: {
        location: "Saadani National Park – 0-200m",
        temperatureData: [
          { month: "January", min: 24, max: 32 },
          { month: "February", min: 24, max: 32 },
          { month: "March", min: 24, max: 31 },
          { month: "April", min: 23, max: 30 },
          { month: "May", min: 22, max: 29 },
          { month: "June", min: 21, max: 28 },
          { month: "July", min: 20, max: 27 },
          { month: "August", min: 20, max: 28 },
          { month: "September", min: 21, max: 29 },
          { month: "October", min: 23, max: 31 },
          { month: "November", min: 24, max: 31 },
          { month: "December", min: 24, max: 31 }
        ],
        rainfallData: [
          { month: "January", rainfall: 100 },
          { month: "February", rainfall: 120 },
          { month: "March", rainfall: 180 },
          { month: "April", rainfall: 250 },
          { month: "May", rainfall: 100 },
          { month: "June", rainfall: 30 },
          { month: "July", rainfall: 20 },
          { month: "August", rainfall: 20 },
          { month: "September", rainfall: 40 },
          { month: "October", rainfall: 80 },
          { month: "November", rainfall: 120 },
          { month: "December", rainfall: 150 }
        ]
      },
      drySeason: {
        months: "June to October",
        details: [
          "Lower humidity",
          "Ideal beach weather",
          "Animals gather at Wami River"
        ]
      },
      wetSeason: {
        months: "November to May",
        details: [
          "High humidity",
          "Heavy rains (Mar–May)",
          "Lush coastal vegetation"
        ]
      }
    },
    howToGetThere: {
      expert: { name: "Philip Briggs", bio: "..." },
      summary: "Drive from Dar es Salaam (3 hours) or boat from Zanzibar.",
      access: {
        fromDar: "3-hour drive (200km)",
        fromZanzibar: "1-hour boat ride"
      },
      airports: [
        { code: "DAR", name: "Julius Nyerere International Airport", note: "International gateway" },
        { code: "ZNZ", name: "Zanzibar Airport", note: "For boat transfers" }
      ],
      domesticAirlines: ["Coastal Aviation", "Auric Air"]
    },
    malariaAndSafety: {
      expert: { name: "Philip Briggs", bio: "..." },
      safety: {
        summary: "Saadani is very safe for tourists. Crime is rare in the park.",
        tips: [
          "Always stay with your guide",
          "Follow boat safety rules",
          "Be cautious in Dar es Salaam"
        ]
      },
      malaria: {
        risk: "Very high (coastal, low altitude)",
        prevention: [
          "Antimalarial prophylaxis essential",
          "DEET repellent",
          "Mosquito nets at lodges"
        ]
      },
      vaccinations: "Yellow fever certificate required if arriving from endemic country"
    }
  }
}



export { mockParksData };