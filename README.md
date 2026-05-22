# 🌿 Eco Guardian: Loughborough Biodiversity Adventure

An interactive biodiversity and sustainability learning platform inspired by Loughborough’s local ecological environment.

This project was developed for the **COP926 Web Application Development coursework**. It is designed for children aged **8–13** and helps young users understand biodiversity, sustainable living, environmental trade-offs, and the relationship between the environment, economy, and people’s wellbeing.

---

## Overview

**Eco Guardian** is an educational web application based on a **green city** concept. Users can explore local wildlife, learn sustainability concepts, discover ecological areas around Loughborough, answer quiz questions, make city policy decisions, and share eco-friendly ideas through a community message board.

The project focuses on local ecological areas around Loughborough, including:

- River Soar
- Queen’s Park
- Dishley Pool Nature Area
- Outwoods Woodland Park
- Loughborough University campus green areas

Wildlife locations and map markers are simplified for educational interaction and should not be interpreted as scientific ecological survey data.

---

## Live Demo

**Website:**  
http://dv0881.sci-project.lboro.ac.uk/Coursework/

---

## Features

### Biodiversity Wildlife Gallery

Users can browse local wildlife grouped into categories:

- Mammals
- Birds
- Amphibians and reptiles

Each wildlife card includes a species image, a short educational fact, and a link to an individual animal detail page.

### Animal Detail Pages

Each animal has a dedicated educational page using **React Router dynamic routes**.

Example routes:

```text
/animal/red-fox
/animal/mallard-duck
/animal/great-crested-newt
```

Each detail page displays:

- Animal image
- Habitat information
- Ecological role
- Educational biodiversity fact

### Eco Classroom

The Eco Classroom provides simple sustainability learning content for children. It presents daily eco actions through visual cards, such as:

- Picking up plastic near River Soar
- Planting wildflowers
- Using reusable water bottles

This section connects environmental knowledge with practical daily behaviour.

### Interactive Loughborough Eco Map

The interactive map was built using **React Leaflet**, **Leaflet**, and **OpenStreetMap**.

Users can:

- Select ecological areas
- Explore wildlife categories
- Toggle animal visibility using checkboxes
- Display simplified wildlife distribution markers
- Reset the map view

The map helps children understand how different animals are connected to different habitats.

### Eco City Simulation Game

The mayor simulation game allows users to make city policy decisions and balance three indicators:

- City budget
- Ecology score
- Public happiness

The game teaches children that sustainable development often involves **trade-offs** rather than one perfect solution.

For example, a policy may improve ecology but reduce the city budget, while another may increase income but damage the environment.

### Eco Quiz System

Users answer environmental and biodiversity questions. Correct answers provide immediate feedback and can reward users with additional city funds for the simulation game.

Quiz topics include:

- Wildlife habitats
- River ecosystems
- Biodiversity protection
- Sustainable daily behaviour

### Daily Eco Task Panel

A floating gamified task tracker encourages users to explore different parts of the website.

Tasks include:

- Answering quiz questions
- Viewing animal cards
- Making city policy decisions

The panel supports simple progress tracking and can be collapsed to improve usability.

### Community Message Board

The community message board allows users to share eco ideas and green actions.

Features include:

- Prototype login/register flow
- Message posting
- React form submission
- PHP API integration
- MySQL database storage

---

## Technology Stack

### Frontend

- React
- Vite
- React Router
- JavaScript
- CSS
- Responsive design
- Component-based structure

### Map

- React Leaflet
- Leaflet
- OpenStreetMap

### Backend

- PHP
- MySQL
- phpMyAdmin
- PDO prepared statements
- Fetch API

### Storage

- MySQL for community messages
- localStorage for prototype login behaviour and simple progress tracking

---

## Project Structure

```text
Eco-Guardian-Loughborough-Biodiversity-Adventure/
├── backend/
│   ├── db.php
│   ├── add-message.php
│   ├── get-messages.php
│   ├── save-progress.php
│   └── get-progress.php
│
├── my-react-app/
│   ├── src/
│   │   ├── assets/
│   │   │   ├── Actions/
│   │   │   ├── Mammals/
│   │   │   ├── Birds/
│   │   │   └── AmphibiansReptiles/
│   │   │
│   │   ├── components/
│   │   │   ├── AuthPanel.jsx
│   │   │   ├── BiodiversityGallery.jsx
│   │   │   ├── BudgetGame.jsx
│   │   │   ├── CookieBanner.jsx
│   │   │   ├── DailyEcoActions.jsx
│   │   │   ├── EcoTaskPanel.jsx
│   │   │   ├── Footer.jsx
│   │   │   ├── HomeCarousel.jsx
│   │   │   ├── InteractiveMap.jsx
│   │   │   ├── MessageBoard.jsx
│   │   │   ├── Navbar.jsx
│   │   │   └── QuizGame.jsx
│   │   │
│   │   ├── pages/
│   │   │   ├── AnimalDetailPage.jsx
│   │   │   ├── BiodiversityPage.jsx
│   │   │   ├── EcoClassroomPage.jsx
│   │   │   ├── GamePage.jsx
│   │   │   ├── HomePage.jsx
│   │   │   └── MessagePage.jsx
│   │   │
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   │
│   ├── package.json
│   ├── vite.config.js
│   └── dist/
│
└── README.md
```

---

## Installation and Setup

Clone the repository:

```bash
git clone https://github.com/aqq40867-lang/Eco-Guardian-Loughborough-Biodiversity-Adventure.git
```

Enter the React project folder:

```bash
cd Eco-Guardian-Loughborough-Biodiversity-Adventure/my-react-app
```

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Build the production version:

```bash
npm run build
```

The production files will be generated in the `dist` folder.

---

## Backend Setup

The backend is stored in the `backend` folder and provides a simple PHP API for the community message board.

Example MySQL table:

```sql
CREATE TABLE messages (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100),
  message TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

The React frontend sends message data to the PHP API using the Fetch API. The PHP backend stores and retrieves messages from the MySQL database.

Example API workflow:

```text
React MessageBoard.jsx → Fetch API → PHP API → MySQL messages table
```

---

## Security Considerations

This project is an educational prototype.

Implemented or considered:

- Input validation for forms
- Empty message prevention
- PDO prepared statements for SQL injection prevention
- CORS configuration for frontend-backend communication
- Prototype login/register flow
- Child safety considerations for future moderation

Not fully implemented:

- Production authentication
- Password hashing
- Server-side sessions
- CSRF protection
- Full content moderation system

In a production version, the authentication system should use hashed passwords, secure server-side sessions or tokens, HTTPS, and stronger moderation tools for child safety.

---

## Future Improvements

Potential future upgrades include:

- Real user authentication with password hashing
- Persistent user progress saving
- More accurate ecological datasets
- Animal collection badges
- More quiz levels and mini-games
- Admin dashboard for message moderation
- Improved mobile map controls
- Cloud deployment

---

## External Resources

- React Documentation: https://react.dev/
- React Router Documentation: https://reactrouter.com/
- Leaflet Documentation: https://leafletjs.com/
- OpenStreetMap: https://www.openstreetmap.org/
- MDN Web Docs: https://developer.mozilla.org/
- Leicestershire and Rutland Wildlife Trust: https://www.lrwt.org.uk/
- NatureSpot: https://www.naturespot.org/
- LU Arts Loughborough Arts Map, illustrated by Maya Patel

---

## Author

**Yan Wei**  
MSc Computer Science  
Loughborough University

---

## Disclaimer

This project was created for educational coursework and portfolio purposes.

Wildlife distribution markers and ecological information are simplified for educational interaction and should not be interpreted as scientific ecological survey data.
