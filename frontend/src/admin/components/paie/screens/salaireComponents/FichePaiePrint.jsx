import React, { useRef } from 'react';
import ReactToPrint from 'react-to-print';

import { useStateContext } from '../../../../../context/ContextProvider';
import FichePaie from '../../../docs/FichePaie';

const FichePaiePrint = () => {
    const ficheRef = useRef();
    const { showPdfFichePaie, setShowPdfFichePaie } = useStateContext();

    return (
        <div>
            <ReactToPrint
                trigger={() => <button className='p-3 bg-sky-500 rounded-md hover:bg-sky-400 text-white'>Imprimer Fiche de paie</button>}
                content={() => ficheRef.current}
                copyStyles={true}
                // pageStyle="@page {size: 4in 2.5in; margin: 25px 30px 0px 30px}"
                onAfterPrint={() => {
                    setShowPdfFichePaie(false);
                    localStorage.removeItem('newUser');
                }}
            />
            <div className='hidden'>
                <FichePaie ref={ficheRef} />
            </div>
        </div>
    );
}

export default FichePaiePrint;