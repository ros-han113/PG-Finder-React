import { Routes, Route } from 'react-router-dom';
import { TenantLayout } from '../components/layout/TenantLayout';
import { TenantDashboard } from '../pages/tenant/TenantDashboard';
import { SearchPG } from '../pages/tenant/SearchPG';
import { SavedPG } from '../pages/tenant/SavedPG';
import { Bookings } from '../pages/tenant/Bookings';
import { RoommateFinder } from '../pages/tenant/RoommateFinder';
import { RoommateReplacement } from '../pages/tenant/RoommateReplacement';
import { TenantProfile } from '../pages/tenant/TenantProfile';
import { TenantSettings } from '../pages/tenant/TenantSettings';
import { Notifications } from '../pages/tenant/Notifications';

export function TenantRoutes() {
  return (
    <TenantLayout>
      <Routes>
        <Route path="/dashboard" element={<TenantDashboard />} />
        <Route path="/search-pg" element={<SearchPG />} />
        <Route path="/saved-pg" element={<SavedPG />} />
        <Route path="/bookings" element={<Bookings />} />
        <Route path="/roommate-finder" element={<RoommateFinder />} />
        <Route path="/roommate-replacement" element={<RoommateReplacement />} />
        <Route path="/profile" element={<TenantProfile />} />
        <Route path="/settings" element={<TenantSettings />} />
        <Route path="/notifications" element={<Notifications />} />
      </Routes>
    </TenantLayout>
  );
}
