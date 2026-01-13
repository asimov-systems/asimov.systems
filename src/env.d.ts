/// <reference types="astro/client" />
/// <reference types="@clerk/astro/env" />

interface ImportMetaEnv {
  readonly PUBLIC_NEXUS_AUTH_URL?: string;
  readonly PUBLIC_CLERK_PUBLISHABLE_KEY?: string;
  readonly PUBLIC_CLERK_DOMAIN?: string;
  readonly PUBLIC_CLERK_IS_SATELLITE?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
