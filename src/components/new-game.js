import React from 'react'

export default function NewGame(props) {
    return (
        <div>
            <button type="button" onClick={e => props.onClick(e)}>New Game</button>
        </div>
    );
}