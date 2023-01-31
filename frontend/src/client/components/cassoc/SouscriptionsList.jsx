import React, { useEffect, useState } from 'react';

import { handleGet } from '../../../api/get';
import { useStateContext } from '../../../context/ContextProvider';
import { CASSOC_BASE_URL } from '../../../utils/constants';

const SouscriptionsList = ({ idCase, description, noms }) => {
    const { localUserData } = useStateContext();
    const [casocdata, setCasocdata] = useState();

    useEffect(() => {
        handleGet(
            localUserData?.token,
            `${CASSOC_BASE_URL}/souscription/${idCase}`,
            setCasocdata,
            ''
        )
    }, []);

    const totalSouscriptions = casocdata?.data?.map(souscription => souscription.montant).reduce((a, c) => a + c, 0);

    function TableSouscriptions() {
        return (
            <>
                <div>
                    <h1 className='text-sky-600 font-sans font-bold text-center text-2xl mb-5'>Souscriptions cas social</h1>
                </div>
                <div className='flex justify-between gap-10 items-start mb-5 text-start'>
                    <div className='w-48'>
                        <p className='underline'>Description</p>
                        <p>{description}</p>
                    </div>
                    <div>
                        <p className='underline'>Agent Concerné</p>
                        <p>{noms}</p>
                    </div>
                </div>
                <table className='w-full border text-slate-600'>
                    <thead>
                        <tr className='font-bold'>
                            <td className='text-center border px-10'>Agent</td>
                            <td className='text-center border px-10'>Montant</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            casocdata?.data?.map((datum) =>
                                <tr key={datum.id}>
                                    <td className='border text-left p-2'>
                                        {datum?.agent?.nom} {datum?.agent?.nom} {datum?.agent?.nom}
                                    </td>
                                    <td className='border text-center p-2'>{datum?.montant}</td>
                                </tr>
                            )
                        }
                        <tr>
                            <td className='border text-center text-slate-700 font-bold'>Total</td>
                            <td className='border text-center text-slate-700 font-bold'>{totalSouscriptions}</td>
                        </tr>
                    </tbody>
                </table>
            </>
        );
    }

    return (
        <div>
            <TableSouscriptions />
        </div>
    );
}

export default SouscriptionsList;