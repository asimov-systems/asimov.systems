import { useFormContext } from 'react-hook-form';
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  FormDescription
} from '@/components/ui/form';

import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';

export const Step4 = () => {
  const { control, watch } = useFormContext();
  const whyAsimov = watch('whyAsimov');

  return (
    <>
      <FormField
        control={control}
        name="whyAsimov"
        render={() => (
          <FormItem>
            <div className="mb-4">
              <FormLabel>Why are you interested in ASIMOV Systems?</FormLabel>
              <FormDescription>Select any that apply.</FormDescription>
            </div>
            {[
              'Web3/AI intersection',
              'Decentralized data marketplace',
              'Privacy-first "second brain"',
              'New productivity category',
              'You experience cognitive overload too',
              'Monetizable product launching soon',
              'Tokenomics',
              'Founding team',
              'Building on truth',
              'Other'
            ].map((item) => (
              <FormField
                key={item}
                control={control}
                name="whyAsimov"
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
      {whyAsimov?.includes('Other') && (
        <FormField
          control={control}
          name="whyAsimovOther"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Textarea placeholder="Please elaborate if desired" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      )}
    </>
  );
};
