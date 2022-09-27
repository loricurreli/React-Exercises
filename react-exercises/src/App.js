import {Fragment} from "react";
import { Welcome } from "./Welcome";
import { GitHubUsersList } from "./GithubUsersList";
import { Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import { ShowGithubUser } from "./ShowGithubUser";
import { ClickCounter } from "./Counter";
export const App = () => {
    return (
        <Routes>
        <Route path="/" element={
        <Fragment>
            <Welcome name='Lorenzo'/>
            <div>
            <Link to="/counter">Show the counter</Link> 
            </div>
            
            <Link to="/users">Show the github users list</Link> 
        </Fragment>
    }/>
        <Route path="/counter" element={<ClickCounter />} />
        <Route path="/*" element={
                    <Fragment>
                        <div>Page not found</div>
                        <Link to="/">Back to the homepage</Link>
                    </Fragment>
                }/>
        <Route path="/users" element={<GitHubUsersList/>}>
                <Route index element={<p>Add a user and select it</p>}/>
                <Route path=":username" element={<ShowGithubUser />} />
        </Route>
        
    </Routes>
                

    )
}