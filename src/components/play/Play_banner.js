import React, { Component } from 'react';
import './Play.scss';

class Play_banner extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <React.Fragment>                  
               

            <div className="Y_banner">
            <div className="Y_bg">
                <img src="images/bg-play.jpg" alt="" /></div>
            
                <div className="Y_words">
            
                <div className="Y_title">
                    <h1 className="Y_linehight">玩玩知音</h1>
                    <h3 className="Y_linehight">PLAY&EVENTS</h3>
                </div>
                <div className="Y_title2 ">
                
                <div className="Y_icon">
                <img className="Y_icon2 Y_linehight2" src="images/color_line.svg" alt="" />
                </div>
                <div className="Y_triangle"></div>
                </div>
                </div>
                <div className="Y_icon">
                <img className="Y_icon3" src="images/Y_banner.jpg" alt="" />
                </div>
            
            </div>
                           
                        </React.Fragment>
        );
    }
}

export default Play_banner;