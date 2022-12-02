import React from 'react'

export default function Todo(props) {
    const t = props.t
    return (
        <div>
            <p>{t.message}</p>
            <input type='checkbox' defaultChecked={t.completed}/>
        </div>
    )
}