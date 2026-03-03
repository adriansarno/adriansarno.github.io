const projects = [
    {
      title: "Dosewise (Medical AI System)",
      tag: "production",
      desc: "End-to-end ML pipeline + deployment: data ingestion → training → inference → API → UI.",
      links: [
        { label: "Repo", href: "https://github.com/adriansarno/ac215-dosewise" },
        { label: "Demo", href: "https://github.com/adriansarno/ac215-dosewise#demo" }
      ]
    },
    {
      title: "Forecasting & Optimization",
      tag: "time series",
      desc: "Forecasting baselines + ML models with time-based validation and error analysis.",
      links: [{ label: "Repo", href: "https://github.com/adriansarno" }]
    },
    {
      title: "LLM Systems (RAG + Evaluation)",
      tag: "llm",
      desc: "Retrieval, grounding, evaluation harnesses, and guardrails for real users.",
      links: [{ label: "Repo", href: "https://github.com/adriansarno" }]
    },
    {
      title: "Kalman Filtering",
      tag: "research",
      desc: "Classical filtering methods with clear derivations and clean implementations.",
      links: [{ label: "Repo", href: "https://github.com/adriansarno/kalman" }]
    },
    {
      title: "Reinforcement Learning Notes / Implementations",
      tag: "research",
      desc: "Key RL algorithms implemented and compared, with reproducible experiments.",
      links: [{ label: "Repo", href: "https://github.com/adriansarno/sutton-barto" }]
    },
    {
      title: "Cloud ML Infra (GCP + Pulumi)",
      tag: "infra",
      desc: "Infrastructure-as-code patterns for deploying ML services and pipelines.",
      links: [{ label: "Repo", href: "https://github.com/adriansarno" }]
    }
  ];
  
  function renderProjects() {
    const grid = document.getElementById("projectsGrid");
    grid.innerHTML = "";
    projects.forEach((p) => {
      const card = document.createElement("div");
      card.className = "project";
      card.innerHTML = `
        <div class="project-top">
          <div class="project-title">${p.title}</div>
          <div class="tag">${p.tag}</div>
        </div>
        <p class="project-desc">${p.desc}</p>
        <div class="project-links">
          ${p.links
            .map(
              (l) =>
                `<a href="${l.href}" target="_blank" rel="noreferrer">↗ ${l.label}</a>`
            )
            .join("")}
        </div>
      `;
      grid.appendChild(card);
    });
  }
  
  function setYear() {
    const y = document.getElementById("year");
    if (y) y.textContent = new Date().getFullYear();
  }
  
  renderProjects();
  setYear();