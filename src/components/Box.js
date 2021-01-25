import React, { useState } from 'react';

const arrColors = ['#3498db', '#9b59b6', '#e74c3c', '#2c3e50', '#d35400'];
function Box() {
    const [colors, setColors] = useState(arrColors);

    const addBoxs = () => {
        setColors(colors.concat(arrColors));
    };

    const deleteBox = (index) => {
        let newColors = colors.filter((color, i) => index !== i);
        setColors(newColors);
    };

    const renderBox = () => {
        return colors.map((color, index) => {
            return (
                <div
                    className="box"
                    key={index}
                    style={{
                        backgroundColor: color,
                    }}
                    onClick={() => deleteBox(index)}
                ></div>
            );
        });
    };

    return (
        <div className="box-container">
            <h1 className="title-effect">Random Box</h1>
            <div className="box-info">
                <button id="btn" onClick={() => addBoxs()}>
                    Add box
                </button>
                <h4 id="score">
                    Total box: <span className="points">{colors.length}</span>
                </h4>
            </div>

            <div className="boxes">
                {colors.length > 0 ? renderBox() : 'No box in list'}
            </div>
        </div>
    );
}

export default Box;
