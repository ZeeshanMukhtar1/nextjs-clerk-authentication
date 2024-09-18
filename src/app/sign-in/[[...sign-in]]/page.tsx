import { SignIn } from '@clerk/nextjs';

export default function Page() {
  return (
    <div className="flex items-center justify-center flex-col gap-10 p-6">
      <h1 className="text-4xl font-bold mt-20 text-center">Welcome Back!</h1>
      <p className="text-lg text-center max-w-lg">
        We&apos;re glad to see you again! Please log in to access your account
        and continue your journey with us. If you forgot your password, you can
        easily reset it below.
      </p>
      <SignIn />
    </div>
  );
}
