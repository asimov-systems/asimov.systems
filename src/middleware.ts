// GTM site: auth is for navbar/sign-in state and credit display only. All account flows live on id.asimov.systems.
import { clerkMiddleware } from '@clerk/astro/server';

export const onRequest = clerkMiddleware();
