import React, { useState, createContext, useContext, useEffect } from "react";
import {
  Github,
  Linkedin,
  Mail,
  Star,
  Code,
  Briefcase,
  GraduationCap,
  Award,
  Sun,
  Moon,
  Icon,
} from "lucide-react";

type ThemeContextType = {
  theme: string;
  setTheme: (theme: string) => void;
};

const ThemeContext = createContext<ThemeContextType>({
  theme: "light",
  setTheme: () => null, // default empty function
});

type ThemeProviderProps = {
  children: React.ReactNode;
};

const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState<string>("light");

  useEffect(() => {
    const savedTheme = localStorage.getItem("portfolio-theme");
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.className = savedTheme;
    } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
      document.documentElement.className = "dark";
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("portfolio-theme", theme);
    document.documentElement.className = theme;
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

type SocialLink = {
  Icon: React.ElementType;
  href: string;
  color: string;
};

// Define the social links array with proper typing
const socialLinks: SocialLink[] = [
  {
    Icon: Github,
    href: "https://github.com",
    color: 'text-[#24292f] dark:text-white hover:text-[#24292f]/80 dark:hover:text-white/80' // Updated GitHub colors
  },
  {
    Icon: Linkedin,
    href: "https://linkedin.com",
    color: "text-[#0077B5] hover:text-[#0077B5]/80",
  },
  {
    Icon: Mail,
    href: "mailto:example@email.com",
    color: "text-[#EA4335] hover:text-[#EA4335]/80",
  },
];

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState("about");
  const { theme, setTheme } = useContext(ThemeContext);

  const projects = [
    {
      title: "AI-Powered Analytics Dashboard",
      description:
        "Built a real-time analytics platform using Next.js, TensorFlow.js",
      tech: ["React", "TensorFlow.js", "WebGL"],
      stars: 128,
    },
    {
      title: "Quantum Computing Simulator",
      description:
        "Created a quantum circuit simulator with visual programming",
      tech: ["TypeScript", "Three.js", "WebAssembly"],
      stars: 256,
    },
    {
      title: "Neural Interface Design System",
      description:
        "Developed a comprehensive UI kit for brain-computer interfaces",
      tech: ["React", "Framer Motion", "WebXR"],
      stars: 512,
    },
  ];

  return (
    <div
      className={`min-h-screen transition-colors duration-200 
      ${
        theme === "dark"
          ? "bg-gradient-to-br from-gray-900 to-indigo-950 text-white"
          : "bg-gradient-to-br from-indigo-50 to-rose-50 text-gray-900"
      }`}
    >
      <div className="max-w-6xl mx-auto p-8">
        <header className="flex justify-between items-center mb-16">
          <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-rose-400">
            Jane Cooper
          </h1>
          <div className="flex items-center gap-8">
            <nav className="flex gap-4">
              {["about", "projects", "experience"].map((section) => (
                <button
                  key={section}
                  onClick={() => setActiveSection(section)}
                  className={`px-4 py-2 rounded-lg transition-all capitalize
                    ${
                      activeSection === section
                        ? theme === "dark"
                          ? "bg-gray-800 shadow-lg"
                          : "bg-white shadow-lg"
                        : theme === "dark"
                        ? "hover:bg-gray-800/50"
                        : "hover:bg-white/50"
                    }`}
                >
                  {section}
                </button>
              ))}
            </nav>
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className={`p-2 rounded-lg transition-colors
                ${
                  theme === "dark"
                    ? "bg-gray-800 hover:bg-gray-700"
                    : "bg-white hover:bg-gray-100"
                }`}
            >
              {theme === "dark" ? (
                <Sun className="w-5 h-5" />
              ) : (
                <Moon className="w-5 h-5" />
              )}
            </button>
          </div>
        </header>

        <main className="grid grid-cols-12 gap-8">
          <div className="col-span-4">
            <div
              className={`backdrop-blur-lg rounded-2xl p-8 shadow-lg
              ${theme === "dark" ? "bg-gray-800/70" : "bg-white/70"}`}
            >
              <div className="relative mb-8">
                {/* Profile Image */}
                <img
                  // Local image path (uncomment and add your image to public/images folder)
                  // src="/images/profile.jpg"

                  // Temporary placeholder image (replace with your actual image in production)
                  src="https://placehold.co/400x400"
                  alt="Professional headshot of Jane Cooper"
                  // Styling classes:
                  // rounded-2xl -> Adds rounded corners (16px radius)
                  // w-full -> Makes image fill its container width
                  // Optional: add 'object-cover' if you want to maintain aspect ratio
                  className="rounded-2xl w-full"
                />
                <div
                  className={`absolute -bottom-4 -right-4 p-3 rounded-xl shadow-lg
                  ${theme === "dark" ? "bg-gray-800" : "bg-white"}`}
                >
                  <Code className="w-6 h-6 text-indigo-400" />
                </div>
              </div>
              <h2 className="text-2xl font-semibold mb-2">
                Senior Software Engineer
              </h2>
              <p
                className={`mb-6 ${
                  theme === "dark" ? "text-gray-300" : "text-gray-600"
                }`}
              >
                Crafting innovative solutions at the intersection of AI and
                human experience.
              </p>

              <div className="flex gap-4">
                {socialLinks.map((link: SocialLink, index: number) => (
                  <a
                    key={index}
                    href={link.href}
                    className={`p-2 rounded-lg transition-all duration-300 ${
                      theme === "dark"
                        ? "bg-gray-700 hover:bg-gray-600 hover:scale-110"
                        : "bg-gray-100 hover:bg-gray-200 hover:scale-110"
                    }`}
                  >
                    <link.Icon
                      className={`w-5 h-5 transition-colors ${link.color}`}
                    />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="col-span-8">
            {activeSection === "about" && (
              <div
                className={`backdrop-blur-lg rounded-2xl p-8 shadow-lg
                ${theme === "dark" ? "bg-gray-800/70" : "bg-white/70"}`}
              >
                <h3 className="text-2xl font-semibold mb-6">About Me</h3>
                <p
                  className={`mb-6 ${
                    theme === "dark" ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  With over 8 years of experience in software development, I
                  specialize in building scalable applications with a focus on
                  AI integration and exceptional user experiences. My expertise
                  spans full-stack development, machine learning, and emerging
                  technologies.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  {["Technical Skills", "Soft Skills"].map(
                    (category, index) => (
                      <div
                        key={index}
                        className={`p-4 rounded-xl
                      ${theme === "dark" ? "bg-gray-700" : "bg-gray-50"}`}
                      >
                        <h4 className="font-semibold mb-2">{category}</h4>
                        <div className="flex flex-wrap gap-2">
                          {(category === "Technical Skills"
                            ? [
                                "React",
                                "TypeScript",
                                "Python",
                                "TensorFlow",
                                "AWS",
                                "GraphQL",
                              ]
                            : [
                                "Leadership",
                                "Communication",
                                "Problem Solving",
                                "Mentoring",
                              ]
                          ).map((skill) => (
                            <span
                              key={skill}
                              className={`px-3 py-1 rounded-lg text-sm
                              ${theme === "dark" ? "bg-gray-600" : "bg-white"}`}
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    )
                  )}
                </div>
              </div>
            )}

            {activeSection === "projects" && (
              <div className="space-y-6">
                {projects.map((project, index) => (
                  <div
                    key={index}
                    className={`backdrop-blur-lg rounded-2xl p-6 shadow-lg
                      ${theme === "dark" ? "bg-gray-800/70" : "bg-white/70"}`}
                  >
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-xl font-semibold">{project.title}</h3>
                      <div
                        className={`flex items-center gap-1 px-2 py-1 rounded-lg
                        ${theme === "dark" ? "bg-gray-700" : "bg-gray-100"}`}
                      >
                        <Star className="w-4 h-4" />
                        <span className="text-sm">{project.stars}</span>
                      </div>
                    </div>
                    <p
                      className={`mb-4 ${
                        theme === "dark" ? "text-gray-300" : "text-gray-600"
                      }`}
                    >
                      {project.description}
                    </p>
                    <div className="flex gap-2">
                      {project.tech.map((tech, i) => (
                        <span
                          key={i}
                          className={`px-3 py-1 rounded-lg text-sm
                            ${
                              theme === "dark" ? "bg-gray-700" : "bg-gray-100"
                            }`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {activeSection === "experience" && (
              <div
                className={`backdrop-blur-lg rounded-2xl p-8 shadow-lg
                ${theme === "dark" ? "bg-gray-800/70" : "bg-white/70"}`}
              >
                <div className="space-y-8">
                  {[
                    {
                      icon: Briefcase,
                      color: "indigo",
                      title: "Senior Software Engineer",
                      org: "TechCorp",
                      period: "2022 - Present",
                      description:
                        "Led development of AI-powered features reaching 1M+ users",
                    },
                    {
                      icon: GraduationCap,
                      color: "rose",
                      title: "MSc Computer Science",
                      org: "Tech University",
                      period: "2020",
                      description:
                        "Specialized in Machine Learning & Computer Vision",
                    },
                    {
                      icon: Award,
                      color: "amber",
                      title: "Innovation Award",
                      org: "Global Tech Summit",
                      period: "2024",
                      description:
                        "Recognized for contributions to open-source AI tools",
                    },
                  ].map((item, index) => (
                    <div key={index} className="flex gap-4">
                      <div
                        className={`bg-${item.color}-100 p-2 rounded-lg h-min
                        ${theme === "dark" ? `bg-${item.color}-900/30` : ""}`}
                      >
                        <item.icon
                          className={`w-6 h-6 text-${item.color}-400`}
                        />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold">{item.title}</h3>
                        <p
                          className={
                            theme === "dark" ? "text-gray-300" : "text-gray-600"
                          }
                        >
                          {item.org} • {item.period}
                        </p>
                        <p className="mt-2">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
};

const PortfolioWithTheme = () => (
  <ThemeProvider>
    <Portfolio />
  </ThemeProvider>
);

export default PortfolioWithTheme;
