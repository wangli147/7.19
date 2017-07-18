import React, { Component } from 'react';
import './App.css';
import appbar from './imgs/appbar.camera.png';
import crown from './imgs/appbar.crown.png';
import XImg from './imgs/3.jpg';
import Footer from './Footer';

const Home = () => (
  <div className="homepage-text">
       <div className="top-divider">
	        <div className="bottom-icon" id="bottom-icon">	            
	        </div>
	        <h1><span>全球视野</span><span className="spen2">本土智慧</span></h1>
	        <div className="bottom-divider"></div>
	        <h2>规模化 专业化 品牌化 国际化</h2>
	        <h2><span>法律咨询电话：400-700-0148</span> 
	        <span>涉外业务咨询电话(English Service)：400-700-1516</span></h2> 
	        <div className="x-warp">
	        	<div className="x-More left">
	        		<h4>模块1</h4>
	        		<p>内容新闻</p>
	        		<p>内容新闻</p>
	        		<p>内容新闻</p>
	        	</div>
	        	<div className="x-More left">
	        		<h4>模块1</h4>
	        		<p>内容新闻</p>
	        		<p>内容新闻</p>
	        		<p>内容新闻</p>
	        	</div>
	        	<div className="x-More left">
	        		<h4>模块1</h4>
	        		<p>内容新闻</p>
	        		<p>内容新闻</p>
	        		<p>内容新闻</p>
	        	</div>
	        	<div className="x-More left">
	        		<h4>模块1</h4>
	        		<p>内容新闻</p>
	        		<p>内容新闻</p>
	        		<p>内容新闻</p>
	        	</div>
	        </div>	        
        </div>
        <div className="x-bg">
        	<div className="x-content">
        	<h5>专业领域 精准定位</h5>
        	<div className="section-divider section_big section_big_f Appbar">
                    <img src={appbar} alt="appbar" className="appbar"/>

            </div>
            <p>流水之为物也，不盈科不行；君子之志于道也，不成章不达。</p>
            <ul>
            	<li></li>
            	<li></li>
            	<li></li>

            </ul>






        </div>
        <div className="x-news">
        		<h3>图片新闻</h3>
        		<div className="section-divider section_big section_big_f Appbar">
                    <img src={crown} alt="crown" className="crown"/>

            </div>
        		<div className="x-newsF left">       			
        		    <img src={XImg} alt="x-img" />
        		    <p>2010年01月31日</p>
        		    <p>温家宝总理与盈科律师亲切会话</p>
        		</div>
        		<div className="x-newsF left">       			
        		    <img src={XImg} alt="x-img" />
        		    <p>2010年01月31日</p>
        		    <p>温家宝总理与盈科律师亲切会话</p>
        		</div>
        		<div className="x-newsF left">       			
        		    <img src={XImg} alt="x-img" />
        		    <p>2010年01月31日</p>
        		    <p>温家宝总理与盈科律师亲切会话</p>
        		</div>
        		<div className="x-newsF left">       			
        		    <img src={XImg} alt="x-img" />
        		    <p>2010年01月31日</p>
        		    <p>温家宝总理与盈科律师亲切会话</p>
        		</div>
        </div>
          <Footer />
        </div>
      
    </div>


)

export default Home;
