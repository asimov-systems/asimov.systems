import { useFormContext } from 'react-hook-form';
import { Input } from '@/components/ui/input';
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  FormDescription
} from '@/components/ui/form';

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select';

import { Checkbox } from '@/components/ui/checkbox';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';

export const Step2 = () => {
  const { control, watch } = useFormContext();
  const howHeard = watch('howHeardAboutUs');
  const investorTypes = watch('investorType');
  const investorTypeOptions = [
    'VC fund',
    'Family office',
    'Angel investor',
    'DAO',
    'Corporate/Strategic',
    'Government fund'
  ];

  return (
    <>
      <FormField
        control={control}
        name="howHeardAboutUs"
        render={({ field }) => (
          <FormItem>
            <FormLabel>How did you hear about us?</FormLabel>
            <Select onValueChange={field.onChange} defaultValue={field.value}>
              <FormControl>
                <SelectTrigger>
                  <SelectValue placeholder="Select an option" />
                </SelectTrigger>
              </FormControl>
              <SelectContent>
                {[
                  'X',
                  'LinkedIn',
                  'dAGI Demo Day',
                  'Google HQ London',
                  'Referral',
                  'Press',
                  'Team'
                ].map((option) => (
                  <SelectItem key={option} value={option.toLowerCase().replace(/\s+/g, '-')}>
                    {option}
                  </SelectItem>
                ))}
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
            <FormMessage />
          </FormItem>
        )}
      />
      {howHeard === 'other' && (
        <FormField
          control={control}
          name="howHeardOther"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="Please specify" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      )}
      <FormField
        control={control}
        name="investorType"
        render={() => (
          <FormItem>
            <div className="mb-4">
              <FormLabel>Investor Type</FormLabel>
              <FormDescription>Select all that apply.</FormDescription>
            </div>
            {[...investorTypeOptions, 'Other'].map((item) => (
              <FormField
                key={item}
                control={control}
                name="investorType"
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
      {investorTypes?.includes('Other') && (
        <FormField
          control={control}
          name="investorTypeOther"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="Please specify other investor type" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      )}
      <FormField
        control={control}
        name="accreditedInvestor"
        render={({ field }) => (
          <FormItem>
            <FormLabel>
              Are you an accredited investor in your primary jurisdiction?{' '}
              <span className="text-red-500">*</span>
            </FormLabel>
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
      <FormField
        control={control}
        name="usSecuritiesLaw"
        render={({ field }) => (
          <FormItem>
            <FormLabel>
              Are you an American citizen or subject to US securities law?{' '}
              <span className="text-red-500">*</span>
            </FormLabel>
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
