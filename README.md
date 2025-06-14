# JS-Practice
This repository contains my JavaScript learning journey, where I explore various concepts and build small projects to reinforce my skills. Below are the tasks and projects completed, organized by date.

## Progress Log

## Week 1

- **Day 1 (May 30)**:
  - Read: freeCodeCamp “JavaScript Basics” (up to all 118 challenges) + ES6 scoping + async/await theory (1 hour).
  - Coding: Practiced ES6 features and wrote custom Promise/async/await functions (performTask with chaining, await, parallel execution, and error handling) (1 hour).
  - Certification: Completed all 118 “Basic JavaScript” challenges (1.5 hours).
  - **Files**: `es6_practice.js`

- **Day 2 (May 31)**:
  - Read: MDN “JavaScript Modules” (1 hour).
  - Coding: Built a module-based calculator with separate operations and main calculator logic (1 hour).
  - Certification: Completed 10 ES6 challenges (e.g., “Use Arrow Functions to Write Concise Anonymous Functions”, “Use the Rest Parameter with Function Parameters”) (1 hour).
  - **Files**: `module-calculator/operations.js`, `module-calculator/calculator.js`

- **Day 3 (June 1)**:
  - Read: React Docs “Getting Started” (30 min) + Hooks (1 hour).
  - Coding: Completed counter app with `useState` and `useEffect` to learn React basics (1.5 hours).
  - Certification: Completed 5 ES6 challenges (e.g., “Use Destructuring Assignment to Extract Values from Objects”) (1 hour).
  - **Files**: `counter-app/App.js`

