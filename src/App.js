import React from 'react';
//import logo from './logo.svg';
import './App.css';
import tribute from './tributePage.PNG';
import survey from './survey-from.PNG';
import productLanding from './product-landing-page.PNG';
import documentation from './documentation.PNG';
import calculator from './calculator.PNG';
import drum from './drum-machine.PNG';
import markdowmPreviewer from './markdown-previewer.PNG';
import pomodoro from './pomodoro-clock.PNG';
import randomQuote from './random-quote.PNG';
import cashRegister from './cash-register.PNG';
import myPhoto from './my-photo.jpg';

/* import JavascriptCalculator from './javascript-calculator.js';
import DrumMachine from './drum-machine.js';
import PomodoroClock from './pomodoro-clock.js';
import MarkdownPreviewer from './markdown-previewer.js';
import RandomQuoteMachine from './random-quote-machine.js'; */


//layout setting
const HEADER_LAYOUT = "col-xs-4 col-md-4";
//const CONTENT_WRAPPER_LAYOUT = "col-xs-12 col-md-12";
const CONTENT_LAYOUT = "col-xs-12 col-md-4 col-lg-4";
const CONTACT_LAYOUT = "col-xs-6 col-md-3";
//const FOOTER_LAYOUT = "col-xs-12 col-md-12";
const WELCOME_LAYOUT = "col-xs-12 col-md-12";
const CARD_LAYOUT = "col-xs-10 col-xs-offset-1 col-md-4 col-md-offset-4 col-lg-4 col-lg-offset-4";
//const CARD_HEADER_LAYOUT = "col-xs-12 col-md-12";
//const CARD_ARTICLE_LAYOUT = "col-xs-12 col-md-12";
const CARD_IMG_LAYOUT = "col-xs-4 col-md-4";
const CARD_P_LAYOUT = "col-xs-8 col-md-8";

class MyHeader extends React.Component {
  render(){
    return (
      <div>
        <nav id="navbar">
          <ul className="row">
              <li className={HEADER_LAYOUT}><a href="#card">关于</a></li>
              <li className={HEADER_LAYOUT}><a href="#projects">作品</a></li>
              <li className={HEADER_LAYOUT}><a href="#profile-link">联系我</a></li>
          </ul>
        </nav>
      </div>
    );
  }
}

class Introduction extends React.Component {
  /* constructor(props) {
    super(props);
  } */

  render() {
    return (
      <div className="row">
        <section id="welcome-section" className={WELCOME_LAYOUT}>

          <h1>Hello!</h1>

        </section>
        <section id="card" className={CARD_LAYOUT}>
          <header id="my-name"><h3>李康</h3></header>
          <article className="row">
            <img id="myself" className={"img-resposive " + CARD_IMG_LAYOUT} src={myPhoto} alt="Kang Li, a yong man with a glasses" />
            <p id="my-introduction" className={CARD_P_LAYOUT}>
              年龄：26岁<br/>
              毕业院校：深圳大学<br/>
              现居住地：深圳龙华<br/>
              技能：html, CSS, Javascript, Bootstrap, React, Redux, and so on.<br/>
              <strong>电话</strong>：13632638311<br/>
              <strong>邮箱</strong>: 1677385043@qq.com
            </p>
          </article>
        </section>
      </div>
    );
  }
}

class MainContent extends React.Component {
/*   constructor(props) {
    super(props);
  } */

