# Eco Guardian Web Application

## 1. Project Description

This project is a React-based educational web application developed for COP926 Web Application Development coursework.

The website is designed for children aged 8–13 and aims to improve environmental awareness through interactive learning, mini-games, biodiversity education, and sustainable decision-making activities.

The project focuses on helping children understand the relationship between:

* Environment
* Economy
* Wellbeing

through engaging and child-friendly web interactions.

---

## 2. Project Structure

```text
project-folder/
├── my-react-app/          # React frontend application
├── backend/               # Backend source code (if used)
├── Project Report.pdf     # Coursework report
└── README.md              # Setup instructions
```

---

## 3. Requirements

Please install the following software before running the project:

```text
Node.js LTS
npm
```

Check installation using:

```bash
node -v
npm -v
```

---

## 4. Run the Frontend

Open a terminal or command prompt.

Go to the React project folder:

```bash
cd my-react-app
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

After the server starts, open the local URL shown in the terminal, for example:

```text
http://localhost:5173
```

---

## 5. Alternative Start Command

If `npm run dev` does not work, try:

```bash
npm start
```

---

## 6. Run the Backend

If backend functionality is included, open a second terminal window.

Go to the backend folder:

```bash
cd backend
```

Install dependencies:

```bash
npm install
```

Start the backend server:

```bash
npm start
```

The frontend and backend should be run at the same time if backend features such as the message board are used.

---

## 7. Main Features

The website includes:

* Home page
* Biodiversity gallery
* Animal detail pages
* Interactive environmental quiz
* Budget and policy decision game
* Daily eco tasks
* Message board
* Child-friendly navigation and user interface

---

## 8. Technologies Used

Frontend:

```text
React
JavaScript
React Router
CSS
HTML5
```

Backend (if applicable):

```text
Node.js
Express
```

Other tools:

```text
localStorage
Git
GitHub
```

---

## 9. Notes for Markers

* The main React application is located in the `my-react-app` folder.
* Some data is stored locally using browser `localStorage`.
* The frontend can still be reviewed independently if backend functionality is unavailable.
* The project was designed with a child-friendly UI and educational purpose in mind.

---

## 10. Troubleshooting

If dependencies are missing, run:

```bash
npm install
```

If the port is already in use, close the existing server or restart the terminal.

If the browser does not open automatically, copy the local URL from the terminal and paste it into the browser manually.

---

## 11. Submission Notes

Before submission, remove unnecessary folders such as:

```text
node_modules
.git
dist
build
```

The final `.zip` submission should include:

```text
Project Report.pdf
Source code folders
README.md
```
