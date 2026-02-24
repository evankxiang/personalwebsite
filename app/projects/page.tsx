export default function Projects() {
  const projects = [
    {
      name: "Newly Identified Chromatin-Remodeling Pathway in the Lens Enables a Proof-of-Concept Genetic Therapy for PCO",
      description:
        "Posterior capsule opacification (PCO) is a major complication of cataract surgery, driven by the epithelial-to-mesenchymal transition (EMT). In this study, I investigated the mechanistic effects of a common class of drugs used for diabetes treatment, Dipeptidyl Peptidase-4 Inhibitors (DPP4i), to develop a proof-of-concept gene therapy for PCO by targeting a novel chromatin remodeling pathway. I show that DPP4 inhibitors attenuate the EMT through potentiation of the p38/MAPK protein (p<0.001), resulting in downstream alteration of chromatin topology. Notably, through Hi-C sequencing, I show that SNAI1 is inhibited by separation from its primary enhancer in-cis and SMAD2 is inhibited through compartmental shifting. However, this study also revealed that DPP4 inhibitors have significant ocular off-target effects, making DPP4i treatment non-ideal for long-term treatment. To ameliorate this, I developed a proof-of-concept gene therapy via CRISPR-Cas9 that targets the same novel functional mechanism through insertion of a cHS4 insulator, while avoiding the substantial cytotoxicity of DPP4 inhibitors. Initial lipofectamine transfection in-vitro shows similar inhibition of EMT with cell viability increasing by more than 20% (p<0.01). GUIDE-seq confirmed minimal off-target gRNA activity. Thereafter, a potential delivery solution was developed and proposed by packaging eSpCas9 construct ribonucleoproteins into antibody-conjugated lipid nanoparticles coated in hyaluronic acid to facilitate delivery in future murine studies. My results here uncover a novel signaling pathway in the lens through a common drug, which I then exploit to develop a therapeutic for prevention of a complication of cataract surgery.",
      tags: ["ISEF", "Biomedical Engineering", "Lens Fibrosis"],
      url: "https://isef.net/project/bmed083-a-novel-signaling-pathway-to-target-lens-fibrosis",
    },
    {
      name: "High-Throughput Detection of Risk Factors to Sudden Cardiac Arrest in Youth Athletes: A Smartwatch-Based Screening Platform",
      description:
        "     Sudden Cardiac Arrest (SCA) is the leading cause of death among athletes of all age levels worldwide. Current prescreening methods for cardiac risk factors are largely ineffective, and implementing the International Olympic Committee recommendation for 12-lead ECG screening remains prohibitively expensive. To address these challenges, a preliminary comprehensive screening system (CSS) was developed to efficiently and economically screen large populations for risk factors to SCA. A protocol was established to measure a 4-lead ECG using an Apple Watch. Additionally, two key advances were introduced and validated: 1) A decomposition regression model to upscale 4-lead data to 12 leads, reducing ECG cost and usage complexity. 2) A deep learning model, the Transformer Auto-Encoder System (TAES), was designed to extract spatial and temporal features from the data for beat-based classification. TAES demonstrated an average sensitivity of 95.3% and specificity of 99.1% respectively in the testing dataset, outperforming human physicians in the same dataset (Se: 94%, Sp: 93%). Human subject trials (n = 30) validated the smartwatch protocol, with Bland-Altman analysis showing no statistical difference between the smartwatch vs. ECG protocol. Further validation of the complete CSS on a 20-subject cohort (10 affected, 10 controls) did not result in any misidentifications. This paper presents a mass screening system with the potential to achieve superior accuracy in high-throughput cardiac pre-participation evaluation compared to the clinical gold standard. ",
      tags: ["arXiv", "ECG", "Machine Learning"],
      url: "https://arxiv.org/abs/2412.12118",
    },
  ];

  return (
    <>
      <h1 className="page-title">Projects</h1>
      <div className="projects-grid">
        {projects.map((project, idx) => (
          <div key={idx} className="project-card">
            <div className="project-name">
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                {project.name}
              </a>
            </div>
            <div className="project-desc">{project.description}</div>
            <div className="project-tags">
              {project.tags.map((tag) => (
                <span key={tag} className="project-tag">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
