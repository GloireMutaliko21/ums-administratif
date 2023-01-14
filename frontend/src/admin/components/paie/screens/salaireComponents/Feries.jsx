import { useEffect } from 'react';

import { handleGet } from '../../../../../api/get';
import { useStateContext } from '../../../../../context/ContextProvider';
import { PAIE_BASE_URL } from '../../../../../utils/constants';

const Feries = () => {
    const { localUserData, agentToPay, mounthParams, isFetchPaie, setIsFetchPaie, feriesData, setFeriesData } = useStateContext();

    useEffect(() => {
        if (isFetchPaie.ferie) {
            handleGet(
                localUserData.token,
                `${PAIE_BASE_URL}/ferie/${agentToPay?.id}?mounth=${mounthParams.year}-${mounthParams.mounth}`,
                setFeriesData,
                ''
            )
        }

        return () => {
            setIsFetchPaie({ ...isFetchPaie, feriesData: false });
        }
    }, [isFetchPaie.ferie, mounthParams, agentToPay])

    return (
        <div className='mt-4 shadow'>
            <table className='w-full border'>
                <tr>
                    <td className='border px-3 w-1/3 font-bold' rowSpan='3'>Jours fériés/Chômés...</td>
                    <td className='border px-3 w-1/3 text-slate-500'>Nombre jours</td>
                    <td className='border px-3 w-1/3'>{feriesData?.data[0].jours === null ? 0 : feriesData?.data[0].jours}</td>
                </tr>
                <tr>
                    <td className='border px-3 w-1/3 text-slate-500'>Taux</td>
                    <td className='border px-3 w-1/3'>{agentToPay?.grade.taux.ferie}</td>
                </tr>
                <tr className='bg-pink-50 font-semibold border-slate-900'>
                    <td className='border px-3 w-1/3'>Total</td>
                    <td className='border px-3 w-1/3'>{feriesData?.data[0].total === null ? 0 : feriesData?.data[0].total}</td>
                </tr>
            </table>
        </div>
    );
}

export default Feries;