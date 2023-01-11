import { useStateContext } from '../../../../context/ContextProvider';
import Header from '../Header';

const Hsuppl = () => {
    const { agentToPay, setAgentToPay } = useStateContext();

    return (
        <div className='mt-2 mr-[310px]'>
            <Header title='Heures supplémentaires' />
        </div>
    )
}

export default Hsuppl