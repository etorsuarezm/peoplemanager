import React from 'react';
import { Platform } from 'react-native';
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';
import EmployeeCreate from './components/EmployeeCreate';
import EmployeeEdit from './components/EmployeeEdit';

const RouterComponent = () => {
    return (
        <Router sceneStyle={{ paddingTop: (Platform.OS === 'ios') ? 65 : 55 }}>
            <Scene key="auth" initial >
                <Scene key="login" component={LoginForm} title="Please Login" />
            </Scene>
            <Scene key="main">
                <Scene 
                    key="employeeList" 
                    component={EmployeeList} 
                    title="Employees"
                    rightTitle="Add"
                    onRight={() => Actions.employeeCreate()}
                    initial
                />
                <Scene 
                    key="employeeCreate"
                    component={EmployeeCreate}
                    title="New Employee"
                    rightTitle="Save"
                    onRight={() => console.log('SAVE')}
                />
                <Scene 
                    key="employeeEdit"
                    component={EmployeeEdit}
                    title="Edit Employee"
                    rightTitle="Save"
                    onRight={() => console.log('SAVE')}
                />
            </Scene>
        </Router>
    );
};

export default RouterComponent;
