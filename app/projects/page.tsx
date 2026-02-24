export default function Projects() {
    const projects = [
        {
            name: "Personal Website",
            description:
                "A clean, minimalist personal website built with Next.js and Tailwind CSS, featuring a blog, project showcase, and CV.",
            tags: ["Next.js", "TypeScript", "Tailwind CSS"],
            url: "#",
        },
        {
            name: "Business Card Extractor",
            description:
                "An AI-powered tool that extracts contact information from business card images and saves them to a shared database.",
            tags: ["React", "Supabase", "AI/ML"],
            url: "#",
        },
        {
            name: "Open Source Contributions",
            description:
                "Various contributions to open source projects spanning web development, tooling, and developer experience.",
            tags: ["Open Source", "JavaScript", "Python"],
            url: "#",
        },
    ];

    return (
        <>
            <h1 className="page-title">Projects</h1>
            <div className="projects-grid">
                {projects.map((project, idx) => (
                    <div key={idx} className="project-card">
                        <div className="project-name">
                            <a href={project.url}>{project.name}</a>
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
