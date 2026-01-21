import { clerkMiddleware, createRouteMatcher } from '@clerk/astro/server';
import { getAuthUrl } from '@/lib/auth';

// Protected routes - add any future protected pages here
const isProtectedRoute = createRouteMatcher([
  // Example: '/protected-page(.*)',
]);

export const onRequest = clerkMiddleware((auth, context) => {
  const { userId } = auth();

  // If user is not authenticated and trying to access protected route
  if (!userId && isProtectedRoute(context.request)) {
    // Redirect to id.asimov.systems for authentication/login UI
    const returnUrl = encodeURIComponent(context.request.url);
    const authUrl = getAuthUrl(returnUrl);
    return context.redirect(authUrl);
  }
});
