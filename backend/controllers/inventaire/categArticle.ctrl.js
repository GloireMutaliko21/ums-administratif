import CategArticle from "../../models/inventaire/categArticle.mdl.js";

export const createCateg = async (req, res, next) => {
    try {
        const { libelle } = req.body;
        const categorie = await CategArticle.create({ libelle });
        const createdCateg = await CategArticle.findByPk(categorie.id);

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

export const getCategories = async (req, res, next) => {
    try {
        const categories = await CategArticle.findAll();
        if (!categories) {
            res.status(404).json('No category founded');
            return;
        }
        res.status(200).json({ data: categories });
    } catch (err) {
        const error = new Error(err);
        res.status(500);
        return next(error);
    }
};