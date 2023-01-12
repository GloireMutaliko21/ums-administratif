import { useState } from 'react';

import { useStateContext } from '../../../../context/ContextProvider';
import HeaderSalaire from '../HeaderSalaire';
import Allocation from './salaireComponents/Allocation';
import Conges from './salaireComponents/Conges';
import Deduction from './salaireComponents/Deduction';
import Feries from './salaireComponents/Feries';
import HeureSup from './salaireComponents/HeureSup';
import MaladAcc from './salaireComponents/MaladAcc';
import Primes from './salaireComponents/Primes';
import SalaireBase from './salaireComponents/salaireBase';
import Button from '../../../../components/Button';
import ClickLoad from '../../../../components/Loaders/ClickLoad';

const Salaire = () => {
    const { agentToPay, mounthParams, setMounthParams, salaireBase, heureSuppData, feriesData, congePaieData, maladAccData, totalPrime, totalDeduction, allocationData } = useStateContext();

    const [inLoading, setInLoading] = useState(false);

    const subTotal = salaireBase.total +
        heureSuppData?.data[0]?.total +
        feriesData?.data[0]?.total +
        congePaieData?.data[0]?.total +
        totalPrime?.data[0]?.total +
        maladAccData?.data[0]?.total;

    const netAPayer = subTotal - totalDeduction?.data[0]?.total + allocationData?.data[0].total

    return (
        <div className='mt-2 mr-[310px] mb-44'>
            <HeaderSalaire />
            <div>
                <SalaireBase />
                <HeureSup />
                <Feries />
                <Conges />
                <Primes />
                <MaladAcc total={subTotal} />
                <Deduction />
                <Allocation netPayer={netAPayer} />
            </div>
            <div className='mt-5 flex justify-end'>
                <Button
                    label={inLoading ? <ClickLoad text='Traitement' /> : 'Enregistrer'}
                    style={'bg-sky-500 hover:bg-sky-400 text-white p-4 py-3'}
                    onClick={() => { }}
                />
            </div>
        </div>
    )
}

export default Salaire