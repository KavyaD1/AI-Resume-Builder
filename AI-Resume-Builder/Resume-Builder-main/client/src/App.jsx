import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import { useState } from "react";
import { Toaster } from "react-hot-toast";

/* =========================
   RESUME DEMO COMPONENT
========================= */
const ResumeDemo = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [skills, setSkills] = useState("");
  const [education, setEducation] = useState("");
  const [internship, setInternship] = useState("");
  const [project, setProject] = useState("");
  const [summary, setSummary] = useState("");

  const [role, setRole] = useState("Software Developer");

  /* =========================
     ROLE SUGGESTIONS
  ========================= */
 const roleSuggestions = {
  "Software Developer":
    "Software Developer skilled in JavaScript, React, Node.js and full stack development. Experienced in building scalable web applications, RESTful APIs, and responsive user interfaces. Strong understanding of data structures, algorithms, and database management. Passionate about writing clean, efficient, and maintainable code. Quick learner with the ability to adapt to new technologies.",

  "Data Scientist":
    "Data Scientist skilled in Python, Machine Learning and Data Analysis. Experienced in data preprocessing, feature engineering, and predictive modeling. Proficient in libraries like Pandas, NumPy, and Scikit-learn. Strong knowledge of statistics and data visualization techniques. Ability to extract meaningful insights to support decision-making.",

  "Data Analyst":
    "Data Analyst skilled in Excel, SQL, Power BI and dashboards. Experienced in data cleaning, transformation, and reporting. Strong ability to analyze trends and generate business insights. Proficient in creating interactive dashboards and visualizations. Detail-oriented with strong problem-solving and analytical thinking skills.",

  "DevOps Engineer":
    "DevOps Engineer skilled in CI/CD, Docker, Kubernetes and AWS. Experienced in automating deployment pipelines and managing cloud infrastructure. Strong understanding of system reliability, monitoring, and scaling. Knowledge of version control systems and scripting. Focused on improving development efficiency and system performance.",

  "AI/ML Engineer":
    "AI/ML Engineer skilled in Python, TensorFlow and deep learning techniques. Experienced in building, training, and deploying machine learning models. Strong foundation in algorithms, neural networks, and data processing. Passionate about solving real-world problems using AI. Continuously learning and exploring new advancements in AI/ML.",

  "Cloud Engineer":
    "Cloud Engineer skilled in AWS, Azure and cloud deployment. Experienced in designing, deploying, and managing cloud-based applications. Strong knowledge of cloud architecture, networking, and security. Skilled in scaling applications and optimizing performance. Focused on building reliable and cost-efficient cloud solutions.",

  "Cyber Security Analyst":
    "Cyber Security Analyst skilled in network security and threat detection. Experienced in vulnerability assessment and risk analysis. Knowledge of firewalls, encryption, and security protocols. Strong ability to identify and respond to security threats. Committed to ensuring data protection and system integrity.",

  "UI/UX Designer":
    "UI/UX Designer skilled in Figma, wireframing and prototyping. Experienced in user research, usability testing, and interface design. Strong understanding of design principles and user behavior. Ability to create intuitive and visually appealing designs. Passionate about enhancing user experience and accessibility.",

  "Full Stack Developer":
    "Full Stack Developer skilled in MERN stack development. Experienced in both frontend and backend development. Strong understanding of APIs, databases, and deployment. Ability to build complete web applications from scratch. Focused on performance, scalability, and clean architecture.",

  "Mobile App Developer":
    "Mobile App Developer skilled in React Native and Android development. Experienced in building cross-platform mobile applications. Strong understanding of UI/UX for mobile devices. Ability to optimize performance and ensure smooth user experience. Passionate about developing user-friendly mobile solutions.",

  "Civil Engineer":
    "Civil Engineer skilled in AutoCAD, site supervision and construction planning. Experienced in project management and structural design. Strong knowledge of materials, safety standards, and construction processes. Ability to manage resources and timelines effectively. Committed to delivering quality infrastructure projects.",

  "Backend Developer":
    "Backend Developer skilled in Node.js, Express and database management. Experienced in building secure and scalable APIs. Strong knowledge of server-side logic and authentication systems. Ability to handle large-scale data processing. Focused on performance optimization and system reliability.",

  "Frontend Developer":
    "Frontend Developer skilled in HTML, CSS, JavaScript and React. Experienced in building responsive and interactive web interfaces. Strong understanding of UI/UX principles. Ability to optimize performance and ensure cross-browser compatibility. Passionate about creating engaging user experiences.",

  "Database Administrator":
    "Database Administrator skilled in SQL, database design and optimization. Experienced in managing large datasets and ensuring data security. Strong knowledge of backup, recovery, and performance tuning. Ability to maintain data integrity and availability. Focused on efficient data management systems.",

  "System Engineer":
    "System Engineer skilled in system architecture and troubleshooting. Experienced in managing IT infrastructure and system performance. Strong knowledge of hardware and software integration. Ability to resolve technical issues efficiently. Committed to maintaining system stability and reliability.",

  "Network Engineer":
    "Network Engineer skilled in routing, switching and network configuration. Experienced in maintaining and troubleshooting network systems. Strong understanding of network security and protocols. Ability to ensure high network availability. Focused on efficient and secure communication systems.",

  "QA Engineer":
    "QA Engineer skilled in software testing, automation and debugging. Experienced in writing test cases and ensuring software quality. Strong attention to detail and problem-solving skills. Knowledge of testing tools and methodologies. Committed to delivering bug-free applications.",

  "Product Manager":
    "Product Manager skilled in product planning and agile methodologies. Experienced in managing product lifecycle and stakeholder communication. Strong ability to define product vision and strategy. Knowledge of market research and user needs. Focused on delivering high-value products.",

  "Business Analyst":
    "Business Analyst skilled in requirement gathering and data analysis. Experienced in bridging business needs with technical solutions. Strong communication and analytical skills. Ability to identify process improvements. Focused on delivering efficient business solutions.",

  "Game Developer":
    "Game Developer skilled in Unity, C# and game design. Experienced in developing interactive gaming applications. Strong understanding of graphics, physics, and gameplay mechanics. Ability to create engaging user experiences. Passionate about game development and innovation.",

  "Embedded Systems Engineer":
    "Embedded Systems Engineer skilled in microcontrollers and C programming. Experienced in hardware-software integration. Strong knowledge of real-time systems and embedded architecture. Ability to design and test embedded solutions. Focused on efficient and reliable system performance."
};
  /* =========================
     AI SUGGESTION
  ========================= */
  const generateSuggestion = () => {
    setSummary(roleSuggestions[role]);
  };

  /* =========================
     ATS CALCULATION
  ========================= */
  const calculateATS = () => {
    let score = 40;

    if (skills && skills.length > 5) score += 15;
    if (education && education.length > 5) score += 10;
    if (internship && internship.length > 5) score += 10;
    if (project && project.length > 5) score += 10;
    if (summary && summary.length > 10) score += 15;

    return Math.min(score, 100);
  };

  const downloadPDF = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-gray-100 p-10">
      <h1 className="text-4xl font-bold text-center text-purple-700">
        AI Resume Builder
      </h1>

      <div className="grid md:grid-cols-2 gap-10 mt-10">

        {/* ================= FORM ================= */}
        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-2xl font-bold mb-4">Resume Form</h2>

          <input placeholder="Name" className="input" onChange={(e) => setName(e.target.value)} />
          <input placeholder="Email" className="input" onChange={(e) => setEmail(e.target.value)} />
          <input placeholder="Phone" className="input" onChange={(e) => setPhone(e.target.value)} />

          <select
            className="input"
            value={role}
            onChange={(e) => setRole(e.target.value)}
          >
            {Object.keys(roleSuggestions).map((r) => (
              <option key={r}>{r}</option>
            ))}
          </select>

          <textarea placeholder="Skills" className="input" onChange={(e) => setSkills(e.target.value)} />
          <textarea placeholder="Education" className="input" onChange={(e) => setEducation(e.target.value)} />
          <textarea placeholder="Internship" className="input" onChange={(e) => setInternship(e.target.value)} />
          <textarea placeholder="Projects" className="input" onChange={(e) => setProject(e.target.value)} />
          <textarea placeholder="Summary" className="input" value={summary} onChange={(e) => setSummary(e.target.value)} />

          <div className="flex gap-3 mt-4">
            <button onClick={generateSuggestion} className="btn">
              AI Suggest
            </button>

            <button onClick={downloadPDF} className="btn-green">
              Download PDF
            </button>
          </div>
        </div>

        {/* ================= PREVIEW ================= */}
        <div id="resume-preview" className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-3xl font-bold">{name || "Your Name"}</h2>
          <p>{email}</p>
          <p>{phone}</p>

          <hr className="my-4" />

          <p><b>Role:</b> {role}</p>
          <p><b>Skills:</b> {skills}</p>
          <p><b>Education:</b> {education}</p>
          <p><b>Internship:</b> {internship}</p>
          <p><b>Projects:</b> {project}</p>

          <p className="mt-4">
            <b>Summary:</b> {summary}
          </p>

          {/* ✅ ATS SCORE ADDED HERE */}
          <div className="mt-6 bg-purple-100 p-4 rounded-lg text-center">
            <h3 className="text-2xl font-bold text-purple-700">
              ATS Score: {calculateATS()}%
            </h3>
          </div>
        </div>
      </div>

      {/* ================= PRINT STYLE ================= */}
      <style>
        {`
        @media print {
          body * { visibility: hidden; }
          #resume-preview, #resume-preview * { visibility: visible; }
          #resume-preview {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
          }
        }

        .input {
          width: 100%;
          padding: 10px;
          margin: 6px 0;
          border: 1px solid #ccc;
          border-radius: 6px;
        }

        .btn {
          background: purple;
          color: white;
          padding: 10px;
          border-radius: 6px;
        }

        .btn-green {
          background: green;
          color: white;
          padding: 10px;
          border-radius: 6px;
        }
        `}
      </style>
    </div>
  );
};

/* =========================
   MAIN APP
========================= */
const App = () => {
  return (
    <>
      <Toaster />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/app" element={<ResumeDemo />} />
      </Routes>
    </>
  );
};

export default App;