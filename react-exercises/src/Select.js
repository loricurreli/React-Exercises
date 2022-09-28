import React, { useState } from "react";
import { DisplayContext } from "./DisplayContext";
import { LanguageContext } from "./LanguageContext";


export const Select = () => {
   const [language, setLanguage] = useState('it')

    const handleChange = (event) => {
       setLanguage(event.target.value)
    }    
    return (
            <>
                <select value={language} onChange={handleChange}>
                    <option value="it">ITALIANO</option>
                    <option value="en">ENGLISH</option>
                    
                </select>
                <LanguageContext.Provider value={language}>
                    <DisplayContext/>
                </LanguageContext.Provider>
            </>
        )
    }