import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Avatar,
  Button,
} from '@nextui-org/react';
import Link from 'next/link';
import {
  IconMessageCircle,
  IconHeartCode,
  IconRepeat,
} from '@tabler/icons-react';

type Props = {
  name: string;
  user_name: string;
  avatar_url: string;
  content: string;
  created_at: string;
};

const PostCard = ({
  name,
  user_name,
  avatar_url,
  content,
  created_at,
}: Props) => {
  return (
    <Card className="w-full bg-transparent shadow-none hover:bg-slate-800 transition px-2 py-4 rounded-none border-b border-white/20 cursor-pointer">
      <CardHeader className="justify-between">
        <div className="flex gap-5">
          <Link href={`/${user_name}`}>
            <Avatar isBordered radius="full" size="md" src={avatar_url} />
          </Link>
          <div className="flex flex-col gap-1 items-start justify-center">
            <h4 className="text-small font-semibold leading-none text-default-600">
              {name}
            </h4>
            <h5 className="text-small tracking-tight text-default-400">
              @{user_name}
            </h5>
          </div>
        </div>
      </CardHeader>
      <CardBody className="px-3 py-0 text-small text-white">
        <p>{content}</p>
      </CardBody>
      <CardFooter className="gap-3">
        <IconMessageCircle size={20} />
        <IconHeartCode size={20} />
        <IconRepeat size={20} />
      </CardFooter>
    </Card>
  );
};

export default PostCard;
