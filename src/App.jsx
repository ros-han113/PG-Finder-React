import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import { Navigation } from './components/layout/Navigation';
import { AuthenticatedNav } from './components/layout/AuthenticatedNav';
import { Footer } from './components/layout/Footer';

// Enhanced app with lazy loading - Day 10// Public Pages
import { LandingPage } from './pages/public/Landing';
import { PGListingPage } from './pages/public/PGListing';
import { PGDetailsPage } from './pages/public/PGDetails';
import { ReviewsPage } from './pages/public/Reviews';

// Auth Pages
import { LoginPage } from './pages/auth/Login';
import { RegisterPage } from './pages/auth/Register';
import { AdminLogin } from './pages/auth/AdminLogin';
import { ChangePassword } from './pages/auth/ChangePassword';
import { ForgotPassword } from './pages/auth/ForgotPassword';

// Tenant Pages
import { RoommateFinder } from './pages/tenant/RoommateFinder';
import { RoommateReplacement } from './pages/tenant/RoommateReplacement';
import { Notifications } from './pages/tenant/Notifications';
import { TenantProfile } from './pages/tenant/TenantProfile';
import { TenantSettings } from './pages/tenant/TenantSettings';
import { Bookings } from './pages/tenant/Bookings';
import { SavedPGs } from './pages/tenant/SavedPGs';
import { Messages } from './pages/tenant/Messages';
import { BookingPage } from './pages/tenant/BookingPage';
import { PaymentPage } from './pages/tenant/PaymentPage';
import { BookingConfirmation } from './pages/tenant/BookingConfirmation';
import { Help } from './pages/tenant/Help';

// Owner Pages
import { OwnerDashboard } from './pages/owner/OwnerDashboard';
import { ManagePG } from './pages/owner/ManagePG';
import { ManageRooms } from './pages/owner/ManageRooms';
import { AddPG } from './pages/owner/AddPG';
import { InquiriesPage } from './pages/owner/Inquiries';
import { OwnerReviews } from './pages/owner/OwnerReviews';
import { ListingsPage } from './pages/owner/Listings';
import { PGPhotos } from './pages/owner/PGPhotos';
import { OwnerRequests } from './pages/owner/OwnerRequests';
import { OwnerBookings } from './pages/owner/OwnerBookings';
import { OwnerProfile } from './pages/owner/OwnerProfile';
import { OwnerSettings } from './pages/owner/OwnerSettings';
import { Earnings } from './pages/owner/Earnings';

// Admin Pages
import { AdminDashboard } from './pages/admin/AdminDashboard';
import { UsersPage } from './pages/admin/Users';
import { ListingsPage as AdminListings } from './pages/admin/Listings';
import { Approvals } from './pages/admin/Approvals';
import { Reviews as AdminReviews } from './pages/admin/Reviews';
import { Reports } from './pages/admin/Reports';
import { Settings } from './pages/admin/Settings';
import { InquiriesPage as AdminInquiries } from './pages/admin/Inquiries';
import { AdminLayout } from './components/layout/AdminLayout';
import { OwnerLayout } from './components/layout/OwnerLayout';
import { TenantLayout } from './components/layout/TenantLayout';

