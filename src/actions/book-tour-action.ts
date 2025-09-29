

'use server';

import { z } from 'zod';
import { redirect } from 'next/navigation';

const BookTourSchema = z.object({
  tourId: z.string().min(1),
  tourName: z.string().min(1),
  tourType: z.enum(['one-day', 'multi-day']),
  guests: z.coerce.number().int().min(1, 'You must book for at least 1 guest.'),
  accommodation: z.enum(['hotel', 'guesthouse', 'camping', 'none']).optional(),
  customerName: z.string().min(2, "Name is required."),
  customerEmail: z.string().email("Invalid email address."),
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
  
  const rawFormData = Object.fromEntries(formData.entries());

  const validatedFields = BookTourSchema.safeParse(rawFormData);

  if (!validatedFields.success) {
    console.log(validatedFields.error.flatten().fieldErrors);
    const firstError = Object.values(validatedFields.error.flatten().fieldErrors)[0]?.[0];
    return {
      message: firstError || 'Invalid data provided.',
      isError: true,
    };
  }
  
  const { action, guests, tourName, customerName } = validatedFields.data;

  if (action === 'pay') {
      console.log('Redirecting to payment for:', validatedFields.data);
      redirect('/payment');
  }
  
  try {
    console.log('New Reservation:', validatedFields.data);

    return {
      message: `Dear ${customerName}, your reservation for ${guests} guest(s) on the '${tourName}' tour has been successfully submitted!`,
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
