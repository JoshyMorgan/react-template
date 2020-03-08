import React from 'react'
import Intro from './Intro.jsx'
import Quiz from './components/Quiz.jsx'
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom'
export default class App extends React.Component{
    render(){
        return(
        <div>
                {/* <Intro/> */}
            <Quiz/>
        </div>
        )
    }
}