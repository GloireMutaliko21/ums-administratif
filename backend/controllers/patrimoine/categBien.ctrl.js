import CategBien from "../../models/patrimoine/categBien.mdl.js";

export const createCategBien = async (req, res, next) => {
    try {
        const { libelle } = req.body;
        const categorie = await CategBien.create({ libelle });
        const createdCateg = await CategBien.findByPk(categorie.id);

        if (!createdCateg) {
            res.status(404).json({ data: 'Catégorie non trouvée' });
            return;
        }
        res.status(201).json({ data: createdCateg });
    } catch (err) {
        const error = new Error(err);
        res.status(500);
        return next(error);
    }
};