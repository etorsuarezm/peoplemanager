import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card, CardSection, TextBox, Button } from './common';
import { emailChanged, passwordChanged } from '../actions';


class LoginForm extends Component {
    onEmailChange(text) {
        this.props.emailChanged(text);
    }

    onPasswordChange(text) {
        this.props.passwordChanged(text);
    }

    render() {
        return (
            <Card>
                <CardSection>
                    <TextBox
                        label="Email"
                        placeholder="email@company.com"
                        onChangeText={this.onEmailChange.bind(this)}
                        value={this.props.email}
                    />
                </CardSection>
                <CardSection>
                    <TextBox
                        secureTextEntry
                        label="Password"
                        placeholder="password"
                        onChangeText={this.onPasswordChange.bind(this)}
                        value={this.props.password}
                    />
                </CardSection>
                <CardSection>
                    <Button>
                        Login
                    </Button>
                </CardSection>
            </Card>
        );
    }
}

const mapStateToProps = state => {
    const { email, password } = state.auth;
    return {
        email,
        password
    };
};

export default connect(mapStateToProps, { emailChanged, passwordChanged })(LoginForm);
