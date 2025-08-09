"use client"

import React from "react";

import { DataTable } from "@/components/data-table";

//import dataMock from ".././data.json";
import { useProducts } from "@/hooks/useProducts";

export default function ProductsPage() {
  const { data, isLoading, error } = useProducts();

  if (isLoading) return <div className="flex w-full h-full justify-center items-center">Loading...</div>;

  return (
    <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
      <DataTable data={data} />
    </div>
  );
}
