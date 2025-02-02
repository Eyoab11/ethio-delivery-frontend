import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // For navigation
import { register } from "../services/api"; // Import the register function from the API service

const SignUpComponent = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    verificationType: "Email",
  });
  const [error, setError] = useState(null); // For displaying error messages
  const navigate = useNavigate(); // For navigation

  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setData((prevData) => ({ ...prevData, [name]: value }));
  };

  const onSubmitHandler = async (event) => {
    event.preventDefault(); // Prevent default form submission

    // Validate password and confirm password
    if (data.password !== data.confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    try {
      // Call the register function from the API service
      const response = await register({
        username: data.name, // Django expects 'username' for registration
        email: data.email,
        password: data.password,
        phone: data.phone,
      });

      // Handle successful registration
      console.log("Registration successful:", response.data);
      setError(null); // Clear any previous errors

      // Redirect the user to the login page
      navigate("/signin");
    } catch (err) {
      // Handle errors for example if email already exists
      setError(err.response?.data?.message || "Registration failed. Please try again.");
      console.error("Registration failed:", err);
    }
  };

  return (
    <div className="absolute z-10 w-full h-full bg-opacity-50 flex justify-center items-center">
      <form
        onSubmit={onSubmitHandler} // Attach the submit handler
        className="w-[400px] bg-white p-8 rounded-lg shadow-lg flex flex-col gap-5 text-gray-600"
      >
        <h2 className="text-2xl font-semibold text-center text-orange-500">Sign Up</h2>

        {/* Display error message if registration fails */}
        {error && <p className="text-red-500 text-sm text-center">{error}</p>}

        {/* Form Fields */}
        <div className="flex flex-col gap-5">
          <input
            name="name"
            onChange={onChangeHandler}
            value={data.name}
            type="text"
            placeholder="Your name"
            className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
            required
          />
          <input
            name="email"
            onChange={onChangeHandler}
            value={data.email}
            type="email"
            placeholder="Your email"
            className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
            required
          />
          <input
            name="phone"
            onChange={onChangeHandler}
            value={data.phone}
            type="text"
            placeholder="Phone number"
            className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
            required
          />
          <input
            name="password"
            onChange={onChangeHandler}
            value={data.password}
            type="password"
            placeholder="Password"
            className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
            required
          />
          <input
            name="confirmPassword"
            onChange={onChangeHandler}
            value={data.confirmPassword}
            type="password"
            placeholder="Confirm Password"
            className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
            required
          />

          {/* Verification Type Selection */}
          <div className="flex gap-5">
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="verificationType"
                value="Email"
                checked={data.verificationType === "Email"}
                onChange={onChangeHandler}
              />
              Email Verification
            </label>
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="verificationType"
                value="Phone"
                checked={data.verificationType === "Phone"}
                onChange={onChangeHandler}
              />
              Phone Verification
            </label>
          </div>
        </div>

        {/* Sign Up Button */}
        <button
          type="submit"
          className="py-3 bg-orange-500 text-white rounded-md hover:bg-orange-400 transition duration-300"
        >
          Create Account
        </button>

        {/* Google and Facebook Sign Up Buttons */}
        <div className="flex flex-col gap-3 mt-4">
          {/* Google Sign-Up Button */}
          <button
            className="flex items-center justify-center gap-2 w-full py-3 border border-gray-300 rounded-md hover:bg-gray-100 transition duration-200"
            onClick={() => console.log("Google Sign Up")}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 48 48"
              className="w-5 h-5"
            >
              <path
                fill="#EA4335"
                d="M24 9.5c3.14 0 5.98 1.13 8.2 2.99l6.15-6.15C34.45 3.06 29.57 1 24 1 14.72 1 6.82 6.95 3.45 14.59l7.46 5.82C12.66 14.16 17.89 9.5 24 9.5z"
              />
              <path
                fill="#FBBC05"
                d="M46.96 24.02c0-1.26-.12-2.49-.36-3.69H24v7h13.05c-.52 2.53-2.17 4.68-4.53 6.15l7.23 5.63C44.13 35.62 46.96 30.18 46.96 24.02z"
              />
              <path
                fill="#34A853"
                d="M10.91 29.19c-1.33-2.19-2.11-4.75-2.11-7.47 0-2.72.78-5.29 2.11-7.47l-7.46-5.82C2.25 12.79 1 18.22 1 24c0 5.78 1.25 11.21 3.45 15.77l7.46-5.82z"
              />
              <path
                fill="#4285F4"
                d="M24 47c5.57 0 10.45-1.84 13.95-5.01l-7.23-5.63c-2.02 1.35-4.55 2.15-6.72 2.15-6.12 0-11.35-4.66-12.72-10.91l-7.46 5.82C6.82 41.05 14.72 47 24 47z"
              />
            </svg>
            Sign Up with Google
          </button>

          {/* Facebook Sign-Up Button */}
          <button
            className="flex items-center justify-center gap-2 w-full py-3 border border-gray-300 rounded-md hover:bg-gray-100 transition duration-200"
            onClick={() => console.log("Facebook Sign Up")}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="w-5 h-5 text-blue-600"
            >
              <path
                fill="currentColor"
                d="M22.675 0H1.325C.594 0 0 .593 0 1.326v21.348C0 23.407.594 24 1.325 24h11.495v-9.294H9.691V11.31h3.129V8.656c0-3.1 1.894-4.788 4.659-4.788 1.325 0 2.464.099 2.795.143v3.24h-1.918c-1.505 0-1.795.715-1.795 1.764v2.311h3.586l-.467 3.395h-3.119V24h6.116c.73 0 1.324-.593 1.324-1.326V1.326C24 .593 23.407 0 22.675 0"
              />
            </svg>
            Sign Up with Facebook
          </button>
        </div>

        {/* Redirect to Login */}
        <p className="text-sm text-center">
          Already have an account?{" "}
          <span
            onClick={() => navigate("/signin")}
            className="text-orange-500 cursor-pointer"
          >
            Login here
          </span>
        </p>
      </form>
    </div>
  );
};

export default SignUpComponent;