import { AuthenticatedNav } from './AuthenticatedNav';
import { Footer } from './Footer';

// Enhanced tenant layout with sidebar - Day 11
export function TenantLayout({ children }) {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Authenticated Navigation for Tenants */}
      <AuthenticatedNav userRole="tenant" />

      {/* Main Content Area */}
      <main className="flex-1">{children}</main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
