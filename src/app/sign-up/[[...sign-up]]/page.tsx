import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="flex items-center justify-center flex-col gap-10 p-6">
      <h1 className="text-4xl font-bold mt-20 text-center">
        Join Our Community!
      </h1>
      <p className="text-lg text-center max-w-lg">
        Sign up to access exclusive features, connect with others, and start
        your journey with us. It only takes a minute to get started!
      </p>
      <SignUp />
    </div>
  );
}
