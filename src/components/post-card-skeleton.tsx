import { Skeleton } from '@nextui-org/react';

type Props = {};

const PostCardSkeleton = (props: Props) => {
  return (
    <div className="w-full px-4 py-4 bg-transparent shadow-none rounded-none border-b border-white/20 flex flex-col gap-y-3">
      <div className=" flex items-center gap-3">
        <div>
          <Skeleton className="flex rounded-full w-12 h-12" />
        </div>
        <div className="w-full flex flex-col gap-2">
          <Skeleton className="h-3 w-3/5 rounded-lg" />
          <Skeleton className="h-3 w-4/5 rounded-lg" />
        </div>
      </div>
      <div className="flex flex-row gap-x-3">
        <Skeleton className="flex rounded-full w-6 h-6" />
        <Skeleton className="flex rounded-full w-6 h-6" />
        <Skeleton className="flex rounded-full w-6 h-6" />
      </div>
    </div>
  );
};

export default PostCardSkeleton;
