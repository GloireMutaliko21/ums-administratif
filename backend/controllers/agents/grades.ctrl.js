import Grades from "../../models/agents/grades.mdl.js";

export const createGrade = async (req, res, next) => {
    try {
        const { titre } = req.body;

        const grade = await Grades.create({
            titre
        });
        res.status(201).json({ data: grade })
    } catch (err) {
        const error = new Error(err);
        res.status(500);
        return next(error);
    }
};