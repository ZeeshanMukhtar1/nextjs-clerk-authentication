'use client';
import { UserButton, useAuth } from '@clerk/nextjs';
import { Link } from 'next-view-transitions';
import { Menu } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const { userId } = useAuth(); // Use `useAuth` hook for client components
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const handleLinkClick = () => {
    // Close the mobile menu
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-gray-800 text-white shadow-md">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        <Link
          href="/"
          className="text-2xl font-bold hover:text-gray-300 transition"
        >
          MyApp
        </Link>
        <nav className={`hidden md:flex items-center space-x-6`}>
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
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            <Menu />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-800 p-4">
          <Link
            href="/about"
            className="block hover:text-gray-300 transition rounded-lg p-2"
            onClick={handleLinkClick} // Close the menu on click
          >
            About
          </Link>
          {userId ? (
            <>
              <Link
                href="/dashboard"
                className="block hover:text-gray-300 transition rounded-lg p-2"
                onClick={handleLinkClick} // Close the menu on click
              >
                Dashboard
              </Link>
              <UserButton afterSignOutUrl="/" />
            </>
          ) : (
            <>
              <Link
                href="/sign-up"
                className="block hover:text-gray-300 transition rounded-lg p-2"
                onClick={handleLinkClick} // Close the menu on click
              >
                Sign Up
              </Link>
              <Link
                href="/sign-in"
                className="block hover:text-gray-300 transition rounded-lg p-2"
                onClick={handleLinkClick} // Close the menu on click
              >
                Sign In
              </Link>
            </>
          )}
        </div>
      )}
    </header>
  );
}

/*
  Note to Developers:

  In this Header component, we use the `useAuth` hook from Clerk for client-side authentication. 
  This hook is suitable for components rendered in the client, allowing us to easily access 
  user authentication state.

  If we were to switch to a server component, we would use the `auth` function from '@clerk/nextjs' 
  instead. The `auth` function is designed to work in a server environment, providing access 
  to the user ID and other authentication information directly during server-side rendering.

  Remember:
  - For Client Components: Use `useAuth()` from '@clerk/nextjs'.
  - For Server Components: Use `auth()` from '@clerk/nextjs'.
*/
