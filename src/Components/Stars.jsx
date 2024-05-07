import React from 'react';

const Stars = ({ count }) => {
    let arr = [];
    for (let i = 0; i < count; i++) {
        arr[i] = <img className="stars"
            alt="stars"
            src="https://cdn-icons-png.flaticon.com/128/2107/2107957.png"
        />
    }
    return (
        <div style={{ display: "flex" }}>
            {arr.map(star => star)}
        </div>
    );
}

export default Stars;
