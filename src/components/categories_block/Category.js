
import React, { useState } from 'react';

const Category = (props) => {
  const [editing, setEditing] = useState(false);
  const [inputValue, setInputValue] = useState('');

  const saveField = (lastResult, fieldString, option, indexPath) => {
    console.log(
      'last Result:',
      lastResult,
      'save Field exist?: ',
      props.saveField ? true : false,
      "Field value: ",
      fieldString
    );
    if (Array.isArray(lastResult)) {
        props.saveField(lastResult, fieldString, option, indexPath);
      
    } else {
        props.saveField([props.category.name],fieldString, option, [indexPath]);
      
      }
    }
 
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
    if (Array.isArray(props.index)) {
      props.saveField(props.index, inputValue, 'save', props.path);
    } else {
      props.saveField([props.index], inputValue, 'save', [props.path]);
    }
  };
  const AddCategory = () =>{
  props.showInput(props.path,props.index)
  }
  const showInput = (arrIndex, arrPath) => {
    if(Array.isArray(arrIndex) && Array.isArray(arrPath)){
        props.showInput(arrIndex, arrPath)
    }else{
      props.showInput([arrIndex], [arrPath])
    }
     
  } 

  const deleteClick = () => {
    setEditing(false);
    if (Array.isArray(props.index)) {
      props.saveField(props.index, '', 'delete', props.path);
    } else {
      props.saveField([props.index], '', 'delete', [props.path]);
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
          <>
            <button id="categ_button" onClick={handleEditClick}>
              edit
            </button> 
            <button id="categ_button" onClick={AddCategory}>add</button>
            <button id="categ_button" onClick={deleteClick}>delete</button>
          
          </>
        )}
       
      </div>
      {props.category.subcategories && (
        <ul>
          {props.category.subcategories.map((subcategory, podIndex) => (
            <div key={podIndex}>  
              <li
                saveField={saveField}
                category={{ name: subcategory, fontSize: '15px' }}
              >
             
              <Category 
                  showInput={showInput} 
                  path={[props.indexNumber, podIndex]} 
                  index={[props.category.name, subcategory]} 
                  saveField={saveField} 
                  category={{ name: subcategory.name, fontSize: '15px' }} 
                />

                <div>
                 {subcategory.subcategories.length > 0 && subcategory.subcategories.map((thirdStepItem, ThirdIndex)=>{
                  return(
                    <Category showInput={showInput}
                              path={[props.indexNumber,
                              podIndex, ThirdIndex]} 
                              index={[props.category.name , subcategory, thirdStepItem.name]} 
                              saveField={saveField} 
                      category={{ name: thirdStepItem.name, fontSize: '13px' }}
                    />
                      )
                  })} 
              </div>
            </li>
            </div>
          
          ))}
        </ul>
      )}
    </div>
  );
};

export default Category;