function AppContent() {
  const navigate = useNavigate();
  const [selectedPG, setSelectedPG] = useState(null);
  const [user, setUser] = useState(null);
  
  // Check for existing user session on mount
  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser));
      } catch (e) {
        localStorage.removeItem('user');
      }
    }
  }, []);
  
  const handleNavigate = (page, data) => {
    if (data) {
      setSelectedPG(data);
    }
    navigate(`/${page === 'home' ? '' : page}`);
  };
  
  const handleLogin = (role, userData = {}) => {
    const userInfo = { role, ...userData };
    localStorage.setItem('user', JSON.stringify(userInfo));
    setUser(userInfo);
    
    if (role === 'owner') {
      navigate('/owner/dashboard');
    } else if (role === 'admin') {
      navigate('/admin/dashboard');
    } else {
      navigate('/'); // Tenant goes to home page
    }
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Routes>
        {/* Auth Routes - No Navigation/Footer */}
        <Route path="/login" element={<LoginPage onNavigate={handleNavigate} onLogin={handleLogin} />} />
        <Route path="/register" element={<RegisterPage onNavigate={handleNavigate} />} />
        <Route path="/admin-login" element={<AdminLogin onLogin={handleLogin} />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/change-password" element={<ChangePassword />} />
        
        {/* Admin Routes - With AdminLayout (no public nav/footer) */}
        <Route path="/admin/*" element={
          <AdminLayout>
            <Routes>
              <Route path="/dashboard" element={<AdminDashboard />} />
              <Route path="/analytics" element={<AdminDashboard />} />
              <Route path="/users" element={<UsersPage />} />
              <Route path="/listings" element={<AdminListings />} />
              <Route path="/approvals" element={<Approvals />} />
              <Route path="/bookings" element={<AdminDashboard />} />
              <Route path="/inquiries" element={<AdminInquiries />} />
              <Route path="/reviews" element={<AdminReviews />} />
              <Route path="/reports" element={<Reports />} />
              <Route path="/payments" element={<AdminDashboard />} />
              <Route path="/notifications" element={<AdminDashboard />} />
              <Route path="/settings" element={<Settings />} />
            </Routes>
          </AdminLayout>
        } />
        
        {/* Tenant Routes - With TenantLayout (includes authenticated nav/footer) */}
        <Route path="/tenant/*" element={
          <TenantLayout>
            <Routes>
              <Route path="/roommate-finder" element={<RoommateFinder onNavigate={handleNavigate} />} />
              <Route path="/roommate-replacement" element={<RoommateReplacement />} />
              <Route path="/saved-pgs" element={<SavedPGs />} />
              <Route path="/bookings" element={<Bookings />} />
              <Route path="/messages" element={<Messages />} />
              <Route path="/notifications" element={<Notifications />} />
              <Route path="/profile" element={<TenantProfile />} />
              <Route path="/settings" element={<TenantSettings />} />
            </Routes>
          </TenantLayout>
        } />
        
        {/* Owner Routes - With OwnerLayout (includes public nav/footer) */}
        <Route path="/owner/*" element={
          <OwnerLayout>
            <Routes>
              <Route path="/dashboard" element={<OwnerDashboard />} />
              <Route path="/listings" element={<ListingsPage />} />
              <Route path="/add-pg" element={<AddPG />} />
              <Route path="/manage-pg" element={<ManagePG />} />
              <Route path="/manage-rooms" element={<ManageRooms />} />
              <Route path="/bookings" element={<OwnerBookings />} />
              <Route path="/inquiries" element={<InquiriesPage />} />
              <Route path="/reviews" element={<OwnerReviews />} />
              <Route path="/photos" element={<PGPhotos />} />
              <Route path="/earnings" element={<Earnings />} />
              <Route path="/requests" element={<OwnerRequests />} />
              <Route path="/profile" element={<OwnerProfile />} />
              <Route path="/settings" element={<OwnerSettings />} />
            </Routes>
          </OwnerLayout>
        } />
        
        {/* Public Routes - With Navigation/Footer (or AuthenticatedNav for logged-in tenants) */}
        <Route path="/*" element={
          <>
            {user && user.role === 'tenant' ? (
              <AuthenticatedNav userRole="tenant" />
            ) : (
              <Navigation onNavigate={handleNavigate} />
            )}
            <main className="flex-1">
              <Routes>
                <Route path="/" element={<LandingPage onNavigate={handleNavigate} />} />
                <Route path="/home" element={<LandingPage onNavigate={handleNavigate} />} />
                <Route path="/find-pg" element={<PGListingPage onNavigate={handleNavigate} />} />
                <Route path="/pg-details" element={
                  selectedPG ? <PGDetailsPage pgData={selectedPG} onNavigate={handleNavigate} /> : <Navigate to="/find-pg" />
                } />
                <Route path="/find-roommate" element={<RoommateFinder onNavigate={handleNavigate} />} />
                <Route path="/reviews" element={<ReviewsPage />} />
                <Route path="/booking" element={<BookingPage />} />
                <Route path="/payment" element={<PaymentPage />} />
                <Route path="/booking-confirmation" element={<BookingConfirmation />} />
                <Route path="/help" element={<Help />} />
                <Route path="/dashboard" element={<Navigate to="/owner/dashboard" />} />
                <Route path="*" element={<Navigate to="/" />} />
              </Routes>
            </main>
            <Footer />
          </>
        } />
      </Routes>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <AppContent />
      </AuthProvider>
    </BrowserRouter>
  );
}
