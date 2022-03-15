import React from 'react';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

import Home from './Containers/Home';
import Activate from './Containers/Activate';
import Login from './Containers/Login';
import ResetPassword from './Containers/ResetPassword';
import ResetPasswordConfirm from './Containers/ResetPasswordConfirm';
import Signup from './Containers/Signup';
import Layout from "./hocs/Layout";

import { Provider } from 'react-redux';
import store from'./store';

const App = () =>(
    <Provider store={store}>
        <Router>
            <Layout>
                <Routes>
                    <Route exact path ='/' element={<Home/>} />
                    <Route exact path ='/login' element={<Login/>} />
                    <Route exact path ='/signup' element={<Signup/>} />
                    <Route exact path ='/reset-password' element={<ResetPassword/>} />
                    <Route exact path ='/password/reset/confirm/:uid/:token' element={<ResetPasswordConfirm/>} />
                    <Route exact path ='/activate/:uid/:token' element={<Activate/>} />
                </Routes>
            </Layout>
        </Router>
    </Provider>
);

export default App;