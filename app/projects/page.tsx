export default function Projects() {
  const projects = [
    {
      name: "Newly Identified Chromatin-Remodeling Pathway in the Lens Enables a Proof-of-Concept Genetic Therapy for PCO",
      subtitle: "ISEF 2025 · 3rd Grand Award, Biomedical & Health Sciences",
      description:
        "Using DPP4 inhibitors as a probe, we elucidate a novel chromatin remodeling pathway in the lens driving EMT during posterior capsule opacification, then exploited it to design a CRISPR-Cas9 gene therapy that replicates the topological effect without the drug's cytotoxicity.",
      image: "/HiC.png",
      links: [{ label: "isef page", url: "https://isef.net/project/bmed083-a-novel-signaling-pathway-to-target-lens-fibrosis" }],
    },
    {
      name: "High-Throughput Detection of Risk Factors to Sudden Cardiac Arrest in Youth Athletes",
      subtitle: "arXiv 2024",
      description:
        "A screening pipeline that uses an Apple Watch as a 12-lead ECG; We developed a regression model to upscale 4-lead data to 12 leads, and a transformer auto-encoder to classify beats at 95.3% sensitivity and 99.1% specificity, outperforming physicians and SOTA algos on the same dataset.",
      image: "/ModelArchitecture.png",
      links: [{ label: "arxiv", url: "https://arxiv.org/abs/2412.12118" }],
    },
  ];

  return (
    <>
      <h1 className="page-title">Projects</h1>
      <div className="projects-grid">
        {projects.map((project, idx) => (
          <div key={idx} className="project-card">
            <div className="project-card-image">
              {project.image && (
                <img src={project.image} alt={project.name} />
              )}
            </div>
            <div className="project-card-content">
              <div className="project-name">{project.name}</div>
              <div className="project-subtitle">{project.subtitle}</div>
              <p className="project-desc">{project.description}</p>
              <div className="project-links">
                {project.links.map((link, i) => (
                  <span key={link.url}>
                    {i > 0 && <span className="project-link-sep"> / </span>}
                    <a href={link.url} target="_blank" rel="noopener noreferrer">
                      {link.label}
                    </a>
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
