import Image from 'next/image'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from './ui/card'
import { Badge } from './ui/badge'
import { ScrollArea } from './ui/scroll-area'

const popularContent = [
  {
    id: 1,
    title: 'Online Marketplace Purchase',
    badge: 'E-Commerce',
    image:
      'https://images.pexels.com/photos/5632390/pexels-photo-5632390.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=2',
    count: 1000,
  },
  {
    id: 2,
    title: 'Video Streaming Subscription',
    badge: 'Streaming',
    image:
      'https://images.pexels.com/photos/7991379/pexels-photo-7991379.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=2',
    count: 1500,
  },
  {
    id: 3,
    title: 'Ride-Hailing Service',
    badge: 'Mobility',
    image:
      'https://images.pexels.com/photos/1380203/pexels-photo-1380203.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=2',
    count: 2100,
  },
  {
    id: 4,
    title: 'Food Delivery Order',
    badge: 'FoodTech',
    image:
      'https://images.pexels.com/photos/3184193/pexels-photo-3184193.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=2',
    count: 1500,
  },
  {
    id: 5,
    title: 'Online Retail Purchase',
    badge: 'AI',
    image:
      'https://images.pexels.com/photos/11813198/pexels-photo-11813198.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=2',
    count: 1000,
  },
]

const latestTransactions = [
  {
    id: 1,
    title: 'Purchased membership',
    badge: 'Emma Johnson',
    image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg',
    count: 1000,
  },
  {
    id: 2,
    title: 'Purchased membership',
    badge: 'Liam Smith',
    image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg',
    count: 1500,
  },
  {
    id: 3,
    title: 'Purchased membership',
    badge: 'Olivia Brown',
    image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg',
    count: 2100,
  },
  {
    id: 4,
    title: 'Purchased membership',
    badge: 'Noah Davis',
    image: 'https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg',
    count: 1500,
  },
  {
    id: 5,
    title: 'Purchased membership',
    badge: 'Ava Wilson',
    image: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg',
    count: 1000,
  },
]

export default function CardList({ title }: { title: string }) {
  const list = title === 'Popular Content' ? popularContent : latestTransactions

  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle>
          <h1 className="text-lg font-medium">{title}</h1>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[400px] xlg:h-auto overflow-y-auto">
          <div className="flex flex-col gap-2 pr-3">
            {list.map((item) => (
              <Card
                key={item.id}
                className="flex-row items-center justify-around gap-4 p-4"
              >
                <div className="size-12 rounded-sm relative overflow-hidden flex-none">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                    sizes="33vw"
                  />
                </div>
                <CardContent className="p-0 flex-1">
                  <CardTitle className="text-sm font-medium">
                    {item.title}
                  </CardTitle>
                  <Badge variant="secondary">{item.badge}</Badge>
                </CardContent>
                <CardFooter className="p-0 flex-none">
                  {item.count / 1000}K
                </CardFooter>
              </Card>
            ))}
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  )
}
