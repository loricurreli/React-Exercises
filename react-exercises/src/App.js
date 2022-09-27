import React from "react";
import { GitHubUsersList } from "./GithubUsersList";

export class App extends React.Component{
    render(){
        return (
            <div>
                <GitHubUsersList />
            </div>
        );
    }
}