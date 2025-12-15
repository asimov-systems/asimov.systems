import { useState, useEffect } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements, PaymentElement, useStripe, useElements } from '@stripe/react-stripe-js';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Loader2, Crown, CheckCircle2 } from 'lucide-react';

const stripePromise = loadStripe(import.meta.env.PUBLIC_STRIPE_PUBLISHABLE_KEY || '');

interface VipUpgradeModalProps {
  open: boolean;
  onClose: () => void;
  onSuccess: () => void;
  isVip?: boolean;
  initialUsername?: string;
}

function CheckoutForm({ username, onSuccess, isVip = true }: { username: string; onSuccess: () => void; isVip?: boolean }) {
  const stripe = useStripe();
  const elements = useElements();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    setLoading(true);
    setError('');

    try {
      const { error: submitError } = await stripe.confirmPayment({
        elements,
        confirmParams: {
          return_url: `${window.location.origin}/dashboard?payment=success`,
        },
        redirect: 'if_required',
      });

      if (submitError) {
        setError(submitError.message || 'Payment failed');
      } else {
        // Payment succeeded
        setSuccess(true);
        // Reserve the name with correct VIP status
        await fetch('/api/reserve-name', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ name: username, isVip }),
        });
        
        setTimeout(() => {
          onSuccess();
        }, 2000);
      }
    } catch (err) {
      setError('An unexpected error occurred');
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <div className="py-8 text-center">
        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-500/20">
          <CheckCircle2 className="h-10 w-10 text-green-500" />
        </div>
        <h3 className="mb-2 text-xl font-semibold text-white">Payment Successful!</h3>
        <p className="text-slate-400">
          {isVip 
            ? 'Welcome to VIP membership 🎉' 
            : `Your username ${username}.asimov.id is now reserved! 🎉`
          }
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <PaymentElement />
      
      {error && (
        <div className="rounded-lg bg-red-500/10 p-3 text-sm text-red-500">
          {error}
        </div>
      )}
      
      <Button
        type="submit"
        disabled={!stripe || loading}
        className={`w-full ${isVip ? 'bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600' : 'bg-orange-500 hover:bg-orange-600'} disabled:opacity-50`}
      >
        {loading ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Processing...
          </>
        ) : isVip ? (
          <>
            <Crown className="mr-2 h-4 w-4" />
            Pay $100 & Upgrade to VIP
          </>
        ) : (
          <>
            Pay $50 & Reserve Username
          </>
        )}
      </Button>
    </form>
  );
}

