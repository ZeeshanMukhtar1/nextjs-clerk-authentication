import { UserButton, auth } from '@clerk/nextjs';
import { Link } from 'next-view-transitions';

export default async function Header() {
  const { userId } = auth();

  return (
    <header className="bg-gray-800 text-white shadow-md">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        <Link
          href="/"
          className="text-2xl font-bold hover:text-gray-300 transition"
        >
          MyApp
        </Link>
        <nav className="hidden md:flex items-center space-x-6">
          <Link
            href="/about"
            className="hover:text-gray-300 transition rounded-lg p-2"
          >
            About
          </Link>
          {userId ? (
            <>
              <Link
                href="/dashboard"
                className="hover:text-gray-300 transition rounded-lg p-2"
              >
                Dashboard
              </Link>
              <UserButton afterSignOutUrl="/" />
            </>
          ) : (
            <>
              <Link
                href="/sign-up"
                className="hover:text-gray-300 transition rounded-lg p-2"
              >
                Sign Up
              </Link>
              <Link
                href="/sign-in"
                className="hover:text-gray-300 transition rounded-lg p-2"
              >
                Sign In
              </Link>
            </>
          )}
        </nav>
        <div className="md:hidden">
          <button className="text-white focus:outline-none">
            {/* Placeholder for mobile menu toggle */}
            <span className="material-icons">menu</span>
          </button>
        </div>
      </div>
    </header>
  );
}
