import React from 'react'

const Conges = ({ jours, taux, total }) => {
    return (
        <div className='mt-4'>
            <table className='w-full border'>
                <tr>
                    <td className='border px-3 w-1/3 font-bold' rowSpan='3'>Congés</td>
                    <td className='border px-3 w-1/3 text-slate-500'>Jours</td>
                    <td className='border px-3 w-1/3'>{jours}</td>
                </tr>
                <tr>
                    <td className='border px-3 w-1/3 text-slate-500'>Taux</td>
                    <td className='border px-3 w-1/3'>{taux}</td>
                </tr>
                <tr>
                    <td className='border px-3 w-1/3 text-slate-500'>Total</td>
                    <td className='border px-3 w-1/3'>{total}</td>
                </tr>
            </table>
        </div>
    );
}

export default Conges;