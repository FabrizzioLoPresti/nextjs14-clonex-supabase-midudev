import Link from 'next/link';

type Props = {};

export default function NotFoundPage({}: Props) {
  return (
    <section className="mx-auto max-w-7xl min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-center font-bold text-4xl">404</h1>
      <p className="text-center text-default-400">
        The page you{"'"}re looking for does not exist.
      </p>
      <Link href="/" className="text-center text-default-400">
        Go back home
      </Link>
    </section>
  );
}
