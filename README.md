# Mitesh Ladva – Portfolio

Modern, professional portfolio site built with React, Vite, Tailwind CSS, and Framer Motion.

## Setup

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Resume PDF**  
   For the “Download Resume” button to work, place your resume in the `public` folder as `resume.pdf`:
   - Copy `Mitesh Ladva_Resume.pdf` to `public/resume.pdf`, or  
   - Rename/copy your PDF to `public/resume.pdf`.

3. **Run the app**
   ```bash
   npm run dev
   ```
   Open the URL shown in the terminal (e.g. http://localhost:5173).

## Build

```bash
npm run build
npm run preview
```

## Tech stack

- React 18 + JavaScript (ES6+)
- Vite
- Tailwind CSS
- Framer Motion
- Light theme, soft pastels, glassmorphism, responsive layout

## Sections

- **Loading** – 4s progress bar, “Welcome” / “Loading Portfolio…”
- **Hero** – Photo (`public/profile.png`), name, title, typing effect, Download Resume & Contact Me
- **About** – Short intro and highlights
- **Skills** – Data & visualization, analytics, ERP & cloud, process & strategy (animated bars)
- **Projects** – Project cards with tech badges
- **Experience** – Timeline of roles
- **Contact** – Form plus email, phone, LinkedIn
- **Footer** – Copyright and back-to-top button

## Contact form (email)

The contact form can send emails using EmailJS (client-side). To enable:

1. Sign up at https://www.emailjs.com and create a service + template.
2. Create a `.env` file in the project root with these variables:

```
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

3. Install dependencies and run the dev server:

```bash
npm install
npm run dev
```

If the env vars are missing the form will fall back to opening the user's mail client (`mailto:`).
