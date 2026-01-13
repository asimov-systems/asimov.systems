/**
 * ClerkProvider wrapper for React components in Astro
 *
 * This component wraps React components that need Clerk hooks (like useUser, useClerk)
 *
 * For cross-domain sessions with id.asimov.nexus:
 * - Configure id.asimov.nexus as primary domain in Clerk Dashboard
 * - Configure asimov.systems (or localhost) as satellite domain
 * - Both sites must use the same Clerk keys
 *
 * Environment variables:
 * - PUBLIC_CLERK_PUBLISHABLE_KEY: Your Clerk publishable key (required)
 * - PUBLIC_CLERK_DOMAIN: The current domain (optional, auto-detected)
 * - PUBLIC_CLERK_IS_SATELLITE: Set to "true" if this is a satellite domain (optional)
 */

import { ClerkProvider as ClerkProviderReact } from '@clerk/clerk-react';
import type { ReactNode } from 'react';

interface ClerkProviderProps {
  children: ReactNode;
}

export function ClerkProvider({ children }: ClerkProviderProps) {
  const publishableKey = import.meta.env.PUBLIC_CLERK_PUBLISHABLE_KEY;

  if (!publishableKey) {
    console.warn('PUBLIC_CLERK_PUBLISHABLE_KEY is not set');
    return <>{children}</>;
  }

  // Get domain from environment or auto-detect
  const domain =
    import.meta.env.PUBLIC_CLERK_DOMAIN ||
    (typeof window !== 'undefined' ? window.location.hostname : '');

  // Check if this is a satellite domain
  // If PUBLIC_CLERK_IS_SATELLITE is set, use it; otherwise auto-detect
  const isSatellite =
    import.meta.env.PUBLIC_CLERK_IS_SATELLITE === 'true' ||
    (domain && domain !== 'id.asimov.nexus' && domain !== 'asimov.systems');

  // Configure Clerk for satellite domain support
  const clerkConfig: {
    publishableKey: string;
    domain?: string;
    isSatellite?: boolean;
  } = {
    publishableKey
  };

  // Only set domain and isSatellite if we have a domain and it's not the primary domain
  if (domain && isSatellite) {
    clerkConfig.domain = domain;
    clerkConfig.isSatellite = true;
    console.log('[Clerk] Configured as satellite domain:', domain);
  } else if (domain) {
    console.log('[Clerk] Running on primary domain or domain not configured:', domain);
  }

  return <ClerkProviderReact {...clerkConfig}>{children}</ClerkProviderReact>;
}
