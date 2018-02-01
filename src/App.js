import React, { Component } from 'react';
import logo from './logo.svg';
import ReactDOM from 'react-dom';
import './App.css';

const tabs = [{
    name: 'Personal',
    content: 'placeholder tab 1'
  },{
    name: 'Education',
    content: 'placeholder tab2'
  },{
    name: 'Social',
    content: 'Content for tab 3'
  }];

const App = (props) => {
  return (
      <Tabs selected = {props.firstSelect || 0}>
      {props.tabs.map(tab => 
        <Pane label={tab.name}>{tab.content}</Pane>)
    }
    </Tabs>
    );
}

const Pane = (props) => {
  return <div>{props.childern}</div>;
}

class Tabs extends React.Component {
  constructor(props) {
    super(props);

    this.state = {selected: this.props.selected};
  }

  _renderTitles(){
    function labels(child, idx){
      let activeClass = (this.state.selected === idx ? 'is-active': '');
      return (
        <li role="tab" key={idx} aria-controls={`panel${idx}`}>
          <a className={activeClass} onClick={this.onClick.bond(this, idx)} href="#">
            {child.props.label}
          </a>
        </li>
      );
    }

    return(
      <ul className="tabs_labels" role="tablist">
        {this.props.children.map(labels.bind(this))}
      </ul>
    );
  }

  onClick(index, event){
    event.preventDefault();
    this.setState({
      selectted: index
    });
  }

  render(){
    return(
        <div className="tabs">
          {this._renderTitles()}

          <div className="tabs_content">
            {this.props.children[this.state.selected]}
          </div>
        </div>
      );
  }
}

//export default App;

ReactDOM.render(<App tabs={tabs} firstSelect={1} />, document.getElementById('app'));