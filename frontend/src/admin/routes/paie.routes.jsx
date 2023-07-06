import Salaire from "../components/paie/screens/Salaire";
import Hsuppl from '../components/paie/screens/Hsuppl';
import Feries from '../components/paie/screens/Feries';
import Primes from '../components/paie/screens/Primes';
import Conges from '../components/paie/screens/Conges';
import Maladies from '../components/paie/screens/Maladies';
import Deductions from '../components/paie/screens/Deductions';
import Allocations from '../components/paie/screens/Allocations';
import ListePaie from '../components/paie/screens/ListePaie';

export const paieRoutes = [
    {
        path: '/index/paie/',
        element: <Salaire />
    },
    {
        path: '/index/paie/salaire',
        element: <Salaire />
    },
    {
        path: '/index/paie/hsupp',
        element: <Hsuppl />
    },
    {
        path: '/index/paie/feries',
        element: <Feries />
    },
    {
        path: '/index/paie/primes',
        element: <Primes />
    },
    {
        path: '/index/paie/conges',
        element: <Conges />
    },
    {
        path: '/index/paie/maladies',
        element: <Maladies />
    },
    {
        path: '/index/paie/retenues',
        element: <Deductions />
    },
    {
        path: '/index/paie/alloc',
        element: <Allocations />
    },
    {
        path: '/index/paie/liste',
        element: <ListePaie />
    },
]