import dotenv from 'dotenv';
import { Sequelize } from 'sequelize';

dotenv.config();

const {
  DB_NAME,
  DB_USER,
  DB_PASSWORD,
  DB_HOST,
  DB_PORT,
} = process.env;

if (!DB_NAME || !DB_USER || !DB_PASSWORD || !DB_HOST) {
  throw new Error(
    'Missing database configuration. Copy backend/.env.example to backend/.env and set DB_NAME, DB_USER, DB_PASSWORD, and DB_HOST.'
  );
}

const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
  host: DB_HOST,
  port: Number(DB_PORT || 3306),
  dialect: 'mysql',
  logging: false,
});

export default sequelize;
