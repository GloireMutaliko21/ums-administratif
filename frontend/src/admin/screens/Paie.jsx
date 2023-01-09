import React, { useRef } from 'react';
import ReactToPrint from 'react-to-print';

import ToPrint from '../components/agents/CarteServPrint';

const Paie = () => {
    // const componentRef = useRef();

    return (
        <div>
            {/* <ReactToPrint
                trigger={() => <button>Print this out!</button>}
                content={() => componentRef.current}
                pageStyle="@page { size: 4in 2.5in}"
                fonts={[
                    // {
                    //     family: 'Poppins', source: 'url(https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap)'
                    // }
                ]}
            />
            <ToPrint ref={componentRef} /> */}
        </div>
    );
}

export default Paie