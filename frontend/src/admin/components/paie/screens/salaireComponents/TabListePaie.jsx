import React, { useEffect, useRef, useState } from 'react';
import ReactToPrint from 'react-to-print';

import { useStateContext } from '../../../../../context/ContextProvider';
import { handleGet } from '../../../../../api/get';
import { PAIE_BASE_URL } from '../../../../../utils/constants';
import Entete from '../../../docs/Entete';

const TabListePaie = React.forwardRef((props, ref) => {
    const listeRef = useRef();

    const { localUserData, mounthParams, isFetchPaie } = useStateContext();

    const [listePaiedata, setListePaiedata] = useState({});

    useEffect(() => {
        handleGet(
            localUserData?.token,
            `${PAIE_BASE_URL}/salaire/listepaie?month=${mounthParams.year}-${mounthParams.mounth}`,
            setListePaiedata,
            ''
        );
    }, [isFetchPaie.listePaie, mounthParams.year, mounthParams.mounth]);

    console.log(listePaiedata);

    const sTotaux = {
        salaires: listePaiedata?.data?.map(item => item.salaires)?.reduce((a, c) => a + c, 0),
        heureSupp: listePaiedata?.data?.map(item => item.heureSupp)?.reduce((a, c) => a + c, 0),
        ferie: listePaiedata?.data?.map(item => item.ferie)?.reduce((a, c) => a + c, 0),
        conge: listePaiedata?.data?.map(item => item.conge)?.reduce((a, c) => a + c, 0),
        prime: listePaiedata?.data?.map(item => JSON.parse(item.prime))?.reduce((a, c) => a + c, 0),
        maladie: listePaiedata?.data?.map(item => item.maladie)?.reduce((a, c) => a + c, 0),
        deduction: listePaiedata?.data?.map(item => JSON.parse(item.deduction))?.reduce((a, c) => a + c, 0),
        allocation: listePaiedata?.data?.map(item => item.allocation)?.reduce((a, c) => a + c, 0),
    };

    function Liste() {
        return (
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
                                <td className='border px-2 text-left text-slate-800'>
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
                                <td className='border px-2 text-center text-sky-600 font-bold bg-amber-100'>
                                    {salaires + heureSupp + ferie + conge + prime + maladie - deduction + allocation}
                                </td>
                            </tr>
                        )
                    }
                    <tr>
                        <td className='border px-2 text-right text-sky-600 font-bold text-xl bg-slate-100'>
                            Total
                        </td>
                        <td className='border px-2 text-right text-sky-600 font-bold bg-amber-100'>
                            {sTotaux.salaires}
                        </td>
                        <td className='border px-2 text-right text-sky-600 font-bold bg-amber-100'>
                            {sTotaux.heureSupp}
                        </td>
                        <td className='border px-2 text-right text-sky-600 font-bold bg-amber-100'>
                            {sTotaux.ferie}
                        </td>
                        <td className='border px-2 text-right text-sky-600 font-bold bg-amber-100'>
                            {sTotaux.conge}
                        </td>
                        <td className='border px-2 text-right text-sky-600 font-bold bg-amber-100'>
                            {sTotaux.prime}
                        </td>
                        <td className='border px-2 text-right text-sky-600 font-bold bg-amber-100'>
                            {sTotaux.maladie}
                        </td>
                        <td className='border px-2 text-right text-sky-600 font-bold bg-amber-100'>
                            {sTotaux.deduction}
                        </td>
                        <td className='border px-2 text-right text-sky-600 font-bold bg-amber-100'>
                            {sTotaux.allocation}
                        </td>
                        <td className='border px-2 text-center text-sky-800 font-bold text-2xl bg-amber-200'>
                            {Object.values(sTotaux).reduce((a, r) => a + r, 0) - (sTotaux.deduction * 2)}
                        </td>
                    </tr>
                </tbody>
            </table>
        );
    }

    return (
        <div className='mt-3'>
            <div>
                <Liste />
                <div className='hidden font-sans'>
                    <div ref={listeRef}>
                        <div className='flex flex-col justify-center items-center'>
                            <Entete />
                            <h1 className='text-center text-2xl font-bold font-sans text-sky-500 mb-5'>Liste de paie {mounthParams.mounth}-{mounthParams.year}</h1>
                        </div>
                        <div className='border border-sky-600'></div>
                        <Liste />
                    </div>
                </div>
            </div>
            <div className='flex justify-end mt-3'>
                <ReactToPrint
                    trigger={() => <button className='py-2 px-10 bg-sky-500 rounded-sm hover:shadow-xl text-white'>Imprimer</button>}
                    content={() => listeRef.current}
                    copyStyles={true}
                    pageStyle="@page {size: a4}"
                />
            </div>
        </div>
    );
})

export default TabListePaie;