import { createContext, useEffect, useReducer } from "react";

export const AuthContext = createContext()

const initialState = { user: null }

function reducer(state, action) {
    switch (action.type) {
        case "LOGIN":
            return { user: action.payload };
        case "LOGOUT":
            return { user: null };
    }

}

const AuthProvider=({children})=>{
const [state,dispatch]=useReducer(reducer,initialState)

const login=(data)=>{
if(data){
localStorage.setItem("Current-User",JSON.stringify(data))
}
dispatch(
{type:"LOGIN",
payload:data}
)
}

const logout=()=>{
localStorage.removeItem("Current-User")
dispatch({
type:"LOGOUT",
})
}



useEffect(()=>{
    const logged=JSON.parse(localStorage.getItem("Current-User"))
    if(logged){
    dispatch(
    {type:"LOGIN",
    payload:logged}
    )
    }
    },[])
    
return(
<AuthContext.Provider value={{login,logout,state}}>
{children}
</AuthContext.Provider>
)
}
export default AuthProvider