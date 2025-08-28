import { useState } from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { motion } from 'framer-motion';

import { Button } from '@/components/ui/button';

import { formSchema } from '@/lib/utils';

import { Step1, Step2, Step3, Step4, Step5, Step6, Step7 } from '@/components/inverstorForm';

const steps = [
  {
    id: '01',
    name: 'Basic Details',
    component: Step1,
    fields: ['firstName', 'lastName', 'email', 'organization', 'website', 'linkedin', 'location']
  },
  {
    id: '02',
    name: 'Investor Profile',
    component: Step2,
    fields: [
      'howHeardAboutUs',
      'investorType',
      'accreditedInvestor',
      'usSecuritiesLaw',
      'howHeardOther',
      'investorTypeOther'
    ]
  },
  {
    id: '03',
    name: 'Investment Interests',
    component: Step3,
    fields: [
      'chequeSize',
      'interestedRounds',
      'deploymentHorizon',
      'interestedRoundsOther',
      'tokenEquityInterest',
      'currentFundingRounds',
      'betaAccess'
    ]
  },
  { id: '04', name: 'Why ASIMOV?', component: Step4, fields: ['whyAsimov', 'whyAsimovOther'] },
  {
    id: '05',
    name: 'Track Record & Value Add',
    component: Step5,
    fields: [
      'investingExperience',
      'investingExperienceOther',
      'supportBeyondCapital',
      'supportBeyondCapitalOther',
      'notableInvestments',
      'relevantNetworks'
    ]
  },
  {
    id: '06',
    name: 'KPIs & Operational Priorities',
    component: Step6,
    fields: ['kpis', 'kpisOther', 'moveForwardTime', 'decisionMakers']
  },
  {
    id: '07',
    name: 'Admin & Final Details',
    component: Step7,
    fields: [
      'diligenceDocs',
      'diligenceDocsOther',
      'investorUpdatesChannel',
      'openToFeedback',
      'timeZone',
      'additionalInfo'
    ]
  }
];

const InvestorForm = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const methods = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      investorType: [],
      interestedRounds: [],
      deploymentHorizon: [],
      whyAsimov: [],
      investingExperience: [],
      supportBeyondCapital: [],
      kpis: [],
      diligenceDocs: []
    },
    mode: 'onChange'
  });

  const { trigger, handleSubmit } = methods;

  const handleNextStep = async () => {
    const fields = steps[currentStep].fields;
    const output = await trigger(fields as any, { shouldFocus: true });

    if (!output) return;

    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const onSubmit = (data: z.infer<typeof formSchema>) => {
    console.log('Form submitted:', data);
    alert('Form submitted successfully! Check the console for the data.');
  };

  const CurrentStepComponent = steps[currentStep].component;

  return (
    <section className="py-32">
      <div className="container mx-auto px-4 lg:px-6">
        <FormProvider {...methods}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-14 text-center">
              <motion.h1
                key={currentStep}
                initial={{ opacity: 0, x: -200 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 200 }}
                transition={{ duration: 0.3 }}
                className="mt-1 mb-3 text-3xl font-semibold md:text-4xl"
              >
                {steps[currentStep].name}
              </motion.h1>
              <p className="text-muted-foreground">
                Step {currentStep + 1} of {steps.length}
              </p>
            </div>

            <div className="mx-auto flex max-w-lg flex-col gap-6">
              <motion.div>
                <div className="mb-8 h-1 w-full rounded-full bg-gray-200">
                  <div
                    className="h-1 rounded-full bg-orange-500 transition-all duration-300"
                    style={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
                  ></div>
                </div>
              </motion.div>
              <motion.div
                key={currentStep}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.3 }}
                className="flex w-full max-w-lg flex-col gap-6"
              >
                <CurrentStepComponent />
              </motion.div>

              <div className="mt-8 flex justify-between">
                {currentStep > 0 && (
                  <Button type="button" variant="outline" onClick={handlePrevStep}>
                    Previous
                  </Button>
                )}
                {currentStep < steps.length - 1 ? (
                  <Button type="button" onClick={handleNextStep} className="ml-auto">
                    Next
                  </Button>
                ) : (
                  <Button type="submit" className="ml-auto">
                    Submit
                  </Button>
                )}
              </div>
            </div>
          </form>
        </FormProvider>
      </div>
    </section>
  );
};

export { InvestorForm };
