'use client'

import { useSelectedLayoutSegments } from 'next/navigation'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from './ui/breadcrumb'

export default function DashboardBreadcrumb() {
  const paths = useSelectedLayoutSegments()

  return (
    <Breadcrumb className="md:px-5 px-4">
      <BreadcrumbList>
        {paths.reduce<React.ReactNode[]>((acc, path, index) => {
          acc.push(
            <BreadcrumbItem key={path}>
              <BreadcrumbLink href={`/${path}/`}>
                {path.charAt(0).toUpperCase() + path.slice(1)}
              </BreadcrumbLink>
            </BreadcrumbItem>,
          )

          if (index < paths.length - 1) {
            acc.push(<BreadcrumbSeparator key={`sep-${path}`} />)
          }

          return acc
        }, [])}
      </BreadcrumbList>
    </Breadcrumb>
  )
}
