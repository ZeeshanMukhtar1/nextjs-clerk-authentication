# Next.js Clerk Authentication Template

Welcome to the Next.js Clerk Authentication Template! This project provides a solid foundation for building web applications with integrated authentication features using Next.js and Clerk.

## Features

- **Next.js Framework**: A powerful React framework for building server-rendered applications.
- **Clerk Authentication**: Simplified user authentication and management.
- **Responsive Design**: Mobile-friendly layout.
- **Easy to Customize**: Modify and expand as per your project requirements.
- **Tailwind CSS**: A utility-first CSS framework for rapid UI development.
- **next-view-transitions**: Page transitions for Next.js applications.
- **Prettier**: Code formatter for consistent code style.

## Getting Started

To use this template, follow these steps:

### 1. Use This Template

- On the main page of this repository, click the green **"Use this template"** button. This will allow you to create a new repository with the same structure and files as this template.

### 2. Prerequisites

- Node.js (version 20 or later)
- npm or Yarn

### 3. Installation

1. **Clone the newly created repository**:

   ```bash
   git clone https://github.com/ZeeshanMukhtar1/nextjs-clerk-authentication.git
   ```

2. **Navigate to the project directory**:

   ```bash
   cd nextjs-clerk-authentication
   ```

3. **Install dependencies**:

   ```bash
   npm install
   ```

   or if you prefer Yarn:

   ```bash
   yarn install
   ```

4. **Set up Clerk**:

   - Sign up for a Clerk account at [Clerk.com](https://clerk.com).
   - Create a new application in your Clerk dashboard and obtain your API keys.
   - Create a `.env.local` file in the root of the project and add the following environment variables:
     ```
     NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=<your_publishable_key>
     CLERK_SECRET_KEY=<your_secret_key>
     NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
     NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
     NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/dashboard
     NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/dashboard
     ```

5. **Run the development server**:

   ```bash
   npm run dev
   ```

   or

   ```bash
   yarn dev
   ```

6. **Open your browser**:
   Visit `http://localhost:3000` to see your application in action.

## Usage

Feel free to modify the components and styles according to your needs. The template is designed to be flexible and easily customizable.

## Contributing

Contributions are welcome! If you have suggestions or improvements, please open an issue or submit a pull request.

## License

This project is licensed under the MIT License.

## Thank You

Thank you for checking out this template! Let’s build amazing projects together!
