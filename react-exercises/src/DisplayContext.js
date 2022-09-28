import { LanguageContext } from "./LanguageContext";
import {  useContext } from 'react'
export const DisplayContext = () =>{
  const options = {
    it: 'Italiano',
    en: 'English'
}
const language = useContext(LanguageContext)

  return (
  <div>
   <h1>{options[language]}</h1>
  </div>)
}

