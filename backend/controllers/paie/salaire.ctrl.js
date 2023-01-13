import Salaire from "../../models/paie/salaire.mdl.js";

export const createSalaire = async (req, res, next) => {
    try {
        const {
            mois, salaire,
            heureSupp, ferie,
            conge, prime,
            maladie, deduction,
            allocation, agentId
        } = req.body;

        const newSalaire = await Salaire.create({
            mois, salaire,
            heureSupp, ferie,
            conge, prime,
            maladie, deduction,
            allocation, agentId
        });

        const createdSalaire = await Salaire.findByPk(newSalaire.id, { include: 'agent' });
        res.status(201).json({ data: createdSalaire });

    } catch (err) {
        const error = new Error(err);
        res.status(500);
        return next(error);
    }
};