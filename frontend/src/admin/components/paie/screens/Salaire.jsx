import { useStateContext } from '../../../../context/ContextProvider';
import HeaderSalaire from '../HeaderSalaire';
import Feries from './salaireComponents/Feries';
import HeureSup from './salaireComponents/HeureSup';
import SalaireBase from './salaireComponents/salaireBase';

const Salaire = () => {
    const { agentToPay, mounthParams, setMounthParams } = useStateContext();

    return (
        <div className='mt-2 mr-[310px]'>
            <HeaderSalaire />
            <div>
                <SalaireBase />
                <HeureSup />
                <Feries />
            </div>
        </div>
    )
}

export default Salaire