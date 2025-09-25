'use client';

import { useFormState, useFormStatus } from 'react-dom';
import { generateItineraryAction, type ItineraryFormState } from '@/actions/generate-itinerary-action';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Bot, Sparkles, Terminal } from 'lucide-react';
import { Skeleton } from '../ui/skeleton';

const initialState: ItineraryFormState = {
  message: '',
  isError: false,
};

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} size="lg" className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
      {pending ? (
        <>
          <Bot className="mr-2 h-5 w-5 animate-spin" />
          Generating...
        </>
      ) : (
        <>
          <Sparkles className="mr-2 h-5 w-5" />
          Generate Itinerary
        </>
      )}
    </Button>
  );
}

export function ItineraryGenerator() {
  const [state, formAction] = useFormState(generateItineraryAction, initialState);

  return (
    <div className="space-y-8">
      <Card>
        <CardContent className="p-6">
          <form action={formAction} className="space-y-4">
            <Textarea
              name="preferences"
              placeholder="e.g., 'A 5-day trip to Kyoto for a solo traveler interested in temples, gardens, and authentic food. Budget is around $100 per day.'"
              className="min-h-[120px] text-base"
              required
            />
            {state.isError && state.message && (
              <Alert variant="destructive">
                <Terminal className="h-4 w-4" />
                <AlertTitle>Error</AlertTitle>
                <AlertDescription>{state.message}</AlertDescription>
              </Alert>
            )}
            <SubmitButton />
          </form>
        </CardContent>
      </Card>

      {(useFormStatus().pending || state.itinerary) && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Sparkles className="text-accent"/>
              Your Personalized Itinerary
            </CardTitle>
          </CardHeader>
          <CardContent>
            {useFormStatus().pending ? (
                <div className="space-y-4">
                    <Skeleton className="h-4 w-1/4" />
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-3/4" />
                    <Skeleton className="h-4 w-full" />
                </div>
            ) : (
              <pre className="whitespace-pre-wrap font-body text-base bg-muted p-4 rounded-md">
                {state.itinerary}
              </pre>
            )}
          </CardContent>
        </Card>
      )}
    </div>
  );
}
