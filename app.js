const portfolio_projects = [

    {
      title: "Support Copilot",
      tag: "production",
      desc: "RAG + Evaluation. LLM grounding, citations and guardrails.",
      links: [{ label: "Repo", href: "https://github.com/adriansarno/support-copilot" }
              ,{ label: "Live Demo", href: "https://support-copilot-ui-pmbduk6nhq-uc.a.run.app", primary: true}
             ]
    }
    ,{
      title: "LedgerLens: Invoice intelligence",
      tag: "comming soon",
      desc: "Line-item extraction, validation.",
      links: [
             ]
    }
    // ,{
    //   title: "Forecasting & Optimization",
    //   tag: "time series",
    //   desc: "Forecasting baselines + ML models with time-based validation and error analysis.",
    //   links: [{ label: "Repo", href: "https://github.com/adriansarno" }]
    // }
    // ,{
    //   title: "Cloud ML Infra (GCP + Pulumi)",
    //   tag: "infra",
    //   desc: "Infrastructure-as-code patterns for deploying ML services and pipelines.",
    //   links: [{ label: "Repo", href: "https://github.com/adriansarno" }]
    // }
  ];

const colaboration_projects = [

    {
      title: "Dosewise (Medical AI System)",
      tag: "production",
      desc: "End-to-end ML pipeline + deployment: data ingestion → training → inference → API → UI.",
      links: [
        { label: "Repo", href: "https://github.com/ac215-dosewise/ac215-project" },
      ]
    }
    // ,{
    //   title: "EEG Imagined Speech",
    //   tag: "time series",
    //   desc: "Imagined speech EEG signal classification.",
    //   links: [{ label: "Repo", href: "https://github.com/adriansarno" }]
    // }
  ];


const research_projects = [
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
    }
];
  
  function renderProjects(projects, target_grid) {
    const grid = document.getElementById(target_grid);
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
                `<a class="${l.primary ? "demo-link" : ""}" 
                    href="${l.href}" 
                    target="_blank" 
                    rel="noreferrer">
                    ${l.primary ? "🚀 " : "↗ "} ${l.label}
                 </a>`
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
  
  renderProjects(portfolio_projects, "portfolioProjectsGrid");
  renderProjects(colaboration_projects, "colaborationProjectsGrid");
  renderProjects(research_projects, "researchProjectsGrid");
  setYear();
