import React from 'react';
import '../styles/Counter.scss';

export default function Counter(props) {
  let doneItems = props.items.filter(item => item.status === true).length;
  let todoItems = props.items.length;
  console.log('PROPS:', props.items);
  console.log(doneItems);
  console.log(props.items.length);
  return (
    <div className="counterText">
      Completed: {doneItems} from {todoItems}
    </div>
  );
}
