import React from 'react'

const Todo = (props) => {
    const {id, description, category, isFavorite, isChecked, functions} = props
    const {check, remove, toggle} = functions
    return (
        <div className={`todo ${category ? category : null} ${isChecked ? "isChecked" : null}`}>
            <div onClick={() => check(id)} className='check box'>
                ✔️
            </div>
            <p className={`todo--title ${isChecked ? "isChecked" : null}`}>{description}</p>
            <span onClick={() => toggle(id)} className='isFavorite'>{isFavorite ? "★" : "☆"}</span>
            <div onClick={() => remove(id)} className='remove box'>
                X
            </div>
        </div>
        
    )
}

export default Todo