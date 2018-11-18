import React, { Component } from "react";
import { Link } from "react-router-dom";
class Nav extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <React.Fragment>
        <nav className="F_index_nav">
          <Link className="F_nav_logo" to="/home">
            <img src="./images/logo_black.svg" alt="logo" />
          </Link>
          <ul className="F_nav_box">
            <li className="F_nav_item">
              <Link className="nav-link" to="/about">
                關於知音
                </Link>
            </li>
            <li className="F_nav_item">
              <Link className="nav-link" to="/play">
                玩玩知音
                </Link>
            </li>
            <li className="F_nav_item">
              <Link className="nav-link" to="/news">
                最新消息
                </Link>
            </li>
            <li className="F_nav_item">
              <Link className="nav-link" to="/buy_items">
                開始購物
                </Link>
            </li>
            <li className="F_nav_item">
              <Link className="nav-link" to="/store">
                銷售通路
                </Link>
            </li>
            <li className="F_nav_item">
              <Link className="nav-link" to="/contact">
                聯絡我們
                </Link>
            </li>
          </ul>
          <ul class="F_nav_icon">
            <li className="F_nav_item_icon">
              <Link className="nav-link" to="/member">
                <img src="/images/members.svg" alt="會員"/>
                </Link>
            </li>
            <li className="F_nav_item_icon F_icon_likes">
              <Link className="nav-link" to="/likes">
              <img src="/images/likes.svg" alt="喜愛"/>
                </Link>
            </li>
            <li className="F_nav_item_icon F_icon_buyitems">
              <Link className="nav-link" to="/buy_car">
              <img src="/images/buyitems.svg" alt="購物車"/>
                </Link>
            </li>
          </ul>
        </nav>
      </React.Fragment >
    );
  }
}

export default Nav;
