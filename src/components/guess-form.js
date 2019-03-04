import React from 'react';

export default class GuessForm extends React.Component {
    
    onSubmit(event) {
        event.preventDefault();

        if (this.props.onGuess) {
            const val = parseInt(this.input.value);
            this.props.onGuess(val);
        }
    }

    render() {
        return (
            <form onSubmit={e => this.onSubmit(e)}>
                <input type="text" id="guessInput" placeholder="Enter your guess" ref={input => (this.input = input)}></input>
                <button type="submit">Guess</button>
            </form>
        );
    }
}