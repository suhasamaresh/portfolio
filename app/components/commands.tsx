import React from "react";

type Command = {
  name: string;
  description: string;
  handler: () => React.ReactNode | Promise<React.ReactNode>;
};

const langIcons = {
  javascript: "/jsimage.png",
  typescript: "/typescriptimage.png",
  python: "/pythonimage.png",
  rust: "/rustimage.png",
  cpp: "/cppimage.png",
};

export function unlockCommandsBasedOnBehavior() {
  return ["about", "projects", "skills", "work", "leadership", "contact"];
}

export const commands: Command[] = [
  {
    name: "about",
    description:
      "Complete profile - personal info, education, journey & achievements",
    handler: async () => {
      return (
        <div className="font-mono">
          <div style={{ color: "#03ff7e" }}>▶ COMPLETE DIGITAL PROFILE</div>
          <div style={{ color: "#b8bec6", margin: "12px 0" }}>
            <>
              👋 Hey there! I&apos;m <strong>Suhas A</strong>, a passionate
              Computer Science student with 2+ years of hands-on experience
              building web applications. I specialize in the JavaScript
              ecosystem and love transforming ideas into digital reality.
            </>
          </div>
          <div style={{ margin: "12px 0" }}>
            <div>
              <strong style={{ color: "#03ff7e" }}>📍 Location:</strong>{" "}
              Bengaluru, Karnataka
            </div>
            <div>
              <strong style={{ color: "#03ff7e" }}>📱 Phone:</strong>{" "}
              +91-9148656419
            </div>
            <div>
              <strong style={{ color: "#03ff7e" }}>📧 Email:</strong>{" "}
              suhasamaresh@gmail.com
            </div>
          </div>
          <div style={{ margin: "12px 0" }}>
            <div
              style={{
                color: "#03ff7e",
                fontSize: "1.1rem",
                marginBottom: "8px",
              }}
            >
              🎓 EDUCATION
            </div>
            <div style={{ marginLeft: "16px" }}>
              <div>
                <strong>Dr Ambedkar Institute of Technology</strong>
                <br />
                <span style={{ color: "#b8bec6" }}>
                  B.E. Computer Science & Engineering (2022-2026)
                </span>
                <br />
                <span>
                  CGPA: <strong>8.25/10.0</strong>
                </span>
              </div>
              <div style={{ marginTop: "8px" }}>
                <strong>Deeksha Learning</strong>
                <br />
                <span style={{ color: "#b8bec6" }}>
                  Pre-University Course - PCMB (2020-2022)
                </span>
                <br />
                <span>
                  Percentage: <strong>93%</strong>
                </span>
              </div>
              <div style={{ marginTop: "8px" }}>
                <strong>Sri Chaitanya Techno School</strong>
                <br />
                <span style={{ color: "#b8bec6" }}>
                  Secondary School Certificate (2019-2020)
                </span>
                <br />
                <span>
                  Percentage: <strong>86%</strong>
                </span>
              </div>
            </div>
          </div>

          <div style={{ margin: "12px 0" }}>
            <div
              style={{
                color: "#03ff7e",
                fontSize: "1.1rem",
                marginBottom: "8px",
              }}
            >
              🚀 PROFESSIONAL JOURNEY
            </div>
            <div style={{ marginLeft: "16px", color: "#b8bec6" }}>
              <div>
                🌱 <strong>Genesis (2022):</strong> Started B.E. Computer
                Science
              </div>
              <div>
                🚀 <strong>Growth (2024):</strong> Became GDG Core Team Lead
              </div>
              <div>
                💼 <strong>Professional (2024-2025):</strong> Software
                Development Intern
              </div>
            </div>
          </div>

          <div style={{ margin: "12px 0" }}>
            <div
              style={{
                color: "#03ff7e",
                fontSize: "1.1rem",
                marginBottom: "8px",
              }}
            >
              📊 KEY METRICS
            </div>
            <div style={{ marginLeft: "16px" }}>
              <div>
                📈 <strong>Efficiency Gain:</strong> 40% (Administrative
                processes)
              </div>
              <div>
                ⚡ <strong>Typing Speed:</strong> 140 WPM
              </div>
              <div>
                🚀 <strong>Projects:</strong> 10+ production-ready applications
              </div>
            </div>
          </div>
          <div style={{ margin: "12px 0" }}>
            <div
              style={{
                color: "#03ff7e",
                fontSize: "1.1rem",
                marginBottom: "8px",
              }}
            >
              🏆 CERTIFICATIONS
            </div>
            <div style={{ marginLeft: "16px" }}>
              <div>
                📫 <strong>Postman Student Expert:</strong> API Development &
                Testing
              </div>
              <div>
                💻 <strong>Full-Stack Development:</strong> 100XDevs Cohort 2
              </div>
              <div>
                🟡 <strong>JavaScript Programming:</strong> SimpliLearn
                Fundamentals
              </div>
            </div>
          </div>

          <div style={{ margin: "12px 0" }}>
            <div
              style={{
                color: "#03ff7e",
                fontSize: "1.1rem",
                marginBottom: "8px",
              }}
            >
              🌟 BEYOND THE CODE
            </div>
            <div style={{ marginLeft: "16px", color: "#b8bec6" }}>
              Basketball • Chess player • Music lover • Competitive Programming
              (Trying to get started XD.) • Multilingual learning (German,
              Spanish)
            </div>
          </div>
          <div style={{ color: "#03ff7e", marginTop: "16px" }}>
            &quot;From curious student to production-ready developer in 2+
            years!&quot;
          </div>
        </div>
      );
    },
  },

  {
    name: "projects",
    description: "Portfolio of digital creations and technical innovations",
    handler: async () => {
      return (
        <div className="font-mono">
          <div style={{ color: "#03ff7e" }}>▶ PROJECT PORTFOLIO</div>
          <div style={{ color: "#b8bec6", margin: "8px 0" }}>
            I&apos;ve engineered diverse digital solutions, from encrypted
            platforms to management systems. Each project solves real-world
            problems with modern technology stacks.
          </div>

          <div style={{ margin: "16px 0" }}>
            <div
              style={{
                marginBottom: "16px",
                padding: "12px",
                border: "1px solid #03ff7e",
                borderRadius: "6px",
              }}
            >
              <div
                style={{
                  color: "#03ff7e",
                  fontWeight: "bold",
                  marginBottom: "4px",
                }}
              >
                🔐 KeyLock - Encrypted Secret Transmission
              </div>
              <div
                style={{
                  color: "#b8bec6",
                  fontSize: "0.9rem",
                  marginBottom: "6px",
                }}
              >
                Military-grade security meets elegant UX
              </div>
              <div style={{ fontSize: "0.85rem" }}>
                <div>
                  <strong>Tech:</strong> Next.js, Rust, TypeScript, AES256
                  Encryption
                </div>
                <div>
                  <strong>Features:</strong> Zero-knowledge architecture,
                  self-destructing links, time-based expiration
                </div>
              </div>
            </div>

            <div
              style={{
                marginBottom: "16px",
                padding: "12px",
                border: "1px solid #03ff7e",
                borderRadius: "6px",
              }}
            >
              <div
                style={{
                  color: "#03ff7e",
                  fontWeight: "bold",
                  marginBottom: "4px",
                }}
              >
                🌾 FarmFlow - Developer Code Snippet Manager
              </div>
              <div
                style={{
                  color: "#b8bec6",
                  fontSize: "0.9rem",
                  marginBottom: "6px",
                }}
              >
                Productivity tool with dual interfaces
              </div>
              <div style={{ fontSize: "0.85rem" }}>
                <div>
                  <strong>Tech:</strong> Python, FastAPI, Supabase, AI
                  Integration
                </div>
                <div>
                  <strong>Features:</strong> Web dashboard, CLI tool, optimized
                  query processing
                </div>
              </div>
            </div>
            <div
              style={{
                marginBottom: "16px",
                padding: "12px",
                border: "1px solid #03ff7e",
                borderRadius: "6px",
              }}
            >
              <div
                style={{
                  color: "#03ff7e",
                  fontWeight: "bold",
                  marginBottom: "4px",
                }}
              >
                🎓 Campus Connect - Academic Social Network
              </div>
              <div
                style={{
                  color: "#b8bec6",
                  fontSize: "0.9rem",
                  marginBottom: "6px",
                }}
              >
                Comprehensive social learning platform
              </div>
              <div style={{ fontSize: "0.85rem" }}>
                <div>
                  <strong>Tech:</strong> Next.js, Prisma, PostgreSQL,
                  NextAuth.js
                </div>
                <div>
                  <strong>Features:</strong> Content publishing, community
                  forums, multi-provider auth
                </div>
              </div>
            </div>
            <div
              style={{
                padding: "12px",
                border: "1px solid #03ff7e",
                borderRadius: "6px",
              }}
            >
              <div
                style={{
                  color: "#03ff7e",
                  fontWeight: "bold",
                  marginBottom: "4px",
                }}
              >
                🏢 Student Attendance Management System
              </div>
              
              <div style={{ fontSize: "0.85rem" }}>
                <div>
                  <strong>Tech:</strong> Next.js, MSSQL, Custom Reporting
                  Dashboard
                </div>
              </div>
            </div>
          </div>

          <div style={{ color: "#03ff7e", marginTop: "12px" }}>
            🔗 GitHub:{" "}
            <a
              href="https://github.com/suhasamaresh"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#03ff7e" }}
            >
              suhasamaresh
            </a>
          </div>
        </div>
      );
    },
  },

  {
    name: "skills",
    description: "Technical expertise and programming proficiency matrix",
    handler: async () => {
      return (
        <div className="font-mono">
          <div style={{ color: "#03ff7e" }}>▶ TECHNICAL SKILL MATRIX</div>
          <div style={{ margin: "16px 0" }}>
            <div
              style={{
                color: "#03ff7e",
                fontSize: "1.1rem",
                marginBottom: "8px",
              }}
            >
              💻 PROGRAMMING LANGUAGES
            </div>
            {Object.entries({
              JavaScript: {
                icon: langIcons.javascript,
                level: "Expert",
                projects: "10+",
              },
              TypeScript: {
                icon: langIcons.typescript,
                level: "Advanced",
                projects: "8+",
              },
              Python: {
                icon: langIcons.python,
                level: "Advanced",
                projects: "5+",
              },
              Rust: {
                icon: langIcons.rust,
                level: "Intermediate",
                projects: "2+",
              },
              "C++": {
                icon: langIcons.cpp,
                level: "Intermediate",
                projects: "3+",
              },
            }).map(([lang, info]) => (
              <div
                key={lang}
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: "6px",
                  padding: "6px",
                  backgroundColor: "rgba(3, 255, 126, 0.1)",
                  borderRadius: "4px",
                }}
              >
                <img
                  src={info.icon}
                  alt={lang}
                  style={{ width: "20px", height: "20px", marginRight: "10px" }}
                />
                <div style={{ flex: 1 }}>
                  <span style={{ fontWeight: "bold", color: "#03ff7e" }}>
                    {lang}
                  </span>
                </div>
              </div>
            ))}
          </div>
          <div style={{ margin: "16px 0" }}>
            <div
              style={{
                color: "#03ff7e",
                fontSize: "1.1rem",
                marginBottom: "8px",
              }}
            >
              🛠️ TECHNOLOGY STACK
            </div>
            <div style={{ marginLeft: "16px" }}>
              <div style={{ marginBottom: "8px" }}>
                <strong style={{ color: "#03ff7e" }}>Frontend:</strong>
                <span style={{ color: "#b8bec6", marginLeft: "8px" }}>
                  React.js, Next.js, HTML5, CSS3, Tailwind CSS
                </span>
              </div>
              <div style={{ marginBottom: "8px" }}>
                <strong style={{ color: "#03ff7e" }}>Backend:</strong>
                <span style={{ color: "#b8bec6", marginLeft: "8px" }}>
                  Node.js, Express.js, FastAPI, RESTful APIs, GraphQL,
                  Anchor(Solana)
                </span>
              </div>
              <div style={{ marginBottom: "8px" }}>
                <strong style={{ color: "#03ff7e" }}>Databases:</strong>
                <span style={{ color: "#b8bec6", marginLeft: "8px" }}>
                  MongoDB, PostgreSQL, MSSQL, Supabase
                </span>
              </div>
              <div style={{ marginBottom: "8px" }}>
                <strong style={{ color: "#03ff7e" }}>DevOps:</strong>
                <span style={{ color: "#b8bec6", marginLeft: "8px" }}>
                  Docker, Git, GitHub Actions, Linux
                </span>
              </div>
              <div>
                <strong style={{ color: "#03ff7e" }}>Security:</strong>
                <span style={{ color: "#b8bec6", marginLeft: "8px" }}>
                  JWT, NextAuth, Firebase, AES256 Encryption
                </span>
              </div>
            </div>
          </div>
          <div style={{ margin: "16px 0" }}>
            <div
              style={{
                color: "#03ff7e",
                fontSize: "1.1rem",
                marginBottom: "8px",
              }}
            >
              🎯 CORE COMPETENCIES
            </div>
            <div style={{ marginLeft: "16px", color: "#b8bec6" }}>
              • Full-Stack Web Development
              <br />
              • Database Architecture & Optimization
              <br />
              • API Design & Implementation
              <br />
              • Performance Optimization
              <br />
              • Security Best Practices
              <br />• Team Leadership & Mentoring
            </div>
          </div>
        </div>
      );
    },
  },

  {
    name: "work",
    description: "Professional experience and measurable impact",
    handler: async () => {
      return (
        <div className="font-mono">
          <div style={{ color: "#03ff7e" }}>▶ PROFESSIONAL EXPERIENCE</div>
          <div style={{ margin: "16px 0" }}>
            <div>
              <strong style={{ color: "#03ff7e", fontSize: "1.1rem" }}>
                💼 Software Development Intern
              </strong>
              <br />
              <span style={{ color: "#b8bec6" }}>
                Dr Ambedkar Institute of Technology • Aug 2024 - Feb 2025
              </span>
            </div>
          </div>

          <div style={{ margin: "16px 0" }}>
            <div
              style={{
                color: "#03ff7e",
                fontSize: "1.1rem",
                marginBottom: "8px",
              }}
            >
              🎯 PRIMARY PROJECT
            </div>
            <div style={{ marginLeft: "16px" }}>
              <div style={{ color: "#b8bec6", marginBottom: "8px" }}>
                <strong>Student Attendance Management System</strong> -
                Enterprise-grade solution
              </div>
              <div style={{ fontSize: "0.9rem", color: "#b8bec6" }}>
                • Architected full-stack system with Next.js and Microsoft SQL
                Server
                <br />
                • Designed custom reporting dashboard with automated processes
                <br />
                • Implemented user authentication and role-based access control
                <br />
                • Coordinated user acceptance testing and deployment
                <br />• Collaborated across departments for requirement
                gathering
              </div>
            </div>
          </div>
          <div style={{ margin: "16px 0" }}>
          <div>
            <strong style={{ color: "#03ff7e", fontSize: "1.1rem" }}>
            🖥️ Colossus Hackathon Website Developer
            </strong>
            <br />
            <span style={{ color: "#b8bec6" }}>
            Built the official website for Colossus Hackathon using Next.js and Framer Motion for animations and interactive UI.
            </span>
            <div style={{ fontSize: "0.9rem", color: "#b8bec6", marginTop: "6px" }}>
            • Designed and developed a modern, responsive event platform<br />
            • Leveraged Framer Motion for smooth, engaging animations<br />
            • Enabled real-time updates and seamless user experience for participants
            </div>
          </div>
          </div>

          <div style={{ margin: "16px 0" }}>
            <div
              style={{
                color: "#03ff7e",
                fontSize: "1.1rem",
                marginBottom: "8px",
              }}
            >
              🏆 TECHNICAL ACHIEVEMENTS
            </div>
            <div style={{ marginLeft: "16px", color: "#b8bec6" }}>
              • Built scalable architecture supporting 1,200+ concurrent users
              <br />
              • Optimized database queries for real-time performance
              <br />
              • Implemented comprehensive error handling and logging
              <br />
              • Created intuitive admin dashboard with advanced filtering
              <br />• Established automated backup and recovery procedures
            </div>
          </div>
        </div>
      );
    },
  },

  {
    name: "leadership",
    description: "Community leadership and mentoring experience",
    handler: async () => {
      return (
        <div className="font-mono">
          <div style={{ color: "#03ff7e" }}>
            ▶ LEADERSHIP & COMMUNITY IMPACT
          </div>

          <div style={{ margin: "16px 0" }}>
            <div>
              <strong style={{ color: "#03ff7e", fontSize: "1.1rem" }}>
                🌐 Google Developer Group (GDG) Core Team
              </strong>
              <br />
              <span style={{ color: "#b8bec6" }}>
                Blockchain & Web3 Technology Lead • 2024-2025
              </span>
            </div>
            <div style={{ marginTop: "8px", marginLeft: "16px" }}>
              <div style={{ color: "#b8bec6", marginBottom: "8px" }}>
                <strong>Key Responsibilities:</strong>
              </div>
              <div style={{ fontSize: "0.9rem", color: "#b8bec6" }}>
                • Spearhead emerging technology adoption programs
                <br />
                • Mentor 100+ students in blockchain development
                <br />
                • Lead Web3 and decentralized application workshops
                <br />
                • Drive innovation in blockchain technology education
                <br />• Organize institute-wide Git/GitHub training bootcamps
              </div>
            </div>
          </div>
          <div style={{ margin: "16px 0" }}>
            <div>
              <strong style={{ color: "#03ff7e", fontSize: "1.1rem" }}>
                🏆 Colossus 2.0 Technical Hackathon
              </strong>
              <br />
              <span style={{ color: "#b8bec6" }}>
                Event Technology Coordinator & Platform Developer • 2025
              </span>
            </div>
            <div style={{ marginTop: "8px", marginLeft: "16px" }}>
              <div style={{ color: "#b8bec6", marginBottom: "8px" }}>
                <strong>Technical Contributions:</strong>
              </div>
              <div style={{ fontSize: "0.9rem", color: "#b8bec6" }}>
                • Architected and deployed official event website
                <br />
                • Built participant registration and project submission portal
                <br />
                • Implemented real-time event updates and leaderboard
                <br />
                • Managed logistics for 200+ participants
                <br />• Coordinated with academic staff and volunteer teams
              </div>
            </div>
          </div>
          <div style={{ margin: "16px 0" }}>
            <div
              style={{
                color: "#03ff7e",
                fontSize: "1.1rem",
                marginBottom: "8px",
              }}
            >
              📊 LEADERSHIP IMPACT
            </div>
            <div style={{ marginLeft: "16px" }}>
              <div style={{ marginBottom: "6px" }}>
                <span style={{ color: "#03ff7e" }}>🚀 Projects Initiated:</span>{" "}
                50+ new open-source contributions
              </div>
              <div style={{ marginBottom: "6px" }}>
                <span style={{ color: "#03ff7e" }}>🏆 Events Coordinated:</span>{" "}
                Multiple workshops and hackathons
              </div>
              <div>
                <span style={{ color: "#03ff7e" }}>🌟 Community Growth:</span>{" "}
                Improved collaborative coding practices campus-wide
              </div>
            </div>
          </div>

          <div style={{ color: "#03ff7e", marginTop: "16px" }}>
            🔗 GDG Activities:{" "}
            <a
              href="https://github.com/suhasamaresh/gdgpractivity"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#03ff7e" }}
            >
              gdgpractivity
            </a>
          </div>
        </div>
      );
    },
  },

  {
    name: "contact",
    description: "Get in touch and connect professionally",
    handler: async () => {
      return (
        <div className="font-mono">
          <div style={{ color: "#03ff7e" }}>
            ▶ PROFESSIONAL CONTACT INFORMATION
          </div>

          <div style={{ margin: "16px 0" }}>
            <div style={{ marginBottom: "12px" }}>
              <span style={{ color: "#03ff7e" }}>📞</span>{" "}
              <strong>Phone:</strong>{" "}
              <a
                href="tel:+919148656419"
                style={{ color: "#b8bec6", marginLeft: "8px" }}
              >
                +91-9148656419
              </a>
            </div>
            <div style={{ marginBottom: "12px" }}>
              <span style={{ color: "#03ff7e" }}>📧</span>{" "}
              <strong>Email:</strong>{" "}
              <a
                href="mailto:suhasamaresh@gmail.com"
                style={{ color: "#b8bec6", marginLeft: "8px" }}
              >
                suhasamaresh@gmail.com
              </a>
            </div>
            <div style={{ marginBottom: "12px" }}>
              <span style={{ color: "#03ff7e" }}>💼</span>{" "}
              <strong>LinkedIn:</strong>{" "}
              <a
                href="https://www.linkedin.com/in/suhas-amaresh-a5a431228/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#b8bec6", marginLeft: "8px" }}
              >
                suhas-amaresh
              </a>
            </div>
            <div style={{ marginBottom: "12px" }}>
              <span style={{ color: "#03ff7e" }}>💻</span>{" "}
              <strong>GitHub:</strong>{" "}
              <a
                href="https://github.com/suhasamaresh"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#b8bec6", marginLeft: "8px" }}
              >
                suhasamaresh
              </a>
            </div>
            <div style={{ marginBottom: "12px" }}>
              <span style={{ color: "#03ff7e" }}>📍</span>{" "}
              <strong>Location:</strong>{" "}
              <span style={{ color: "#b8bec6", marginLeft: "8px" }}>
                Bengaluru, Karnataka, India
              </span>
            </div>
          </div>

          <div style={{ margin: "16px 0" }}>
            <div
              style={{
                color: "#03ff7e",
                fontSize: "1.1rem",
                marginBottom: "8px",
              }}
            >
              🤝 LET&apos;S CONNECT
            </div>
            <div style={{ color: "#b8bec6", marginLeft: "16px" }}>
              I&apos;m always excited to connect with fellow developers, discuss
              innovative projects, and explore collaboration opportunities.
              Whether you&apos;re interested in full-stack development,{" "}
              blockchain technology, or just want to chat about the latest in
              tech - feel free to reach out!
            </div>
          </div>

          <div style={{ margin: "16px 0" }}>
            <div
              style={{
                color: "#03ff7e",
                fontSize: "1.1rem",
                marginBottom: "8px",
              }}
            >
              🚀 OPEN TO
            </div>
            <div style={{ marginLeft: "16px", color: "#b8bec6" }}>
              • Software Development Opportunities
              <br />
              • Open Source Collaborations
              <br />
              • Technical Discussions
              <br />
              • Hackathons
              <br />• Full-Stack Development Projects
            </div>
          </div>
        </div>
      );
    },
  },
  {
    name: "clear",
    description: "Clear the terminal screen",
    handler: async () => {
      return null;
    },
  },
];
