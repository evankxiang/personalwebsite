import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="home-layout">
        <div className="home-bio">
          <p>
            Hi! I&apos;m Evan, a prefrosh at MIT planning on studying Electrical Engineering and Biology. I&apos;m currently interested in
            synthetic biology and biotech policy, especially regarding biosafety in the age of generative AI, open source biology, and biological design tools (BDT).
          </p>
          <p>
            In HS,
            I was a USA Biology Olympiad Finalist, placing Top 8 in the country, as well as a USA Earth Science Olympiad Camper.
            I also researched at the UPMC Vision Institute, studying a chromatin remodeling pathway involved in the epithelial to mesenchymal transition post-cataract surgery.
            Via this, I competed at Regeneron ISEF, receiving a 3rd Award in Biomedical & Health Sciences.
          </p>
          <p>
            I love reading works from various authors (Borges, Ishiguro, and Liu are my favorites), attempting to sleep, and adding to my collection of 9,000+ origami cranes.
          </p>
          <p>
            Feel free to check out my{" "}
            <a href="/scioly">SciOly tests</a>,{" "}
            read my <a href="/blog">blog</a>, or look at
            my <a href="/cv">CV</a>. Email me at ekxiang [at] mit [dot] edu for any inquiries.
          </p>
        </div>
        <Image
          src="/IMG_4689.jpeg"
          alt="Evan Xiang"
          width={220}
          height={220}
          className="profile-image"
          priority
        />
      </div>
      <div className="contact-section">
        <h2 className="contact-heading">Contact</h2>
        <div className="contact-links">
          <a href="mailto:ekxiang@mit.edu">
            Email
          </a>
          <a
            href="https://github.com/evankxiang"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/evankxiang"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a
            href="https://discord.com/users/banarnarsaurus"
            target="_blank"
            rel="noopener noreferrer"
          >
            Discord
          </a>
          <a
            href="https://instagram.com/evan.xiang"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>
        </div>
      </div>
    </>
  );
}
