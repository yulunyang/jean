import React, { Component } from 'react';
import './Play.scss';

class Play_nav extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <React.Fragment>                 
               
               <div  className="Y_container">
                <div className="Y_nav">
                <img className="Y_color_icon" src="/images/color_icon.svg" alt="卡片" />
                <p className="Y_looknews">幫自己的桌子布置吧！</p>
                
                </div>     
                <div>
                <div id="demo">
                    <div className="wrapper">
                        <div className="content">
                            <ul>
                                <a href="#"><li>全部消息</li></a>
                                <a href="#"><li>最新動態</li></a>

                                <div className="Y_pricebutton">
                                <button className="Y_addCartbutton">加入購物車</button>
                                <button className="Y_addListbutton">加入收藏</button>
                                </div>

                            </ul>                           
                        </div>
                        <div className="parent">喜愛項目<img className="Y_caret-down-solid" src="/images/caret-down-solid.svg" alt="" /></div>
                    </div>                  
                
                    </div>

                </div>
                </div>
                           
                        </React.Fragment>
        );
    }
}

export default Play_nav;