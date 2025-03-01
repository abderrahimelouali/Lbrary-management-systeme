import { useState } from "react";
import { useSelector } from "react-redux"; // Import useSelector to access the theme state

const LiteraryLegendsGallery = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const darkMode = useSelector((state) => state.theme.darkMode); // Get theme state

  // Famous literary authors including an Arabic author
  const authors = [
    { name: "William Shakespeare", img: "/WilliamShakespeare.jpeg" },
    { name: "Naguib Mahfouz", img: "/NaguibMahfouz.jpeg" }, // Arabic Nobel Prize winner
    { name: "Ernest Hemingway", img: "/ErnestHemingway.jpeg" },
    { name: "Haruki Murakami", img: "/HarukiMurakami.jpeg" }, // Japanese contemporary author
    { name: "Stephen King", img: "/StephenKing.jpeg" }, // Horror and thriller legend
  ];

  return (
    <div
      className="w-full py-12 px-4"
      style={{ backgroundColor: darkMode ? "var(--clr-surface-a0)" : "white" }}
    >
      <div className="relative w-full">
        {/* Centered flex container with wrap */}
        <div className="flex flex-wrap justify-center w-full">
          {authors.map((author, index) => (
            <div
              key={index}
              className="relative w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              style={{
                padding: 0,
                margin: 0,
              }}
            >
              <div
                className="relative w-full aspect-[2/3] overflow-hidden"
                style={{
                  filter:
                    hoveredIndex !== null && hoveredIndex !== index
                      ? "grayscale(0.8) blur(2px) brightness(0.5)"
                      : darkMode
                      ? "brightness(0.85)"
                      : "brightness(1)",
                  transition: "all 0.4s ease",
                }}
              >
                <img
                  src={author.img}
                  alt={author.name}
                  className="w-full h-full object-cover"
                />
                {/* Futuristic gradient overlay - using CSS variables for theming */}
                <div
                  className={`absolute inset-0 transition-opacity duration-300 ${
                    hoveredIndex === index ? "opacity-50" : "opacity-0"
                  }`}
                  style={{
                    background: `linear-gradient(to top, ${
                      darkMode
                        ? "var(--clr-surface-a10)"
                        : "var(--clr-primary-a0)"
                    }, ${
                      darkMode
                        ? "var(--clr-primary-a30)"
                        : "var(--clr-primary-a20)"
                    }, transparent)`,
                  }}
                ></div>
              </div>

              <div
                className={`absolute bottom-0 left-0 right-0 p-2 md:p-4 text-center transition-all duration-500 ${
                  hoveredIndex === index
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-2"
                }`}
              >
                <h3
                  className="text-sm md:text-lg font-bold backdrop-blur-sm py-1 px-2 md:py-2 md:px-3 rounded-sm truncate"
                  style={{
                    backgroundColor: darkMode
                      ? "rgba(44, 44, 44, 0.8)"
                      : "rgba(126, 34, 206, 0.6)",
                    color: "var(--clr-light-a0)",
                  }}
                >
                  {author.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LiteraryLegendsGallery;
