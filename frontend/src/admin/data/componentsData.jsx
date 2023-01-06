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

export const agentTableHeader = ['Agent', 'Titre', 'Permanence', 'Statut', ''];