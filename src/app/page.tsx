import AuthButtonServer from '@/components/auth-button-server';
import PostsList from '@/components/posts-list';
import ComposePost from '@/components/compose-post';
import { createServerClient, type CookieOptions } from '@supabase/ssr';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { type Post } from '@/types/database';

export default async function Home() {
  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        get(name: string) {
          return cookies().get(name)?.value;
        },
      },
    },
  );

  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (!session) {
    redirect('/login');
  }

  const { data: posts, error } = await supabase
    .from('posts')
    .select('*, user:users(name, user_name, avatar_url)')
    .order('created_at', { ascending: false });

  return (
    <main className="mx-auto max-w-7xl min-h-screen flex flex-col items-center gap-y-4">
      <AuthButtonServer />
      <h1 className="text-center font-bold text-4xl">Posts</h1>
      <div className="w-1/2 border-r border-l border-white/20">
        <ComposePost avatar_url={session.user.user_metadata.avatar_url} />
        <div className="flex flex-col items-center">
          <PostsList posts={posts as Post[]} />
        </div>
      </div>
    </main>
  );
}
