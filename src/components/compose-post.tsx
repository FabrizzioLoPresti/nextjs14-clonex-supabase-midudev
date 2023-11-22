'use client';

import { useRef } from 'react';
import { addPost } from '@/actions/add-post-action';
import { Avatar } from '@nextui-org/react';
import ComposePostButton from './compose-post-button';

type Props = {
  avatar_url: string;
};

const ComposePost = ({ avatar_url }: Props) => {
  const formRef = useRef<HTMLFormElement>(null);
  return (
    <form
      action={async (formData: FormData) => {
        await addPost(formData);
        formRef.current?.reset();
      }}
      className="flex flex-row gap-x-4 w-full p-4 border-b border-b-white/20"
      ref={formRef}
    >
      <Avatar
        isBordered
        radius="full"
        size="md"
        src={avatar_url}
        className="cursor-pointer"
      />
      <div className="flex flex-1 flex-col gap-y-4">
        <textarea
          name="content"
          id="content"
          rows={4}
          className="bg-transparent text-white placeholder-gray-500 text-xl w-full resize-none p-2"
          placeholder="What's happening?"
        ></textarea>
        <ComposePostButton />
      </div>
    </form>
  );
};

export default ComposePost;
