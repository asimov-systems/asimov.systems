/**
 * ClerkProvider wrapper for React components in Astro
 *
 * This component wraps React components that need Clerk hooks (like useUser, useClerk)
 *
 * Subdomain Cookie Sharing:
 * Since both asimov.systems and id.asimov.systems are subdomains of *.asimov.systems,
 * Clerk automatically shares sessions across them using cookie domain sharing.
 *
 * Configuration:
 * 1. Both domains must be added in Clerk Dashboard → Settings → Domains
 * 2. Both sites must use the same Clerk keys (same Clerk instance)
 * 3. Clerk will automatically set cookies with domain=.asimov.systems
 * 4. No satellite domain configuration needed - subdomain sharing works automatically
 *
 * Environment variables:
 * - PUBLIC_CLERK_PUBLISHABLE_KEY: Your Clerk publishable key (required)
 */

import { ClerkProvider as ClerkProviderReact } from '@clerk/clerk-react';
import type { ReactNode } from 'react';
import { getClerkPublishableKey } from '@/lib/config';

interface ClerkProviderProps {
  children: ReactNode;
}

export function ClerkProvider({ children }: ClerkProviderProps) {
  const publishableKey = getClerkPublishableKey();

  if (!publishableKey) {
    console.warn('PUBLIC_CLERK_PUBLISHABLE_KEY is not set');
    return <>{children}</>;
  }

  // Configure Clerk - subdomain cookie sharing works automatically
  // Both asimov.systems and id.asimov.systems share the same Clerk instance
  // Clerk automatically sets cookies with domain=.asimov.systems for subdomain sharing
  const clerkConfig = {
    publishableKey
  };

  console.log('[Clerk] Configured for subdomain cookie sharing (.asimov.systems)');

  return <ClerkProviderReact {...clerkConfig}>{children}</ClerkProviderReact>;
}
