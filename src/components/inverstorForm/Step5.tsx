import { useFormContext } from 'react-hook-form';
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  FormDescription
} from '@/components/ui/form';

import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';

export const Step5 = () => {
  const { control, watch } = useFormContext();
  const investingExperience = watch('investingExperience');
  const supportBeyondCapital = watch('supportBeyondCapital');
  return (
    <>
      <FormField
        control={control}
        name="investingExperience"
        render={() => (
          <FormItem>
            <div className="mb-4">
              <FormLabel>Why are you interested in ASIMOV Systems? <span className="text-red-500">*</span></FormLabel>
              <FormDescription>Check any that apply.</FormDescription>
            </div>
            {[
              'Early-stage tech (AI, SaaS, productivity)',
              'Web3/blockchain (layer-1s, protocols, infra)',
              'Enterprise software or data platforms',
              'Consumer apps/tools',
              'Distribution/user growth',
              'None of the above',
              'Other'
            ].map((item) => (
              <FormField
                key={item}
                control={control}
                name="investingExperience"
                render={({ field }) => {
                  return (
                    <FormItem key={item} className="flex flex-row items-start space-y-0 space-x-3">
                      <FormControl>
                        <Checkbox
                          checked={field.value?.includes(item)}
                          onCheckedChange={(checked) => {
                            return checked
                              ? field.onChange([...field.value, item])
                              : field.onChange(
                                  field.value?.filter((value: string) => value !== item)
                                );
                          }}
                        />
                      </FormControl>
                      <FormLabel className="font-normal">{item}</FormLabel>
                    </FormItem>
                  );
                }}
              />
            ))}
            <FormMessage />
          </FormItem>
        )}
      />
      {investingExperience?.includes('Other') && (
        <FormField
          control={control}
          name="investingExperienceOther"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="Other: ________________" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      )}

      <FormField
        control={control}
        name="supportBeyondCapital"
        render={() => (
          <FormItem>
            <div className="mb-4">
              <FormLabel>How can you support ASIMOV beyond capital? <span className="text-red-500">*</span></FormLabel>
              <FormDescription>Select all that apply.</FormDescription>
            </div>
            {[
              'Technical / AI (validators, infra, dev tooling, AI expertise)',
              'Regulatory/compliance (crypto, AI, data governance)',
              'Strategic partnerships (foundations, enterprise, pilot programs)',
              'Token liquidity/exchange access',
              'Go-to-market and/or growth marketing',
              'Ecosystem/community building',
              'Intros to customers, partners, or investors',
              'Team building/hiring',
              'Product, tech, or UX feedback',
              'Distribution/user growth',
              'Other'
            ].map((item) => (
              <FormField
                key={item}
                control={control}
                name="supportBeyondCapital"
                render={({ field }) => {
                  return (
                    <FormItem key={item} className="flex flex-row items-start space-y-0 space-x-3">
                      <FormControl>
                        <Checkbox
                          checked={field.value?.includes(item)}
                          onCheckedChange={(checked) => {
                            return checked
                              ? field.onChange([...field.value, item])
                              : field.onChange(
                                  field.value?.filter((value: string) => value !== item)
                                );
                          }}
                        />
                      </FormControl>
                      <FormLabel className="font-normal">{item}</FormLabel>
                    </FormItem>
                  );
                }}
              />
            ))}
            <FormMessage />
          </FormItem>
        )}
      />
      {supportBeyondCapital?.includes('Other') && (
        <FormField
          control={control}
          name="supportBeyondCapitalOther"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="Other: ________________" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      )}

      <FormField
        control={control}
        name="notableInvestments"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Notable Investments or Board Roles</FormLabel>
            <FormControl>
              <Textarea placeholder="E.g. OpenAI, Anthropic, etc." {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={control}
        name="relevantNetworks"
        render={({ field }) => (
          <FormItem>
            <FormLabel>
              Do you have relevant networks in our primary target markets?{' '}
              <span className="text-red-500">*</span>
            </FormLabel>
            <FormDescription>
              <i>(US, UK, UAE, Singapore, Canada, KSA, India, Australia)</i>
            </FormDescription>
            <FormControl>
              <RadioGroup
                onValueChange={field.onChange}
                defaultValue={field.value}
                className="flex flex-col space-y-1"
              >
                <FormItem className="flex items-center space-y-0 space-x-3">
                  <FormControl>
                    <RadioGroupItem value="yes" />
                  </FormControl>
                  <FormLabel className="font-normal">Yes</FormLabel>
                </FormItem>
                <FormItem className="flex items-center space-y-0 space-x-3">
                  <FormControl>
                    <RadioGroupItem value="no" />
                  </FormControl>
                  <FormLabel className="font-normal">No</FormLabel>
                </FormItem>
              </RadioGroup>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </>
  );
};
