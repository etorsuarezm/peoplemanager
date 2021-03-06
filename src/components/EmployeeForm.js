import React, { Component } from 'react';
import { View, Text, Picker } from 'react-native';
import { connect } from 'react-redux';
import { employeeUpdate } from '../actions';
import { CardSection, TextBox } from './common';

class EmployeeForm extends Component {
    render() {
        return (
            <View>
                <CardSection>
                    <TextBox
                        label="Name"
                        placeholder="John Doe"
                        value={this.props.name}
                        onChangeText={
                            value => this.props.employeeUpdate({ prop: 'name', value })
                        }
                    />  
                </CardSection>
                <CardSection>
                    <TextBox
                        label="Phone"
                        placeholder="123-123-1234"
                        value={this.props.phone}
                        onChangeText={
                            value => this.props.employeeUpdate({ prop: 'phone', value })
                        }
                    />  
                </CardSection>
                <CardSection style={{ flexDirection: 'column' }}>
                    <View>
                        <Text style={styles.pickerTextStyles}>Shift</Text>
                        <Picker
                            selectedValue={this.props.shift}
                            onValueChange={value => this.props.employeeUpdate({ 
                                prop: 'shift', value 
                                })
                            }
                        >
                            <Picker.Item label="Monday" value="Monday" />
                            <Picker.Item label="Tuesday" value="Tuesday" />
                            <Picker.Item label="Wednesday" value="Wednesday" />
                            <Picker.Item label="Thursday" value="Thursday" />
                            <Picker.Item label="Friday" value="Friday" />
                            <Picker.Item label="Saturday" value="Saturday" />
                            <Picker.Item label="Sunday" value="Sunday" />
                        </Picker>
                    </View>
                </CardSection>
            </View>
        );
    }
}

const styles = {
    pickerTextStyles: {
        fontSize: 18,
        paddingLeft: 20
    }
};

const mapStateToProps = (state) => {
    const { name, phone, shift } = state.employeeForm;
    return { name, phone, shift };
};

export default connect(mapStateToProps, { employeeUpdate })(EmployeeForm);
