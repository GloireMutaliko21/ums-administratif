import { useStateContext } from '../../../../context/ContextProvider';
import HeaderSalaire from '../HeaderSalaire';
import SalaireBase from './salaireComponents/salaireBase';

const Salaire = () => {
    const { agentToPay, mounthParams, setMounthParams } = useStateContext();

    return (
        <div className='mt-2 mr-[310px]'>
            <HeaderSalaire />
            <div>
                <SalaireBase />
            </div>
        </div>
    )
}

export default Salaire