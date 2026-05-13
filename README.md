# 🌿 Eco Guardian: Loughborough Biodiversity Adventure

An interactive biodiversity and sustainability learning platform inspired by Loughborough’s local ecological environment.

This project was developed for the COP926 Web Application Development coursework. It is designed for children aged 8–13 and helps users understand biodiversity, sustainable living, environmental trade-offs, and the relationship between environment, economy, and wellbeing.

---

## 📌 Project Overview

Eco Guardian is an educational web application based on a “green city” concept. Users can explore local wildlife, learn sustainability concepts, discover ecological areas around Loughborough, answer quiz questions, make city policy decisions, and share eco-friendly ideas through a community message board.

The project focuses on local ecological areas around Loughborough, including:

- 🌊 River Soar
- 🌳 Queen’s Park
- 🦆 Dishley Pool Nature Area
- 🌲 Outwoods Woodland Park
- 🏫 Loughborough University campus green areas

Wildlife locations and map markers are simplified for educational interaction and should not be interpreted as scientific ecological survey data.

---

## ✨ Core Features

### 🐾 1. Biodiversity Wildlife Gallery

Users can browse local wildlife categories:

- 🦊 Mammals
- 🐦 Birds
- 🦎 Amphibians and reptiles

Each wildlife card includes a species image, short educational fact, and a link to an individual animal detail page.

---

### 🔍 2. Animal Detail Pages

Each species has a dedicated educational page using React Router dynamic routes.

Each detail page displays:

- 🖼️ Large species image
- 🌿 Habitat information
- 🔗 Ecological role
- 📘 Educational biodiversity fact

---

### 📚 3. Eco Classroom

The Eco Classroom provides simple sustainability learning content for children. It presents daily eco actions through visual cards, such as:

- ♻️ Picking up plastic near River Soar
- 🌼 Planting wildflowers
- 💧 Using reusable water bottles

This section connects environmental knowledge with practical daily behaviour.

---

### 🗺️ 4. Interactive Loughborough Eco Map

The interactive map was built using React Leaflet, Leaflet, and OpenStreetMap.

Users can:

- 📍 Select ecological areas
- 🧭 Explore wildlife categories
- ✅ Toggle animal visibility using checkboxes
- 🐸 Display simplified wildlife distribution markers
- 🔄 Reset the map view

---

### 🏙️ 5. Eco City Simulation Game

The mayor simulation game allows users to make city policy decisions and balance three indicators:

- 💰 City budget
- 🌱 Ecology score
- 😊 Public happiness

The game teaches children that sustainable development often involves trade-offs rather than one perfect solution.

---

### ❓ 6. Eco Quiz System

Users answer environmental and biodiversity questions. Correct answers provide immediate feedback and reward users with additional city funds for the simulation game.

Quiz topics include:

- 🐾 Wildlife habitats
- 🌊 River ecosystems
- 🌿 Biodiversity protection
- 🚲 Sustainable daily behaviour

---

### ✅ 7. Daily Eco Task Panel

A floating gamified task tracker encourages users to explore different parts of the website.

Tasks include:

- ❓ Answering quiz questions
- 🐦 Viewing animal cards
- 🏙️ Making city policy decisions

---

### 💬 8. Community Message Board

The community message board allows users to share eco ideas and green actions.

Features include:

- 🔐 Prototype login/register flow
- ✍️ Message posting
- ⚛️ React form submission
- 🐘 PHP API integration
- 🗄️ MySQL database storage

---

## 🛠️ Technical Stack

### Frontend

- ⚛️ React
- ⚡ Vite
- 🧭 React Router
- 🟨 JavaScript
- 🎨 CSS
- 📱 Responsive design

### Map

- 🗺️ React Leaflet
- 🍃 Leaflet
- 🌍 OpenStreetMap

### Backend

- 🐘 PHP
- 🗄️ MySQL
- 🧰 phpMyAdmin
- 🔒 PDO prepared statements
- 🔁 Fetch API

---

## 📁 Project Structure

```text
Eco-Guardian-Loughborough-Biodiversity-Adventure/
├── backend/
│   ├── db.php
│   ├── add-message.php
│   └── get-messages.php
│
├── my-react-app/
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   │
│   ├── package.json
│   └── vite.config.js
│
└── README.md
