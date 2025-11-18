# 📝 ToDoList (TypeScript + React)

A simple and fast ToDo List application built with **React**,
**TypeScript**, and **Vite**, using **localStorage** for data
persistence.

## 🚀 Features

-   Add new tasks
-   Search through tasks
-   Display the total number of tasks
-   Clear all tasks
-   LocalStorage synchronization
-   Clean component structure

## 📂 Project Structure

    todolist-ts/
    ├── node_modules/
    ├── public/
    │   └── search.svg
    ├── src/
    │   ├── components/
    │   │   ├── ui/
    │   │   │   ├── TaskItem.tsx
    │   │   │   ├── Actions.tsx
    │   │   │   ├── FormAdd.tsx
    │   │   │   └── FormSearch.tsx
    │   ├── store/
    │   │   ├── listStorage.types.ts
    │   │   └── listStore.ts
    │   ├── utils/
    │   ├── App.tsx
    │   ├── index.css
    │   ├── main.tsx
    │   └── index.html
    ├── .gitignore
    ├── bun.lock
    ├── eslint.config.js
    ├── package.json
    ├── tsconfig.app.json
    ├── tsconfig.json
    ├── tsconfig.node.json
    └── vite.config.ts

## 🧩 Technologies

-   React + TypeScript
-   Vite
-   ESLint
-   LocalStorage API

## ▶️ Running the Project

### Install dependencies

    bun install

or

    npm install

### Start development server

    bun dev

or

    npm run dev

### Build for production

    bun run build

or

    npm run build
