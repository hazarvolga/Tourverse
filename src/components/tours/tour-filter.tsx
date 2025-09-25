'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Calendar } from '@/components/ui/calendar';
import { Slider } from '@/components/ui/slider';
import { Search, SlidersHorizontal, Calendar as CalendarIcon, X } from 'lucide-react';
import { format } from 'date-fns';
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuGroup } from '../ui/dropdown-menu';

export function TourFilter() {
  const [date, setDate] = useState<Date | undefined>();
  const [priceRange, setPriceRange] = useState([1500]);

  return (
    <div className="mb-12">
      <div className="flex flex-col md:flex-row items-center gap-4">
        <div className="relative w-full md:flex-grow">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
          <Input placeholder="Search for your next adventure..." className="pl-10 h-12 text-base" />
        </div>
        
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="h-12 w-full md:w-auto">
              <SlidersHorizontal className="mr-2 h-5 w-5" />
              Filters
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-64 p-4" align="end">
            <DropdownMenuLabel>Filter Tours</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuGroup className="space-y-4">
                <div>
                    <label className="text-sm font-medium text-muted-foreground">Tour Type</label>
                    <Select>
                        <SelectTrigger className="w-full mt-1">
                            <SelectValue placeholder="Any Type" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="adventure">Adventure</SelectItem>
                            <SelectItem value="cultural">Cultural</SelectItem>
                            <SelectItem value="relaxation">Relaxation</SelectItem>
                            <SelectItem value="city-break">City Break</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
                <div>
                    <label className="text-sm font-medium text-muted-foreground">Date</label>
                     <Popover>
                        <PopoverTrigger asChild>
                            <Button variant="outline" className="w-full justify-start font-normal mt-1">
                            <CalendarIcon className="mr-2 h-4 w-4" />
                            {date ? format(date, 'PPP') : <span>Pick a date</span>}
                            </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0">
                            <Calendar
                            mode="single"
                            selected={date}
                            onSelect={setDate}
                            initialFocus
                            />
                        </PopoverContent>
                    </Popover>
                </div>

                <div>
                    <label className="text-sm font-medium text-muted-foreground">Price Range</label>
                    <div className="flex items-center gap-4 mt-2">
                        <Slider
                            defaultValue={priceRange}
                            max={5000}
                            min={0}
                            step={100}
                            onValueChange={(value) => setPriceRange(value)}
                            className="w-full"
                        />
                    </div>
                     <span className="text-sm font-semibold w-28 text-right block mt-1">${priceRange[0]}</span>
                </div>
                <Button className="w-full">
                    <Search className="mr-2 h-4 w-4" />
                    Apply Filters
                </Button>
                 <Button variant="ghost" className="w-full">
                    <X className="mr-2 h-4 w-4" />
                    Reset
                </Button>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>

        <Button className="h-12 w-full md:w-auto">
            Search
        </Button>
      </div>
    </div>
  );
}
