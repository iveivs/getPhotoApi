import { useContext } from "react"
const initialState = {
    history: [],
    loading: false,
    setHistory: () => {

    }
}

export const DataContext = createContext(initialState)