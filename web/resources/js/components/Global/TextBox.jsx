import React, { Component } from 'react';

export default class TextBox extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isEditing: false
        };
        this.update = this.update.bind(this);
        this.edit = this.edit.bind(this);
    }

    update() {
        console.debug(this.props.update);
        console.debug(this.refs);
        this.props.update(this.refs.messageTextBox.value);
        this.setState(
            {
                isEditing: false
            }
        );
    }

    edit() {
        this.setState({
            isEditing: true
        })
    }

    render() {
        return (
            <div>
                {this.props.label}<br />
                <input type="text" ref="messageTextBox" disabled={!this.state.isEditing}/>
                {
                    this.state.isEditing
                        ? <button onClick={this.update}>Update</button>
                        : <button onClick={this.edit}>Edit</button>
                }
            </div>
        );
    }

};