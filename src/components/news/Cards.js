import React, { Component } from 'react';
import './News.scss';
import './loader.js';
import ReactFancyBox from 'react-fancybox';
import 'react-fancybox/lib/fancybox.css';


// import './jquery.fancybox.min.js';
import Time from 'react-time';
class Cards extends Component{
    constructor(props){
        super(props)
        console.log(this.props.news[0])
    }
    // handler = (evt) => {
    //   this.props.modify(evt.target.dataset.sid,evt.target.dataset.type);
    // }
    render(){
        return(
            <React.Fragment>                  
                

    <div className="Y_news">
    <div className="Y_container2">
        <div className="Y_news_container d-flex">
        {this.props.news.map(news =>
            <div className="Y_news_box" id="Y_news_box">
                <div className="Y_orange_box">
                    <div className="Y_green_box"> New</div>
                </div>
                <figure className="Y_circle_pic">
                <img src={require(`./img/${news.news_pic}.jpg`)} alt="" />
                    {/* <img src="/images/card.jpg" alt="卡片" /> */}
                </figure>
                <h5> <Time value={news.post_time} format="YYYY/MM/DD" /></h5>
                <p className="Y_card_P">{news.title}
                <br />{news.simple_narrative}</p>
                {/* <a href="">
                    <div className="Y_know_more Y_news_btn" id="Y_know_more">
                        了解更多
                    </div>
                   
                </a> */}

                	<a  className="Y_know_more2">
                        <div data-fancybox className="Y_know_more Y_news_btn box wow fadeIn " id="Y_know_more">
                        <ReactFancyBox
                            thumbnail=''
                            image={require(`./img/${news.news_pic}.jpg`)}
                           
                            defaultThumbnailWidth='0'
                            defaultThumbnailHeight='80'
                            showCloseBtn
                            />                        
                      
                        </div>  <div className="Y_know_more3">了解更多  </div> 
                    </a>







                </div>           
                        )}                    
                </div> 

            </div>
        
        </div>
                      <script src="loader.js"></script>
            </React.Fragment>
        )
    }

}

export default Cards;