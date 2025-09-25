import Image from 'next/image';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter
} from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { MoreVertical, Mail, History } from 'lucide-react';
import type { Customer } from '@/lib/types';
import { PlaceHolderImages } from '@/lib/placeholder-images';

interface CustomerCardProps {
  customer: Customer;
}

export function CustomerCard({ customer }: CustomerCardProps) {
  const avatarImage = PlaceHolderImages.find(img => img.id === customer.avatarId);
  const initials = customer.name.split(' ').map(n => n[0]).join('');

  return (
    <Card className="flex flex-col">
      <CardHeader className="flex flex-row items-center gap-4">
        <Avatar className="h-12 w-12">
          {avatarImage && <AvatarImage src={avatarImage.imageUrl} alt={customer.name} data-ai-hint={avatarImage.imageHint} />}
          <AvatarFallback>{initials}</AvatarFallback>
        </Avatar>
        <div className="flex-1">
          <CardTitle>{customer.name}</CardTitle>
          <CardDescription>{customer.email}</CardDescription>
        </div>
        <Button variant="ghost" size="icon" className="h-8 w-8">
            <MoreVertical className="h-4 w-4" />
        </Button>
      </CardHeader>
      <CardContent className="flex-grow">
        <div className="flex justify-between text-sm text-muted-foreground mb-4">
          <div className="flex items-center gap-1">
            <History className="h-4 w-4"/>
            <span>{customer.tourHistoryCount} Tours</span>
          </div>
          <span>Joined: {customer.joinDate}</span>
        </div>
        <div className="flex flex-wrap gap-2">
          {customer.preferences.map((pref) => (
            <Badge key={pref} variant="secondary">
              {pref}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full">
          <Mail className="mr-2 h-4 w-4" /> Contact
        </Button>
      </CardFooter>
    </Card>
  );
}
