import Operation from "../../models/inventaire/operation.mdl.js";
import Article from "../../models/inventaire/article.mdl.js";

export const registerOperation = async (req, res, next) => {
    try {
        const { typeOp, libelle, quantite, dateOp, articleId } = req.body;
        try {
            //Recherche de l'article pour pouvoir mettre a jour la quantite apres enregistrement operation
            const article = await Article.findByPk(articleId);

            //Verification si l'article existe
            if (!article) {
                res.status(404).json({ data: 'Article does not exist' });
                return;
            }

            //Recuperation de la quantite actuelle de l'article
            const artQuantite = article.quantite;

            //Enregistrer operation
            if (typeOp !== 'entree' && quantite > artQuantite) {
                res.status(400).json({ data: 'Quantite non disponible pour cette operation' });
                return;
            }
            const operation = await Operation.create({ typeOp, libelle, quantite, dateOp, articleId });

            //Mise a jour quantite article
            const newQuantite = typeOp === 'entree' ?
                artQuantite + quantite :
                artQuantite - quantite;

            await Article.update({ quantite: newQuantite }, { where: { id: articleId } });
            res.status(201).json({ data: operation });
        } catch (err) {

        }
    } catch (err) {
        const error = new Error(err);
        res.status(500);
        return next(error);
    }
};