import React, { Component } from 'react';
import './App.css';
import homeImg from './imgs/1(1).jpg';
import banner from './imgs/IMG2_2.JPG';
import pic1 from './imgs/1.jpg';
import line from './imgs/line-ban.png';
import Footer from './Footer';

class Wl_Recruit extends Component {
  render() {
    return (
      <div className="wl_wrap">
          <div className="wl_header">
              <h1>招贤纳士</h1>
              <img src={line} alt="" />
              <h4>法律咨询热线  400-700-0148</h4>
          </div>
           <div className="wl_intro">
              <div className="wl_head clear">
                <ul className="left  wl_nav">
                  <li>招贤纳士</li>
                </ul>
                <div className="right wl_home">
                    <a href="#" className="wl_homePage">首页</a><a  href="#" className="wl_href">专业领域</a><a  href="#" className="wl_href">人才加盟</a>
                </div>
              </div>
              <div className="wl_zxnsMain">
                <div className="wl_zxns clear">
                     <div className="wl_zxnsCard">
                          <h2><span className="wl_fensuo">北京分所</span>
                          <span className="wl_name">栾昕达</span></h2>
                          <p><span className="wl_userName">电话</span>
                          <span className="wl_call">13910523167</span></p>
                          <p><span className="wl_userName">邮箱</span>
                          <span className="wl_call">beijing-hr@yingkelawyer.com</span></p>
                          <p><span className="wl_userName">地址</span>
                          <span className="wl_call">北京市朝阳区建国门外大街1号国贸三期26层2619单元</span></p>
                      </div>
                      <div className="wl_zxnsCard">
                          <h2><span className="wl_fensuo">上海分所（盈科大厦办公区）</span>
                          <span className="wl_name">金丹</span></h2>
                          <p><span className="wl_userName">电话</span>
                          <span className="wl_call">13910523167</span></p>
                          <p><span className="wl_userName">邮箱</span>
                          <span className="wl_call">beijing-hr@yingkelawyer.com</span></p>
                          <p><span className="wl_userName">地址</span>
                          <span className="wl_call">北京市朝阳区建国门外大街1号国贸三期26层2619单元</span></p>
                      </div>
                      <div className="wl_zxnsCard">
                          <h2><span className="wl_fensuo">上海分所（洲际办公区）</span>
                          <span className="wl_name">韩笑</span></h2>
                          <p><span className="wl_userName">电话</span>
                          <span className="wl_call">13910523167</span></p>
                          <p><span className="wl_userName">邮箱</span>
                          <span className="wl_call">beijing-hr@yingkelawyer.com</span></p>
                          <p><span className="wl_userName">地址</span>
                          <span className="wl_call">北京市朝阳区建国门外大街1号国贸三期26层2619单元</span></p>
                      </div>
                      <div className="wl_zxnsCard">
                          <h2><span className="wl_fensuo">广州分所</span>
                          <span className="wl_name">周丽莎</span></h2>
                          <p><span className="wl_userName">电话</span>
                          <span className="wl_call">13910523167</span></p>
                          <p><span className="wl_userName">邮箱</span>
                          <span className="wl_call">beijing-hr@yingkelawyer.com</span></p>
                          <p><span className="wl_userName">地址</span>
                          <span className="wl_call">北京市朝阳区建国门外大街1号国贸三期26层2619单元</span></p>
                      </div>
                      <div className="wl_zxnsCard">
                          <h2><span className="wl_fensuo">深圳分所</span>
                          <span className="wl_name">李思慧</span></h2>
                          <p><span className="wl_userName">电话</span>
                          <span className="wl_call">13910523167</span></p>
                          <p><span className="wl_userName">邮箱</span>
                          <span className="wl_call">beijing-hr@yingkelawyer.com</span></p>
                          <p><span className="wl_userName">地址</span>
                          <span className="wl_call">北京市朝阳区建国门外大街1号国贸三期26层2619单元</span></p>
                      </div>
                      <div className="wl_zxnsCard">
                          <h2><span className="wl_fensuo">天津分所</span>
                          <span className="wl_name">王世清</span></h2>
                          <p><span className="wl_userName">电话</span>
                          <span className="wl_call">13910523167</span></p>
                          <p><span className="wl_userName">邮箱</span>
                          <span className="wl_call">beijing-hr@yingkelawyer.com</span></p>
                          <p><span className="wl_userName">地址</span>
                          <span className="wl_call">北京市朝阳区建国门外大街1号国贸三期26层2619单元</span></p>
                      </div>
                       <div className="wl_zxnsCard">
                          <h2><span className="wl_fensuo">南京分所</span>
                          <span className="wl_name">王世清</span></h2>
                          <p><span className="wl_userName">电话</span>
                          <span className="wl_call">13910523167</span></p>
                          <p><span className="wl_userName">邮箱</span>
                          <span className="wl_call">beijing-hr@yingkelawyer.com</span></p>
                          <p><span className="wl_userName">地址</span>
                          <span className="wl_call">北京市朝阳区建国门外大街1号国贸三期26层2619单元</span></p>
                      </div>
                </div>
            </div>
          </div>
          <Footer />
      </div>
     
    );
  }
}

export default Wl_Recruit;
