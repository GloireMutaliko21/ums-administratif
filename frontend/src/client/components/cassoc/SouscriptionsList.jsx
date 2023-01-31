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


    return (
        <div>
            <table className='w-full border'>
                <thead>
                    <tr>
                        <td className='text-center border'>Agent</td>
                        <td className='text-center border'>Montant</td>
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
                </tbody>
            </table>
        </div>
    );
}

export default SouscriptionsList;