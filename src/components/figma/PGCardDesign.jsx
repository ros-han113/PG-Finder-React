import React from 'react';
import { MapPin, Star, Wifi, Wind, Utensils } from 'lucide-react';
import { Card } from '../ui/Card';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';

export function PGCardDesign({ pg, onViewDetails }) {
  return (
    <Card hover className="overflow-hidden">
      <div className="relative h-48">
        <img
          src={pg.image}
          alt={pg.name}
          className="w-full h-full object-cover"
        />
        {pg.verified && (
          <Badge variant="verified" className="absolute top-3 left-3">
            Verified
          </Badge>
        )}
      </div>
      
      <div className="p-5">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{pg.name}</h3>
        
        <div className="flex items-center gap-2 text-gray-600 mb-3">
          <MapPin size={16} />
          <span className="text-sm">{pg.location}</span>
        </div>
        
        <div className="flex items-center gap-4 mb-4">
          <div className="flex items-center gap-1">
            <Star className="text-amber-500 fill-amber-500" size={16} />
            <span className="font-semibold">{pg.rating}</span>
          </div>
          <Badge variant="info">{pg.sharingType}</Badge>
        </div>
        
        <div className="flex items-center gap-3 mb-4 text-gray-600">
          <Wifi size={16} />
          <Wind size={16} />
          <Utensils size={16} />
        </div>
        
        <div className="flex items-center justify-between">
          <div>
            <div className="text-2xl font-bold text-primary-600">
              ₹{pg.rent.toLocaleString()}
            </div>
            <div className="text-sm text-gray-500">per month</div>
          </div>
          <Button onClick={() => onViewDetails(pg)}>
            View Details
          </Button>
        </div>
      </div>
    </Card>
  );
}
