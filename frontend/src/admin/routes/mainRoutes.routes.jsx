import Agents from '../screens/Agents';
import PresencesConges from '../screens/PresencesConges';
import Paie from '../screens/Paie';
import Boarding from '../screens/Boarding';
import CasSoc from '../screens/CasSoc';
import TaskList from '../screens/TaskList';
import Patrimoine from '../screens/Patrimoine';
import Chat from '../screens/Chat';

export const mainRoutes = [
    {
        path: '/',
        element: <Agents />
    },
    {
        path: '/agents',
        element: <Agents />
    },
    {
        path: '/pres-conges',
        element: <PresencesConges />
    },
    {
        path: '/paie',
        element: <Paie />
    },
    {
        path: '/on-offboarding',
        element: <Boarding />
    },
    {
        path: '/cassoc',
        element: <CasSoc />
    },
    {
        path: '/taskList',
        element: <TaskList />
    },
    {
        path: '/patrimoine',
        element: <Patrimoine />
    },
    {
        path: '/chat',
        element: <Chat />
    },
];