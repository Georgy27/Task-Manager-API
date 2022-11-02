const Task = require("../models/Task");

const getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.find({});
    res.status(200).json({ tasks });
  } catch (error) {
    res.status(500).json({ msg: err });
  }
};

const createTask = async (req, res) => {
  try {
    const task = await Task.create(req.body);
    return res.status(201).json({ task });
  } catch (err) {
    res.status(500).json({ msg: err });
  }
};

const getTask = (req, res) => {
  return res.json({ id: req.params.id });
};

const updateTask = (req, res) => {
  return res.send("update task");
};

const deleteTask = (req, res) => {
  return res.send("delete task");
};

module.exports = {
  getAllTasks,
  createTask,
  getTask,
  updateTask,
  deleteTask,
};
