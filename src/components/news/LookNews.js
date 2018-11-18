import React, { Component } from 'react';
import './News.scss';

class LookNews extends Component{
    constructor(props){
        super(props)
       
    }
    // handler = (evt) => {
    //   this.props.modify(evt.target.dataset.sid,evt.target.dataset.type);
    // }
    render(){
        return(
            <React.Fragment>                  
                <div  className="Y_container">
                <div className="Y_nav">
                <img className="Y_color_icon" src="/images/color_icon.svg" alt="卡片" />
                <p className="Y_looknews">快來看看知音還有什麼新消息！</p>
                
                </div>     
                <div>
                <div id="demo">
                    <div class="wrapper">
                        <div class="content">
                            <ul>
                                <a href="#"><li>全部消息</li></a>
                                <a href="#"><li>最新動態</li></a>
                                <a href="#"><li>國際展覽</li></a>
                                <a href="#"><li>品牌活動</li></a>                            
                            </ul>                           
                        </div>
                        <div className="parent">全部消息<img className="Y_caret-down-solid" src="/images/caret-down-solid.svg" alt="" /></div>
                    </div>                  
                
                    </div>

                </div>
                </div>

            </React.Fragment>
        )
    }

}

export default LookNews;