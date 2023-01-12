import React from 'react'

const SalaireBase = ({ taux, jourheure, total }) => {
    return (
        <div className='mt-3 shadow'>
            <table className='w-full border'>
                <tr>
                    <td className='border px-3 w-1/3 font-bold' rowSpan='3'>Salaires</td>
                    <td className='border px-3 w-1/3 text-slate-500'>Taux</td>
                    <td className='border px-3 w-1/3'>{taux}</td>
                </tr>
                <tr>
                    <td className='border px-3 w-1/3 text-slate-500'>Jours/heures</td>
                    <td className='border px-3 w-1/3'>{jourheure}</td>
                </tr>
                <tr className='bg-pink-50 font-semibold border-slate-900'>
                    <td className='border px-3 w-1/3'>Total</td>
                    <td className='border px-3 w-1/3'>{total}</td>
                </tr>
            </table>
        </div>
    );
}

export default SalaireBase;