const sampleListings = [
  {
    title: "Cozy Beachfront Cottage",
    description:
      "Escape to this charming beachfront cottage for a relaxing getaway. Enjoy stunning ocean views and easy access to the beach.",
    image: {
      url: "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
      filename: "listingimage",
    },
    price: 150,
    location: "Malibu",
    country: "United States",
    reviews: [],
    geometry: { type: "Point", coordinates: [-118.689423, 34.035591] },
    category: "trending",
    __v: 1,
  },
  {
    title: "Modern Loft in Downtown",
    description:
      "Stay in the heart of the city in this stylish loft apartment. Perfect for urban explorers!",
    image: {
      url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
      filename: "listingimage",
    },
    price: 1200,
    location: "New York City",
    country: "United States",
    reviews: [],
    geometry: { type: "Point", coordinates: [-74.0059945, 40.7127492] },
    category: "iconic_cities",
    __v: 0,
  },
  {
    title: "Mountain Retreat",
    description:
      "Unplug and unwind in this peaceful mountain cabin. Surrounded by nature, it's a perfect place to recharge.",
    image: {
      url: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aG90ZWxzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
      filename: "listingimage",
    },
    price: 1000,
    location: "Aspen",
    country: "United States",
    reviews: [],
    geometry: { type: "Point", coordinates: [-106.823561, 39.191113] },
    category: "mountains",
    __v: 0,
  },
  {
    title: "Historic Villa in Tuscany",
    description:
      "Experience the charm of Tuscany in this beautifully restored villa. Explore the rolling hills and vineyards.",
    image: {
      url: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG90ZWxzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
      filename: "listingimage",
    },
    price: 2500,
    location: "Florence",
    country: "Italy",
    reviews: [],
    geometry: { type: "Point", coordinates: [11.255576, 43.769871] },
    category: "iconic_cities",
    __v: 0,
  },
  {
    title: "Secluded Treehouse Getaway",
    description:
      "Live among the treetops in this unique treehouse retreat. A true nature lover's paradise.",
    image: {
      url: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
      filename: "listingimage",
    },
    price: 800,
    location: "Portland",
    country: "United States",
    reviews: [],
    geometry: { type: "Point", coordinates: [-122.674195, 45.520247] },
    category: "rooms",
    __v: 0,
  },
  {
    title: "Beachfront Paradise",
    description:
      "Step out of your door onto the sandy beach. This beachfront condo offers the ultimate relaxation.",
    image: {
      url: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
      filename: "listingimage",
    },
    price: 2000,
    location: "Cancun",
    country: "Mexico",
    reviews: [],
    geometry: { type: "Point", coordinates: [-86.851047, 21.161785] },
    category: "trending",
    __v: 0,
  },
  {
    title: "Rustic Cabin by the Lake",
    description:
      "Spend your days fishing and kayaking on the serene lake. This cozy cabin is perfect for outdoor enthusiasts.",
    image: {
      url: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1vdW50YWlufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
      filename: "listingimage",
    },
    price: 900,
    location: "Lake Tahoe",
    country: "United States",
    reviews: [],
    geometry: { type: "Point", coordinates: [-119.97169299999999, 38.926272999999995] },
    category: "mountains",
    __v: 0,
  },
  {
    title: "Luxury Penthouse with City Views",
    description:
      "Indulge in luxury living with panoramic city views from this stunning penthouse apartment.",
    image: {
      url: "https://images.unsplash.com/photo-1622396481328-9b1b78cdd9fd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2t5JTIwdmFjYXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
      filename: "listingimage",
    },
    price: 3500,
    location: "Los Angeles",
    country: "United States",
    reviews: [],
    geometry: { type: "Point", coordinates: [-118.242766, 34.053691] },
    category: "iconic_cities",
    __v: 0,
  },
  {
    title: "Ski-In/Ski-Out Chalet",
    description:
      "Hit the slopes right from your doorstep in this ski-in/ski-out chalet in the Swiss Alps.",
    image: {
      url: "https://images.unsplash.com/photo-1502784444187-359ac186c5bb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHNreSUyMHZhY2F0aW9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
      filename: "listingimage",
    },
    price: 3000,
    location: "Verbier",
    country: "Switzerland",
    reviews: [],
    geometry: { type: "Point", coordinates: [7.228548, 46.096795] },
    category: "mountains",
    __v: 0,
  },
  {
    title: "Safari Lodge in the Serengeti",
    description:
      "Experience the thrill of the wild in a comfortable safari lodge. Witness the Great Migration up close.",
    image: {
      url: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fG1vdW50YWlufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
      filename: "listingimage",
    },
    price: 4500,
    location: "Serengeti National Park",
    country: "Tanzania",
    reviews: [],
    geometry: { type: "Point", coordinates: [34.771839, -2.333791] },
    category: "rooms",
    __v: 0,
  }, {
    title: "Cozy Beachfront Cottage",
    description:
      "Escape to this charming beachfront cottage for a relaxing getaway. Enjoy stunning ocean views and easy access to the beach.",
    image: {
      url: "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
      filename: "listingimage",
    },
    price: 150,
    location: "Malibu",
    country: "United States",
    reviews: [],
    geometry: { type: "Point", coordinates: [-118.689423, 34.035591] },
    category: "trending",
    __v: 1,
  },
  {
    title: "Modern Loft in Downtown",
    description:
      "Stay in the heart of the city in this stylish loft apartment. Perfect for urban explorers!",
    image: {
      url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
      filename: "listingimage",
    },
    price: 1200,
    location: "New York City",
    country: "United States",
    reviews: [],
    geometry: { type: "Point", coordinates: [-74.0059945, 40.7127492] },
    category: "iconic_cities",
    __v: 0,
  },
  {
    title: "Mountain Retreat",
    description:
      "Unplug and unwind in this peaceful mountain cabin. Surrounded by nature, it's a perfect place to recharge.",
    image: {
      url: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aG90ZWxzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
      filename: "listingimage",
    },
    price: 1000,
    location: "Aspen",
    country: "United States",
    reviews: [],
    geometry: { type: "Point", coordinates: [-106.823561, 39.191113] },
    category: "mountains",
    __v: 0,
  },
  {
    title: "Historic Villa in Tuscany",
    description:
      "Experience the charm of Tuscany in this beautifully restored villa. Explore the rolling hills and vineyards.",
    image: {
      url: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG90ZWxzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
      filename: "listingimage",
    },
    price: 2500,
    location: "Florence",
    country: "Italy",
    reviews: [],
    geometry: { type: "Point", coordinates: [11.255576, 43.769871] },
    category: "iconic_cities",
    __v: 0,
  },
  {
    title: "Secluded Treehouse Getaway",
    description:
      "Live among the treetops in this unique treehouse retreat. A true nature lover's paradise.",
    image: {
      url: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
      filename: "listingimage",
    },
    price: 800,
    location: "Portland",
    country: "United States",
    reviews: [],
    geometry: { type: "Point", coordinates: [-122.674195, 45.520247] },
    category: "rooms",
    __v: 0,
  },
  {
    title: "Beachfront Paradise",
    description:
      "Step out of your door onto the sandy beach. This beachfront condo offers the ultimate relaxation.",
    image: {
      url: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
      filename: "listingimage",
    },
    price: 2000,
    location: "Cancun",
    country: "Mexico",
    reviews: [],
    geometry: { type: "Point", coordinates: [-86.851047, 21.161785] },
    category: "trending",
    __v: 0,
  },
  {
    title: "Rustic Cabin by the Lake",
    description:
      "Spend your days fishing and kayaking on the serene lake. This cozy cabin is perfect for outdoor enthusiasts.",
    image: {
      url: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1vdW50YWlufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
      filename: "listingimage",
    },
    price: 900,
    location: "Lake Tahoe",
    country: "United States",
    reviews: [],
    geometry: { type: "Point", coordinates: [-119.971693, 38.926273] },
    category: "mountains",
    __v: 0,
  },
  {
    title: "Luxury Penthouse with City Views",
    description:
      "Indulge in luxury living with panoramic city views from this stunning penthouse apartment.",
    image: {
      url: "https://images.unsplash.com/photo-1622396481328-9b1b78cdd9fd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2t5JTIwdmFjYXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
      filename: "listingimage",
    },
    price: 3500,
    location: "Los Angeles",
    country: "United States",
    reviews: [],
    geometry: { type: "Point", coordinates: [-118.242766, 34.053691] },
    category: "iconic_cities",
    __v: 0,
  },
  {
    title: "Ski-In/Ski-Out Chalet",
    description:
      "Hit the slopes right from your doorstep in this ski-in/ski-out chalet in the Swiss Alps.",
    image: {
      url: "https://images.unsplash.com/photo-1502784444187-359ac186c5bb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHNreSUyMHZhY2F0aW9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
      filename: "listingimage",
    },
    price: 3000,
    location: "Verbier",
    country: "Switzerland",
    reviews: [],
    geometry: { type: "Point", coordinates: [7.228548, 46.096795] },
    category: "mountains",
    __v: 0,
  },
  {
    title: "Safari Lodge in the Serengeti",
    description:
      "Experience the thrill of the wild in a comfortable safari lodge. Witness the Great Migration up close.",
    image: {
      url: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fG1vdW50YWlufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
      filename: "listingimage",
    },
    price: 4500,
    location: "Serengeti National Park",
    country: "Tanzania",
    reviews: [],
    geometry: { type: "Point", coordinates: [34.771839, -2.333791] },
    category: "rooms",
    __v: 0,
  },
  {
    title: "Mediterranean Escape",
    description:
      "Relax in this luxurious Mediterranean villa with private beach access and breathtaking views of the sea.",
    image: {
      url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bWVkaXRlcnJhbmVhbiUyMHZpbGxhfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
      filename: "listingimage",
    },
    price: 4000,
    location: "Santorini",
    country: "Greece",
    reviews: [],
    geometry: { type: "Point", coordinates: [25.48583, 36.393156] },
    category: "trending",
    __v: 0,
  },
  {
    title: "Countryside Manor",
    description:
      "Immerse yourself in the tranquility of the countryside in this charming manor surrounded by lush gardens.",
    image: {
      url: "https://images.unsplash.com/photo-1551135049-8bba6db93102?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y291bnRyeXNpZGUlMjBtYW5vcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
      filename: "listingimage",
    },
    price: 1200,
    location: "Cotswolds",
    country: "United Kingdom",
    reviews: [],
    geometry: { type: "Point", coordinates: [-1.779722, 51.764917] },
    category: "rooms",
    __v: 0,
  },
  {
    title: "Lakeside Chalet",
    description:
      "Experience the beauty of the Swiss Alps in this lakeside chalet. Perfect for skiing and relaxing by the fire.",
    image: {
      url: "https://images.unsplash.com/photo-1541544181195-300e9d2e2725?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bGFrZXNpZGUlMjBjaGFsZXR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
      filename: "listingimage",
    },
    price: 3800,
    location: "Interlaken",
    country: "Switzerland",
    reviews: [],
    geometry: { type: "Point", coordinates: [7.853444, 46.686292] },
    category: "mountains",
    __v: 0,
  },
  {
    title: "Urban Jungle Loft",
    description:
      "Stay in the heart of the city in this modern loft, surrounded by lush indoor gardens and greenery.",
    image: {
      url: "https://images.unsplash.com/photo-1580146473714-8d4c12f58c0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bG9mdCUyMGFwcGFydG1lbnR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
      filename: "listingimage",
    },
    price: 2000,
    location: "Singapore",
    country: "Singapore",
    reviews: [],
    geometry: { type: "Point", coordinates: [103.851959, 1.29027] },
    category: "iconic_cities",
    __v: 0,
  },
  {
    title: "Charming Farmhouse Retreat",
    description:
      "Escape to this rustic farmhouse for a quiet and peaceful stay. Surrounded by rolling fields and fresh air.",
    image: {
      url: "https://images.unsplash.com/photo-1587390765685-1eb2f5a4b894?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZmFybWhvdXNlJTIwY291bnRyeXNpZGUlMjB2aWV3fGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
      filename: "listingimage",
    },
    price: 950,
    location: "Provence",
    country: "France",
    reviews: [],
    geometry: { type: "Point", coordinates: [5.494621, 43.731412] },
    category: "rooms",
    __v: 0,
  },
  {
    title: "Scandinavian Minimalist Home",
    description:
      "Stay in a sleek and modern Scandinavian home, with clean lines and minimalist decor.",
    image: {
      url: "https://images.unsplash.com/photo-1593062094581-5f13dd7e5d6d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fG1pbmltYWxpc3QlMjBzY2FuZGluYXZpYW4lMjBob3VzZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
      filename: "listingimage",
    },
    price: 1600,
    location: "Copenhagen",
    country: "Denmark",
    reviews: [],
    geometry: { type: "Point", coordinates: [12.568337, 55.676098] },
    category: "trending",
    __v: 0,
  },
  {
    title: "Island Bungalow with Ocean Views",
    description:
      "Relax in this island bungalow with stunning ocean views, steps from the beach.",
    image: {
      url: "https://images.unsplash.com/photo-1542032703-b16d9165a441?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGJ1bmdhbG93JTIwaXNsYW5kJTIwdmlld3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
      filename: "listingimage",
    },
    price: 2200,
    location: "Bora Bora",
    country: "French Polynesia",
    reviews: [],
    geometry: { type: "Point", coordinates: [-151.741490, -16.500412] },
    category: "rooms",
    __v: 0,
  },
  {
    title: "Desert Oasis Villa",
    description:
      "Enjoy the tranquility of the desert in this luxurious villa with private pool and stunning mountain views.",
    image: {
      url: "https://images.unsplash.com/photo-1595936658654-527d7d8a8c4c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8ZGVzZXJ0JTIwb2FzaXMlMjB2aWxsYXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
      filename: "listingimage",
    },
    price: 5000,
    location: "Dubai",
    country: "United Arab Emirates",
    reviews: [],
    geometry: { type: "Point", coordinates: [55.270782, 25.204849] },
    category: "trending",
    __v: 0,
  },
  {
    title: "Jungle Treehouse Adventure",
    description:
      "Experience the thrill of the jungle in this unique treehouse, surrounded by lush greenery and exotic wildlife.",
    image: {
      url: "https://images.unsplash.com/photo-1500674425229-f692875b0ab9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8amFuZ2xlJTIwdHJlZWhvdXNlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
      filename: "listingimage",
    },
    price: 3000,
    location: "Ubud",
    country: "Indonesia",
    reviews: [],
    geometry: { type: "Point", coordinates: [115.262469, -8.50694] },
    category: "rooms",
    __v: 0,
  },
  {
    title: "Floating House on the Lake",
    description:
      "Stay in this unique floating house on the lake, with stunning views and direct water access.",
    image: {
      url: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZmxvYXRpbmclMjBob3VzZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
      filename: "listingimage",
    },
    price: 4500,
    location: "Lake Geneva",
    country: "Switzerland",
    reviews: [],
    geometry: { type: "Point", coordinates: [6.628028, 46.204391] },
    category: "mountains",
    __v: 0,
  },{
    title: "Hidden Gem Cottage",
    description:
      "Discover this hidden gem cottage, perfect for a peaceful retreat in the countryside.",
    image: {
      url: "https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8aGlkZGVuJTIwZ2VtJTIwY290dGFnZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
      filename: "listingimage",
    },
    price: 1500,
    location: "Cornwall",
    country: "United Kingdom",
    reviews: [],
    geometry: { type: "Point", coordinates: [-4.757661, 50.266048] },
    category: "rooms",
    __v: 0,
  },
  {
    title: "Luxury Beachfront Mansion",
    description:
      "Indulge in the ultimate luxury experience in this beachfront mansion with private pool and stunning views.",
    image: {
      url: "https://images.unsplash.com/photo-1590611936764-f5994bc40d2b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bWFuc2lvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
      filename: "listingimage",
    },
    price: 8000,
    location: "Miami",
    country: "United States",
    reviews: [],
    geometry: { type: "Point", coordinates: [-80.191790, 25.761680] },
    category: "trending",
    __v: 0,
  },
  {
    title: "Modern Art Loft",
    description:
      "Stay in this contemporary loft, filled with modern art pieces and surrounded by galleries and museums.",
    image: {
      url: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bW9kZXJuJTIwYXJ0JTIwbG9mdHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
      filename: "listingimage",
    },
    price: 3200,
    location: "Berlin",
    country: "Germany",
    reviews: [],
    geometry: { type: "Point", coordinates: [13.404954, 52.520008] },
    category: "iconic_cities",
    __v: 0,
  },
];

module.exports = { data: sampleListings };
