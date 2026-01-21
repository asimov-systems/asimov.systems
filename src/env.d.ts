/// <reference types="astro/client" />
/// <reference types="@clerk/astro/env" />

interface ImportMetaEnv {
  // Environment
  readonly ENVIRONMENT?: 'dev' | 'prod';
  readonly MODE?: string;
  readonly NODE_ENV?: string;

  // Account Management
  readonly PUBLIC_ID_AUTH_URL?: string;

  // Feature Flags
  readonly PUBLIC_ENABLE_AUTH?: string; // Set to 'true' to show sign-in button

  // Clerk - Dev
  readonly PUBLIC_CLERK_PUBLISHABLE_KEY_DEV?: string;
  readonly CLERK_SECRET_KEY_DEV?: string;

  // Clerk - Prod
  readonly PUBLIC_CLERK_PUBLISHABLE_KEY_PROD?: string;
  readonly CLERK_SECRET_KEY_PROD?: string;

  // Clerk - Fallback (uses env-specific if not set)
  readonly PUBLIC_CLERK_PUBLISHABLE_KEY?: string;
  readonly CLERK_SECRET_KEY?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
