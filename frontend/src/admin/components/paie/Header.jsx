import { useStateContext } from "../../../context/ContextProvider";

const Header = ({ title }) => {
    const { agentToPay } = useStateContext();

    return (
        <div className="flex justify-between w-full">
            <h1 className="text-2xl font-extrabold text-slate-700">{title}</h1>
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

export default Header;