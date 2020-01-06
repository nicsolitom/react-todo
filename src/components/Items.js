import React from 'react'
import '../styles/Items.scss'



export default function Items(props) {

    console.log(props);

    return (
      <div className="list-group mb-4">
        {props.items.map(item => (
          <div
            className="list-group-item d-flex justify-content-between align-item-center"
            key={item.id}
          >
            {/* {item.text} ({item.status? "true" : "false"}) */}
            <div>{item.text}</div>
            <div>
              <span
              onClick={() => props.onStatus(item.id)}
              className={"badge badge-pill ml-4 " + (item.status ? "badge-success" : "badge-danger")}>{item.status ? "Done" : "ToDo" }</span>
            </div>
          </div>
        ))}
      </div>
    );
}
