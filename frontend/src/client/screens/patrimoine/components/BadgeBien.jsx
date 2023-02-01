import React from 'react'
import QRCode from 'react-qr-code';

const BadgeBien = React.forwardRef((props, ref) => {
    return (
        <div ref={ref} className='flex gap-8'>
            <div>
                <h1 className='font-bold font-sans'>{props.id}</h1>
                <p>{props.designation}</p>
            </div>
            <QRCode size={80} value={props.biendata} />
        </div>
    );
})

export default BadgeBien;