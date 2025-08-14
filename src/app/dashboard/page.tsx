"use client";

import CardList from "@/components/card-list";
import { DashboardAreaChart } from "@/components/dashboard-area-chart";
import { DashboardBarChart } from "@/components/dashboard-bar-chart";
import { DashboardPieChart } from "@/components/dashboard-pie-chart";

export default function DashboardPage() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-4 gap-4 md:gap-5 md:px-5 px-4 py-4 md:py-6">
      <div className="bg-primary-foreground p-4 rounded-lg lg:col-span-2 xl:col-span-1 2xl:col-span-2">
        <DashboardBarChart />
      </div>
      <div className="bg-primary-foreground p-4 rounded-lg">
        <CardList title="Latest Transactions" />
      </div>
      <div className="bg-primary-foreground p-4 rounded-lg">
        <DashboardPieChart />
      </div>
      <div className="bg-primary-foreground p-4 rounded-lg">Test</div>
      <div className="bg-primary-foreground p-4 rounded-lg lg:col-span-2">
        <DashboardAreaChart />
      </div>
      <div className="bg-primary-foreground p-4 rounded-lg">
        <CardList title="Popular Content" />
      </div>
    </div>
  );
}
