import React, { Component } from "react";
import { render } from "react-dom";
import axios from 'axios';

axios.defaults.xsrfCookieName = 'csrftoken'
axios.defaults.xsrfHeaderName = 'X-CSRFToken'
export default function App(){
    return(
        <h4>asfasfsa</h4>
    )
};

const container = document.getElementById("app");
render(<App />, container);