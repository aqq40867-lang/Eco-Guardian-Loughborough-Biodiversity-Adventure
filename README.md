# 🌿 Eco Guardian: Loughborough Biodiversity Adventure

[![React](https://img.shields.io/badge/Framework-React%2018-61DAFB?style=for-the-badge&logo=react)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Build%20Tool-Vite-646CFF?style=for-the-badge&logo=vite)](https://vitejs.dev/)
[![Leaflet](https://img.shields.io/badge/Map-Leaflet-199900?style=for-the-badge&logo=leaflet)](https://leafletjs.com/)
[![PHP](https://img.shields.io/badge/Backend-PHP-777BB4?style=for-the-badge&logo=php)](https://www.php.net/)
[![MySQL](https://img.shields.io/badge/Database-MySQL-4479A1?style=for-the-badge&logo=mysql)](https://www.mysql.com/)
[![Loughborough](https://img.shields.io/badge/Focus-Loughborough-E8714C?style=for-the-badge)](https://www.lboro.ac.uk/)

> **An interactive biodiversity and sustainability learning platform inspired by Loughborough’s real ecological environment.**  
> This project combines wildlife education, gamification, interactive mapping, sustainability systems, and community engagement into a modern React web application.

---

# 📸 Project Overview

Eco Guardian was designed as an educational and interactive biodiversity platform for students, children, and community users.

The application encourages users to:

- Explore local wildlife
- Learn sustainability concepts
- Discover ecological zones around Loughborough
- Complete environmental quiz challenges
- Make city policy decisions
- Participate in a community eco-board

The project focuses on real ecological locations around Loughborough, including:

- 🌊 River Soar
- 🌳 Queen’s Park
- 🦢 Dishley Pool Nature Area
- 🌲 Outwoods Woodland Park
- 🎓 Loughborough University Green Areas

---

# 🎨 Visual Identity

The interface uses a playful eco-themed visual system inspired by modern educational platforms.

### Design Style
- Rounded UI components
- Soft eco colour palette
- Cartoon-inspired educational presentation
- Large accessibility-friendly typography
- Interactive card-based layout

### Main Colours
| Purpose | Colour |
|---|---|
| Main Background | `#B4D3D8` |
| Secondary Background | `#D6E8B1` |
| Accent Orange | `#E8714C` |
| Accent Yellow | `#F7C243` |
| Dark Border | `#1C4D4F` |

---

# 🚀 Core Features

## 🌿 1. Biodiversity Wildlife Gallery

Users can browse local wildlife categories:

- Mammals
- Birds
- Amphibians & Reptiles

Each wildlife card includes:

- Species image
- Educational fact
- Interactive hover animation
- Clickable detail page

Example animals:

- 🦊 Red Fox
- 🦌 Fallow Deer
- 🦆 Mallard Duck
- 🦎 Common Lizard
- 🐸 Great Crested Newt

---

## 📖 2. Individual Animal Detail Pages

Each species has a dedicated educational page.

Example routes:

```txt
/animal/red-fox
/animal/mallard-duck
/animal/great-crested-newt

Each page contains:

Large species image
Habitat information
Ecological role
Biodiversity importance
Educational descriptions
🗺️ 3. Interactive Loughborough Eco Map

Built using:

React Leaflet
Leaflet
OpenStreetMap

Users can:

✅ Select ecological areas
✅ Expand wildlife categories
✅ Toggle animal visibility with checkboxes
✅ Display wildlife distribution markers
✅ Reset the map view

Included Ecological Areas
Area	Theme
River Soar	River ecosystem
Queen's Park	Urban biodiversity
Dishley Pool	Wetland ecosystem
Outwoods	Woodland ecosystem
Loughborough University	Campus green areas
Example Wildlife
Area	Wildlife
River Soar	Mallards, Swans, Frogs
Queen’s Park	Squirrels, Bees, Butterflies
Dishley Pool	Great Crested Newts
Outwoods	Foxes, Deer, Owls
University Campus	Ducks, Pigeons, Bees

Wildlife positions are simplified educational approximations rather than scientific ecological surveys.

🏛️ 4. Eco City Simulation Game

The Mayor Dashboard allows users to balance:

💰 Economy
🌿 Ecology
😊 Public Happiness

Users select city policies that positively or negatively affect sustainability indicators.

Example Policies
Policy	Effect
Solar Roof Program	+Eco / -Money
Highway Expansion	+Money / -Eco
Commercial Festival	+Money / -Happy
Wildlife Reserve	+Eco / -Money
Multiple Endings
🌿 Eco City
🏙 Economic City
😊 High Happiness Community
🏭 Pollution Crisis
💸 Financial Bankruptcy
🧠 5. Eco Quiz System

Users answer environmental and biodiversity questions.

Correct answers reward:

City funding
Progress toward sustainability goals

Quiz topics include:

Wildlife habitats
River ecosystems
Biodiversity protection
Sustainability behaviour
🌱 6. Daily Eco Actions

Educational eco-tip cards encourage real-world environmental behaviour.

Examples:

Picking up plastic near River Soar
Planting wildflowers
Using reusable water bottles
🎯 7. Daily Task Panel

A floating gamified task tracker encourages exploration.

Tasks include:

Viewing wildlife
Completing quizzes
Making city decisions

The panel supports:

Expand / collapse interaction
Persistent localStorage saving
💬 8. Community Message Board

A simple community board where users can share eco ideas and sustainability tips.

Features
Simulated login/register flow
Post messages
Community interaction
PHP + MySQL backend integration
Backend Technologies
PHP
MySQL
PDO prepared statements
Fetch API
🛠️ Technical Stack
Frontend
React
Vite
React Router
JavaScript
CSS Grid
Flexbox
Responsive Design
Map System
React Leaflet
Leaflet
OpenStreetMap
Backend
PHP
MySQL
phpMyAdmin
Storage
localStorage
📂 Project Structure
src/
├── assets/
│   ├── Mammals/
│   ├── Birds/
│   ├── AmphibiansReptiles/
│   └── Actions/
│
├── components/
│   ├── Navbar.jsx
│   ├── Footer.jsx
│   ├── HomeCarousel.jsx
│   ├── BiodiversityGallery.jsx
│   ├── InteractiveMap.jsx
│   ├── DailyEcoActions.jsx
│   ├── QuizGame.jsx
│   ├── BudgetGame.jsx
│   ├── EcoTaskPanel.jsx
│   ├── MessageBoard.jsx
│   ├── AuthPanel.jsx
│   └── CookieBanner.jsx
│
├── pages/
│   ├── HomePage.jsx
│   ├── BiodiversityPage.jsx
│   ├── EcoClassroomPage.jsx
│   ├── GamePage.jsx
│   ├── MessagePage.jsx
│   └── AnimalDetailPage.jsx
│
├── App.jsx
├── main.jsx
└── index.css
🚥 Quick Start
Clone the repository
git clone https://github.com/aqq40867-lang/Eco-Guardian-Loughborough-Biodiversity-Adventure.git
Enter project folder
cd Eco-Guardian-Loughborough-Biodiversity-Adventure
Install dependencies
npm install
Install map dependencies
npm install leaflet react-leaflet
Run development server
npm run dev
Build production version
npm run build
🗄️ Backend Setup

Example MySQL tables:

CREATE TABLE messages (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100),
  message TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

Example API structure:

api/
├── db.php
├── get-message.php
└── add-message.php
🔒 Security Notes

This project is an educational prototype.

Implemented:

Input validation
Prepared SQL statements
Basic API structure
Simulated authentication flow

Not implemented:

Real authentication
Password hashing
Session management
CSRF protection
🌍 External Resources
https://www.lboro.ac.uk/
https://www.naturespot.org/
https://www.wwf.org.uk/
🚀 Future Improvements

Potential future upgrades:

Real user authentication
Persistent cloud save system
More wildlife datasets
Animal collection badges
Admin dashboard
Improved mobile map controls
Multiplayer eco challenges
👨‍💻 Author

Yan Wei
MSc Computer Science
Loughborough University

📄 Disclaimer

This project was created for educational coursework and portfolio purposes.

Wildlife distribution markers and ecological data are simplified for educational interaction and should not be interpreted as scientific ecological survey data.
