import { useStateContext } from '../../../../context/ContextProvider';
import HeaderSalaire from '../HeaderSalaire';

const Salaire = () => {
    const { agentToPay, mounthParams, setMounthParams } = useStateContext();

    return (
        <div className='mt-2 mr-[310px]'>
            <HeaderSalaire />

        </div>
    )
}

export default Salaire