import { useNavigate } from "react-router-dom";
import Login from "../components/Auth/Login";
import { Link } from "react-router-dom";
import Lottie from "react-lottie";
import animationData from "../animation/book.json";

function LoginPage() {
  const navigate = useNavigate();

  const handleLogin = (userData) => {
    console.log("User logged in:", userData);
    // Store user data
    localStorage.setItem(
      "user",
      JSON.stringify({
        nom: userData.nom,
        email: userData.email,
        token: userData.token,
      })
    );
    // Redirect to home page
    navigate("/");
  };

  const lottieOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: { preserveAspectRatio: "xMidYMid slice" },
  };

  return (
    <div className="flex flex-col h-screen">
      <main className="flex-1 bg-gradient-to-br from-purple-50 to-blue-50">
        <div className="container mx-auto px-4 h-full flex items-center justify-center">
          <div className="w-full max-w-4xl bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="flex flex-col md:flex-row">
              {/* Login Form Section */}
              <div className="w-full md:w-1/2 p-4 md:p-6">
                <Login onLogin={handleLogin} /> {/* ✅ Pass onLogin here */}
                <p className="text-center text-sm text-gray-600 mt-4">
                  Don&apos;t have an account?{" "}
                  <Link
                    to="/register"
                    className="font-medium text-purple-600 hover:text-purple-500"
                  >
                    Create account
                  </Link>
                </p>
              </div>

              {/* Lottie Animation Section */}
              <div className="hidden md:flex md:w-1/2 bg-gradient-to-br from-purple-100 to-blue-100 items-center justify-center p-4">
                <div className="max-w-xs">
                  <Lottie options={lottieOptions} height={200} width={200} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default LoginPage;
