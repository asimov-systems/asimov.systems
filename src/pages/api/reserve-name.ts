import type { APIRoute } from 'astro';
import { clerkClient } from '@clerk/astro/server';
import { reserveName, getUserProfile, createUserProfile } from '@/lib/db';

export const POST: APIRoute = async (context) => {
  try {
    const auth = context.locals.auth();
    const { request } = context;
    
    if (!auth.userId) {
      return new Response(JSON.stringify({ error: 'Unauthorized' }), {
        status: 401,
        headers: { 'Content-Type': 'application/json' }
      });
    }
    
    const { name, isVip, paymentId } = await request.json();
    
    if (!name) {
      return new Response(JSON.stringify({ error: 'Name is required' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }
    
    // Ensure user profile exists
    let profile = await getUserProfile(auth.userId);
    if (!profile) {
      const user = await clerkClient(context).users.getUser(auth.userId);
      profile = await createUserProfile(
        auth.userId,
        user?.emailAddresses[0]?.emailAddress || ''
      );
    }
    
    const result = await reserveName(auth.userId, name, isVip, paymentId);
    
    if ('error' in result) {
      return new Response(JSON.stringify(result), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }
    
    return new Response(JSON.stringify({ success: true, reservation: result }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (error) {
    console.error('Error reserving name:', error);
    return new Response(
      JSON.stringify({ error: 'Internal server error' }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      }
    );
  }
};

