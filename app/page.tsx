import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="home-layout">
        <div className="home-bio">
          <p>
            Hi! I&apos;m Evan, a prefrosh at the Massachusetts Institute of Technology (MIT) planning on studying Electrical Engineering (6-5) and Biology (7). I&apos;m broadly interested in 
            synthetic biology, medicine, and machine learning. I also enjoy dabbling in biotech/health policy and am currently studying biosafety in the age of generative AI and open source biology.
          </p>
          <p>
            In HS, I competed in various academic competitions.
            I was a two-time USA Biology Olympiad Camper/Silver Medalist, placing Top 8 in the country, as well as a USA Earth Science Olympiad Camper.  
            Throughout HS, I also conducted research at the UPMC Vision Institute, elucidating and studying a non-SMAD therapeutic pathway against PCO. 
            Through this, I competed at the Regeneron International Science and Engineering Fair (ISEF), receiving a 3rd Award in Biomedical/Health Sciences. 
          </p>
          <p>
            When I&apos;m not studying biology, you can find me reading works from various authors (Borges, Ishiguro, and Cixin are my favorites), attempting to sleep, and adding to my collection of 9,000+ origami cranes. 
          </p>
          <p>
            Feel free to check out my{" "}
            <a href="/scioly">SciOly tests</a>,{" "}
            read my <a href="/blog">blog</a>, or take a look at
            my <a href="/cv">CV</a>.
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
