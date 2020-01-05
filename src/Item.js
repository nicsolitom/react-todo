import React from 'react'

export default function Item(props) {
    return (
        <ul>
            {
                props.items.map((item, id) =>
                    <li key={id}>{item}</li>
                )
            }
        </ul>
    )
}
