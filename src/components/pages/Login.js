import React from 'react';
import './form.css';
import { Link } from 'react-router-dom';
import '../../App.css';

export default function Login() {
    return (

        <
        form >
        <
        div class = "container" >
        <
        label > Username: < /label>    <
        input type = "text"
        placeholder = "Enter Username"
        name = "username"
        required / >
        <
        label > Password: < /label>    <
        input type = "password"
        placeholder = "Enter Password"
        name = "password"
        required / >
        <
        Link to = '/TempWel' > <
        button type = "submit" > Login < /button> < /
        Link > <
        input type = "checkbox"
        checked = "checked" / > Remember me <
        Link to = '/sign-up' > <
        button type = "button"
        class = "cancelbtn"
        onClick = '' > SIGN - UP < /button> </Link >
        Forgot < a href = "#" > password ? < /a>    < /
        div > < /
        form >
    );
}