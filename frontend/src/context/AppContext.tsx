import {createContext, useContext, useState} from "react"
import {getProjects} from "../api/client"

const AppContext = createContext()

const AppContextProvider = ()=>{
    const [projects, setProjects] = useState[null];

    //Fetch projects
const fetchProjects = async ()=>{
await getProjects().then((project)=>setProjects(project));
}

    return <AppContext.Provider value={{projects}}></AppContext.Provider>
}

export const useAppContext= ()=>{
const context = useContext(AppContext);
if(!context){
    throw new Error("Context must be used within the provider")
}

}