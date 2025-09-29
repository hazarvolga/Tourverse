
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { CreditCard, Lock } from 'lucide-react';

export default function PaymentPage() {
  return (
    <div className="container mx-auto max-w-2xl py-12 px-4">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <CreditCard className="text-primary" />
            Complete Your Payment
          </CardTitle>
          <CardDescription>
            Please enter your payment details below. Your information is secure.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="card-name">Name on Card</Label>
            <Input id="card-name" placeholder="John M. Doe" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="card-number">Card Number</Label>
            <Input id="card-number" placeholder="&#x25CF;&#x25CF;&#x25CF;&#x25CF; &#x25CF;&#x25CF;&#x25CF;&#x25CF; &#x25CF;&#x25CF;&#x25CF;&#x25CF; &#x25CF;&#x25CF;&#x25CF;&#x25CF;" />
          </div>
          <div className="grid grid-cols-3 gap-4">
            <div className="space-y-2">
              <Label htmlFor="expiry-date">Expiry</Label>
              <Input id="expiry-date" placeholder="MM / YY" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="cvc">CVC</Label>
              <Input id="cvc" placeholder="CVC" />
            </div>
            <div className="space-y-2">
                <Label htmlFor="zip">ZIP</Label>
                <Input id="zip" placeholder="ZIP Code" />
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex flex-col gap-4">
           <Button size="lg" className="w-full">
                <Lock className="mr-2 h-4 w-4" />
                Pay Now
            </Button>
            <p className="text-xs text-muted-foreground text-center">
                By clicking "Pay Now", you agree to our Terms of Service.
            </p>
        </CardFooter>
      </Card>
    </div>
  );
}
