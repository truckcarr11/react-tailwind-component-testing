import React, { useState } from 'react';

export default function MultiSelect(props) {
  const [expanded, setExpanded] = useState(true);
  const [selectedItems, setSelectedItems] = useState([]);
  const [selectableItems, setSelectableItems] = useState(props.options);

  return (
    <div>
      <div
        className="border rounded-lg flex justify-between p-2"
        onClick={() => setExpanded((currentExpanded) => !currentExpanded)}
      >
        <div>{props.placeholder}</div>
        <div>V</div>
      </div>
      {expanded && (
        <ol className="border mt-1 rounded-lg">
          {props.options.slice(0, 1).map((item) => (
            <li key={item.id} className="pl-2 hover:bg-gray-300 rounded-t-lg">
              {item.value}
            </li>
          ))}
          {props.options.slice(1, props.options.length - 1).map((item) => (
            <li key={item.id} className="pl-2 hover:bg-gray-300">
              {item.value}
            </li>
          ))}
          {props.options
            .slice(props.options.length - 1, props.options.length)
            .map((item) => (
              <li key={item.id} className="pl-2 hover:bg-gray-300 rounded-b-lg">
                {item.value}
              </li>
            ))}
        </ol>
      )}
    </div>
  );
}
