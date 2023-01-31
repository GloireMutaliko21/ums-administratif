import React, { useEffect, useState } from 'react';

import { useStateContext } from '../../../../../context/ContextProvider';
import { handleGet } from '../../../../../api/get';
import { PAIE_BASE_URL } from '../../../../../utils/constants';

const TabListePaie = () => {
    const { localUserData, mounthParams, isFetchPaie, setIsFetchPaie } = useStateContext();

    const [listePaiedata, setListePaiedata] = useState({});

    useEffect(() => {
        // if (isFetchPaie.listePaie) {
        handleGet(
            localUserData?.token,
            `${PAIE_BASE_URL}/salaire/listepaie?month=${mounthParams.year}-${mounthParams.mounth}`,
            setListePaiedata,
            ''
        );
        // }

        // return () => {
        //     setIsFetchPaie({ ...isFetchPaie, listePaie: false });
        // }
    }, [isFetchPaie.listePaie, mounthParams.year, mounthParams.mounth]);

    return (
        <div className='mt-3'>
            <table className='min-w-full leading-normal border'>
                <thead>
                    <tr className='text-sm'>
                        <th className='border py-2 bg-slate-100'>Agent</th>
                        <th className='border py-2 bg-slate-100'>Salaire</th>
                        <th className='border py-2 bg-slate-100'>H. Supp</th>
                        <th className='border py-2 bg-slate-100'>Fériés</th>
                        <th className='border py-2 bg-slate-100'>Congés</th>
                        <th className='border py-2 bg-slate-100'>Primes</th>
                        <th className='border py-2 bg-slate-100'>Mal/Acc</th>
                        <th className='border py-2 bg-slate-100'>Retenus</th>
                        <th className='border py-2 bg-slate-100'>Allocations</th>
                        <th className='border py-2 bg-slate-100 text-sky-600 text-xl font-bold'>Total</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        listePaiedata?.data?.map(({ nom, postnom, prenom, salaires, heureSupp, ferie, conge, prime, maladie, deduction, allocation }, idx) =>
                            <tr key={idx} className='text-slate-700'>
                                <td className='border px-2 text-right text-slate-800'>
                                    {nom} {postnom} {prenom}
                                </td>
                                <td className='border px-2 text-right'>
                                    {salaires}
                                </td>
                                <td className='border px-2 text-right'>
                                    {heureSupp}
                                </td>
                                <td className='border px-2 text-right'>
                                    {ferie}
                                </td>
                                <td className='border px-2 text-right'>
                                    {conge}
                                </td>
                                <td className='border px-2 text-right'>
                                    {prime}
                                </td>
                                <td className='border px-2 text-right'>
                                    {maladie}
                                </td>
                                <td className='border px-2 text-right'>
                                    {deduction}
                                </td>
                                <td className='border px-2 text-right'>
                                    {allocation}
                                </td>
                                <td className='border px-2 text-center text-sky-600 font-bold'>
                                    {salaires + heureSupp + ferie + conge + prime + maladie - deduction + allocation}
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    );
}

export default TabListePaie;