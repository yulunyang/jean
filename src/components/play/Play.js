import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from "react-router-dom";
import './Play.scss';
import Play_banner from './Play_banner';
import Play_nav from './Play_nav';
import Drop from './Drop';
import Drag from './Drag';




class Play extends Component{
    constructor(props){
        super(props)
        // console.log(props.match.url)  // /about
    }
    render(){
        return(
         
         <React.Fragment>
        <Play_banner />
        <Play_nav />
        <Drop />
        <div className="Y_container">
        <div className="Y_container Y_triangle2_bg"> 
        <div className="Y_triangle2"></div>
        </div></div>
        <Drag />
       
         </React.Fragment>
        
         );
    }
}

export default Play;