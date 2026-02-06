# School Management System (Node.js + Express + Sequelize + Angular)

This folder contains a starter full-stack web application for a school management system. It includes:

- **Backend**: Node.js, Express, Sequelize, MySQL
- **Frontend**: Angular with Admin, Teacher, and Student modules

## Backend setup

```bash
cd backend
cp .env.example .env
# Update DB_NAME, DB_USER, DB_PASSWORD, and DB_HOST in .env
npm install
npm run dev
```

The API will be available at `http://localhost:4000/api` with these routes:

- `GET /api/admins`
- `GET /api/teachers`
- `GET /api/students`

## Frontend setup

```bash
cd frontend
npm install
npm start
```

The UI will run at `http://localhost:4200` and links to each module.

## Next steps

- Add authentication and role-based access control.
- Build CRUD screens for admins, teachers, and students.
- Extend the data model with classes, subjects, guardians, and fees.
