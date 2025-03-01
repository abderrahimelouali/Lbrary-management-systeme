import { useEffect, useState } from "react";
import Logout from "../components/Auth/Logout";
import AuthorsGallery from "../components/UI/Authors";
import { BookOpen } from "lucide-react";
import { useSelector } from "react-redux"; // Import useSelector

function Home() {
  const [user, setUser] = useState(null);
  const darkMode = useSelector((state) => state.theme.darkMode); // Get theme state

  // ==== User Authentication Logic ====
  useEffect(() => {
    try {
      const storedUser = localStorage.getItem("user");
      if (storedUser) {
        setUser(JSON.parse(storedUser));
      }
    } catch (error) {
      console.error("Error parsing user data:", error);
      localStorage.removeItem("user");
    }
  }, []);

  // ==== CSS for Animated Text Background ====
  const animatedTextStyle = {
    backgroundImage: "url('/welcome.png')",
    backgroundClip: "text",
    WebkitBackgroundClip: "text",
    color: "transparent",
    backgroundSize: "200%",
    animation: "animate 5s linear infinite",
  };

  return (
    <div className={darkMode ? "dark-mode" : "light-mode"}>
      {/* ===================================
          HERO SECTION
      ==================================== */}
      <section className="relative h-screen overflow-hidden">
        {/* Background image with overlay that respects theme */}
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1507842217343-583bb7270b66?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />

        {/* Curved overlay - using CSS variables for colors */}
        <div className="absolute inset-0 z-10">
          <svg
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            className="h-full w-full"
          >
            <path
              d="M0,0 L100,0 L100,100 L0,100 Z"
              fill={darkMode ? "var(--clr-surface-a10)" : "rgba(126, 34, 206, 0.80)"}
            />
            <path
              d="M0,0 L100,0 L100,70 C75,90 25,80 0,100 Z"
              fill="var(--bg-color)"
            />
          </svg>
        </div>

        {/* Hero content */}
        <div className="relative z-20 flex flex-col items-center justify-center h-full text-center px-4">
          <div className="max-w-4xl">
            <h1
              className="text-5xl md:text-6xl font-bold mb-6"
              style={animatedTextStyle}
            >
              Welcome to LibriTech
            </h1>

            <p className="text-xl md:text-2xl mb-10" style={{ color: "var(--text-color)" }}>
              Revolutionizing your digital library experience
            </p>
            <button className="px-8 py-4 rounded-full text-lg font-semibold transition-colors shadow-lg"
              style={{
                backgroundColor: "var(--primary-color)",
                color: darkMode ? "var(--clr-light-a0)" : "white"
              }}>
              Get Started
            </button>
          </div>

          {/* Decorative elements */}
          <div className="absolute right-1/4 top-1/4 rounded-full h-16 w-16 opacity-70"
            style={{ backgroundColor: "var(--bg-color)" }}></div>
          <div className="absolute left-1/3 bottom-1/3 rounded-full h-24 w-24 opacity-70"
            style={{ backgroundColor: "var(--bg-color)" }}></div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
          <BookOpen className="h-10 w-10" style={{ color: "var(--text-color)" }} />
        </div>
      </section>

      {/* CSS Animation keyframes */}
      <style>{`
        @keyframes animate {
          0% {
            background-position: 0%;
          }
          100% {
            background-position: 200%;
          }
        }

        .dark-mode {
          --bg-color: var(--clr-surface-a0);
          --text-color: var(--clr-light-a0);
          --primary-color: var(--clr-primary-a30);
          --section-bg: var(--clr-surface-a10);
          --card-bg: var(--clr-surface-a20);
        }

        .light-mode {
          --bg-color: var(--clr-light-a0);
          --text-color: var(--clr-dark-a0);
          --primary-color: var(--clr-primary-a30);
          --section-bg: var(--clr-primary-a10);
          --card-bg: white;
        }
      `}</style>

      {/* ===================================
          ABOUT US SECTION
      ==================================== */}
      <section className="py-20" style={{ backgroundColor: "var(--bg-color)" }}>
        <h2 className="text-3xl font-bold mb-8 text-center" style={{ color: "var(--primary-color)" }}>
          About LibriTech
        </h2>
        <p className="text-lg max-w-4xl mx-auto text-center" style={{ color: "var(--text-color)" }}>
          LibriTech is a tech company dedicated to transforming the way people
          experience digital libraries. We offer innovative solutions that make
          accessing and managing your content easier than ever. Our services
          range from personalized reading experiences to powerful content
          management systems.
        </p>
      </section>

      {/* ===================================
          SERVICES SECTION
      ==================================== */}
      <section className="py-20" style={{ backgroundColor: "var(--section-bg)" }}>
        <h2 className="text-3xl font-bold text-center mb-12" style={{ color: "var(--primary-color)" }}>
          Our Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 px-6 max-w-6xl mx-auto">
          {/* Service Card 1 */}
          <div className="shadow-md p-6 rounded-lg text-center" style={{ backgroundColor: "var(--card-bg)" }}>
            <div className="p-4 rounded-full inline-block mb-4" style={{ backgroundColor: "var(--primary-color)", opacity: "0.2" }}>
              <BookOpen className="h-8 w-8" style={{ color: "var(--primary-color)" }} />
            </div>
            <h3 className="text-xl font-semibold mb-2" style={{ color: "var(--primary-color)" }}>
              Personalized Recommendations
            </h3>
            <p style={{ color: "var(--text-color)" }}>
              Get book recommendations tailored to your interests and reading
              habits.
            </p>
          </div>

          {/* Service Card 2 */}
          <div className="shadow-md p-6 rounded-lg text-center" style={{ backgroundColor: "var(--card-bg)" }}>
            <div className="p-4 rounded-full inline-block mb-4" style={{ backgroundColor: "var(--primary-color)", opacity: "0.2" }}>
              <BookOpen className="h-8 w-8" style={{ color: "var(--primary-color)" }} />
            </div>
            <h3 className="text-xl font-semibold mb-2" style={{ color: "var(--primary-color)" }}>
              Content Management Systems
            </h3>
            <p style={{ color: "var(--text-color)" }}>
              Efficiently manage your digital library with our powerful CMS
              tools.
            </p>
          </div>

          {/* Service Card 3 */}
          <div className="shadow-md p-6 rounded-lg text-center" style={{ backgroundColor: "var(--card-bg)" }}>
            <div className="p-4 rounded-full inline-block mb-4" style={{ backgroundColor: "var(--primary-color)", opacity: "0.2" }}>
              <BookOpen className="h-8 w-8" style={{ color: "var(--primary-color)" }} />
            </div>
            <h3 className="text-xl font-semibold mb-2" style={{ color: "var(--primary-color)" }}>
              Secure Cloud Storage
            </h3>
            <p style={{ color: "var(--text-color)" }}>
              Store your eBooks safely and access them from any device with
              ease.
            </p>
          </div>
        </div>
      </section>

      {/* ===================================
          TEAM SECTION
      ==================================== */}
      <section className="py-20" style={{ backgroundColor: "var(--bg-color)" }}>
        <h2 className="text-3xl font-bold mb-12 text-center" style={{ color: "var(--primary-color)" }}>
          Meet the Team
        </h2>
        <div className="flex justify-center space-x-12">
          {/* Team Member 1 */}
          <div className="w-64 shadow-lg rounded-lg overflow-hidden" style={{ backgroundColor: "var(--card-bg)" }}>
            <img
              src="abde.jpeg"
              alt="Abderrahim El Ouali"
              className="w-32 h-32 object-cover rounded-full mx-auto mb-4"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold" style={{ color: "var(--primary-color)" }}>
                Abderrahim El Ouali
              </h3>
              <p style={{ color: "var(--text-color)" }}>
                CEO, Full-Stack Developer & Co-Founder
              </p>
            </div>
          </div>

          {/* Team Member 2 */}
          <div className="w-64 shadow-lg rounded-lg overflow-hidden" style={{ backgroundColor: "var(--card-bg)" }}>
            <img
              src="nassim.jpg"
              alt="Nassim Mzili"
              className="w-32 h-32 object-cover rounded-full mx-auto mb-4"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold" style={{ color: "var(--primary-color)" }}>
                Nassim Mzili
              </h3>
              <p style={{ color: "var(--text-color)" }}>
                CTO, Full-Stack Developer & Co-Founder
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===================================
          AUTHORS GALLERY SECTION
      ==================================== */}
      <section className="py-20" style={{ backgroundColor: "var(--section-bg)" }}>
        <h2 className="text-3xl font-bold text-center mb-12" style={{ color: "var(--primary-color)" }}>
          Top Reads from Our Authors
        </h2>
        <AuthorsGallery />
      </section>
    </div>
  );
}

export default Home;