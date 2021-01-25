import React, { useState } from 'react';

function Counter() {
    const [number, setNumber] = useState(0);

    const incNumber = () => {
        setNumber(number + 1);
    };

    const deIncNumber = () => {
        setNumber(number - 1);
    };

    const changeText = () => {
        let className = '';
        if (number > 0) {
            className = 'green';
        } else if (number === 0) {
            className = '';
        } else {
            className = 'red';
        }
        return className;
    };

    return (
        <div className="counter-container">
            <h1 className="title title-effect">Counter</h1>
            <h1 id="counter" className={changeText()}>
                {number}
            </h1>
            <div className="btn-container">
                <button
                    className="btn counterBtn prevBtn"
                    onClick={() => deIncNumber()}
                >
                    Sub
                </button>
                <button
                    className="btn counterBtn nextBtn"
                    onClick={() => incNumber()}
                >
                    Add
                </button>
            </div>
        </div>
    );
}

export default Counter;
