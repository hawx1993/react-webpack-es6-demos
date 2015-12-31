/**
 * Created by trigkit4 on 15/12/31.
 */
const React = require('react');
const ReactDOM = require('react-dom');
var style = require('./app.css');
ReactDOM.render(
    <div>
        <h1 className={style.h1}>Hello World</h1>
        <h2 className="h2">Hello Webpack</h2>
    </div>,
    document.getElementById('example')
);