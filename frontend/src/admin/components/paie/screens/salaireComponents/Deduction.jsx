import { useEffect } from 'react';

import { handleGet } from '../../../../../api/get';
import { useStateContext } from '../../../../../context/ContextProvider';
import { PAIE_BASE_URL } from '../../../../../utils/constants';

const Deduction = ({ total }) => {
    const { localUserData, agentToPay, mounthParams, isFetchPaie, setIsFetchPaie, deductionData, setDeductionData, totalDeduction, setTotalDeduction } = useStateContext();

    useEffect(() => {
        if (isFetchPaie.deduction) {
            handleGet(
                localUserData.token,
                `${PAIE_BASE_URL}/deduction/${agentToPay?.id}/deduc?mounth=${mounthParams.year}-${mounthParams.mounth}`,
                setDeductionData,
                ''
            );
            handleGet(
                localUserData.token,
                `${PAIE_BASE_URL}/deduction/${agentToPay?.id}?mounth=${mounthParams.year}-${mounthParams.mounth}`,
                setTotalDeduction,
                ''
            );
        }
        return () => {
            setIsFetchPaie({ ...isFetchPaie, deduction: false });
        }
    }, [isFetchPaie.deduction, mounthParams, agentToPay]);

    const pensions = deductionData?.data?.find(categ => categ.libelle == 'Pensions')?.total;
    const indemnites = deductionData?.data?.find(categ => categ.libelle == 'Indemnités')?.total;
    const avances = deductionData?.data?.find(categ => categ.libelle == 'Avances')?.total;
    const impots = deductionData?.data?.find(categ => categ.libelle == 'Retenus fiscales')?.total;
    const cassoc = deductionData?.data?.find(categ => categ.libelle == 'Cas sociaux')?.total;
    const divers = deductionData?.data?.find(categ => categ.libelle == 'Divers')?.total;

    return (
        <div className='mt-4 shadow'>
            <table className='w-full border'>
                <tr>
                    <td className='border px-3 w-1/3 font-bold' rowSpan='6'>Déductions</td>
                    <td className='border px-3 w-1/3 text-slate-500'>Pensions</td>
                    <td className='border px-3 w-1/3'>{pensions ? pensions : 0}</td>
                </tr>
                <tr>
                    <td className='border px-3 w-1/3 text-slate-500'>Indemnités</td>
                    <td className='border px-3 w-1/3'>{indemnites ? indemnites : 0}</td>
                </tr>
                <tr>
                    <td className='border px-3 w-1/3 text-slate-500'>Avances sur salaire</td>
                    <td className='border px-3 w-1/3'>{avances ? avances : 0}</td>
                </tr>
                <tr>
                    <td className='border px-3 w-1/3 text-slate-500'>Retenues fiscales</td>
                    <td className='border px-3 w-1/3'>{impots ? impots : 0}</td>
                </tr>
                <tr>
                    <td className='border px-3 w-1/3 text-slate-500'>Cas sociaux</td>
                    <td className='border px-3 w-1/3'>{cassoc ? cassoc : 0}</td>
                </tr>
                <tr>
                    <td className='border px-3 w-1/3 text-slate-500'>Divers</td>
                    <td className='border px-3 w-1/3'>{divers ? divers : 0}</td>
                </tr>
                <tr className='bg-pink-50 font-semibold text-slate-800'>
                    <td className='border px-3 w-1/3 font-bold text-center' colSpan='2'>Total Déductions</td>
                    <td className='border px-3 w-1/3'>{totalDeduction?.data[0]?.total === null ? 0 : totalDeduction?.data[0]?.total}</td>
                </tr>
            </table>
        </div>
    );
}

export default Deduction;