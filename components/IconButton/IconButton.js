const React = require("react");

class IconButton extends React.Component {
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

        let icon = `fas fa-${this.props.icon}`;

        return (
            React.createElement(
                'button',
                {className: style},
                this.props.text,
                React.createElement('i', {className: icon})
            )
        );
    }
}

export default IconButton;