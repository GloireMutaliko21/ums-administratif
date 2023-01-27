import Grades from "../../models/agents/grades.mdl.js";

export const createGrade = async (req, res, next) => {
    try {
        const { titre, taux } = req.body;

        const grade = await Grades.create({
            titre, taux
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
        const gradesFormated = grades.map(grade => {
            // console.log(JSON.parse(grade.taux))
            return {
                id: grade.dataValues.id,
                titre: grade.dataValues.titre,
                taux: JSON.parse(grade.dataValues.taux),
                createdAt: grade.dataValues.createdAt,
                updatedAt: grade.dataValues.updatedAt
            }
        })
        res.status(200).json({ data: gradesFormated });

    } catch (err) {
        const error = new Error(err);
        res.status(500);
        return next(error);
    }
};