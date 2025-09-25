'use server';

import { generatePersonalizedItinerary } from '@/ai/flows/generate-personalized-itinerary';
import { z } from 'zod';

const ItinerarySchema = z.object({
  preferences: z.string().min(10, {
    message: 'Please describe your preferences in at least 10 characters.',
  }),
});

export type ItineraryFormState = {
  message: string;
  itinerary?: string;
  isError: boolean;
};

export async function generateItineraryAction(
  prevState: ItineraryFormState,
  formData: FormData
): Promise<ItineraryFormState> {
  const validatedFields = ItinerarySchema.safeParse({
    preferences: formData.get('preferences'),
  });

  if (!validatedFields.success) {
    return {
      message: validatedFields.error.errors[0].message,
      isError: true,
    };
  }

  try {
    const { preferences } = validatedFields.data;
    
    // For the AI tool, we can provide some dummy optional data as well
    const historicalData = 'The user previously enjoyed a cultural tour in Italy.';
    const trendingDestinations = 'Currently popular: Cherry blossom season in Japan, Northern Lights in Iceland.';
    
    const result = await generatePersonalizedItinerary({
        preferences,
        historicalData,
        trendingDestinations
    });

    if (!result.itinerary) {
        throw new Error("The AI failed to generate an itinerary.");
    }
    
    return {
      message: 'Itinerary generated successfully!',
      itinerary: result.itinerary,
      isError: false,
    };
  } catch (error) {
    console.error(error);
    return {
      message: 'Failed to generate itinerary. The AI model may be temporarily unavailable. Please try again later.',
      isError: true,
    };
  }
}
