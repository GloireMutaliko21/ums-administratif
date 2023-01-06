import { createContext, useContext, memo, useState, useRef } from "react";

const StateContext = createContext();

export const ContextProvider = memo(({ children }) => {
    //Globals states
    const [loginStatus, setLoginStatus] = useState(false);
    const [boolingStates, setBoolingStates] = useState({
        showPassword: false,
    });

    const [userType, setUserType] = useState('');

    //References
    const rememberMe = useRef();

    return (
        <StateContext.Provider
            value={{
                loginStatus, setLoginStatus,
                boolingStates, setBoolingStates,
                userType, setUserType,
                rememberMe,
            }}
        >
            {children}
        </StateContext.Provider>
    );
});

export const useStateContext = () => useContext(StateContext);