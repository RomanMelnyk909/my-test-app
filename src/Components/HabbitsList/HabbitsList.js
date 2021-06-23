import React, { useState } from 'react';

function HabbitsList({ habbits, setHabbits }) {
    const [edit, setEdit] = useState(null);
    const [value, setValue] = useState('')

    function deleteHabbit(id) {
        let newHabbitsList = habbits.filter(item => item.id !== id)
        setHabbits(newHabbitsList);
    }

    function habbitStatus(id) {
        let newHabbitsList = habbits.map(item => {
            if (item.id === id) {
                item.status = !item.status;
                return item;
            }
            return item;
        })
        setHabbits(newHabbitsList);
    }

    function editHabbit(id, title) {
        setEdit(id);
        setValue(title)
    }

    function saveHabbit(id) {
        let newHabbitsList = habbits.map(item => {
            if (item.id === id) {
                item.title = value;
                item.status = false;

            }
            return item;
        })
        setHabbits(newHabbitsList);
        setEdit(null);
    }

    return (
        <div>
            {
                habbits.map(item => {
                    return (
                        <div key={item.id} >
                            {
                                edit === item.id ? <div>
                                    <input type="text" value={value} onChange={e => setValue(e.target.value)} />
                                </div> :
                                    <div>{item.title} {item.status ? <span>Done</span> : <span>Not Done</span>}</div>

                            }
                            {edit === item.id ? <div>
                                <button onClick={() => saveHabbit(item.id)}>Save Habbit</button>

                            </div>
                                : <div>
                                    <button onClick={() => deleteHabbit(item.id)}>Delete Habbit</button>
                                    <button onClick={() => habbitStatus(item.id)}>Change Status</button>
                                    <button onClick={() => editHabbit(item.id, item.title)}>Edit Habbit</button>
                                </div>
                            }

                        </div>
                    )
                })
            }
        </div >
    )
}

export default HabbitsList;