import { useState } from 'react'

export function TodoInput(props) {
    const { onAddClick } = props
    const [inputValue, setInputValue] = useState('')

    return (
        <div className="input-container">
            <input 
            placeholder="Add task"
            value={inputValue}
            onChange={(e)=>{setInputValue(e.target.value)}}
            />
            <button onClick = {() => {
                if(!inputValue) { return }
                onAddClick(inputValue)
                setInputValue('')
            }}>
                <i className="fa-solid fa-plus"></i>
            </button>
        </div>
    )
}