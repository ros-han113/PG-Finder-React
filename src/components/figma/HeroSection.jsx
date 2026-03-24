import React from 'react';
import { Search, MapPin } from 'lucide-react';
import { Button } from '../ui/Button';

// Enhanced hero section with gradient background - Day 12
export function HeroSection({ onSearch }) {
  return (
    <section className="relative bg-gradient-to-br from-primary-600 to-primary-800 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4">
            Find Your Perfect PG
          </h1>
          <p className="text-xl text-blue-100">
            Discover verified accommodations and compatible roommates
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-2xl p-6">
          <div className="flex gap-4">
            <div className="flex-1">
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="text"
                  placeholder="Enter city or locality"
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 text-gray-900"
                />
              </div>
            </div>
            <Button size="lg" onClick={onSearch}>
              <Search size={20} className="mr-2" />
              Search
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
