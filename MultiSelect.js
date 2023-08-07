import React, { useState, useEffect } from 'react';

export default function MultiSelect(props) {
  const [expanded, setExpanded] = useState(true);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [selectableOptions, setSelectableOptions] = useState(props.options);

  function handleOptionClick(clickedOption) {
    setSelectedOptions((currentSelectedOptions) =>
      !currentSelectedOptions.includes(clickedOption)
        ? [...selectedOptions, clickedOption]
        : currentSelectedOptions.filter(
            (option) => option.id !== clickedOption.id
          )
    );
  }

  useEffect(() => {
    console.log(selectedOptions);
  }, [selectedOptions]);

  return (
    <div>
      <div
        tabindex="0"
        className="border rounded-lg flex justify-between p-2 cursor-pointer focus:ring focus:ring-blue-500 focus:outline-none"
        onClick={() => setExpanded((currentExpanded) => !currentExpanded)}
      >
        <div>{selectedOptions.length > 0 ? 'Options' : props.placeholder}</div>
        {expanded ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 15.75l7.5-7.5 7.5 7.5"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 8.25l-7.5 7.5-7.5-7.5"
            />
          </svg>
        )}
      </div>
      {expanded && (
        <ul className="border mt-1 rounded-lg shadow-md cursor-pointer">
          {props.options.slice(0, 1).map((option) => (
            <li
              key={option.id}
              className="pl-2 hover:bg-gray-300 rounded-t-lg"
              onClick={() => handleOptionClick(option)}
            >
              {option.value}
            </li>
          ))}
          {props.options.slice(1, props.options.length - 1).map((option) => (
            <li
              key={option.id}
              className="pl-2 hover:bg-gray-300"
              onClick={() => handleOptionClick(option)}
            >
              {option.value}
            </li>
          ))}
          {props.options
            .slice(props.options.length - 1, props.options.length)
            .map((option) => (
              <li
                key={option.id}
                className="pl-2 hover:bg-gray-300 rounded-b-lg"
                onClick={() => handleOptionClick(option)}
              >
                {option.value}
              </li>
            ))}
        </ul>
      )}
    </div>
  );
}
