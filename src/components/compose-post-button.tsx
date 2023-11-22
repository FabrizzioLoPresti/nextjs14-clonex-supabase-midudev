import { useFormStatus } from 'react-dom';
import { Button } from '@nextui-org/react';

type Props = {};

const ComposePostButton = (props: Props) => {
  const { pending } = useFormStatus();

  return (
    <Button
      color="default"
      type="submit"
      className="bg-sky-500 font-bold rounded-full px-5 py-2 self-end"
    >
      {pending ? 'Posting...' : 'Post'}
    </Button>
  );
};

export default ComposePostButton;
