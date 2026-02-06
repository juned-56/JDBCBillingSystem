import { Router } from 'express';
import adminRoutes from './admin.js';
import teacherRoutes from './teacher.js';
import studentRoutes from './student.js';

const router = Router();

router.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});

router.use('/admins', adminRoutes);
router.use('/teachers', teacherRoutes);
router.use('/students', studentRoutes);

export default router;
