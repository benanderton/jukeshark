import React, { Component } from 'react';
import Title from './Title';
import TextBox from './TextBox';


export default class Test extends Component {

    constructor(props) {
        super(props);
        this.state = {
          firstName: 'John',
          lastName: 'Smith'
        };
        this.update = this.update.bind(this);
    }

    render() {
        return (
            <div>
                <Title message={'Hello ' + this.state.firstName + ' ' + this.state.lastName} />
                <TextBox label="First name" update={this.update.bind(this, 'firstName')} />
                <TextBox label="Last name" update={this.update.bind(this, 'lastName')} />
            </div>
        )
    }

    update(key, value) {
        let newState = {};
        newState[key] = value;
        this.setState(newState);
    }

}