import Article from "../../models/inventaire/article.mdl.js";

export const createArticle = async (req, res, next) => {
    try {
        const { designation, stockAlerte, uniteId, categArtcleId } = req.body;

        const article = await Article.create({ designation, stockAlerte, uniteId, categArtcleId });

        const createdArticle = await Article.findByPk(article.id);
        if (!createArticle) {
            res.status(404).json({ data: 'Article not found' });
            return;
        }
        res.status(201).json({ data: createdArticle });
    } catch (err) {
        const error = new Error(err);
        res.status(500);
        return next(error);
    }
};

export const getArticles = async (req, res, next) => {
    try {
        const articles = await Article.findAll();
        if (!articles) {
            res.status(404).json('No Articles founded');
            return;
        }
        res.status(200).json({ data: articles });
    } catch (err) {
        const error = new Error(err);
        res.status(500);
        return next(error);
    }
};