import React from 'react'

const Todo = (props) => {
    const {id, description, category, isFavorite, functions} = props
    const {check, remove, toggle} = functions
    return (
        <div onClick={() => check(id)} className={`todo ${category ? category : null}`}>
            <div onClick={() => console.log("checked!")} className='check box'>
                ✔️
            </div>
            <p className={"todo--title"}>{description}</p>
            <span onClick={() => toggle(id)} className='isFavorite'>{isFavorite ? "★" : "☆"}</span>
            <div onClick={() => remove(id)} className='remove box'>
                X
            </div>
        </div>
        
    )
}

export default Todo