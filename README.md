# Nitro + (Drizzle x Turso x SQLite) + React

A modern, lightweight full‑stack starter kit built with **Nitro** for the backend, **React** for the frontend, and **Drizzle ORM** with **Turso (SQLite)** for the database.

This setup is designed for **fast local development**, **edge/serverless deployments**, and **simple relational data modeling** without sacrificing type safety.

---

## ✨ Features

* ⚡ **Nitro** backend (Node, Edge, Serverless ready)
* ⚛️ **React** frontend (framework‑agnostic)
* 🗄️ **SQLite** via **Turso** (local & remote)
* 🧬 **Drizzle ORM** with full TypeScript safety
* 🧱 Clean project structure (API & frontend separated)
* 🚀 Works with **Bun**, **Node**, or **pnpm**

---

## 🧰 Tech Stack

| Layer    | Technology     |
| -------- | -------------- |
| Backend  | Nitro          |
| Frontend | React          |
| Database | SQLite (Turso) |
| ORM      | Drizzle ORM    |
| Language | TypeScript     |
| Runtime  | Bun / Node     |

## 🚀 Getting Started

### 1️⃣ Clone the repository

```bash
git clone https://github.com/emmathedeveloper/your-repo.git
cd your-repo
```

---

### 2️⃣ Install dependencies

Using **Bun** (recommended):

```bash
bun install
```

Or with npm:

```bash
npm install
```

---

### 3️⃣ Environment Variables

Create a `.env` file in the root:

```env
DATABASE_URL="libsql://your-db.turso.io"
DATABASE_AUTH_TOKEN="your_turso_token"
```

For local SQLite development:

```env
DATABASE_URL="file:./dev.db"
```

---

## 🗄️ Database Setup (Drizzle + Turso)

### Generate migrations

```bash
bun run drizzle:generate
```

### Push schema to database

```bash
bun run drizzle:push
```

### Open Drizzle Studio

```bash
bun run drizzle:studio
```

---

## 🧪 Development

### Start backend (Nitro)

```bash
bun run dev:server
```

### Start frontend (React)

```bash
bun run dev:client
```

Or start everything together:

```bash
bun run dev
```

---

## 📡 API Routes

Nitro API routes live in:

```
server/api/
```

Example:

```
server/api/users.get.ts
```

Accessible at:

```
GET /api/users
```

---

## 🧬 Drizzle Example

```ts
import { sqliteTable, text, integer } from 'drizzle-orm/sqlite-core'

export const users = sqliteTable('users', {
  id: integer('id').primaryKey(),
  name: text('name').notNull(),
})
```

---

## 🌍 Deployment

Nitro supports deployment to:

* Node servers
* Serverless platforms
* Edge runtimes

Build the project:

```bash
bun run build
```

Then deploy the output from `.output/`.

---

## 🧠 Why This Stack?

* **Nitro** keeps backend minimal and portable
* **SQLite + Turso** removes DevOps overhead
* **Drizzle** gives SQL‑first control with type safety
* **React** remains flexible and unopinionated

Perfect for MVPs, SaaS products, internal tools, and APIs.

---

## 📜 Scripts

| Script             | Description            |
| ------------------ | ---------------------- |
| `dev`              | Run frontend & backend |
| `dev:server`       | Start Nitro server     |
| `dev:client`       | Start React app        |
| `build`            | Build for production   |
| `drizzle:generate` | Generate migrations    |
| `drizzle:push`     | Push schema            |
| `drizzle:studio`   | Open DB studio         |

---

## 📝 License

MIT

---

## 🙌 Contributing

PRs and issues are welcome. Feel free to fork and build on top of this starter.

---

## ⭐ Support

If you find this useful, consider starring the repo ✨
