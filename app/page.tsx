import Image from "next/image";
import Link from "next/link";
import profilePic from "@/public/image_0.png";
import Scene from "./components/Scene";
export default function Home() {
  return (
    <main id="main" className="shell">
      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow">
            <span className="dot" /> Available for junior developer
            opportunities
          </p>
          <h1>
            Thoughtful code.
            <br />
            <em>Real possibility.</em>
          </h1>
          <div className="identity">
            <Image
              src={profilePic}
              alt="Phindile Sandi"
              width={64}
              height={64}
              priority
            />
            <div>
              <strong>Phindile Sandi</strong>
              <span>Junior Software Developer · Gauteng, South Africa</span>
            </div>
          </div>
          <p className="intro">
            I build web applications and data-driven solutions with a focus on
            useful interfaces, dependable backend logic, and thoughtful
            automation.
          </p>
          <div className="actions">
            <Link className="button primary" href="/projects">
              Explore my work <span>↗</span>
            </Link>
            <Link className="button" href="/contact">
              Let’s build together
            </Link>
          </div>
          <p className="micro">SOFTWARE / DATA / AUTOMATION</p>
        </div>
        <Scene scene="https://prod.spline.design/ZQi1715fbVk90eut/scene.splinecode" />
      </section>
      <section className="principles">
        <p className="eyebrow">01 / THE WAY I BUILD</p>
        <h2>
          Curiosity, with
          <br />
          implementation behind it.
        </h2>
        <div className="grid three">
          {[
            [
              "01",
              "Interfaces with intent",
              "Responsive experiences that make complex tasks feel straightforward.",
            ],
            [
              "02",
              "Logic that connects",
              "APIs, relational data, and application workflows built around a clear purpose.",
            ],
            [
              "03",
              "Room to evolve",
              "A practical approach to debugging, iteration, and learning from every release.",
            ],
          ].map(([n, t, d]) => (
            <article className="card" key={n}>
              <span className="index">{n} /</span>
              <h3>{t}</h3>
              <p>{d}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
