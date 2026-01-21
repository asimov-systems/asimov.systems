/**
 * UserMenu Component for Cross-Site Authentication
 *
 * Displays:
 * - Sign In button when user is not authenticated (opens sign-in modal)
 * - User avatar, username, and dropdown menu when authenticated
 * - Dropdown includes: Profile link, Account Settings link, and Sign Out
 */

import { useUser, useClerk } from '@clerk/clerk-react';
import { useState, useRef, useEffect } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { ChevronDown, User as UserIcon } from 'lucide-react';
import { getIdAuthUrl, isAuthEnabled } from '@/lib/config';
import { SignInModal } from './SignInModal';

export function UserMenu() {
  const { user, isLoaded } = useUser();
  const { signOut } = useClerk();
  const [isOpen, setIsOpen] = useState(false);
  const [showSignInModal, setShowSignInModal] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Check if authentication UI is enabled (after hooks)
  const authEnabled = isAuthEnabled();

  // Debug: Log authentication state
  useEffect(() => {
    if (isLoaded) {
      console.log('[UserMenu] Auth state:', {
        isLoaded,
        hasUser: !!user,
        userId: user?.id,
        email: user?.emailAddresses[0]?.emailAddress
      });
    }
  }, [isLoaded, user]);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSignOut = async () => {
    try {
      await signOut();
      // Redirect to home page after sign out
      // Clerk session is cleared across all sites automatically
      window.location.href = '/';
    } catch (error) {
      console.error('Sign out error:', error);
      // Fallback to home page
      window.location.href = '/';
    }
  };

  // Hide authentication UI if not enabled
  if (!authEnabled) {
    return null;
  }

  // Loading state
  if (!isLoaded) {
    return <div className="h-8 w-8 animate-pulse rounded-full bg-slate-200" />;
  }

  // Not authenticated - show sign in button with modal
  if (!user) {
    return (
      <>
        <Button variant="outline" size="sm" onClick={() => setShowSignInModal(true)}>
          <UserIcon className="mr-1 size-4" />
          Sign In
        </Button>
        <SignInModal open={showSignInModal} onOpenChange={setShowSignInModal} />
      </>
    );
  }

  // Get display name
  const displayName =
    user.firstName && user.lastName
      ? `${user.firstName} ${user.lastName}`
      : user.emailAddresses[0]?.emailAddress
        ? user.emailAddresses[0].emailAddress.split('@')[0]
        : user.username || 'User';

  const idUrl = getIdAuthUrl();

  // Authenticated - show user menu
  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        onMouseEnter={() => setIsOpen(true)}
        className="flex items-center gap-2 rounded-lg px-3 py-2 transition hover:bg-slate-100 focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:outline-none"
        aria-label="User menu"
        aria-expanded={isOpen}
      >
        <Avatar className="h-8 w-8">
          {user.imageUrl ? <AvatarImage src={user.imageUrl} alt={displayName} /> : null}
          <AvatarFallback className="bg-orange-500 text-sm font-medium text-white">
            {displayName.charAt(0).toUpperCase()}
          </AvatarFallback>
        </Avatar>
        <span className="hidden text-sm font-medium text-black sm:inline">{displayName}</span>
        <ChevronDown
          className={`h-4 w-4 text-slate-600 transition-transform ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>

      {isOpen && (
        <div
          className="absolute right-0 z-50 mt-2 w-56 rounded-lg border border-slate-200 bg-white py-1 shadow-lg"
          onMouseLeave={() => setIsOpen(false)}
        >
          <div className="border-b border-slate-200 px-4 py-2">
            <p className="text-sm font-medium text-black">{displayName}</p>
            {user.emailAddresses[0]?.emailAddress && (
              <p className="truncate text-xs text-slate-600">
                {user.emailAddresses[0].emailAddress}
              </p>
            )}
          </div>

          <a
            href={`${idUrl}/profile?returnUrl=${encodeURIComponent(window.location.href)}`}
            className="block px-4 py-2 text-sm text-slate-700 transition hover:bg-slate-100"
            onClick={() => setIsOpen(false)}
          >
            My Profile
          </a>
          <a
            href={`${idUrl}?returnUrl=${encodeURIComponent(window.location.href)}`}
            className="block px-4 py-2 text-sm text-slate-700 transition hover:bg-slate-100"
            onClick={() => setIsOpen(false)}
          >
            Account Settings
          </a>

          <hr className="my-1 border-slate-200" />

          <button
            onClick={handleSignOut}
            className="w-full px-4 py-2 text-left text-sm text-slate-700 transition hover:bg-slate-100"
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
}
