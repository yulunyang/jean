import React, { Component } from 'react';
import './Home.scss';

class Home extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <React.Fragment>
                <div className="F_shop">
                    <img src="/images/brand.svg" alt="brand" className="F_index_title F_brand" />
                    <div className="F_container">
                        <div className="F_shop_all">
                            <div className="F_shop_box F_shop_box_left">
                                <a href="" className="F_shop_hover">
                                    <figure className="F_shop_brand F_tape">
                                        <img src="images/tape.jpg" alt="紙膠帶" />
                                        <div className="F_shop_hover_box"></div>
                                        <div className="F_shop_hover_text">紙膠帶
                                <h5>More choise more fun</h5>
                                        </div>
                                    </figure>
                                </a>
                                <a href="" className="F_shop_hover">
                                    <figure className="F_shop_brand F_carving">
                                        <img src="images/carving.jpg" alt="手工" />
                                        <div className="F_shop_hover_box"></div>
                                        <div className="F_shop_hover_text">紙膠帶
                                <h5>More choise more fun</h5>
                                        </div>
                                    </figure>
                                </a>
                            </div>
                            <div className="F_shop_box">
                                <a href="" className="F_shop_hover">
                                    <figure className="F_shop_brand F_wood">
                                        <img src="images/wood.jpg" alt="木製" />
                                        <div className="F_shop_hover_box"></div>
                                        <div className="F_shop_hover_text">紙膠帶
                                <h5>More choise more fun</h5>
                                        </div>
                                    </figure>
                                </a>
                            </div>
                            <div className="F_shop_box shop_box_right">
                                <a href="" className="F_shop_hover">
                                    <figure className="F_shop_brand F_embroidery">
                                        <img src="images/embroidery.jpg" alt="織" />
                                        <div className="F_shop_hover_box"></div>
                                        <div className="F_shop_hover_text">紙膠帶
                                <h5>More choise more fun</h5>
                                        </div>
                                    </figure>
                                </a>
                                <a href="" className="F_shop_hover">
                                    <figure className="F_shop_brand F_paper">
                                        <img src="images/paper.JPG" alt="玩玩紙雕" />
                                        <div className="F_shop_hover_box"></div>
                                        <div className="F_shop_hover_text">紙膠帶
                                <h5>More choise more fun</h5>
                                        </div>
                                    </figure>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="F_play">
                    <img src="/images/play.svg" alt="play" className="F_index_title F_play_title" />
                    <div className="F_container">
                        <div className="F_paly_all F_paly_all_top">
                            <figure className="F_play_pic">
                                <img src="/images/play_wood.jpg" alt="布置桌子" />
                            </figure>
                            <div className="F_play_text">
                                <div className="F_triangle F_triangle_top"></div>
                                <div className="F_muise_box_box">
                                    <img src="/images/color_line.svg" alt="" className="F_colorful_line F_colorful_line1" />
                                    <img src="/images/muise_box.svg" alt="音樂盒" className="F_muise_box" />
                                </div>
                                <h3>創作的心意，讓音樂為你傳遞</h3>
                                <img src="/images/color_line.svg" alt="" className="F_colorful_line F_colorful_line2" />
                                <div className="F_orange_line"></div>
                                <p className="F_p_top">親自錄製樂曲、DIY演奏音樂鈴，將幸福的聲音送進對方心坎裡將難忘的旅行、結婚、生日 、或節日，化為零件融入演奏音樂鈴，再以鋼 琴、軟體編曲，錄製獨一無二的曲譜卡帶，量身打造專屬的場景與旋律，讓每次演奏、播放都能喚醒心中最溫暖的記憶。</p>
                                <a href="">
                                    <div className="F_know_more F_arrange">了解更多</div>
                                </a>
                            </div>
                        </div>
                        <div className="F_paly_all F_paly_all_bottom">
                            <div className="F_play_text F_play_text_bottom">
                                <div className="F_triangle F_triangle_bottom"></div>
                                <div className="F_muise_box_box F_muise_box_box_bottom">
                                    <img src="/images/color_line.svg" alt="" className="F_colorful_line F_colorful_line3" />
                                    <img src="/images/muise_box.svg" alt="音樂盒" className="F_muise_box" />
                                </div>
                                <h3 className="F_h3_bottom">創作的心意，讓音樂為你傳遞</h3>
                                <img src="/images/color_line.svg" alt="" className="F_colorful_line F_colorful_line4" />
                                <div className="F_orange_line"></div>
                                <p className="F_p_bottom">親自錄製樂曲、DIY演奏音樂鈴，將幸福的聲音送進對方心坎裡將難忘的旅行、結婚、生日 、或節日，化為零件融入演奏音樂鈴，再以鋼 琴、軟體編曲，錄製獨一無二的曲譜卡帶，量身打造專屬的場景與旋律，讓每次演奏、播放都能喚醒心中最溫暖的記憶。</p>
                                <a href="">
                                    <div className="F_know_more F_play_wood">了解更多</div>
                                </a>
                            </div>
                            <figure className="F_play_pic">
                                <img src="/images/play_wood.jpg" alt="玩木頭" />
                            </figure>
                        </div>
                    </div>
                </div>

                <div className="F_news">
                    <img src="/images/new.svg" alt="news" className="F_index_title F_news_title" />
                    <div className="F_container">
                        <div className="F_news_container">
                            <div className="F_news_box">
                                <div className="F_orange_box">
                                    <div className="F_green_box"> New</div>
                                </div>
                                <figure className="F_circle_pic">
                                    <img src="/images/card.jpg" alt="卡片" />
                                </figure>
                                <h5>2018.09.21</h5>
                                <p>比送喉糖更有創意!
                        <br />教師節滿分送禮清單!!</p>
                                <a href="">
                                    <div className="F_know_more F_news_btn">
                                        了解更多
                        </div>
                                </a>
                            </div>
                            <div className="F_news_box">
                                <div className="F_orange_box">
                                    <div className="F_green_box"> New</div>
                                </div>
                                <figure className="F_circle_pic">
                                    <img src="images/card.jpg" alt="卡片" />
                                </figure>
                                <h5>2018.09.21</h5>
                                <p>比送喉糖更有創意!
                        <br />教師節滿分送禮清單!!</p>
                                <a href="">
                                    <div className="F_know_more F_news_btn">
                                        了解更多
                        </div>
                                </a>
                            </div>
                            <div className="F_news_box">
                                <div className="F_orange_box">
                                    <div className="F_green_box"> New</div>
                                </div>
                                <figure className="F_circle_pic">
                                    <img src="images/card.jpg" alt="卡片" />
                                </figure>
                                <h5>2018.09.21</h5>
                                <p>比送喉糖更有創意!
                        <br />教師節滿分送禮清單!!</p>
                                <a href="">
                                    <div className="F_know_more F_news_btn">
                                        了解更多
                        </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment >

        );
    }
}

export default Home;