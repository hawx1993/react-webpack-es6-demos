//var HelloSayer = require('./HelloSayer');
import HelloSayer from './HelloSayer'
var React = require('react');

var HelloForm = React.createClass({
    getInitialState() {
        return {
            name: 'trigkit4'
        };
    },
    render() {
        return (
            <div>
                <input type="text" onChange={this.onChange} />
                <HelloSayer name={this.state.name} />
            </div>
        );
    },
    onChange(e) {
        this.setState({
            name: e.target.value
        });
    }
});

module.exports = HelloForm;