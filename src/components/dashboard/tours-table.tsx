'use client';

import * as React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { MoreHorizontal, Edit, Trash2, Clock } from 'lucide-react';
import type { Tour } from '@/lib/types';
import { toursData } from '@/lib/data';
import { cn } from '@/lib/utils';
import { formatCurrency } from '@/lib/utils';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Link from 'next/link';

const badgeColors: { [key: string]: string } = {
    Adventure: 'bg-accent text-accent-foreground',
    Cultural: 'bg-primary text-primary-foreground',
    Relaxation: 'bg-green-500 text-white',
    "City Break": 'bg-purple-500 text-white',
};

export function ToursTable() {
  const [data, setData] = React.useState(toursData);
  const [filter, setFilter] = React.useState('');

  const filteredData = data.filter(
    (tour) =>
      tour.name.toLowerCase().includes(filter.toLowerCase()) ||
      tour.destination.toLowerCase().includes(filter.toLowerCase()) ||
      tour.category.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className="w-full">
      <div className="flex items-center py-4">
        <Input
          placeholder="Filter by name, destination, or category..."
          value={filter}
          onChange={(event) => setFilter(event.target.value)}
          className="max-w-sm"
        />
      </div>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Tour Name</TableHead>
              <TableHead>Destination</TableHead>
              <TableHead>Category</TableHead>
              <TableHead>Duration</TableHead>
              <TableHead className="text-right">Price</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredData.length ? (
              filteredData.map((tour) => {
                 const image = PlaceHolderImages.find((img) => img.id === tour.imageId);
                 return (
                    <TableRow key={tour.id}>
                        <TableCell className="font-medium">
                            <div className="flex items-center gap-3">
                                {image && <Image src={image.imageUrl} alt={tour.name} width={64} height={64} className="rounded-md object-cover w-16 h-16" data-ai-hint={image.imageHint} />}
                                <span className="font-semibold">{tour.name}</span>
                            </div>
                        </TableCell>
                        <TableCell>{tour.destination}</TableCell>
                        <TableCell>
                            <Badge className={cn(badgeColors[tour.category])} variant={tour.category === 'Adventure' ? 'secondary' : 'default'}>{tour.category}</Badge>
                        </TableCell>
                        <TableCell>
                            <div className="flex items-center gap-2">
                                <Clock className="h-4 w-4 text-muted-foreground" />
                                <span>{tour.duration} days</span>
                            </div>
                        </TableCell>
                        <TableCell className="text-right font-semibold">{formatCurrency(tour.price)}</TableCell>
                        <TableCell className="text-right">
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                            <Button variant="ghost" className="h-8 w-8 p-0">
                                <span className="sr-only">Open menu</span>
                                <MoreHorizontal className="h-4 w-4" />
                            </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                            <DropdownMenuLabel>Actions</DropdownMenuLabel>
                            <DropdownMenuItem asChild>
                                <Link href={`/dashboard/tours/${tour.id}/edit`}>
                                    <Edit className="mr-2 h-4 w-4" />
                                    Edit Tour
                                </Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem className="text-destructive">
                                <Trash2 className="mr-2 h-4 w-4" />
                                Delete Tour
                            </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                        </TableCell>
                    </TableRow>
                 )
                })
            ) : (
              <TableRow>
                <TableCell
                  colSpan={6}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
