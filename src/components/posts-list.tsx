import { Post } from '@/types/database';
import PostCard from './post-card';

type Props = {
  posts: Post[];
};

const PostsList = ({ posts }: Props) => {
  return (
    <>
      {posts?.map((post) => (
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
