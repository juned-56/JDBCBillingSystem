import { Router } from 'express';
import {
  listStudents,
  createStudent,
  getStudent,
  updateStudent,
  deleteStudent,
} from '../controllers/studentController.js';

const router = Router();

router.get('/', listStudents);
router.post('/', createStudent);
router.get('/:id', getStudent);
router.put('/:id', updateStudent);
router.delete('/:id', deleteStudent);

export default router;
