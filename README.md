# Shenbaga maha devan S — Professional Tech Portfolio Website & PDF Deliverables

This repository contains the **Personal Developer & Data Science Portfolio Website** built with **React 18, Vite, Framer Motion, and Tailwind CSS**, along with the high-resolution 12-page **PDF Portfolio** compiled from verified LinkedIn profile information.

---

## 🚀 Quick Start (Running Locally)

1. **Install Dependencies**:
   ```bash
   npm install
   ```

2. **Start Development Server**:
   ```bash
   npm run dev
   ```
   Open your browser at `http://localhost:3000`.

3. **Build for Production**:
   ```bash
   npm run build
   ```
   The production-ready static bundle will be generated in `dist/`.

---

## 🛠️ How to Update Portfolio Data

All portfolio data is centralized in **`src/data/portfolioData.js`**. You can easily update:

- **Personal Details & Social Links**: `personalInfo` (Name, email, location, GitHub URL, LinkedIn URL).
- **Featured Projects**: `projects` array (Add new projects with problem, solution, features, contribution, live demo link, and GitHub repo URL).
- **Skills Categories**: `skillCategories` array (Add programming languages, AI models, databases, or analytics tools).
- **Certifications**: `certifications` array (Add new credentials, issuer name, and verification links).
- **Hackathons**: `hackathons` array (Update statuses: `Winner`, `Finalist`, `Shortlisted`, `Participant`).

---

## 📄 Updating Your PDF Resume

The portfolio links directly to your generated PDF resume stored in the `public/` folder:

1. Place your updated PDF file in the `public/` directory:
   `public/Shenbaga_maha_devan_S_Professional_Portfolio.pdf`
2. If you rename the file, update the filename in `src/data/portfolioData.js`:
   ```javascript
   resumeUrl: "/Your_New_Resume_Filename.pdf"
   ```

---

## 🌐 Deploying to Vercel or Netlify

### Option 1: Deploy to Vercel (Recommended)
1. Push this project folder to a GitHub repository.
2. Go to [Vercel](https://vercel.com) and click **"Add New Project"**.
3. Import your GitHub repository.
4. Framework Preset will automatically detect **Vite**.
5. Click **"Deploy"**.

### Option 2: Deploy to Netlify
1. Log in to [Netlify](https://www.netlify.com).
2. Drag and drop the `dist/` folder directly into Netlify's upload zone, or connect your GitHub repository.
3. Build Command: `npm run build`
4. Publish Directory: `dist`

---

## 🔗 Connecting a Custom Domain

1. In Vercel or Netlify, navigate to **Project Settings → Domains**.
2. Add your custom domain (e.g. `shenbagamahadevan.dev`).
3. Update your DNS settings at your domain registrar (Namecheap, GoDaddy, Cloudflare, etc.):
   - **CNAME Record**: `cname.vercel-dns.com` or `apex-loadbalancer.netlify.com`
   - **A Record**: `76.76.21.21` (Vercel) or `75.2.60.5` (Netlify)

---

## 📂 Project Directory Structure

```
portf/
├── public/
│   ├── Shenbaga_maha_devan_S_Professional_Portfolio.pdf
│   ├── Shenbaga_maha_devan_S_Professional_Portfolio_Digital.pdf
│   ├── linkedin_qr.png
│   └── github_qr.png
├── src/
│   ├── main.jsx
│   ├── App.jsx
│   ├── index.css
│   ├── data/
│   │   └── portfolioData.js     <-- Centralized Data Source
│   └── components/
│       ├── Navbar.jsx
│       ├── Hero.jsx
│       ├── About.jsx
│       ├── Skills.jsx
│       ├── Projects.jsx
│       ├── Experience.jsx
│       ├── Education.jsx
│       ├── Hackathons.jsx
│       ├── Certifications.jsx
│       ├── GithubSection.jsx
│       ├── ResumeSection.jsx
│       ├── Contact.jsx
│       └── Footer.jsx
├── package.json
├── vite.config.js
└── README.md
```
