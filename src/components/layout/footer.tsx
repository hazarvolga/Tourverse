import Link from 'next/link';
import { Logo } from '@/components/icons';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Twitter, Facebook, Instagram, Linkedin } from 'lucide-react';

const footerNavs = [
  { title: 'Company', items: ['About Us', 'Careers', 'Press', 'Partners'] },
  { title: 'Tours', items: ['Destinations', 'Categories', 'Special Offers', 'Private Tours'] },
  { title: 'Resources', items: ['Blog', 'Travel Guides', 'FAQ', 'Contact Us'] },
];

const socialLinks = [
  { icon: Twitter, href: '#' },
  { icon: Facebook, href: '#' },
  { icon: Instagram, href: '#' },
  { icon: Linkedin, href: '#' },
];

export function SiteFooter() {
  return (
    <footer className="bg-muted/40 border-t border-border/40 mt-12">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          
          {/* Logo and Newsletter */}
          <div className="md:col-span-4 lg:col-span-3 space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <Logo className="h-8 w-8 text-primary" />
              <span className="font-bold text-xl font-headline">
                NextStopTurkey
              </span>
            </Link>
            <p className="text-muted-foreground text-sm">
              Subscribe to our newsletter for the latest travel deals and inspirations.
            </p>
            <form className="flex space-x-2">
              <Input type="email" placeholder="Your email" className="bg-background" />
              <Button type="submit">Subscribe</Button>
            </form>
          </div>

          {/* Spacer */}
          <div className="hidden lg:block lg:col-span-2"></div>

          {/* Footer Links */}
          <div className="md:col-span-8 lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8">
            {footerNavs.map((nav) => (
              <div key={nav.title}>
                <h3 className="font-semibold tracking-wider uppercase text-foreground/90 mb-4">{nav.title}</h3>
                <ul className="space-y-3">
                  {nav.items.map((item) => (
                    <li key={item}>
                      <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                        {item}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border/40 flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} NextStopTurkey. All rights reserved.
          </p>
          <div className="flex items-center space-x-4">
            {socialLinks.map((social, idx) => (
              <Link key={idx} href={social.href} className="text-muted-foreground hover:text-primary transition-colors">
                <social.icon className="h-5 w-5" />
                <span className="sr-only">Social Link</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
