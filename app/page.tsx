import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="home-layout">
        <div className="home-bio">
          <p>
            Hi! I&apos;m Evan, a current prefrosh at the Massachusetts Institute of Technology (MIT), planning on studying Electrical Engineering (6-5) and Biology (7). I&apos;m broadly interested in 
            synthetic biology, medicine, and machine learning. I also enjoy dabbling in biotech/health policy and am currently reading about biosafety in the age of generative AI and open source biology.
          </p>
          <p>
            In high school, I competed in various academic competitions. 
            I was a two-time USA Biology Olympiad Camper/Silver Medalist, placing Top 8 in the country. 
            Throughout high school, I also conducted research under Dr. Kun-Che Chang of the UPMC Vision Institute, elucidating and studying a non-SMAD therapeutic pathway against posterior capsule opacification, a common disorder post-cataract surgery. 
            I competed at the Regeneron International Science and Engineering Fair (ISEF), receiving a 3rd Award in Biomedical Sciences. 
          </p>
          <p>
            When I&apos;m not studying biology, you can find me reading works from various authors (Borges and Ishiguro are my favorites), attempting to sleep, and putting together various contraptions using my assortment of microcontrollers. 
          </p>
          <p>
            Feel free to check out my{" "}
            <a href="/projects">projects</a>,{" "}
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
        <a href="mailto:evan@example.com">
          ✉ Email
        </a>
        <a
          href="https://github.com/evanxiang"
          target="_blank"
          rel="noopener noreferrer"
        >
          ⌘ GitHub
        </a>
        <a
          href="https://linkedin.com/in/evanxiang"
          target="_blank"
          rel="noopener noreferrer"
        >
          ◉ LinkedIn
        </a>
      </div>
    </>
  );
}
