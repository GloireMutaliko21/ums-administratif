import { Op, QueryTypes } from "sequelize";

import { dbSequelize } from "../../config/db.conf.js";
import Task from "../../models/tasks/task.mdl.js";
import Agent from '../../models/agents/agents.mdl.js';

const TODAY_START = new Date().setHours(0, 0, 0, 0);
const NOW = new Date();

export const createTask = async (req, res, next) => {
    try {
        const { titre, status, description, priorite, agentId } = req.body;
        const task = await Task.create({ titre, status, description, priorite, agentId });
        const createdTask = await Task.findByPk(task.id, { include: 'agent' });
        res.status(201).json({ data: createdTask });
    } catch (err) {
        console.log(err);
        const error = new Error(err);
        res.status(500);
        return next(error);
    }
};

export const getTasks = async (req, res, next) => {
    try {
        const { agentId } = req.params;

        const tasks = await Task.findAll({
            where: {
                [Op.and]: [
                    {
                        [Op.or]: [
                            {
                                createdAt: { [Op.between]: [TODAY_START, NOW] }
                            },
                            {
                                status: { [Op.not]: 'Close' }
                            }
                        ]
                    },
                    {
                        agentId
                    }
                ]
            },
        });
        res.status(200).json({ data: tasks });
    } catch (err) {
        const error = new Error(err);
        res.status(500);
        return next(error);
    }
};

export const getTasksDay = async (req, res, next) => {
    try {
        const { agentId } = req.params;

        const tasks = await Task.findAll({
            attributes: [
                'status',
                [dbSequelize.fn('COUNT', dbSequelize.col('status')), 'total']
            ],
            where: {
                [Op.and]: [
                    {
                        createdAt: { [Op.between]: [TODAY_START, NOW] }

                    },
                    {
                        agentId
                    }
                ]
            },
            group: 'status',
            order: ['status']
        });
        res.status(200).json({ data: tasks });
    } catch (err) {
        console.log(err);
        const error = new Error(err);
        res.status(500);
        return next(error);
    }
};

export const getTasksWeek = async (req, res, next) => {
    try {
        const { agentId } = req.params;

        const tasks = await dbSequelize.query(`SELECT status, COUNT(status) AS total FROM tasks WHERE (week(createdAt, 1) = week(now()) AND year(createdAt) = year(now()) AND agentId = '${agentId}') GROUP BY status ORDER BY status ASC`, { type: QueryTypes.SELECT })
        const listTasks = await dbSequelize.query(`SELECT status, JSON_ARRAYAGG(JSON_OBJECT('titre',titre, 'description', description, 'priorite', priorite)) AS data FROM tasks WHERE (week(createdAt) = week(now()) AND year(createdAt) = year(now()) AND agentId = '${agentId}') GROUP BY status ORDER BY status ASC`, { type: QueryTypes.SELECT })

        res.status(200).json({ data: tasks, list: listTasks });
    } catch (err) {
        console.log(err);
        const error = new Error(err);
        res.status(500);
        return next(error);
    }
};

export const getTasksMonth = async (req, res, next) => {
    try {
        const { agentId } = req.params;

        const tasks = await dbSequelize.query(`SELECT status, COUNT(status) AS total FROM tasks WHERE (month(createdAt) = month(now()) AND year(createdAt) = year(now()) AND agentId = '${agentId}') GROUP BY status ORDER BY status ASC`, { type: QueryTypes.SELECT })
        const listTasks = await dbSequelize.query(`SELECT status, JSON_ARRAYAGG(JSON_OBJECT('titre',titre, 'description', description, 'priorite', priorite)) AS data FROM tasks WHERE (month(createdAt) = month(now()) AND year(createdAt) = year(now()) AND agentId = '${agentId}') GROUP BY status ORDER BY status ASC`, { type: QueryTypes.SELECT })

        res.status(200).json({ data: tasks, list: listTasks });
    } catch (err) {
        console.log(err);
        const error = new Error(err);
        res.status(500);
        return next(error);
    }
};

// export const getTask = async (req, res, next) => {

// };

export const updateTask = async (req, res, next) => {
    try {
        const { status } = req.body;
        const { id } = req.params;

        const task = await Task.update({ status }, { where: { id } });

        if (!task) {
            res.status(204).json({ data: 'Echec' });
            return;
        }
        res.status(201).json({ data: task });

    } catch (err) {
        console.log(err);
        const error = new Error(err);
        res.status(500);
        return next(error);
    }
};

// export const deleteTask = async (req, res, next) => {

// };