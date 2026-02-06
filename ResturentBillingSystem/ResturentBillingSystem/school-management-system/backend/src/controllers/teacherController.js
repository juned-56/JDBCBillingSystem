import db from '../models/index.js';

export const listTeachers = async (req, res) => {
  const teachers = await db.Teacher.findAll();
  res.json(teachers);
};

export const createTeacher = async (req, res) => {
  const teacher = await db.Teacher.create(req.body);
  res.status(201).json(teacher);
};

export const getTeacher = async (req, res) => {
  const teacher = await db.Teacher.findByPk(req.params.id);
  if (!teacher) {
    return res.status(404).json({ message: 'Teacher not found' });
  }
  return res.json(teacher);
};

export const updateTeacher = async (req, res) => {
  const teacher = await db.Teacher.findByPk(req.params.id);
  if (!teacher) {
    return res.status(404).json({ message: 'Teacher not found' });
  }
  await teacher.update(req.body);
  return res.json(teacher);
};

export const deleteTeacher = async (req, res) => {
  const teacher = await db.Teacher.findByPk(req.params.id);
  if (!teacher) {
    return res.status(404).json({ message: 'Teacher not found' });
  }
  await teacher.destroy();
  return res.status(204).send();
};
