import { useEffect, useState } from "react";
import Logout from "../components/Auth/Logout";

function Home() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    try {
      const storedUser = localStorage.getItem("user");
      if (storedUser) {
        setUser(JSON.parse(storedUser)); // Parse only if it exists
      }
    } catch (error) {
      console.error("Error parsing user data:", error);
      localStorage.removeItem("user"); // Remove invalid data
    }
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-2xl font-bold">Home</h1>
      {user ? (
        <p className="text-lg mt-2">Welcome, {user.nom}!</p>
      ) : (
        <p className="text-lg mt-2">Not logged in</p>
      )}
      <Logout />
    </div>
  );
}

export default Home;
