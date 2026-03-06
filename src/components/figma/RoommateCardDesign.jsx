import React from 'react';
import { MapPin, Briefcase, CheckCircle } from 'lucide-react';
import { Card } from '../ui/Card';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';

export function RoommateCardDesign({ roommate, onConnect }) {
  return (
    <Card hover className="overflow-hidden">
      <div className="p-6">
        <div className="flex items-start gap-4 mb-4">
          <img
            src={roommate.image}
            alt={roommate.name}
            className="w-16 h-16 rounded-full object-cover"
          />
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-1">
              <h3 className="text-lg font-semibold text-gray-900">{roommate.name}</h3>
              {roommate.verified && (
                <CheckCircle size={16} className="text-green-600" />
              )}
            </div>
            <p className="text-sm text-gray-600">{roommate.age} years</p>
          </div>
        </div>
        
        <div className="space-y-2 mb-4">
          <div className="flex items-center gap-2 text-sm text-gray-700">
            <Briefcase size={16} className="text-gray-400" />
            <span>{roommate.occupation}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-700">
            <MapPin size={16} className="text-gray-400" />
            <span>{roommate.location}</span>
          </div>
        </div>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {roommate.lifestyle.slice(0, 3).map((tag) => (
            <Badge key={tag} variant="default" className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>
        
        <div className="flex items-center justify-between p-3 bg-primary-50 rounded-lg mb-4">
          <span className="text-sm font-medium text-gray-700">Compatibility</span>
          <div className="text-xl font-bold text-primary-700">{roommate.compatibility}%</div>
        </div>
        
        <Button className="w-full" onClick={() => onConnect(roommate)}>
          Connect
        </Button>
      </div>
    </Card>
  );
}
