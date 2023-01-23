import Overview from "../screens/patrimoine/Overview";
import Rapports from "../screens/patrimoine/Rapports";
import Operations from "../screens/patrimoine/Operations";

export const patrimoineRoutes = [
    {
        path: '/index/cpatrimoine/',
        element: <Overview />
    },
    {
        path: '/index/cpatrimoine/overview',
        element: <Overview />
    },
    {
        path: '/index/cpatrimoine/adds',
        element: <Operations />
    },
    {
        path: '/index/cpatrimoine/rapports',
        element: <Rapports />
    },
];