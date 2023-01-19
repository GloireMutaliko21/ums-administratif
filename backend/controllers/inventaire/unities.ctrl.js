import Unite from "../../models/inventaire/unities.mdl.js";

export const createUnity = async (req, res, next) => {
    try {
        const { libelle } = req.body;

        const unite = await Unite.create({ libelle });
        const createdUnite = await Unite.findByPk(unite.id);

        if (!createdUnite) {
            res.status(404).json({ data: 'Unity not found' });
            return;
        }
        res.status(201).json({ data: createdUnite });

    } catch (err) {
        const error = new Error(err);
        res.status(500);
        return next(error);
    }
};