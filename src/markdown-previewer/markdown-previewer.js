import React from 'react';
//import logo from './logo.svg';
import './markdown-previewer.css';
import marked from 'marked';


const placeHolderText = `# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:
  
Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`
  
You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.com), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | ------------- 
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbererd lists too.
1. Use just 1s if you want! 
1. But the list goes on...
- Even if you use dashes or asterisks.
* And last but not least, let's not forget embedded images:

![React Logo w/ Text](https://goo.gl/Umyytc)`;

// Create reference instance
//const marked = require('marked');

// Set options
// `highlight` example uses `highlight.js`
/* marked.setOptions({
  pedantic: false,
  gfm: true,
  breaks: true,
  sanitize: false,
  smartLists: true,
  smartypants: false,
  xhtml: false
}); */

const minIcon = "fa fa-window-minimize";
const maxIcon = "fa fa-window-maximize";

const maxSize = "max well col-xs-12 col-md-12";
const minSize = "min";
const normalSize = "well col-xs-10 col-xs-offset-1 col-md-4 col-md-offset-1";


class Editor extends React.Component {
/*     constructor(props) {
        super(props);
    } */

    render() {
        return (
            <div>
                <div id="editor-wapper" className={this.props.name}>
                <div id="editor-bar" className="row">
                    <h2 className="col-xs-6 col-md-6 text-left">Editor</h2>
                    <button className="btn btn-default col-xs-2 col-xs-offset-4 col-md-2 col-md-offset-4 col-lg-1 col-lg-offset-5" type="button" onClick={this.props.resize}><i className={this.props.btnIcon}></i></button>
                </div>
                <textarea id="editor" onChange={this.props.handle}>{placeHolderText}</textarea>
                </div>
            </div>
        );
    }
}

class Previewer extends React.Component {
/*     constructor(props) {
        super(props);
    } */

    render() {
        return (
            <div>
                <div id="preview-wrapper" className={this.props.name}>
                <div id="preview-bar" className="row">
                    <h2 className="col-xs-6 col-md-6 text-left">Previewer</h2>
                    <button className="btn btn-default col-xs-2 col-xs-offset-4 col-md-2 col-md-offset-4 col-lg-1 col-lg-offset-5" type="button" onClick={this.props.resize}><i className={this.props.btnIcon}></i></button>
                </div>
                <div id="preview" className={this.props.previewHeight} dangerouslySetInnerHTML={{__html: marked(this.props.text)}}></div>
                </div>
            </div>
        );
    }
}

class MarkdownPreviewer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            input: placeHolderText,

            editorSize: false,
            editorClass: normalSize,
            editorBtn: maxIcon,

            previewSize: false,
            previewClass: normalSize,
            previewBtn: maxIcon
        };
        this.handleInput = this.handleInput.bind(this);
        this.resizeEditor = this.resizeEditor.bind(this);
        this.resizePreview = this.resizePreview.bind(this);
    }

    handleInput(event) {
        this.setState({
            input: event.target.value
        });
    }

    resizeEditor() {
        if (this.state.editorSize === false) {
            this.setState({
                editorSize: true,
                editorClass: maxSize,
                editorBtn: minIcon,
                previewClass: minSize,
            });
        }else {
            this.setState({
                editorSize: false,
                editorClass: normalSize,
                editorBtn: maxIcon,
                previewClass: normalSize
            });
        }
    }

    resizePreview() {
        if (this.state.previewSize === false) {
            this.setState({
                previewSize: true,
                previewClass: maxSize,
                previewBtn: minIcon,
                editorClass: minSize
            });
        }else {
            this.setState({
                previewSize: false,
                previewClass: normalSize,
                previewBtn: maxIcon,
                editorClass: normalSize
            });
        }
    }

    render() {
        return (
            <div>
                <Editor handle={this.handleInput} resize={this.resizeEditor} name={this.state.editorClass} btnIcon={this.state.editorBtn} />
                <Previewer text={this.state.input} resize={this.resizePreview} name={this.state.previewClass} btnIcon={this.state.previewBtn} /> 
            </div>
        );
    }
}

export default MarkdownPreviewer;
