import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import routes from './routes/index.js';
import db from './models/index.js';

dotenv.config();

const app = express();
const port = Number(process.env.PORT || 4000);

app.use(cors());
app.use(express.json());

app.use('/api', routes);

const start = async () => {
  try {
    await db.sequelize.authenticate();
    await db.sequelize.sync();
    app.listen(port, () => {
      console.log(`School management API running on port ${port}`);
    });
  } catch (error) {
    console.error('Failed to start server:', error);
    process.exit(1);
  }
};

start();
