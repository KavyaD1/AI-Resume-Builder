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
      "Software Developer skilled in JavaScript, React, Node.js and full stack development.",

    "Data Scientist":
      "Data Scientist skilled in Python, Machine Learning and Data Analysis.",

    "Data Analyst":
      "Data Analyst skilled in Excel, SQL, Power BI and dashboards.",

    "DevOps Engineer":
      "DevOps Engineer skilled in CI/CD, Docker, Kubernetes and AWS.",

    "AI/ML Engineer":
      "AI/ML Engineer skilled in deep learning, Python and TensorFlow.",

    "Cloud Engineer":
      "Cloud Engineer skilled in AWS, Azure and cloud deployment.",

    "Cyber Security Analyst":
      "Cyber Security Analyst skilled in network security and threat detection.",

    "UI/UX Designer":
      "UI/UX Designer skilled in Figma, wireframing and prototyping.",

    "Full Stack Developer":
      "Full Stack Developer skilled in MERN stack development.",

    "Mobile App Developer":
      "Mobile App Developer skilled in React Native and Android development.",

    "Civil Engineer":
      "Civil Engineer skilled in AutoCAD, site supervision and construction planning."
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