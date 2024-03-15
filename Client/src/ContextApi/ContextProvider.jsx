import { useEffect, useReducer } from "react";
import { Context } from "./Context";
import { initialState, reducer } from "./Reducer";

export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(()=>{
    localStorage.setItem("user", JSON.stringify(state.user))
  },[state.user])

  return (
    <Context.Provider
      value={{
        user: state.user,
        isFetching: state.isFetching,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </Context.Provider>
  );
};
