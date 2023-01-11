import HeureSupp from "../../models/paie/heuresupp.mdl.js";

export const registerHeureSupp = async (req, res, next) => {
    try {
        const { nombre, taux, agentId } = req.body;

        const heureSupp = await HeureSupp.create({ nombre, taux, agentId });

        //Find This created heuresupp remuneration and send it to front
        const createdHeureSupp = await HeureSupp.findByPk(heureSupp.id, { include: 'agent' });
        res.status(201).json({ data: createdHeureSupp });
    } catch (err) {
        const error = new Error(err);
        res.status(500);
        return next(error);
    }
};