- **Day 4 (June 2)**:
  - Coding: Started TaskManager project with basic task list and add functionality using React `useState`.
  - Styled the initial UI with basic CSS.
  - Certification: Completed 5 Functional Programming challenges (e.g., “Use the map Method to Extract Data from an Array”) (1 hour).
  - **Repo**: TaskManager project is in a separate repo: [TaskManager](https://github.com/Srijith1912/TaskManager)

- **Day 5 (June 3)**:
  - Coding: Added theme toggle to TaskManager using `useContext` for light/dark themes.
  - Set up `ThemeProvider` in TaskManager for global theme state.
  - Certification: Completed 5 Functional Programming challenges (e.g., “Use Higher-Order Functions map, filter, or reduce to Solve a Complex Problem”) (1 hour).
  - **Repo**: TaskManager project is in a separate repo: [TaskManager](https://github.com/Srijith1912/TaskManager)

- **Day 6 (June 4)**:
  - Coding: Styled TaskManager with Tailwind CSS for a responsive design.
  - Fixed Tailwind setup issues in TaskManager (e.g., corrected `index.css` directives, `tailwind.config.js` content path).
  - Centralized theme styles in TaskManager using `themeStyles`.
  - Certification: Completed 5 Intermediate Algorithm Scripting challenges (e.g., “Sum All Numbers in a Range”) (1 hour).
  - **Repo**: TaskManager project is in a separate repo: [TaskManager](https://github.com/Srijith1912/TaskManager)

- **Catch-Up Day (June 5)**:
  - Coding: Enhanced TaskManager with task deletion and UI improvements (hover effects, centered layout, borders).
  - Debugged Tailwind issues in TaskManager and addressed npm vulnerabilities.
  - Updated TaskManager GitHub repo with README.
  - Certification: Completed 5 Intermediate Algorithm Scripting challenges (e.g., “Diff Two Arrays”) (30 minutes).
  - **Repo**: TaskManager project is in a separate repo: [TaskManager](https://github.com/Srijith1912/TaskManager)

## Week 2

- **Day 1 (June 6)**:
  - Read: Node.js Docs “Introduction” + Event Loop (1 hour).
  - Coding: Set up Express server (1 hour).
  - GitHub: Updated `JS-Practice` repo with Express server.

- **Day 2 (June 7)**:
  - Read: Express Docs “Routing” (1 hour).
  - Coding: Build RESTful routes for tasks API (1 hour).
  - GitHub: Updating `JS-Practice` repo with routing progress.
 
- **Day 3 (June 8)**:
  - Read: MongoDB Docs “Getting Started” (1 hour).
  - Coding: Implement CRUD with MongoDB Atlas (1.5 hours).
  - GitHub: Updating `JS-Practice` repo with MongoDB integration.

- **Day 4 (June 9)**:
  - **Read**: freeCodeCamp “Full-Stack Tutorial” (React-Express integration) (1 hour).
  - **Coding**: Implemented Axios in Task Manager’s React front-end for GET/POST requests to fetch and add tasks (1 hour).
  - **Debugging**: Investigated Task Manager backend issues, checked CORS setup, and tested API endpoints with Postman.
  - **GitHub**: Updated `TaskManager` repo with Axios integration and server logs.
 
- **Day 5 (June 10)**:
  - **Coding**: Built Weather API Web App using React and Axios, fetching current weather data from OpenWeatherMap API with error handling for invalid cities (2.5 hours).
  - **Certification**: Completed freeCodeCamp JavaScript Certification (1.5 hours).
  - **Progress**: Started June 11 tasks by reviewing Node.js performance concepts (event loop, async operations) for Task Manager optimization (30 minutes).
  - **GitHub**: Created `WeatherApp` repo with README and pushed initial code: [WeatherApp](https://github.com/Srijith1912/WeatherApp)
 
- **Day 6 (June 11)**:
  - **Read**: Reviewed Node.js performance (event loop, async operations) (30 minutes).
  - **Coding**: Added rate limiting to Task Manager API using `express-rate-limit` (100 requests per 15 minutes) (1 hour).
  - **GitHub**: Updated `express-server/server.js` repo with rate limiting code.

## Week 3

- **Day 1 (June 13)**:
  - **Read**: freeCodeCamp “JWT Authentication” (1 hour).
  - **Coding**: Added JWT authentication to TaskManager with `/register`, `/login`, and protected `/tasks` routes using `jsonwebtoken` and `bcryptjs` (1.5 hours).
  - **GitHub**: Updated `TaskManager` repo with JWT implementation.
  - **Repo**: [TaskManager](https://github.com/Srijith1912/TaskManager)

- **Day 2 (June 14)**:
  - **Read**: freeCodeCamp “Testing Node.js Apps” (1 hour).
  - **Coding**: Wrote Jest tests for TaskManager’s `/tasks` API routes using Supertest and MongoDB Memory Server (1 hour).
  - **GitHub**: Updated `TaskManager` repo with tests.
  - **Repo**: [TaskManager](https://github.com/Srijith1912/TaskManager)

## Mini Projects

Below are the small projects I’ve completed during my learning journey, organized by date.

- **Mini Project 1: Counter App (May 29)**:
  - Description: A React-based counter app with increment and decrement buttons, updating the document title with the count.
  - Skills: React hooks (`useState`, `useEffect`), state management, effect cleanup.
  - **Files**: `counter-app/App.js`, `counter-app/App.css`

- **Mini Project 2: City List App (May 31)**:
  - Description: A React app with TypeScript displaying a list of cities, allowing selection/deselection with highlighting.
  - Skills: React components, TypeScript interfaces, state management, Bootstrap styling (`list-group`).
  - **Files**: `city-list/App.tsx`, `city-list/ListGroup.tsx`

- **Mini Project 3: Todo List App (June 5)**:
  - Description: A simple todo list app using vanilla JavaScript, allowing users to add and delete tasks with basic CSS styling.
  - Skills: DOM manipulation, event handling, vanilla JavaScript.
  - **Files**: `mini-todo-list/index.html`, `mini-todo-list/script.js`, `mini-todo-list/styles.css`

- **Mini Project 4: Express Routing (June 7) with MongoDB Integration (June 8)**:
  - Description: Integrated MongoDB Atlas with the Express API, implementing CRUD operations for the tasks resource.
  - Skills: MongoDB, MongoDB Atlas, Node.js Driver, Express routing, RESTful API design, HTTP Methods.
  - **Files**: `express-server/server.js` `express-server/package.json`
 
- **Mini Project 5: Grocery Store App (June 11–12, 2025)**:
  - **Description**: A full-stack MERN application for small grocery shops to manage inventory, track stock, and allow customer checkouts.
  - **Features**:
    - User authentication for shop owners and customers.
    - Inventory management with stock tracking.
    - Simple checkout interface for customers.
  - **Skills**: MERN stack (MongoDB, Express.js, React, Node.js), JWT authentication, Axios, Tailwind CSS.
  - **Challenges**: Implemented user roles (owners vs. customers) and secured inventory routes.
  - **Repo**: [Project-Inventory](https://github.com/Srijith1912/Project-Inventory)
