import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Logo } from '@/components/icons';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, Globe, Map, User } from 'lucide-react';

const navLinks = [
  { href: '/dashboard/bookings', label: 'Tours', icon: Map },
  { href: '#', label: 'Destinations', icon: Globe },
  { href: '/dashboard/customers', label: 'About Us', icon: User },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <div className="mr-auto flex items-center">
          <Link href="/" className="flex items-center space-x-2">
            <Logo className="h-8 w-8 text-primary" />
            <span className="font-bold text-lg sm:inline-block font-headline">
              TourVerse
            </span>
          </Link>
        </div>

        {/* Desktop Navigation - Icons */}
        <nav className="hidden md:flex items-center space-x-2">
          {navLinks.map(link => (
            <Button key={link.href} variant="ghost" asChild>
                <Link
                href={link.href}
                className="transition-colors hover:text-primary text-muted-foreground flex items-center gap-2"
                title={link.label}
                >
                <link.icon className="h-5 w-5" />
                </Link>
            </Button>
          ))}
        </nav>
        
        <div className="flex items-center space-x-2 ml-4">
           <Button asChild>
             <Link href="/dashboard">Get Started</Link>
           </Button>

          {/* Mobile Navigation - Sheet */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" className="md:hidden" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-background">
              <div className="flex flex-col h-full">
                <div className="flex items-center mb-8">
                  <Link href="/" className="flex items-center space-x-2">
                    <Logo className="h-8 w-8 text-primary" />
                    <span className="font-bold text-xl font-headline">
                      TourVerse
                    </span>
                  </Link>
                </div>
                <nav className="flex flex-col space-y-4">
                  {navLinks.map(link => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="text-lg font-medium transition-colors hover:text-primary flex items-center gap-3"
                    >
                      <link.icon className="h-5 w-5 text-muted-foreground" />
                      {link.label}
                    </Link>
                  ))}
                </nav>
                 <Button asChild className="mt-auto" size="lg">
                   <Link href="/dashboard">Get Started</Link>
                 </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
