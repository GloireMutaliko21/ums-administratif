import Bien from "../../models/patrimoine/bien.mdl.js";

export const createBien = async (req, res, next) => {
    try {
        const { libelle, valDepart, duree, categBienId } = req.body;
        const bien = await Bien.create({ libelle, valDepart, duree, categBienId, valNetComptable: valDepart });
        const createdBien = await Bien.findByPk(bien.id);

        if (!createdBien) {
            res.status(404).json({ data: 'Catégorie non trouvée' });
            return;
        }
        res.status(201).json({ data: createdBien })
    } catch (err) {
        const error = new Error(err);
        res.status(500);
        return next(error);
    }
};

export const getAllBiens = async (req, res, next) => {
    try {
        const biens = await Bien.findAll();
        if (!biens) {
            res.status(404).json('Aucun bien trouve');
            return;
        }
        res.status(200).json({ data: biens });
    } catch (err) {
        const error = new Error(err);
        res.status(500);
        return next(error);
    }
};