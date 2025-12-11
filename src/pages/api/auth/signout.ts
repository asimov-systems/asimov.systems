import type { APIRoute } from 'astro';

export const POST: APIRoute = async (context) => {
  // Clear Clerk session cookie
  context.cookies.delete('__session', {
    path: '/',
  });
  
  // Also try to clear __client_uat cookie
  context.cookies.delete('__client_uat', {
    path: '/',
  });
  
  return new Response(JSON.stringify({ success: true }), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
    },
  });
};


