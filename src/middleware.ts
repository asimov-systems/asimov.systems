import { clerkMiddleware, createRouteMatcher } from '@clerk/astro/server';

const isProtectedRoute = createRouteMatcher([
  '/dashboard(.*)',
  '/onboarding(.*)',
  '/api/user-profile(.*)',
  '/api/reserve-name(.*)',
  '/api/create-payment-intent(.*)',
]);

export const onRequest = clerkMiddleware((auth, context) => {
  const { userId } = auth();

  if (!userId && isProtectedRoute(context.request)) {
    return context.redirect('/sign-in');
  }
});

