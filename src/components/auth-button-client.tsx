'use client';

import { useRouter } from 'next/navigation';
import { createBrowserClient } from '@supabase/ssr';
import { type Session } from '@supabase/supabase-js';
import { User, Button } from '@nextui-org/react';
import { IconLogout, IconLogin2 } from '@tabler/icons-react';

type Props = {
  session: Session | null;
};

const AuthButtonClient = ({ session }: Props) => {
  const router = useRouter();
  const supabase = createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
  );

  const handleSignIn = async () => {
    await supabase.auth.signInWithOAuth({
      provider: 'github',
      options: {
        redirectTo: 'http://localhost:3000/auth/callback',
      },
    });
  };

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    router.refresh();
  };

  return (
    <header className="py-4">
      {session ? (
        <div className="flex flex-row gap-x-4">
          <User
            name={session.user.user_metadata.name}
            description={`@${session.user.user_metadata.user_name}`}
            avatarProps={{
              src: session.user.user_metadata.avatar_url,
            }}
          />
          <Button
            color="default"
            endContent={<IconLogout />}
            onClick={handleSignOut}
          >
            Sign out
          </Button>
        </div>
      ) : (
        <Button
          color="default"
          endContent={<IconLogin2 />}
          onClick={handleSignIn}
        >
          Sign in
        </Button>
      )}
    </header>
  );
};

export default AuthButtonClient;
