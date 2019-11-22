import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import auth from './Auth0';

//This fetches the info from handleAuthentication
//And then it redirects back to '/'
//While it's gathering the data, prints loading, then redirects to landing
class Callback extends Component {
    async componentDidMount() {
        console.log("ABT to call handleauth from Callback.js")
        console.log("CALLBACK PROPS", this.props)
        await auth.handleAuthentication()
        this.props.history.replace('/home')
    }

    render() {
        return (
            <p>Loading Profile...</p>
        )
    }
}

export default withRouter(Callback)