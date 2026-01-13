import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Separator } from '@/components/ui/separator';
import { Loader2, Crown, CheckCircle2, Plus } from 'lucide-react';
import { VipUpgradeModal } from './VipUpgradeModal';
import type { UserProfile } from '@/lib/db';

interface DashboardProps {
  user: {
    id: string;
    firstName: string | null;
    lastName: string | null;
    email: string;
    imageUrl: string;
  };
}

export function Dashboard({ user }: DashboardProps) {
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true);
  const [showUpgradeModal, setShowUpgradeModal] = useState(false);
  const [showStandardModal, setShowStandardModal] = useState(false);
  const [reserveName, setReserveName] = useState('');

  useEffect(() => {
    fetchProfile();

    // Check URL params
    const params = new URLSearchParams(window.location.search);

    // VIP upgrade flow
    if (params.get('upgrade') === 'vip') {
      setShowUpgradeModal(true);
    }

    // Standard reservation flow from onboarding
    const reserveParam = params.get('reserve');
    if (reserveParam) {
      setReserveName(reserveParam);
      setShowStandardModal(true);
      // Clean up URL
      window.history.replaceState({}, '', '/dashboard');
    }
  }, []);

  const fetchProfile = async () => {
    try {
      const response = await fetch('/api/user-profile');
      if (response.ok) {
        const data = await response.json();
        setProfile(data);
      }
    } catch (error) {
      console.error('Failed to fetch profile:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleUpgradeSuccess = () => {
    setShowUpgradeModal(false);
    setShowStandardModal(false);
    fetchProfile();
  };

  const handleSignOut = () => {
    // Navigate to sign-out page
    window.location.href = '/sign-out';
  };

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gradient-to-b from-slate-900 to-slate-950">
        <Loader2 className="h-8 w-8 animate-spin text-orange-500" />
      </div>
    );
  }

  const hasVipName = profile?.reservedNames.some((name) => name.isVip);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-950 px-4 py-16">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold text-white">Dashboard</h1>
            <p className="mt-2 text-slate-400">Manage your ASIMOV identity</p>
          </div>
          <Button
            onClick={handleSignOut}
            variant="outline"
            className="border-slate-600 text-slate-300 hover:bg-slate-700"
          >
            Sign Out
          </Button>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {/* Profile Card */}
          <Card className="border-slate-700 bg-slate-800/50 backdrop-blur-lg lg:col-span-1">
            <CardHeader>
              <CardTitle className="text-white">Profile</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex flex-col items-center">
                <Avatar className="h-24 w-24">
                  <AvatarImage src={user.imageUrl} />
                  <AvatarFallback className="bg-orange-500 text-2xl text-white">
                    {user.firstName?.[0] || user.email[0]}
                  </AvatarFallback>
                </Avatar>
                <div className="mt-4 text-center">
                  <h3 className="text-lg font-semibold text-white">
                    {user.firstName} {user.lastName}
                  </h3>
                  <p className="text-sm text-slate-400">{user.email}</p>
                </div>
              </div>

              <Separator className="bg-slate-700" />

              <div className="space-y-3">
                <div>
                  <p className="text-sm text-slate-400">Member Since</p>
                  <p className="text-white">
                    {profile?.createdAt
                      ? new Date(profile.createdAt).toLocaleDateString()
                      : 'Recently'}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-slate-400">Status</p>
                  <div className="mt-1">
                    {hasVipName ? (
                      <Badge className="bg-gradient-to-r from-yellow-500 to-orange-500">
                        <Crown className="mr-1 h-3 w-3" />
                        VIP Member
                      </Badge>
                    ) : (
                      <Badge variant="secondary" className="bg-slate-700 text-slate-300">
                        Free Member
                      </Badge>
                    )}
                  </div>
                </div>
              </div>

              {!hasVipName && (
                <>
                  <Button
                    onClick={() => setShowUpgradeModal(true)}
                    className="w-full bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600"
                  >
                    <Crown className="mr-2 h-4 w-4" />
                    Upgrade to VIP Membership
                  </Button>
                  <p className="mt-2 text-center text-xs text-slate-400">
                    One-time $100 - All your names get VIP benefits
                  </p>
                </>
              )}
              {hasVipName && (
                <div className="rounded-lg border border-green-500/30 bg-green-500/10 p-3 text-center">
                  <p className="text-sm font-semibold text-green-400">✓ VIP Member</p>
                  <p className="mt-1 text-xs text-slate-400">All your names have VIP status</p>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Reserved Names */}
          <Card className="border-slate-700 bg-slate-800/50 backdrop-blur-lg lg:col-span-2">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="text-white">Reserved Names</CardTitle>
                  <CardDescription className="text-slate-300">
                    Your ASIMOV identities
                  </CardDescription>
                </div>
                <Button
                  onClick={() => (window.location.href = '/onboarding')}
                  size="sm"
                  variant="outline"
                  className="border-orange-500 text-orange-500 hover:bg-orange-500/10"
                >
                  <Plus className="mr-1 h-4 w-4" />
                  Add New
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              {profile && profile.reservedNames.length > 0 ? (
                <div className="space-y-3">
                  {profile.reservedNames.map((name) => (
                    <div
                      key={name.id}
                      className="flex items-center justify-between rounded-lg border border-slate-700 bg-slate-900/50 p-4"
                    >
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-500/20">
                          <CheckCircle2 className="h-5 w-5 text-orange-500" />
                        </div>
                        <div>
                          <p className="font-semibold text-white">{name.name}.asimov.id</p>
                          <p className="text-sm text-slate-400">
                            Reserved {new Date(name.reservedAt).toLocaleDateString()}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        {name.isVip && (
                          <Badge className="bg-gradient-to-r from-yellow-500 to-orange-500">
                            <Crown className="mr-1 h-3 w-3" />
                            VIP
                          </Badge>
                        )}
                        {name.isPaid && (
                          <Badge variant="secondary" className="bg-green-500/20 text-green-400">
                            Paid
                          </Badge>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-slate-700/50">
                    <Plus className="h-8 w-8 text-slate-400" />
                  </div>
                  <h3 className="mb-2 text-lg font-semibold text-white">No names reserved yet</h3>
                  <p className="mb-6 text-sm text-slate-400">
                    Reserve your unique ASIMOV identity to get started
                  </p>
                  <Button
                    onClick={() => (window.location.href = '/onboarding')}
                    className="bg-orange-500 hover:bg-orange-600"
                  >
                    Reserve Your First Name
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        {/* VIP Membership Info Card */}
        {!hasVipName ? (
          <Card className="mt-6 border-slate-700 bg-gradient-to-r from-slate-800/50 to-slate-800/30 backdrop-blur-lg">
            <CardHeader>
              <CardTitle className="flex items-center text-white">
                <Crown className="mr-2 h-5 w-5 text-yellow-500" />
                VIP Membership Benefits
              </CardTitle>
              <CardDescription className="text-slate-300">
                One-time $100 upgrade - All your names get VIP status
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 text-orange-500" />
                  <div>
                    <h4 className="font-semibold text-white">All Names VIP</h4>
                    <p className="text-sm text-slate-400">Current & future names</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 text-orange-500" />
                  <div>
                    <h4 className="font-semibold text-white">Early Access</h4>
                    <p className="text-sm text-slate-400">Beta features first</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 text-orange-500" />
                  <div>
                    <h4 className="font-semibold text-white">VIP Badge</h4>
                    <p className="text-sm text-slate-400">Stand out in community</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 text-orange-500" />
                  <div>
                    <h4 className="font-semibold text-white">Premium Support</h4>
                    <p className="text-sm text-slate-400">Priority assistance</p>
                  </div>
                </div>
              </div>
              <div className="mt-6 rounded-lg border border-slate-700 bg-slate-900/50 p-4">
                <p className="mb-2 text-sm text-slate-300">
                  <strong className="text-white">How it works:</strong>
                </p>
                <ul className="space-y-1 text-sm text-slate-400">
                  <li>• Pay $100 once to become a VIP member</li>
                  <li>• All your reserved names get VIP status</li>
                  <li>• Additional names cost $50 each (but still VIP)</li>
                </ul>
              </div>
              <Button
                onClick={() => setShowUpgradeModal(true)}
                className="mt-6 w-full bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600"
              >
                <Crown className="mr-2 h-4 w-4" />
                Become a VIP Member - $100
              </Button>
            </CardContent>
          </Card>
        ) : (
          <Card className="mt-6 border-green-500/30 bg-gradient-to-r from-green-900/20 to-slate-800/30 backdrop-blur-lg">
            <CardHeader>
              <CardTitle className="flex items-center text-white">
                <Crown className="mr-2 h-5 w-5 text-yellow-500" />
                You&apos;re a VIP Member! 🎉
              </CardTitle>
              <CardDescription className="text-slate-300">
                All your names have VIP status and benefits
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 text-green-500" />
                  <div>
                    <h4 className="font-semibold text-white">All Names VIP</h4>
                    <p className="text-sm text-slate-400">Every name you reserve gets VIP status</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 text-green-500" />
                  <div>
                    <h4 className="font-semibold text-white">Additional Names</h4>
                    <p className="text-sm text-slate-400">Reserve more names for just $50 each</p>
                  </div>
                </div>
              </div>
              <Button
                onClick={() => (window.location.href = '/onboarding')}
                className="mt-6 w-full bg-orange-500 hover:bg-orange-600"
              >
                <Plus className="mr-2 h-4 w-4" />
                Reserve Another Name ($50)
              </Button>
            </CardContent>
          </Card>
        )}
      </div>

      {/* VIP Upgrade Modal */}
      <VipUpgradeModal
        open={showUpgradeModal}
        onClose={() => setShowUpgradeModal(false)}
        onSuccess={handleUpgradeSuccess}
        isVip={true}
      />

      {/* Standard Payment Modal */}
      <VipUpgradeModal
        open={showStandardModal}
        onClose={() => setShowStandardModal(false)}
        onSuccess={handleUpgradeSuccess}
        isVip={false}
        initialUsername={reserveName}
      />
    </div>
  );
}
