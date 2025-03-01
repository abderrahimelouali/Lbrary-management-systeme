import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Register = ({ onSuccess }) => {
  const [alert, setAlert] = useState("");
  const [data, setData] = useState({
    nom: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:5000/api/clients/register",
        data
      );
      console.log("Registration successful:", response.data);
      setAlert("Account created successfully!");

      // Call onSuccess prop if registration is successful
      onSuccess(response.data);
    } catch (error) {
      console.error("Registration failed:", error);
      setAlert(
        error.response?.data?.message ||
          "An error occurred during registration."
      );
    }
  };

  return (
    <div className="w-full md:w-1/2 p-4 md:p-6">
      <div className="text-center mb-4">
        <h2 className="text-xl font-bold text-gray-900">Create Account</h2>
        <p className="text-sm text-gray-600">
          Join our learning platform today
        </p>
      </div>

      <form onSubmit={handleRegister} className="space-y-3">
        {alert && <div className="text-red-500 text-center mb-3">{alert}</div>}

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Full Name
          </label>
          <input
            type="text"
            name="nom"
            placeholder="John Doe"
            value={data.nom}
            onChange={handleChange}
            required
            className="w-full px-3 py-1.5 mt-1 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition duration-200"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Email Address
          </label>
          <input
            type="email"
            name="email"
            placeholder="your@email.com"
            value={data.email}
            onChange={handleChange}
            required
            className="w-full px-3 py-1.5 mt-1 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition duration-200"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Password
          </label>
          <input
            type="password"
            name="password"
            placeholder="••••••••"
            value={data.password}
            onChange={handleChange}
            required
            minLength="6"
            className="w-full px-3 py-1.5 mt-1 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition duration-200"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Confirm Password
          </label>
          <input
            type="password"
            name="confirmPassword"
            placeholder="••••••••"
            value={data.confirmPassword}
            onChange={handleChange}
            required
            className="w-full px-3 py-1.5 mt-1 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition duration-200"
          />
        </div>
        <div className="flex items-start mt-2">
          <input
            type="checkbox"
            required
            className="mt-1 h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded"
          />
          <label className="ml-2 block text-xs text-gray-700">
            I agree to the{" "}
            <Link to="/terms" className="text-purple-600 hover:text-purple-500">
              Terms of Service
            </Link>{" "}
            and{" "}
            <Link
              to="/privacy"
              className="text-purple-600 hover:text-purple-500"
            >
              Privacy Policy
            </Link>
          </label>
        </div>
        <button
          type="submit"
          className="w-full bg-purple-600 text-white py-2 rounded-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 transform transition duration-200 hover:scale-[1.02]"
        >
          Create Account
        </button>
        <p className="text-center text-sm text-gray-600">
          Already have an account?{" "}
          <Link
            to="/signin"
            className="font-medium text-purple-600 hover:text-purple-500"
          >
            Sign in
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Register;
