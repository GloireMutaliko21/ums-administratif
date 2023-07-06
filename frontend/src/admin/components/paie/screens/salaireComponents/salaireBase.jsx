import React from 'react'
import { useStateContext } from '../../../../../context/ContextProvider';

const SalaireBase = ({ jourheure }) => {
    const { agentToPay } = useStateContext();

    return (
        <div className='mt-3 shadow'>
            <table className='w-full border'>
                <tr>
                    <td className='border px-3 w-1/3 font-bold' rowSpan='3'>Salaires</td>
                    <td className='border px-3 w-1/3 text-slate-500'>Salaire de base</td>
                    <td className='border px-3 w-1/3'>{jourheure}</td>
                </tr>
                <tr>
                    <td className='border px-3 w-1/3 text-slate-500'>Taux</td>
                    <td className='border px-3 w-1/3'>{agentToPay?.grade.taux.base}</td>
                </tr>
                <tr className='bg-amber-50 font-semibold border-slate-900'>
                    <td className='border px-3 w-1/3'>Total</td>
                    <td className='border px-3 w-1/3'>
                        {isNaN(jourheure * agentToPay?.grade.taux.base) ? 0 : jourheure * agentToPay?.grade.taux.base}
                    </td>
                </tr>
            </table>
        </div>
    );
}

export default SalaireBase;