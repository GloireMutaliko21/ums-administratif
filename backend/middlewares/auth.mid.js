import jwt from 'jsonwebtoken';

import Agent from '../models/agents/agents.mdl.js';
import { updateVNCBiens } from '../controllers/patrimoine/bien.ctrl.js';

export const authDirection = async (req, res, next) => {
    try {
        const token = req.headers.authorization.split(' ')[1];
        const decodedToken = jwt.verify(token, process.env.TOKEN_KEY);
        const agentId = decodedToken.agentId;
        const user = await Agent.findByPk(agentId);

        if (user.privilege === 'direction') {
            req.user = user;
            updateVNCBiens(req, res, next);
            next();
            return;
        }
        res.status(401).json({ err: 'Access Denied' });
    } catch (err) {
        res.status(401).json({ err });
    }
};

export const authAll = async (req, res, next) => {
    try {
        const token = req.headers.authorization.split(' ')[1];
        const decodedToken = jwt.verify(token, process.env.TOKEN_KEY);
        const agentId = decodedToken.agentId;

        req.user = await Agent.findByPk(agentId);
        updateVNCBiens(req, res, next);
        next();
    } catch (err) {
        res.status(401).json({ err });
    }
};

export const authInventaire = async (req, res, next) => {
    try {
        const token = req.headers.authorization.split(' ')[1];
        const decodedToken = jwt.verify(token, process.env.TOKEN_KEY);
        const agentId = decodedToken.agentId;

        const user = await Agent.findByPk(agentId);

        if (user.privilege === 'inventaire' || user.privilege === 'direction') {
            req.user = user;
            updateVNCBiens(req, res, next);
            next();
            return;
        }
        res.status(401).json({ err: 'Access Denied' });
    } catch (err) {
        res.status(401).json({ err });
    }
};

export const authPatrimoine = async (req, res, next) => {
    try {
        const token = req.headers.authorization.split(' ')[1];
        const decodedToken = jwt.verify(token, process.env.TOKEN_KEY);
        const agentId = decodedToken.agentId;

        const user = await Agent.findByPk(agentId);

        if (user.privilege === 'patrimoine' || user.privilege === 'direction') {
            req.user = user;
            updateVNCBiens(req, res, next);
            next();
            return;
        }
        res.status(401).json({ err: 'Access Denied' });
    } catch (err) {
        res.status(401).json({ err });
    }
};