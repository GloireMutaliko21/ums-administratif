import { ColumnDirective, GridComponent, Inject, Search, Sort, Page, Selection, Edit, Filter, Toolbar, ColumnsDirective, PdfExport } from "@syncfusion/ej2-react-grids";
import QRCode from 'react-qr-code';

import { agentTableHeader } from "../data/componentsData";
import Button from '../../components/Button';
import { useStateContext } from "../../context/ContextProvider";
import CarteServPrint from './agents/CarteServPrint';

const AgentTable = ({ data }) => {
    const { setShowPopup, showPdf } = useStateContext();
    const dataCarteService = JSON.parse(localStorage.getItem('newUser'));

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
                                // qrcode={
                                //     <BarcodeGeneratorComponent id="barcode" width={"460px"} height={"100px"} type='Code93' value={'8374'} displayText={{ visibility: false }}>
                                //     </BarcodeGeneratorComponent>
                                // }
                                qrcode={<QRCode size={60} value={dataCarteService.data.id} />}
                            />
                        }
                        <Button
                            label='Ajouter'
                            style='flex justify-center bg-teal-800 hover:bg-teal-700 text-white font-semibold p-3'
                            onClick={() => setShowPopup(true)}
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