import { FiUsers, FiTarget } from 'react-icons/fi';
import { MdAttachMoney, MdSocialDistance, MdOutlineAccountBalance } from 'react-icons/md';
import { SiProcesswire } from 'react-icons/si';
import { VscTasklist } from 'react-icons/vsc';
import { AiFillWechat } from 'react-icons/ai';

export const sidebardData = [
    {
        to: '/agents',
        icon: <FiUsers />,
        label: 'Agents'
    },
    {
        to: '/pres-conges',
        icon: <FiTarget />,
        label: 'Présences/congés'
    },
    {
        to: '/paie',
        icon: <MdAttachMoney />,
        label: 'Paie'
    },
    {
        to: '/on-offboarding',
        icon: <SiProcesswire />,
        label: 'On-offboarding'
    },
    {
        to: '/cassoc',
        icon: <MdSocialDistance />,
        label: 'Cas sociaux'
    },
    {
        to: '/taskList',
        icon: <VscTasklist />,
        label: 'Liste tâches'
    },
    {
        to: '/patrimoine',
        icon: <MdOutlineAccountBalance />,
        label: 'Patrimoine'
    },
    {
        to: '/chat',
        icon: <AiFillWechat />,
        label: 'Chat'
    },
];