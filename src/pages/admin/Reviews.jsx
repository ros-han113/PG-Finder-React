import { useState } from 'react';
import { Star, ThumbsUp, Eye, Trash2, CheckCircle, XCircle, Flag } from 'lucide-react';

// Enhanced review moderation with filtering - Day 3
export function Reviews() {
  const [reviews] = useState([
    {
      id: 1,
      tenant: 'Rahul Kumar',
      pgName: 'Sunrise PG',
      rating: 5,
      comment: 'Excellent PG with all amenities. Owner is very cooperative. The rooms are spacious and well-maintained.',
      date: '2 days ago',
      helpful: 12,
      status: 'Published'
    },
    {
      id: 2,
      tenant: 'Priya Sharma',
      pgName: 'Green Valley',
      rating: 4,
      comment: 'Good place to stay. Food quality is great. Only issue is parking space.',
      date: '1 week ago',
      helpful: 8,
      status: 'Published'
    },
    {
      id: 3,
      tenant: 'Amit Patel',
      pgName: 'Urban Nest',
      rating: 5,
      comment: 'Best PG in the area. Clean rooms and friendly environment.',
      date: '2 weeks ago',
      helpful: 15,
      status: 'Published'
    },
    {
      id: 4,
      tenant: 'Sneha Reddy',
      pgName: 'Comfort Stay',
      rating: 3,
      comment: 'Average experience. Room maintenance could be better.',
      date: '3 weeks ago',
      helpful: 5,
      status: 'Pending'
    }
  ]);

  const totalReviews = reviews.length;
  const avgRating = (reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length).toFixed(1);
  const publishedCount = reviews.filter(r => r.status === 'Published').length;
  const pendingCount = reviews.filter(r => r.status === 'Pending').length;
  const fiveStarCount = reviews.filter(r => r.rating === 5).length;

  return (
    <div className="space-y-6">
      {/* Stats Cards - 5 connected in ONE row */}
      <div className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden">
        <div className="grid grid-cols-5 divide-x divide-gray-200">
          <div className="p-4">
            <div className="text-xs text-gray-600 mb-2">Total Reviews</div>
            <div className="text-2xl font-bold text-gray-900">{totalReviews}</div>
          </div>

          <div className="p-4">
            <div className="text-xs text-gray-600 mb-2">Average Rating</div>
            <div className="flex items-center gap-2">
              <div className="text-2xl font-bold text-gray-900">{avgRating}</div>
              <Star size={20} className="fill-amber-500 text-amber-500" />
            </div>
          </div>

          <div className="p-4">
            <div className="text-xs text-gray-600 mb-2">Published</div>
            <div className="text-2xl font-bold text-gray-900">{publishedCount}</div>
          </div>

          <div className="p-4">
            <div className="text-xs text-gray-600 mb-2">Pending</div>
            <div className="text-2xl font-bold text-gray-900">{pendingCount}</div>
          </div>

          <div className="p-4">
            <div className="text-xs text-gray-600 mb-2">5 Star Reviews</div>
            <div className="text-2xl font-bold text-gray-900">{fiveStarCount}</div>
          </div>
        </div>
      </div>

      {/* Reviews List */}
      <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-gray-900">All Reviews</h2>
          <div className="flex gap-2">
            <button className="px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded-lg hover:bg-blue-600">
              All
            </button>
            <button className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50">
              Published
            </button>
            <button className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50">
              Pending
            </button>
            <button className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50">
              Flagged
            </button>
          </div>
        </div>

        <div className="space-y-4">
          {reviews.map((review) => (
            <div 
              key={review.id}
              className="p-5 border border-gray-200 rounded-lg hover:border-blue-300 hover:shadow-sm transition-all"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-start gap-4">
                  {/* Avatar */}
                  <div className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center text-white font-semibold text-lg flex-shrink-0">
                    {review.tenant.charAt(0)}
                  </div>
                  
                  {/* User Info */}
                  <div>
                    <h4 className="font-semibold text-gray-900">{review.tenant}</h4>
                    <div className="flex items-center gap-3 mt-1">
                      {/* Star Rating */}
                      <div className="flex gap-0.5">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i} 
                            size={16} 
                            className={i < review.rating ? 'fill-amber-500 text-amber-500' : 'text-gray-300'}
                          />
                        ))}
                      </div>
                      <span className="text-sm text-gray-500">{review.date}</span>
                    </div>
                  </div>
                </div>

                {/* Status & PG Name */}
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 text-xs font-medium bg-blue-100 text-blue-700 rounded-full">
                    {review.pgName}
                  </span>
                  <span className={`px-3 py-1 text-xs font-semibold rounded-full ${
                    review.status === 'Published' 
                      ? 'bg-green-100 text-green-700' 
                      : 'bg-yellow-100 text-yellow-700'
                  }`}>
                    {review.status}
                  </span>
                </div>
              </div>

              {/* Review Comment */}
              <p className="text-gray-700 mb-4 ml-16">{review.comment}</p>

              {/* Actions */}
              <div className="flex items-center justify-between ml-16">
                <div className="flex items-center gap-1 text-sm text-gray-600">
                  <ThumbsUp size={16} />
                  <span>{review.helpful} helpful</span>
                </div>
                
                <div className="flex gap-2">
                  <button className="px-3 py-1.5 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 flex items-center gap-1">
                    <Eye size={16} />
                    View
                  </button>
                  
                  {review.status === 'Pending' && (
                    <>
                      <button className="px-3 py-1.5 text-sm font-medium text-white bg-green-500 rounded-lg hover:bg-green-600 flex items-center gap-1">
                        <CheckCircle size={16} />
                        Approve
                      </button>
                      <button className="px-3 py-1.5 text-sm font-medium text-white bg-red-500 rounded-lg hover:bg-red-600 flex items-center gap-1">
                        <XCircle size={16} />
                        Reject
                      </button>
                    </>
                  )}
                  
                  {review.status === 'Published' && (
                    <button className="px-3 py-1.5 text-sm font-medium text-orange-600 bg-orange-50 border border-orange-200 rounded-lg hover:bg-orange-100 flex items-center gap-1">
                      <Flag size={16} />
                      Flag
                    </button>
                  )}
                  
                  <button className="px-3 py-1.5 text-sm font-medium text-red-600 bg-red-50 border border-red-200 rounded-lg hover:bg-red-100 flex items-center gap-1">
                    <Trash2 size={16} />
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
