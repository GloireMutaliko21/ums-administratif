import { useRef, useState } from 'react';
import ReactToPrint from 'react-to-print';

import { handlePost } from '../../../../api/post';
import Button from '../../../../components/Button';
import ClickLoad from '../../../../components/Loaders/ClickLoad';
import { useStateContext } from '../../../../context/ContextProvider';
import { PAIE_BASE_URL } from '../../../../utils/constants';
import { handleChange } from '../../../../utils/onChange';
import { maladiesOptions } from '../../../data/SelectData';
import RecuHeureSupp from '../../docs/recuHeureSupp';
import Header from '../Header';
const Maladies = () => {
    const { agentToPay } = useStateContext();

    const [inLoading, setInLoading] = useState(false);

    const [jours, setJours] = useState();
    const [taux, setTaux] = useState();
    const [libelle, setLibelle] = useState();
    const [totalMois, setTotalMois] = useState();

    const recuRef = useRef();

    const beneficiaire = JSON.parse(localStorage.getItem('newMaladie'));

    const headers = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer 'token'`
    };

    return (
        <div className='mt-2 mr-[310px]'>
            <Header title='Jours de maladie et Accident' />
            <section className='flex items-start gap-8 2xl:gap-0 w-full justify-around 2xl:justify-evenly mt-8 p-5 shadow border-t'>
                <div className='flex flex-col'>
                    <input
                        type="number"
                        name='jours'
                        placeholder='Nombre jours'
                        className='border placeholder:text-sm placeholder:text-sky-500  p-2 rounded-md outline-none mb-2 w-64'
                        onChange={(e) => handleChange(e, setJours)}
                    />
                    <input
                        type="number"
                        name='taux'
                        placeholder='Taux journalier'
                        className='border placeholder:text-sm placeholder:text-sky-500  p-2 rounded-md outline-none mb-2 w-64'
                        onChange={(e) => handleChange(e, setTaux)}
                    />
                    <select
                        value={libelle}
                        onChange={(e) => handleChange(e, setLibelle)}
                        className="w-full text-gray-700 focus:outline-none bg-white focus:shadow-outline border border-gray-300 rounded py-2 mt-[5px] px-1 block"
                    >
                        <option value="" disabled hidden selected>Libellé</option>
                        {maladiesOptions.map((option) =>
                            <option
                                key={option.id}
                                value={`${option.id}`}
                                className='capitalize'
                            >
                                {option.libelle}
                            </option>
                        )}
                    </select>
                    <Button
                        label={inLoading ? <ClickLoad text='Traitement' /> : 'Enregistrer'}
                        style='mt-2 flex justify-center p-[9px] w-64 bg-sky-500 text-white hover:bg-sky-400'
                        onClick={() => {
                            handlePost('', headers, JSON.stringify({ jours, taux, libelle, agentId: agentToPay.id }), `${PAIE_BASE_URL}/maladie/new`, setTotalMois, 'newMaladie', setInLoading, () => { }, `${PAIE_BASE_URL}/maladie/${agentToPay.id}?mounth=2023-01`, () => { }, () => { });
                        }}
                    />
                </div>
                <div className='border-t py-2 px-4 shadow flex flex-col items-center gap-3 text-center'>
                    <span className='text-slate-700'>Total dû ($) : </span>
                    <div className='min-h-min h-12 min-w-min w-12 flex items-center justify-center border-4 border-sky-500 text-2xl text-amber-500 font-extrabold rounded-full'>
                        <p> {isNaN(jours * taux) ? '0' : jours * taux}</p>
                    </div>
                </div>
                {totalMois &&
                    <div className='shadow p-4 border-t-4 border-sky-500 rounded-t-lg'>
                        <div>
                            <RecuHeureSupp
                                ref={recuRef}
                                title={libelle}
                                nom={beneficiaire?.data?.agent?.nom}
                                postnom={beneficiaire?.data?.agent?.postnom}
                                totalPaie={beneficiaire?.data?.jours * beneficiaire?.data?.taux}
                                totalMois={totalMois?.data[0]?.total}
                            />
                        </div>
                        <div className='w-full flex justify-end mt-4'>
                            <ReactToPrint
                                trigger={() => <button className='p-1 border-[0.2px] border-sky-500 text-sm text-sky-500 hover:text-red-600'>Imprimer</button>}
                                content={() => recuRef.current}
                                pageStyle="@page {size: 2.5in 4in}"
                                onAfterPrint={() => {
                                    localStorage.removeItem('newMaladie');
                                }}
                            />
                        </div>
                    </div>
                }
            </section>
        </div>
    )
}

export default Maladies