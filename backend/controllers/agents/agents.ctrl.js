import bcrypt from "bcrypt";

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