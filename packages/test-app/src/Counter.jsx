import { atom, useAtom } from 'jotai';
import React from 'react';

// Define an atom to store the counter's state
const counterAtom = atom(0);

function Counter({name}) {
    // Use the atom in a component
    const [count, setCount] = useAtom(counterAtom);

    // Increment function
    const increment = () => setCount((c) => c + 1);

    // Decrement function
    const decrement = () => setCount((c) => c - 1);

    return (
        <div>
            <h2>Counter {name}: {count}</h2>
            <button onClick={increment}>Increment {name}</button>
            <button onClick={decrement}>Decrement {name}</button>
        </div>
    );
}

export default Counter;




