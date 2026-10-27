"use client";

import { useEffect, useRef, useState } from "react";
import type { Application } from "@splinetool/runtime";

export default function Scene({ scene }: { scene: string }) {
  const host = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [paused, setPaused] = useState(false);
  const [failed, setFailed] = useState(false);
  const [status, setStatus] = useState("Loading 3D experience…");
  const playing = visible && !paused && !failed;

  useEffect(() => {
    if (!host.current) return;
    let inView = false;
    const sync = () => {
      setVisible(inView && !document.hidden);
      setStatus("Loading 3D experience…");
    };
    const observer = new IntersectionObserver(
      ([entry]) => {
        inView = entry.isIntersecting;
        sync();
      },
      { threshold: 0 },
    );
    observer.observe(host.current);
    document.addEventListener("visibilitychange", sync);
    return () => {
      observer.disconnect();
      document.removeEventListener("visibilitychange", sync);
    };
  }, []);

  useEffect(() => {
    if (!playing || !host.current) return;
    let cancelled = false;
    let app: Application | undefined;
    const canvas = document.createElement("canvas");
    canvas.style.cssText =
      "width:100%;height:100%;display:block;touch-action:pan-y";
    host.current.appendChild(canvas);
    const fail = () => {
      if (!cancelled) setFailed(true);
    };
    canvas.addEventListener("webglcontextlost", fail);
    const timeout = window.setTimeout(fail, 30000);
    async function load() {
      try {
        const { Application } = await import("@splinetool/runtime");
        if (cancelled) return;
        app = new Application(canvas, { renderMode: "auto" });
        await app.load(scene);
        if (cancelled) return;
        clearTimeout(timeout);
        setStatus("Live Spline experience");
      } catch {
        fail();
      }
    }
    // Allow the page content to paint before starting the 3D runtime.
    const start = window.setTimeout(() => {
      void load();
    }, 250);
    return () => {
      cancelled = true;
      clearTimeout(start);
      clearTimeout(timeout);
      canvas.removeEventListener("webglcontextlost", fail);
      app?.dispose();
      canvas.remove();
    };
  }, [playing, scene]);

  return (
    <section className="scene" aria-label="Interactive Spline artwork">
      <div className="orb" aria-hidden="true">
        <span />
      </div>
      <div ref={host} className="scene-canvas" />
      <div className="scene-caption">
        <span role="status">
          {failed
            ? "3D unavailable. Your portfolio is still ready to explore."
            : paused
              ? "Animation paused"
              : visible
                ? status
                : "Animation resumes when visible"}
        </span>
        <button
          className="button small"
          onClick={() => {
            setStatus("Loading 3D experience…");
            if (failed) {
              setFailed(false);
              setPaused(false);
            } else setPaused((value) => !value);
          }}
        >
          {failed
            ? "Retry animation"
            : paused
              ? "Resume animation"
              : "Pause animation"}
        </button>
      </div>
    </section>
  );
}
