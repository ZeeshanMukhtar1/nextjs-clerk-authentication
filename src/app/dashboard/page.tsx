import { auth, currentUser } from '@clerk/nextjs';

export default async function DashboardPage() {
  const { userId } = auth();
  const user = await currentUser();

  // Log the user object to the console
  // console.log('User Object:', user);

  if (!userId || !user) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        You are not logged in
      </div>
    );
  }

  return (
    <div className="mt-10 max-w-2xl mx-auto bg-white shadow-lg rounded-lg p-8">
      <h1 className="text-4xl font-bold text-gray-800 mb-6 text-center">
        Welcome, {user.firstName}! 👋
      </h1>
      <div className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-700 mb-2">
          Your Information
        </h2>
        <ul className="list-none">
          <li className="mb-2">
            <span className="font-semibold">First Name:</span> {user.firstName}
          </li>
          <li className="mb-2">
            <span className="font-semibold">Last Name:</span> {user.lastName}
          </li>
          <li className="mb-2">
            <span className="font-semibold">Username:</span> {user.username}
          </li>
          <li className="mb-2">
            <span className="font-semibold">Email:</span>{' '}
            {user.emailAddresses.length > 0
              ? user.emailAddresses[0].emailAddress
              : 'N/A'}
          </li>
          <li className="mb-2">
            <span className="font-semibold">User ID:</span> {userId}
          </li>
          <li className="mb-2">
            <span className="font-semibold">Profile Created:</span>{' '}
            {new Date(user.createdAt).toLocaleString()}
          </li>
          <li className="mb-2">
            <span className="font-semibold">Last Sign In:</span>{' '}
            {user.lastSignInAt
              ? new Date(user.lastSignInAt).toLocaleString()
              : 'N/A'}
          </li>

          <li className="mb-2">
            <span className="font-semibold">Two Factor Enabled:</span>{' '}
            {user.twoFactorEnabled ? 'Yes' : 'No'}
          </li>
          <li className="mb-2">
            <span className="font-semibold">Banned:</span>{' '}
            {user.banned ? 'Yes' : 'No'}
          </li>
        </ul>
      </div>
    </div>
  );
}