  render() {
    return (
      <div>
        <section id="projects">
          <h2>我的作品</h2>
          <div id="my-works" className="row">
            <a href="https://gmuggle.github.io/cash-register" target="_blank" rel="noopener noreferrer" className={CONTENT_LAYOUT}>
              <figure className="project-tile">
                <img className="img-resposive" src={cashRegister} alt=""/>
                <figcaption>A web cash register</figcaption>
              </figure>
            </a>
            
            <a href="./survey.html" target="_blank" className={CONTENT_LAYOUT}>
              <figure className="project-tile">
                <img className="img-resposive" src={survey} alt=""/>
                <figcaption>Survey form</figcaption>
              </figure>
            </a>
            <a href="./product-landing-page.html" target="_blank" className={CONTENT_LAYOUT}>
              <figure className="project-tile">
                <img className="img-resposive" src={productLanding} alt=""/>
                <figcaption>Product landing page</figcaption>
              </figure>
            </a>
            <a href="./technical-documentation-page.html" target="_blank" className={CONTENT_LAYOUT}>
              <figure className="project-tile">
                <img className="img-resposive" src={documentation} alt=""/>
                <figcaption>Technical documentation page</figcaption>
              </figure>
            </a>

            <a href="https://gmuggle.github.io/javascript-calculator" target="_blank" rel="noopener noreferrer" className={"more-works hidden " + CONTENT_LAYOUT}>
              <figure>
                <img className="img-resposive" src={calculator} alt=""/>
                <figcaption>Javascript calculator</figcaption>
              </figure>
            </a>
            <a href="https://gmuggle.github.io/drum-machine" target="_blank" rel="noopener noreferrer" className={"more-works hidden " + CONTENT_LAYOUT}>
              <figure>
                <img className="img-resposive" src={drum} alt=""/>
                <figcaption>Drum machine</figcaption>
              </figure>
            </a>
            <a href="https://gmuggle.github.io/markdown-previewer" target="_blank" rel="noopener noreferrer" className={"more-works hidden " + CONTENT_LAYOUT}>
              <figure>
                <img className="img-resposive" src={markdowmPreviewer} alt=""/>
                <figcaption>A markdown previewer</figcaption>
              </figure>
            </a>
            <a href="https://gmuggle.github.io/pomodoro-clock" target="_blank" rel="noopener noreferrer" className={"more-works hidden " + CONTENT_LAYOUT}>
              <figure>
                <img className="img-resposive" src={pomodoro} alt=""/>
                <figcaption>A pomodoro clock</figcaption>
              </figure>
            </a>
            <a href="https://gmuggle.github.io/random-quote-machine" target="_blank" rel="noopener noreferrer" className={"more-works hidden " + CONTENT_LAYOUT}>
              <figure>
                <img className="img-resposive" src={randomQuote} alt=""/>
                <figcaption>A random quote machine</figcaption>
              </figure>
            </a>
            <a href="./tributePage.html" target="_blank" className={"more-works hidden " + CONTENT_LAYOUT}>
              <figure>
                <img className="img-resposive" src={tribute} alt="" />
                <figcaption>Tribute page</figcaption>
              </figure>
            </a>
          </div>
          <button id="show" className="btn btn-default" type="button" onClick={this.props.showOrHide}><strong>查看全部</strong></button>
        </section>

        
      </div>
    );
  }
}

const MyFooter = function() {
  return (
    <div>
      <section id="contact">
          <h1>欢迎联系</h1>
          <ul className="row">
            <li className={CONTACT_LAYOUT}><a href="https://github.com/Gmuggle/something-result-in-learning">GITHub</a></li>
            <li className={CONTACT_LAYOUT}><a id="profile-link" href="https://www.freecodecamp.org/fcce803ac0f-0df7-44ee-b3f6-ac7340d4c364">FFC</a></li>
            <li className={CONTACT_LAYOUT}><a href="https://mail.qq.com/cgi-bin/loginpage">1677385043@qq.com</a></li>
            <li className={CONTACT_LAYOUT}><a href="https://www.zhipin.com">通过招聘网站联系</a></li>
          </ul>
        </section>
      
    </div>
  );
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toggle: false
    }
    this.showOrHide = this.showOrHide.bind(this);
  }

  showOrHide(event) {
    let showMore = document.querySelectorAll(".more-works");
    //let btn = document.querySelector("show");
    if (this.state.toggle === false){
      showMore.forEach(item => item.classList.remove("hidden"));
      this.setState({
        toggle: true
      });
      event.target.textContent = "收起";
    }else {
      showMore.forEach(item => item.classList.add("hidden"));
      this.setState({
        toggle: false
      });
      event.target.textContent = "查看更多"
    }
  }


  render() {
    return (
      <div className="App">
        <header id="wrapper-header">
          <MyHeader />
        </header>
        <main>
          <Introduction />
          <MainContent showOrHide={this.showOrHide}/>
        </main>
        <footer>
          <MyFooter />
        </footer>
      </div>
    );
  }
}

export default App;
