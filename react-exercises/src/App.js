import { Routes, Route } from 'react-router-dom'
import { Welcome } from './Welcome'
import { ClickCounter } from './Counter';
import { ShowGithubUser } from './ShowGithubUser';
export const App = () => {
    return (
    <Routes>
      <Route path="/" element={<Welcome name='Jimmy'/>} />
      <Route path="/counter" element={<ClickCounter/>} />
      <Route path="users/:username" element={<ShowGithubUser username='loricurreli' />} />
    </Routes>
    );
}