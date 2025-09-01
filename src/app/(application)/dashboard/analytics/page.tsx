'use client'

import { ChartAreaInteractive } from '@/components/chart-area-interactive'
import { SectionCards } from '@/components/section-cards'
import React from 'react'

export default function AnalyticsPage() {
  return (
    <div className="flex flex-col gap-4 md:gap-6 ">
      <SectionCards />
      <ChartAreaInteractive />
    </div>
  )
}
