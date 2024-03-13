import { useReducer } from "react";
import { Context } from "./Context";
import { initialState, reducer } from "./Reducer";

export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <Context.Provider
      value={{
        user: state.user,
        isFetching: state.isFetching,
        error: state.error,
      }}
    >
      {children}
    </Context.Provider>
  );
};
