import React, { useState } from 'react';
import { QrReader } from 'react-qr-reader';

import { handlePost } from '../../../api/post';
import { useStateContext } from '../../../context/ContextProvider';
import { PRESENCE_BASE_URL } from '../../../utils/constants';

const ScanPres = () => {
    const { localUserData } = useStateContext();
    const [presState, setPresState] = useState();

    return (
        <div className='flex items-center gap-10 mt-5'>
            <div className='w-[400]'>
                <h1 className='text-center text-lg font-bold text-slate-600'>Rapprochez le QRCode de votre carte de service</h1>
                <QrReader
                    onResult={async (result, error) => {
                        if (!!result) {
                            // setData(result?.text);
                            await handlePost(
                                localUserData?.token,
                                { Authorization: `Bearer ${localUserData?.token}`, 'Content-Type': 'application/json' },
                                JSON.stringify({ agentId: result?.text, dateNow: new Date() }),
                                `${PRESENCE_BASE_URL}/pres/new`,
                                setPresState,
                                '',
                                () => { },
                                () => { },
                                ``,
                                () => { },
                                () => { },
                            );
                        }

                        if (!!error) {
                            console.log(error);
                        }
                    }}

                    style={{ width: '50%' }}
                    scanDelay={1000}
                />
            </div>
            <div>

            </div>
        </div>
    );
}

export default ScanPres;