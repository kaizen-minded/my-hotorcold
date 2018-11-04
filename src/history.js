import React from 'react';

import "./history.css";

export default class History extends React.Component {


    render() {
        let guessHistory = this.props.history.map(userguess => {
            return <li>{userguess}</li>
        })
        return(
            <div>
                <p>Guess #<span id="count">{guessHistory.length}</span></p>
                <ul id="guessList" className="guessBox clearfix">
                {guessHistory}


                </ul>
            </div>
        )
    }
}