import React from 'react';

const Inpu1 = ({ handlechange, value, title, name }) => {
    return (
        <div>
            <input
                onChange={handlechange}
                type="checkbox"
                value={value}
                name={name}
            />
            <span>{title}</span>
        </div>
    );
};

export default Inpu1;
