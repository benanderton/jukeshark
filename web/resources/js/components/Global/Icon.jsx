import React, { Component } from 'react';

export default class Icon extends Component {
    render() {
        return (
            <i className={'material-icons ' + this.props.size}>{this.props.icon}</i>
        )
    }
}

Icon.defaultProps = {
    size: 'large'
};