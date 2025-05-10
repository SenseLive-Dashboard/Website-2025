// app/admin/layout.tsx
"use client"; // REQUIRED: SessionProvider is a client component

import type React from "react";
import { SessionProvider } from "next-auth/react";
import AdminHeader from "@/components/admin-header";

// Optional: You might want a different header/sidebar for the admin area
// import AdminHeader from '@/components/admin-header';
// import AdminSidebar from '@/components/admin-sidebar';

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // Wrap the children of the admin section with SessionProvider
    <SessionProvider>
      {/* You can add admin-specific structural elements here if needed */}
      {/* Example: <AdminHeader /> */}
      <AdminHeader />
      <div className="admin-container">
        {/* Example: <AdminSidebar /> */}
        <main className="admin-main-content">
          {children} {/* Render the specific admin page */}
        </main>
      </div>
    </SessionProvider>
  );
}