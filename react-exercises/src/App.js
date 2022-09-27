import { Routes, Route, Link} from 'react-router-dom'
import { Welcome } from './Welcome'
import { ClickCounter } from './Counter';
import { ShowGithubUser } from './ShowGithubUser';
import { Fragment } from 'react';
export const App = () => {
    return (
        <Routes>
        <Route path="/" element={
        <Fragment>
            <Welcome/>
            <Link to="/counter">Show the counter</Link> 
            <Link to="/users">Show the github users</Link> 
            <Link to="/">Back to the homepage</Link>
        </Fragment>
    }/>
        <Route path="/counter" element={<ClickCounter />} />
        <Route path="/users">
            <Route index element={<h3>Insert /username param</h3>}/>
            <Route path=":username" element={<ShowGithubUser />} />
        </Route>
        <Route path="*" element={
                    <Fragment>
                        <div>Page not found</div>
                        <Link to="/">Back to the homepage</Link>
                    </Fragment>
                }/>
        
    </Routes>
    );
}