import Link from "next/link";
import Scene from "../components/Scene";
export default function Projects() {
  return (
    <main id="main" className="shell">
      <header className="page-heading">
        <p className="eyebrow">01 / SELECTED WORK</p>
        <h1>
          Ideas into
          <br />
          <em>working software.</em>
        </h1>
        <p>
          Exploring the space between useful products, considered interfaces,
          and the systems that make them work.
        </p>
      </header>
      <div className="page-grid">
        <article className="card">
          <span className="index">01 / WEB APPLICATION</span>
          <h2>whygodwhy.co.za</h2>
          <p>
            A full-stack web platform bringing interface design, database
            structure, and backend integrations together in one application.
          </p>
          <div className="tags">
            <span>Full stack</span>
            <span>UI / UX</span>
            <span>Data</span>
          </div>
          <div className="actions">
            <a
              className="button primary"
              href="https://whygodwhy.co.za"
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit website ↗
            </a>
          </div>
        </article>
        <article className="card">
          <span className="index">02 / 3D PRINTING & COMMERCE</span>
          <h2>Voxel Ventures</h2>
          <p>
            A web ordering concept for on-demand 3D printed parts, connecting
            custom prototypes with a simpler digital ordering experience.
          </p>
          <div className="tags">
            <span>E-commerce</span>
            <span>Ordering workflows</span>
            <span>Prototyping</span>
          </div>
          <div className="actions">
            <Link className="button" href="/contact">
              Discuss the project ↗
            </Link>
          </div>
        </article>
      </div>
      <div className="principles">
        <Scene scene="https://prod.spline.design/CEQyHffx8Jx75L-T/scene.splinecode" />
      </div>
    </main>
  );
}
