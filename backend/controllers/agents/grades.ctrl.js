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

export const getGrades = async (req, res, next) => {
    try {
        const grades = await Grades.findAll();
        if (!grades) {
            res.status(404).json('No grade founded');
            return;
        }
        res.status(200).json({ data: grades });
    } catch (err) {
        const error = new Error(err);
        res.status(500);
        return next(error);
    }
};