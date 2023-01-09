import { agentTableHeader } from "../data/componentsData";
import Button from '../../components/Button';
import { useStateContext } from "../../context/ContextProvider";
import { ColumnDirective, GridComponent, Inject, Search, Sort, Page, Selection, Edit, Filter, Toolbar, ColumnsDirective, PdfExport } from "@syncfusion/ej2-react-grids";

const AgentTable = ({ data }) => {
    const { showPopup, setShowPopup } = useStateContext();

    let grid;
    const toolbar = ['PdfExport'];
    const toolbarClick = (args) => {
        if (grid && args.item.id === 'grid_pdfexport') {
            const exportProperties = {
                dataSource: data
            };
            grid.pdfExport(exportProperties);
        }
    };

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
                            id='grid'
                            dataSource={data}
                            allowPaging
                            allowSorting
                            toolbar={['Search', 'Delete', 'PdfExport']}
                            toolbarClick={toolbarClick}
                            editSettings={{ allowDeleting: true, allowEditing: true }}
                            allowPdfExport={true}
                            ref={g => grid = g}
                        >
                            <ColumnsDirective>
                                {agentTableHeader.map((item, index) => (
                                    <ColumnDirective key={index} {...item} />
                                ))}
                            </ColumnsDirective>
                            <Inject services={[Search, Sort, Page, Selection, Edit, Filter, Toolbar, PdfExport]} />
                        </GridComponent>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AgentTable