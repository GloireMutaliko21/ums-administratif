import { Op } from 'sequelize';

export const souscrire = async (req, res, next) => {
    try {
        const { casSocId, montant } = req.body;
        const { id } = req.user;
    } catch (err) {
        const error = new Error(err);
        res.status(500);
        return next(error);
    }
}