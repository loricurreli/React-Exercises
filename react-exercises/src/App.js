import { FilteredList } from "./FilteredList"
const persons = [
  { name: 'Lorenzo', age: 23, id: 1 }, 
  { name: 'Marco', age: 25, id: 2 }, 
  { name: 'Alberto', age: 17, id: 3 }]
export const App = () =>{
  return <FilteredList persons={persons} />
}