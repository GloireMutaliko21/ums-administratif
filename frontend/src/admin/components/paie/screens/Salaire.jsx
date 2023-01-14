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
import { handlePost } from '../../../../api/post';
import { PAIE_BASE_URL } from '../../../../utils/constants';
import FichePaiePrint from './salaireComponents/FichePaiePrint';

const Salaire = () => {
    const {
        showPdfFichePaie, setShowPdfFichePaie,
        agentToPay, setAgentToPay,
        mounthParams, setMounthParams,
        primeData, setPrimeData,
        deductionData, setDeductionData,
        salaireBase, setSalaireBase,
        heureSuppData, setHeureSuppData,
        feriesData, setFeriesData,
        congePaieData, setCongePaieData,
        maladAccData, setMaladAccData,
        totalPrime, setTotalPrime,
        totalDeduction, setTotalDeduction,
        allocationData, setAllocationData
    } = useStateContext();

    const [inLoading, setInLoading] = useState(false);

    //Primes data
    const risque = primeData?.data?.find(categ => categ.libelle == 'Prime de risque')?.total;
    const anciennete = primeData?.data?.find(categ => categ.libelle == 'Prime ancienneté')?.total;
    const penibilite = primeData?.data?.find(categ => categ.libelle == 'Prime de pénibilité')?.total;
    const naissance = primeData?.data?.find(categ => categ.libelle == 'Prime de naissance')?.total;
    const gratification = primeData?.data?.find(categ => categ.libelle === 'Gratification')?.total
    const divers = primeData?.data?.find(categ => categ.libelle === 'Divers')?.total

    //Deductions data
    const pensions = deductionData?.data?.find(categ => categ.libelle == 'Pensions')?.total;
    const indemnites = deductionData?.data?.find(categ => categ.libelle == 'Indemnités')?.total;
    const avances = deductionData?.data?.find(categ => categ.libelle == 'Avances')?.total;
    const impots = deductionData?.data?.find(categ => categ.libelle == 'Retenus fiscales')?.total;
    const cassoc = deductionData?.data?.find(categ => categ.libelle == 'Cas sociaux')?.total;
    const diversDed = deductionData?.data?.find(categ => categ.libelle == 'Divers')?.total;

    const subTotal = (agentToPay?.grade.taux.base * 100) +
        heureSuppData?.data[0]?.total +
        feriesData?.data[0]?.total +
        congePaieData?.data[0]?.total +
        totalPrime?.data[0]?.total +
        maladAccData?.data[0]?.total;

    const netAPayer = subTotal - totalDeduction?.data[0]?.total + allocationData?.data[0].total;

    const requestBody = {
        mois: `${mounthParams.year}-${mounthParams.mounth}`,
        salaires: {
            taux: agentToPay?.grade.taux.base,
            base: 100
        },
        heureSupp: {
            heures: heureSuppData?.data[0]?.heures ? heureSuppData?.data[0]?.heures : 0,
            taux: agentToPay?.grade.taux.heureSupp
        },
        ferie: {
            jours: feriesData?.data[0]?.jours ? feriesData?.data[0]?.jours : 0,
            taux: agentToPay?.grade.taux.ferie
        },
        conge: {
            jours: congePaieData?.data[0]?.jours ? congePaieData?.data[0]?.jours : 0,
            taux: agentToPay?.grade.taux.conge
        },
        prime: {
            risque: risque ? risque : 0,
            anciennete: anciennete ? anciennete : 0,
            penibilite: penibilite ? penibilite : 0,
            naissance: naissance ? naissance : 0,
            gratification: gratification ? gratification : 0,
            divers: divers ? divers : 0
        },
        maladie: {
            jours: maladAccData?.data[0]?.jours ? maladAccData?.data[0]?.jours : 0,
            taux: agentToPay?.grade.taux.maladAcc
        },
        deduction: {
            pension: pensions ? pensions : 0,
            indemnite: indemnites ? indemnites : 0,
            avances: avances ? avances : 0,
            impot: impots ? impots : 0,
            cassoc: cassoc ? cassoc : 0,
            divers: diversDed ? diversDed : 0
        },
        allocation: {
            enfants: +allocationData?.data[0].nbEnfant,
            jours: allocationData?.data[0].jours ? +allocationData?.data[0].jours : 0,
            taux: agentToPay?.grade.taux.alloc
        },
        agentId: agentToPay?.id
    };

    const headers = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer 'token'`
    };

    const resetData = () => {
        setAgentToPay();
        setMounthParams({ year: '', mounth: '' });
        setPrimeData();
        setDeductionData();
        setSalaireBase({ taux: 0, jours: 0, total: 0 });
        setHeureSuppData();
        setFeriesData();
        setCongePaieData();
        setMaladAccData();
        setTotalPrime();
        setTotalDeduction();
        setAllocationData();
    };

    return (
        <div className='mt-2 mr-[310px] mb-44'>
            <HeaderSalaire />
            <div>
                <SalaireBase jourheure={100} />
                <HeureSup />
                <Feries />
                <Conges />
                <Primes />
                <MaladAcc total={subTotal} />
                <Deduction />
                <Allocation netPayer={netAPayer} />
            </div>
            <div className='mt-5 flex justify-end items-center gap-11'>
                {
                    showPdfFichePaie && <FichePaiePrint />
                }
                <Button
                    label={inLoading ? <ClickLoad text='Traitement' /> : 'Enregistrer'}
                    style={'bg-sky-500 hover:bg-sky-400 text-white p-4 py-3'}
                    onClick={() => {
                        handlePost('', headers, JSON.stringify(requestBody), `${PAIE_BASE_URL}/salaire/new`, () => { }, 'newSalaire', setInLoading, () => { }, '', setShowPdfFichePaie, () => { });
                        resetData();
                    }}
                />
            </div>
        </div>
    )
}

export default Salaire