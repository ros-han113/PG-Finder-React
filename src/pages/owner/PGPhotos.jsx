import React, { useState } from 'react';
import { Upload, Image, Trash2, Eye } from 'lucide-react';
import { Card } from '../../components/ui/Card';
import { Badge } from '../../components/ui/Badge';

export function PGPhotos() {
  const [photos] = useState([
    { id: 1, url: 'https://images.unsplash.com/photo-1639751907353-3629fc00d2b2?w=400', category: 'Room', title: 'Single Room' },
    { id: 2, url: 'https://images.unsplash.com/photo-1758523669073-edfbea249144?w=400', category: 'Common Area', title: 'Living Room' },
    { id: 3, url: 'https://images.unsplash.com/photo-1661258412259-fe5a585c1450?w=400', category: 'Room', title: 'Double Sharing' },
    { id: 4, url: 'https://images.unsplash.com/photo-1556912173-46c336c7fd55?w=400', category: 'Kitchen', title: 'Kitchen Area' },
    { id: 5, url: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=400', category: 'Bathroom', title: 'Bathroom' },
    { id: 6, url: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=400', category: 'Exterior', title: 'Building Front' }
  ]);

  const categories = ['All', 'Room', 'Common Area', 'Kitchen', 'Bathroom', 'Exterior'];

  return (
    <div className="space-y-6">
      <div className="max-w-7xl mx-auto space-y-6">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">PG Photos</h1>
            <p className="text-gray-600 mt-2">Manage photos of your property</p>
          </div>
          <button 
            onClick={() => alert('Upload photos functionality')}
            style={{ backgroundColor: '#2563eb', color: '#ffffff' }}
            className="flex items-center gap-2 px-6 py-3 rounded-lg hover:bg-blue-700 font-medium shadow-sm transition-colors"
          >
            <Upload size={20} />
            <span>Upload Photos</span>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          <Card className="p-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                <Image className="text-blue-600" size={20} />
              </div>
              <div>
                <div className="text-sm text-gray-600">Total Photos</div>
                <div className="text-2xl font-bold">{photos.length}</div>
              </div>
            </div>
          </Card>
          <Card className="p-4">
            <div className="text-sm text-gray-600 mb-1">Room Photos</div>
            <div className="text-2xl font-bold text-green-600">
              {photos.filter(p => p.category === 'Room').length}
            </div>
          </Card>
          <Card className="p-4">
            <div className="text-sm text-gray-600 mb-1">Common Areas</div>
            <div className="text-2xl font-bold text-purple-600">
              {photos.filter(p => p.category === 'Common Area').length}
            </div>
          </Card>
          <Card className="p-4">
            <div className="text-sm text-gray-600 mb-1">Other Photos</div>
            <div className="text-2xl font-bold text-amber-600">
              {photos.filter(p => !['Room', 'Common Area'].includes(p.category)).length}
            </div>
          </Card>
        </div>

        <Card className="p-6 mb-6">
          <div className="flex gap-2 flex-wrap">
            {categories.map((cat) => (
              <button 
                key={cat} 
                className="px-3 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 text-sm text-gray-700"
              >
                {cat}
              </button>
            ))}
          </div>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {photos.map((photo) => (
            <Card key={photo.id} className="overflow-hidden group">
              <div className="relative aspect-video">
                <img 
                  src={photo.url} 
                  alt={photo.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                  <button className="p-2 bg-white/20 text-white rounded-lg hover:bg-white/30">
                    <Eye size={18} />
                  </button>
                  <button className="p-2 bg-white/20 text-white rounded-lg hover:bg-white/30">
                    <Trash2 size={18} />
                  </button>
                </div>
              </div>
              <div className="p-3">
                <h4 className="font-semibold text-sm mb-1">{photo.title}</h4>
                <Badge variant="info" className="text-xs">{photo.category}</Badge>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
