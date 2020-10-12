import React from 'react';
import './fornLogin.css';
import { Link } from 'react-router-dom';
import '../../App.css';

export default function SignUp() {
    return ( <
        form >

        <
        label > Firstname < /label>  <br></br>        <
        input type = "text"
        name = "firstname"
        size = "15" / > 
        <
        label > Middlename: < /label>   <br></br>   <
        input type = "text"
        name = "middlename"
        size = "15" / > 
        <
        label > Lastname: < /label>     <br></br>     <
        input type = "text"
        name = "lastname"
        size = "15" / > 

        <
        label ><br></br>
        Course:
        <
        /label>  <br></br>  <
        select >
        <
        option value = "Course" > Course < /option>   <
        option value = "BCA" > BCA < /option>   <
        option value = "BBA" > BBA < /option>   <
        option value = "B.Tech" > B.Tech < /option>   <
        option value = "MBA" > MBA < /option>   <
        option value = "MCA" > MCA < /option>   <
        option value = "M.Tech" > M.Tech < /option>   < /
        select >
        <br></br> 
        
        <
        label >
        Gender:
        <
        /label>  <br></br>  <
        input type = "radio"
        name = "male" / > Male <br></br> 
        <
        input type = "radio"
        name = "female" / > Female <br></br> 
        <
        input type = "radio"
        name = "other" / > Other <br></br> <br></br> 
        Email:<br></br> 
        <
        input type = "email"
        id = "email"
        name = "email" / > <br></br> 
        Password:<br></br> 
        <
        input type = "Password"
        id = "pass"
        name = "pass" / > 
        <br></br> 
        Re - type password:<br></br> 
        <
        input type = "Password"
        id = "repass"
        name = "repass" / > <br></br> 
        <
        Link to = '/TempWel' > <
        button type = "submit" > SUBMIT < /button> < /
        Link >
        <
        /form>  
    );
}