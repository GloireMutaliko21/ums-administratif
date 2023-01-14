// import { dbSequelize } from "../../config/db.conf.js";
import Task from "../../models/tasks/task.mdl.js";

export const createTask = async (req, res, next) => {
    try {
        const { titre, status, description, priorite, agentId } = req.body;
        const task = await Task.create({ titre, status, description, priorite, agentId });
        const createdTask = await Task.findByPk(task.id, { include: 'agent' });
        res.status(201).json({ data: createdTask });
    } catch (err) {
        const error = new Error(err);
        res.status(500);
        return next(error);
    }
};

// export const getTasks = async (req, res, next) => {

// };

// export const getTasksDay = async (req, res, next) => {

// };

// export const getTask = async (req, res, next) => {

// };

// export const updateTask = async (req, res, next) => {

// };

// export const deleteTask = async (req, res, next) => {

// };