'use client'

import React from 'react'
import { DataTable } from '@/components/data-table'
import { useProducts } from '@/hooks/useProducts'

export default function ProductsPage() {
  const { data, isLoading, error } = useProducts()

  if (isLoading)
    return (
      <div className="flex w-full h-full justify-center items-center">
        Loading...
      </div>
    )

  if (error)
    return (
      <div className="flex w-full h-full justify-center items-center">
        Error while loading: {error.message}
      </div>
    )

  return (
    <div className="flex flex-col gap-4 md:gap-6 ">
      <DataTable data={data} />
    </div>
  )
}
