const initialState = {
    user: null,
    isFetching: false,
    error: false,
  };

  
  const reducer =(state, action)=>{
    switch (action.type) {
      case "Login_Start":
      return{
        user: null,
        isFetching: true,
        error: false
      }
      case "Login_Success":
        return{
          user: action.payload,
          isFetching: false,
          error: false
        }

      case "Login_Failure":
        return{
          user: null,
          isFetching: false,
          error: true,
        }

      default:
        return state
        break;
    }
  }

  export { initialState , reducer};