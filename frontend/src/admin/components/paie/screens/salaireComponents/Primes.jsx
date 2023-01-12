import React from 'react'

const Primes = ({ risque, anciennete, penibilite, naissance, gratification, divers, total }) => {
    return (
        <div>
            <div className='mt-4'>
                <table className='w-full border'>
                    <tr>
                        <td className='border px-3 w-1/3 font-bold' rowSpan='6'>Primes</td>
                        <td className='border px-3 w-1/3 text-slate-500'>Primes de risque</td>
                        <td className='border px-3 w-1/3'>{risque}</td>
                    </tr>
                    <tr>
                        <td className='border px-3 w-1/3 text-slate-500'>Primes d'ancienneté</td>
                        <td className='border px-3 w-1/3'>{anciennete}</td>
                    </tr>
                    <tr>
                        <td className='border px-3 w-1/3 text-slate-500'>Primes de pénibilité</td>
                        <td className='border px-3 w-1/3'>{penibilite}</td>
                    </tr>
                    <tr>
                        <td className='border px-3 w-1/3 text-slate-500'>Naissance</td>
                        <td className='border px-3 w-1/3'>{naissance}</td>
                    </tr>
                    <tr>
                        <td className='border px-3 w-1/3 text-slate-500'>Gratifications</td>
                        <td className='border px-3 w-1/3'>{gratification}</td>
                    </tr>
                    <tr>
                        <td className='border px-3 w-1/3 text-slate-500'>Divers</td>
                        <td className='border px-3 w-1/3'>{divers}</td>
                    </tr>
                    <tr>
                        <td className='border px-3 w-1/3 text-slate-700 font-bold text-center' colSpan='2'>Total Primes</td>
                        <td className='border px-3 w-1/3 text-slate-700'>{total}</td>
                    </tr>
                </table>
            </div>
        </div>
    )
}

export default Primes;