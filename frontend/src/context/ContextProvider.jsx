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
    const [fetchGrades, setFetchGrades] = useState(true);
    const [taskFetch, setTaskFetch] = useState(true);
    const [cassocFetch, setCassocFetch] = useState(true);
    const [syntheseFetch, setSyntheseFetch] = useState(true);
    const [fetchArticles, setFetchArticles] = useState(true);
    const [fetchCategBien, setFetchCategBien] = useState(true);
    const [fetchBiens, setFetchBiens] = useState(true);
    const [fetchAmortis, setFetchAmortis] = useState(true);
    const [fetchPres, setFetchPres] = useState(true)

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
        alloc: true,
        listePaie: true
    });

    const [userType, setUserType] = useState('');

    //data
    const [agentsList, setAgentsList] = useState([]);
    const [grades, setGrades] = useState([]);
    const [taskList, setTaskList] = useState([]);
    const [cassocList, setCassocList] = useState([]);
    const [syntheseMonth, setSyntheseMonth] = useState([]);
    const [newAgent, setNewAgent] = useState();
    const [agentToPay, setAgentToPay] = useState();
    const [showPdf, setShowPdf] = useState(false);
    const [showPdfFichePaie, setShowPdfFichePaie] = useState(false);
    const [showBadgePrint, setShowBadgePrint] = useState(false);
    const [presDay, setPresDay] = useState();

    const [unStocked, setUnStocked] = useState();
    const [totArticles, setTotArticles] = useState();
    const [articlesList, setArticlesList] = useState();
    const [ficheToday, setFicheToday] = useState();

    const [categorieBien, setCategorieBien] = useState();
    const [biensList, setBiensList] = useState();
    const [amortisList, setAmortisList] = useState();

    const [salaireBase, setSalaireBase] = useState({
        taux: 0,
        jours: 0,
        total: 0
    });
    const [heureSuppData, setHeureSuppData] = useState();
    const [feriesData, setFeriesData] = useState();
    const [congePaieData, setCongePaieData] = useState();
    const [maladAccData, setMaladAccData] = useState();
    const [allocationData, setAllocationData] = useState();
    const [primeData, setPrimeData] = useState();
    const [totalPrime, setTotalPrime] = useState();
    const [deductionData, setDeductionData] = useState();
    const [totalDeduction, setTotalDeduction] = useState();

    //References
    const rememberMe = useRef();

    //User
    const [localUserData, setLocalUserData] = useState(JSON.parse(localStorage.getItem('user')));

    return (
        <StateContext.Provider
            value={useMemo(() => ({
                loginStatus, setLoginStatus,
                boolingStates, setBoolingStates,
                canFecth, setCanFecth,
                fetchGrades, setFetchGrades,
                taskFetch, setTaskFetch,
                cassocFetch, setCassocFetch,
                fetchArticles, setFetchArticles,
                fetchBiens, setFetchBiens,
                categorieBien, setCategorieBien,
                userType, setUserType,
                showPopup, setShowPopup,
                mounthParams, setMounthParams,
                isFetchPaie, setIsFetchPaie,
                syntheseFetch, setSyntheseFetch,
                fetchCategBien, setFetchCategBien,
                fetchAmortis, setFetchAmortis,
                presDay, setPresDay,
                fetchPres, setFetchPres,
                rememberMe,
                localUserData, setLocalUserData,
                unStocked, setUnStocked,
                totArticles, setTotArticles,
                ficheToday, setFicheToday,
                agentsList, setAgentsList,
                grades, setGrades,
                articlesList, setArticlesList,
                taskList, setTaskList,
                cassocList, setCassocList,
                biensList, setBiensList,
                amortisList, setAmortisList,
                syntheseMonth, setSyntheseMonth,
                newAgent, setNewAgent,
                agentToPay, setAgentToPay,
                salaireBase, setSalaireBase,
                heureSuppData, setHeureSuppData,
                feriesData, setFeriesData,
                congePaieData, setCongePaieData,
                maladAccData, setMaladAccData,
                allocationData, setAllocationData,
                primeData, setPrimeData,
                totalPrime, setTotalPrime,
                deductionData, setDeductionData,
                totalDeduction, setTotalDeduction,
                showPdf, setShowPdf,
                showPdfFichePaie, setShowPdfFichePaie,
                showBadgePrint, setShowBadgePrint
            }))}
        >
            {children}
        </StateContext.Provider>
    );
});

export const useStateContext = () => useContext(StateContext);