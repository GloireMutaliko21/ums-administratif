import { useState } from 'react';

import { useStateContext } from '../../../../context/ContextProvider';
import Header from '../Header';
import { handleChange } from '../../../../utils/onChange';
import Button from '../../../../components/Button';
import { handlePost } from '../../../../api/post';
import { PAIE_BASE_URL } from '../../../../utils/constants';
import ClickLoad from '../../../../components/Loaders/ClickLoad';

const Hsuppl = () => {
    const { agentToPay } = useStateContext();

    const [inLoading, setInLoading] = useState(false);

    const [nombre, setNombre] = useState();
    const [taux, setTaux] = useState();

    const headers = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer 'token'}`
    };

    return (
        <div className='mt-2 mr-[310px]'>
            <Header title='Heures supplémentaires' />
            <section className='flex items-center gap-8'>
                <div className='flex flex-col'>
                    <input
                        type="number"
                        name='nombre'
                        placeholder='Nombre heures'
                        className='border placeholder:text-sm placeholder:text-sky-500  p-2 rounded-md outline-none my-2 w-64'
                        onChange={(e) => handleChange(e, setNombre)}
                    />
                    <input
                        type="number"
                        name='taux'
                        placeholder='Taux horaire'
                        className='border placeholder:text-sm placeholder:text-sky-500  p-2 rounded-md outline-none my-2 w-64'
                        onChange={(e) => handleChange(e, setTaux)}
                    />
                </div>
                <div className='border-t py-2 px-4 shadow flex flex-col items-center gap-3 text-center'>
                    <span className='text-slate-700'>Total dû ($) : </span>
                    <div className='min-h-min h-12 min-w-min w-12 flex items-center justify-center border-4 border-sky-500 text-2xl text-amber-500 font-extrabold rounded-full'>
                        <p> {isNaN(nombre * taux) ? '0' : nombre * taux}</p>
                    </div>
                </div>
            </section>
            <Button
                label={inLoading ? <ClickLoad text='Traitement' /> : 'Enregistrer'}
                style='mt-2 flex justify-center p-[9px] w-64 bg-sky-500 text-white hover:bg-sky-400'
                onClick={() => {
                    handlePost('', headers, JSON.stringify({ nombre, taux, agentId: agentToPay.id }), `${PAIE_BASE_URL}/heuresupp/new`, () => { }, '', setInLoading, () => { }, `${PAIE_BASE_URL}/heuresupp/${agentToPay.id}?mounth=2023-01`, () => { }, () => { });
                }}
            />
        </div>
    );
}

export default Hsuppl;