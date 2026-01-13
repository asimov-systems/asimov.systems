/// <reference types="astro/client" />
/// <reference types="@clerk/astro/env" />

interface ImportMetaEnv {
  readonly PUBLIC_NEXUS_AUTH_URL?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
