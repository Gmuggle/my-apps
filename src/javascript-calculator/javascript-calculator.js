import React from 'react';
//import logo from './logo.svg';
import './javascript-calculator.css';

const INPUTS = [{name: "zero", symbol: 0}, 
{name: "one", symbol: 1}, 
{name: "two", symbol: 2}, 
{name: "three", symbol: 3}, 
{name: "four", symbol: 4}, 
{name: "five", symbol: 5}, 
{name: "six", symbol: 6}, 
{name: "seven", symbol: 7}, 
{name: "eight", symbol: 8}, 
{name: "nine", symbol: 9},
{name: "decimal", symbol: "."}];

const OPERATOR = [{name: "add", symbol: "+"}, {name: "subtract", symbol: "-"}, {name: "multiply", symbol: "*"}, {name: "divide", symbol: "/"}];

const APP_LAYOUT = "col-xs-6 col-xs-offset-1 col-md-4 col-md-offset-4 row";
const DISPLAY_LAYOUT = "col-xs-12 col-md-12 col-lg-12";
const CLEANER_LAYOUT = "col-xs-6 col-md-6 col-lg-6";
const SINGLE_INPUT_LAYOUT = "col-xs-3 col-md-3 col-lg-3";
const SINGLE_OPERATOR_LAYOUT = "col-xs-3 col-md-3 col-lg-3";
//const CALCULATE_LAYOUT = "col-xs-12 col-md-12 col-lg-12";
const ZERO_LAYOUT = "col-xs-8 col-md-8 col-lg-8";
const SUB_PART_INPUT_LAYOUT = "col-xs-9 col-md-9 col-lg-9";
const EQUALS_CONTAINER_LAYOUT = "col-xs-3 col-md-3 col-lg-3";
const SUB_PART_SINGLE_INPUT_LAYOUT = "col-xs-4 col-md-4 col-lg-4";

const BTN_STYLE = "btn btn-default";


class Display extends React.Component {
  render() {
    return (
      <div id="display" className={DISPLAY_LAYOUT}>
        <p id="input">{this.props.currentString}</p>
        <p id="current">{this.props.currentInput}</p>
      </div>
    );
  }
}

class SingleInput extends React.Component {
  render() {
    return (
      <div id={this.props.userInputEng} className={this.props.styleSet}>
        <button className={BTN_STYLE} onClick={this.props.handleInput}>{this.props.userInput}</button>
      </div>
    );
  }
}

/* class Input extends React.Component {
  render() {
    return (
      <div className={INPUT_LAYOUT}>
        <SingleInput userInputEng={this.props.userInputEng[0]} userInput={this.props.userInput[0]}/>
        <SingleInput userInputEng={this.props.userInputEng[1]} userInput={this.props.userInput[1]}/>
        <SingleInput userInputEng={this.props.userInputEng[2]} userInput={this.props.userInput[2]}/>
        <SingleInput userInputEng={this.props.userInputEng[3]} userInput={this.props.userInput[3]}/>
        <SingleInput userInputEng={this.props.userInputEng[4]} userInput={this.props.userInput[4]}/>
        <SingleInput userInputEng={this.props.userInputEng[5]} userInput={this.props.userInput[5]}/>
        <SingleInput userInputEng={this.props.userInputEng[6]} userInput={this.props.userInput[6]}/>
        <SingleInput userInputEng={this.props.userInputEng[7]} userInput={this.props.userInput[7]}/>
        <SingleInput userInputEng={this.props.userInputEng[8]} userInput={this.props.userInput[8]}/>
        <SingleInput userInputEng={this.props.userInputEng[9]} userInput={this.props.userInput[9]}/>
        <Decimal decimalEng={this.props.userInputEng[10]} decimal={this.props.userInput[10]}/>
      </div>
    );
  }
} */

class SingleOperator extends React.Component {
  render() {
    return (
      <div id={this.props.operator.name} className={this.props.styleSet}>
        <button className={BTN_STYLE} onClick={this.props.handleInput}>{this.props.operator.symbol}</button>
      </div>
    );
  }
}

