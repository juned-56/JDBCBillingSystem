import db from '../models/index.js';

export const listAdmins = async (req, res) => {
  const admins = await db.Admin.findAll();
  res.json(admins);
};

export const createAdmin = async (req, res) => {
  const admin = await db.Admin.create(req.body);
  res.status(201).json(admin);
};

export const getAdmin = async (req, res) => {
  const admin = await db.Admin.findByPk(req.params.id);
  if (!admin) {
    return res.status(404).json({ message: 'Admin not found' });
  }
  return res.json(admin);
};

export const updateAdmin = async (req, res) => {
  const admin = await db.Admin.findByPk(req.params.id);
  if (!admin) {
    return res.status(404).json({ message: 'Admin not found' });
  }
  await admin.update(req.body);
  return res.json(admin);
};

export const deleteAdmin = async (req, res) => {
  const admin = await db.Admin.findByPk(req.params.id);
  if (!admin) {
    return res.status(404).json({ message: 'Admin not found' });
  }
  await admin.destroy();
  return res.status(204).send();
};
