import React, {Component} from 'react';
import {head, ssr, route} from 'coren';
import './style.css';

@route('/')
@head({title: 'Home', description: 'home description'})
@ssr
export default class Index extends Component {
  render() {
    return (
      <div>
        <h1 className="hello">Hello coren!!</h1>
      </div>
    );
  }
}
