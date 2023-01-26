import { useEffect } from 'react';

import { handleGet } from '../../../../../api/get';
import { useStateContext } from '../../../../../context/ContextProvider';
import { PAIE_BASE_URL } from '../../../../../utils/constants';
const MaladAcc = ({ taux, total }) => {
    const { localUserData, agentToPay, mounthParams, isFetchPaie, setIsFetchPaie, maladAccData, setMaladAccData } = useStateContext();

    useEffect(() => {
        if (isFetchPaie.malad) {
            handleGet(
                localUserData?.token,
                `${PAIE_BASE_URL}/maladie/${agentToPay?.id}?mounth=${mounthParams.year}-${mounthParams.mounth}`,
                setMaladAccData,
                ''
            )
        }

        return () => {
            setIsFetchPaie({ ...isFetchPaie, malad: false });
        }
    }, [isFetchPaie.malad, mounthParams, agentToPay])

    return (
        <div className='mt-4 shadow'>
            <table className='w-full border'>
                <tr>
                    <td className='border px-3 w-1/3 font-bold' rowSpan='3'>Maladies ou accidents</td>
                    <td className='border px-3 w-1/3 text-slate-500'>Jours payés au 2/3</td>
                    <td className='border px-3 w-1/3'>{maladAccData?.data[0].jours === null ? 0 : maladAccData?.data[0].jours}</td>
                </tr>
                <tr>
                    <td className='border px-3 w-1/3 text-slate-500'>Taux journalier</td>
                    <td className='border px-3 w-1/3'>{agentToPay?.grade.taux.maladAcc}</td>
                </tr>
                <tr className='bg-pink-50 font-semibold border-slate-900'>
                    <td className='border px-3 w-1/3'>Total</td>
                    <td className='border px-3 w-1/3'>{maladAccData?.data[0].total === null ? 0 : maladAccData?.data[0].total}</td>
                </tr>
                <tr className='bg-pink-50 font-semibold border-slate-900'>
                    <td className='border p-3 w-1/3 font-extrabold text-2xl text-center' colSpan='2'>Total brut dû</td>
                    <td className='border px-3 w-1/3 font-bold text-xl text-center'>{isNaN(total) ? 0 : total} $</td>
                </tr>
            </table>
        </div>
    );
}

export default MaladAcc;