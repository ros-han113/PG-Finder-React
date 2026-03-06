import { DollarSign, TrendingUp, Calendar, Download } from 'lucide-react';

export function Earnings() {
  const monthlyEarnings = [
    { month: 'January 2024', amount: 240000, bookings: 28, status: 'Paid' },
    { month: 'December 2023', amount: 235000, bookings: 27, status: 'Paid' },
    { month: 'November 2023', amount: 228000, bookings: 26, status: 'Paid' }
  ];

  const propertyEarnings = [
    { name: 'Sunrise PG', monthly: 95000, occupancy: '80%', trend: '+5%' },
    { name: 'Green Valley Hostel', monthly: 105000, occupancy: '93%', trend: '+8%' },
    { name: 'Urban Nest Co-living', monthly: 40000, occupancy: '75%', trend: '+2%' }
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Earnings & Revenue</h1>
        <p className="text-gray-600 mt-1">Track your income and financial performance</p>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-3 gap-6">
        <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
              <DollarSign className="text-green-600" size={20} />
            </div>
            <span className="text-xs text-green-600 font-medium">+12%</span>
          </div>
          <div className="text-3xl font-bold text-gray-900 mb-1">₹2.4L</div>
          <div className="text-sm text-gray-600">This Month</div>
        </div>

        <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
              <TrendingUp className="text-blue-600" size={20} />
            </div>
            <span className="text-xs text-blue-600 font-medium">+8%</span>
          </div>
          <div className="text-3xl font-bold text-gray-900 mb-1">₹28.8L</div>
          <div className="text-sm text-gray-600">This Year</div>
        </div>

        <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
              <Calendar className="text-purple-600" size={20} />
            </div>
            <span className="text-xs text-purple-600 font-medium">85%</span>
          </div>
          <div className="text-3xl font-bold text-gray-900 mb-1">₹2.35L</div>
          <div className="text-sm text-gray-600">Last Month</div>
        </div>
      </div>

      {/* Monthly Earnings */}
      <div className="bg-white rounded-xl border border-gray-200 shadow-sm">
        <div className="p-6 border-b border-gray-200 flex items-center justify-between">
          <h3 className="text-lg font-bold text-gray-900">Monthly Earnings</h3>
          <button className="flex items-center gap-2 px-4 py-2 text-sm text-green-600 hover:bg-green-50 rounded-lg transition-colors">
            <Download size={16} />
            Export
          </button>
        </div>
        <div className="p-6">
          <div className="space-y-4">
            {monthlyEarnings.map((earning, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                <div>
                  <div className="font-semibold text-gray-900">{earning.month}</div>
                  <div className="text-sm text-gray-600">{earning.bookings} bookings</div>
                </div>
                <div className="text-right">
                  <div className="text-xl font-bold text-gray-900">₹{(earning.amount / 1000).toFixed(0)}K</div>
                  <span className="text-xs px-3 py-1 bg-green-100 text-green-700 rounded-full font-medium">{earning.status}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Property-wise Earnings */}
      <div className="bg-white rounded-xl border border-gray-200 shadow-sm">
        <div className="p-6 border-b border-gray-200">
          <h3 className="text-lg font-bold text-gray-900">Property-wise Earnings</h3>
        </div>
        <div className="p-6">
          <div className="space-y-4">
            {propertyEarnings.map((property, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                <div className="flex-1">
                  <div className="font-semibold text-gray-900">{property.name}</div>
                  <div className="text-sm text-gray-600">Occupancy: {property.occupancy}</div>
                </div>
                <div className="text-right">
                  <div className="text-lg font-bold text-gray-900">₹{(property.monthly / 1000).toFixed(0)}K/mo</div>
                  <span className="text-xs text-green-600 font-medium">{property.trend}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