/* class Operators extends React.Component {
  render() {
    return (
      <div className={OPERATORS_LAYOUT}>
        <SingleOperator operator={this.props.operators[0]} />
        <SingleOperator operator={this.props.operators[1]} />
        <SingleOperator operator={this.props.operators[2]} />
        <SingleOperator operator={this.props.operators[3]} />
      </div>
    );
  }
} */

class Calculate extends React.Component {
  render() {
    return (
      <div id="equals" className={EQUALS_CONTAINER_LAYOUT}>
        <button className={BTN_STYLE} onClick={this.props.handleCalculate}>=</button>
      </div>
    );
  }
}

class Cleaner extends React.Component {
  render() {
    return (
      <div id="clear" className={CLEANER_LAYOUT}>
        <button className={BTN_STYLE} onClick={this.props.handleCleaner}>AC</button>
      </div>
    );
  }
}

class JavascriptCalculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInput: INPUTS,
      operators: OPERATOR,
      currentInput: "0",
      currentString: "",
      result: ""
    }
    this.handleInput = this.handleInput.bind(this);
    this.handleCalculate = this.handleCalculate.bind(this);
    this.handleCleaner = this.handleCleaner.bind(this);
  }

  handleInput(event) {
    //当前值为0时
    if (this.state.currentInput === "0"){
      //输入非小数点，则直接覆盖当前（显示）值
      if (event.target.innerText !== INPUTS[10].symbol){
        this.setState({
          currentInput: event.target.innerText,
          currentString: this.state.currentString.concat(event.target.innerText)
        });
      }else {
        //输入小数点
        this.setState({
          currentInput: this.state.currentInput.concat(event.target.innerText)
        });
        //若计算式为空，则补0加小数点
        if (this.state.currentString === ""){
          this.setState({
            currentString: this.state.currentString.concat("0", event.target.innerText)
          });
        //若计算式不为空，即当前值为0的情况下，又按了一次0，导致计算式更新为0而非空，则把小数点连接到后面
        }else {
          this.setState({
            currentString: this.state.currentString.concat(event.target.innerText)
          });
        }
      }
    //当前值为上次的计算结果时
    }else if (this.state.currentInput === this.state.result){
      //输入数字，则直接覆盖当前值和当前字符串
      if ((/[0-9]/).test(event.target.innerText)){
        this.setState({
          currentInput: event.target.innerText,
          currentString: event.target.innerText
        });
      //输入小数点，则直接以0.X的小数覆盖当前值和当前字符串
      }else if(event.target.innerText === INPUTS[10].symbol){
        this.setState({
          currentInput: "0" + event.target.innerText,
          currentString: "0" + event.target.innerText
        });
      //输入运算符，则把当前值覆盖为运算符，当前字符串则以上一次的计算结果开始继续运算
      }else {
        this.setState({
          currentInput: event.target.innerText,
          currentString: this.state.result.concat(event.target.innerText)
        });
      }
    //当前值不为0时
    }else {
      //输入运算符，则覆盖当前显示值
      if ((/[*/+-]/).test(event.target.innerText)) {
        this.setState({
          currentInput: event.target.innerText
        });
        //输入减号以外的运算符
        if (event.target.innerText !== OPERATOR[1].symbol){
          //若存储的计算式中最后输入位已经存在一个除减号以外的运算符或小数点，则替换最后的输入位，不能在计算式中连续记录运算符，小数点后无数字则直接替换为运算符
          if ((/[*/+.]/).test(this.state.currentString[this.state.currentString.length - 1])) {
            this.setState({
              currentString: this.state.currentString.slice(0, this.state.currentString.length - 1).concat(event.target.innerText)
            });
          //若存储的计算式中的最后输入位是减号
          }else if(this.state.currentString[this.state.currentString.length - 1] === OPERATOR[1].symbol){
            //则再查看减号位的前一位，若该位是其他运算符，则把连续的运算符全部替换为用户最后输入的这个运算符
            if ((/[*/+.]/).test(this.state.currentString[this.state.currentString.length - 2])){
              this.setState({
                currentString: this.state.currentString.slice(0, this.state.currentString.length - 2).concat(event.target.innerText)
              });
            //若该位不是运算符，则直接替换减号为用户最后输入的运算符
            }else {
              this.setState({
                currentString: this.state.currentString.slice(0, this.state.currentString.length - 1).concat(event.target.innerText)
              });
            }
          //若存储的计算式的最后输入位不是运算符，则直接连接记录
          }else {
            this.setState({
              currentString: this.state.currentString.concat(event.target.innerText)
            });
          }
        //输入减号
        }else {
          //若存储的计算式的最后输入位也是减号或小数点，则互相替换，不能连续记录减号，小数点后无数字则替换为运算符
          if ((/[-.]/).test(this.state.currentString[this.state.currentString.length - 1])){
            this.setState({
              currentString: this.state.currentString.slice(0, this.state.currentString.length - 1).concat(event.target.innerText)
            });
          //若存储的计算式的最后输入位不是减号，则允许记录一次减号，作为负值
          }else {
            this.setState({
              currentString: this.state.currentString.concat(event.target.innerText)
            });
          }
        }
      //输入非运算符
      }else {
        //输入数字
        if (event.target.innerText !== INPUTS[10].symbol) {
          //console.log(this.state.currentInput.indexOf(INPUTS[10]));
          //当前值不是运算符，则连接数字
          if ((/[0-9.]/).test(this.state.currentInput)){
            this.setState({
              currentInput: this.state.currentInput.concat(event.target.innerText),
              currentString: this.state.currentString.concat(event.target.innerText)
            });
          //当前值是运算符，则覆盖为数字
          }else {
            this.setState({
              currentInput: event.target.innerText,
              currentString: this.state.currentString.concat(event.target.innerText)
            });
          }
        //输入小数点，则仅在当前值不含小数点时添加进小数点
        }else {
          //console.log(this.state.currentInput.indexOf(INPUTS[10]));
          if (this.state.currentInput.indexOf(INPUTS[10].symbol) === -1) {
            //若当前值为非数字，则在小数点前补0并覆盖当前值
            if ((/[^0-9]/).test(this.state.currentInput)){
              this.setState({
                currentInput: "0" + event.target.innerText,
                currentString: this.state.currentString.concat("0", event.target.innerText)
              });
            }else {
              this.setState({
                currentInput: this.state.currentInput.concat(event.target.innerText),
                currentString: this.state.currentString.concat(event.target.innerText)
              });
            }
          }
        }
      }
    }
  }

  

  handleCalculate(event){
    //把输入的计算式，即当前字符串，拆分为单个字符的数组
    let raw = this.state.currentString.split("");
    //把计算式中的“减号”替换为“加号负号”，但保留计算式中的负号；由此把计算式拆分为N个子表达式的和，每个子表达式不是单个数，就是仅含乘除的运算
    for (let i = 0; i < raw.length; i++){
      if (raw[i] === "-" && (/\d/).test(raw[i - 1])){
        raw[i] = "+-";
      }
    }
    //把数组组合成N个子表达式的和，每个子表达式不是单个数，就是仅含乘除的运算
    let newStr = raw.join("");
    //console.log(newStr);
    let sumResult = 0;

    //因为已经把计算式表达成和的计算，故用加号拆分成N个子表达式的数组
    let newCal = newStr.split("+");
    for(let j = 0; j < newCal.length; j++){
      //若该项为仅含乘除运算的子表达式
      if (newCal[j].includes("/") || newCal[j].includes("*")) {
        //以乘号、除号拆分出数字，即运算对象
        let subNum = newCal[j].split(/[*/]/).map((item) => Number(item));
        //console.log(subNum);
        //把该子表达式的运算符（乘号、除号）全部提取出来
        let cal = newCal[j].match(/[*/]/g);
        //计算该子表达式的值
        let mediaResult = subNum[0];
        for (let n = 0; n < cal.length; n++) {
          if (cal[n] === "*"){
            mediaResult = mediaResult * subNum[n + 1];
          }else {
            mediaResult = mediaResult / subNum[n + 1];
          }
        }
        //把该子表达式的值计入和中
        sumResult += mediaResult;
      //若该项为负数或正数，直接转换为数字后计入和中
      }else {
        sumResult += Number(newCal[j]);
      }
    }
    //更新状态
    this.setState({
      result: sumResult.toString(),
      currentInput: sumResult.toString(),
      currentString: this.state.currentString.concat("=", sumResult.toString())
    });
  }

  handleCleaner() {
    this.setState({
      currentInput: "0",
      currentString: "",
      result: ""
    });
  }

  render() {
    return (
      <div className="row">
        <div id="entire-app" className={APP_LAYOUT}>
          <Display currentInput={this.state.currentInput} currentString={this.state.currentString} />

          <Cleaner handleCleaner={this.handleCleaner}/>
          <SingleOperator styleSet={SINGLE_OPERATOR_LAYOUT} operator={this.state.operators[0]} handleInput={this.handleInput} />
          <SingleOperator styleSet={SINGLE_OPERATOR_LAYOUT} operator={this.state.operators[1]} handleInput={this.handleInput} />

          <SingleInput styleSet={SINGLE_INPUT_LAYOUT} userInputEng={this.state.userInput[1].name} userInput={this.state.userInput[1].symbol} handleInput={this.handleInput} />
          <SingleInput styleSet={SINGLE_INPUT_LAYOUT} userInputEng={this.state.userInput[2].name} userInput={this.state.userInput[2].symbol} handleInput={this.handleInput} />
          <SingleInput styleSet={SINGLE_INPUT_LAYOUT} userInputEng={this.state.userInput[3].name} userInput={this.state.userInput[3].symbol} handleInput={this.handleInput} />
          <SingleOperator styleSet={SINGLE_OPERATOR_LAYOUT} operator={this.state.operators[2]} handleInput={this.handleInput} />

          <SingleInput styleSet={SINGLE_INPUT_LAYOUT} userInputEng={this.state.userInput[4].name} userInput={this.state.userInput[4].symbol} handleInput={this.handleInput} />
          <SingleInput styleSet={SINGLE_INPUT_LAYOUT} userInputEng={this.state.userInput[5].name} userInput={this.state.userInput[5].symbol} handleInput={this.handleInput} />
          <SingleInput styleSet={SINGLE_INPUT_LAYOUT} userInputEng={this.state.userInput[6].name} userInput={this.state.userInput[6].symbol} handleInput={this.handleInput} />
          <SingleOperator styleSet={SINGLE_OPERATOR_LAYOUT} operator={this.state.operators[3]} handleInput={this.handleInput} />

          <div id="sub-part" className="row">
            <div id="sub-part-input" className={SUB_PART_INPUT_LAYOUT}>
            <SingleInput styleSet={SUB_PART_SINGLE_INPUT_LAYOUT} userInputEng={this.state.userInput[7].name} userInput={this.state.userInput[7].symbol} handleInput={this.handleInput} />
            <SingleInput styleSet={SUB_PART_SINGLE_INPUT_LAYOUT} userInputEng={this.state.userInput[8].name} userInput={this.state.userInput[8].symbol} handleInput={this.handleInput} />
            <SingleInput styleSet={SUB_PART_SINGLE_INPUT_LAYOUT} userInputEng={this.state.userInput[9].name} userInput={this.state.userInput[9].symbol} handleInput={this.handleInput} />
            <SingleInput styleSet={ZERO_LAYOUT} userInputEng={this.state.userInput[0].name} userInput={this.state.userInput[0].symbol} handleInput={this.handleInput} />
            <SingleInput styleSet={SUB_PART_SINGLE_INPUT_LAYOUT} userInputEng={this.state.userInput[10].name} userInput={this.state.userInput[10].symbol} handleInput={this.handleInput} />
            </div>
            <Calculate handleCalculate={this.handleCalculate} />
          </div>
          
        </div>
      </div>
    );
  }
}

export default JavascriptCalculator;
