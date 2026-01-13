import type { APIRoute } from 'astro';

export const POST: APIRoute = async (_context) => {
  // Clerk handles session cookies automatically
  // This endpoint can be used for additional cleanup if needed
  return new Response(JSON.stringify({ success: true }), {
    status: 200,
    headers: {
      'Content-Type': 'application/json'
    }
  });
};
