import { useNavigate } from "react-router-dom";

const Logout = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      // Get token from localStorage
      const token = JSON.parse(localStorage.getItem("user"))?.token;
      if (!token) {
        console.error("No token found");
        navigate("/signin"); // Redirect to login if no token
        return;
      }

      // Set headers
      const myHeaders = new Headers();
      myHeaders.append("Authorization", `Bearer ${token}`);

      // Request options
      const requestOptions = {
        method: "POST",
        headers: myHeaders,
        redirect: "follow",
      };

      // Send logout request to the backend
      await fetch("http://localhost:5000/api/auth/logout", requestOptions);

      // Remove token from localStorage
      localStorage.removeItem("user");

      // Redirect to login page
      navigate("/signin");
    } catch (error) {
      console.error("Logout failed:", error);
      navigate("/signin"); // Redirect even if API fails
    }
  };

  return (
    <button
      onClick={handleLogout}
      className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition"
    >
      Logout
    </button>
  );
};

export default Logout;
