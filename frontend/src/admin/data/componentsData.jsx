import { FiUsers, FiTarget } from 'react-icons/fi';
import { MdAttachMoney, MdSocialDistance, MdOutlineAccountBalance } from 'react-icons/md';
import { SiProcesswire } from 'react-icons/si';
import { VscTasklist } from 'react-icons/vsc';
import { AiFillWechat } from 'react-icons/ai';
import { ImCogs } from "react-icons/im";

function dayDiff(d1, d2) {
    return Number((d2?.getTime() - d1?.getTime()) / 31536000000).toFixed(2);
}

export const sidebardData = [
    {
        to: '/index/agents',
        icon: <FiUsers />,
        label: 'Agents'
    },
    {
        to: '/index/pres-conges',
        icon: <FiTarget />,
        label: 'Présences/congés'
    },
    {
        to: '/index/paie',
        icon: <MdAttachMoney />,
        label: 'Paie'
    },
    {
        to: '/index/on-offboarding',
        icon: <SiProcesswire />,
        label: 'On-offboarding'
    },
    {
        to: '/index/cassoc',
        icon: <MdSocialDistance />,
        label: 'Cas sociaux'
    },
    {
        to: '/index/tasklist',
        icon: <VscTasklist />,
        label: 'Liste tâches'
    },
    {
        to: '/index/patrimoine',
        icon: <MdOutlineAccountBalance />,
        label: 'Patrimoine'
    },
    {
        to: '/index/chat',
        icon: <AiFillWechat />,
        label: 'Chat'
    },
    {
        to: '/index/config',
        icon: <ImCogs />,
        label: 'Configurations'
    },
];

const agentGridName = (props) => (
    <div className="image flex gap-4">
        <div>
            <p>{props.nom} {props.postnom} {props.prenom}</p>
            <p>{props.matricule}</p>
        </div>
    </div>
);
const agentGridImages = (props) => (
    <div className="image flex gap-4 w-20 h-20">
        <img
            className="rounded-md w-20 h-20 object-cover"
            src={props.imageUrl}
            alt="employee"
        />
    </div>
);

const agentPermanenceTemplate = ({ permanence }) => (
    <div className="flex gap-2 items-center text-gray-700 capitalize">
        <p className={`${permanence === 'Permanent' ? 'bg-teal-400' : 'bg-amber-400'} rounded-full h-3 w-3`} />
        <p>{permanence}</p>
    </div>
);

const bienAgeTemplate = ({ duree }) => (
    <div className='flex gap-2'>
        <p>{duree}</p>
        <p>ans</p>
    </div>
);

const vncTableTemplate = ({ duree, createdAt, valNetComptable }) => {
    const created = dayDiff(new Date(createdAt), new Date());
    return <div className='flex gap-3'>
        <p className={`${duree / 2 >= created ? 'bg-green-600' : created >= 2 ? 'bg-amber-600' : 'bg-red-600'} rounded-full h-3 w-3`}></p>
        <p>{valNetComptable}</p>
    </div>
};

export const agentTableHeader = [
    { type: 'checkbox', width: '50' },
    {
        headerText: 'Image',
        width: '120',
        template: agentGridImages
    },
    {
        headerText: 'Agent',
        width: '120',
        field: 'nom',
    },
    {
        headerText: '',
        width: '120',
        field: 'postnom',
    },
    {
        headerText: '',
        width: '120',
        field: 'prenom',
    },
    {
        headerText: 'Matricule',
        width: '180',
        field: 'matricule',
        textAlign: 'Center'
    },
    {
        field: 'grade.titre',
        headerText: 'Titre',
        width: '',
        textAlign: 'Center'
    },
    {
        headerText: 'Permanence',
        width: '',
        textAlign: 'Left',
        template: agentPermanenceTemplate
    },
    {
        field: 'statut',
        headerText: 'Statut',
        width: '',
        textAlign: 'Left'
    },
];

export const bienTableHeader = [
    {
        headerText: 'DESIGNATION',
        field: 'libelle',
        textAlign: 'Left'
    },
    {
        headerText: 'DUREE',
        template: bienAgeTemplate,
        textAlign: 'Left'
    },
    {
        headerText: 'VAL ACQUISITION',
        field: 'valDepart',
        textAlign: 'Center'
    },
    {
        headerText: 'CATEGORIE',
        field: 'categBien.libelle',
        textAlign: 'Center'
    },
    {
        headerText: 'SERVICE',
        field: 'service',
        textAlign: 'Center'
    },
];

export const bienTableSituationAmHeader = [
    {
        headerText: 'DESIGNATION',
        field: 'libelle',
        textAlign: 'Left'
    },
    {
        headerText: 'DUREE',
        template: bienAgeTemplate,
        textAlign: 'Left'
    },
    {
        headerText: 'VAL ACQUISITION',
        field: 'valDepart',
        textAlign: 'Center'
    },
    {
        headerText: 'VNC',
        template: vncTableTemplate,
        textAlign: 'Center'
    },
    {
        headerText: 'CATEGORIE',
        field: 'categBien.libelle',
        textAlign: 'Center'
    },
];

export const bienTableAmortisHeader = [
    {
        headerText: 'ID',
        field: 'id'.slice(0, 7),
        textAlign: 'Left'
    },
    {
        headerText: 'CATEGORIE',
        field: 'categBien.libelle',
        textAlign: 'Center'
    },
    {
        headerText: 'DESIGNATION',
        field: 'libelle',
        textAlign: 'Left'
    },
    {
        headerText: 'DUREE',
        template: bienAgeTemplate,
        textAlign: 'Left'
    },
    {
        headerText: 'VAL ACQUISITION',
        field: 'valDepart',
        textAlign: 'Center'
    },
];

export const paiemLinks = [
    {
        path: 'salaire',
        titre: 'Salaires'
    },
    {
        path: 'hsupp',
        titre: 'Heures Supp.'
    },
    {
        path: 'feries',
        titre: 'Feriés'
    },
    {
        path: 'primes',
        titre: 'Primes'
    },
    {
        path: 'conges',
        titre: 'Congés'
    },
    {
        path: 'maladies',
        titre: 'Maladies & Accid'
    },
    {
        path: 'retenues',
        titre: 'Déductions'
    },
    {
        path: 'alloc',
        titre: 'Allocations'
    },
    {
        path: 'liste',
        titre: 'Liste de paie'
    },
];

export const inventaireLinks = [
    {
        path: 'dashboard',
        titre: 'Dashboard'
    },
    {
        path: 'mouvement',
        titre: 'Mouvements'
    }
];

export const patrimoineLinks = [
    {
        path: 'overview',
        titre: 'Overview'
    },
    {
        path: 'adds',
        titre: 'Opérations'
    },
    {
        path: 'rapports',
        titre: 'Rapports'
    },
]