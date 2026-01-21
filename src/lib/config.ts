/**
 * Environment Configuration
 *
 * Manages environment-specific configuration for dev and prod environments.
 *
 * Dev Environment:
 * - Uses dev Clerk keys
 *
 * Prod Environment:
 * - Uses prod Clerk keys
 *
 * Note: Payment/reservation functionality is handled on id.asimov.systems
 */

export type Environment = 'dev' | 'prod';

/**
 * Get the current environment based on NODE_ENV or explicit ENVIRONMENT variable
 */
export function getEnvironment(): Environment {
  // Check for explicit environment variable first
  const explicitEnv = import.meta.env.ENVIRONMENT;
  if (explicitEnv === 'dev' || explicitEnv === 'prod') {
    return explicitEnv;
  }

  // Fall back to NODE_ENV
  const nodeEnv = import.meta.env.MODE || import.meta.env.NODE_ENV;
  if (nodeEnv === 'production' || nodeEnv === 'prod') {
    return 'prod';
  }

  // Default to dev for development
  return 'dev';
}

/**
 * Get Clerk publishable key based on environment
 */
export function getClerkPublishableKey(): string {
  const env = getEnvironment();

  if (env === 'prod') {
    return (
      import.meta.env.PUBLIC_CLERK_PUBLISHABLE_KEY_PROD ||
      import.meta.env.PUBLIC_CLERK_PUBLISHABLE_KEY ||
      ''
    );
  } else {
    return (
      import.meta.env.PUBLIC_CLERK_PUBLISHABLE_KEY_DEV ||
      import.meta.env.PUBLIC_CLERK_PUBLISHABLE_KEY ||
      ''
    );
  }
}

/**
 * Get Clerk secret key based on environment (server-side only)
 */
export function getClerkSecretKey(): string {
  const env = getEnvironment();

  if (env === 'prod') {
    return import.meta.env.CLERK_SECRET_KEY_PROD || import.meta.env.CLERK_SECRET_KEY || '';
  } else {
    return import.meta.env.CLERK_SECRET_KEY_DEV || import.meta.env.CLERK_SECRET_KEY || '';
  }
}

/**
 * Get the account management URL (id.asimov.systems)
 */
export function getIdAuthUrl(): string {
  return import.meta.env.PUBLIC_ID_AUTH_URL || 'https://id.asimov.systems';
}

/**
 * Check if we're in production environment
 */
export function isProduction(): boolean {
  return getEnvironment() === 'prod';
}

/**
 * Check if we're in development environment
 */
export function isDevelopment(): boolean {
  return getEnvironment() === 'dev';
}

/**
 * Check if authentication UI should be enabled
 * Set PUBLIC_ENABLE_AUTH='true' to show sign-in button
 * Defaults to false (hidden) for production readiness
 */
export function isAuthEnabled(): boolean {
  return import.meta.env.PUBLIC_ENABLE_AUTH === 'true';
}
