import { createContext, useContext, memo, useState, useRef } from "react";

const StateContext = createContext();

export const ContextProvider = memo(({ children }) => {
    //Globals states
    const [boolingStates, setBoolingStates] = useState({
        showPassword: false,
    });

    return (
        <StateContext.Provider
            value={{
                boolingStates, setBoolingStates,
            }}
        >
            {children}
        </StateContext.Provider>
    );
});

export const useStateContext = () => useContext(StateContext);