import { QueryTypes } from "sequelize";

import { dbSequelize } from "../../config/db.conf.js";
import Operation from "../../models/inventaire/operation.mdl.js";
import Article from "../../models/inventaire/article.mdl.js";

const NOW = new Date();

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
                artQuantite + +quantite :
                artQuantite - quantite;

            await Article.update({ quantite: newQuantite }, { where: { id: articleId } });
            res.status(201).json({ data: operation });
        } catch (err) {
            res.status(520).json({ data: 'Erreur inconnu' });
        }
    } catch (err) {
        const error = new Error(err);
        res.status(500);
        return next(error);
    }
};

export const todayFicheStockGlobal = async (req, res, next) => {
    try {
        const ficheStock = await dbSequelize.query(`SELECT typeOp, JSON_ARRAYAGG(JSON_OBJECT('libelle',libelle, 'quantite', operations.quantite, 'designation', designation)) AS data FROM operations INNER JOIN articles ON operations.articleId = articles.id WHERE dateOp = '${NOW.toISOString().slice(0, 10)}' GROUP BY typeOp ORDER BY typeOp ASC`, { type: QueryTypes.SELECT })
        if (!ficheStock) {
            res.status(404).json({ data: 'Aucune operation trouvee' });
            return;
        }
        res.status(200).json({ data: ficheStock });

    } catch (err) {
        const error = new Error(err);
        res.status(500);
        return next(error);
    }
};

export const ficheStockWeek = async (req, res, next) => {
    try {
        const ficheStock = await dbSequelize.query(`SELECT typeOp, JSON_ARRAYAGG(JSON_OBJECT('libelle',libelle, 'quantite', operations.quantite, 'designation', designation)) AS data FROM operations INNER JOIN articles ON operations.articleId = articles.id WHERE week(operations.createdAt, 1) = week(now()) AND year(operations.createdAt) = year(now()) GROUP BY typeOp ORDER BY typeOp ASC`, { type: QueryTypes.SELECT })
        if (!ficheStock) {
            res.status(404).json({ data: 'Aucune operation trouvee' });
            return;
        }
        res.status(200).json({ data: ficheStock });
    } catch (err) {
        const error = new Error(err);
        res.status(500);
        return next(error);
    }
};
export const ficheStockMonth = async (req, res, next) => {
    try {
        const ficheStock = await dbSequelize.query(`SELECT typeOp, JSON_ARRAYAGG(JSON_OBJECT('libelle',libelle, 'quantite', operations.quantite, 'designation', designation)) AS data FROM operations INNER JOIN articles ON operations.articleId = articles.id WHERE month(operations.createdAt) = month(now()) AND year(operations.createdAt) = year(now()) GROUP BY typeOp ORDER BY typeOp ASC`, { type: QueryTypes.SELECT })
        if (!ficheStock) {
            res.status(404).json({ data: 'Aucune operation trouvee' });
            return;
        }
        res.status(200).json({ data: ficheStock });
    } catch (err) {
        const error = new Error(err);
        res.status(500);
        return next(error);
    }
};

export const synteheseMonth = async (req, res, next) => {
    try {
        // const ficheStock = await dbSequelize.query(`SELECT designation, typeOp, SUM(operations.quantite) AS total FROM articles INNER JOIN operations ON articles.id = operations.articleId WHERE month(operations.createdAt) = month(now()) AND year(operations.createdAt) = year(now()) AND articles.id = operations.articleId GROUP BY designation, typeOp ORDER BY designation ASC`, { type: QueryTypes.SELECT })
        const ficheStock = await dbSequelize.query(`SELECT a.designation, SUM(CASE WHEN o.typeOp = 'entree' THEN o.quantite ELSE 0 END) as entree, SUM(CASE WHEN o.typeOp = 'sortie' THEN o.quantite ELSE 0 END) as sortie FROM articles a LEFT JOIN operations o ON a.id = o.articleId WHERE month(o.createdAt) = month(now()) AND year(o.createdAt) = year(now()) GROUP BY a.designation`, { type: QueryTypes.SELECT })
        if (!ficheStock) {
            res.status(404).json({ data: 'Aucune operation trouvee' });
            return;
        }
        res.status(200).json({ data: ficheStock });
    } catch (err) {
        console.log(err)
        const error = new Error(err);
        res.status(500);
        return next(error);
    }
};
