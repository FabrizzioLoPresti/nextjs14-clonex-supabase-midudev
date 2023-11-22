import AuthButtonServer from '@/components/auth-button-server';

type Props = {};

export default function LoginPage({}: Props) {
  return (
    <section className="mx-auto max-w-7xl min-h-screen grid place-content-center">
      <h1 className="text-center font-bold text-3xl mb-4">Log In in X Clone</h1>
      <AuthButtonServer />
    </section>
  );
}
