import React, { Component } from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";

import "./App.scss";
import Nav from "./components/nav/Nav";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Store from "./components/store/Store";
import Member from './components/member/Member';
import News from './components/news/News';
import Play from './components/play/Play';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="_big_body">
          <Nav />
          <div className="F_body">
            {/* http://localhost:3000/ */}
            <Route exact path="/" component={Home} />
            <Route path="/home" component={Home} />
            {/* http://localhost:3000/about */}
            <Route path="/about" component={About} />
            {/* http://localhost:3000/contact */}
            <Route path="/contact" component={Contact} />
            {/* http://localhost:3000/store */}
            <Route path="/store" component={Store} />
            {/* http://localhost:3000/store/*any* */}
            <Route path="/store/:category" component={Store} />
            {/*  http://localhost:3000/member */}
            <Route path="/member" component={Member} />
            {/*  http://localhost:3000/member */}
            <Route path="/news" component={News} />
            {/*  http://localhost:3000/member */}
            <Route path="/play" component={Play} />

          </div>
          <div className="F_footer">
            <div className="F_container F_footer_container">
              <div className="F_footer_text_box F_footer_text_box_about">
                <h4>關於知音<br /><span>ABOUT US</span></h4>
                <ul className="F_footer_about">
                  <li><Link className="F_nav-link" to="/about">
                    關於知音 About Jeancard
                </Link></li>
                  <li> <Link className="F_nav-link" to="/about">
                    Wooderful life
                </Link></li>
                  <li> <Link className="F_nav-link" to="/about">
                    來趣
                </Link></li>
                  <li> <Link className="F_nav-link" to="/about">
                    紙風景
                </Link></li>
                  <li> <Link className="F_nav-link" to="/about">
                    繡
                </Link></li>
                  <li> <Link className="F_nav-link" to="/about">
                    i-Marker
                </Link></li>
                  <li> <Link className="F_nav-link" to="/about">
                    Funtape
                </Link></li>
                </ul>
              </div>
              <div className="F_footer_text_box F_footer_text_box_members">
                <h4>會員功能<br /><span>MEMBER SERVICE</span></h4>
                <ul className="F_footer_members">
                  <li> <Link className="F_nav-link" to="/member">
                    加入會員 Register
                </Link></li>
                  <li> <Link className="F_nav-link" to="/member">
                    會員登入 Sign In
                </Link></li>
                  <li> <Link className="F_nav-link" to="/member">
                    忘記密碼 Forget Password
                </Link></li>
                  <li> <Link className="F_nav-link" to="/member">
                    會員條款 Membership terms
                </Link></li>
                </ul>
              </div>
              <div className="F_footer_text_box F_footer_text_box_contact">
                <h4>聯絡我們<br /><span>CONTACT US</span></h4>
                <ul className="F_footer_contact">
                  <li>02-2917-1700</li>
                  <li>Jeancard@gmail.com</li>
                  <li>服務時間：8:00~19:00</li>
                  <li>Line：@jeancard</li>
                  <li>FB：https://www.facebook.com/jeancard1975/</li>
                </ul>
              </div>
              <div className="F_footer_text_box F_footer_text_box_logo">
                <div className="F_footer_logo"><a href=""><img src="/images/logo.svg" alt="logo" /></a></div>
                <li className="F_footer_icon_box">
                  <a href=""><figure className="F_icon_range icon_range_fb"> <img src="/images/FB.png" alt="FB" /></figure></a>
                  <a href=""><figure className="F_icon_range"><img src="/images/IG.png" alt="IG" /></figure></a>
                  <a href=""><figure className="F_icon_range"><img src="/images/LINE.png" alt="LINE" /></figure></a>
                </li>
              </div>
            </div>
          </div>
          <div className="F_footer_gray">ⓒ 2018 Mercci22 CO., LTD. All RIGHTS RESERVED.</div>
        </div >
      </BrowserRouter >

    );
  }
}

export default App;
