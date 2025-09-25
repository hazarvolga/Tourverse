'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Calendar } from '@/components/ui/calendar';
import { Slider } from '@/components/ui/slider';
import { Search, MapPin, DollarSign, SlidersHorizontal, Calendar as CalendarIcon } from 'lucide-react';
import { format } from 'date-fns';

export function TourFilter() {
  const [date, setDate] = useState<Date>();
  const [priceRange, setPriceRange] = useState([500, 5000]);

  return (
    <div className="p-4 bg-card rounded-lg shadow-sm border mb-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 items-center">
        <div className="relative lg:col-span-2">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
          <Input placeholder="Search destinations, tours..." className="pl-10" />
        </div>
        
        <Select>
          <SelectTrigger>
            <SlidersHorizontal className="h-5 w-5 mr-2 text-muted-foreground" />
            <SelectValue placeholder="Tour Type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="adventure">Adventure</SelectItem>
            <SelectItem value="cultural">Cultural</SelectItem>
            <SelectItem value="relaxation">Relaxation</SelectItem>
            <SelectItem value="city-break">City Break</SelectItem>
          </SelectContent>
        </Select>
        
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="outline" className="w-full justify-start font-normal">
              <CalendarIcon className="mr-2 h-5 w-5 text-muted-foreground" />
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

        <div className="lg:col-span-1">
          <Button className="w-full">
            <Search className="mr-2 h-5 w-5" />
            Search
          </Button>
        </div>
      </div>
      <div className="mt-4">
        <label className="text-sm font-medium text-muted-foreground">Price Range</label>
        <div className="flex items-center gap-4 mt-2">
            <DollarSign className="h-5 w-5 text-muted-foreground" />
            <Slider
                defaultValue={[1500]}
                max={5000}
                min={0}
                step={100}
                onValueChange={(value) => setPriceRange(value)}
                className="w-full"
            />
            <span className="text-sm font-semibold w-28 text-right">${priceRange[0]}</span>
        </div>
      </div>
    </div>
  );
}
