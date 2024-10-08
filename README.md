# Tech Tutor - Milestone 3 Project

For our Milestone 3 project, we aimed to develop a website that allows users to book appointments with tutors specializing in the tech field. Our primary objectives were to create a clean, intuitive user interface that feels indistinguishable from a professional website, integrate a booking system using the Stripe payment API, and implement a secure database with robust user authentication.

## Deployed Website

- **Frontend:** https://tech-tutor.onrender.com
  - Using https://render.com
- **Backend:** GraphQL Backend, and Stripe Backend
  - Using https://railway.app
- **Database:** PostgreSQL Database
  - Using https://railway.app

## Table of Contents

- [Instructions](#instructions)
- [Technologies](#technologies)
- [Outstanding-Bugs-or-Unfinished-Functionalities](#outstanding-bugs-or-unfinished-functionalities)
- [The-Team](#the-team)

## Instructions for Local

1. Start by cloning the repository.
2. For each folder, install the necessary dependencies.
3. Make sure to set up a .env file, as it's required for the project.
4. Run each folder in its own terminal session.

### Frontend

```
cd frontend
npm install
npm start
```

.env

- REACT_APP_GRAPHQL_URL = http://localhost:5000
- REACT_APP_STRIPE_URL = http://localhost:8000

### GraphQL Backend

```
cd graphql-backend
npm install
nodemon index.js
```

.env

- PORT = 5000
- DATABASE_URL="YOUR_POSTGRESQL_URL_HERE"
- PRISMA_SCHEMA_DISABLE_ADVISORY_LOCK=true
- JWT_SECRET=YOUR_JWT_SECRET_HERE
- REFRESH_JWT_SECRET=YOUR_JWT_SECRET_REFRESH_HERE

### Stripe Backend

```
cd stripe-backend
npm install
nodemon index.js
```

.env

- PORT=8000
- STRIPE_SECRET_KEY=YOUR_STRIPE_SECRET_KEY_HERE
- STRIPE_PUBLISHABLE_KEY=YOUR_PUBLISHABLE_KEY_HERE
- STRIPE_CLIENT_SECRET=
- FRONTEND_URL=http://localhost:3000

## Technologies

- **Frontend:**

  - Material UI

- **Graphql Backend:**

  - Prisma: ORM
  - GraphQL: Query Languange
  - JWT Token: Security and Authentication

- **Stripe Backend:**
  - Stripe: Payment

## Outstanding Bugs or Unfinished Functionalities

There are no oustanding bugs to speak of.

We would like to clean up and add a few things:

- Account page design
- Able to edit your account
- Creating tutor:
  - Upload your own image
  - Skills pops up checkboxes of skills
  - Cannot set their own rating.
- More layers of authentication and validation of user.

## The Team

### Anthony Ghilardi

- **Github:** https://github.com/Anthony-Ghilardi
- **LinkedIn:** https://www.linkedin.com/in/anthony-ghilardi/
- **Responsibilites:**
- Payment:
  - Stripe
- Secondary Frontend Devoloper

### David A Vargas

- **Github:** https://github.com/DavidAVargas
- **LinkedIn:** https://www.linkedin.com/in/davidavargas-dev/
- **Responsibilites:**
  - UI/UX Design
  - Primary Frontend Developer

### Jesus Lares

- **Github:** https://github.com/JesusMLares
- **LinkedIn:** https://www.linkedin.com/in/jesus-m-lares/
- **Responsibilites:**
  - PostgreSQL Database
    - Prisma and GraphQL
  - Authentication
    - JWT Tokens
