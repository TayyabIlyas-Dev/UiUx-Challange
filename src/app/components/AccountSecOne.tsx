import React from 'react'

const AccountSecOne = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-center items-start gap-8 lg:gap-16 p-8">
    {/* Log In Section */}
    <div className="w-full lg:w-1/3">
      <h2 className="text-2xl font-bold mb-6">Log In</h2>
      <form className="space-y-4">
        {/* Username or Email */}
        <div>
          <label htmlFor="username" className="block text-sm font-medium mb-2">
            Username or email address
          </label>
          <input
            type="text"
            id="username"
            className="w-full border border-gray-300 rounded-lg p-2.5 focus:outline-none focus:ring-2 focus:ring-black"
          />
        </div>

        {/* Password */}
        <div>
          <label htmlFor="password" className="block text-sm font-medium mb-2">
            Password
          </label>
          <input
            type="password"
            id="password"
            className="w-full border border-gray-300 rounded-lg p-2.5 focus:outline-none focus:ring-2 focus:ring-black"
          />
        </div>

        {/* Remember Me */}
        <div className="flex items-center space-x-2">
          <input
            type="checkbox"
            id="remember"
            className="w-4 h-4 text-black border-gray-300 rounded focus:ring-2 focus:ring-black"
          />
          <label htmlFor="remember" className="text-sm">
            Remember me
          </label>
        </div>

        {/* Buttons */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-4 lg:gap-0">
          <button
            type="submit"
            className="px-6 py-2 bg-white border-2 border-black hover:bg-black hover:text-white  text-black tansition rounded-lg focus:outline-none focus:ring-2 focus:ring-black w-full lg:w-auto"
          >
            Log In
          </button>
          <a href="#" className="text-sm text-gray-500 hover:underline">
            Lost Your Password?
          </a>
        </div>
      </form>
    </div>

    {/* Register Section */}
    <div className="w-full lg:w-1/3">
      <h2 className="text-2xl font-bold mb-6">Register</h2>
      <form className="space-y-4">
        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-2">
            Email address
          </label>
          <input
            type="email"
            id="email"
            className="w-full border border-gray-300 rounded-lg p-2.5 focus:outline-none focus:ring-2 focus:ring-black"
          />
        </div>

        {/* Privacy Text */}
        <p className="text-sm text-gray-600">
          A link to set a new password will be sent to your email address.
        </p>
        <p className="text-sm text-gray-600">
          Your personal data will be used to support your experience
          throughout this website, to manage access to your account, and for
          other purposes described in our{" "}
          <a href="#" className="text-black font-medium underline">
            privacy policy
          </a>
          .
        </p>

        {/* Register Button */}
        <div>
          <button
            type="submit"
            className="px-6 py-2 bg-white border-2 border-black hover:bg-black hover:text-white  text-black tansition rounded-lg focus:outline-none focus:ring-2 focus:ring-black w-full"
          >
            Register
          </button>
        </div>
      </form>
    </div>
  </div>
  )
}

export default AccountSecOne