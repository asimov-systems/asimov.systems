/**
 * Authentication utilities for id.asimov.systems integration
 *
 * This site uses Clerk for authentication (shared with id.asimov.systems),
 * but redirects users to id.asimov.systems for account management UI.
 * Both sites share the same Clerk instance, so sessions work across domains.
 */

import { getIdAuthUrl } from './config';

/**
 * Get the authentication URL for id.asimov.systems
 * Users will be redirected here for login UI (which uses Clerk)
 *
 * @param redirectUri - The URL to redirect back to after login. If not provided, user stays on id.asimov.systems
 */
export function getAuthUrl(redirectUri?: string): string {
  const idAuthUrl = getIdAuthUrl();

  if (redirectUri) {
    const returnUrl = encodeURIComponent(redirectUri);
    return `${idAuthUrl}/auth/login?returnUrl=${returnUrl}`;
  }

  // No returnUrl - user will stay on id.asimov.systems after login
  return `${idAuthUrl}/auth/login`;
}

/**
 * Get the sign-up URL for id.asimov.systems
 *
 * @param redirectUri - The URL to redirect back to after signup. If not provided, user stays on id.asimov.systems
 */
export function getSignUpUrl(redirectUri?: string): string {
  const idAuthUrl = getIdAuthUrl();

  if (redirectUri) {
    const returnUrl = encodeURIComponent(redirectUri);
    return `${idAuthUrl}/auth/signup?returnUrl=${returnUrl}`;
  }

  // No returnUrl - user will stay on id.asimov.systems after signup
  return `${idAuthUrl}/auth/signup`;
}

/**
 * Get the sign-out URL for id.asimov.systems
 * After sign-out, users will be redirected back here
 *
 * @param redirectUri - The URL to redirect back to after signout. If not provided, user stays on id.asimov.systems
 */
export function getSignOutUrl(redirectUri?: string): string {
  const idAuthUrl = getIdAuthUrl();

  if (redirectUri) {
    const returnUrl = encodeURIComponent(redirectUri);
    return `${idAuthUrl}/auth/signout?returnUrl=${returnUrl}`;
  }

  // No returnUrl - user will stay on id.asimov.systems after signout
  return `${idAuthUrl}/auth/signout`;
}

/**
 * Get the account management URL for id.asimov.systems
 * Users can manage their account settings here
 */
export function getAccountManagementUrl(redirectUri?: string): string {
  const idAuthUrl = getIdAuthUrl();
  if (redirectUri) {
    const returnUrl = encodeURIComponent(redirectUri);
    return `${idAuthUrl}/account?returnUrl=${returnUrl}`;
  }
  return `${idAuthUrl}/account`;
}
