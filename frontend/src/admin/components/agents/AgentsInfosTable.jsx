
const AgentsInfosTable = ({ imageUrl, nom, matricule }) => {
    return (
        <div className="flex">
            <div className="flex-shrink-0 w-10 h-10">
                <img
                    className="w-full h-full rounded-full"
                    src={imageUrl}
                    alt=""
                />
            </div>
            <div className="ml-3">
                <p className="text-gray-900 whitespace-no-wrap">
                    {nom}
                </p>
                <p className="text-gray-600 whitespace-no-wrap">{matricule}</p>
            </div>
        </div>
    );
}

export default AgentsInfosTable;