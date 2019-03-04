import React from 'react';

export default function GuessMarker(props) {
    const guesses = props.guesses.map((guess, index) => (
        <li key={index}>
            {guess}
        </li>
    ));

    return (
        <div>
            <ul>
                {guesses}
            </ul>
        </div>
    );
}