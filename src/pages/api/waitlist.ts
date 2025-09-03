import type { APIRoute } from 'astro';
import type { WaitlistMetadata } from '@/lib/types';

export const POST: APIRoute = async ({ request }) => {
  try {
    const GETWAITLIST_ID = import.meta.env.GETWAITLIST_ID;
    const GETWAITLIST_API_URL = import.meta.env.GETWAITLIST_API_URL;

    if (!GETWAITLIST_ID) {
      console.error('GETWAITLIST_ID environment variable not set');
      return new Response(JSON.stringify({ error: 'Server configuration error' }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    if (!GETWAITLIST_API_URL) {
      console.error('GETWAITLIST_API_URL environment variable not set');
      return new Response(JSON.stringify({ error: 'Server configuration error' }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    const formData = await request.json();

    // Validate required fields from InvestorForm
    if (!formData.email || typeof formData.email !== 'string') {
      return new Response(JSON.stringify({ error: 'Email is required' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    if (!formData.firstName || typeof formData.firstName !== 'string') {
      return new Response(JSON.stringify({ error: 'First name is required' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    if (!formData.lastName || typeof formData.lastName !== 'string') {
      return new Response(JSON.stringify({ error: 'Last name is required' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // Prepare comprehensive metadata for InvestorForm
    const metadata: WaitlistMetadata = {
      source: 'asimov.systems_investor_form',
      signup_date: new Date().toISOString(),

      // Step 1: Basic Details
      organization: formData.organization,
      website: formData.website,
      linkedin: formData.linkedin,
      location: formData.location,

      // Step 2: Investor Profile
      how_heard_about_us: formData.howHeardAboutUs,
      how_heard_other: formData.howHeardOther,
      investor_type: Array.isArray(formData.investorType) ? formData.investorType.join(', ') : '',
      investor_type_other: formData.investorTypeOther,
      accredited_investor: formData.accreditedInvestor,
      us_securities_law: formData.usSecuritiesLaw,

      // Step 3: Investment Interests
      cheque_size: formData.chequeSize,
      interested_rounds: Array.isArray(formData.interestedRounds) ? formData.interestedRounds.join(', ') : '',
      interested_rounds_other: formData.interestedRoundsOther,
      deployment_horizon: Array.isArray(formData.deploymentHorizon) ? formData.deploymentHorizon.join(', ') : '',
      token_equity_interest: Array.isArray(formData.tokenEquityInterest) ? formData.tokenEquityInterest.join(', ') : '',
      current_funding_rounds: formData.currentFundingRounds,
      beta_access: formData.betaAccess,

      // Step 4: Why ASIMOV
      why_asimov: Array.isArray(formData.whyAsimov) ? formData.whyAsimov.join(', ') : '',
      why_asimov_elaborate: formData.whyAsimovElaborate,

      // Step 5: Track Record & Value Add
      investing_experience: Array.isArray(formData.investingExperience) ? formData.investingExperience.join(', ') : '',
      investing_experience_other: formData.investingExperienceOther,
      support_beyond_capital: Array.isArray(formData.supportBeyondCapital) ? formData.supportBeyondCapital.join(', ') : '',
      support_beyond_capital_other: formData.supportBeyondCapitalOther,
      notable_investments: formData.notableInvestments,
      relevant_networks: formData.relevantNetworks,

      // Step 6: KPIs & Operational Priorities
      kpis: Array.isArray(formData.kpis) ? formData.kpis.join(', ') : '',
      kpis_other: formData.kpisOther,
      move_forward_time: Array.isArray(formData.moveForwardTime) ? formData.moveForwardTime.join(', ') : '',
      decision_makers: formData.decisionMakers ? String(formData.decisionMakers) : '',

      // Step 7: Admin & Final Details
      diligence_docs: Array.isArray(formData.diligenceDocs) ? formData.diligenceDocs.join(', ') : '',
      diligence_docs_other: formData.diligenceDocsOther,
      investor_updates_channel: Array.isArray(formData.investorUpdatesChannel) ? formData.investorUpdatesChannel.join(', ') : '',
      open_to_feedback: formData.openToFeedback,
      time_zone: formData.timeZone,
      additional_info: formData.additionalInfo
    };

    // Filter out undefined values from metadata
    const cleanMetadata = Object.fromEntries(
      Object.entries(metadata).filter(([_, value]) => value !== undefined && value !== null && value !== '')
    );

    console.log('Cleaned Metadata:', cleanMetadata);

    // Prepare the payload for GetWaitlist API
    const payload: Record<string, unknown> = {
      email: formData.email.trim(),
      first_name: formData.firstName.trim(),
      last_name: formData.lastName.trim(),
      waitlist_id: parseInt(GETWAITLIST_ID),
      metadata: cleanMetadata // Send as object as per GetWaitlist docs
    };

    console.log('Submitting to GetWaitlist:', {
      payload: {
        ...payload,
        metadata: cleanMetadata
      }
    });

    // Make the request to GetWaitlist API
    const response = await fetch(`${GETWAITLIST_API_URL}/signup`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('GetWaitlist API error:', response.status, errorText);
      return new Response(JSON.stringify({ error: 'Failed to submit investor form. Please try again.' }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    const signupData = await response.json();
    console.log('Investor signup successful for:', formData.email);

    // Return only the data we want to expose to the client
    return new Response(
      JSON.stringify({
        success: true,
        priority: signupData.priority,
        referral_link: signupData.referral_link,
        verified: signupData.verified,
        total_referrals: signupData.total_referrals || 0,
        uuid: signupData.uuid
      }),
      {
        status: 200,
        headers: { 'Content-Type': 'application/json' }
      }
    );
  } catch (error) {
    console.error('API route error:', error);
    return new Response(JSON.stringify({ error: 'Internal server error. Please try again.' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
};

export const GET: APIRoute = async ({ url }) => {
  try {
    const GETWAITLIST_ID = import.meta.env.GETWAITLIST_ID;
    const GETWAITLIST_API_URL = import.meta.env.GETWAITLIST_API_URL;

    if (!GETWAITLIST_ID) {
      console.error('GETWAITLIST_ID environment variable not set');
      return new Response(JSON.stringify({ error: 'Server configuration error' }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    if (!GETWAITLIST_API_URL) {
      console.error('GETWAITLIST_API_URL environment variable not set');
      return new Response(JSON.stringify({ error: 'Server configuration error' }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    const email = url.searchParams.get('email');

    // At least email is required according to GetWaitlist API
    if (!email) {
      return new Response(JSON.stringify({ error: 'Email is required' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // Build query parameters for GetWaitlist API
    const params = new URLSearchParams();
    params.append('waitlist_id', GETWAITLIST_ID);
    params.append('email', email);

    console.log('Fetching signup from GetWaitlist for:', email);

    // Make the request to GetWaitlist API
    const response = await fetch(`${GETWAITLIST_API_URL}/signup?${params.toString()}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    });

    if (!response.ok) {
      if (response.status === 404) {
        return new Response(
          JSON.stringify({
            success: false,
            error: 'No signup found with the provided information',
            verified: false
          }),
          {
            status: 404,
            headers: { 'Content-Type': 'application/json' }
          }
        );
      }

      const errorText = await response.text();
      console.error('GetWaitlist API error:', response.status, errorText);
      return new Response(
        JSON.stringify({ error: 'Failed to fetch signup information. Please try again.' }),
        { status: 500, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const signupData = await response.json();
    console.log('Signup found for:', email);

    // Return the signup data
    return new Response(
      JSON.stringify({
        success: true,
        waiter: {
          email: signupData.email,
          priority: signupData.priority,
          referral_link: signupData.referral_link,
          verified: signupData.verified,
          amount_referred: signupData.amount_referred,
          uuid: signupData.uuid,
          created_at: signupData.created_at,
          referral_token: signupData.referral_token,
          referred_by_signup_token: signupData.referred_by_signup_token
        },
        verified: signupData.verified || false
      }),
      {
        status: 200,
        headers: { 'Content-Type': 'application/json' }
      }
    );
  } catch (error) {
    console.error('API route error:', error);
    return new Response(JSON.stringify({ error: 'Internal server error. Please try again.' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
};
