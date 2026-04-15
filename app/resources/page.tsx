export default function About() {
  return (
    <>
      <h1 className="page-title">About Me</h1>

      <div className="about-intro">
        <p>
          Hi! I&apos;m Evan, a prefrosh at MIT studying Electrical Engineering and Biology.
          I&apos;m interested in synthetic biology and biotech policy, especially regarding
          biosafety in the age of generative AI, open source biology, and biological design tools (BDT).
        </p>
      </div>

      <section className="about-section">
        <h2>Interests &amp; Research</h2>
        <p>Specific topics I&apos;m interested in and learning about:</p>
        <ul className="about-bullets">
          <li>Synthetic biology &amp; biological design tools</li>
          <li>Biotech policy — biosafety in the age of generative AI</li>
          <li>Open source biology</li>
          <li>Chromatin remodeling &amp; epithelial to mesenchymal transitions</li>
          <li>Science education and competition design</li>
        </ul>
      </section>

      <section className="about-section">
        <h2>Accomplishments</h2>
        <ul className="about-bullets">
          <li>USA Biology Olympiad Finalist — Top 8 in the country</li>
          <li>USA Earth Science Olympiad Camper</li>
          <li>
            Researched at the UPMC Vision Institute, studying a chromatin remodeling
            pathway involved in the epithelial to mesenchymal transition post-cataract surgery
          </li>
          <li>Regeneron ISEF — 3rd Award in Biomedical &amp; Health Sciences</li>
        </ul>
      </section>

      <section className="about-section">
        <h2>On a Higher Level</h2>
        <p>Things I enjoy doing and care about:</p>
        <ul className="about-bullets">
          <li>Reading — especially Borges, Ishiguro, and Liu (mostly fiction and non-fiction)</li>
          <li>Making origami — 9,000+ cranes and counting</li>
          <li>Playing sports and video games</li>
          <li>Attempting to sleep</li>
        </ul>
      </section>

      <section className="about-section">
        <h2>Right Now</h2>
        <p>
          I&apos;m preparing to head to MIT and trying to learn as much as I can about the intersection
          of biology and engineering. I&apos;m particularly excited about how computational tools can
          accelerate biological design and discovery.
        </p>
      </section>

      <section className="about-section">
        <h2>Other Links</h2>
        <p>
          Feel free to check out my{" "}
          <a href="/scioly">SciOly tests</a>,{" "}
          read my <a href="/blog">blog</a>, or look at
          my <a href="/cv">CV</a>.
        </p>
        <p>
          Email me at ekxiang [at] mit [dot] edu for any inquiries.
        </p>
      </section>
    </>
  );
}
