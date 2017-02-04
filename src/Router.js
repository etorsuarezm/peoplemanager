import React from 'react';
import { Platform } from 'react-native';
import { Scene, Router } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';

const RouterComponent = () => {
    return (
        <Router sceneStyle={{ paddingTop: (Platform.OS === 'ios') ? 65 : 55 }}>
            <Scene key="auth">
                <Scene key="login" component={LoginForm} title="Please Login" initial />
            </Scene>
            <Scene key="main">
                <Scene key="employeeList" component={EmployeeList} title="Employees" />
            </Scene>
        </Router>
    );
};

export default RouterComponent;
