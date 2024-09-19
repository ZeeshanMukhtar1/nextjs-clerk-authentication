export default function AboutPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 py-12 px-6">
      <h1 className="text-4xl font-bold text-gray-800 mb-4 text-center">
        About This Template
      </h1>
      <p className="text-lg text-gray-600 max-w-2xl  mb-6 text-justify">
        Welcome to our web application template! This project is built using
        Next.js and Clerk for authentication, providing a solid foundation for
        your future projects.
      </p>
      <p className="text-lg text-gray-600 max-w-2xl text-justify mb-6">
        This template is designed for both the community and myself, serving as
        a quick-start solution for integrating authentication features. You can
        easily copy this template and customize it for your own applications.
      </p>
      <p className="text-lg text-gray-600 max-w-2xl text-justify">
        Thank you for checking out this template—let&apos;s build amazing
        projects together!
      </p>
    </div>
  );
}
