// I have to control the login options

const Login_Start = () => ({ type: "Login_Start" });
const Login_Success = (user) => ({ type: "Login_Success" , payload: user });
const Login_Failure = () => ({ type: "Login_Failure" });
const Logout = ()=>({type: "Logout"})

export { Login_Start, Login_Success, Login_Failure , Logout};
