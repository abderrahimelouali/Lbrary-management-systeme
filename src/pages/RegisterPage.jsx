import { useNavigate } from "react-router-dom";
import Lottie from "react-lottie";
import animationData from "../animation/book.json";
import Register from "../components/Auth/Register";

const RegisterPage = () => {
  const navigate = useNavigate();

  const handleRegisterSuccess = (userData) => {
    // Save user data & token in localStorage
    localStorage.setItem(
      "user",
      JSON.stringify({
        ...userData.data.client,
        adresse: "",
        token: userData.data.token,
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
              {/* Lottie Animation Section */}
              <div className="hidden md:flex md:w-1/2 bg-gradient-to-br from-purple-100 to-blue-100 items-center justify-center p-4">
                <div className="max-w-xs">
                  <Lottie options={lottieOptions} height={200} width={200} />
                </div>
              </div>

              {/* Register Form Section */}
              <Register onSuccess={handleRegisterSuccess} />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default RegisterPage;
