const AgentListItem = ({ imageUrl, nom, matricule, id }) => {
    return (
        <div className="w-full flex items-center gap-3 p-2 ml-2 cursor-pointer hover:bg-slate-100 border-b">
            <img src={imageUrl} alt={nom} className='rounded-full object-contain h-10 w-10' />
            <div className="text-xs">
                <p className="font-semibold text-sm text-slate-600">{nom}</p>
                <p className="text-slate-500">{matricule}</p>
            </div>
        </div>
    );
}

export default AgentListItem;