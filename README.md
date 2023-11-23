This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

Project Deployed in Vercel: [Clone X App](https://nextjs14-clonex-supabase-midudev.vercel.app/)

Nextjs 14 Project using:

- Nextjs 14 Features
  - Src and App Folder
  - Import Alias (@)
  - .env.local and .env
  - Metadata
  - Turbo Pack -> npx next dev --turbo
  - Streaming -> Skeleton Screens
  - Client Side
    - Google Fonts and TailwindCSS, NextUI and Framer Motion, Flowbite Icons SVG, Tabler Icons
    - Link and Image Componente
    - Layout and Page Structure
    - Client Routes
    - Dynamic Routes ([id] folder)
    - Async GET in page.tsx -> Server Components
    - Suspense React Component
    - Page not-found.tsx, loading.tsx and notFound() Function
    - useRouter(), useParam() and useSearchParams Hooks
    - Revalidate
    - Server Actions
    - Route Groups
  - Server Side
    - API Routes using Route Handlers API
    - params and searchParams in Route Handlers API
    - Client and Server Components ('use client' and 'use server')
- ESLint -> npx eslint --init
- Supabase
  - Supabase Auth, Database Real Time, API, Edge Functions, Real Time Subscriptions, Storage, Vectors AI and Auth Providers (vs Firebase but Supabase have best scalability)
  - Supabase Github Provider for Auth
  - Generate Types from Database Tables using Supabase
  - Provider Using Server Session from props
- NextAuth
  - Middlewares for Protected Routes
  - Providers for mantain state in the app of the session
  - Prisma DataBase Provider
  - Environment Variables
  - Server Session
  - Use Session in React Server Components (getServerSession) in pages
  - Use useSession Hook in Client Components for create buttons and use signIn and signOut functions - Session from NextAuth Context
  - Protected Routes Pages using Server Session (getServerSession) or Middleware
  - Protected API Routes using Route Handlers API
  - Auth in API Routes
  - Auth in Server Actions
  - POST Request for create a Post in Supabase usimg Server Actions
- React-Hook-Forms
  - useForm() Hook
  - Form Validation
  - Form State
  - Form Submit
  - Form Reset
  - React-Hook-Form with Server Actions
- Prisma ORM
  - Types from Prisma and PostgreSQL Database
  - Migrate Schemas to PostgreSQL Database
- Bcrypt
  - Hash Passwords
  - Compare Passwords
- Zod

### Links Projects

- [Midudev - Clon de X con Next.js 13, Supabase, React, TypeScript y TailwindCSS](https://www.youtube.com/watch?v=V_kD2q_aoy8)
- [Supabase Auth with the Next.js App Router](https://supabase.com/docs/guides/auth/auth-helpers/nextjs?language=ts)
- [Use Supabase Auth with Next.js](https://supabase.com/docs/guides/auth/quickstarts/nextjs)
- [Creating a Supabase client for SSR](https://supabase.com/docs/guides/auth/server-side/creating-a-client?environment=client-component)
- [OAuth with PKCE flow for SSR](https://supabase.com/docs/guides/auth/server-side/oauth-with-pkce-flow-for-ssr)

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
