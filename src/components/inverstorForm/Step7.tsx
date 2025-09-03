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
import { Checkbox } from '@/components/ui/checkbox';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Textarea } from '../ui/textarea';

export const Step7 = () => {
  const { control, watch } = useFormContext();
  const diligenceDocs = watch('diligenceDocs');

  return (
    <>
      <FormField
        control={control}
        name="diligenceDocs"
        render={() => (
          <FormItem>
            <div className="mb-4">
              <FormLabel>
                What documents do you require for due diligence?{' '}
                <span className="text-red-500">*</span>
              </FormLabel>
              <FormDescription>Select all that apply.</FormDescription>
            </div>
            {[
              'Go-to-market strategy',
              'Team bios',
              'Financial model',
              'Company structure',
              'Other'
            ].map((item) => (
              <FormField
                key={item}
                control={control}
                name="diligenceDocs"
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
      {diligenceDocs?.includes('Other') && (
        <FormField
          control={control}
          name="diligenceDocsOther"
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
        name="investorUpdatesChannel"
        render={() => (
          <FormItem>
            <div className="mb-4">
              <FormLabel>
                What documents do you require for due diligence?{' '}
                <span className="text-red-500">*</span>
              </FormLabel>
              <FormDescription>Select all that apply.</FormDescription>
            </div>
            {['Email', 'Signal', 'WhatsApp', 'Telegram', 'Private folder/access'].map((item) => (
              <FormField
                key={item}
                control={control}
                name="investorUpdatesChannel"
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
        name="openToFeedback"
        render={({ field }) => (
          <FormItem>
            <FormLabel>
              Are you open to contributing feedback on product development, beta testing, or GTM?{' '}
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
        name="timeZone"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Your time zone:</FormLabel>
            <FormControl>
              <Input placeholder="(e.g., UTC+1, EST, PST)" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={control}
        name="additionalInfo"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Anything else you&apos;d like us to know?</FormLabel>
            <FormControl>
              <Textarea placeholder="" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </>
  );
};
