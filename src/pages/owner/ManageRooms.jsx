import { useState } from 'react';
import { DoorOpen, Users, DollarSign, Edit, Trash2, Plus, Calendar, CheckCircle, XCircle, Clock } from 'lucide-react';

export function ManageRooms() {
  const [activeTab, setActiveTab] = useState('all-rooms');
  
  const [rooms] = useState([
    { id: 1, roomNo: '101', type: 'Single', capacity: 1, occupied: 1, rent: 12000, status: 'Occupied', pg: 'Sunrise PG', availableFrom: 'N/A' },
    { id: 2, roomNo: '102', type: 'Double', capacity: 2, occupied: 0, rent: 10000, status: 'Available', pg: 'Sunrise PG', availableFrom: 'Immediate' },
    { id: 3, roomNo: '201', type: 'Triple', capacity: 3, occupied: 2, rent: 8000, status: 'Partially Occupied', pg: 'Green Valley', availableFrom: 'N/A' },
    { id: 4, roomNo: '202', type: 'Single', capacity: 1, occupied: 1, rent: 15000, status: 'Occupied', pg: 'Urban Nest', availableFrom: 'N/A' },
    { id: 5, roomNo: '103', type: 'Triple', capacity: 3, occupied: 0, rent: 8500, status: 'Available', pg: 'Sunrise PG', availableFrom: 'Immediate' },
    { id: 6, roomNo: '104', type: 'Single', capacity: 1, occupied: 0, rent: 12500, status: 'Available', pg: 'Sunrise PG', availableFrom: 'Immediate' },
    { id: 7, roomNo: '203', type: 'Double', capacity: 2, occupied: 0, rent: 11000, status: 'Available', pg: 'Green Valley', availableFrom: '2026-03-01' }
  ]);

  const availableRooms = rooms.filter(r => r.status === 'Available');
  const occupiedRooms = rooms.filter(r => r.status === 'Occupied');
  const partiallyOccupied = rooms.filter(r => r.status === 'Partially Occupied');

  const stats = [
    { label: 'Total Rooms', value: rooms.length, icon: DoorOpen, color: 'bg-blue-500' },
    { label: 'Occupied', value: occupiedRooms.length, icon: Users, color: 'bg-red-500' },
    { label: 'Available', value: availableRooms.length, icon: CheckCircle, color: 'bg-green-500' },
    { label: 'Partially Occupied', value: partiallyOccupied.length, icon: Clock, color: 'bg-orange-500' }
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Manage Rooms & Availability</h1>
          <p className="text-gray-600 mt-1">Manage all rooms and their availability across your properties</p>
        </div>
        <button 
          style={{ backgroundColor: '#2563eb', color: '#ffffff' }}
          className="flex items-center gap-2 px-6 py-3 rounded-lg hover:bg-blue-700 font-medium shadow-sm transition-colors"
        >
          <Plus size={20} />
          <span>Add New Room</span>
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-4 gap-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div key={index} className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
              <div className={`w-12 h-12 rounded-lg ${stat.color} flex items-center justify-center mb-4`}>
                <Icon className="text-white" size={20} />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </div>
          );
        })}
      </div>

      {/* Tabs */}
      <div className="bg-white rounded-lg border border-gray-200 p-2">
        <div className="flex gap-2">
          <button
            onClick={() => setActiveTab('all-rooms')}
            className={`flex-1 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              activeTab === 'all-rooms' ? 'bg-blue-600 text-white' : 'text-gray-700 hover:bg-gray-100'
            }`}
          >
            All Rooms
          </button>
          <button
            onClick={() => setActiveTab('available')}
            className={`flex-1 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              activeTab === 'available' ? 'bg-blue-600 text-white' : 'text-gray-700 hover:bg-gray-100'
            }`}
          >
            Available Rooms ({availableRooms.length})
          </button>
          <button
            onClick={() => setActiveTab('occupied')}
            className={`flex-1 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              activeTab === 'occupied' ? 'bg-blue-600 text-white' : 'text-gray-700 hover:bg-gray-100'
            }`}
          >
            Occupied ({occupiedRooms.length})
          </button>
        </div>
      </div>

      {/* All Rooms Table */}
      {activeTab === 'all-rooms' && (
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm">
          <div className="p-6 border-b border-gray-200">
            <h3 className="text-lg font-bold text-gray-900">All Rooms</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Room No</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">PG</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Type</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Capacity</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Occupied</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Rent</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {rooms.map((room) => (
                  <tr key={room.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-semibold text-gray-900">{room.roomNo}</td>
                    <td className="px-6 py-4 text-gray-900">{room.pg}</td>
                    <td className="px-6 py-4 text-gray-600">{room.type}</td>
                    <td className="px-6 py-4 text-gray-600">{room.capacity}</td>
                    <td className="px-6 py-4 text-gray-600">{room.occupied}</td>
                    <td className="px-6 py-4 font-semibold text-gray-900">₹{room.rent.toLocaleString()}</td>
                    <td className="px-6 py-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        room.status === 'Occupied' ? 'bg-red-100 text-red-700' :
                        room.status === 'Available' ? 'bg-green-100 text-green-700' :
                        'bg-orange-100 text-orange-700'
                      }`}>
                        {room.status}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <button className="p-2 text-blue-600 hover:bg-blue-50 rounded">
                          <Edit size={16} />
                        </button>
                        <button className="p-2 text-red-600 hover:bg-red-50 rounded">
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Available Rooms */}
      {activeTab === 'available' && (
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">
          <h3 className="text-lg font-bold text-gray-900 mb-4">Available Rooms</h3>
          <div className="space-y-4">
            {availableRooms.map((room) => (
              <div 
                key={room.id}
                className="p-4 border border-gray-200 rounded-lg hover:border-blue-300 transition-colors"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                      <Calendar className="text-green-600" size={24} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Room {room.roomNo} - {room.pg}</h4>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded text-xs font-medium">{room.type}</span>
                        <span className="px-2 py-1 bg-green-100 text-green-700 rounded text-xs font-medium">Available</span>
                        <span className="text-sm text-gray-600">₹{room.rent.toLocaleString()}/month</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="text-right">
                      <div className="text-sm text-gray-600 mb-1">Available From</div>
                      <div className="font-semibold text-gray-900">{room.availableFrom}</div>
                    </div>
                    <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 text-sm text-gray-700">
                      Update Status
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Occupied Rooms */}
      {activeTab === 'occupied' && (
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">
          <h3 className="text-lg font-bold text-gray-900 mb-4">Occupied Rooms</h3>
          <div className="space-y-4">
            {occupiedRooms.map((room) => (
              <div 
                key={room.id}
                className="p-4 border border-gray-200 rounded-lg hover:border-red-300 transition-colors"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                      <Users className="text-red-600" size={24} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Room {room.roomNo} - {room.pg}</h4>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded text-xs font-medium">{room.type}</span>
                        <span className="px-2 py-1 bg-red-100 text-red-700 rounded text-xs font-medium">Occupied</span>
                        <span className="text-sm text-gray-600">₹{room.rent.toLocaleString()}/month</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="text-right">
                      <div className="text-sm text-gray-600 mb-1">Occupancy</div>
                      <div className="font-semibold text-gray-900">{room.occupied}/{room.capacity}</div>
                    </div>
                    <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 text-sm font-medium">
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
