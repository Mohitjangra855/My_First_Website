const sampleListings = [
    {
      title: 'Cozy Beachfront Cottage',
      description: ' Escape to this charming beachfront cottage for a relaxing getaway. Enjoy stunning ocean views and easy access to the beach.',
      image: {
        url: 'https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60',
        filename: 'listingimage'
      },
      price: 15000,
      location: 'Malibu',
      country: 'United States',
      reviews: [],
      geometry: { type: 'Point', coordinates: [ -118.68517, 34.034378 ] },
      category: 'Castles',
      __v: 0
    },
    {
      title: 'Modern Loft in Downtown',
      description: '  Stay in the heart of the city in this stylish loft apartment. Perfect for urban explorers!',       
      image: {
        url: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60',
        filename: 'listingimage'
      },
      price: 1200,
      location: 'New York City',
      country: 'United States',
      reviews: [],
      geometry: { type: 'Point', coordinates: [ -74.0059945, 40.7127492 ] },
      category: 'Iconic Cities',
      __v: 1
    },
    {
      title: 'Mountain Retreat',
      description: "  Unplug and unwind in this peaceful mountain cabin. Surrounded by nature, it's a perfect place to recharge.",
      image: {
        url: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aG90ZWxzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60',
        filename: 'listingimage'
      },
      price: 1000,
      location: 'Aspen',
      country: 'United States',
      reviews: [],
      geometry: { type: 'Point', coordinates: [ -106.819885, 39.18869 ] },
      category: 'Amazing Pool',
      __v: 1
    },
    {
      title: 'Historic Villa in Tuscany',
      description: ' Experience the charm of Tuscany in this beautifully restored villa. Explore the rolling hills and vineyards.',
      image: {
        url: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG90ZWxzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60',
        filename: 'listingimage'
      },
      price: 2500,
      location: 'Florence',
      country: 'Italy',
      reviews: [],
      geometry: { type: 'Point', coordinates: [ 11.255576, 43.769871 ] },
      category: 'Farms',
      __v: 0
    },
    {
      title: 'Secluded Treehouse Getaway',
      description: " Live among the treetops in this unique treehouse retreat. A true nature lover's paradise.",
      image: {
        url: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60',
        filename: 'listingimage'
      },
      price: 800,
      location: 'Portland',
      country: 'United States',
      reviews: [],
      geometry: { type: 'Point', coordinates: [ -122.674195, 45.520247 ] },
      category: 'Trending',
      __v: 0
    },
    {
      title: 'Beachfront Paradise',
      description: 'Step out of your door onto the sandy beach. This beachfront condo offers the ultimate relaxation.',  
      image: {
        url: 'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60',
        filename: 'listingimage'
      },
      price: 2000,
      location: 'Cancun',
      country: 'Mexico',
      reviews: [],
      geometry: { type: 'Point', coordinates: [ -86.851047, 21.161785 ] },
      category: 'Trending',
      __v: 0
    },
    {
      title: 'Rustic Cabin by the Lake',
      description: 'Spend your days fishing and kayaking on the serene lake. This cozy cabin is perfect for outdoor enthusiasts.',
      image: {
        url: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1vdW50YWlufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60',
        filename: 'listingimage'
      },
      price: 900,
      location: 'Lake Tahoe',
      country: 'United States',
      reviews: [],
      geometry: {
        type: 'Point',
        coordinates: [ -119.97169299999999, 38.926272999999995 ]
      },
      category: 'Mountains',
      __v: 0
    },
    {
      title: 'Luxury Penthouse with City Views',
      description: '  Indulge in luxury living with panoramic city views from this stunning penthouse apartment.',       
      image: {
        url: 'https://images.unsplash.com/photo-1622396481328-9b1b78cdd9fd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2t5JTIwdmFjYXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60',
        filename: 'listingimage'
      },
      price: 3500,
      location: 'Los Angeles',
      country: 'United States',
      reviews: [],
      geometry: { type: 'Point', coordinates: [ -118.24168, 34.054077 ] },
      category: 'Arctic',
      __v: 0
    },
    {
      title: 'Ski-In/Ski-Out Chalet',
      description: 'Hit the slopes right from your doorstep in this ski-in/ski-out chalet in the Swiss Alps.',
      image: {
        url: 'https://images.unsplash.com/photo-1502784444187-359ac186c5bb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHNreSUyMHZhY2F0aW9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60',
        filename: 'listingimage'
      },
      price: 3000,
      location: 'Verbier',
      country: 'Switzerland',
      reviews: [],
      geometry: { type: 'Point', coordinates: [ 7.228548, 46.096795 ] },
      category: 'Mountains',
      __v: 0
    },
    {
      title: 'Safari Lodge in the Serengeti',
      description: '  Experience the thrill of the wild in a comfortable safari lodge. Witness the Great Migration up close.',
      image: {
        url: 'https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fG1vdW50YWlufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60',
        filename: 'listingimage'
      },
      price: 4500,
      location: 'Serengeti National Park',
      country: 'Tanzania',
      reviews: [],
      geometry: { type: 'Point', coordinates: [ 30.536625, 38.820522 ] },
      category: 'Trending',
      __v: 0
    },
    {
      title: 'Cozy Beachfront Cottage',
      description: ' Escape to this charming beachfront cottage for a relaxing getaway. Enjoy stunning ocean views and easy access to the beach.',
      image: {
        url: 'https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60',
        filename: 'listingimage'
      },
      price: 150,
      location: 'Malibu',
      country: 'United States',
      reviews: [],
      geometry: { type: 'Point', coordinates: [ -118.689423, 34.035591 ] },
      category: 'Trending',
      __v: 0
    },
    {
      title: 'Modern Loft in Downtown',
      description: ' Stay in the heart of the city in this stylish loft apartment. Perfect for urban explorers!',        
      image: {
        url: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60',
        filename: 'listingimage'
      },
      price: 1200,
      location: 'New York City',
      country: 'United States',
      reviews: [],
      geometry: { type: 'Point', coordinates: [ -74.0059945, 40.7127492 ] },
      category: 'Camping',
      __v: 0
    },
    {
      title: 'Historic Villa in Tuscany',
      description: '   Experience the charm of Tuscany in this beautifully restored villa. Explore the rolling hills and vineyards.',
      image: {
        url: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG90ZWxzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60',
        filename: 'listingimage'
      },
      price: 2500,
      location: 'Florence',
      country: 'Italy',
      reviews: [],
      geometry: { type: 'Point', coordinates: [ 11.256129, 43.771484 ] },
      category: 'Iconic Cities',
      __v: 0
    },
    {
      title: 'Secluded Treehouse Getaway',
      description: "  Live among the treetops in this unique treehouse retreat. A true nature lover's paradise.",        
      image: {
        url: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60',
        filename: 'listingimage'
      },
      price: 800,
      location: 'Portland',
      country: 'United States',
      reviews: [],
      geometry: { type: 'Point', coordinates: [ -122.6789, 45.52068 ] },
      category: 'Camping',
      __v: 0
    },
    {
      title: 'Beachfront Paradise',
      description: ' Step out of your door onto the sandy beach. This beachfront condo offers the ultimate relaxation.', 
      image: {
        url: 'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60',
        filename: 'listingimage'
      },
      price: 2000,
      location: 'Cancun',
      country: 'Mexico',
      reviews: [],
      geometry: { type: 'Point', coordinates: [ -86.851047, 21.161785 ] },
      category: 'Camping',
      __v: 0
    },
    {
      title: 'Rustic Cabin by the Lake',
      description: 'Spend your days fishing and kayaking on the serene lake. This cozy cabin is perfect for outdoor enthusiasts.',
      image: {
        url: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1vdW50YWlufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60',
        filename: 'listingimage'
      },
      price: 900,
      location: 'Lake Tahoe',
      country: 'United States',
      reviews: [],
      geometry: { type: 'Point', coordinates: [ -119.971693, 38.926273 ] },
      category: 'Mountains',
      __v: 0
    },
    {
      title: 'Luxury Penthouse with City Views',
      description: ' Indulge in luxury living with panoramic city views from this stunning penthouse apartment.',        
      image: {
        url: 'https://images.unsplash.com/photo-1622396481328-9b1b78cdd9fd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2t5JTIwdmFjYXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60',
        filename: 'listingimage'
      },
      price: 3500,
      location: 'Los Angeles',
      country: 'United States',
      reviews: [],
      geometry: { type: 'Point', coordinates: [ -118.242766, 34.053691 ] },
      category: 'Iconic Cities',
      __v: 0
    },
    {
      title: 'Ski-In/Ski-Out Chalet',
      description: 'Hit the slopes right from your doorstep in this ski-in/ski-out chalet in the Swiss Alps.',
      image: {
        url: 'https://images.unsplash.com/photo-1502784444187-359ac186c5bb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHNreSUyMHZhY2F0aW9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60',
        filename: 'listingimage'
      },
      price: 3000,
      location: 'Verbier',
      country: 'Switzerland',
      reviews: [],
      geometry: { type: 'Point', coordinates: [ 7.228548, 46.096795 ] },
      category: 'Mountains',
      __v: 0
    },
    {
      title: 'Safari Lodge in the Serengeti',
      description: 'Experience the thrill of the wild in a comfortable safari lodge. Witness the Great Migration up close.',
      image: {
        url: 'https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fG1vdW50YWlufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60',
        filename: 'listingimage'
      },
      price: 4500,
      location: 'Serengeti National Park',
      country: 'Tanzania',
      reviews: [],
      geometry: { type: 'Point', coordinates: [ 34.771839, -2.333791 ] },
      category: 'Rooms',
      __v: 0
    },
    {
      title: 'Mediterranean Escape',
      description: 'Relax in this luxurious Mediterranean villa with private beach access and breathtaking views of the sea.',
      image: {
        url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bWVkaXRlcnJhbmVhbiUyMHZpbGxhfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60',
        filename: 'listingimage'
      },
      price: 4000,
      location: 'Santorini',
      country: 'Greece',
      reviews: [],
      geometry: { type: 'Point', coordinates: [ 25.48583, 36.393156 ] },
      category: 'Trending',
      __v: 0
    }
  ]

  module.exports = { data: sampleListings };