import DashboardInvent from "../screens/inventaire/Dashboard";
import Mouvements from '../screens/inventaire/Mouvements';

export const inventaireRoutes = [
    {
        path: '/index/cinventaire/',
        element: <DashboardInvent />
    },
    {
        path: '/index/cinventaire/dashboard',
        element: <DashboardInvent />
    },
    {
        path: '/index/cinventaire/mouvement',
        element: <Mouvements />
    },
];