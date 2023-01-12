
import Select from '../../../components/Select';
import { useStateContext } from '../../../context/ContextProvider';
import { yearsOptions, mounthOptions } from '../../data/SelectData';
const HeaderSalaire = () => {
    const { agentToPay, mounthParams, setMounthParams } = useStateContext();

    return (
        <div className="flex justify-between w-full">
            <h1 className="text-2xl font-extrabold text-slate-700">Rémunération</h1>
            <div className="flex gap-4">
                <div>
                    <Select
                        label='Année'
                        data={yearsOptions}
                        value={mounthParams.year}
                        onChange={(e) => { setMounthParams({ ...mounthParams, year: e.target.value }) }}
                    />
                </div>
                <div>
                    <Select
                        label='Mois'
                        data={mounthOptions}
                        value={mounthParams.mounth}
                        onChange={(e) => { setMounthParams({ ...mounthParams, mounth: e.target.value }) }}
                    />
                </div>
            </div>
            <div className="border p-3 pt-px shadow">
                <p className="text-slate-700 text-center">Agent sélectionné</p>
                <div className="shadow-md p-1">
                    {
                        agentToPay ?
                            <div className='flex gap-3 text-sm border-t'>
                                <div className="text-slate-700">
                                    <p>Nom et postnom</p>
                                    <p>Titre</p>
                                    <p>Matricule</p>
                                </div>
                                <div className="text-sky-600 font-medium">
                                    <p>: {agentToPay.nom} {agentToPay.postnom}</p>
                                    <p>: {agentToPay.grade.titre}</p>
                                    <p>: {agentToPay.matricule}</p>
                                </div>
                            </div> :
                            <p className="text-xs mt-2 text-red-500 ">Aucun agent sélectionné</p>
                    }
                </div>
            </div>
        </div>
    );
}

export default HeaderSalaire;