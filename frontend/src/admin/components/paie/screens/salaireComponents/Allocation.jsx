import React from 'react'

const Allocation = ({ nbEnfant, jours, taux, total, netPayer }) => {
    return (
        <div className='mt-4'>
            <table className='w-full border shadow-lg'>
                <tr>
                    <td className='border border-b-slate-700 px-3 w-1/3 font-bold' rowSpan='4'>Allocations familiales</td>
                    <td className='border px-3 w-1/3 text-slate-500'>Enfants bénéficiaires</td>
                    <td className='border px-3 w-1/3'>{nbEnfant}</td>
                </tr>
                <tr>
                    <td className='border px-3 w-1/3 text-slate-500'>Nombre de jours</td>
                    <td className='border px-3 w-1/3'>{jours}</td>
                </tr>
                <tr>
                    <td className='border px-3 w-1/3 text-slate-500'>Taux</td>
                    <td className='border px-3 w-1/3'>{taux}</td>
                </tr>
                <tr className='border-b bg-pink-50 font-semibold border-slate-900'>
                    <td className='border border-b-slate-700 px-3 w-1/3'>Total</td>
                    <td className='border border-b-slate-700 px-3 w-1/3'>{total}</td>
                </tr>
                <tr className='bg-pink-50 font-extrabold text-slate-800 border border-slate-700'>
                    <td className='p-4 w-1/3  text-center text-3xl' colSpan='2'>Net à payer</td>
                    <td className='px-3 w-1/3 text-2xl text-center border-l border-slate-700'>{netPayer} $</td>
                </tr>
            </table>
        </div>
    );
}

export default Allocation;