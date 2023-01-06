import Agents from '../screens/Agents';
import PresencesConges from '../screens/PresencesConges';
import Paie from '../screens/Paie';
import Boarding from '../screens/Boarding';
import CasSoc from '../screens/CasSoc';
import TaskList from '../screens/TaskList';
import Patrimoine from '../screens/Patrimoine';
import Chat from '../screens/Chat';

export const mainRoutesDirection = [
    {
        path: '/index',
        element: <Agents />
    },
    {
        path: '/index/agents',
        element: <Agents />
    },
    {
        path: '/index/pres-conges',
        element: <PresencesConges />
    },
    {
        path: '/index/paie',
        element: <Paie />
    },
    {
        path: '/index/on-offboarding',
        element: <Boarding />
    },
    {
        path: '/index/cassoc',
        element: <CasSoc />
    },
    {
        path: '/index/tasklist',
        element: <TaskList />
    },
    {
        path: '/index/patrimoine',
        element: <Patrimoine />
    },
    {
        path: '/index/chat',
        element: <Chat />
    },
];