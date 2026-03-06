import { useState, useEffect } from 'react';
import { Search, MapPin, DollarSign, Users, Home, RefreshCw, Star, CheckCircle, ArrowRight, Shield, Clock, TrendingUp } from 'lucide-react';
import { Button } from '../../components/ui/Button';
import { Input } from '../../components/ui/Input';
import { Select } from '../../components/ui/Select';
import { Card } from '../../components/ui/Card';

export function LandingPage({ onNavigate }) {
  const [searchLocation, setSearchLocation] = useState('');
  const [budget, setBudget] = useState('');
  const [gender, setGender] = useState('any');
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const sliderImages = [
    {
      url: 'https://images.unsplash.com/photo-1661258412259-fe5a585c1450?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBob3N0ZWwlMjBiZWRyb29tJTIwaW50ZXJpb3J8ZW58MXx8fHwxNzY5OTI0MTI3fDA&ixlib=rb-4.1.0&q=80&w=1080',
      caption: 'Modern Private Rooms'
    },
    {
      url: 'https://images.unsplash.com/photo-1709805619372-40de3f158e83?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkb3JtaXRvcnklMjBiZWRyb29tfGVufDF8fHx8MTc2OTkzOTIxMHww&ixlib=rb-4.1.0&q=80&w=1080',
      caption: 'Comfortable Shared Spaces'
    },
    {
      url: 'https://images.unsplash.com/photo-1758523669073-edfbea249144?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzaGFyZWQlMjBhcGFydG1lbnQlMjBsaXZpbmclMjByb29tfGVufDF8fHx8MTc2OTkzMjA0N3ww&ixlib=rb-4.1.0&q=80&w=1080',
      caption: 'Premium Living Areas'
    }
  ];
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % sliderImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [sliderImages.length]);
  
  const features = [
    {
      icon: Search,
      title: 'Smart PG Search',
      description: 'Find verified PG accommodations with advanced filters and real-time availability.',
      color: 'bg-gradient-to-br from-blue-500 to-blue-600'
    },
    {
      icon: Users,
      title: 'Roommate Matching',
      description: 'Discover compatible roommates based on lifestyle, habits, and preferences.',
      color: 'bg-gradient-to-br from-purple-500 to-purple-600'
    },
    {
      icon: RefreshCw,
      title: 'Easy Roommate Replacement',
      description: 'Replace roommates without shifting PG. Unique mutual approval system.',
      color: 'bg-gradient-to-br from-green-500 to-green-600'
    },
    {
      icon: Star,
      title: 'Verified Reviews',
      description: 'Read honest reviews from real tenants about PG facilities and owners.',
      color: 'bg-gradient-to-br from-amber-500 to-amber-600'
    }
  ];
  
  const stats = [
    { icon: Home, value: '1000+', label: 'Verified PGs' },
    { icon: Users, value: '5000+', label: 'Happy Tenants' },
    { icon: Shield, value: '100%', label: 'Safe & Secure' },
    { icon: TrendingUp, value: '95%', label: 'Success Rate' }
  ];
  
  const steps = [
    {
      step: '1',
      title: 'Search',
      description: 'Browse PGs and roommates in your preferred location',
      icon: Search
    },
    {
      step: '2',
      title: 'Connect',
      description: 'Chat with owners and potential roommates',
      icon: Users
    },
    {
      step: '3',
      title: 'Stay & Review',
      description: 'Move in and share your experience with others',
      icon: Star
    }
  ];
  
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 via-primary-900 to-primary-800 text-white overflow-hidden">
        <div className="absolute inset-0">
          {sliderImages.map((image, index) => (
            <div
              key={index}
              className="absolute inset-0 transition-opacity duration-1000"
              style={{ opacity: currentSlide === index ? 0.15 : 0 }}
            >
              <img 
                src={image.url} 
                alt={image.caption}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-primary-900/90 via-primary-800/85 to-gray-900/90" />
            </div>
          ))}
        </div>
        
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-300 rounded-full blur-3xl animate-pulse" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
                <Clock size={16} />
                <span className="text-sm">Available 24/7 Support</span>
              </div>
              
              <h1 className="mb-6 text-4xl lg:text-5xl xl:text-6xl font-bold">
                Find Your Perfect
                <span className="block bg-gradient-to-r from-blue-300 to-green-300 bg-clip-text text-transparent">
                  PG & Roommate
                </span>
              </h1>
              
              <p className="text-lg lg:text-xl text-blue-100 mb-8 leading-relaxed">
                Discover verified PG accommodations, connect with compatible roommates, and make your stay comfortable with PG Finder.
              </p>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                {stats.map((stat, index) => {
                  const Icon = stat.icon;
                  return (
                    <div key={index} className="text-center">
                      <Icon size={20} className="mx-auto mb-2 text-secondary-400" />
                      <div className="font-bold text-xl">{stat.value}</div>
                      <div className="text-xs text-blue-200">{stat.label}</div>
                    </div>
                  );
                })}
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="bg-sky-500 text-white hover:bg-sky-600 shadow-xl"
                  onClick={() => onNavigate('find-pg')}
                >
                  <Search size={20} className="mr-2" />
                  Browse PG Listings
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-2 border-white text-white hover:bg-white/10 bg-transparent"
                  onClick={() => onNavigate('find-roommate')}
                >
                  <Users size={20} className="mr-2" />
                  Find Roommates
                </Button>
              </div>
            </div>
            
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <div className="aspect-[4/3] relative">
                  {sliderImages.map((image, index) => (
                    <div
                      key={index}
                      className="absolute inset-0 transition-opacity duration-800"
                      style={{ opacity: currentSlide === index ? 1 : 0 }}
                    >
                      <img 
                        src={image.url} 
                        alt={image.caption}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                      <div className="absolute bottom-6 left-6 right-6">
                        <h3 className="text-white text-2xl font-bold">
                          {image.caption}
                        </h3>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
                  {sliderImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`h-1.5 rounded-full transition-all ${
                        currentSlide === index ? 'bg-white w-8' : 'bg-white/50 w-1.5'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          <div className="p-6 max-w-5xl mx-auto mt-12 bg-white/10 backdrop-blur-md rounded-2xl shadow-2xl border border-white/20">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="md:col-span-2">
                <Input
                  placeholder="Enter city or locality"
                  value={searchLocation}
                  onChange={(e) => setSearchLocation(e.target.value)}
                  icon={<MapPin size={18} className="text-gray-700" />}
                  className="bg-white/90 text-gray-900 placeholder-gray-500 border-white/30"
                />
              </div>
              <div>
                <Input
                  placeholder="Max budget"
                  value={budget}
                  onChange={(e) => setBudget(e.target.value)}
                  icon={<DollarSign size={18} className="text-gray-700" />}
                  className="bg-white/90 text-gray-900 placeholder-gray-500 border-white/30"
                />
              </div>
              <div>
                <Select
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                  options={[
                    { value: 'any', label: 'Any Gender' },
                    { value: 'male', label: 'Male' },
                    { value: 'female', label: 'Female' },
                    { value: 'unisex', label: 'Unisex' }
                  ]}
                  className="bg-white/90 text-gray-900 border-white/30"
                />
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 mt-6">
              <Button 
                size="lg" 
                className="flex-1 bg-sky-500 text-white hover:bg-sky-600"
                onClick={() => onNavigate('find-pg')}
              >
                <Search size={20} className="mr-2" />
                Search PG
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="flex-1 border-2 border-white text-white hover:bg-white/10 bg-transparent"
                onClick={() => onNavigate('dashboard')}
              >
                <Home size={20} className="mr-2" />
                Post Your Room
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="mb-4 text-3xl font-bold">Why Choose PG Finder?</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We make finding your perfect stay simple, safe, and stress-free with our unique features.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-full">
                  <div className={`w-14 h-14 ${feature.color} rounded-xl flex items-center justify-center mb-4 shadow-lg`}>
                    <Icon className="text-white" size={26} />
                  </div>
                  <h4 className="mb-3 font-semibold text-lg">{feature.title}</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>
      
      {/* How It Works */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-primary-900 to-primary-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-300 rounded-full blur-3xl animate-pulse" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="mb-4 text-white text-3xl font-bold">How It Works</h2>
            <p className="text-lg text-blue-100">
              Get started in three simple steps
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {steps.map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 hover:-translate-y-2 h-full border border-white/20">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center text-3xl font-bold mb-6 shadow-xl text-white">
                      {item.step}
                    </div>
                    <Icon className="mb-4 text-white" size={40} />
                    <h4 className="mb-3 text-white text-xl font-semibold">{item.title}</h4>
                    <p className="text-blue-100 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      
      {/* Reviews */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="mb-4 text-3xl font-bold">What Our Users Say</h2>
            <p className="text-lg text-gray-600">
              Real experiences from real tenants
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Priya Sharma',
                role: 'Software Engineer',
                rating: 5,
                text: 'Found my perfect PG in just 2 days! The roommate matching feature is amazing. Highly recommended!',
                image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop'
              },
              {
                name: 'Rahul Kumar',
                role: 'MBA Student',
                text: 'Best platform for finding PG accommodations. All listings are verified and the owners are very responsive.',
                rating: 5,
                image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop'
              },
              {
                name: 'Anjali Desai',
                role: 'Marketing Manager',
                rating: 5,
                text: 'The roommate replacement feature saved me so much hassle. No need to shift PG, just found a new compatible roommate!',
                image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop'
              }
            ].map((review, index) => (
              <Card key={index} className="p-6 hover:shadow-xl transition-shadow h-full">
                <div className="flex items-center gap-4 mb-4">
                  <img 
                    src={review.image} 
                    alt={review.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900">{review.name}</h4>
                    <p className="text-sm text-gray-600">{review.role}</p>
                  </div>
                </div>
                <div className="flex gap-1 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} size={18} className="fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-gray-700 leading-relaxed">"{review.text}"</p>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
