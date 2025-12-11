import type { APIRoute } from 'astro';
import { clerkClient } from '@clerk/astro/server';
import { getUserProfile, createUserProfile, updateUserProfile } from '@/lib/db';

export const GET: APIRoute = async (context) => {
  try {
    const auth = context.locals.auth();
    
    if (!auth.userId) {
      return new Response(JSON.stringify({ error: 'Unauthorized' }), {
        status: 401,
        headers: { 'Content-Type': 'application/json' }
      });
    }
    
    let profile = await getUserProfile(auth.userId);
    
    if (!profile) {
      const user = await clerkClient(context).users.getUser(auth.userId);
      profile = await createUserProfile(
        auth.userId,
        user?.emailAddresses[0]?.emailAddress || ''
      );
    }
    
    return new Response(JSON.stringify(profile), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (error) {
    console.error('Error fetching profile:', error);
    return new Response(
      JSON.stringify({ error: 'Internal server error' }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      }
    );
  }
};

export const PATCH: APIRoute = async (context) => {
  try {
    const auth = context.locals.auth();
    const { request } = context;
    
    if (!auth.userId) {
      return new Response(JSON.stringify({ error: 'Unauthorized' }), {
        status: 401,
        headers: { 'Content-Type': 'application/json' }
      });
    }
    
    const updates = await request.json();
    const profile = await updateUserProfile(auth.userId, updates);
    
    if (!profile) {
      return new Response(JSON.stringify({ error: 'Profile not found' }), {
        status: 404,
        headers: { 'Content-Type': 'application/json' }
      });
    }
    
    return new Response(JSON.stringify(profile), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (error) {
    console.error('Error updating profile:', error);
    return new Response(
      JSON.stringify({ error: 'Internal server error' }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      }
    );
  }
};

