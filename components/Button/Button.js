const React = require("react");

class Button extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let style = `btn-${this.props.variant} shadow bg-gradient`;

        if (props.size) {
            style += `btn-${this.props.size}`;
        } else {
            style += 'btn';
        }

        return (React.createElement('button', {className: style}, this.props.text));
    }
}

export default Button;