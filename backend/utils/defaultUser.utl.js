import Agent from "../models/agents/agents.mdl.js";

async function createDefaultUser() {
    try {
        const agents = await Agent.findAll();

        if (!agents) {
            await Agent.create({
                username: 'admin', password: 'admingrh',
                matricule: 'admin', nom: 'Admin',
                postnom: 'Admin', prenom: 'Admin',
                sexe: 'A', statut: 'Académique',
                permanence: 'Permanent', imageUrl: 'none',
                privilege: 'direction', gradeId: ''
            });
        }
    } catch (err) {
        console.log('Erreur de creation');
    }
}

export default createDefaultUser;