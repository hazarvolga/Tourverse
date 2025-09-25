// src/ai/flows/generate-personalized-itinerary.ts
'use server';
/**
 * @fileOverview Generates a personalized tour itinerary based on user preferences.
 *
 * - generatePersonalizedItinerary - A function that generates a personalized tour itinerary.
 * - GeneratePersonalizedItineraryInput - The input type for the generatePersonalizedItinerary function.
 * - GeneratePersonalizedItineraryOutput - The return type for the generatePersonalizedItinerary function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GeneratePersonalizedItineraryInputSchema = z.object({
  preferences: z
    .string()
    .describe('User preferences for the tour, e.g., interests, budget, duration.'),
  historicalData: z
    .string()
    .optional()
    .describe('User historical tour data, e.g., past destinations, ratings.'),
  trendingDestinations: z
    .string()
    .optional()
    .describe('Trending destinations data.'),
});

export type GeneratePersonalizedItineraryInput = z.infer<
  typeof GeneratePersonalizedItineraryInputSchema
>;

const GeneratePersonalizedItineraryOutputSchema = z.object({
  itinerary: z
    .string()
    .describe('A personalized tour itinerary based on user preferences.'),
});

export type GeneratePersonalizedItineraryOutput = z.infer<
  typeof GeneratePersonalizedItineraryOutputSchema
>;

export async function generatePersonalizedItinerary(
  input: GeneratePersonalizedItineraryInput
): Promise<GeneratePersonalizedItineraryOutput> {
  return generatePersonalizedItineraryFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generatePersonalizedItineraryPrompt',
  input: {schema: GeneratePersonalizedItineraryInputSchema},
  output: {schema: GeneratePersonalizedItineraryOutputSchema},
  prompt: `You are an expert tour planner. Generate a personalized tour itinerary based on the user's preferences, historical data, and trending destinations.

User Preferences: {{{preferences}}}
Historical Data: {{{historicalData}}}
Trending Destinations: {{{trendingDestinations}}}

The tool chooses whether to suggest activities, restaurants and landmarks.

Output the itinerary as a detailed, well-structured string.
`,
});

const generatePersonalizedItineraryFlow = ai.defineFlow(
  {
    name: 'generatePersonalizedItineraryFlow',
    inputSchema: GeneratePersonalizedItineraryInputSchema,
    outputSchema: GeneratePersonalizedItineraryOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
