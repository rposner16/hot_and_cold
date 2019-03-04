import React from 'react';
import HeatLevel from './heat-level'
import GuessForm from './guess-form'
import GuessNumber from './guess-number'
import GuessMarker from './guess-marker'
import NewGame from './new-game';

export default class Guess extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userGuess: '',
            level: 'Make your guess!',
            correctNum: Math.floor(Math.random() * (100 - 1)) + 1,
            numGuesses: 0,
            guessArr: []
        };
    }

    changeLevel(userGuess) {
        let tempArr = this.state.guessArr;
        tempArr.push(userGuess);
        this.setState({
            userGuess: userGuess,
            guessArr: tempArr
        });
        this.incrementGuess(this.state.numGuesses);
    }

    incrementGuess(numGuesses) {
        this.setState({
            numGuesses: numGuesses + 1
        });
    }

    resetState(e) {
        this.setState({
            userGuess: '',
            level: 'Make your guess!',
            correctNum: Math.floor(Math.random() * (100 - 1)) + 1,
            numGuesses: 0,
            guessArr: [] 
        });
    }

    render() {
        let level;
        if (Math.abs(this.state.correctNum - this.state.userGuess) !== 0) {
            if (Math.abs(this.state.correctNum - this.state.userGuess) < 10) {
                level = 'Hot';
            }
            else {
                level = 'Cold';
            }
        }
        else {
            level = "You won! Click 'new game' to play again.";
        }

        return (
            <div className="guess">
                <NewGame onClick={e => this.resetState(e)}></NewGame>
                <HeatLevel level={level}></HeatLevel>
                <GuessForm onGuess={guess => this.changeLevel(guess)}></GuessForm>
                <GuessNumber num={this.state.numGuesses}></GuessNumber>
                <GuessMarker guesses={this.state.guessArr}></GuessMarker>
            </div>
        );
    }
}