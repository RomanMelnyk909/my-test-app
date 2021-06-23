import React, { useState } from 'react';

function AddHabbit({ habbits, setHabbits }) {
    const [value, setValue] = useState('');

    function saveHabbit() {
        if (value !== '') {
            setHabbits([...habbits, {
                id: value,
                title: value,
                status: false
            }])
            setValue('')
        }
    }

    return (
        <div>
            <input value={value} type="text" onChange={e => setValue(e.target.value)} />
            <button onClick={saveHabbit}>Add Habbit</button>
        </div>
    )
}

export default AddHabbit;