// Enhanced mock data with more listings - Day 9
export const pgListings = [
  {
    id: 1,
    name: 'Sunrise PG for Men',
    location: 'Koramangala, Bangalore',
    city: 'bangalore',
    rent: 12000,
    deposit: 24000,
    rating: 4.5,
    reviews: 45,
    image: 'https://images.unsplash.com/photo-1639751907353-3629fc00d2b2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBiZWRyb29tJTIwcm9vbXxlbnwxfHx8fDE3Njc4MDkxMjN8MA&ixlib=rb-4.1.0&q=80&w=1080',
    amenities: ['WiFi', 'AC', 'Laundry', 'Food', 'Parking'],
    sharingType: 'Double Sharing',
    gender: 'Male',
    availableRooms: 3,
    verified: true,
    ownerName: 'Rajesh Kumar',
    ownerPhone: '+91 98765 43210',
    description: 'Spacious PG accommodation near tech parks with all modern amenities.',
    rules: ['No smoking', 'No pets', 'Guest allowed with prior notice'],
    images: [
      'https://images.unsplash.com/photo-1639751907353-3629fc00d2b2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBiZWRyb29tJTIwcm9vbXxlbnwxfHx8fDE3Njc4MDkxMjN8MA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1726390415269-2f7678d6b609?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50JTIwYWNjb21tb2RhdGlvbiUyMGhvc3RlbHxlbnwxfHx8fDE3Njc4NDQ3MTd8MA&ixlib=rb-4.1.0&q=80&w=1080'
    ],
    coordinates: { lat: 12.9352, lng: 77.6245 }
  },
  {
    id: 2,
    name: 'Green Valley Girls Hostel',
    location: 'HSR Layout, Bangalore',
    city: 'bangalore',
    rent: 10000,
    deposit: 20000,
    rating: 4.8,
    reviews: 62,
    image: 'https://images.unsplash.com/photo-1758523669073-edfbea249144?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzaGFyZWQlMjBhcGFydG1lbnQlMjByb29tfGVufDF8fHx8MTc2Nzc2NzA2NHww&ixlib=rb-4.1.0&q=80&w=1080',
    amenities: ['WiFi', 'AC', 'Laundry', 'Food', 'Security'],
    sharingType: 'Triple Sharing',
    gender: 'Female',
    availableRooms: 5,
    verified: true,
    ownerName: 'Priya Sharma',
    ownerPhone: '+91 98765 43211',
    description: 'Safe and comfortable accommodation for working women and students.',
    rules: ['No smoking', 'Curfew at 10 PM', 'ID proof required'],
    images: [
      'https://images.unsplash.com/photo-1758523669073-edfbea249144?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzaGFyZWQlMjBhcGFydG1lbnQlMjByb29tfGVufDF8fHx8MTc2Nzc2NzA2NHww&ixlib=rb-4.1.0&q=80&w=1080'
    ],
    coordinates: { lat: 12.9116, lng: 77.6473 }
  },
  {
    id: 3,
    name: 'Tech Park Residency',
    location: 'Whitefield, Bangalore',
    city: 'bangalore',
    rent: 15000,
    deposit: 30000,
    rating: 4.6,
    reviews: 38,
    image: 'https://images.unsplash.com/photo-1661258412259-fe5a585c1450?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBob3N0ZWwlMjBiZWRyb29tJTIwaW50ZXJpb3J8ZW58MXx8fHwxNzY5OTI0MTI3fDA&ixlib=rb-4.1.0&q=80&w=1080',
    amenities: ['WiFi', 'AC', 'Gym', 'Food', 'Parking', 'Power Backup'],
    sharingType: 'Single Room',
    gender: 'Unisex',
    availableRooms: 2,
    verified: true,
    ownerName: 'Amit Patel',
    ownerPhone: '+91 98765 43212',
    description: 'Premium PG near IT parks with modern facilities.',
    rules: ['No smoking', 'Visitors allowed till 9 PM'],
    images: [
      'https://images.unsplash.com/photo-1661258412259-fe5a585c1450?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBob3N0ZWwlMjBiZWRyb29tJTIwaW50ZXJpb3J8ZW58MXx8fHwxNzY5OTI0MTI3fDA&ixlib=rb-4.1.0&q=80&w=1080'
    ],
    coordinates: { lat: 12.9698, lng: 77.7499 }
  }
];

export const roommateProfiles = [
  {
    id: 1,
    name: 'Arjun Mehta',
    age: 24,
    gender: 'Male',
    occupation: 'Software Engineer',
    company: 'Tech Corp',
    budget: '10000-12000',
    preferredLocation: 'Koramangala',
    lifestyle: ['Early Bird', 'Non-Smoker', 'Vegetarian'],
    compatibility: 92,
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop',
    verified: true
  },
  {
    id: 2,
    name: 'Sneha Reddy',
    age: 23,
    gender: 'Female',
    occupation: 'Product Manager',
    company: 'StartupXYZ',
    budget: '12000-15000',
    preferredLocation: 'HSR Layout',
    lifestyle: ['Night Owl', 'Non-Smoker', 'Foodie'],
    compatibility: 88,
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop',
    verified: true
  }
];

export const reviews = [
  {
    id: 1,
    pgName: 'Sunrise PG for Men',
    userName: 'Rahul Kumar',
    userImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop',
    rating: 4.5,
    date: 'Jan 15, 2026',
    comment: 'Great place with excellent facilities. The rooms are spacious and well-maintained. Owner is very cooperative and responsive to any issues. Food quality is good and the location is convenient for office commute.',
    verified: true,
    ratings: {
      cleanliness: 5,
      food: 4,
      safety: 5,
      valueForMoney: 4
    }
  },
  {
    id: 2,
    pgName: 'Green Valley Girls Hostel',
    userName: 'Priya Singh',
    userImage: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop',
    rating: 5,
    date: 'Jan 20, 2026',
    comment: 'Very safe and clean environment. Perfect for working women. The security measures are excellent and the staff is very helpful. Highly recommended!',
    verified: true,
    ratings: {
      cleanliness: 5,
      food: 5,
      safety: 5,
      valueForMoney: 5
    }
  },
  {
    id: 3,
    pgName: 'Tech Park Residency',
    userName: 'Amit Verma',
    userImage: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop',
    rating: 4,
    date: 'Jan 10, 2026',
    comment: 'Good PG near IT parks. Rooms are decent and amenities are as promised. WiFi speed could be better but overall a good place to stay.',
    verified: true,
    ratings: {
      cleanliness: 4,
      food: 4,
      safety: 4,
      valueForMoney: 4
    }
  },
  {
    id: 4,
    pgName: 'Sunrise PG for Men',
    userName: 'Karthik Reddy',
    userImage: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop',
    rating: 4.5,
    date: 'Jan 5, 2026',
    comment: 'Excellent value for money. The food is homely and the atmosphere is friendly. Great place for students and working professionals.',
    verified: true,
    ratings: {
      cleanliness: 4,
      food: 5,
      safety: 5,
      valueForMoney: 5
    }
  },
  {
    id: 5,
    pgName: 'Green Valley Girls Hostel',
    userName: 'Anjali Desai',
    userImage: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop',
    rating: 4.8,
    date: 'Dec 28, 2025',
    comment: 'Amazing experience! The owner treats everyone like family. Clean rooms, good food, and great location. Would definitely recommend to my friends.',
    verified: true,
    ratings: {
      cleanliness: 5,
      food: 5,
      safety: 5,
      valueForMoney: 4
    }
  }
];
