import React, {Component} from 'react';
import {collector} from 'coren';
import './style.css';

@collector()
export default class Root extends Component {
  static defineHead() {
    return {
      title: "home",
      description: "home description"
    };
  }

  render() {
    return (
      <div>
        <h1 className="hello">Hello coren!!</h1>
      </div>
    );
  }
}
