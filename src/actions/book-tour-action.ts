
'use server';

import { z } from 'zod';

const BookTourSchema = z.object({
  tourId: z.string().min(1),
  tourName: z.string().min(1),
  tourType: z.enum(['one-day', 'multi-day']),
  guests: z.coerce.number().int().min(1, 'You must book for at least 1 guest.'),
  accommodation: z.enum(['hotel', 'guesthouse', 'camping', 'none']).optional(),
  action: z.enum(['book', 'pay']),
});

export type BookTourFormState = {
  message: string;
  isError: boolean;
};

export async function bookTourAction(
  prevState: BookTourFormState,
  formData: FormData
): Promise<BookTourFormState> {
  
  const rawFormData = {
    tourId: formData.get('tourId'),
    tourName: formData.get('tourName'),
    tourType: formData.get('tourType'),
    guests: formData.get('guests'),
    accommodation: formData.get('tourType') === 'multi-day' ? formData.get('accommodation') : 'none',
    action: formData.get('action'),
  };

  const validatedFields = BookTourSchema.safeParse(rawFormData);

  if (!validatedFields.success) {
    console.log(validatedFields.error.flatten().fieldErrors);
    return {
      message: validatedFields.error.flatten().fieldErrors.guests?.[0] || 'Invalid data provided.',
      isError: true,
    };
  }
  
  try {
    const { action, guests, tourName } = validatedFields.data;

    if (action === 'pay') {
        // In a real application, you would redirect to a payment gateway.
        console.log('Redirecting to payment for:', validatedFields.data);
        return {
            message: `Redirecting to payment for your booking of ${guests} guest(s) on the '${tourName}' tour!`,
            isError: false,
        };
    }

    // In a real application, you would save this to a database.
    console.log('New Reservation:', validatedFields.data);

    return {
      message: `Your reservation for ${guests} guest(s) on the '${tourName}' tour has been successfully submitted!`,
      isError: false,
    };
  } catch (error) {
    console.error('Booking Error:', error);
    return {
      message: 'An unexpected error occurred. Please try again.',
      isError: true,
    };
  }
}
