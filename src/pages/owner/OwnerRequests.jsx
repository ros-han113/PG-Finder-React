import { useState } from 'react';
import { MessageCircle, CheckCircle, XCircle, Clock, User } from 'lucide-react';

export function OwnerRequests() {
  const [requests, setRequests] = useState([
    { id: 1, name: 'Rahul Kumar', email: 'rahul@email.com', phone: '+91 98765 43210', pg: 'Sunrise PG', roomType: 'Single', moveInDate: '2026-03-15', status: 'pending', submittedDate: '2026-02-08' },
    { id: 2, name: 'Priya Sharma', email: 'priya@email.com', phone: '+91 87654 32109', pg: 'Green Valley', roomType: 'Double', moveInDate: '2026-03-20', status: 'pending', submittedDate: '2026-02-07' },
    { id: 3, name: 'Amit Patel', email: 'amit@email.com', phone: '+91 76543 21098', pg: 'Urban Nest', roomType: 'Single', moveInDate: '2026-03-10', status: 'approved', submittedDate: '2026-02-06' },
    { id: 4, name: 'Sneha Reddy', email: 'sneha@email.com', phone: '+91 65432 10987', pg: 'Sunrise PG', roomType: 'Triple', moveInDate: '2026-04-01', status: 'rejected', submittedDate: '2026-02-05' }
  ]);

  const [filter, setFilter] = useState('all');

  const handleApprove = (id) => {
    setRequests(requests.map(req => 
      req.id === id ? { ...req, status: 'approved' } : req
    ));
  };

  const handleReject = (id) => {
    setRequests(requests.map(req => 
      req.id === id ? { ...req, status: 'rejected' } : req
    ));
  };

  const filteredRequests = filter === 'all' 
    ? requests 
    : requests.filter(req => req.status === filter);

  const stats = {
    pending: requests.filter(r => r.status === 'pending').length,
    approved: requests.filter(r => r.status === 'approved').length,
    rejected: requests.filter(r => r.status === 'rejected').length
  };

  return (
    <div className="space-y-6">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Tenant Requests</h1>
          <p className="text-gray-600 mt-1">Manage booking and inquiry requests from tenants</p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-6">
          <div className="bg-white rounded-lg p-6 border border-gray-200">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-lg bg-orange-500 flex items-center justify-center">
                <Clock className="text-white" size={20} />
              </div>
              <div className="text-2xl font-bold text-gray-900">{stats.pending}</div>
            </div>
            <div className="text-sm text-gray-600">Pending Requests</div>
          </div>

          <div className="bg-white rounded-lg p-6 border border-gray-200">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-lg bg-green-500 flex items-center justify-center">
                <CheckCircle className="text-white" size={20} />
              </div>
              <div className="text-2xl font-bold text-gray-900">{stats.approved}</div>
            </div>
            <div className="text-sm text-gray-600">Approved</div>
          </div>

          <div className="bg-white rounded-lg p-6 border border-gray-200">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-lg bg-red-500 flex items-center justify-center">
                <XCircle className="text-white" size={20} />
              </div>
              <div className="text-2xl font-bold text-gray-900">{stats.rejected}</div>
            </div>
            <div className="text-sm text-gray-600">Rejected</div>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="bg-white rounded-lg p-4 border border-gray-200">
          <div className="flex gap-2">
            <button
              onClick={() => setFilter('all')}
              className={`px-4 py-2 text-sm font-medium rounded-lg ${
                filter === 'all' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              All ({requests.length})
            </button>
            <button
              onClick={() => setFilter('pending')}
              className={`px-4 py-2 text-sm font-medium rounded-lg ${
                filter === 'pending' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Pending ({stats.pending})
            </button>
            <button
              onClick={() => setFilter('approved')}
              className={`px-4 py-2 text-sm font-medium rounded-lg ${
                filter === 'approved' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Approved ({stats.approved})
            </button>
            <button
              onClick={() => setFilter('rejected')}
              className={`px-4 py-2 text-sm font-medium rounded-lg ${
                filter === 'rejected' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Rejected ({stats.rejected})
            </button>
          </div>
        </div>

        {/* Requests List */}
        <div className="space-y-4">
          {filteredRequests.length === 0 ? (
            <div className="bg-white rounded-lg p-12 text-center border border-gray-200">
              <User className="mx-auto text-gray-400 mb-4" size={48} />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">No requests found</h3>
              <p className="text-gray-600">There are no {filter === 'all' ? '' : filter} requests at the moment.</p>
            </div>
          ) : (
            filteredRequests.map((request) => (
              <div key={request.id} className="bg-white rounded-lg p-6 border border-gray-200">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-semibold text-lg">
                      {request.name.charAt(0)}
                    </div>
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-lg font-bold text-gray-900">{request.name}</h3>
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                          request.status === 'pending' ? 'bg-orange-100 text-orange-700' :
                          request.status === 'approved' ? 'bg-green-100 text-green-700' :
                          'bg-red-100 text-red-700'
                        }`}>
                          {request.status.charAt(0).toUpperCase() + request.status.slice(1)}
                        </span>
                      </div>
                      <div className="text-sm text-gray-500">
                        Submitted on {new Date(request.submittedDate).toLocaleDateString('en-US', { 
                          year: 'numeric', 
                          month: 'long', 
                          day: 'numeric' 
                        })}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <div className="text-xs text-gray-500 mb-1">Email</div>
                    <div className="text-sm font-medium text-gray-900">{request.email}</div>
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 mb-1">Phone</div>
                    <div className="text-sm font-medium text-gray-900">{request.phone}</div>
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 mb-1">Property</div>
                    <div className="text-sm font-medium text-gray-900">{request.pg}</div>
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 mb-1">Room Type</div>
                    <div className="text-sm font-medium text-gray-900">{request.roomType} Sharing</div>
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 mb-1">Move-in Date</div>
                    <div className="text-sm font-medium text-gray-900">
                      {new Date(request.moveInDate).toLocaleDateString('en-US', { 
                        year: 'numeric', 
                        month: 'short', 
                        day: 'numeric' 
                      })}
                    </div>
                  </div>
                </div>

                {request.status === 'pending' && (
                  <div className="flex gap-3">
                    <button
                      onClick={() => handleApprove(request.id)}
                      className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 text-sm font-medium"
                    >
                      Approve Request
                    </button>
                    <button
                      onClick={() => handleReject(request.id)}
                      className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 text-sm font-medium"
                    >
                      Reject
                    </button>
                    <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 text-sm font-medium">
                      Contact Tenant
                    </button>
                  </div>
                )}

                {request.status === 'approved' && (
                  <div className="text-green-600 text-sm font-medium">
                    Request has been approved and tenant has been notified
                  </div>
                )}

                {request.status === 'rejected' && (
                  <div className="text-red-600 text-sm font-medium">
                    Request has been rejected
                  </div>
                )}
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
