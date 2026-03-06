// Additional roommate-specific data
export const lifestylePreferences = [
  'Early Bird',
  'Night Owl',
  'Non-Smoker',
  'Vegetarian',
  'Non-Vegetarian',
  'Pet Lover',
  'Fitness Enthusiast',
  'Foodie',
  'Clean & Organized',
  'Social',
  'Quiet',
  'Music Lover'
];

export const occupations = [
  'Software Engineer',
  'Product Manager',
  'Data Analyst',
  'Marketing Manager',
  'Designer',
  'Student',
  'Consultant',
  'Sales Executive',
  'Teacher',
  'Other'
];

export const budgetRanges = [
  { id: 1, label: 'Under ₹8,000', min: 0, max: 8000 },
  { id: 2, label: '₹8,000 - ₹12,000', min: 8000, max: 12000 },
  { id: 3, label: '₹12,000 - ₹15,000', min: 12000, max: 15000 },
  { id: 4, label: 'Above ₹15,000', min: 15000, max: 100000 }
];

export const compatibilityFactors = [
  { id: 1, name: 'Lifestyle', weight: 30 },
  { id: 2, name: 'Budget', weight: 25 },
  { id: 3, name: 'Location', weight: 20 },
  { id: 4, name: 'Occupation', weight: 15 },
  { id: 5, name: 'Age Group', weight: 10 }
];
