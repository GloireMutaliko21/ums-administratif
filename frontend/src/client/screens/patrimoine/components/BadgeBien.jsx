import React from 'react'

const BadgeBien = React.forwardRef((props, ref) => {
    return (
        <div ref={ref} className='flex gap-8'>
            <div>
                <h1 className='font-bold font-sans'>{props.id}</h1>
                <p>{props.designation}</p>
            </div>
            <div>{props.qrcode}</div>
        </div>
    );
})

export default BadgeBien;