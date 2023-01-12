import { useEffect, useState } from 'react';

import { handleGet } from '../../../../../api/get';
import { useStateContext } from '../../../../../context/ContextProvider';
import { PAIE_BASE_URL } from '../../../../../utils/constants';

const HeureSup = ({ nombre, taux, total }) => {
    const { localUserData, agentToPay, mounthParams, isFetchPaie, setIsFetchPaie } = useStateContext();

    const [heureSuppData, setHeureSuppData] = useState();
    const [isFetch, setIsFetch] = useState(true);
    useEffect(() => {
        if (isFetchPaie.heuresupp) {
            handleGet(
                localUserData.token,
                `${PAIE_BASE_URL}/heuresupp/${agentToPay?.id}?mounth=${mounthParams.year}-${mounthParams.mounth}`,
                setHeureSuppData,
                ''
            )
        }
        console.log(heureSuppData);
        // console.log(agentToPay.id);
        // console.log(mounthParams);

        return () => {
            setIsFetchPaie({ ...isFetchPaie, heuresupp: false });
        }
    }, [isFetchPaie.heuresupp, mounthParams, agentToPay])


    return (
        <div className='mt-4 shadow'>
            <table className='w-full border'>
                <tr>
                    <td className='border px-3 w-1/3 font-bold' rowSpan='3'>Heures supplémentaires</td>
                    <td className='border px-3 w-1/3 text-slate-500'>Nombre d'heures</td>
                    <td className='border px-3 w-1/3'>{heureSuppData?.data[0].heures}</td>
                </tr>
                <tr>
                    <td className='border px-3 w-1/3 text-slate-500'>Taux</td>
                    <td className='border px-3 w-1/3'>{taux}</td>
                </tr>
                <tr className='bg-pink-50 font-semibold border-slate-900'>
                    <td className='border px-3 w-1/3'>Total</td>
                    <td className='border px-3 w-1/3'>{total}</td>
                </tr>
            </table>
        </div>
    );
}

export default HeureSup;