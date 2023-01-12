import { useStateContext } from '../../../../context/ContextProvider';
import HeaderSalaire from '../HeaderSalaire';
import Allocation from './salaireComponents/Allocation';
import Conges from './salaireComponents/Conges';
import Deduction from './salaireComponents/Deduction';
import Feries from './salaireComponents/Feries';
import HeureSup from './salaireComponents/HeureSup';
import MaladAcc from './salaireComponents/MaladAcc';
import Primes from './salaireComponents/Primes';
import SalaireBase from './salaireComponents/salaireBase';

const Salaire = () => {
    const { agentToPay, mounthParams, setMounthParams } = useStateContext();

    return (
        <div className='mt-2 mr-[310px] mb-10'>
            <HeaderSalaire />
            <div>
                <SalaireBase />
                <HeureSup />
                <Feries />
                <Conges />
                <Primes />
                <MaladAcc />
                <Deduction />
                <Allocation />
            </div>
        </div>
    )
}

export default Salaire