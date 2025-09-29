
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { MoreVertical, Star, Briefcase, Calendar } from 'lucide-react';
import type { Staff } from '@/lib/types';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { cn } from '@/lib/utils';

interface StaffCardProps {
  staff: Staff;
}

export function StaffCard({ staff }: StaffCardProps) {
  const avatarImage = PlaceHolderImages.find(img => img.id === staff.avatarId);
  const initials = staff.name.split(' ').map(n => n[0]).join('');

  return (
    <Card className="flex flex-col">
      <CardHeader className="relative">
        <div className="flex flex-row items-center gap-4">
            <Avatar className="h-16 w-16">
            {avatarImage && <AvatarImage src={avatarImage.imageUrl} alt={staff.name} data-ai-hint={avatarImage.imageHint} />}
            <AvatarFallback>{initials}</AvatarFallback>
            </Avatar>
            <div className="flex-1">
            <CardTitle>{staff.name}</CardTitle>
            <CardDescription>{staff.role}</CardDescription>
            </div>
            <Button variant="ghost" size="icon" className="absolute top-4 right-4 h-8 w-8">
                <MoreVertical className="h-4 w-4" />
            </Button>
        </div>
        <Badge 
          className={cn(
            "absolute top-4 left-4", 
            staff.onDuty ? "bg-green-500 text-white" : "bg-muted text-muted-foreground"
          )}
        >
          {staff.onDuty ? 'On Duty' : 'Off Duty'}
        </Badge>
      </CardHeader>
      <CardContent className="flex-grow space-y-3">
        <div className="flex justify-between text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <Briefcase className="h-4 w-4" />
            <span>{staff.assignedTours} assigned tours</span>
          </div>
        </div>
        <div className="flex justify-between text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <Star className="h-4 w-4 text-secondary fill-secondary" />
            <span>{staff.rating} average rating</span>
          </div>
        </div>
        <p className="text-sm text-muted-foreground pt-2">{staff.email}</p>
      </CardContent>
      <CardFooter className="grid grid-cols-2 gap-2">
        <Button variant="outline" className="w-full">
          <Calendar className="mr-2 h-4 w-4" /> Schedule
        </Button>
         <Button className="w-full">
            Edit Profile
        </Button>
      </CardFooter>
    </Card>
  );
}
