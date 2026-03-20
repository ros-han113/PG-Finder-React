import React, { useState } from 'react';
import { MapPin, Star, Wifi, Wind, Utensils, Car, Shield, Eye, SlidersHorizontal, Map, AirVent  } from 'lucide-react';
import { Card } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { Badge } from '../../components/ui/Badge';
import { Input } from '../../components/ui/Input';
import { Select } from '../../components/ui/Select';
import { pgListings } from '../../data/mockData';

// Enhanced PG listing with map view - Day 8

export function PGListingPage({ onNavigate }) {
  const [showFilters, setShowFilters] = useState(true);
  const [showMap, setShowMap] = useState(false);
  const [rentRange, setRentRange] = useState([5000, 15000]);
  const [selectedGender, setSelectedGender] = useState('all');
  const [selectedSharing, setSelectedSharing] = useState('all');
  const [selectedAmenities, setSelectedAmenities] = useState([]);
  
  const amenityIcons = {
    WiFi: Wifi,
    AC: AirVent,
    Food: Utensils,
    Parking: Car,
    Security: Shield
  };
  
  const amenitiesList = ['WiFi', 'AC', 'Food', 'Parking', 'Laundry', 'Gym', 'Security'];
  
  const toggleAmenity = (amenity) => {
    setSelectedAmenities(prev =>
      prev.includes(amenity)
        ? prev.filter(a => a !== amenity)
        : [...prev, amenity]
    );
  };
  
  const filteredPGs = pgListings.filter(pg => {
    const rentInRange = pg.rent >= rentRange[0] && pg.rent <= rentRange[1];
    const genderMatch = selectedGender === 'all' || 
      pg.gender.toLowerCase() === selectedGender || 
      pg.gender === 'Unisex';
    const sharingMatch = selectedSharing === 'all' || pg.sharingType.includes(selectedSharing);
    const amenitiesMatch = selectedAmenities.length === 0 || 
      selectedAmenities.every(amenity => pg.amenities.includes(amenity));
    
    return rentInRange && genderMatch && sharingMatch && amenitiesMatch;
  });
  
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 sticky top-16 z-30 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h3>Available PG Accommodations</h3>
              <p className="text-gray-600 mt-1">
                <span className="font-semibold text-primary-600">{filteredPGs.length}</span> properties found in Bangalore
              </p>
            </div>
            <div className="flex gap-2">
              <Button
                variant="outline"
                onClick={() => setShowFilters(!showFilters)}
                className="hidden lg:flex"
              >
                <SlidersHorizontal size={18} className="mr-2" />
                {showFilters ? 'Hide' : 'Show'} Filters
              </Button>
              <Button
                variant={showMap ? 'primary' : 'outline'}
                onClick={() => setShowMap(!showMap)}
              >
                <Map size={18} className="mr-2" />
                {showMap ? 'List' : 'Map'} View
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex gap-6">
          {/* Filters Sidebar */}
          {showFilters && (
            <aside className="w-80 flex-shrink-0">
              <Card className="p-6 sticky top-32">
                <h4 className="mb-4">Filters</h4>
                
                {/* Rent Range */}
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Rent Range
                  </label>
                  <div className="space-y-2">
                    <input
                      type="range"
                      min="3000"
                      max="20000"
                      step="500"
                      value={rentRange[1]}
                      onChange={(e) => setRentRange([rentRange[0], parseInt(e.target.value)])}
                      className="w-full accent-primary-600"
                    />
                    <div className="flex justify-between text-sm text-gray-600">
                      <span>₹{rentRange[0]}</span>
                      <span>₹{rentRange[1]}</span>
                    </div>
                  </div>
                </div>
                
                {/* Gender */}
                <div className="mb-6">
                  <Select
                    label="Gender Preference"
                    value={selectedGender}
                    onChange={(e) => setSelectedGender(e.target.value)}
                    options={[
                      { value: 'all', label: 'All' },
                      { value: 'male', label: 'Male' },
                      { value: 'female', label: 'Female' },
                      { value: 'unisex', label: 'Unisex' }
                    ]}
                  />
                </div>
                
                {/* Sharing Type */}
                <div className="mb-6">
                  <Select
                    label="Sharing Type"
                    value={selectedSharing}
                    onChange={(e) => setSelectedSharing(e.target.value)}
                    options={[
                      { value: 'all', label: 'All Types' },
                      { value: 'Single', label: 'Single Room' },
                      { value: 'Double', label: 'Double Sharing' },
                      { value: 'Triple', label: 'Triple Sharing' }
                    ]}
                  />
                </div>
                
                {/* Amenities */}
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Amenities
                  </label>
                  <div className="space-y-2">
                    {amenitiesList.map((amenity) => (
                      <label key={amenity} className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={selectedAmenities.includes(amenity)}
                          onChange={() => toggleAmenity(amenity)}
                          className="w-4 h-4 accent-primary-600"
                        />
                        <span className="text-sm text-gray-700">{amenity}</span>
                      </label>
                    ))}
                  </div>
                </div>
                
                <Button
                  variant="outline"
                  className="w-full"
                  onClick={() => {
                    setRentRange([5000, 15000]);
                    setSelectedGender('all');
                    setSelectedSharing('all');
                    setSelectedAmenities([]);
                  }}
                >
                  Clear All Filters
                </Button>
              </Card>
            </aside>
          )}
          
          {/* Main Content */}
          <div className="flex-1">
            {showMap ? (
              /* Map View */
              <Card className="p-6 h-[600px] flex items-center justify-center">
                <div className="text-center">
                  <Map size={48} className="text-gray-400 mx-auto mb-3" />
                  <p className="text-gray-600">Map integration would display PG locations here</p>
                  <p className="text-sm text-gray-500 mt-2">Showing {filteredPGs.length} properties</p>
                </div>
              </Card>
            ) : (
              /* List View */
              <div className="grid grid-cols-1 gap-4">
                {filteredPGs.map((pg, index) => (
                  <div key={pg.id}>
                    <Card hover className="overflow-hidden group">
                      <div className="flex flex-col md:flex-row">
                        {/* Image */}
                        <div className="md:w-64 h-48 md:h-auto relative flex-shrink-0 overflow-hidden">
                          <img
                            src={pg.image}
                            alt={pg.name}
                            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                          />
                          {pg.verified && (
                            <Badge variant="verified" className="absolute top-3 left-3">
                              Verified
                            </Badge>
                          )}
                        </div>
                        
                        {/* Details */}
                        <div className="flex-1 p-5">
                          <div className="flex justify-between items-start mb-3">
                            <div>
                              <h4 className="mb-1">{pg.name}</h4>
                              <div className="flex items-center gap-2 text-gray-600 text-sm">
                                <MapPin size={16} />
                                <span>{pg.location}</span>
                              </div>
                            </div>
                            <div className="text-right">
                              <div className="text-2xl font-bold text-gray-900">
                                ₹{pg.rent.toLocaleString()}
                              </div>
                              <div className="text-sm text-gray-500">per month</div>
                            </div>
                          </div>
                          
                          <div className="flex items-center gap-4 mb-3">
                            <div className="flex items-center gap-1">
                              <Star className="text-amber-500 fill-amber-500" size={16} />
                              <span className="font-semibold">{pg.rating}</span><span>({pg.reviews} reviews)</span>
                            </div>
                            <Badge variant="info">{pg.sharingType}</Badge>
                            <Badge variant="default">{pg.gender}</Badge>
                            <Badge variant="success">{pg.availableRooms} rooms available</Badge>
                          </div>
                          
                          {/* Amenities */}
                          <div className="flex flex-wrap gap-3 mb-4">
                            {pg.amenities.slice(0, 5).map((amenity) => {
                              const Icon = amenityIcons[amenity];
                              return (
                                <div key={amenity} className="flex items-center gap-1.5 text-sm text-gray-600">
                                  {Icon && <Icon size={16} className="text-primary-600" />}
                                  <span>{amenity}</span>
                                </div>
                              );
                            })}
                          </div>
                          
                          <div className="flex gap-3">
                            <Button
                              onClick={() => onNavigate('pg-details', pg)}
                              className="flex-1 shadow-md hover:shadow-lg transition-shadow"
                            >
                              <Eye size={18} className="mr-2" />
                              View Details
                            </Button>
                            <Button variant="outline" className="flex-1">
                              Contact Owner
                            </Button>
                          </div>
                        </div>
                      </div>
                    </Card>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}





