import React, { Component } from 'react';
import { Card, CardSection, TextBox, Button } from './common';

class EmployeeCreate extends Component {
    render() {
        return (
            <Card>
                <CardSection>
                    <TextBox
                        label="Name"
                        placeholder="John Doe"
                    />  
                </CardSection>
                <CardSection>
                    <TextBox
                        label="Phone"
                        placeholder="123-123-1234"
                    />  
                </CardSection>
                <CardSection>
                </CardSection>
                <CardSection>
                    <Button>
                        Create
                    </Button>
                </CardSection>
            </Card>
        );
    }
}

export default EmployeeCreate;
