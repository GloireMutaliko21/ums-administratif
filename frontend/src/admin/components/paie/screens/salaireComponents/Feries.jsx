import React from 'react'

const Feries = ({ nombre, taux, total }) => {
    return (
        <div className='mt-4 shadow'>
            <table className='w-full border'>
                <tr>
                    <td className='border px-3 w-1/3 font-bold' rowSpan='3'>Jours fériés/Chômés...</td>
                    <td className='border px-3 w-1/3 text-slate-500'>Nombre jours</td>
                    <td className='border px-3 w-1/3'>{nombre}</td>
                </tr>
                <tr>
                    <td className='border px-3 w-1/3 text-slate-500'>Taux</td>
                    <td className='border px-3 w-1/3'>{taux}</td>
                </tr>
                <tr className='bg-pink-50 font-semibold border-slate-900'>
                    <td className='border px-3 w-1/3'>Total</td>
                    <td className='border px-3 w-1/3'>{total}</td>
                </tr>
            </table>
        </div>
    );
}

export default Feries;