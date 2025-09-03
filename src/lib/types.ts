// GetWaitlist API Types
export interface WaitlistMetadata {
  source: string;
  signup_date: string;

  // InvestorForm specific metadata - all arrays converted to comma-separated strings
  organization?: string;
  website?: string;
  linkedin?: string;
  location?: string;
  how_heard_about_us?: string;
  how_heard_other?: string;
  investor_type?: string; // comma-separated string
  investor_type_other?: string;
  accredited_investor?: string;
  us_securities_law?: string;
  cheque_size?: string;
  interested_rounds?: string; // comma-separated string
  interested_rounds_other?: string;
  deployment_horizon?: string; // comma-separated string
  token_equity_interest?: string; // comma-separated string
  current_funding_rounds?: string;
  beta_access?: string;
  why_asimov?: string; // comma-separated string
  why_asimov_elaborate?: string;
  investing_experience?: string; // comma-separated string
  investing_experience_other?: string;
  support_beyond_capital?: string; // comma-separated string
  support_beyond_capital_other?: string;
  notable_investments?: string;
  relevant_networks?: string;
  kpis?: string; // comma-separated string
  kpis_other?: string;
  move_forward_time?: string; // comma-separated string
  decision_makers?: string; // converted to string
  diligence_docs?: string; // comma-separated string
  diligence_docs_other?: string;
  investor_updates_channel?: string; // comma-separated string
  open_to_feedback?: string;
  time_zone?: string;
  additional_info?: string;
}
export interface WaitlistAnswer {
  question_value: string;
  optional: boolean;
  answer_value: string | null;
}

export interface WaitlistSignupRequest {
  email: string;
  waitlist_id: number;
  first_name?: string;
  last_name?: string;
  phone?: string;
  referral_link?: string;
  metadata?: WaitlistMetadata;
  answers?: WaitlistAnswer[];
}

export interface WaitlistSignupResponse {
  amount_referred: number;
  answers?: WaitlistAnswer[];
  created_at: string;
  email: string;
  priority: number;
  referral_link: string;
  referral_token: string;
  referred_by_signup_token?: string;
  removed_date?: string | null;
  removed_priority?: number | null;
  uuid: string;
  verified: boolean;
  waitlist_id: number;
}
