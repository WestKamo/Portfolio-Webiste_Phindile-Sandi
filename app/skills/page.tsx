import Scene from "../components/Scene";
export default function Skills() {
  const specializedKnowledge = [
    {
      domain: "Core Programming & Architecture",
      certs: [
        "Oracle Certified Professional, MySQL 8.0 Database Administrator",
        "Oracle Cloud Database Services 2025 Certified Professional",
      ],
      skills: [
        "Python",
        "Java",
        "SQL",
        "Relational Database Schemas",
        "Query Optimization",
      ],
    },
    {
      domain: "Intelligent Automation & Engineering",
      certs: [
        "UiPath Automation Solution Architect Professional",
        "UiPath Certified Professional Automation Business Analyst",
        "UiPath Certified Automation Developer Professional (In Progress)",
        "Cisco Python Essentials",
      ],
      skills: [
        "Robotic Process Automation (RPA)",
        "Linux Cron",
        "n8n",
        "System Orchestration",
      ],
    },
    {
      domain: "AI, Cloud & Data Science",
      certs: [
        "OCI 2025 Certified Data Science Professional",
        "Microsoft Certified: Azure AI Engineer Associate",
        "Oracle Data Platform Certified Foundations Associate",
        "Cisco Intro to Data Science",
      ],
      skills: [
        "Machine Learning Models",
        "Cognitive Services Integration",
        "Cloud Infrastructure (IaaS)",
        "Predictive Analytics",
      ],
    },
    {
      domain: "Data Analysis & Business Intelligence",
      certs: [
        "Microsoft Certified: Fabrics Analytics Engineer Associate",
        "Power BI Data Analyst Associate",
        "Data Analysis Essentials",
      ],
      skills: [
        "Data Visualization (Power BI, Tableau)",
        "ETL Pipeline Engineering",
        "Actionable Business Insights",
      ],
    },
  ];

  return (
    <main id="main" className="shell">
      <header className="page-heading">
        <p className="eyebrow">02 / EXPERTISE</p>
        <h1>
          Engineering meets
          <br />
          <em>curiosity.</em>
        </h1>
        <p>
          Software, data, and automation. A technical foundation shaped by
          hands-on projects and continued professional learning.
        </p>
      </header>
      <div className="page-grid">
        {specializedKnowledge.map((area) => (
          <article className="card" key={area.domain}>
            <p className="eyebrow">CAPABILITIES & CREDENTIALS</p>
            <h2>{area.domain}</h2>
            <ul>
              {area.certs.map((cert) => (
                <li key={cert}>{cert}</li>
              ))}
            </ul>
            <div className="tags">
              {area.skills.map((skill) => (
                <span key={skill}>{skill}</span>
              ))}
            </div>
          </article>
        ))}
      </div>
      <div className="principles">
        <Scene scene="https://prod.spline.design/L4UfQNJRa5tHMzOm/scene.splinecode" />
      </div>
    </main>
  );
}
