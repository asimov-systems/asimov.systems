/**
 * SignInModal Component
 *
 * Displays a modal with Clerk's SignIn component for authentication
 */

import { SignIn } from '@clerk/clerk-react';
import { useEffect } from 'react';
import { useUser } from '@clerk/clerk-react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle
} from '@/components/ui/dialog';

interface SignInModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function SignInModal({ open, onOpenChange }: SignInModalProps) {
  const { user, isLoaded } = useUser();

  // Close modal when user successfully signs in
  useEffect(() => {
    if (isLoaded && user && open) {
      // User has signed in, close the modal
      // The UserMenu component will automatically update to show user info
      onOpenChange(false);
    }
  }, [user, isLoaded, open, onOpenChange]);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-md border-slate-200 bg-white p-0">
        <DialogHeader className="px-6 pt-6">
          <DialogTitle className="text-2xl font-bold text-black">Welcome Back</DialogTitle>
          <DialogDescription className="text-slate-600">
            Sign in to your ASIMOV account
          </DialogDescription>
        </DialogHeader>
        <div className="px-6 pb-6">
          <SignIn
            appearance={{
              elements: {
                rootBox: 'mx-auto',
                card: 'bg-transparent shadow-none border-none',
                headerTitle: 'hidden',
                headerSubtitle: 'hidden',
                socialButtonsBlockButton: 'border-slate-200 hover:bg-slate-50',
                formButtonPrimary: 'bg-orange-500 hover:bg-orange-600 text-white',
                footerActionLink: 'text-orange-500 hover:text-orange-600'
              }
            }}
            routing="hash"
            // Stay on current page - modal will close automatically when user signs in
            afterSignInUrl={typeof window !== 'undefined' ? window.location.href : '/'}
          />
        </div>
      </DialogContent>
    </Dialog>
  );
}
