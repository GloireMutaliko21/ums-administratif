import { ColumnDirective, GridComponent, Inject, Search, Sort, Page, Selection, Edit, Filter, Toolbar, ColumnsDirective, PdfExport } from "@syncfusion/ej2-react-grids";
import QRCode from 'react-qr-code';

import { agentTableHeader } from "../data/componentsData";
import Button from '../../components/Button';
import { useStateContext } from "../../context/ContextProvider";
import CarteServPrint from './agents/CarteServPrint';
import { handleGet } from "../../api/get";
import { AGENT_BASE_URL } from "../../utils/constants";

const AgentTable = ({ data }) => {
    const { localUserData, setShowPopup, showPdf, setShowPdf, setNewAgent } = useStateContext();
    const dataCarteService = localStorage.getItem('newUser') !== undefined && JSON.parse(localStorage.getItem('newUser'));

    let grid;
    const toolbarClick = (args) => {
        if (grid && args.item.id === 'grid_pdfexport') {
            const exportProperties = {
                dataSource: data
            };
            grid.pdfExport(exportProperties);
        }
    };

    const onRowSelected = async (args) => {
        const agent = args.data;
        await handleGet(localUserData.token, `${AGENT_BASE_URL}/${agent.id}`, setNewAgent, 'newUser')
        setShowPdf(true);
    };

    return (
        <div className="container mx-auto px-4 sm:px-8">
            <div className="py-8">
                <div className="flex justify-between">
                    <h2 className="text-3xl font-extrabold tracking-tight to-slate-900">Agents</h2>
                    <div className="flex gap-8 items-center">
                        {
                            showPdf && <CarteServPrint
                                nom={dataCarteService.data.nom}
                                postnom={dataCarteService.data.postnom}
                                prenom={dataCarteService.data.prenom}
                                imageUrl={dataCarteService.data.imageUrl}
                                grade={dataCarteService.data.grade.titre}
                                matricule={dataCarteService.data.matricule}
                                permanence={dataCarteService.data.permanence}
                                statut={dataCarteService.data.statut}
                                // telephone=''
                                qrcode={<QRCode size={60} value={dataCarteService.data.id} />}
                            />
                        }
                        <Button
                            label='Ajouter'
                            style='flex justify-center bg-sky-500 hover:bg-sky-400 text-white p-3'
                            onClick={() => setShowPopup('addAgent')}
                        />
                    </div>
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
                            rowSelected={onRowSelected}
                        >
                            <ColumnsDirective>
                                {agentTableHeader.map((item, index) => (
                                    <ColumnDirective key={item.headerText} {...item} />
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