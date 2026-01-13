/**
 * Authentication utilities for id.asimov.nexus integration
 *
 * This site uses Clerk for authentication (shared with id.asimov.nexus),
 * but redirects users to id.asimov.nexus for account management UI.
 * Both sites share the same Clerk instance, so sessions work across domains.
 */

/**
 * Get the authentication URL for id.asimov.nexus
 * Users will be redirected here for login UI (which uses Clerk)
 *
 * @param redirectUri - The URL to redirect back to after login. If not provided, user stays on id.asimov.nexus
 */
export function getAuthUrl(redirectUri?: string): string {
  const nexusAuthUrl = import.meta.env.PUBLIC_NEXUS_AUTH_URL || 'https://id.asimov.nexus';

  if (redirectUri) {
    const returnUrl = encodeURIComponent(redirectUri);
    return `${nexusAuthUrl}/auth/login?returnUrl=${returnUrl}`;
  }

  // No returnUrl - user will stay on id.asimov.nexus after login
  return `${nexusAuthUrl}/auth/login`;
}

/**
 * Get the sign-up URL for id.asimov.nexus
 *
 * @param redirectUri - The URL to redirect back to after signup. If not provided, user stays on id.asimov.nexus
 */
export function getSignUpUrl(redirectUri?: string): string {
  const nexusAuthUrl = import.meta.env.PUBLIC_NEXUS_AUTH_URL || 'https://id.asimov.nexus';

  if (redirectUri) {
    const returnUrl = encodeURIComponent(redirectUri);
    return `${nexusAuthUrl}/auth/signup?returnUrl=${returnUrl}`;
  }

  // No returnUrl - user will stay on id.asimov.nexus after signup
  return `${nexusAuthUrl}/auth/signup`;
}

/**
 * Get the sign-out URL for id.asimov.nexus
 * After sign-out, users will be redirected back here
 *
 * @param redirectUri - The URL to redirect back to after signout. If not provided, user stays on id.asimov.nexus
 */
export function getSignOutUrl(redirectUri?: string): string {
  const nexusAuthUrl = import.meta.env.PUBLIC_NEXUS_AUTH_URL || 'https://id.asimov.nexus';

  if (redirectUri) {
    const returnUrl = encodeURIComponent(redirectUri);
    return `${nexusAuthUrl}/auth/signout?returnUrl=${returnUrl}`;
  }

  // No returnUrl - user will stay on id.asimov.nexus after signout
  return `${nexusAuthUrl}/auth/signout`;
}

/**
 * Get the account management URL for id.asimov.nexus
 * Users can manage their account settings here
 */
export function getAccountManagementUrl(redirectUri?: string): string {
  const nexusAuthUrl = import.meta.env.PUBLIC_NEXUS_AUTH_URL || 'https://id.asimov.nexus';
  if (redirectUri) {
    const returnUrl = encodeURIComponent(redirectUri);
    return `${nexusAuthUrl}/account?returnUrl=${returnUrl}`;
  }
  return `${nexusAuthUrl}/account`;
}
