import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';
import createAdmin from './admin.js';
import createTeacher from './teacher.js';
import createStudent from './student.js';

const Admin = createAdmin(sequelize, DataTypes);
const Teacher = createTeacher(sequelize, DataTypes);
const Student = createStudent(sequelize, DataTypes);

const db = {
  sequelize,
  Admin,
  Teacher,
  Student,
};

export default db;
