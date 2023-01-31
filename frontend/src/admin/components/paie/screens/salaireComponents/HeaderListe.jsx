import { useStateContext } from "../../../../../context/ContextProvider";
import Select from '../../../../../components/Select';
import { mounthOptions, yearsOptions } from "../../../../data/SelectData";

const HeaderListe = () => {
    const { agentToPay, mounthParams, setMounthParams, setIsFetchPaie } = useStateContext();

    return (
        <div className="flex justify-between w-full">
            <h1 className="text-2xl font-extrabold text-slate-700">Liste de paie</h1>
            <div className="flex gap-4">
                <div>
                    <Select
                        label='Année'
                        data={yearsOptions}
                        value={mounthParams.year}
                        onChange={(e) => {
                            setMounthParams({ ...mounthParams, year: e.target.value })
                            setIsFetchPaie({
                                heuresupp: true,
                                ferie: true,
                                primes: true,
                                conges: true,
                                malad: true,
                                deduction: true,
                                alloc: true
                            })
                        }}
                    />
                </div>
                <div>
                    <Select
                        label='Mois'
                        data={mounthOptions}
                        value={mounthParams.mounth}
                        onChange={(e) => {
                            setMounthParams({ ...mounthParams, mounth: e.target.value })
                            setIsFetchPaie({
                                heuresupp: true,
                                ferie: true,
                                primes: true,
                                conges: true,
                                malad: true,
                                deduction: true,
                                alloc: true
                            })
                        }}
                    />
                </div>
            </div>
        </div>
    );
}

export default HeaderListe;