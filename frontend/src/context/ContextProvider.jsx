import { createContext, useContext, memo, useState, useRef, useMemo } from "react";

const StateContext = createContext();

export const ContextProvider = memo(({ children }) => {
    //Globals states
    const [loginStatus, setLoginStatus] = useState(false);
    const [boolingStates, setBoolingStates] = useState({
        showPassword: false,
    });
    const [showPopup, setShowPopup] = useState(false);

    const [userType, setUserType] = useState('');

    //data
    const [agentsList, setAgentsList] = useState([]);

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
                    userType, setUserType,
                    showPopup, setShowPopup,
                    rememberMe,
                    localUserData,
                    agentsList, setAgentsList,
                }
            })}
        >
            {children}
        </StateContext.Provider>
    );
});

export const useStateContext = () => useContext(StateContext);