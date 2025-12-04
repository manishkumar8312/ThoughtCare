import { SignIn as ClerkSignIn } from "@clerk/clerk-react";

const Login = () => {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 px-4">

      <div className="w-full max-w-md bg-white/80 backdrop-blur-md shadow-lg rounded-2xl p-8">

        {/* Header */}
        <div className="text-center mb-6">
          <h1 className="text-3xl font-semibold text-gray-800">ThoughtCare</h1>
          <p className="text-gray-600 text-sm mt-2">
            Sign in to continue your wellness journey 🌿
          </p>
        </div>

        {/* Clerk Sign In */}
        <ClerkSignIn
          path="/sign-in"
          routing="path"
          signUpUrl="/sign-up"
          fallbackRedirectUrl="/dashboard"
          appearance={{
            elements: {
              formButtonPrimary:
                "bg-purple-500 hover:bg-purple-600 text-white rounded-md",
              card: "shadow-none bg-transparent",
            },
          }}
        />

      </div>
    </div>
  );
};

export default Login;
