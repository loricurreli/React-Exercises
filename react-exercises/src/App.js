import { Routes, Route } from 'react-router-dom'
import { Welcome } from './Welcome'
import { ClickCounter } from './Counter';
export const App = () => {
    return (
    <Routes>
      <Route path="/" element={<Welcome name='Jimmy'/>} />
      <Route path="/counter" element={<ClickCounter/>} />
    </Routes>
    );
}