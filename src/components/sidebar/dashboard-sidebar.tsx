'use client'

import * as React from 'react'
import {
  IconChartBar,
  IconDashboard,
  IconDatabase,
  IconFolder,
  IconHelp,
  IconSearch,
} from '@tabler/icons-react'

import { NavDocuments } from '@/components/sidebar/nav-documents'
import { NavMain } from '@/components/sidebar/nav-main'
import { NavSecondary } from '@/components/sidebar/nav-secondary'
import { NavUser } from '@/components/sidebar/nav-user'
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar'
import Link from 'next/link'
import Logo from '../logo'

const data = {
  user: {
    name: 'Gabs',
    email: 'gabs@rizoma.com',
    avatar: '',
  },
  navMain: [
    {
      title: 'Dashboard',
      url: '/dashboard',
      icon: IconDashboard,
    },
    {
      title: 'Analytics',
      url: '/dashboard/analytics',
      icon: IconChartBar,
    },
    {
      title: 'Products',
      url: '/dashboard/products',
      icon: IconFolder,
    },
  ],
  navSecondary: [
    {
      title: 'Search',
      url: '#',
      icon: IconSearch,
    },
    {
      title: 'Get Help',
      url: '#',
      icon: IconHelp,
    },
  ],
  documents: [
    {
      name: 'Data Library',
      url: '#',
      icon: IconDatabase,
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader className="pt-4">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              className="data-[slot=sidebar-menu-button]:!p-1.5"
            >
              <Link
                href="/"
                className="
                  flex flex-row items-center
                  text-primary 
              "
              >
                {/* <Logo /> */}
                <span className="font-semibold">Rizoma</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavDocuments items={data.documents} />
        <NavSecondary items={data.navSecondary} className="mt-auto" />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  )
}
