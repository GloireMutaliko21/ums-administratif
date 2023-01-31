import React, { useEffect, useState } from 'react';

import { handleGet } from '../../../api/get';
import { useStateContext } from '../../../context/ContextProvider';
import { CASSOC_BASE_URL } from '../../../utils/constants';

const SouscriptionsList = ({ idCase }) => {
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

    return (
        <div>
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
                            <tr key={datum.idc}>
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
        </div>
    );
}

export default SouscriptionsList;