import React, { useRef } from 'react';
import ReactToPrint from 'react-to-print';
import { useStateContext } from '../../../context/ContextProvider';
import CarteService from './CarteService';

const CarteServPrint = ({ nom, postnom, prenom, matricule, imageUrl, grade, permanence, statut, telephone, qrcode }) => {
    const componentRef = useRef();
    const { setShowPdf } = useStateContext();

    return (
        <div>
            <ReactToPrint
                trigger={() => <button className='p-3 border text-sm text-red-400 hover:text-red-600'>Imprimer carte de service</button>}
                content={() => componentRef.current}
                pageStyle="@page {size: 4in 2.5in; margin: 20px 30px 0px 30px}"
                onAfterPrint={() => setShowPdf(false)}
            />
            <div className='hidden'>
                <CarteService
                    ref={componentRef}
                    imageUrl={imageUrl}
                    nom={nom}
                    postnom={postnom}
                    prenom={prenom}
                    matricule={matricule}
                    grade={grade}
                    permanence={permanence}
                    statut={statut}
                    telephone={telephone}
                    qrcode={qrcode}
                />
            </div>
        </div>
    );
}

export default CarteServPrint;