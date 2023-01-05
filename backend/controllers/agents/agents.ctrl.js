import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

import Agent from "../../models/agents/agents.mdl.js";
import cloudinary from "../../utils/cloudinary.utl.js";

export const createAgent = async (req, res, next) => {
    try {
        const {
            matricule,
            nom, postnom, prenom,
            sexe, statut, permanence,
            username, password,
            gradeId
        } = req.body;

        const imageUrl = req.file.path;

        const file = await cloudinary.uploader.upload(imageUrl, {
            folder: 'umsAgentsProfiles'
        });

        const hashedPwd = await bcrypt.hash(password, 10);

        try {
            const agent = await Agent.create({
                matricule, nom, postnom, prenom, sexe,
                statut, permanence, username,
                password: hashedPwd,
                gradeId,
                imageUrl: file.secure_url
            });

            res.status(201).json({ data: agent });
        } catch (err) {
            res.status(400).json({ err });
        }
    } catch (err) {
        const error = new Error(err);
        res.status(500);
        return next(error);
    }
};

export const login = async (req, res, next) => {
    try {
        const { username, password } = req.body;

        const agent = await Agent.findOne({ where: { username } });

        if (!agent) {
            res.status(401).json({ error: 'Invalid authentication params 1' });
            return;
        }
        try {
            const isValidPwd = await bcrypt.compare(password, agent.password);
            if (!isValidPwd) {
                res.status(401).json({ error: 'Invalid authentication params 2' });
                return;
            }
            res.status(200).json({
                agent,
                token: jwt.sign(
                    { agentId: agent.id, privilege: user.privilege }, process.env.TOKEN_KEY, { expiresIn: '24h' }
                )
            });
        } catch (err) {
            res.status(401).json({ err });
        }
    } catch (err) {
        const error = new Error(err);
        res.status(500);
        return next(error);
    }
};