import { useEffect, useState } from "react";

import { handleGet } from "../../api/get";
import CassocHeader from "../../components/CassocHeader";
import { useStateContext } from "../../context/ContextProvider";
import CassocItem from "../components/cassoc/CassocItem";
import { CASSOC_BASE_URL } from "../../utils/constants";
import Button from "../../components/Button";

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

    const Commandes = () => {
        return (
            <div className="text-xs flex flex-col items-center">
                <Button
                    label='Modifier'
                    style='text-green-600 font-semibold hover:underline hover:text-green-500'
                />
                <Button
                    label='Souscrire'
                    style='text-teal-600 font-bold hover:underline hover:text-teal-500'
                />
            </div>
        )
    };

    return (
        <div className="relative">
            <div>
                <CassocHeader />
            </div>
            <div>
                <CassocItem
                    data={cassocList?.data}
                    showCommands={showCommands}
                    setShowCommands={setShowCommands}
                    selected={selected}
                    setSelected={setSelected}
                    children={<Commandes />}
                />
            </div>
        </div>
    );
}

export default CasSoc;