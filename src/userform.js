import React, { Component } from 'react';

import "./userform.css"

export default class UserForm extends Component {

    onSubmit(e){
        e.preventDefault();
        const guess = this.textInput.value;
        console.log(guess);
        this.props.feedback(guess)
        this.textInput.value = '';
    }

    render () {

        return (
            <div>
                <form onSubmit={(e) => this.onSubmit(e)}>
                    <input type="text" name="userGuess" className="text" maxLength="3"
                    placeholder="Enter your Guess" required ref={input => this.textInput = input }/>
                    <input type="submit" id="guessButton" className="button" name="submit" value="Guess" />
                </form>
            </div>
        )

    }

}