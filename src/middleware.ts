import { authMiddleware } from '@clerk/nextjs';

/**
 * 🌟 Welcome to the Authentication Middleware! 🌟
 * This middleware helps you protect your application routes.
 *
 * 🎉 Public Routes:
 * Define public routes that anyone can access without being logged in.
 * For example: the home page ("/") and the about page ("/about").
 *
 * 🔒 Protected Routes:
 * All other routes that are not defined as public will require the user to be logged in.
 * If a user tries to access a protected route without being authenticated,
 * they will be redirected to the sign-in page.
 */

export default authMiddleware({
  // Add your public routes here
  publicRoutes: ['/', '/about'],
});

// 📦 Configuration for the middleware
export const config = {
  // Define which paths the middleware should match
  matcher: [
    // Exclude file extensions and _next folder
    '/((?!.+\\.[\\w]+$|_next).*)', // Matches all paths excluding files and Next.js assets
    '/', // Matches the root path
    '/(api|trpc)(.*)', // Matches API routes
  ],
};
