import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Home, Search, Users, Heart, Calendar, MessageCircle, Bell, User, Menu, X, Building2, LogOut, Settings, HelpCircle } from 'lucide-react';
import { useAuth } from '../../hooks/useAuth';

export function AuthenticatedNav({ userRole = 'tenant' }) {
  const navigate = useNavigate();
  const location = useLocation();
  const { logout } = useAuth();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [profileMenuOpen, setProfileMenuOpen] = useState(false);
  
  const currentPath = location.pathname;

  // Close profile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (profileMenuOpen && !event.target.closest('.profile-dropdown')) {
        setProfileMenuOpen(false);
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [profileMenuOpen]);
  
  // Tenant/User Navigation Items
  const tenantNavItems = [
    { id: 'home', label: 'Home', icon: Home, path: '/' },
    { id: 'search-pg', label: 'Search PG', icon: Search, path: '/find-pg' },
    { id: 'roommate-finder', label: 'Roommate Finder', icon: Users, path: '/tenant/roommate-finder' },
    { id: 'saved-pgs', label: 'Saved PGs', icon: Heart, path: '/tenant/saved-pgs' },
    { id: 'my-bookings', label: 'My Bookings', icon: Calendar, path: '/tenant/bookings' },
    { id: 'messages', label: 'Messages', icon: MessageCircle, path: '/tenant/messages' }
  ];

  // Owner Navigation Items (keep existing)
  const ownerNavItems = [
    { id: 'home', label: 'Home', icon: Home, path: '/' },
    { id: 'dashboard', label: 'Dashboard', icon: Building2, path: '/owner/dashboard' },
    { id: 'search-pg', label: 'Find PG', icon: Search, path: '/find-pg' },
    { id: 'roommate', label: 'Find Roommate', icon: Users, path: '/find-roommate' }
  ];
  
  const navItems = userRole === 'tenant' ? tenantNavItems : ownerNavItems;
  
  const handleNavClick = (path) => {
    navigate(path);
    setMobileMenuOpen(false);
  };
  
  const handleLogout = () => {
    console.log('Logout button clicked');
    // Clear all storage
    localStorage.clear();
    sessionStorage.clear();
    // Force redirect to home
    window.location.href = '/';
  };
  
  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-40 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div 
            className="flex items-center gap-3 cursor-pointer group"
            onClick={() => navigate('/')}
          >
            <div className="w-10 h-10 bg-gradient-to-br from-primary-600 to-primary-800 rounded-xl flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow">
              <Building2 className="text-white" size={22} />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold text-gray-900 leading-tight">PG Finder</span>
              <span className="text-[10px] text-gray-500 leading-tight">Smart PG Discovery</span>
            </div>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = currentPath === item.path;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.path)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                    isActive
                      ? 'bg-primary-50 text-primary-700'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  <Icon size={18} />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </div>
          
          {/* Desktop Actions - Authenticated */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={() => navigate(`/${userRole}/notifications`)}
              className="p-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors relative"
              title="Notifications"
            >
              <Bell size={20} />
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>
            
            <div className="relative profile-dropdown">
              <button
                onClick={() => setProfileMenuOpen(!profileMenuOpen)}
                className="flex items-center gap-3 px-3 py-2 hover:bg-gray-100 rounded-lg transition-all"
              >
                <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-blue-700 rounded-full flex items-center justify-center">
                  <User size={18} className="text-white" />
                </div>
                <div className="text-left">
                  <div className="text-sm font-semibold leading-tight text-gray-900">John Doe</div>
                  <div className="text-xs text-gray-500 leading-tight capitalize">{userRole}</div>
                </div>
              </button>
              
              {profileMenuOpen && (
                <div className="absolute right-0 mt-2 w-56 bg-white rounded-xl shadow-xl border border-gray-200 py-2 z-50">
                  <div className="px-4 py-3 border-b border-gray-100">
                    <p className="text-sm font-semibold text-gray-900">John Doe</p>
                    <p className="text-xs text-gray-500">john.doe@example.com</p>
                  </div>
                  <button
                    onClick={() => {
                      setProfileMenuOpen(false);
                      navigate(`/${userRole}/profile`);
                    }}
                    className="w-full text-left px-4 py-2.5 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 flex items-center gap-3 transition-colors"
                  >
                    <User size={16} className="text-blue-600" />
                    <span>My Profile</span>
                  </button>
                  <button
                    onClick={() => {
                      setProfileMenuOpen(false);
                      navigate(`/${userRole}/settings`);
                    }}
                    className="w-full text-left px-4 py-2.5 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 flex items-center gap-3 transition-colors"
                  >
                    <Settings size={16} className="text-blue-600" />
                    <span>Settings</span>
                  </button>
                  <button
                    onClick={() => {
                      setProfileMenuOpen(false);
                      navigate('/help');
                    }}
                    className="w-full text-left px-4 py-2.5 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 flex items-center gap-3 transition-colors"
                  >
                    <HelpCircle size={16} className="text-blue-600" />
                    <span>Help & Support</span>
                  </button>
                  <hr className="my-2 border-gray-100" />
                  <button
                    onClick={() => {
                      setProfileMenuOpen(false);
                      handleLogout();
                    }}
                    className="w-full text-left px-4 py-2.5 text-sm text-gray-700 hover:bg-red-50 hover:text-red-600 flex items-center gap-3 transition-colors"
                  >
                    <LogOut size={16} className="text-red-600" />
                    <span>Logout</span>
                  </button>
                </div>
              )}
            </div>
          </div>
          
          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700 hover:text-gray-900"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        
        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col gap-2">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = currentPath === item.path;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.path)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                      isActive
                        ? 'bg-primary-50 text-primary-700'
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    <Icon size={18} />
                    <span>{item.label}</span>
                  </button>
                );
              })}
              
              <div className="border-t border-gray-200 mt-2 pt-2">
                <button
                  onClick={() => {
                    navigate(`/${userRole}/notifications`);
                    setMobileMenuOpen(false);
                  }}
                  className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg w-full"
                >
                  <Bell size={18} />
                  <span>Notifications</span>
                </button>
                <button
                  onClick={() => {
                    navigate(`/${userRole}/profile`);
                    setMobileMenuOpen(false);
                  }}
                  className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg w-full"
                >
                  <User size={18} />
                  <span>Profile</span>
                </button>
                <button
                  onClick={() => {
                    navigate(`/${userRole}/settings`);
                    setMobileMenuOpen(false);
                  }}
                  className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg w-full"
                >
                  <Settings size={18} />
                  <span>Settings</span>
                </button>
                <button
                  onClick={() => {
                    navigate('/help');
                    setMobileMenuOpen(false);
                  }}
                  className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg w-full"
                >
                  <HelpCircle size={18} />
                  <span>Help & Support</span>
                </button>
                <button
                  onClick={handleLogout}
                  className="flex items-center gap-2 px-4 py-2 text-red-600 hover:bg-red-50 rounded-lg w-full mt-2"
                >
                  <LogOut size={18} />
                  <span>Logout</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
