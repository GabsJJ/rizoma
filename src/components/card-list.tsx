import Image from "next/image";
import { Card, CardContent, CardFooter } from "./ui/card";

const popularContent = [
  {
    id: 1,
    title: "Online Marketplace Purchase",
    badge: "E-Commerce",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/8/80/MercadoLibre_logo.svg",
    count: 1000,
  },
  {
    id: 2,
    title: "Video Streaming Subscription",
    badge: "Streaming",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",
    count: 1500,
  },
  {
    id: 3,
    title: "Ride-Hailing Service",
    badge: "Mobility",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png",
    count: 2100,
  },
  {
    id: 4,
    title: "Food Delivery Order",
    badge: "FoodTech",
    image: "https://upload.wikimedia.org/wikipedia/commons/a/a4/IFood_logo.svg",
    count: 1500,
  },
  {
    id: 5,
    title: "Online Retail Purchase",
    badge: "AI",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
    count: 1000,
  },
];

const latestTransactions = [
  {
    id: 1,
    title: "Purchased membership",
    badge: "Emma Johnson",
    image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg",
    count: 1000,
  },
  {
    id: 2,
    title: "Purchased membership",
    badge: "Liam Smith",
    image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg",
    count: 1500,
  },
  {
    id: 3,
    title: "Purchased membership",
    badge: "Olivia Brown",
    image: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg",
    count: 2100,
  },
  {
    id: 4,
    title: "Purchased membership",
    badge: "Noah Davis",
    image: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg",
    count: 1500,
  },
  {
    id: 5,
    title: "Purchased membership",
    badge: "Ava Wilson",
    image: "https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg",
    count: 1000,
  },
];

function CardList({ title }: { title: string }) {
  const list =
    title === "Popular Content" ? popularContent : latestTransactions;

  return (
    <div>
      <h1 className="text-lg font-medium mb-6">{title}</h1>
      <div className="flex flex-col gap-2">
        {list.map((item) => (
          <Card key={item.id}>
            <div className="size-12 rounded-sm relative overflow-hidden">
                <Image src={item.image} alt={item.title} fill className="object-cover"/>
            </div>
            <CardContent>{item.title}</CardContent>
            <CardFooter>{item.count/1000}K</CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default CardList;
