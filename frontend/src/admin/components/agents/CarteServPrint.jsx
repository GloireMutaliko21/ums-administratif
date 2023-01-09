import React, { useRef } from 'react';
import ReactToPrint from 'react-to-print';
import CarteService from './CarteService';

const CarteServPrint = ({ nom, postnom, prenom, matricule, imageUrl, grade, permanence, statut, telephone, qrcode }) => {
    const componentRef = useRef();

    return (
        <div>
            <ReactToPrint
                trigger={() => <button>Print this out!</button>}
                content={() => componentRef.current}
                pageStyle="@page {size: 4in 2.7in}"
            />
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
    );
}

export default CarteServPrint;