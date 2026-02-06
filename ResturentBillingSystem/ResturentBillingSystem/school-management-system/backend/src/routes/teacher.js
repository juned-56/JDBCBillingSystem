import { Router } from 'express';
import {
  listTeachers,
  createTeacher,
  getTeacher,
  updateTeacher,
  deleteTeacher,
} from '../controllers/teacherController.js';

const router = Router();

router.get('/', listTeachers);
router.post('/', createTeacher);
router.get('/:id', getTeacher);
router.put('/:id', updateTeacher);
router.delete('/:id', deleteTeacher);

export default router;
