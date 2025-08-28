import { useFormContext } from 'react-hook-form';
import { Input } from '@/components/ui/input';
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select';

import { Checkbox } from '@/components/ui/checkbox';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';

export const Step3 = () => {
  const { control, watch } = useFormContext();
  const interestedRounds = watch('interestedRounds');

  return (
    <>
      <FormField
        control={control}
        name="chequeSize"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Typical cheque size per investment:</FormLabel>
            <Select onValueChange={field.onChange} defaultValue={field.value}>
              <FormControl>
                <SelectTrigger>
                  <SelectValue placeholder="Select an option" />
                </SelectTrigger>
              </FormControl>
              <SelectContent>
                {['$25K–$100K', '$100K–$250K', '$250K–$500K', '$500K–$1M', '$1M–$2M', '$2M+'].map(
                  (option) => (
                    <SelectItem key={option} value={option.toLowerCase().replace(/\s+/g, '-')}>
                      {option}
                    </SelectItem>
                  )
                )}
              </SelectContent>
            </Select>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={control}
        name="interestedRounds"
        render={() => (
          <FormItem>
            <FormLabel>Which rounds are you interested in?</FormLabel>
            {['Strategic/Pre-seed', 'Seed', 'Series A', 'Series B or later', 'Other'].map(
              (item) => (
                <FormField
                  key={item}
                  control={control}
                  name="interestedRounds"
                  render={({ field }) => {
                    return (
                      <FormItem
                        key={item}
                        className="flex flex-row items-start space-y-0 space-x-3"
                      >
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
              )
            )}
            <FormMessage />
          </FormItem>
        )}
      />
      {interestedRounds?.includes('Other') && (
        <FormField
          control={control}
          name="interestedRoundsOther"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="Please specify other round" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      )}

      <FormField
        control={control}
        name="deploymentHorizon"
        render={() => (
          <FormItem>
            <FormLabel>Deployment horizon:</FormLabel>
            {['Less than 3 months', '3–6 months', '6–12 months', 'Exploratory only'].map((item) => (
              <FormField
                key={item}
                control={control}
                name="deploymentHorizon"
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

      <FormField
        control={control}
        name="tokenEquityInterest"
        render={() => (
          <FormItem>
            <FormLabel>Deployment horizon:</FormLabel>
            {['Very interested in both', 'Equity only', 'Token only', 'Undecided/open'].map(
              (item) => (
                <FormField
                  key={item}
                  control={control}
                  name="tokenEquityInterest"
                  render={({ field }) => {
                    return (
                      <FormItem
                        key={item}
                        className="flex flex-row items-start space-y-0 space-x-3"
                      >
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
              )
            )}
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={control}
        name="currentFundingRounds"
        render={({ field }) => (
          <FormItem>
            <FormLabel>
              Would you like to be considered for current funding rounds?{' '}
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
        name="betaAccess"
        render={({ field }) => (
          <FormItem>
            <FormLabel>
              Would you like early beta access to ASIMOV Personal Intelligence?{' '}
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
