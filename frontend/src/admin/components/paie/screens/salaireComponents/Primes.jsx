import { useEffect } from 'react';

import { handleGet } from '../../../../../api/get';
import { useStateContext } from '../../../../../context/ContextProvider';
import { PAIE_BASE_URL } from '../../../../../utils/constants';
const Primes = ({ total }) => {
    const { localUserData, agentToPay, mounthParams, isFetchPaie, setIsFetchPaie, primeData, setPrimeData, totalPrime, setTotalPrime } = useStateContext();

    useEffect(() => {
        if (isFetchPaie.primes) {
            handleGet(
                localUserData.token,
                `${PAIE_BASE_URL}/prime/${agentToPay?.id}/prime?mounth=${mounthParams.year}-${mounthParams.mounth}`,
                setPrimeData,
                ''
            );
            handleGet(
                localUserData.token,
                `${PAIE_BASE_URL}/prime/${agentToPay?.id}?mounth=${mounthParams.year}-${mounthParams.mounth}`,
                setTotalPrime,
                ''
            );
        }
        return () => {
            setIsFetchPaie({ ...isFetchPaie, primes: false });
        }
    }, [isFetchPaie.primes, mounthParams, agentToPay]);

    const risque = primeData?.data?.find(categ => categ.libelle == 'Prime de risque')?.total;
    const anciennete = primeData?.data?.find(categ => categ.libelle == 'Prime ancienneté')?.total;
    const penibilite = primeData?.data?.find(categ => categ.libelle == 'Prime de pénibilité')?.total;
    const naissance = primeData?.data?.find(categ => categ.libelle == 'Prime de naissance')?.total;
    const gratification = primeData?.data?.find(categ => categ.libelle === 'Gratification')?.total
    const divers = primeData?.data?.find(categ => categ.libelle === 'Divers')?.total

    return (
        <div>
            <div className='mt-4 shadow'>
                <table className='w-full border'>
                    <tr>
                        <td className='border px-3 w-1/3 font-bold' rowSpan='6'>Primes</td>
                        <td className='border px-3 w-1/3 text-slate-500'>Primes de risque</td>
                        <td className='border px-3 w-1/3'>{risque ? risque : 0}</td>
                    </tr>
                    <tr>
                        <td className='border px-3 w-1/3 text-slate-500'>Primes d'ancienneté</td>
                        <td className='border px-3 w-1/3'>{anciennete ? anciennete : 0}</td>
                    </tr>
                    <tr>
                        <td className='border px-3 w-1/3 text-slate-500'>Primes de pénibilité</td>
                        <td className='border px-3 w-1/3'>{penibilite ? penibilite : 0}</td>
                    </tr>
                    <tr>
                        <td className='border px-3 w-1/3 text-slate-500'>Naissance</td>
                        <td className='border px-3 w-1/3'>{naissance ? naissance : 0}</td>
                    </tr>
                    <tr>
                        <td className='border px-3 w-1/3 text-slate-500'>Gratifications</td>
                        <td className='border px-3 w-1/3'>{gratification ? gratification : 0}</td>
                    </tr>
                    <tr>
                        <td className='border px-3 w-1/3 text-slate-500'>Divers</td>
                        <td className='border px-3 w-1/3'>{divers ? divers : 0}</td>
                    </tr>
                    <tr className='bg-pink-50 font-semibold border-slate-900'>
                        <td className='border px-3 w-1/3 font-bold text-center' colSpan='2'>Total Primes</td>
                        <td className='border px-3 w-1/3'>{totalPrime?.data[0]?.total}</td>
                    </tr>
                </table>
            </div>
        </div>
    )
}

export default Primes;