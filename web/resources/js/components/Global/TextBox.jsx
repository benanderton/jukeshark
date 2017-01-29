import React, { Component } from 'react';
import Button from './Button';
import Icon from './Icon';

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
                        ? <Button onClick={this.update}><Icon icon="save" />Update</Button>
                        : <Button onClick={this.edit}><Icon icon="mode_edit" />Edit</Button>
                }
            </div>
        );
    }

};