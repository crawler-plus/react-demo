import React, {Component} from 'react'
import {NavLink, Switch, Route, Redirect} from 'react-router-dom'

import News from './news'
import Message from './message'

export default class Home extends Component {

    render() {
        return (
            <div>
                <h2>home route component</h2>
                <div>
                    <ul className="nav nav-tabs">
                        <li>
                            <NavLink to="/home/news">News</NavLink>
                        </li>
                        <li>
                            <NavLink to="/home/message">Message</NavLink>
                        </li>
                    </ul>
                    <div>
                        <Switch>
                            <Route path="/home/news" component={News} />
                            <Route path="/home/message" component={Message} />
                            <Redirect to="/home/news" />
                        </Switch>
                    </div>
                </div>
            </div>
        )
    }
}