import db from '../models/index.js';

export const listStudents = async (req, res) => {
  const students = await db.Student.findAll();
  res.json(students);
};

export const createStudent = async (req, res) => {
  const student = await db.Student.create(req.body);
  res.status(201).json(student);
};

export const getStudent = async (req, res) => {
  const student = await db.Student.findByPk(req.params.id);
  if (!student) {
    return res.status(404).json({ message: 'Student not found' });
  }
  return res.json(student);
};

export const updateStudent = async (req, res) => {
  const student = await db.Student.findByPk(req.params.id);
  if (!student) {
    return res.status(404).json({ message: 'Student not found' });
  }
  await student.update(req.body);
  return res.json(student);
};

export const deleteStudent = async (req, res) => {
  const student = await db.Student.findByPk(req.params.id);
  if (!student) {
    return res.status(404).json({ message: 'Student not found' });
  }
  await student.destroy();
  return res.status(204).send();
};
