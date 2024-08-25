### README.md

# Full-Stack Web Scraping: Link Preview Generator with Vite.js, React, and Node.js

## Table of Contents

- [Preview](#preview)
- [Step By Step Tutorial](#tutorial)
- [Features](#features)
- [Prerequisites](#prerequisites)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Run App](#running-the-application)
- [Usage](#usage)
- [Project Goals](#project-goals)
- [Contact](#contact)

## Preview

![Project Preview](image.png)

This project demonstrates how to create a full-stack application using Vite.js, React, and Node.js to generate link previews through web scraping. The backend utilizes Express.js, Axios, and Cheerio to fetch and parse HTML from URLs, while the frontend is built with React and TypeScript.

## Tutorial

[Click on Thumbnail to Watch on Youtube](https://youtu.be/m6T7Bi8OEvc)

[<img alt="Watch the video" height="315" src="https://img.youtube.com/vi/m6T7Bi8OEvc/hqdefault.jpg" width="560"/>](https://youtu.be/m6T7Bi8OEvc)

## Features

- **Vite.js + React**: Fast and modern frontend setup with TypeScript support.
- **Node.js + Express**: Robust backend server for handling API requests.
- **Cheerio**: Lightweight and fast web scraping with HTML parsing.
- **Axios**: Fetch content from web pages efficiently.
- **Link Preview**: Generate dynamic previews including title, description, and images from any URL.

## Getting Started

### Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v14 or later)
- [npm](https://www.npmjs.com/) or [Yarn](https://yarnpkg.com/)

### Project Structure

```bash
link-previewer
├── .. vitejs code for reactjs          # Frontend: Vite.js + React
├── server          # Backend: Node.js + Express
└── README.md       # Project Documentation
```

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/yourusername/vite-react-nodejs.git
   cd vite-react-nodejs
   ```

2. **Install dependencies for both frontend and backend:**

    - Frontend (Vite.js + React):

      ```bash
      npm install
      ```

    - Backend (Node.js + Express):

      ```bash
      cd server
      npm install
      ```

### Running the Application

1. **Start the Node.js backend server:**

   ```bash
   cd server
   npm start
   ```

2. **Start the Vite.js React frontend:**

   ```bash
   cd ..
   npm run dev
   ```

3. **Open your browser and navigate to:**

   ```
   http://localhost:5173
   ```

### Usage

- Enter any URL into the input field, and the application will fetch the link preview, displaying the title, description, and an image if available.

## Project Goals

This project is designed to:

- Demonstrate how to set up a full-stack application using modern tools.
- Show the process of web scraping with Node.js and Cheerio.
- Provide an example of integrating a backend API with a React frontend.

## Contact

If you have any questions or want to reach out, connect with me on [LinkedIn](https://www.linkedin.com/in/ghazi-khan) or [Twitter](https://twitter.com/ghazikhan205).

---

Happy coding! 🚀
