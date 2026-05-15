import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="home-layout">
        <div className="home-bio">
          <p>
            Hi! I&apos;m an incoming freshman at MIT planning on studying AI and Biology. I&apos;m currently interested in synthetic biology and biological frontier models (e.g. Evo2). I also enjoy dabbling in biotech policy, primarily in the realm of biosecurity.
          </p>
          <p>
            In HS, I was a two-time USA Biology Olympiad and USA Earth Science Olympiad camper, placing top 8 in the country. I also competed at ISEF, winning a grand award for my research at Pitt regarding chromatin remodeling in the eye.
          </p>
          <p>
            When I&apos;m not studying, you can find me reading works from various authors (Borges, Ishiguro, Liu etc.), sidequesting, producing exothermic reactions, or adding to my collection of 9,000+ origami cranes.
          </p>
          <p>
            Feel free to check out my{" "}
            <a href="/scioly">SciOly tests</a>,{" "}
            read my <a href="/blog">blog</a>, or see my{" "}
            <a href="/websiteresume.pdf" target="_blank" rel="noopener noreferrer">resume</a>! Email me at ekx [at] mit [dot] edu for inquiries.
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
        <a href="mailto:ekxiang@mit.edu">Email</a>
        <span className="social-sep">/</span>
        <a href="https://linkedin.com/in/evankxiang" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <span className="social-sep">/</span>
        <a href="https://github.com/evankxiang" target="_blank" rel="noopener noreferrer">GitHub</a>
        <span className="social-sep">/</span>
        <a href="https://orcid.org/0009-0002-1224-9076" target="_blank" rel="noopener noreferrer">ORCiD</a>
      </div>
    </>
  );
}
