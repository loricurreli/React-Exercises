import { Routes, Route } from 'react-router-dom'
import { Welcome } from './Welcome'
export const App = () => {
    return (
    <Routes>
      <Route path="/" element={<Welcome name='Jimmy'/>} />
    </Routes>
    );
}