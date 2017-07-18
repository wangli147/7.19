import React, { Component } from 'react';
import './App.css';
import line from './imgs/line-ban.png';
import icon1 from './imgs/icon01.png';
import icon2 from './imgs/icon02.png';
import icon3 from './imgs/icon03.png';
import icon4 from './imgs/icon04.png';
import icon5 from './imgs/icon05.png';
import icon6 from './imgs/icon06.png';
import Footer from './Footer';

class Territory extends Component {
  render() {
    return (
      <div className="wl_wrap">
          {/* 专业领域 */}
          <div className="wl_header">
              <h1>专业领域</h1>
              <img src={line} alt="" />
              <h4>法律咨询热线  400-700-0148</h4>
          </div>
          <div className="wl_Ali">
            <div className="wl_alHead">
                <div className="right wl_home">
                    <a href="#" className="wl_homePage">首页</a><a  href="#" className="wl_href">专业领域</a>
                </div>
            </div>
          {/*更新部分，协作平台*/}
            <div className="wl_Tmain clear">
                <div className="wl_borderR"></div>
                <div className="wl_row clear">
                    <div className="wl_timeLine">
                        <div className="wl_centerLine"></div>
                        <div className="wl_centerRadius">
                            <img src={icon1} alt=""/>
                        </div>
                        <div className="wl_conBlock">
                            <h2>知识产权法律事务</h2>
                            <div className="wl_committee">
                                <ul className="wl_comList">
                                    <li>
                                      <span>01</span>
                                      <a href="#">知识产权专业委员会</a>
                                    </li>
                                    <li>
                                      <span>02</span>
                                      <a href="#">知识产权专业委员会</a>
                                    </li>
                                    <li>
                                      <span>03</span>
                                      <a href="#">知识产权专业委员会</a>
                                    </li>
                                    <li>
                                      <span>04</span>
                                      <a href="#">知识产权专业委员会</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="wl_timeLine wl_padTop">
                        <div className="wl_centerLine"></div>
                        <div className="wl_centerRadius">
                            <img src={icon2} alt=""/>
                        </div>
                        <div className="wl_conBlock conSecond">
                            <h2>公司法律事务</h2>
                            <div className="wl_committee">
                                <ul className="wl_comList">
                                    <li>
                                      <span>01</span>
                                      <a href="#">知识产权专业委员会</a>
                                    </li>
                                    <li>
                                      <span>02</span>
                                      <a href="#">知识产权专业委员会</a>
                                    </li>
                                    <li>
                                      <span>03</span>
                                      <a href="#">知识产权专业委员会</a>
                                    </li>
                                    <li>
                                      <span>04</span>
                                      <a href="#">知识产权专业委员会</a>
                                    </li>
                                    <li>
                                      <span>04</span>
                                      <a href="#">知识产权专业委员会</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="wl_timeLine wl_padTop">
                        <div className="wl_centerLine"></div>
                        <div className="wl_centerRadius">
                            <img src={icon3} alt=""/>
                        </div>
                        <div className="wl_conBlock">
                            <h2>金融法律事务</h2>
                            <div className="wl_committee">
                                <ul className="wl_comList">
                                    <li>
                                      <span>01</span>
                                      <a href="#">知识产权专业委员会</a>
                                    </li>
                                    <li>
                                      <span>02</span>
                                      <a href="#">知识产权专业委员会</a>
                                    </li>
                                    <li>
                                      <span>03</span>
                                      <a href="#">知识产权专业委员会</a>
                                    </li>
                                    <li>
                                      <span>04</span>
                                      <a href="#">知识产权专业委员会</a>
                                    </li>
                                    <li>
                                      <span>04</span>
                                      <a href="#">知识产权专业委员会</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="wl_timeLine wl_padTop">
                        <div className="wl_centerLine"></div>
                        <div className="wl_centerRadius">
                            <img src={icon4} alt=""/>
                        </div>
                        <div className="wl_conBlock conSecond">
                            <h2>资本市场法律事务</h2>
                            <div className="wl_committee">
                                <ul className="wl_comList">
                                    <li>
                                      <span>01</span>
                                      <a href="#">知识产权专业委员会</a>
                                    </li>
                                    <li>
                                      <span>02</span>
                                      <a href="#">知识产权专业委员会</a>
                                    </li>
                                    <li>
                                      <span>03</span>
                                      <a href="#">知识产权专业委员会</a>
                                    </li>
                                    <li>
                                      <span>04</span>
                                      <a href="#">知识产权专业委员会</a>
                                    </li>
                                    <li>
                                      <span>04</span>
                                      <a href="#">知识产权专业委员会</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="wl_timeLine wl_padTop">
                        <div className="wl_centerLine"></div>
                        <div className="wl_centerRadius">
                            <img src={icon5} alt=""/>
                        </div>
                        <div className="wl_conBlock">
                            <h2>房地产与建筑工程法律事务</h2>
                            <div className="wl_committee">
                                <ul className="wl_comList">
                                    <li>
                                      <span>01</span>
                                      <a href="#">房地产专业委员会</a>
                                    </li>
                                    <li>
                                      <span>02</span>
                                      <a href="#">土地业务专业委员会</a>
                                    </li>
                                    <li>
                                      <span>03</span>
                                      <a href="#">建设工程专业委员会</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="wl_timeLine wl_padTop">
                        <div className="wl_centerLine"></div>
                        <div className="wl_centerRadius">
                            <img src={icon6} alt=""/>
                        </div>
                        <div className="wl_conBlock conSecond">
                            <h2>房地产与建筑工程法律事务</h2>
                            <div className="wl_committee">
                                <ul className="wl_comList">
                                    <li>
                                      <span>01</span>
                                      <a href="#">房地产专业委员会</a>
                                    </li>
                                    <li>
                                      <span>02</span>
                                      <a href="#">土地业务专业委员会</a>
                                    </li>
                                    <li>
                                      <span>03</span>
                                      <a href="#">建设工程专业委员会</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="wl_timeLine wl_padTop">
                        <div className="wl_centerLine"></div>
                        <div className="wl_centerRadius">
                            <img src={icon6} alt=""/>
                        </div>
                        <div className="wl_conBlock">
                            <h2>民事法律事务</h2>
                            <div className="wl_committee">
                                <ul className="wl_comList">
                                    <li>
                                      <span>01</span>
                                      <a href="#">房地产专业委员会</a>
                                    </li>
                                    <li>
                                      <span>02</span>
                                      <a href="#">土地业务专业委员会</a>
                                    </li>
                                    <li>
                                      <span>03</span>
                                      <a href="#">建设工程专业委员会</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
          </div>
          <Footer />
      </div>
    );
  }
}

export default Territory;
