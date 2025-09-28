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
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { MoreHorizontal, Edit, Trash2 } from 'lucide-react';
import { toursData } from '@/lib/data';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

type Destination = {
    name: string;
    image: string;
    imageHint: string;
    tourCount: number;
};

const uniqueDestinations = Array.from(new Set(toursData.map(tour => tour.destination)))
    .map(destination => {
        const tour = toursData.find(t => t.destination === destination)!;
        const image = PlaceHolderImages.find(img => img.id === tour.imageId);
        const tourCount = toursData.filter(t => t.destination === destination).length;
        return {
            name: destination,
            image: image?.imageUrl || '',
            imageHint: image?.imageHint || 'landscape travel',
            tourCount: tourCount,
        };
    });


export function DestinationsTable() {
  const [data, setData] = React.useState(uniqueDestinations);
  const [filter, setFilter] = React.useState('');

  const filteredData = data.filter(
    (dest) =>
      dest.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className="w-full">
      <div className="flex items-center py-4">
        <Input
          placeholder="Filter by destination name..."
          value={filter}
          onChange={(event) => setFilter(event.target.value)}
          className="max-w-sm"
        />
      </div>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Destination</TableHead>
              <TableHead className="text-center">Tours Available</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredData.length ? (
              filteredData.map((dest) => (
                <TableRow key={dest.name}>
                  <TableCell className="font-medium">
                     <div className="flex items-center gap-3">
                        <Image src={dest.image} alt={dest.name} width={64} height={64} className="rounded-md object-cover w-16 h-16" data-ai-hint={dest.imageHint} />
                        <span className="font-semibold">{dest.name}</span>
                    </div>
                  </TableCell>
                  <TableCell className="text-center font-medium">{dest.tourCount}</TableCell>
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
                        <DropdownMenuItem>
                          <Edit className="mr-2 h-4 w-4" />
                          Edit Destination
                        </DropdownMenuItem>
                        <DropdownMenuItem className="text-destructive">
                          <Trash2 className="mr-2 h-4 w-4" />
                          Delete Destination
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={3} className="h-24 text-center">
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
