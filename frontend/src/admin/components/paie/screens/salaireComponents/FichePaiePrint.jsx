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
                trigger={() => <button className='p-3 border text-sm text-red-400 hover:text-red-600'>Imprimer carte de service</button>}
                content={() => ficheRef.current}
            // onAfterPrint={() => {
            //     setShowPdfFichePaie(false);
            //     localStorage.removeItem('newUser');
            // }}
            />
            <div className='hidden'>
                <FichePaie ref={ficheRef} />
            </div>
        </div>
    );
}

export default FichePaiePrint;