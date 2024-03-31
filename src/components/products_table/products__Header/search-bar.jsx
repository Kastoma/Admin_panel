import { useState } from "react";

export function SearchBar({ setInputValue }) {
  const [inputValue, setInputValueLocal] = useState('');

  const handleInputChange = (event) => {
    const newValue = event.target.value;
    setInputValueLocal(newValue);
    setInputValue(newValue);
  }
  return (
    <div className="search-bar">
      <div className="search-div">
        <input
          onChange={handleInputChange}
          className="search-input"
          placeholder="Find..."
          type="text"
          value={inputValue}
        />
      </div>
    </div>
  );
}
