import React, { useState } from 'react';

const Category = (props) => {
  const [editing, setEditing] = useState(false);
  const [inputValue, setInputValue] = useState('');

  const saveField = (lastResult, fieldString) => {
    console.log(
      'last Result:',
      lastResult,
      'save Field exist?: ',
      props.saveField ? true : false,
      "Field value: ",
      fieldString
    );
    if (Array.isArray(lastResult)) {
      lastResult.push(props.category.name);
      if (props.saveField) {
        console.log('should be here');
        props.saveField(lastResult, fieldString);
      } else {
        // Call saveField recursively for nested categories
        props.category.subcategories &&
          Object.keys(props.category.subcategories).forEach((subcategory, podIndex) => {
            const nestedCategoryIndex = [...lastResult, podIndex];
            <Category
              index={nestedCategoryIndex}
              saveField={saveField}
              category={{ name: subcategory, fontSize: '15px' }}
            />;
          });
      }
    } else {
      if (props.saveField) {
        props.saveField([props.category.name],fieldString);
      } else {
        // Call saveField recursively for nested categories
        props.category.subcategories &&
          Object.keys(props.category.subcategories).forEach((subcategory, podIndex) => {
            const nestedCategoryIndex = [props.index, podIndex];
            <Category
              index={nestedCategoryIndex}
              saveField={saveField}
              category={{ name: subcategory, fontSize: '15px' }}
            />;
          });
      }
    }
  };

  const handleEditClick = () => {
    setEditing(true);
    setInputValue(props.category.name);
    console.log(editing);
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSaveClick = () => {
    setEditing(false);
    if (props.saveField) {
      props.saveField(props.category.name, inputValue);
    } else {
      //Categories shit
    }
  };

  return (
    <div style={{ width: '50%' }}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        {editing ? (
          <input
            value={inputValue}
            onChange={handleInputChange}
            placeholder={props.category.name}
          />
        ) : (
          <p
            id="categories-head-text"
            style={{
              display: 'block',
              cursor: 'pointer',
              fontSize: props.category.fontSize ? props.category.fontSize : '20px',
            }}
            onClick={handleEditClick}
          >
            {props.category.name}
          </p>
        )}
        {editing ? (
          <button onClick={handleSaveClick}>save</button>
        ) : (
          <button id="categ_button" onClick={handleEditClick}>
            edit
          </button>
        )}
        <button id="categ_button">delete</button>
      </div>
      {props.category.subcategories && (
        <ul>
          {Object.keys(props.category.subcategories).map((subcategory, podIndex) => (
            
            <li key={subcategory}>
              {console.log(subcategory)}
              {/* Recursively call Category for each subcategory */}
              <Category
                index={[props.index, podIndex]}
                
                saveField={saveField}
                category={{ ...props.category , fontSize: '15px' }}
              />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Category;