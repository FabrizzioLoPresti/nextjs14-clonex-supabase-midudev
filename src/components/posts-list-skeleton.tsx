import PostCardSkeleton from './post-card-skeleton';

type Props = {};

const PostsListSkeleton = (props: Props) => {
  return (
    <>
      <PostCardSkeleton />
      <PostCardSkeleton />
      <PostCardSkeleton />
      <PostCardSkeleton />
      <PostCardSkeleton />
    </>
  );
};

export default PostsListSkeleton;
