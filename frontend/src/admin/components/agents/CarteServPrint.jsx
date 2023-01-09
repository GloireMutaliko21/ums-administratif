import React, { useRef } from 'react';
import ReactToPrint from 'react-to-print';
import CarteService from './CarteService';

const CarteServPrint = ({ nom, postnom, prenom, matricule, imageUrl, grade, permanence, statut, telephone, qrcode }) => {
    const componentRef = useRef();

    //@page { margin: ${marginTop} ${marginRight} ${marginBottom} ${marginLeft} !important; }`

    return (
        <div>
            <ReactToPrint
                trigger={() => <button>Imprimer carte de service</button>}
                content={() => componentRef.current}
                pageStyle="@page {size: 4in 2.5in; margin: 20px 30px 0px 30px}"
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