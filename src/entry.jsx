/**
 * Created by trigkit4 on 16/3/18.
 */
//var HelloForm = require('./Hello');
import HelloForm from './Hello';
//var React = require('react');
import React from 'react';
var style = require('../app.css');
var $ = function (id) {
    return document.getElementById(id);
};
React.render(<HelloForm />, $('example'));