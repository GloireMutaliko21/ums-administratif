import jwt from 'jsonwebtoken';
import Agent from '../models/agents/agents.mdl.js';

const authDirection = async (req, res, next) => {
    try {
        const token = req.headers.authorization.split(' ')[1];
        const decodedToken = jwt.verify(token, process.env.TOKEN_KEY);
        const agentId = decodedToken.agentId;
        const user = await Agent.findByPk(agentId);

        if (user.privilege === 'direction') {
            req.user = user;
            next();
        }
        res.status(401).json({ err: 'Access Denied' });
    } catch (err) {
        res.status(401).json({ err });
    }
};