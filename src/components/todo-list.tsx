'use client'

import React, { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import { Checkbox } from './ui/checkbox'
import { ScrollArea } from './ui/scroll-area'
import { Calendar } from './ui/calendar'
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover'
import { Button } from './ui/button'
import { Calendar1Icon } from 'lucide-react'
import { format } from 'date-fns'

const cardItems = [
  {
    id: 'item1',
    label: 'Complete project documentation for client review',
  },
  {
    id: 'item2',
    label: 'Fix responsive layout issues on dashboard',
  },
  {
    id: 'item3',
    label: 'Prepare slides for weekly team meeting',
  },
  {
    id: 'item4',
    label: 'Update dependencies in package.json',
  },
  {
    id: 'item5',
    label: 'Review pull requests from frontend team',
  },
  {
    id: 'item6',
    label: 'Refactor authentication logic for better security',
  },
  {
    id: 'item7',
    label: 'Optimize images and assets for faster load time',
  },
  {
    id: 'item8',
    label: 'Write unit tests for new API endpoints',
  },
  {
    id: 'item9',
    label: 'Fix broken links and update sitemap.xml',
  },
  {
    id: 'item10',
    label: 'Plan new feature rollout for next sprint',
  },
]

export default function TodoList() {
  const [open, setOpen] = useState(false)
  const [date, setDate] = React.useState<Date | undefined>(new Date())

  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle>
          <h1 className="text-md font-medium">Todo List</h1>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <Button className="w-full">
              <Calendar1Icon />
              {date ? format(date, 'PPP') : <span>Pick a date</span>}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="p-0 w-auto">
            <Calendar
              mode="single"
              selected={date}
              onSelect={(date) => {
                setDate(date)
                setOpen(false)
              }}
            />
          </PopoverContent>
        </Popover>
        <ScrollArea className="h-[360px] xlg:h-auto mt-4 overflow-y-auto">
          <div className="flex flex-col gap-4 pr-3">
            {cardItems.map((item) => (
              <Card key={item.id} className="p-4">
                <div className="flex items-center gap-4">
                  <Checkbox id="item1" />
                  <label
                    htmlFor="item1"
                    className="text-sm text-muted-foreground"
                  >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit
                  </label>
                </div>
              </Card>
            ))}
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  )
}
