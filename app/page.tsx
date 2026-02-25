import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="home-layout">
        <div className="home-bio">
          <p>
            Hi! I&apos;m Evan, a prefrosh at the Massachusetts Institute of Technology (MIT) planning on studying Electrical Engineering (6-5) and Biology (7). I&apos;m currently interested in 
            synthetic biology, network-based function prediction, and ecology. I also enjoy dabbling in biotech/health policy, especially regarding biosafety in the age of generative AI, open source biology, and biological design tools (BDT).
          </p>
          <p>
            In HS, I competed in various academic competitions.
            I was a two-time USA Biology Olympiad Camper & Silver Medalist, placing Top 8 in the country, as well as a USA Earth Science Olympiad Camper.  
            I also conducted research at the UPMC Vision Institute, elucidating and studying a chromatin remodeling pathway in the lens involved in the epithelial-mesenchymal transition. 
            Through this, I competed at the Regeneron International Science and Engineering Fair (ISEF), receiving a 3rd Award in Biomedical & Health Sciences. 
          </p>
          <p>
            When I&apos;m not studying biology, you can find me reading works from various authors (Borges, Ishiguro, and Liu are my favorites), attempting to sleep, and adding to my collection of 9,000+ origami cranes. 
          </p>
          <p>
            Feel free to check out my{" "}
            <a href="/scioly">SciOly tests</a>,{" "}
            read my <a href="/blog">blog</a>, or look at
            my <a href="/cv">CV</a>. Email me at ekxiang [at] mit [dot] edu for inquiries.
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
      <div className="social-links">
        <a href="mailto:ekxiang@mit.edu">
          ✉ Email
        </a>
        <a
          href="https://github.com/evankxiang"
          target="_blank"
          rel="noopener noreferrer"
        >
          ⌘ GitHub
        </a>
        <a
          href="https://linkedin.com/in/evankxiang"
          target="_blank"
          rel="noopener noreferrer"
        >
          ◉ LinkedIn
        </a>
      </div>
    </>
  );
}
