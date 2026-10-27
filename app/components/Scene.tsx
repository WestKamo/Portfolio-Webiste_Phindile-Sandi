"use client";

import { useEffect, useRef, useState } from "react";
import type { Application } from "@splinetool/runtime";

export default function Scene({ scene }: { scene: string }) {
  const host = useRef<HTMLDivElement>(null);
  const [playing, setPlaying] = useState(false);
  const [status, setStatus] = useState("Explore the interactive dimension");
  useEffect(() => {
    const desktop = window.matchMedia(
      "(min-width: 1024px) and (pointer: fine) and (prefers-reduced-motion: no-preference)",
    );
    const connection = (
      navigator as Navigator & { connection?: { saveData?: boolean } }
    ).connection;
    const timer = window.setTimeout(() => {
      if (desktop.matches && !connection?.saveData) setPlaying(true);
    }, 1000);
    const hide = () => {
      if (document.hidden) setPlaying(false);
    };
    document.addEventListener("visibilitychange", hide);
    return () => {
      clearTimeout(timer);
      document.removeEventListener("visibilitychange", hide);
    };
  }, []);
  useEffect(() => {
    if (!playing || !host.current) return;
    let cancelled = false;
    let app: Application | undefined;
    const container = host.current;
    const canvas = document.createElement("canvas");
    canvas.style.cssText =
      "width:100%;height:100%;display:block;touch-action:pan-y";
    container.appendChild(canvas);
    const fail = () => {
      if (!cancelled) {
        setStatus("3D unavailable. Your portfolio is still ready to explore.");
        setPlaying(false);
      }
    };
    canvas.addEventListener("webglcontextlost", fail);
    const timeout = window.setTimeout(fail, 30000);
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) setPlaying(false);
      },
      { threshold: 0 },
    );
    observer.observe(container);
    async function load() {
      try {
        const { Application } = await import("@splinetool/runtime");
        if (cancelled) return;
        app = new Application(canvas, { renderMode: "auto" });
        await app.load(scene);
        if (cancelled) {
          app.dispose();
          return;
        }
        clearTimeout(timeout);
        setStatus("Live Spline experience");
      } catch {
        fail();
      }
    }
    void load();
    return () => {
      cancelled = true;
      clearTimeout(timeout);
      observer.disconnect();
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
        <span role="status">{status}</span>
        <button
          className="button small"
          onClick={() => {
            setStatus(
              playing
                ? "3D paused. Play whenever you’re ready."
                : "Loading 3D experience…",
            );
            setPlaying(!playing);
          }}
        >
          {playing ? "Stop 3D" : "Play 3D ↗"}
        </button>
      </div>
    </section>
  );
}
