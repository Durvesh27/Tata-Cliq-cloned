import { createContext, useEffect, useReducer } from "react";
import axios from "axios"
export const AuthContext = createContext()

const initialState = { user: null }

function reducer(state, action) {
    switch (action.type) {
        case "LOGIN":
            return { ...state,user: action.payload };
        case "LOGOUT":
            return {...state, user: null };
        default:
        return state;
    }

}

const AuthProvider=({children})=>{
const [state,dispatch]=useReducer(reducer,initialState)

const login=(data)=>{
dispatch(
{type:"LOGIN",
payload:data}
)
}

const logout=()=>{
dispatch({
type:"LOGOUT",
})
}

useEffect(() => {
    const getCurrentUserData = async () => {
      const token = JSON.parse(localStorage.getItem("Token4"));
      const response = await axios.post(
        "http://localhost:8004/getCurrentUser",
        { token }
      );
      if (response.data.success) {
        dispatch({
          type: "LOGIN",
          payload: response.data.user
        });
      } else {
        dispatch({
          type: "LOGOUT",
        });
      }
    };
    getCurrentUserData();
  }, []);


    
return(
<AuthContext.Provider value={{login,logout,state}}>
{children}
</AuthContext.Provider>
)
}
export default AuthProvider