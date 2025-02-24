import { useState } from "react";

function Login({ onLogin }) {
  const [data, setData] = useState({ email: "", password: "" });
  const [alert, setAlert] = useState(""); // Alert messages
  const [loading, setLoading] = useState(false);
  const [forgotPassword, setForgotPassword] = useState(false); // Toggle forgot password mode
  const [resetEmail, setResetEmail] = useState(""); // Email for password reset
  const [resetMessage, setResetMessage] = useState(""); // Reset email response

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      setAlert("Invalid email format. Please enter a valid email.");
      setLoading(false);
      return;
    }
    if (data.password.length < 6) {
      setAlert("Password must be at least 6 characters long.");
      setLoading(false);
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/api/clients/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      if (response.ok) {
        setAlert("Login successful!");
        onLogin(result);
      } else {
        setAlert(result.message || "Login failed. Please try again.");
      }
    } catch {
      setAlert("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handlePasswordReset = async (e) => {
    e.preventDefault();
    setResetMessage("");

    if (!resetEmail) {
      setResetMessage("Please enter your email.");
      return;
    }

    try {
      const response = await fetch(
        "http://localhost:5000/api/clients/forgot-password",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email: resetEmail }),
        }
      );

      const result = await response.json();
      if (response.ok) {
        setResetMessage("A reset link has been sent to your email.");
      } else {
        setResetMessage(result.message || "Failed to send reset email.");
      }
    } catch {
      setResetMessage("Network error. Please try again.");
    }
  };

  return (
    <div className="w-full p-6 md:p-8">
      <div className="text-center mb-5">
        <h2 className="text-2xl font-bold text-gray-900">
          {forgotPassword ? "Reset Password" : "Welcome Back!"}
        </h2>
        {!forgotPassword && (
          <p className="text-sm text-gray-600">Sign in to continue learning</p>
        )}
      </div>

      {alert && <div className="text-red-500 text-center mb-3">{alert}</div>}

      {forgotPassword ? (
        <form onSubmit={handlePasswordReset} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email Address
            </label>
            <input
              type="email"
              name="resetEmail"
              placeholder="Enter your email"
              value={resetEmail}
              onChange={(e) => setResetEmail(e.target.value)}
              required
              className="w-full px-3 py-2 mt-1 rounded-md border border-gray-200 focus:ring-2 focus:ring-purple-500 transition"
            />
          </div>

          {resetMessage && (
            <div className="text-green-600 text-center">{resetMessage}</div>
          )}

          <button
            type="submit"
            className="w-full bg-purple-600 text-white py-2 rounded-md hover:bg-purple-700 transition"
          >
            Send Reset Link
          </button>

          <button
            type="button"
            className="w-full text-purple-600 hover:text-purple-700 transition mt-2"
            onClick={() => setForgotPassword(false)}
          >
            Back to Login
          </button>
        </form>
      ) : (
        <form onSubmit={handleLogin} className="space-y-4">
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
              className="w-full px-3 py-2 mt-1 rounded-md border border-gray-200 focus:ring-2 focus:ring-purple-500 transition"
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
              className="w-full px-3 py-2 mt-1 rounded-md border border-gray-200 focus:ring-2 focus:ring-purple-500 transition"
            />
          </div>

          <div className="flex justify-between text-sm">
            <button
              type="button"
              className="text-purple-600 hover:text-purple-700 transition"
              onClick={() => setForgotPassword(true)}
            >
              Forgot password?
            </button>
          </div>

          <button
            type="submit"
            className="w-full bg-purple-600 text-white py-2 rounded-md hover:bg-purple-700 transition"
            disabled={loading}
          >
            {loading ? "Signing in..." : "Sign in"}
          </button>
        </form>
      )}
    </div>
  );
}

export default Login;
