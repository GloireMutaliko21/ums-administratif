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

        const file = await cloudinary.uploader.upload(image, {
            folder: 'umsAgentsProfiles'
        });

        const hashedPwd = await bcrypt.hash(password, 10);
    } catch (err) {
        const error = new Error(err);
        res.status(500);
        return next(error);
    }
};