import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { z } from 'zod';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Define Zod schema for validation for all form fields
export const formSchema = z.object({
  // Step 1: Basic Details
  firstName: z.string().min(1, 'First name is required.'),
  lastName: z.string().min(1, 'Last name is required.'),
  email: z.string().email('Invalid email address.'),
  organization: z.string().optional(),
  website: z.string().url('Please enter a valid URL.').optional().or(z.literal('')),
  linkedin: z.string().url('Please enter a valid URL.').optional().or(z.literal('')),
  location: z.string().optional(),

  // Step 2: Investor Profile
  howHeardAboutUs: z.string().optional(),
  howHeardOther: z.string().optional(),
  investorType: z.array(z.string()).min(1, 'Select at least one option.'),
  investorTypeOther: z.string().optional(),
  accreditedInvestor: z.enum(['yes', 'no'], { required_error: 'This field is required.' }),
  usSecuritiesLaw: z.enum(['yes', 'no'], { required_error: 'This field is required.' }),

  // Step 3: Investment Interests
  chequeSize: z.string({ required_error: 'This field is required.' }),
  interestedRounds: z.array(z.string()).min(1, 'Select at least one option.'),
  interestedRoundsOther: z.string().optional(),
  deploymentHorizon: z.array(z.string()).min(1, 'Select at least one option.'),
  tokenEquityInterest: z.array(z.string()).min(1, 'Select at least one option.'),
  currentFundingRounds: z.enum(['yes', 'no'], { required_error: 'This field is required.' }),
  betaAccess: z.enum(['yes', 'no'], { required_error: 'This field is required.' }),

  // Step 4: Why ASIMOV
  whyAsimov: z.array(z.string()).min(1, 'Select at least one option.'),
  // whyAsimovOther: z.string().optional(),
  whyAsimovElaborate: z.string().optional(),

  // Step 5: Track Record & Value Add
  investingExperience: z.array(z.string()).min(1, 'Select at least one option.'),
  investingExperienceOther: z.string().optional(),
  supportBeyondCapital: z.array(z.string()).min(1, 'Select at least one option.'),
  supportBeyondCapitalOther: z.string().optional(),
  notableInvestments: z.string().optional(),
  relevantNetworks: z.enum(['yes', 'no'], { required_error: 'This field is required.' }),

  // Step 6: KPIs & Operational Priorities
  kpis: z.array(z.string()).min(1, 'Select at least one option.'),
  kpisOther: z.string().optional(),
  moveForwardTime: z.array(z.string()).min(1, 'Select at least one option.'),
  decisionMakers: z.coerce.number().min(1, 'Must be at least 1.').optional(),

  // Step 7: Admin & Final Details
  diligenceDocs: z.array(z.string()).min(1, 'Select at least one option.'),
  diligenceDocsOther: z.string().optional(),
  investorUpdatesChannel: z.array(z.string()).min(1, 'Select at least one option.'),
  openToFeedback: z.enum(['yes', 'no'], { required_error: 'This field is required.' }),
  timeZone: z.string().optional(),
  additionalInfo: z.string().optional()
});
