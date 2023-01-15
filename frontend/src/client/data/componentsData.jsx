import { FiTarget } from 'react-icons/fi';
import { MdAttachMoney, MdSocialDistance, MdOutlineAccountBalance } from 'react-icons/md';
import { SiProcesswire } from 'react-icons/si';
import { VscTasklist } from 'react-icons/vsc';
import { AiFillWechat } from 'react-icons/ai';

export const sidebardData = [
    {
        to: '/index/ctasklist',
        icon: <VscTasklist />,
        label: 'Tâches'
    },
    {
        to: '/index/cpres-conges',
        icon: <FiTarget />,
        label: 'Présences/congés'
    },
    {
        to: '/index/con-offboarding',
        icon: <SiProcesswire />,
        label: 'On-offboarding'
    },
    {
        to: '/index/ccassoc',
        icon: <MdSocialDistance />,
        label: 'Cas sociaux'
    },
    {
        to: '/index/chat',
        icon: <AiFillWechat />,
        label: 'Chat'
    },
];