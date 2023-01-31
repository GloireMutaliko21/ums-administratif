import Souscription from '../../models/cassoc/souscriprion.mdl.js';
import Deduction from '../../models/paie/deduction.mdl.js';

export const souscrire = async (req, res, next) => {
    try {
        const { casSocId, montant } = req.body;
        const { id } = req.user;

        const souscription = await Souscription.create({ montant, casSocId, agentId: id });
        const deduction = await Deduction.create({ montant, libelle: 'Cas sociaux', agentId: id });

        res.status(201).json({ data: [souscription, deduction] });

    } catch (err) {
        const error = new Error(err);
        res.status(500);
        return next(error);
    }
};

export const getAllSouscriptions = async (req, res, next) => {
    const { casSocId } = req.params;

    try {
        const souscriptions = await Souscription.findAll({
            where: { casSocId },
            include: ['agent', 'casSoc']
        });

        if (!souscriptions) {
            res.status(204).json({ data: 'Aucune souscription pour ce cas' });
            return;
        }
        res.status(200).json({ data: souscriptions });
    } catch (err) {
        const error = new Error(err);
        res.status(500);
        return next(error);
    }
};