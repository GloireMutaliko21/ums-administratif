import { agentTableHeader } from "../data/componentsData";
import Button from '../../components/Button';
import { useStateContext } from "../../context/ContextProvider";
import { ColumnDirective, GridComponent, Inject, Sort, Page, Selection, Edit, Filter, Toolbar, ColumnsDirective } from "@syncfusion/ej2-react-grids";

const AgentTable = ({ data }) => {
    const { showPopup, setShowPopup } = useStateContext();

    return (
        <div className="container mx-auto px-4 sm:px-8">
            <div className="py-8">
                <div className="flex justify-between">
                    <h2 className="text-2xl font-semibold leading-tight">Agents</h2>
                    <Button
                        label='Ajouter'
                        style='flex justify-center bg-teal-800 hover:bg-teal-700 text-white font-semibold p-3'
                        onClick={() => setShowPopup(true)}
                    />
                </div>
                <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                    <div
                        className="inline-block min-w-full shadow-md rounded-lg overflow-hidden"
                    >
                        <GridComponent
                            dataSource={data}
                            allowPaging
                            allowSorting
                            toolbar={['Search', 'Delete']}
                            editSettings={{ allowDeleting: true, allowEditing: true }}
                        >
                            <ColumnsDirective>
                                {agentTableHeader.map((item, index) => (
                                    <ColumnDirective key={index} {...item} />
                                ))}
                            </ColumnsDirective>
                            <Inject services={[Sort, Page, Selection, Edit, Filter, Toolbar]} />
                        </GridComponent>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AgentTable