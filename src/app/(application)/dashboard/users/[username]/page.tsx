import CardList from '@/components/card-list'
import EditUser from '@/components/edit-user'
import LineChart from '@/components/user-line-chart'
import { Avatar, AvatarImage } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from '@/components/ui/hover-card'
import { Progress } from '@/components/ui/progress'
import { Sheet, SheetTrigger } from '@/components/ui/sheet'
import { AvatarFallback } from '@radix-ui/react-avatar'
import { BadgeCheck } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export default function UserPage() {
  return (
    <div className=" flex flex-col xl:flex-row gap-8">
      {/* Left */}
      <div className="w-full xl:w-1/3 space-y-6">
        {/* User badges container */}
        <Card>
          <CardHeader>
            <CardTitle>
              <h1 className="text-xl font-semibold">User Badges</h1>
            </CardTitle>
          </CardHeader>
          <CardContent className="flex gap-4">
            <HoverCard>
              <HoverCardTrigger>
                <BadgeCheck
                  size={36}
                  className="rounded-full bg-blue-500/30 border-1 border-blue-500/30 p-2"
                />
              </HoverCardTrigger>
              <HoverCardContent>
                <h1 className="font-bold mb-2">Verified User</h1>
                <p className="text-sm text-muted-foreground">
                  This user has been verified by the admin.
                </p>
              </HoverCardContent>
            </HoverCard>
            <HoverCard>
              <HoverCardTrigger>
                <BadgeCheck
                  size={36}
                  className="rounded-full bg-blue-500/30 border-1 border-blue-500/30 p-2"
                />
              </HoverCardTrigger>
              <HoverCardContent>
                <h1 className="font-bold mb-2">Verified User</h1>
                <p className="text-sm text-muted-foreground">
                  This user has been verified by the admin.
                </p>
              </HoverCardContent>
            </HoverCard>
          </CardContent>
        </Card>
        {/* Information container */}
        <Card>
          <CardHeader className="flex items-center justify-between">
            <h1 className="text-xl font-semibold">User Information</h1>
            <Sheet>
              <SheetTrigger asChild>
                <Button>Edit User</Button>
              </SheetTrigger>
              <EditUser />
            </Sheet>
          </CardHeader>
          <CardContent className="space-y-4 mt-4">
            <div className="flex flex-col gap-2 mb-8">
              <p className="text-sm text-muted-foreground">
                Profile completion
              </p>
              <Progress value={66} />
            </div>
            <div className="flex items-center gap-2">
              <span className="font-bold">Username:</span>
              <span>john.doe</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-bold">Email:</span>
              <span>john.doe@email.com</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-bold">Phone:</span>
              <span>+1 123 456</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-bold">Location:</span>
              <span>New York, NY</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-bold">Role:</span>
              <Badge>Admin</Badge>
            </div>
            <p className="text-sm text-muted-foreground mt-4">
              Joined on 2025.01.01
            </p>
          </CardContent>
        </Card>
        {/* Card List container */}
        <div>
          <CardList title="Recent transactions" />
        </div>
      </div>
      {/* Right */}
      <div className="w-full xl:w-2/3 space-y-6">
        {/* User card Container */}
        <Card>
          <CardHeader className="flex items-center gap-2">
            <Avatar className="size-12">
              <AvatarImage src="https://avatars.githubusercontent.com/u/2289?v=4"></AvatarImage>
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
            <h1 className="text-xl font-semibold">John Doe</h1>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi
              fugit eveniet sunt? Nobis, quo alias perspiciatis tenetur
              quibusdam inventore nesciunt maiores consequatur eligendi commodi
              mollitia iusto sint eius placeat minima.
            </p>
          </CardContent>
        </Card>
        {/* Chart Container */}
        <Card>
          <CardHeader>
            <CardTitle>
              <h1 className="text-xl font-semibold">User Activity</h1>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <LineChart />
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
