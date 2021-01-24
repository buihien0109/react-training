import React, { useState } from 'react';
import '../assets/css/counter.css';

function Counter() {
    const [number, setNumber] = useState(0);

    const incNumber = () => {
        setNumber(number + 1);
    };

    const deIncNumber = () => {
        setNumber(number - 1);
    };

    const changeText = ()  => {
        let className = '';
        if(number > 0) {
            className = 'green'
        } else if(number === 0) {
            className = ''
        } else {
            className = 'red'
        }
        return className
    }

    return (
        <div>
            <div className="main-container">
                <h1 className="title">Đếm số</h1>
                <h1 id="counter" className={ changeText() }>{number}</h1>
                <div className="btn-container">
                    <button
                        className="btn counterBtn prevBtn"
                        onClick={() => deIncNumber()}
                    >
                        Trừ
                    </button>
                    <button
                        className="btn counterBtn nextBtn"
                        onClick={() => incNumber()}
                    >
                        Cộng
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Counter;
