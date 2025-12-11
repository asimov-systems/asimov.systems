import type { APIRoute } from 'astro';
import { isNameAvailable } from '@/lib/db';

export const GET: APIRoute = async ({ request }) => {
  const url = new URL(request.url);
  const name = url.searchParams.get('name');
  
  if (!name) {
    return new Response(JSON.stringify({ error: 'Name parameter required' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' }
    });
  }
  
  const available = await isNameAvailable(name);
  
  return new Response(JSON.stringify({ available, name }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' }
  });
};

