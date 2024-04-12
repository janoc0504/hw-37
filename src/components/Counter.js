import React, { Component } from 'react';

class EmojiCounter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            emojis: [
                { emoji: '😊', count: 0 },
                { emoji: '😄', count: 0 },
                { emoji: '😍', count: 0 }
            ],
            winner: null
        };
    }

    handleEmojiClick = (index) => {
        const emojis = [...this.state.emojis];
        emojis[index].count += 1;
        this.setState({ emojis });
    };

    showResults = () => {
        const emojis = [...this.state.emojis];
        let maxCount = -1;
        let winnerEmoji = null;

        emojis.forEach((emoji) => {
            if (emoji.count > maxCount) {
                maxCount = emoji.count;
                winnerEmoji = emoji.emoji;
            }
        });

        this.setState({ winner: winnerEmoji });
    };

    render() {
        return (
            <div className='emoji-counter-container'>
                <h2 className='emoji-counter-title'>Emoji Counter</h2>
                <ul className='emoji-list'>
                    {this.state.emojis.map((emoji, index) => (
                        <li className='emoji-item' key={index}>
              <span onClick={() => this.handleEmojiClick(index)}>
                {emoji.emoji} - {emoji.count}
              </span>
                        </li>
                    ))}
                </ul>
                <button onClick={this.showResults} className='show-results-btn'>Show Results</button>
                {this.state.winner && <p className='winner-text'>Winner: {this.state.winner}</p>}
            </div>
        );
    }
}

export default EmojiCounter;