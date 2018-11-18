import React, { Component } from 'react';
import './Dragdrop.scss';
class Drop extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <React.Fragment> 
       <div  className="Y_container">
            <span id="tab-1" >1</span>
            <span id="tab-2">2</span>
            <span id="tab-3" >3</span>
            <span id="tab-4" >4</span>
             
            <div id="tab">
            
            <ul>
              <li><a href="#tab-1">簡潔風格</a></li>
              <li><a href="#tab-2">優雅風格</a></li>
              <li><a href="#tab-3">獨特風格</a></li>
              <li><a href="#tab-4">雅痞風格</a></li>
            </ul>
           
            <div className="tab-content-1 tab-drop"></div>
            <div className="tab-content-2 tab-drop"></div>
            <div className="tab-content-3 tab-drop"></div>
            <div className="tab-content-4 tab-drop"></div>
            </div>

            </div>

          

            
         </React.Fragment>
           



        );
    }
}

export default Drop;