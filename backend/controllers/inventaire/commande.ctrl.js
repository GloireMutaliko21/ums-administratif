import Commande from "../../models/inventaire/commande.mdl.js";

export const createCommande = async (req, res, next) => {
    try {
        const { quantite, articleId } = req.body;

        const commande = await Commande.create({ quantite, articleId });

        const createdCommande = await Commande.findByPk(commande.id);
        if (!createdCommande) {
            res.status(400).json({ data: 'Echec' });
            return;
        }
        res.status(201).json({ data: createdCommande });

    } catch (err) {
        const error = new Error(err);
        res.status(500);
        return next(error);
    }
};