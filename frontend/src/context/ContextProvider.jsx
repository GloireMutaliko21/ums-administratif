import { createContext, useContext, memo, useState, useRef, useMemo } from "react";

const StateContext = createContext();

export const ContextProvider = memo(({ children }) => {
    //Globals states
    const [loginStatus, setLoginStatus] = useState(false);
    const [boolingStates, setBoolingStates] = useState({
        showPassword: false,
    });
    const [showPopup, setShowPopup] = useState(false);
    const [canFecth, setCanFecth] = useState(true);
    const [mounthParams, setMounthParams] = useState({
        year: '',
        mounth: ''
    });

    const [isFetchPaie, setIsFetchPaie] = useState({
        heuresupp: true,
        ferie: true,
        primes: true,
        conges: true,
        malad: true,
        deduction: true,
        alloc: true
    });

    const [userType, setUserType] = useState('');

    //data
    const [agentsList, setAgentsList] = useState([]);
    const [newAgent, setNewAgent] = useState();
    const [agentToPay, setAgentToPay] = useState();
    const [showPdf, setShowPdf] = useState(false);

    const [heureSuppData, setHeureSuppData] = useState();
    const [feriesData, setFeriesData] = useState();
    const [congePaieData, setCongePaieData] = useState();
    const [maladAccData, setMaladAccData] = useState();
    const [allocationData, setAllocationData] = useState();
    const [primeData, setPrimeData] = useState();
    const [totalPrime, setTotalPrime] = useState();

    //References
    const rememberMe = useRef();

    //User
    const localUserData = JSON.parse(localStorage.getItem('user'));

    return (
        <StateContext.Provider
            value={useMemo(() => {
                return {
                    loginStatus, setLoginStatus,
                    boolingStates, setBoolingStates,
                    canFecth, setCanFecth,
                    userType, setUserType,
                    showPopup, setShowPopup,
                    mounthParams, setMounthParams,
                    isFetchPaie, setIsFetchPaie,
                    rememberMe,
                    localUserData,
                    agentsList, setAgentsList,
                    newAgent, setNewAgent,
                    agentToPay, setAgentToPay,
                    heureSuppData, setHeureSuppData,
                    feriesData, setFeriesData,
                    congePaieData, setCongePaieData,
                    maladAccData, setMaladAccData,
                    allocationData, setAllocationData,
                    primeData, setPrimeData,
                    totalPrime, setTotalPrime,
                    showPdf, setShowPdf
                }
            })}
        >
            {children}
        </StateContext.Provider>
    );
});

export const useStateContext = () => useContext(StateContext);