export function VipUpgradeModal({ open, onClose, onSuccess, isVip = true, initialUsername = '' }: VipUpgradeModalProps) {
  const [username, setUsername] = useState(initialUsername);
  const [isChecking, setIsChecking] = useState(false);
  const [isAvailable, setIsAvailable] = useState<boolean | null>(null);
  const [clientSecret, setClientSecret] = useState('');
  const [step, setStep] = useState<'username' | 'payment'>(initialUsername ? 'username' : 'username');

  useEffect(() => {
    if (!open) {
      // Reset state when modal closes (unless we have an initial username)
      if (!initialUsername) {
        setStep('username');
        setUsername('');
      }
      setClientSecret('');
      setIsAvailable(null);
    }
  }, [open, initialUsername]);
  
  useEffect(() => {
    // If we have an initial username, check it and potentially go straight to payment
    if (initialUsername && open) {
      setUsername(initialUsername);
      checkUsername(initialUsername);
    }
  }, [initialUsername, open]);

  const checkUsername = async (name: string) => {
    if (name.length < 3) {
      setIsAvailable(null);
      return;
    }

    setIsChecking(true);

    try {
      const response = await fetch(`/api/check-name?name=${encodeURIComponent(name)}`);
      const data = await response.json();
      setIsAvailable(data.available);
    } catch (err) {
      console.error('Failed to check username:', err);
    } finally {
      setIsChecking(false);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      if (username) {
        checkUsername(username);
      }
    }, 500);

    return () => clearTimeout(timer);
  }, [username]);

  const handleContinueToPayment = async () => {
    if (!username || !isAvailable) return;

    setIsChecking(true);

    try {
      const response = await fetch('/api/create-payment-intent', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: username, isVip }),
      });

      const data = await response.json();
      
      if (data.clientSecret) {
        setClientSecret(data.clientSecret);
        setStep('payment');
      }
    } catch (err) {
      console.error('Failed to create payment intent:', err);
    } finally {
      setIsChecking(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-h-[90vh] max-w-2xl overflow-y-auto border-slate-700 bg-slate-800/95 backdrop-blur-lg">
        <DialogHeader>
          <DialogTitle className="flex items-center text-2xl text-white">
            {isVip && <Crown className="mr-2 h-6 w-6 text-yellow-500" />}
            {isVip ? 'Upgrade to VIP' : 'Reserve Your Username'}
          </DialogTitle>
          <DialogDescription className="text-slate-300">
            {step === 'username'
              ? isVip ? 'Choose your premium VIP username' : 'Choose your username'
              : isVip ? 'Complete your payment to unlock VIP features' : 'Complete your payment to reserve your username'}
          </DialogDescription>
        </DialogHeader>

        {step === 'username' && (
          <div className="space-y-6">
              <div className="space-y-2">
              <Label htmlFor="vip-username" className="text-slate-200">
                {isVip ? 'VIP Username' : 'Username'}
              </Label>
              <div className="relative">
                <Input
                  id="vip-username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value.toLowerCase())}
                  placeholder="premium-name"
                  className="border-slate-600 bg-slate-900/50 text-white placeholder:text-slate-500"
                  maxLength={30}
                />
                {isChecking && (
                  <Loader2 className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 animate-spin text-orange-500" />
                )}
                {!isChecking && isAvailable === true && (
                  <CheckCircle2 className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-green-500" />
                )}
                {!isChecking && isAvailable === false && (
                  <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-red-500">
                    Taken
                  </span>
                )}
              </div>
              {username && (
                <p className="text-sm text-slate-400">
                  Your {isVip ? 'VIP ' : ''}ID: <span className="text-orange-500">{username}.asimov.id</span>
                </p>
              )}
            </div>

            {isVip && (
              <div className="rounded-lg border border-slate-700 bg-slate-900/50 p-4">
                <h4 className="mb-3 font-semibold text-white">VIP Benefits:</h4>
                <ul className="space-y-2 text-sm text-slate-400">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-orange-500" />
                    Priority username reservation
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-orange-500" />
                    Early access to new features
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-orange-500" />
                    VIP badge on your profile
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-orange-500" />
                    Premium support
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-orange-500" />
                    Exclusive community access
                  </li>
                </ul>
              </div>
            )}

            <div className="flex gap-3">
              <Button
                onClick={handleContinueToPayment}
                disabled={!username || isChecking || isAvailable === false}
                className="flex-1 bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 disabled:opacity-50"
              >
                {isChecking ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Checking...
                  </>
                ) : (
                  'Continue to Payment'
                )}
              </Button>
              <Button
                onClick={onClose}
                variant="outline"
                className="border-slate-600 text-slate-300 hover:bg-slate-700"
              >
                Cancel
              </Button>
            </div>
          </div>
        )}

        {step === 'payment' && clientSecret && (
          <div className="space-y-6">
            <div className="rounded-lg bg-slate-900/50 p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-slate-400">VIP Username</p>
                  <p className="font-semibold text-white">{username}.asimov.id</p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-slate-400">Amount</p>
                  <p className="text-2xl font-bold text-white">${isVip ? '100' : '50'}</p>
                </div>
              </div>
            </div>

            <Elements
              stripe={stripePromise}
              options={{
                clientSecret,
                appearance: {
                  theme: 'night',
                  variables: {
                    colorPrimary: '#f97316',
                    colorBackground: '#0f172a',
                    colorText: '#ffffff',
                    colorDanger: '#ef4444',
                  },
                },
              }}
            >
              <CheckoutForm username={username} onSuccess={onSuccess} isVip={isVip} />
            </Elements>

            <Button
              onClick={() => setStep('username')}
              variant="ghost"
              className="w-full text-slate-400 hover:text-slate-300"
            >
              Back to username selection
            </Button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}

