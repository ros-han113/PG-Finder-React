import React, { useState } from 'react';
import { Mail, Lock, Building2, Eye, EyeOff, Shield, Users, CheckCircle, ArrowRight } from 'lucide-react';
import { Button } from '../../components/ui/Button';
import { Input } from '../../components/ui/Input';

// Enhanced login with remember me feature - Day 7
export function LoginPage({ onNavigate, onLogin }) {
  const [showPassword, setShowPassword] = useState(false);
  const [userType, setUserType] = useState('tenant'); // 'tenant' or 'owner'
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate login - in real app, this would validate credentials
    const userData = {
      name: 'John Doe',
      email: formData.email
    };
    
    if (onLogin) {
      onLogin(userType, userData);
    } else {
      onNavigate('home');
    }
  };
  
  return (
    <div className="min-h-screen flex">
      {/* Left Side - Gradient Brand Section */}
      <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-500 p-12 flex-col justify-between text-white relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-20 left-20 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-blue-300/20 rounded-full blur-3xl" />
        
        <div className="relative z-10">
          {/* Logo */}
          <div className="flex items-center gap-3 mb-16">
            <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
              <Building2 size={24} />
            </div>
            <div>
              <div className="text-2xl font-bold">PG Finder</div>
              <div className="text-sm text-blue-100">Your 24/7 PG Discovery Partner</div>
            </div>
          </div>
          
          {/* Features */}
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center flex-shrink-0">
                <Shield size={24} />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-1">100% Verified Listings</h3>
                <p className="text-blue-100 text-sm">All PG accommodations are verified for your safety and peace of mind.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center flex-shrink-0">
                <Users size={24} />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-1">Smart Roommate Matching</h3>
                <p className="text-blue-100 text-sm">Find compatible roommates based on your lifestyle and preferences.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center flex-shrink-0">
                <CheckCircle size={24} />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-1">Hassle-Free Experience</h3>
                <p className="text-blue-100 text-sm">Easy booking process with transparent pricing and instant confirmations.</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom Stats */}
        <div className="relative z-10 grid grid-cols-3 gap-6">
          <div>
            <div className="text-3xl font-bold">1000+</div>
            <div className="text-sm text-blue-100">Verified PGs</div>
          </div>
          <div>
            <div className="text-3xl font-bold">5000+</div>
            <div className="text-sm text-blue-100">Happy Tenants</div>
          </div>
          <div>
            <div className="text-3xl font-bold">95%</div>
            <div className="text-sm text-blue-100">Success Rate</div>
          </div>
        </div>
      </div>
      
      {/* Right Side - Login Form */}
      <div className="flex-1 flex items-center justify-center p-8 bg-gray-50">
        <div className="w-full max-w-md">
          <div className="mb-8">
            <h2 className="mb-2">Welcome Back!</h2>
            <p className="text-gray-600">Sign in to continue to PG Finder</p>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">
                I am a
              </label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setUserType('tenant')}
                  className={`px-4 py-3 rounded-lg border-2 transition-all ${
                    userType === 'tenant'
                      ? 'border-primary-600 bg-primary-50 text-primary-700'
                      : 'border-gray-300 hover:border-gray-400'
                  }`}
                >
                  <Users size={20} className="mx-auto mb-1" />
                  <div className="text-sm font-medium">Tenant</div>
                </button>
                <button
                  type="button"
                  onClick={() => setUserType('owner')}
                  className={`px-4 py-3 rounded-lg border-2 transition-all ${
                    userType === 'owner'
                      ? 'border-primary-600 bg-primary-50 text-primary-700'
                      : 'border-gray-300 hover:border-gray-400'
                  }`}
                >
                  <Building2 size={20} className="mx-auto mb-1" />
                  <div className="text-sm font-medium">PG Owner</div>
                </button>
              </div>
            </div>
            <Input
              label="Email Address"
              type="email"
              placeholder="your@email.com"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              icon={<Mail size={18} className="text-gray-500" />}
              required
            />
            
            <div className="relative">
              <Input
                label="Password"
                type={showPassword ? 'text' : 'password'}
                placeholder="Enter your password"
                value={formData.password}
                onChange={(e) => setFormData({...formData, password: e.target.value})}
                icon={<Lock size={18} className="text-gray-500" />}
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-[38px] text-gray-500 hover:text-gray-700"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
            
            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2">
                <input type="checkbox" className="rounded border-gray-300" />
                <span className="text-sm text-gray-600">Remember me</span>
              </label>
              <button 
                type="button" 
                onClick={() => onNavigate ? onNavigate('forgot-password') : window.location.href = '/forgot-password'}
                className="text-sm text-primary-600 hover:text-primary-700"
              >
                Forgot password?
              </button>
            </div>
            
            <Button type="submit" className="w-full" size="lg">
              Sign In
              <ArrowRight size={18} className="ml-2" />
            </Button>
          </form>
          
          <div className="mt-6 text-center">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-gray-50 text-gray-500">Or continue with</span>
              </div>
            </div>
            
            <div className="mt-6 grid grid-cols-2 gap-3">
              <Button variant="outline" type="button">
                <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                  <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
                Google
              </Button>
              <Button variant="outline" type="button">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
                Facebook
              </Button>
            </div>
          </div>
          
          <p className="mt-8 text-center text-sm text-gray-600">
            Don't have an account?{' '}
            <button
              type="button"
              onClick={() => onNavigate('register')}
              className="text-primary-600 hover:text-primary-700 font-semibold"
            >
              Sign up now
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}
