var React = require('react');

var HelloSayer = React.createClass({
    render() {
        return (<p>Hello {this.props.name}!</p>);
    }
});

module.exports = HelloSayer;