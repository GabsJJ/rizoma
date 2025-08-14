import { AppSidebar } from "@/components/sidebar/dashboard-sidebar";
import { DashboardNavbar } from "@/components/dashboard-navbar";
import React from "react";

export default async function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <AppSidebar />
      <main className="@container/main flex flex-1 flex-col gap-2">
        <DashboardNavbar />
        {children}
      </main>
    </>
  );
}
