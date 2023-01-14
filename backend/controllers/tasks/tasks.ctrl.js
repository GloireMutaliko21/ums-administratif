import { Op } from "sequelize";

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

export const getTasks = async (req, res, next) => {
    const TODAY_START = new Date().setHours(0, 0, 0, 0);
    const NOW = new Date();

    try {
        const { agentId } = req.params;

        const tasks = await Task.findAll({
            where: {
                [Op.and]: [
                    {
                        createdAt: { [Op.between]: [TODAY_START, NOW] }
                    },
                    {
                        agentId
                    }
                ]
            }
        });
        res.status(200).json({ data: tasks });
    } catch (err) {
        console.log(err);
        const error = new Error(err);
        res.status(500);
        return next(error);
    }
};

// export const getTasksDay = async (req, res, next) => {

// };

// export const getTask = async (req, res, next) => {

// };

// export const updateTask = async (req, res, next) => {

// };

// export const deleteTask = async (req, res, next) => {

// };