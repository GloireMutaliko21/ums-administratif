import React from 'react'

const Deduction = ({ pensions, indemnites, avances, impots, cassoc, divers, total }) => {
    return (
        <div className='mt-4 shadow'>
            <table className='w-full border'>
                <tr>
                    <td className='border px-3 w-1/3 font-bold' rowSpan='6'>Déductions</td>
                    <td className='border px-3 w-1/3 text-slate-500'>Pensions</td>
                    <td className='border px-3 w-1/3'>{pensions}</td>
                </tr>
                <tr>
                    <td className='border px-3 w-1/3 text-slate-500'>Indemnités</td>
                    <td className='border px-3 w-1/3'>{indemnites}</td>
                </tr>
                <tr>
                    <td className='border px-3 w-1/3 text-slate-500'>Avances sur salaire</td>
                    <td className='border px-3 w-1/3'>{avances}</td>
                </tr>
                <tr>
                    <td className='border px-3 w-1/3 text-slate-500'>Retenues fiscales</td>
                    <td className='border px-3 w-1/3'>{impots}</td>
                </tr>
                <tr>
                    <td className='border px-3 w-1/3 text-slate-500'>Cas sociaux</td>
                    <td className='border px-3 w-1/3'>{cassoc}</td>
                </tr>
                <tr>
                    <td className='border px-3 w-1/3 text-slate-500'>Divers</td>
                    <td className='border px-3 w-1/3'>{divers}</td>
                </tr>
                <tr className='bg-pink-50 font-semibold text-slate-800'>
                    <td className='border px-3 w-1/3 font-bold text-center' colSpan='2'>Total Déductions</td>
                    <td className='border px-3 w-1/3'>{total}</td>
                </tr>
            </table>
        </div>
    );
}

export default Deduction;