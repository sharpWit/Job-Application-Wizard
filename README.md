## 🚀 Demo

Live Demo (Vercel):
👉 [Later will be added!](#)

Source Code (develop branch):
👉 [Job Application Wizard](https://github.com/sharpWit/Job-Application-Wizard.git)

---

# 💼 ApplyFlow — Job Application Wizard (Next.js + Redux Toolkit + Dexie)

A multi-step **Job Application Wizard** built with **Next.js 15**, **TypeScript**, **Redux Toolkit**, and **Dexie (IndexedDB)**.
It showcases clean architecture, atomic design, offline-first persistence, and professional UI/UX for complex form workflows.

---

## ✨ Features

- 🧭 **Multi-step wizard** for job applications
- ⚙️ **Offline-first** data saving using IndexedDB (Dexie)
- 🧠 **Redux Toolkit** for predictable global state
- 🧩 **Feature-driven + Atomic Design Architecture**
- 🧾 **Form validation with Zod**
- 💾 **Save draft and restore progress**
- 🎨 **SCSS module architecture** with theme support
- ♿ **Accessible**, keyboard-friendly navigation
- 📱 **Responsive layout** for all screen sizes
- 🧰 **Type-safe storage, components, and API routes**

---

## 🏗️ Tech Stack

| Category             | Tools                           |
| -------------------- | ------------------------------- |
| **Framework**        | Next.js 15 (App Router)         |
| **Language**         | TypeScript                      |
| **State Management** | Redux Toolkit                   |
| **Client Storage**   | Dexie.js (IndexedDB)            |
| **Validation**       | Zod                             |
| **Styling**          | SCSS Modules (Atomic Structure) |
| **Testing**          | Jest + React Testing Library    |
| **Deployment**       | Vercel                          |

---

## 🧱 Project Structure

> 🧩 _Feature-Driven + Atomic Design_
> This architecture encourages scalability, modularity, and reusability.

```
src/
 ├─ app/
 │   ├─ layout.tsx
 │   ├─ page.tsx
 │   └─ api/
 │       └─ apply/route.ts          # Mock submission endpoint
 │
 ├─ shared/
 │   ├─ components/
 │   │   ├─ atoms/                  # Smallest UI parts: Input, Button, Select
 │   │   ├─ molecules/              # Combined UI units: FormField, StepHeader
 │   │   ├─ organisms/              # Larger UI blocks: FormStep, ReviewPanel
 │   │   └─ templates/              # Page-level layouts: WizardLayout
 │   ├─ styles/
 │   │   ├─ abstracts/              # Mixins, variables
 │   │   ├─ base/                   # Resets, typography
 │   │   └─ themes/                 # Dark / light theme definitions
 │   ├─ hooks/                      # Shared custom hooks
 │   ├─ utils/                      # Formatters, validators, helpers
 │   └─ types/                      # Global TypeScript types
 │
 ├─ features/
 │   └─ application/
 │       ├─ components/             # Step-based form UI
 │       │   ├─ ApplicationWizard.tsx
 │       │   ├─ StepPersonal.tsx
 │       │   ├─ StepExperience.tsx
 │       │   ├─ StepSkills.tsx
 │       │   ├─ StepPortfolio.tsx
 │       │   ├─ StepQuestions.tsx
 │       │   └─ StepReview.tsx
 │       ├─ store/
 │       │   ├─ application.slice.ts
 │       │   └─ application.selectors.ts
 │       ├─ db/
 │       │   └─ applicationDexie.ts
 │       ├─ api/
 │       │   └─ application.api.ts
 │       ├─ types/
 │       │   └─ application.ts
 │       ├─ hooks/
 │       └─ index.ts
 │
 ├─ lib/
 │   ├─ store.ts                    # Redux store setup
 │   └─ dexieClient.ts              # Dexie configuration
 │
 └─ tests/
     ├─ unit/
     ├─ integration/
     └─ e2e/
```

---

## 🧭 Wizard Flow

| Step                        | Purpose                         | Key Fields                                         |
| --------------------------- | ------------------------------- | -------------------------------------------------- |
| **1️⃣ Personal Info**        | Collect applicant data          | Full name, email, phone, LinkedIn, country         |
| **2️⃣ Experience**           | Job history and background      | Company, role, years, stack                        |
| **3️⃣ Skills & Preferences** | Candidate’s skills and goals    | Skills tags, desired role, work mode, salary range |
| **4️⃣ Portfolio Upload**     | Resume and project links        | File upload (PDF/DOC), GitHub/website links        |
| **5️⃣ Questions**            | Open-ended behavioral questions | “Why should we hire you?”, “Future goals”          |
| **6️⃣ Review & Submit**      | Summary & confirmation          | Editable preview, final submission                 |

---

## 🧩 Getting Started

1. **Install dependencies**

   ```bash
   pnpm install
   ```

2. **Run the app**

   ```bash
   pnpm dev
   ```

3. **Open in browser**

   ```
   http://localhost:3000
   ```

---

## 🧠 Architecture Decisions (ADR Summary)

| Decision             | Choice                           | Reason                                      |
| -------------------- | -------------------------------- | ------------------------------------------- |
| **Architecture**     | Feature-driven + Atomic          | Scalability and modular UI                  |
| **State Management** | Redux Toolkit                    | Predictable and testable data flow          |
| **Offline Support**  | Dexie.js                         | IndexedDB wrapper for complex local storage |
| **Validation**       | Zod                              | Type-safe runtime validation                |
| **Styling**          | SCSS Modules                     | Scalable theming and modular styles         |
| **UI Patterns**      | Compound + Controlled Components | Reusable form and input logic               |
| **Data Layer**       | Mock Next.js API route           | Demo-ready and testable without backend     |

---

## 🧮 Project Phases

| Phase                    | Goal                                      | Deliverables                                 |
| ------------------------ | ----------------------------------------- | -------------------------------------------- |
| **1️⃣ Setup & Config**    | Initialize project and dependencies       | Next.js setup, ESLint, Prettier, Redux store |
| **2️⃣ UI Foundation**     | Build atomic components                   | Button, Input, Select, Stepper, ProgressBar  |
| **3️⃣ Wizard Layout**     | Create base structure and step navigation | ApplicationWizard with context + routing     |
| **4️⃣ Form Steps**        | Implement each step                       | 6 step components + validations              |
| **5️⃣ Persistence Layer** | Dexie.js integration                      | Save drafts and restore data                 |
| **6️⃣ Mock API**          | Handle submission                         | `POST /api/apply` mock endpoint              |
| **7️⃣ UX Polish**         | A11y, responsive, animations              | focus handling, transitions, dark mode       |
| **8️⃣ Testing & QA**      | Ensure stability                          | Unit + integration tests                     |
| **9️⃣ Docs & Deployment** | Documentation + hosting                   | README, architecture docs, deploy on Vercel  |

---

## 🧪 Testing

Run tests locally:

```bash
pnpm test
```

Includes:

- ✅ Unit tests (atoms, reducers)
- 🧩 Integration tests (wizard steps)
- 🚀 E2E setup-ready (Playwright or Cypress optional)

---

## 🚀 Deployment

Deploy easily with **Vercel**:

```bash
pnpm build
pnpm start
```

Then connect your repository to [vercel.com](https://vercel.com).

---

## 📖 License

MIT © 2025 — Developed by Saeed Khosravi
