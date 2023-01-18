import React, { useEffect, useState } from 'react';

import { handleGet } from '../../api/get';
import CassocItem from '../../client/components/cassoc/CassocItem';
import CassocHeader from '../../components/CassocHeader';
import { useStateContext } from '../../context/ContextProvider';
import { CASSOC_BASE_URL } from '../../utils/constants';

const CasSoc = () => {
    const { cassocFetch, setCassocFetch, cassocList, setCassocList, localUserData } = useStateContext();
    const [showCommands, setShowCommands] = useState(false);
    const [selected, setSelected] = useState();

    useEffect(() => {
        if (cassocFetch) {
            handleGet(localUserData.token, `${CASSOC_BASE_URL}/all`, setCassocList, null);
        }
        return () => {
            setCassocFetch(false);
        }
    }, [cassocList]);

    return (
        <div className='relative'>
            <div>
                <CassocHeader />
            </div>
            <div>
                <CassocItem
                    data={cassocList?.data}
                    user={localUserData.agent}
                    showCommands={showCommands}
                    setShowCommands={setShowCommands}
                    selected={selected}
                    setSelected={setSelected}
                />
            </div>
        </div>
    );
}

export default CasSoc;