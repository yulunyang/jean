import React, { Component } from 'react';
import './Dragdrop.scss';
import './gragDrop.js';

class Drag extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <React.Fragment> 
               <div  className="Y_container">
             <div id="tab-panel">
                    <div class="tabs">
                    <a>音樂盒</a>
                    <a>紙膠帶/便利貼</a>
                    <a>紙風景</a>
                    <a>十字繡</a>
                    <a>木器</a>
                    </div>
                    <ul class="tab-content Y_tab-content_flex">
                    <li className=""> 
                        <div className=""><img className="Y_play_contents" src="/images/ring.jpg" /></div>
                        <div className=""><img className="Y_play_contents" src="/images/ring.jpg" /></div>
                        <div className=""><img className="Y_play_contents" src="/images/ring.jpg" /></div>
                        <div className=""><img className="Y_play_contents" src="/images/ring.jpg" /></div>

                    </li>
                    <li >
                        <div className=""><img className="Y_play_contents" src="/images/tape2.jpg" /></div>
                        <div className=""><img className="Y_play_contents" src="/images/tape2.jpg" /></div>
                        <div className=""><img className="Y_play_contents" src="/images/tape2.jpg" /></div>
                        <div className=""><img className="Y_play_contents" src="/images/tape2.jpg" /></div>
                        <div className=""><img className="Y_play_contents" src="/images/tape2.jpg" /></div>
                        <div className=""><img className="Y_play_contents" src="/images/tape2.jpg" /></div>
                        <div className=""><img className="Y_play_contents" src="/images/tape2.jpg" /></div>
                        <div className=""><img className="Y_play_contents" src="/images/tape2.jpg" /></div>
                        <div className=""><img className="Y_play_contents" src="/images/tape2.jpg" /></div>
                        <div className=""><img className="Y_play_contents" src="/images/tape2.jpg" /></div>
                        <div className=""><img className="Y_play_contents" src="/images/tape2.jpg" /></div>
                        <div className=""><img className="Y_play_contents" src="/images/tape2.jpg" /></div>

                    </li>
                    <li className="Y_tab-content_flex"> 
                    <div className=""><img className="Y_play_contents" src="/images/paper2.jpg" /></div>


                    </li>
                    <li>
                        <div className=""><img className="Y_play_contents" src="/images/xiu.jpg" /></div>
                        <div className=""><img className="Y_play_contents" src="/images/xiu.jpg" /></div>
                        <div className=""><img className="Y_play_contents" src="/images/xiu.jpg" /></div>
                        <div className=""><img className="Y_play_contents" src="/images/xiu.jpg" /></div>
                    </li>
                    <li>
                        <div className=""><img className="Y_play_contents" src="/images/woods.jpg" /></div>
                        <div className=""><img className="Y_play_contents" src="/images/woods.jpg" /></div>
                        <div className=""><img className="Y_play_contents" src="/images/woods.jpg" /></div>
                    </li>
                    </ul>
                </div>
                
                
                <script
                        src="https://code.jquery.com/jquery-3.3.1.min.js"
                        integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8="
                        crossorigin="anonymous"></script>
  </div>
         </React.Fragment>
           



        );
    }
}

export default Drag;