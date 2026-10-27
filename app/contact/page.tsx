import Scene from "../components/Scene";
export default function Contact() {
  return (
    <main id="main" className="shell">
      <section className="hero">
        <div>
          <p className="eyebrow">03 / START A CONVERSATION</p>
          <h1>
            Good work starts
            <br />
            <em>with a hello.</em>
          </h1>
          <p className="intro" style={{ marginTop: 28 }}>
            Looking for a junior developer who brings curiosity, care, and
            practical problem-solving to the team? Let’s talk about your next
            project or opportunity.
          </p>
          <a className="contact-link" href="mailto:phindilesandi07@gmail.com">
            <span>EMAIL ↗</span>phindilesandi07@gmail.com
          </a>
          <a className="contact-link" href="tel:+27680740380">
            <span>DIRECT LINE ↗</span>+27 68 074 0380
          </a>
          <a
            className="contact-link"
            href="https://github.com/WestKamo"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>CODE & PROJECTS ↗</span>github.com/WestKamo
          </a>
          <div className="actions">
            <a
              className="button primary"
              href="mailto:phindilesandi07@gmail.com?subject=Let%27s%20work%20together"
            >
              Open your email app ↗
            </a>
          </div>
        </div>
        <Scene scene="https://prod.spline.design/ZQi1715fbVk90eut/scene.splinecode" />
      </section>
    </main>
  );
}
