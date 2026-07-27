# 🌿 Eco Guardian: Loughborough Biodiversity Adventure

## Introduction

An interactive biodiversity and sustainability learning platform for children aged 8–13, inspired by Loughborough's local ecological environment. Developed for the **COP926 Web Application Development** coursework.

Users explore local wildlife, learn sustainability concepts, discover ecological areas around Loughborough (River Soar, Queen's Park, Dishley Pool Nature Area, Outwoods Woodland Park, and the university campus), answer quiz questions, make city policy decisions, and share eco-friendly ideas on a community message board.

**Live demo:** http://dv0881.sci-project.lboro.ac.uk/Coursework/

## Tech Stack

- **Frontend:** React, Vite, React Router, React Leaflet
- **Backend:** PHP (PDO prepared statements), MySQL
- **Storage:** MySQL for messages/progress, localStorage for prototype login state

## Features

- **Biodiversity Gallery** — mammals, birds, and amphibians/reptiles, each with an image, fact, and detail page (`/animal/:id` via React Router)
- **Eco Classroom** — visual cards on daily eco actions (e.g. picking up litter, planting wildflowers)
- **Interactive Eco Map** — React Leaflet + OpenStreetMap map of Loughborough with toggleable wildlife layers
- **Eco City Simulation Game** — balance budget, ecology, and public happiness through policy trade-offs
- **Eco Quiz** — environmental questions that reward in-game funds
- **Daily Eco Task Panel** — floating tracker encouraging exploration of the site
- **Community Message Board** — prototype login, message posting via a PHP + MySQL API

## Getting Started

### Option A: Docker (recommended)

```bash
docker compose up --build
```

- Frontend: http://localhost:5173
- Backend API: http://localhost:8080
- MySQL: localhost:3306

### Option B: Manual

```bash
cd my-react-app
npm install
npm run dev       # development server
npm run build     # production build → dist/
```

The `backend/` folder needs a PHP server with access to a MySQL database (see `db/init.sql` for the schema), with `db.php` configured via `DB_HOST`/`DB_NAME`/`DB_USER`/`DB_PASS` environment variables.

---

Created by **Yan Wei**, MSc Computer Science, Loughborough University, for educational coursework and portfolio purposes.
