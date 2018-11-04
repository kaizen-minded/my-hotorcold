import React from 'react';

import './feedback.css';

export default class Feedback extends React.Component {
    //Create a method that will send user feedback
    render(){
        return (
            <div>
                <h2>{this.props.feedback}</h2>
            </div>
        ); 
    }    
    
};