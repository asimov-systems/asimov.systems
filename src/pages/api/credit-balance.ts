/**
 * Proxies credit balance from id.asimov.systems.
 * Set ID_CREDIT_BALANCE_API_URL (full URL to id's credit/balance endpoint) to enable.
 * Returns { balance: number | null }; null when disabled or on error.
 */
import type { APIRoute } from 'astro/server';

export const GET: APIRoute = async (context) => {
  const auth = context.locals.auth();
  if (!auth.userId) {
    return new Response(JSON.stringify({ balance: null }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  }

  const apiUrl = import.meta.env.ID_CREDIT_BALANCE_API_URL;
  if (!apiUrl || typeof apiUrl !== 'string') {
    return new Response(JSON.stringify({ balance: null }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  }

  try {
    const token = await auth.getToken();
    if (!token) {
      return new Response(JSON.stringify({ balance: null }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    const res = await fetch(apiUrl, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json'
      },
      cache: 'no-store'
    });

    if (!res.ok) {
      return new Response(JSON.stringify({ balance: null }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    const data = (await res.json()) as { balance?: number; credits?: number };
    const balance =
      typeof data.balance === 'number'
        ? data.balance
        : typeof data.credits === 'number'
          ? data.credits
          : null;

    return new Response(JSON.stringify({ balance }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch {
    return new Response(JSON.stringify({ balance: null }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  }
};
