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

/* import JavascriptCalculator from './javascript-calculator.js';
import DrumMachine from './drum-machine.js';
import PomodoroClock from './pomodoro-clock.js';
import MarkdownPreviewer from './markdown-previewer.js';
import RandomQuoteMachine from './random-quote-machine.js'; */


//layout setting
const HEADER_LAYOUT = "col-xs-4 col-md-4";
//const CONTENT_WRAPPER_LAYOUT = "col-xs-12 col-md-12";
const CONTENT_LAYOUT = "col-xs-6 col-md-4 col-lg-4";
const CONTACT_LAYOUT = "col-xs-6 col-md-3";
//const FOOTER_LAYOUT = "col-xs-12 col-md-12";

class MyHeader extends React.Component {
  render(){
    return (
      <div>
        <nav id="navbar">
          <ul className="row">
              <li className={HEADER_LAYOUT}><a href="#welcom-section">关于</a></li>
              <li className={HEADER_LAYOUT}><a href="#projects">作品</a></li>
              <li className={HEADER_LAYOUT}><a href="#profile-link">联系我</a></li>
          </ul>
        </nav>
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
        <section id="welcome-section">
          <h1>你好！我是李康</h1>
        </section>

        <section id="projects">
          <div id="my-works" className="row">
            <a href="./tributePage.html" target="_blank" className={CONTENT_LAYOUT}>
              <figure class="project-tile">
                <img src={tribute} alt="" />
                <figcaption>Tribute page</figcaption>
              </figure>
            </a>
            <a href="./survey.html" target="_blank" className={CONTENT_LAYOUT}>
              <figure class="project-tile">
                <img src={survey} alt=""/>
                <figcaption>Survey form</figcaption>
              </figure>
            </a>
            <a href="./product-landing-page.html" target="_blank" className={CONTENT_LAYOUT}>
              <figure class="project-tile">
                <img src={productLanding} alt=""/>
                <figcaption>Product landing page</figcaption>
              </figure>
            </a>
            <a href="./technical-documentation-page.html" target="_blank" className={CONTENT_LAYOUT}>
              <figure class="project-tile">
                <img src={documentation} alt=""/>
                <figcaption>Technical documentation page</figcaption>
              </figure>
            </a>

            <a href="https://gmuggle.github.io/javascript-calculator" target="_blank" rel="noopener noreferrer" className={"more-works hidden " + CONTENT_LAYOUT}>
              <figure>
                <img src={calculator} alt=""/>
                <figcaption>Javascript calculator</figcaption>
              </figure>
            </a>
            <a href="https://gmuggle.github.io/drum-machine" target="_blank" rel="noopener noreferrer" className={"more-works hidden " + CONTENT_LAYOUT}>
              <figure>
                <img src={drum} alt=""/>
                <figcaption>Drum machine</figcaption>
              </figure>
            </a>
            <a href="https://gmuggle.github.io/markdown-previewer" target="_blank" rel="noopener noreferrer" className={"more-works hidden " + CONTENT_LAYOUT}>
              <figure>
                <img src={markdowmPreviewer} alt=""/>
                <figcaption>A markdown previewer</figcaption>
              </figure>
            </a>
            <a href="https://gmuggle.github.io/pomodoro-clock" target="_blank" rel="noopener noreferrer" className={"more-works hidden " + CONTENT_LAYOUT}>
              <figure>
                <img src={pomodoro} alt=""/>
                <figcaption>A pomodoro clock</figcaption>
              </figure>
            </a>
            <a href="https://gmuggle.github.io/random-quote-machine" target="_blank" rel="noopener noreferrer" className={"more-works hidden " + CONTENT_LAYOUT}>
              <figure>
                <img src={randomQuote} alt=""/>
                <figcaption>A random quote machine</figcaption>
              </figure>
            </a>
          </div>
          <button id="show" className="btn btn-default" type="button" onClick={this.props.showOrHide}>查看全部</button>
        </section>

        <section id="contact">
          <h1>欢迎联系</h1>
          <ul className="row">
            <li className={CONTACT_LAYOUT}><a href="https://github.com/Gmuggle/something-result-in-learning">GITHub</a></li>
            <li className={CONTACT_LAYOUT}><a id="profile-link" href="https://www.freecodecamp.org/fcce803ac0f-0df7-44ee-b3f6-ac7340d4c364">FFC</a></li>
            <li className={CONTACT_LAYOUT}><a href="https://mail.qq.com/cgi-bin/loginpage">1677385043@qq.com</a></li>
            <li className={CONTACT_LAYOUT}><a href="#contact">通过招聘网站联系</a></li>
          </ul>
        </section>
      </div>
    );
  }
}

const MyFooter = function() {
  return (
    <div>
      <p>期待你的联系。</p>
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
      event.target.innerText = "收起";
    }else {
      showMore.forEach(item => item.classList.add("hidden"));
      this.setState({
        toggle: false
      });
      event.target.innerText = "查看更多"
    }
  }


  render() {
    return (
      <div className="App container-fluid">
        <header>
          <MyHeader />
        </header>
        <main>
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
