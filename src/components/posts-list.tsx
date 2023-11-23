import { Post } from '@/types/database';
import PostCard from './post-card';
import { cookies } from 'next/headers';
import { createServerClient, type CookieOptions } from '@supabase/ssr';

type Props = {};

const PostsList = async ({}: Props) => {
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

  const { data: posts, error } = await supabase
    .from('posts')
    .select('*, user:users(name, user_name, avatar_url)')
    .order('created_at', { ascending: false });

  return (
    <>
      {posts?.map((post: Post) => (
        <PostCard
          key={post.id}
          name={post.user.name}
          user_name={post.user.user_name}
          avatar_url={post.user.avatar_url}
          content={post.content}
          created_at={post.created_at}
        />
      ))}
    </>
  );
};

export default PostsList;
