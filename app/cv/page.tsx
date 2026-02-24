export default function CV() {
  return (
    <>
      <h1 className="page-title">Curriculum Vitae</h1>
      <section className="cv-viewer">
        <iframe
          src="/websiteresume.pdf#zoom=page-width&view=Fit"
          title="Curriculum Vitae PDF"
          className="cv-pdf-frame"
        />
        <p className="cv-download">
          If the PDF does not load, open it directly{" "}
          <a href="/websiteresume.pdf" target="_blank" rel="noopener noreferrer">
            here
          </a>
          .
        </p>
      </section>
    </>
  );
}
