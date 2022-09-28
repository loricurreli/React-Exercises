import { LanguageContext } from "./LanguageContext";
export const DisplayContext = () =>{
  const options = {
    it: 'Italiano',
    en: 'English'
}

  return (
  <div>
    <LanguageContext.Consumer>
        {
          Language => <h1>{options[Language]}</h1>
        }
    </LanguageContext.Consumer>
  </div>)
}






