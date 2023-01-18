export const sexeData = [{ id: 'M', libelle: 'Masculin' }, { id: 'F', libelle: 'Féminin' }];

export const statutData = [
    {
        id: 'Corps Academique',
        libelle: 'Corps Academique'
    },
    {
        id: 'Corps Scientifique',
        libelle: 'Corps Scientifique'
    },
    {
        id: 'Administratif',
        libelle: 'Administratif'
    },
    {
        id: 'Technique',
        libelle: 'Technique'
    },
    {
        id: 'Ouvrier',
        libelle: 'Ouvrier'
    },
];

export const permanenceData = [
    {
        id: 'Permanent',
        libelle: 'Permanent'
    },
    {
        id: 'Visiteur',
        libelle: 'Visiteur'
    },
];

export const privelegeData = [
    {
        id: 'direction',
        libelle: 'Agent de direction'
    },
    {
        id: 'patrimoine',
        libelle: 'Patrimoine'
    },
    {
        id: 'standard',
        libelle: 'Agent Standard'
    },
];

export const primesOptions = [
    {
        id: 'Prime de risque',
        libelle: 'Prime de risque'
    },
    {
        id: 'Prime ancienneté',
        libelle: 'Prime ancienneté'
    },
    {
        id: 'Prime de pénibilité',
        libelle: 'Prime de pénibilité'
    },
    {
        id: 'Prime de naissance',
        libelle: 'Prime de naissance'
    },
    {
        id: 'Gratification',
        libelle: 'Gratification'
    },
    {
        id: 'Divers',
        libelle: 'Divers'
    },
];

export const maladiesOptions = [
    {
        id: 'Maladie',
        libelle: 'Maladie'
    },
    {
        id: 'Accident',
        libelle: 'Accident'
    },
];

export const deductionsOptions = [
    {
        id: 'Pensions',
        libelle: 'Pensions'
    },
    {
        id: 'Indemnités',
        libelle: 'Indemnités'
    },
    {
        id: 'Avances',
        libelle: 'Avances sur salaire'
    },
    {
        id: 'Retenus fiscales',
        libelle: 'Retenus fiscales'
    },
    {
        id: 'Cas sociaux',
        libelle: 'Cas sociaux'
    },
    {
        id: 'Divers',
        libelle: 'Divers'
    },
];

export const yearsOptions = [
    { id: '2023', libelle: '2023' },
    { id: '2024', libelle: '2024' },
    { id: '2025', libelle: '2025' },
    { id: '2026', libelle: '2026' },
    { id: '2027', libelle: '2027' },
    { id: '2028', libelle: '2028' },
];

export const mounthOptions = [
    { id: '01', libelle: 'Janvier' },
    { id: '02', libelle: 'Février' },
    { id: '03', libelle: 'Mars' },
    { id: '04', libelle: 'Avril' },
    { id: '05', libelle: 'Mai' },
    { id: '06', libelle: 'Juin' },
    { id: '07', libelle: 'Juillet' },
    { id: '08', libelle: 'Août' },
    { id: '09', libelle: 'Septembre' },
    { id: '10', libelle: 'Octobre' },
    { id: '11', libelle: 'Novembre' },
    { id: '12', libelle: 'Décembre' },
];

export const kanbanGrid = [
    {
        headerText: 'A Faire',
        keyField: 'Open',
        allowToggle: true
    },

    {
        headerText: 'En cours',
        keyField: 'InProgress',
        allowToggle: true
    },

    {
        headerText: 'Terminé',
        keyField: 'Close',
        allowToggle: true
    },
];

export const statusTask = [
    {
        id: 'Open',
        label: 'A faire'
    },
    {
        id: 'InProgress',
        label: 'En cours'
    },
    {
        id: 'Close',
        label: 'Terminé'
    },
];

export const prioriteTask = [
    {
        id: 'Low',
        label: 'Faible'
    },
    {
        id: 'Normal',
        label: 'Normal'
    },
    {
        id: 'High',
        label: 'Elevé'
    },
];