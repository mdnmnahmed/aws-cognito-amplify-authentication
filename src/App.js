import React, { Component } from 'react';

import Amplify from "aws-amplify";
import awsExports from "./aws-exports";

import SignUp from './SignUp';
import SignIn from './SignIn';

Amplify.configure(awsExports);

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            userSignedUp: false
        }
    }

    HandleFormToggle = () => {
        const { userSignedUp } = this.state;

        this.setState({
            userSignedUp: !userSignedUp
        });
    }

    render() {

        const { userSignedUp } = this.state;

        return (
            <>
                <div align="center">
                    <div>
                        <br />
                        <br />
                        <button onClick={this.HandleFormToggle}>
                            Toggle Forms
                        </button>
                    </div>

                    <br />
                    {!userSignedUp ? <SignUp /> : <SignIn />}
                </div>
            </>
        )
    }
}
export default App;