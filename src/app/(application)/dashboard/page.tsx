'use client'

import CardList from '@/components/card-list'
import { DashboardAreaChart } from '@/components/dashboard-area-chart'
import { DashboardBarChart } from '@/components/dashboard-bar-chart'
import { DashboardPieChart } from '@/components/dashboard-pie-chart'
import TodoList from '@/components/todo-list'

export default function DashboardPage() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-4 gap-4 md:gap-5">
      <div className="lg:col-span-2 xl:col-span-1 2xl:col-span-2">
        <DashboardBarChart />
      </div>
      <div>
        <CardList title="Latest Transactions" />
      </div>
      <div>
        <DashboardPieChart />
      </div>
      <div>
        <TodoList />
      </div>
      <div className="lg:col-span-2">
        <DashboardAreaChart />
      </div>
      <div>
        <CardList title="Popular Content" />
      </div>
    </div>
  )
}
