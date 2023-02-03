import React, { useState } from 'react';
import { QrReader } from 'react-qr-reader';

const ScanPres = () => {
    const [data, setData] = useState('No result');

    return (
        <div>
            <div className='w-96'>
                <QrReader
                    onResult={(result, error) => {
                        if (!!result) {
                            setData(result?.text);
                        }

                        if (!!error) {
                            console.log(error);
                        }
                    }}
                    style={{ width: '50%' }}
                />
                <p>{data}</p>
                {/* f85e2129-bccd-4b27-84a3-94f11317e1f4 */}
            </div>
        </div>
    );
}

export default ScanPres;