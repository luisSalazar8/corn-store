## About The Project
This is a web application that serves as an online store for various products, featuring a rate limiter to monitor and control purchases. 
It is built with ReactJS and NodeJS as the core technologies. This repository contains both the frontend and backend modules, each located in its own folder.

## Built With
### Frontend
  * [React.JS](https://en.reactjs.org/)
  * [Tailwind](https://tailwindcss.com)
  * [ShadCN](https://ui.shadcn.com)
  * [React-query](https://tanstack.com/query/latest)
  * [React Hook Form](https://react-hook-form.com)
  * [React Router](https://reactrouter.com)

### Backend
  * [NodeJS](https://nodejs.org/en)
  * [Express](https://expressjs.com)
  * [Joi](https://joi.dev)
  * [TypeORM](https://typeorm.io)

### Database
  * [MySQL](https://www.mysql.com)

### Tools/Cloud Services
  * [Firebase](https://firebase.google.com)

## Getting Started

### Prerequisites
To execute the Frontend or the Backend you will need to have [NodeJs](https://nodejs.org/es/) installed in your computer.

### Installation
To clone the project you need to use the command `git clone <repo url>`.  

This project has two modules, each requiring its own setup. From the root folder, navigate into the frontend and backend subdirectories individually. In each subdirectory, run the following command to install the dependencies: `npm install`.  

Each module also requires a `.env` file with the necessary configuration to connect to external services (e.g., database, Firebase). You will find a corresponding `.env.example` file in each module that lists the required environment variables (without values). Copy this file to `.env` and fill in the appropriate values.

## Usage
To run the app, you need to start both the frontend and backend independently and simultaneously. Use two separate terminal windows for this.

### Frontend  
Navigate into the frontend subdirectory and run one of the following commands:
  * `npm run dev` — starts the development server with hot reload (default port: 5173)
  * `npm run build` — compiles the project for production
  * To serve the compiled version, use a static server (e.g., vite preview or similar)

### Backend  
Navigate into the backend subdirectory and run one of the following:
  * `npm run dev` — starts the server in development mode with hot reload (default port: 3000)
  * `npm run build` — compiles the TypeScript code
  * `npm run start` — starts the server using the compiled JavaScript files

### App

When the application is running, it will redirect users to the login page if they are not authenticated.

![image](https://github.com/user-attachments/assets/d8c804c5-fcbd-44be-bd6e-d1462a1ac766)
  
  
By default, you won’t have an account. You can create one by clicking the Register option and filling out the form. After registration, you’ll be redirected back to the login page.

![image](https://github.com/user-attachments/assets/27d3acc9-7359-434d-8998-5c9f9fc9a002)


Once logged in, you'll be taken to the Home page, where a list of products will be displayed.

![image](https://github.com/user-attachments/assets/a5a0c68b-471b-4dc4-959b-d3abe73bce62)


To purchase a product, click on the shopping bag icon. The purchase rate is limited based on the backend configuration defined in the `.env` file.

![image](https://github.com/user-attachments/assets/8a0ff7da-f1dd-4631-9f98-1c5779719f3d)


After a successful purchase, a confirmation message will appear.
 
![image](https://github.com/user-attachments/assets/022ff800-a5bf-4f86-b128-3a2e54074960)


You can also check how many times you’ve purchased a specific product by clicking the eye icon, which appears when you hover over the product.

![image](https://github.com/user-attachments/assets/1774f9eb-2606-4d7c-b1ec-87d0610ed64c)
![image](https://github.com/user-attachments/assets/4af2be13-c3c1-47d0-805f-c57a00127fec)


To log out, click the Logout option located at the top of the page.
