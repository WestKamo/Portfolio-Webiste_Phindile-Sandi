# Interactive 3D Developer Portfolio

A modern, highly scalable, and mobile-responsive web platform designed to showcase software engineering projects, data science certifications, and technical competencies. This portfolio seamlessly integrates interactive WebGL 3D environments with a frosted-glass (glassmorphic) user interface.

## 🚀 Features

* **Interactive 3D Environments:** Utilizes Spline WebGL canvases that remain fully interactive behind the UI layer without blocking user navigation.
* **Cinematic Page Transitions:** Implements Framer Motion to mask 3D scene loading times with smooth, app-like fade and blur transitions across routes.
* **Glassmorphic UI Design:** Built with Tailwind CSS using backdrop blurs and layered opacities to create a sleek, frosted-glass aesthetic.
* **Serverless Contact Integration:** Uses Formspree to securely route contact form submissions directly to email without requiring a custom Node.js backend.
* **Responsive Architecture:** Fully optimized for mobile, tablet, and desktop viewing, dynamically adjusting flex layouts and image scaling.

## 🛠️ Technology Stack

* **Core Framework:** [Next.js (App Router)](https://nextjs.org/)
* **Styling:** [Tailwind CSS](https://tailwindcss.com/)
* **3D Rendering:** [Spline](https://spline.design/) (`@splinetool/react-spline`)
* **Motion & Animation:** [Framer Motion](https://www.framer.com/motion/)
* **Backend Integration:** [Formspree API](https://formspree.io/)

## 📂 Project Structure

This project leverages the Next.js App Router for file-based routing and Server Components.

```text
/app
 ├── layout.tsx         # Global HTML shell and metadata
 ├── template.tsx       # Framer Motion wrapper for page transitions
 ├── page.tsx           # '/' Route: Main Hub & Profile Summary
 │
 ├── /projects
 │    └── page.tsx      # '/projects' Route: Featured deployments
 │
 ├── /skills
 │    └── page.tsx      # '/skills' Route: Certifications & Competencies
 │
 └── /contact
      └── page.tsx      # '/contact' Route: Formspree Integration
/public
 └── image_0.png        # Optimized Profile Avatar
