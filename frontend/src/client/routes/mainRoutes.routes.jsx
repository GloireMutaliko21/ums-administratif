import PresencesConges from '../screens/PresencesConges';
import Boarding from '../screens/Boarding';
import CasSoc from '../screens/CasSoc';
import TaskList from '../screens/TaskList';
import Chat from '../screens/Chat';
import Patrimoine from '../screens/Patrimoine';
import Inventaire from '../screens/Inventaire';

export const mainRoutesClient = [
    {
        path: '/index',
        element: <TaskList />
    },
    {
        path: '/index/ctasklist',
        element: <TaskList />
    },
    {
        path: '/index/cpres-conges',
        element: <PresencesConges />
    },
    {
        path: '/index/con-offboarding',
        element: <Boarding />
    },
    {
        path: '/index/ccassoc',
        element: <CasSoc />
    },
    {
        path: '/index/chat',
        element: <Chat />
    },
    {
        path: '/index/cpatrimoine',
        element: <Patrimoine />
    },
    {
        path: '/index/cinventaire',
        element: <Inventaire />
    },
];