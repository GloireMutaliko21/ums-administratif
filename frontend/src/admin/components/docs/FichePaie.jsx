import React from "react";

const FichePaie = React.forwardRef((props, ref) => {
    const data = JSON.parse(localStorage.getItem('newSalaire'));
    const ficheData = data.data;
    const agentData = JSON.parse(ficheData.agent);
    const alloc = JSON.parse(ficheData.allocation);
    const conge = JSON.parse(ficheData.conge);
    const deduction = JSON.parse(ficheData.deduction);
    const ferie = JSON.parse(ficheData.ferie);
    const heureSupp = JSON.parse(ficheData.heureSupp);
    const maladie = JSON.parse(ficheData.maladie);
    const prime = JSON.parse(ficheData.prime);
    const salaires = JSON.parse(ficheData.salaires);

    const totalDu = (salaires.taux * salaires.base) +
        (+heureSupp.heures * heureSupp.taux) +
        (+ferie?.jours * ferie.taux) +
        (+conge?.jours * conge.taux) +
        (prime.risque + prime.anciennete + prime.penibilite + prime.naissance + prime.gratification + prime.divers) +
        (+maladie?.jours * maladie?.taux);

    const totalDeduction = deduction.pension +
        deduction.indemnite +
        deduction.avances +
        deduction.impot +
        deduction.cassoc +
        deduction.divers;

    const totalAlloc = alloc.enfants * alloc.jours * alloc.taux;

    const netPayer = totalDu + totalAlloc - totalDeduction;

    return (
        <main className="my-5 mx-24" ref={ref}>
            {/* // <main className="w-full" ref={ref}> */}
            <h2 className="font-extrabold text-center text-3xl text-blue-600">
                Fiche de Paie
            </h2>
            <section className="flex justify-between w-full text-[12px]">
                <div >
                    <h3 className="font-bold text-sky-600 border-b-2 border-sky-600">Salarié</h3>
                    <div className="flex text-[10px] items-center">
                        <div className='ml-2'>
                            <p>Noms</p>
                            <p>Matricule</p>
                            <p>Permanence</p>
                        </div>
                        <div className='ml-2'>
                            <p className=''>: {agentData.nom} {agentData.postnom}.</p>
                            <p>: {agentData.matricule}</p>
                            <p>: {agentData.permanence}</p>
                        </div>
                    </div>
                </div>
                <div>
                    <h3 className="font-bold text-sky-600 border-b-2 border-sky-600">Mois</h3>
                    <p>{ficheData.mois}</p>
                </div>
            </section>
            <section className="mt-1">
                <h3 className="font-bold text-sky-600 border-b-4 border-sky-600"></h3>
                <div className=' shadow'>
                    <table className='w-full border'>
                        <tr>
                            <td className='border px-3 w-1/3 font-bold' rowSpan='3'>Salaires</td>
                            <td className='border px-3 w-1/3 text-slate-500'>Taux</td>
                            <td className='border px-3 w-1/3'>{salaires.taux}</td>
                        </tr>
                        <tr>
                            <td className='border px-3 w-1/3 text-slate-500'>Base</td>
                            <td className='border px-3 w-1/3'>{salaires.base}</td>
                        </tr>
                        <tr className='bg-amber-50 font-semibold border-slate-900'>
                            <td className='border px-3 w-1/3'>Total</td>
                            <td className='border px-3 w-1/3'>{salaires.taux * salaires.base}</td>
                        </tr>
                    </table>
                </div>
                <div className=' shadow'>
                    <table className='w-full border'>
                        <tr>
                            <td className='border px-3 w-1/3 font-bold' rowSpan='3'>Heures supplémentaires</td>
                            <td className='border px-3 w-1/3 text-slate-500'>Nombre d'heures</td>
                            <td className='border px-3 w-1/3'>{!heureSupp?.heures ? 0 : heureSupp.heures}</td>
                        </tr>
                        <tr>
                            <td className='border px-3 w-1/3 text-slate-500'>Taux</td>
                            <td className='border px-3 w-1/3'>{heureSupp.taux}</td>
                        </tr>
                        <tr className='bg-amber-50 font-semibold border-slate-900'>
                            <td className='border px-3 w-1/3'>Total</td>
                            <td className='border px-3 w-1/3'>{+heureSupp.heures * heureSupp.taux}</td>
                        </tr>
                    </table>
                </div>
                <div className=' shadow'>
                    <table className='w-full border'>
                        <tr>
                            <td className='border px-3 w-1/3 font-bold' rowSpan='3'>Jours fériés/Chômés...</td>
                            <td className='border px-3 w-1/3 text-slate-500'>Nombre jours</td>
                            <td className='border px-3 w-1/3'>{!ferie?.jours ? 0 : ferie?.jours}</td>
                        </tr>
                        <tr>
                            <td className='border px-3 w-1/3 text-slate-500'>Taux</td>
                            <td className='border px-3 w-1/3'>{ferie.taux}</td>
                        </tr>
                        <tr className='bg-amber-50 font-semibold border-slate-900'>
                            <td className='border px-3 w-1/3'>Total</td>
                            <td className='border px-3 w-1/3'>{+ferie?.jours * ferie.taux}</td>
                        </tr>
                    </table>
                </div>
                <div className=' shadow'>
                    <table className='w-full border'>
                        <tr>
                            <td className='border px-3 w-1/3 font-bold' rowSpan='3'>Congés</td>
                            <td className='border px-3 w-1/3 text-slate-500'>Jours</td>
                            <td className='border px-3 w-1/3'>{!conge?.jours ? 0 : conge?.jours}</td>
                        </tr>
                        <tr>
                            <td className='border px-3 w-1/3 text-slate-500'>Taux</td>
                            <td className='border px-3 w-1/3'>{conge.taux}</td>
                        </tr>
                        <tr className='bg-amber-50 font-semibold border-slate-900'>
                            <td className='border px-3 w-1/3'>Total</td>
                            <td className='border px-3 w-1/3'>{+conge?.jours * conge.taux}</td>
                        </tr>
                    </table>
                </div>
                <div className=' shadow'>
                    <table className='w-full border'>
                        <tr>
                            <td className='border px-3 w-1/3 font-bold' rowSpan='6'>Primes</td>
                            <td className='border px-3 w-1/3 text-slate-500'>Primes de risque</td>
                            <td className='border px-3 w-1/3'>{prime.risque}</td>
                        </tr>
                        <tr>
                            <td className='border px-3 w-1/3 text-slate-500'>Primes d'ancienneté</td>
                            <td className='border px-3 w-1/3'>{prime.anciennete}</td>
                        </tr>
                        <tr>
                            <td className='border px-3 w-1/3 text-slate-500'>Primes de pénibilité</td>
                            <td className='border px-3 w-1/3'>{prime.penibilite}</td>
                        </tr>
                        <tr>
                            <td className='border px-3 w-1/3 text-slate-500'>Naissance</td>
                            <td className='border px-3 w-1/3'>{prime.naissance}</td>
                        </tr>
                        <tr>
                            <td className='border px-3 w-1/3 text-slate-500'>Gratifications</td>
                            <td className='border px-3 w-1/3'>{prime.gratification}</td>
                        </tr>
                        <tr>
                            <td className='border px-3 w-1/3 text-slate-500'>Divers</td>
                            <td className='border px-3 w-1/3'>{prime.divers}</td>
                        </tr>
                        <tr className='bg-amber-50 font-semibold border-slate-900'>
                            <td className='border px-3 w-1/3 font-bold text-center' colSpan='2'>Total Primes</td>
                            <td className='border px-3 w-1/3'>{prime.risque + prime.anciennete + prime.penibilite + prime.naissance + prime.gratification + prime.divers}</td>
                        </tr>
                    </table>
                </div>
                <div className=' shadow'>
                    <table className='w-full border'>
                        <tr>
                            <td className='border px-3 w-1/3 font-bold' rowSpan='3'>Maladies ou accidents</td>
                            <td className='border px-3 w-1/3 text-slate-500'>Jours payés au 2/3</td>
                            <td className='border px-3 w-1/3'>{!maladie.jours ? 0 : maladie.jours}</td>
                        </tr>
                        <tr>
                            <td className='border px-3 w-1/3 text-slate-500'>Taux journalier</td>
                            <td className='border px-3 w-1/3'>{maladie.taux}</td>
                        </tr>
                        <tr className='bg-amber-50 font-semibold border-slate-900'>
                            <td className='border px-3 w-1/3'>Total</td>
                            <td className='border px-3 w-1/3'>{+maladie?.jours * maladie?.taux}</td>
                        </tr>
                        <tr className='bg-amber-50 font-semibold border-slate-900 text-green-600'>
                            <td className='border w-1/3 font-extrabold text-xl text-center' colSpan='2'>Total brut dû</td>
                            <td className='border px-3 w-1/3 font-bold text-xl text-center'>{totalDu} $</td>
                        </tr>
                    </table>
                </div>
                <div className=' shadow'>
                    <table className='w-full border'>
                        <tr>
                            <td className='border px-3 w-1/3 font-bold' rowSpan='6'>Déductions</td>
                            <td className='border px-3 w-1/3 text-slate-500'>Pensions</td>
                            <td className='border px-3 w-1/3'>{deduction.pension}</td>
                        </tr>
                        <tr>
                            <td className='border px-3 w-1/3 text-slate-500'>Indemnités</td>
                            <td className='border px-3 w-1/3'>{deduction.indemnite}</td>
                        </tr>
                        <tr>
                            <td className='border px-3 w-1/3 text-slate-500'>Avances sur salaire</td>
                            <td className='border px-3 w-1/3'>{deduction.avances}</td>
                        </tr>
                        <tr>
                            <td className='border px-3 w-1/3 text-slate-500'>Retenues fiscales</td>
                            <td className='border px-3 w-1/3'>{deduction.impot}</td>
                        </tr>
                        <tr>
                            <td className='border px-3 w-1/3 text-slate-500'>Cas sociaux</td>
                            <td className='border px-3 w-1/3'>{deduction.cassoc}</td>
                        </tr>
                        <tr>
                            <td className='border px-3 w-1/3 text-slate-500'>Divers</td>
                            <td className='border px-3 w-1/3'>{deduction.divers}</td>
                        </tr>
                        <tr className='bg-amber-50 font-semibold text-slate-800'>
                            <td className='border px-3 w-1/3 font-bold text-center' colSpan='2'>Total Déductions</td>
                            <td className='border px-3 w-1/3'>{totalDeduction}</td>
                        </tr>
                    </table>
                </div>
                <div className=''>
                    <table className='w-full border shadow'>
                        <tr>
                            <td className='border border-b-slate-700 px-3 w-1/3 font-bold' rowSpan='4'>Allocations familiales</td>
                            <td className='border px-3 w-1/3 text-slate-500'>Enfants bénéficiaires</td>
                            <td className='border px-3 w-1/3'>{alloc.enfants}</td>
                        </tr>
                        <tr>
                            <td className='border px-3 w-1/3 text-slate-500'>Nombre de jours</td>
                            <td className='border px-3 w-1/3'>{alloc.jours}</td>
                        </tr>
                        <tr>
                            <td className='border px-3 w-1/3 text-slate-500'>Taux</td>
                            <td className='border px-3 w-1/3'>{alloc.taux}</td>
                        </tr>
                        <tr className='border-b bg-amber-50 font-semibold border-slate-900'>
                            <td className='border border-b-slate-700 px-3 w-1/3'>Total</td>
                            <td className='border border-b-slate-700 px-3 w-1/3'>{totalAlloc}</td>
                        </tr>
                        <tr className='bg-amber-50 font-extrabold text-green-600 border border-slate-700'>
                            <td className='w-1/3  text-center text-3xl' colSpan='2'>Net à payer</td>
                            <td className='px-3 w-1/3 text-2xl text-center border-l border-slate-700'>{netPayer} $</td>
                        </tr>
                    </table>
                </div>
            </section>
        </main>
    );
});

export default FichePaie;