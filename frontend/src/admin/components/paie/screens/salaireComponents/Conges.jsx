import { useEffect } from 'react';

import { handleGet } from '../../../../../api/get';
import { useStateContext } from '../../../../../context/ContextProvider';
import { PAIE_BASE_URL } from '../../../../../utils/constants';

const Conges = () => {
    const { localUserData, agentToPay, mounthParams, isFetchPaie, setIsFetchPaie, congePaieData, setCongePaieData, } = useStateContext();

    useEffect(() => {
        if (isFetchPaie.conges) {
            handleGet(
                localUserData?.token,
                `${PAIE_BASE_URL}/conge/${agentToPay?.id}?mounth=${mounthParams.year}-${mounthParams.mounth}`,
                setCongePaieData,
                ''
            )
        }

        return () => {
            setIsFetchPaie({ ...isFetchPaie, conges: false });
        }
    }, [isFetchPaie.conges, mounthParams, agentToPay])

    return (
        <div className='mt-4 shadow'>
            <table className='w-full border'>
                <tr>
                    <td className='border px-3 w-1/3 font-bold' rowSpan='3'>Congés</td>
                    <td className='border px-3 w-1/3 text-slate-500'>Jours</td>
                    <td className='border px-3 w-1/3'>{congePaieData?.data[0].jours === null ? 0 : congePaieData?.data[0].jours}</td>
                </tr>
                <tr>
                    <td className='border px-3 w-1/3 text-slate-500'>Taux</td>
                    <td className='border px-3 w-1/3'>{agentToPay?.grade.taux.conge}</td>
                </tr>
                <tr className='bg-pink-50 font-semibold border-slate-900'>
                    <td className='border px-3 w-1/3'>Total</td>
                    <td className='border px-3 w-1/3'>{congePaieData?.data[0].total === null ? 0 : congePaieData?.data[0].total}</td>
                </tr>
            </table>
        </div>
    );
}

export default Conges;