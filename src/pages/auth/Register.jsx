import React, { useState } from 'react';
import { Mail, Lock, User, Phone, Building2, Eye, EyeOff, Shield, Star, TrendingUp, ArrowRight } from 'lucide-react';
import { Button } from '../../components/ui/Button';
import { Input } from '../../components/ui/Input';



export function RegisterPage({ onNavigate }) {
  const [userType, setUserType] = useState('tenant');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [agreeToTerms, setAgreeToTerms] = useState(false);
  
  const handleRegister = () => {
    if (!agreeToTerms) {
      alert('Please agree to the Terms of Service and Privacy Policy');
      return;
    }
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match');
      return;
    }
    // Mock registration
    alert(`Registration successful as ${userType}!`);
    onNavigate('home');
  };
  
  return (
    <div className="min-h-screen flex">
      {/* Left Side - Gradient Brand Section */}
      <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-indigo-600 via-purple-600 to-orange-500 p-12 flex-col justify-between text-white relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-20 left-20 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-orange-300/20 rounded-full blur-3xl" />
        
        <div className="relative z-10">
          {/* Logo */}
          <div className="flex items-center gap-3 mb-16">
            <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center shadow-xl">
              <Building2 className="text-white" size={32} />
            </div>
            <div>
              <div className="text-3xl font-bold">PG Finder</div>
              <div className="text-sm text-purple-100">Join Our Growing Community</div>
            </div>
          </div>
          
          {/* Benefits */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold mb-8">Why Join PG Finder?</h3>
            
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center flex-shrink-0">
                <Shield size={24} />
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-1">100% Verified Listings</h4>
                <p className="text-purple-100 text-sm">All PG accommodations are verified for safety and authenticity</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center flex-shrink-0">
                <Star size={24} />
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-1">Smart Matching Algorithm</h4>
                <p className="text-purple-100 text-sm">Find roommates who match your lifestyle and preferences perfectly</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center flex-shrink-0">
                <TrendingUp size={24} />
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-1">Best Market Rates</h4>
                <p className="text-purple-100 text-sm">Compare prices and amenities to get the best deal in your area</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom Quote */}
        <div className="relative z-10">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
            <div className="flex gap-1 mb-3">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={18} fill="currentColor" />
              ))}
            </div>
            <p className="text-lg mb-3 font-medium">
              "PG Finder made finding my perfect accommodation so easy! The roommate matching feature is a game-changer."
            </p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center font-bold">
                AR
              </div>
              <div>
                <div className="font-semibold">Arjun Reddy</div>
                <div className="text-sm text-purple-100">Software Engineer, Bangalore</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Right Side - Register Form */}
      <div className="flex-1 flex items-center justify-center p-8 bg-gray-50 overflow-y-auto">
        <div className="w-full max-w-md my-8">
          {/* Mobile Logo */}
          <div className="lg:hidden flex items-center gap-3 mb-8">
            <div className="w-12 h-12 bg-gradient-to-br from-primary-600 to-primary-800 rounded-xl flex items-center justify-center">
              <Building2 className="text-white" size={24} />
            </div>
            <div>
              <div className="text-2xl font-bold text-gray-900">PG Finder</div>
              <div className="text-sm text-gray-500">Smart PG Discovery</div>
            </div>
          </div>
          
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h2 className="mb-2">Create Account</h2>
            <p className="text-gray-600 mb-6">Join thousands finding their perfect stay</p>
            
            {/* User Type Selection */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-3">
                I am a
              </label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  onClick={() => setUserType('tenant')}
                  className={`p-4 rounded-xl border-2 transition-all ${
                    userType === 'tenant'
                      ? 'border-primary-600 bg-primary-50 shadow-md'
                      : 'border-gray-200 hover:border-gray-300 bg-white'
                  }`}
                >
                  <User className={`mx-auto mb-2 ${userType === 'tenant' ? 'text-primary-600' : 'text-gray-400'}`} size={24} />
                  <div className={`font-semibold text-sm ${userType === 'tenant' ? 'text-primary-700' : 'text-gray-700'}`}>
                    Tenant
                  </div>
                  <div className="text-xs text-gray-500 mt-1">Looking for PG</div>
                </button>
                <button
                  onClick={() => setUserType('owner')}
                  className={`p-4 rounded-xl border-2 transition-all ${
                    userType === 'owner'
                      ? 'border-primary-600 bg-primary-50 shadow-md'
                      : 'border-gray-200 hover:border-gray-300 bg-white'
                  }`}
                >
                  <Building2 className={`mx-auto mb-2 ${userType === 'owner' ? 'text-primary-600' : 'text-gray-400'}`} size={24} />
                  <div className={`font-semibold text-sm ${userType === 'owner' ? 'text-primary-700' : 'text-gray-700'}`}>
                    PG Owner
                  </div>
                  <div className="text-xs text-gray-500 mt-1">List your PG</div>
                </button>
              </div>
            </div>
            
            <div className="space-y-4">
              <Input
                label="Full Name"
                placeholder="Enter your name"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                icon={<User size={18} />}
              />
              
              <Input
                label="Email Address"
                type="email"
                placeholder="your@email.com"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                icon={<Mail size={18} />}
              />
              
              <Input
                label="Phone Number"
                type="tel"
                placeholder="+91 98765 43210"
                value={formData.phone}
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
                icon={<Phone size={18} />}
              />
              
              <div className="relative">
                <Input
                  label="Password"
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Create a password"
                  value={formData.password}
                  onChange={(e) => setFormData({...formData, password: e.target.value})}
                  icon={<Lock size={18} />}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-[38px] text-gray-400 hover:text-gray-600 transition-colors"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
              
              <Input
                label="Confirm Password"
                type="password"
                placeholder="Confirm your password"
                value={formData.confirmPassword}
                onChange={(e) => setFormData({...formData, confirmPassword: e.target.value})}
                icon={<Lock size={18} />}
              />
              
              <label className="flex items-start gap-2 cursor-pointer text-sm">
                <input 
                  type="checkbox" 
                  checked={agreeToTerms}
                  onChange={(e) => setAgreeToTerms(e.target.checked)}
                  className="w-4 h-4 mt-0.5 accent-primary-600 rounded" 
                />
                <span className="text-gray-700">
                  I agree to the{' '}
                  <button className="text-primary-600 hover:text-primary-700 font-semibold">
                    Terms of Service
                  </button>{' '}
                  and{' '}
                  <button className="text-primary-600 hover:text-primary-700 font-semibold">
                    Privacy Policy
                  </button>
                </span>
              </label>
              
              <Button 
                className="w-full shadow-lg" 
                size="lg" 
                onClick={handleRegister}
              >
                Create Account
                <ArrowRight size={18} className="ml-2" />
              </Button>
              
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300" />
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-3 bg-white text-gray-500">Or sign up with</span>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-3">
                <Button variant="outline" className="w-full">
                  <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                    <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                    <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                    <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                    <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                  </svg>
                  Google
                </Button>
                <Button variant="outline" className="w-full">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                  Facebook
                </Button>
              </div>
            </div>
          </div>
          
          <p className="text-center text-gray-600 mt-6">
            Already have an account?{' '}
            <button
              onClick={() => onNavigate('login')}
              className="text-primary-600 hover:text-primary-700 font-bold transition-colors"
            >
              Sign In
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}





