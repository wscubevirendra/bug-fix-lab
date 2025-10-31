import React from 'react';

const Input = (props) => {
    console.log(props, 'input props');
    return (
        <div>
            <input
                onKeyUp={
                    (event)=>{props.inputvalueget(event.target.value)}
                }
                type="text"
                placeholder="Search for a movie..."
                className="border border-gray-300 rounded-md p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
        </div>
    );
}

export default Input;
