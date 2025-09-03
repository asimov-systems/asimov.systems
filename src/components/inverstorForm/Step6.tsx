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

export const Step6 = () => {
  const { control, watch } = useFormContext();
  const kpis = watch('kpis');
  return (
    <>
      <FormField
        control={control}
        name="kpis"
        render={() => (
          <FormItem>
            <div className="mb-4">
              <FormLabel>
                Which KPIs matter most to you? <span className="text-red-500">*</span>
              </FormLabel>
              <FormDescription>Select all that apply.</FormDescription>
            </div>
            {['DAU/MAU', 'Retention', 'CAC:LTV', 'Viral coefficient', 'Revenue', 'Other'].map(
              (item) => (
                <FormField
                  key={item}
                  control={control}
                  name="kpis"
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
      {kpis?.includes('Other') && (
        <FormField
          control={control}
          name="kpisOther"
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
        name="moveForwardTime"
        render={() => (
          <FormItem>
            <div className="mb-4">
              <FormLabel>
                How soon could you move forward if there&apos;s a fit?{' '}
                <span className="text-red-500">*</span>
              </FormLabel>
              <FormDescription>Select all that apply.</FormDescription>
            </div>
            {[
              'Immediately',
              'Within 1–2 weeks',
              'Within 1–2 months',
              'Evaluating over next few months'
            ].map((item) => (
              <FormField
                key={item}
                control={control}
                name="moveForwardTime"
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
        name="decisionMakers"
        render={({ field }) => (
          <FormItem>
            <FormLabel>
              How many decision-makers are involved on your side?{' '}
              <span className="text-red-500">*</span>
            </FormLabel>
            <FormControl>
              <Input placeholder="E.g. 1" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </>
  );
};
