import React from "react";
import { GithubUsersList } from "./GithubUsersList";

export class App extends React.Component{
    render(){
        return (
            <div>
                <GithubUsersList />
            </div>
        );
    }
}