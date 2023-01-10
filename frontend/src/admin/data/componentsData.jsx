import { FiUsers, FiTarget } from 'react-icons/fi';
import { MdAttachMoney, MdSocialDistance, MdOutlineAccountBalance } from 'react-icons/md';
import { SiProcesswire } from 'react-icons/si';
import { VscTasklist } from 'react-icons/vsc';
import { AiFillWechat } from 'react-icons/ai';

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
];

const agentGridImage = (props) => (
    <div className="image flex gap-4">
        <img
            className="rounded-full w-10 h-10"
            src={props.imageUrl}
            alt="employee"
        />
        <div>
            <p>{props.nom} {props.postnom} {props.prenom}</p>
            <p>{props.matricule}</p>
        </div>
    </div>
);

const agentPermanenceTemplate = ({ permanence }) => (
    <div className="flex gap-2 items-center text-gray-700 capitalize">
        <p className={`${permanence === 'Permanent' ? 'bg-teal-400' : 'bg-amber-400'} rounded-full h-3 w-3`} />
        <p>{permanence}</p>
    </div>
);

export const agentTableHeader = [
    { type: 'checkbox', width: '20' },
    {
        headerText: 'Agent',
        width: '100',
        template: agentGridImage,
    },
    {
        field: 'grade.titre',
        headerText: 'Titre',
        width: '100',
        textAlign: 'Center'
    },
    {
        headerText: 'Permanence',
        width: '100',
        textAlign: 'Left',
        template: agentPermanenceTemplate
    },
    {
        field: 'statut',
        headerText: 'Statut',
        width: '100',
        textAlign: 'Left'
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
];