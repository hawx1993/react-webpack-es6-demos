/**
 * Created by trigkit4 on 15/12/31.
 */
const React = require('react');
const ReactDOM = require('react-dom');
var style = require('./app.css');
var Input = React.createClass({
    getInitialState: function () {
        return{
            value: 'hello'
        }
    },
    handleChange: function(event){
        this.setState({
            value: event.target.value
        })
    },
    render: function(){
        var value = this.state.value;
        return(
            <div>
                <input type="text" value={value} onChange={this.handleChange}/>
                <p>{a}</p>
            </div>
        )
    }
});
var a = React.createElement('a',{
    className: 'link',
    href: 'https://www.baidu.com'
},'React');//<a class='link' href='https://www.baidu.com'>React</a>
ReactDOM.render(
    <Input/>,
    document.getElementById('example')
);