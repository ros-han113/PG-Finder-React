import React, { useState } from 'react';
import { Home, Star, Eye, Edit, Trash2, Plus, MapPin } from 'lucide-react';
import { Card } from '../../components/ui/Card';
import { Badge } from '../../components/ui/Badge';

// Simple Listings Management Page
export function ListingsPage() {
  // Sample listings data
  const [listings] = useState([
    {
      id: 1,
      name: 'Sunrise PG for Men',
      location: 'Koramangala, Bangalore',
      rooms: 10,
      occupied: 8,
      rent: 12000,
      rating: 4.5,
      reviews: 45,
      status: 'Active',
      image: 'https://images.unsplash.com/photo-1639751907353-3629fc00d2b2?w=200&h=200&fit=crop'
    },
    {
      id: 2,
      name: 'Green Valley Girls Hostel',
      location: 'HSR Layout, Bangalore',
      rooms: 12,
      occupied: 11,
      rent: 10000,
      rating: 4.8,
      reviews: 62,
      status: 'Active',
      image: 'https://images.unsplash.com/photo-1758523669073-edfbea249144?w=200&h=200&fit=crop'
    },
    {
      id: 3,
      name: 'Urban Nest Co-living',
      location: 'Indiranagar, Bangalore',
      rooms: 8,
      occupied: 6,
      rent: 15000,
      rating: 4.6,
      reviews: 38,
      status: 'Active',
      image: 'https://images.unsplash.com/photo-1661258412259-fe5a585c1450?w=200&h=200&fit=crop'
    },
  ]);

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">My Listings</h2>
          <p className="text-gray-600 mt-1">Manage all your PG properties</p>
        </div>
        <button 
          onClick={() => alert('Add new listing functionality')}
          style={{ backgroundColor: '#2563eb', color: '#ffffff' }}
          className="flex items-center gap-2 px-6 py-3 rounded-lg hover:bg-blue-700 font-medium shadow-sm transition-colors"
        >
          <Plus size={20} />
          <span>Add New Listing</span>
        </button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <Card className="p-4">
          <div className="text-sm text-gray-600 mb-1">Total Properties</div>
          <div className="text-2xl font-bold">{listings.length}</div>
        </Card>
        <Card className="p-4">
          <div className="text-sm text-gray-600 mb-1">Total Rooms</div>
          <div className="text-2xl font-bold">
            {listings.reduce((sum, l) => sum + l.rooms, 0)}
          </div>
        </Card>
        <Card className="p-4">
          <div className="text-sm text-gray-600 mb-1">Occupancy Rate</div>
          <div className="text-2xl font-bold text-green-600">
            {Math.round((listings.reduce((sum, l) => sum + l.occupied, 0) / listings.reduce((sum, l) => sum + l.rooms, 0)) * 100)}%
          </div>
        </Card>
        <Card className="p-4">
          <div className="text-sm text-gray-600 mb-1">Avg Rating</div>
          <div className="text-2xl font-bold text-amber-600">
            {(listings.reduce((sum, l) => sum + l.rating, 0) / listings.length).toFixed(1)} ⭐
          </div>
        </Card>
      </div>

      {/* Listings Grid */}
      <div className="space-y-4">
        {listings.map((listing) => (
          <Card key={listing.id} className="p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-6">
              {/* Property Image */}
              <img 
                src={listing.image} 
                alt={listing.name}
                className="w-32 h-32 rounded-lg object-cover"
              />

              {/* Property Info */}
              <div className="flex-1">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-xl font-bold text-gray-900">{listing.name}</h3>
                      <Badge variant="success">{listing.status}</Badge>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600 mb-2">
                      <MapPin size={16} />
                      <span>{listing.location}</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-blue-600">
                      ₹{listing.rent.toLocaleString()}
                    </div>
                    <div className="text-sm text-gray-500">per month</div>
                  </div>
                </div>

                {/* Stats Row */}
                <div className="flex items-center gap-6 mb-4 text-sm">
                  <div>
                    <span className="text-gray-600">Total Rooms: </span>
                    <span className="font-semibold">{listing.rooms}</span>
                  </div>
                  <div>
                    <span className="text-gray-600">Occupied: </span>
                    <span className="font-semibold text-green-600">{listing.occupied}</span>
                  </div>
                  <div>
                    <span className="text-gray-600">Available: </span>
                    <span className="font-semibold text-blue-600">{listing.rooms - listing.occupied}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="text-amber-500 fill-amber-500" size={16} />
                    <span className="font-semibold">{listing.rating}</span>
                    <span className="text-gray-600">({listing.reviews} reviews)</span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2">
                  <button className="flex items-center gap-1 px-3 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 text-sm text-gray-700">
                    <Eye size={16} />
                    View
                  </button>
                  <button className="flex items-center gap-1 px-3 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 text-sm text-gray-700">
                    <Edit size={16} />
                    Edit
                  </button>
                  <button className="flex items-center gap-1 px-3 py-2 border border-red-300 rounded-lg hover:bg-red-50 text-sm text-red-600">
                    <Trash2 size={16} />
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
