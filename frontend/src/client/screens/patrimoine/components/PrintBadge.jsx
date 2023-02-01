import React, { useRef } from 'react';
import ReactToPrint from 'react-to-print';

import { useStateContext } from '../../../../context/ContextProvider';
import BadgeBien from './BadgeBien';
const PrintBadge = ({ id, designation, bienData }) => {
    const badgeRef = useRef();
    const { showBadgePrint, setShowBadgePrint } = useStateContext();

    return (
        <div>
            <ReactToPrint
                trigger={() => <button className='p-3 border text-sm bg-amber-500 text-white hover:shadow-xl'>Imprimer Badge</button>}
                content={() => badgeRef.current}
                pageStyle="@page {size: 4in 2.5in; margin: 25px 30px 0px 30px}"
                onAfterPrint={() => {
                    setShowBadgePrint(false);
                    localStorage.removeItem('biens');
                }}
            />
            <div className='hidden'>
                <BadgeBien
                    ref={badgeRef}
                    id={id}
                    designation={designation}
                    bienData={bienData}
                />
            </div>
        </div>
    );
}

export default PrintBadge;