import React from 'react'
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom'
export default class Intro extends React.Component {
    constructor() {
        super()
        this.state = {
            clickStat: 0,
        }
    }

    handleClick() {
        if (this.state.clickStat < 3) {
            this.setState({ clickStat: this.state.clickStat + 1 })
        }
        else if (this.state.clickStat == 3) {
            this.setState({ clickStat: 0 })
        }
        console.log(this.state.clickStat)
    }
    render() {
        return (
            <div class='container' >
                <BrowserRouter>
                    {this.state.clickStat == 0 && <p class="text-center" onClick={this.handleClick.bind(this)}>
                        Click me to begin. Once clicked there's no turning back</p>}
                    {this.state.clickStat == 1 && <p class="text-center" onClick={this.handleClick.bind(this)}>
                        Please use a laptop and have this tab on fullscreen. Click me!</p>}
                    {this.state.clickStat == 2 && <p class="text-center"><Link to="/quiz" onClick={this.handleClick.bind(this)}>
                        Exit while you still can. Click me again!</Link> </p>}
                    {/* <Route path="/Quiz" component={} /> */}
                </BrowserRouter>
            </div>
        )
    }
}
