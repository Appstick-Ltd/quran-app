import {createContext, useContext} from "react";

const SettingsContext = createContext({})
export const useSettingsContext = () => useContext(SettingsContext)
export default SettingsContext
