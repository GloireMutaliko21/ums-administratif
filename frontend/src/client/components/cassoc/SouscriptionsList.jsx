import React, { useEffect, useRef, useState } from 'react';
import ReactToPrint from 'react-to-print';

import { handleGet } from '../../../api/get';
import { useStateContext } from '../../../context/ContextProvider';
import { CASSOC_BASE_URL } from '../../../utils/constants';
import Entete from '../../../admin/components/docs/Entete';
import Button from '../../../components/Button';
import ClickLoad from '../../../components/Loaders/ClickLoad';
import { handleUpdate } from '../../../api/put';

const SouscriptionsList = ({ idCase, description, noms }) => {
    const { localUserData, setCassocFetch } = useStateContext();
    const [casocdata, setCasocdata] = useState();

    const [inLoading, setInLoading] = useState(false);
    const [fetchTime, setFetchTime] = useState(true);

    const souscrRef = useRef();

    useEffect(() => {
        if (fetchTime) {
            handleGet(
                localUserData?.token,
                `${CASSOC_BASE_URL}/souscription/${idCase}`,
                setCasocdata,
                ''
            );
        }
        return () => {
            setFetchTime(false)
        }

    }, [fetchTime]);

    const handleClose = async () => {
        const params = {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localUserData?.token}`
            },
        };
        await handleUpdate(`${CASSOC_BASE_URL}/close/${idCase}`, params);
        handleGet(localUserData?.token, `${CASSOC_BASE_URL}/all`, setCassocFetch, null);
    };

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
            <div>
                <TableSouscriptions />
            </div>
            <div className='hidden font-sans'>
                <div ref={souscrRef}>
                    <div className='flex flex-col justify-center items-center'>
                        <Entete />
                    </div>
                    <div className='border border-sky-600'></div>
                    <TableSouscriptions />
                </div>
            </div>
            <div className='flex justify-between items-center mt-3'>
                <ReactToPrint
                    trigger={() => <button className='py-2 px-10 bg-sky-500 rounded-sm hover:shadow-xl text-white'>Imprimer</button>}
                    content={() => souscrRef.current}
                    copyStyles={true}
                    pageStyle="@page {size: a4}"
                />
                <Button
                    label={inLoading ? <ClickLoad text='Enregistrement' /> : 'Cloturer'}
                    style='flex justify-center rounded-none bg-amber-500 hover:shadow-xl text-white py-2 px-10'
                    onClick={handleClose}
                />
            </div>
        </div>
    );
}

export default SouscriptionsList;