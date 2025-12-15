import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle2, Loader2, Crown } from 'lucide-react';

type OnboardingStep = 'welcome' | 'username' | 'complete';

interface OnboardingFlowProps {
  user: {
    id: string;
    firstName: string | null;
    lastName: string | null;
    email: string;
  };
}

export function OnboardingFlow({ user }: OnboardingFlowProps) {
  const [step, setStep] = useState<OnboardingStep>('welcome');
  const [username, setUsername] = useState('');
  const [isChecking, setIsChecking] = useState(false);
  const [isAvailable, setIsAvailable] = useState<boolean | null>(null);
  const [error, setError] = useState('');

  const checkUsername = async (name: string) => {
    if (name.length < 3) {
      setIsAvailable(null);
      return;
    }

    setIsChecking(true);
    setError('');

    try {
      const response = await fetch(`/api/check-name?name=${encodeURIComponent(name)}`);
      const data = await response.json();
      setIsAvailable(data.available);
    } catch (err) {
      setError('Failed to check username availability');
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

  const handleReserveUsername = async () => {
    if (!username || !isAvailable) return;

    setIsChecking(true);
    setError('');

    try {
      const response = await fetch('/api/reserve-name', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: username, isVip: false })
      });

      const data = await response.json();

      if (data.success) {
        setStep('complete');
      } else {
        setError(data.error || 'Failed to reserve username');
      }
    } catch (err) {
      setError('An error occurred. Please try again.');
    } finally {
      setIsChecking(false);
    }
  };

  const handleSkip = () => {
    window.location.href = '/dashboard';
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-950 px-4 py-16">
      <div className="mx-auto max-w-2xl">
        {step === 'welcome' && (
          <Card className="border-slate-700 bg-slate-800/50 backdrop-blur-lg">
            <CardHeader>
              <CardTitle className="text-3xl text-white">
                Welcome to ASIMOV! 👋
              </CardTitle>
              <CardDescription className="text-slate-300">
                Let's get you set up with your unique ASIMOV identity
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 text-orange-500" />
                  <div>
                    <h3 className="font-semibold text-white">Reserve Your Identity</h3>
                    <p className="text-sm text-slate-400">
                      Claim your unique username on the ASIMOV network
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 text-orange-500" />
                  <div>
                    <h3 className="font-semibold text-white">Secure & Private</h3>
                    <p className="text-sm text-slate-400">
                      Your data stays with you, always
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 text-orange-500" />
                  <div>
                    <h3 className="font-semibold text-white">VIP Options Available</h3>
                    <p className="text-sm text-slate-400">
                      Upgrade to VIP for premium features
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex gap-3">
                <Button
                  onClick={() => setStep('username')}
                  className="flex-1 bg-orange-500 hover:bg-orange-600"
                >
                  Get Started
                </Button>
                <Button
                  onClick={handleSkip}
                  variant="outline"
                  className="border-slate-600 text-slate-300 hover:bg-slate-700"
                >
                  Skip for Now
                </Button>
              </div>
            </CardContent>
          </Card>
        )}

        {step === 'username' && (
          <Card className="border-slate-700 bg-slate-800/50 backdrop-blur-lg">
            <CardHeader>
              <CardTitle className="text-2xl text-white">
                Choose Your Username
              </CardTitle>
              <CardDescription className="text-slate-300">
                This will be your unique identifier on ASIMOV
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="username" className="text-slate-200">
                  Username
                </Label>
                <div className="relative">
                  <Input
                    id="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value.toLowerCase())}
                    placeholder="yourname"
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
                    Your ASIMOV ID: <span className="text-orange-500">{username}.asimov.id</span>
                  </p>
                )}
                {error && <p className="text-sm text-red-500">{error}</p>}
              </div>

            <div className="rounded-lg border border-orange-500/30 bg-orange-500/5 p-4">
              <h4 className="mb-2 font-semibold text-white">💳 Payment Required</h4>
              <p className="mb-3 text-sm text-slate-300">
                Reserve your username for <strong className="text-orange-500">$50</strong>
              </p>
              <p className="text-xs text-slate-400">
                Or become a VIP member for $100 - all your names get VIP status forever!
              </p>
            </div>

            <div className="flex gap-3">
              <Button
                onClick={() => (window.location.href = `/dashboard?reserve=${username}`)}
                disabled={!username || isChecking || isAvailable === false}
                className="flex-1 bg-orange-500 hover:bg-orange-600 disabled:opacity-50"
              >
                Continue to Payment ($50)
              </Button>
              <Button
                onClick={() => setStep('welcome')}
                variant="outline"
                className="border-slate-600 text-slate-300 hover:bg-slate-700"
              >
                Back
              </Button>
            </div>

            <div className="border-t border-slate-700 pt-6">
              <p className="mb-4 text-sm text-slate-400">
                <strong className="text-white">Become a VIP Member</strong> - $100 one-time payment
              </p>
              <ul className="mb-4 space-y-2 text-sm text-slate-400">
                <li>✓ All your names get VIP status (current & future)</li>
                <li>✓ VIP badge on your profile</li>
                <li>✓ Early access to new features</li>
                <li>✓ Premium support & exclusive community</li>
                <li>✓ Additional names only $50 each</li>
              </ul>
              <Button
                onClick={() => (window.location.href = '/dashboard?upgrade=vip')}
                variant="outline"
                className="w-full border-orange-500 text-orange-500 hover:bg-orange-500/10"
              >
                <Crown className="mr-2 h-4 w-4" />
                Become VIP Member ($100)
              </Button>
            </div>
            </CardContent>
          </Card>
        )}

        {step === 'complete' && (
          <Card className="border-slate-700 bg-slate-800/50 backdrop-blur-lg">
            <CardHeader>
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-500/20">
                <CheckCircle2 className="h-10 w-10 text-green-500" />
              </div>
              <CardTitle className="text-center text-2xl text-white">
                All Set! 🎉
              </CardTitle>
              <CardDescription className="text-center text-slate-300">
                Your username has been successfully reserved
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="rounded-lg bg-slate-900/50 p-4 text-center">
                <p className="text-sm text-slate-400">Your ASIMOV ID</p>
                <p className="mt-1 text-xl font-semibold text-orange-500">
                  {username}.asimov.id
                </p>
              </div>
              <Button
                onClick={() => (window.location.href = '/dashboard')}
                className="w-full bg-orange-500 hover:bg-orange-600"
              >
                Go to Dashboard
              </Button>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}

