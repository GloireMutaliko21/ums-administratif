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
            gradeId, privilege
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
                gradeId, privilege,
                imageUrl: file.secure_url
            });

            const newAgent = await Agent.findByPk(agent.id, { include: 'grade' });

            res.status(201).json({ data: newAgent });
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

        const agent = await Agent.findOne({ where: { username }, include: 'grade' });

        if (!agent) {
            res.status(401).json({ error: "Paramètres d'authentification non valides:" });
            return;
        }
        try {
            const isValidPwd = await bcrypt.compare(password, agent.password);
            if (!isValidPwd) {
                res.status(401).json({ error: "Paramètres d'authentification non valides" });
                return;
            }
            res.status(200).json({
                agent,
                token: jwt.sign(
                    { agentId: agent.id, privilege: agent.privilege }, process.env.TOKEN_KEY, { expiresIn: '24h' }
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

export const getAllAgents = async (req, res, next) => {
    try {
        const agents = await Agent.findAll({
            include: 'grade',
            attributes: ['id', 'matricule', 'nom', 'postnom', 'prenom', 'statut', 'imageUrl', 'permanence']
        });
        if (!agents) {
            res.status(404).json('No agent founded');
            return;
        }
        res.status(200).json({ data: agents });
    } catch (err) {
        const error = new Error(err);
        res.status(500);
        return next(error);
    }
};