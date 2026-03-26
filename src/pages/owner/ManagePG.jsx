import { useState } from 'react';
import { Plus, Edit, Trash2, MapPin, Bed, Users, DollarSign, Star } from 'lucide-react';

// Enhanced PG management with bulk operations - Day 14
export function ManagePG() {
  const [properties, setProperties] = useState([
    {
      id: 1,
      name: 'Sunrise PG for Men',
      location: 'Koramangala, Bangalore',
      totalRooms: 10,
      occupiedRooms: 8,
      availableRooms: 2,
      rentRange: '₹10,000 - ₹15,000',
      rating: 4.5,
      reviews: 45,
      status: 'Active',
      amenities: ['WiFi', 'AC', 'Laundry', 'Meals']
    },
    {
      id: 2,
      name: 'Green Valley Girls Hostel',
      location: 'HSR Layout, Bangalore',
      totalRooms: 15,
      occupiedRooms: 14,
      availableRooms: 1,
      rentRange: '₹8,000 - ₹12,000',
      rating: 4.8,
      reviews: 62,
      status: 'Active',
      amenities: ['WiFi', 'Security', 'Meals', 'Gym']
    },
    {
      id: 3,
      name: 'Urban Nest Co-living',
      location: 'Indiranagar, Bangalore',
      totalRooms: 8,
      occupiedRooms: 6,
      availableRooms: 2,
      rentRange: '₹12,000 - ₹18,000',
      rating: 4.6,
      reviews: 38,
      status: 'Active',
      amenities: ['WiFi', 'AC', 'Parking', 'Meals']
    }
  ]);

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this property?')) {
      setProperties(properties.filter(prop => prop.id !== id));
    }
  };

  return (
    <div className="space-y-6">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Manage PG Properties</h1>
            <p className="text-gray-600 mt-1">Add, edit, or remove your properties</p>
          </div>
          <button 
            style={{ backgroundColor: '#2563eb', color: '#ffffff' }}
            className="flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-blue-700 font-medium"
          >
            <Plus size={18} />
            Add New Property
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-4 gap-6">
          <div className="bg-white rounded-lg p-6 border border-gray-200">
            <div className="text-2xl font-bold text-gray-900 mb-1">{properties.length}</div>
            <div className="text-sm text-gray-600">Total Properties</div>
          </div>
          <div className="bg-white rounded-lg p-6 border border-gray-200">
            <div className="text-2xl font-bold text-gray-900 mb-1">
              {properties.reduce((sum, p) => sum + p.totalRooms, 0)}
            </div>
            <div className="text-sm text-gray-600">Total Rooms</div>
          </div>
          <div className="bg-white rounded-lg p-6 border border-gray-200">
            <div className="text-2xl font-bold text-green-600 mb-1">
              {Math.round((properties.reduce((sum, p) => sum + p.occupiedRooms, 0) / 
                properties.reduce((sum, p) => sum + p.totalRooms, 0)) * 100)}%
            </div>
            <div className="text-sm text-gray-600">Occupancy Rate</div>
          </div>
          <div className="bg-white rounded-lg p-6 border border-gray-200">
            <div className="text-2xl font-bold text-orange-500 mb-1">
              {(properties.reduce((sum, p) => sum + p.rating, 0) / properties.length).toFixed(1)}
            </div>
            <div className="text-sm text-gray-600">Avg Rating</div>
          </div>
        </div>

        {/* Properties List */}
        <div className="space-y-4">
          {properties.map((property) => (
            <div key={property.id} className="bg-white rounded-lg p-6 border border-gray-200">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-2xl">
                    {property.name.charAt(0)}
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-xl font-bold text-gray-900">{property.name}</h3>
                      <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-semibold">
                        {property.status}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600 mb-2">
                      <MapPin size={16} />
                      <span className="text-sm">{property.location}</span>
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-blue-600 mb-1">{property.rentRange}</div>
                  <div className="text-xs text-gray-500">per month</div>
                </div>
              </div>

              {/* Stats Row */}
              <div className="grid grid-cols-4 gap-4 mb-4 p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center gap-2">
                  <Bed className="text-gray-500" size={18} />
                  <div>
                    <div className="text-xs text-gray-500">Total Rooms</div>
                    <div className="text-sm font-semibold text-gray-900">{property.totalRooms}</div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="text-green-500" size={18} />
                  <div>
                    <div className="text-xs text-gray-500">Occupied</div>
                    <div className="text-sm font-semibold text-green-600">{property.occupiedRooms}</div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <DollarSign className="text-blue-500" size={18} />
                  <div>
                    <div className="text-xs text-gray-500">Available</div>
                    <div className="text-sm font-semibold text-blue-600">{property.availableRooms}</div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="text-orange-500 fill-orange-500" size={18} />
                  <div>
                    <div className="text-xs text-gray-500">Rating</div>
                    <div className="text-sm font-semibold text-gray-900">
                      {property.rating} ({property.reviews})
                    </div>
                  </div>
                </div>
              </div>

              {/* Amenities */}
              <div className="mb-4">
                <div className="text-xs text-gray-500 mb-2">Amenities</div>
                <div className="flex flex-wrap gap-2">
                  {property.amenities.map((amenity, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-xs font-medium"
                    >
                      {amenity}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3">
                <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 text-sm font-medium">
                  <Edit size={16} />
                  Edit Property
                </button>
                <button className="flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 text-sm font-medium">
                  View Details
                </button>
                <button
                  onClick={() => handleDelete(property.id)}
                  className="flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 text-sm font-medium"
                >
                  <Trash2 size={16} />
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
