import { Router } from 'express';
import {
  listAdmins,
  createAdmin,
  getAdmin,
  updateAdmin,
  deleteAdmin,
} from '../controllers/adminController.js';

const router = Router();

router.get('/', listAdmins);
router.post('/', createAdmin);
router.get('/:id', getAdmin);
router.put('/:id', updateAdmin);
router.delete('/:id', deleteAdmin);

export default router;
