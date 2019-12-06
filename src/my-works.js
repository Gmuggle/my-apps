import React from 'react';
//import logo from './logo.svg';
import './App.css';
import tribute from './tributePage.PNG';
import survey from './survey-from.PNG';
import productLanding from './product-landing-page.PNG';
import documentation from './documentation.PNG';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';



//layout setting
const HEADER_LAYOUT = "col-xs-4 col-md-4";
//const CONTENT_WRAPPER_LAYOUT = "col-xs-12 col-md-12";
const CONTENT_LAYOUT = "col-xs-4 col-md-3";
const CONTACT_LAYOUT = "col-xs-6 col-md-3";
//const FOOTER_LAYOUT = "col-xs-12 col-md-12";

const MyHeader = function() {
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

const MainContent = function() {
  return (
    <div>

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
        </div>
        <button className="btn btn-default">查看全部</button>
      </section>

      <section id="contact">
        <h1>让我们一起工作如何</h1>
        <ul className="row">
          <li className={CONTACT_LAYOUT}><a href="https://github.com/Gmuggle/something-result-in-learning">GITHub</a></li>
          <li className={CONTACT_LAYOUT}><a id="profile-link" href="https://www.freecodecamp.org/fcce803ac0f-0df7-44ee-b3f6-ac7340d4c364">FFC</a></li>
          <li className={CONTACT_LAYOUT}><a href="https://mail.qq.com/cgi-bin/loginpage">1677385043@qq.com</a></li>
          <li className={CONTACT_LAYOUT}><a href="#" target="_blank">Call me</a></li>
        </ul>
      </section>
    </div>
  );
}

const MyFooter = function() {
  return (
    <div>
      <p>期待你的联系。</p>
    </div>
  );
}

function App() {
  return (
    <div className="App container-fluid">
      <header>
        <MyHeader />
      </header>
      <main>
        <MainContent />
      </main>
      <footer>
        <MyFooter />
      </footer>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();