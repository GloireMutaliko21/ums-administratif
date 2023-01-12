import { useStateContext } from '../../../../context/ContextProvider';
import HeaderSalaire from '../HeaderSalaire';
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
            </div>
        </div>
    )
}

export default Salaire