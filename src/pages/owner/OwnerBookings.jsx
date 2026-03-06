import { useState } from 'react';
import { Calendar, User, Home, CheckCircle, XCircle, Clock } from 'lucide-react';

export function OwnerBookings() {
  const [bookings] = useState([
    { id: 1, tenantName: 'Rahul Kumar', pg: 'Sunrise PG', room: '101', checkIn: '2026-03-01', status: 'confirmed', amount: 12000 },
    { id: 2, tenantName: 'Priya Sharma', pg: 'Green Valley', room: '205', checkIn: '2026-03-15', status: 'pending', amount: 10000 },
    { id: 3, tenantName: 'Amit Patel', pg: 'Urban Nest', room: '302', checkIn: '2026-04-01', status: 'confirmed', amount: 15000 }
  ]);

  const stats = [
    { label: 'Total Bookings', value: bookings.length, icon: Calendar, color: 'bg-blue-500' },
    { label: 'Confirmed', value: bookings.filter(b => b.status === 'confirmed').length, icon: CheckCircle, color: 'bg-green-500' },
    { label: 'Pending', value: bookings.filter(b => b.status === 'pending').length, icon: Clock, color: 'bg-orange-500' }
  ];

  return (
    <div className="space-y-6">
      <div className="max-w-7xl mx-auto space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Owner Bookings</h1>
          <p className="text-gray-600 mt-1">Manage all your property bookings</p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="bg-white rounded-lg p-6 border border-gray-200">
                <div className={`w-12 h-12 rounded-lg ${stat.color} flex items-center justify-center mb-4`}>
                  <Icon className="text-white" size={20} />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            );
          })}
        </div>

        {/* Bookings List */}
        <div className="bg-white rounded-lg border border-gray-200">
          <div className="p-6 border-b border-gray-200">
            <h3 className="text-lg font-bold text-gray-900">All Bookings</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Tenant</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">PG</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Room</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Check-in</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Amount</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {bookings.map((booking) => (
                  <tr key={booking.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-semibold">
                          {booking.tenantName.charAt(0)}
                        </div>
                        <span className="font-medium text-gray-900">{booking.tenantName}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-gray-900">{booking.pg}</td>
                    <td className="px-6 py-4 text-gray-900">{booking.room}</td>
                    <td className="px-6 py-4 text-gray-600">{new Date(booking.checkIn).toLocaleDateString()}</td>
                    <td className="px-6 py-4 font-semibold text-gray-900">₹{booking.amount.toLocaleString()}</td>
                    <td className="px-6 py-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        booking.status === 'confirmed' ? 'bg-green-100 text-green-700' : 'bg-orange-100 text-orange-700'
                      }`}>
                        {booking.status}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                        View Details
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
