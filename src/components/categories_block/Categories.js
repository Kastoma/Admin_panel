import Category from "./Category";
import React, { useState, useEffect } from 'react';

const Categories = ({ categories }) => {
    const [categoriesState, setCategories] = useState(categories);
  //   const [showEditInput , setEditInput] = useState([false, [],[], ''])
  //   const [selectedOption, setSelectedOption] = useState('');
  // const [AddInput, setAddInput] = useState('')
  
  for (let i = 0; i < categoriesState.length; i++) {
    categoriesRecursion(categoriesState[i])
  }

  function categoriesRecursion(obj) {
    if (obj.subcategories !== undefined) {
      return (
        <div>
          {obj.isParent ? <h3>{'Main category: ' + obj.name}</h3> : obj.name }
          {obj.subcategories.map((subc) => categoriesRecursion(subc))}
        </div>
      )
    }
  }



    // function handleInputChange(event) {
    //   const { value } = event.target
    //   setAddInput(values => value)
    // }
    // const handleCheckboxChange = (option) => {
    //   setSelectedOption(option);
    // };
    // const handleChangeInCategories = (arr, value, option, indexPath) => { 
    //   console.log('indexPATH: ', indexPath)
    //   if(option == 'save'){
    //     setCategories(previousState => {
    //             const newState = previousState.map(cat => ({ ...cat })); // Создаем новый массив объектов
    //             if(arr.length == 2) {
    //               newState[indexPath[0]].subcategories[indexPath[1]].name = value
    //             }else if(arr.length == 3){
    //               newState[indexPath[0]].subcategories[indexPath[1]].subcategories[indexPath[2]].name = value
    //             } else {
    //               const index = newState.findIndex((el,index) => el.name === arr[0] && index == indexPath[0] );
    //               if(index !== -1) {
    //                 newState[index] = { ...newState[index], name: value };
    //               }
    //             }
    //             console.log(newState)
    //             return newState;
    //         });   

    //       }else if(option == 'delete'){
           
    //           const newState = categoriesState.map(cat => ({ ...cat })); // Создаем новый массив объектов
    //           if(arr.length == 2) {
    //             newState[indexPath[0]].subcategories.splice(indexPath[1], 1);
    //           } else if(arr.length == 3){
    //             newState[indexPath[0]].subcategories[indexPath[1]].subcategories.splice(indexPath[2], 1);
    //           } else {
    //             newState.splice(indexPath[0], 1);
    //           }
    //          setCategories(newState);  
    //       }
    //       else if(option == 'edit'){

    //   }

    // }
    // const showInput = (arrIndex, arrPath)=>{
    
    //  if(!Array.isArray(arrPath)){
    //     arrPath = [arrPath]
    //  } 
    // //  console.log(`showInput: \n indexes: ${arrIndex} \n path: ${arrPath}`)
    //   setEditInput(previousState =>{
    //     let newState = previousState
    //     newState[0] = true
    //     newState[1] = arrIndex
    //     newState[2] = arrPath
    //     return newState
    //   })
    //   console.log('afterIndex: ',showEditInput)
    //   let element
    //   let modal = document.querySelector('.modal-input-window')
    //   if(arrIndex.length >= 1){
    //     let ModalBlock = document.getElementById('categories-block')
    //     if(arrIndex.length >= 2){
    //       if(arrIndex.length >= 3){
    //         element = ModalBlock.childNodes[arrIndex[0]].childNodes[0].parentElement.
    //         childNodes[1].childNodes[arrIndex[1]].childNodes[1].childNodes[arrIndex[2]]
         

    //       }else{
    //         element = ModalBlock.childNodes[arrIndex[0]].childNodes[0].parentElement.
    //         childNodes[1].childNodes[arrIndex[1]].childNodes[0]
            

    //       }
    //     }else{
    //       element = ModalBlock.childNodes[arrIndex[0]].childNodes[0]
    //     }
    //   }
    //   let rect  =element.getBoundingClientRect();
    //   console.log('SHOW ELEMENT: ', element)
    //   let topDistance = rect.top + window.pageYOffset ;
    //   console.log(topDistance)
    //   modal.style.marginTop = topDistance + 'px'
    //   modal.style.display = 'block'
    

    // }
    // // Add Category
    // const AddCategory = () => {
    //   let arr = showEditInput[1];
    //   let path = showEditInput[2];
    //   let option = selectedOption;
    //   let value = AddInput;
    //   let newArr = arr
    //   console.log('arr: ', arr, 'value: ', value, 'option: ', option, 'path: ', path);
    
      
    //   const newState = [...categoriesState]
    
    //     // Если добавляем категорию на втором уровне
    //     if (path.length === 1) {
    //       const newCategory = { name: value, subcategories: [] };
    //       if (option === 'Above') {
          
    //         newState.splice(arr[0], 0, newCategory);
    //       } else if (option === 'Below') {
            
    //         newState.splice(arr[0] + 1, 0, newCategory);
    //       }else if(option == 'Inside'){
    //         newState[arr[0]].subcategories.unshift(newCategory)
    //       }
    //     } 
    //     // Если добавляем подкатегорию на третьем уровне
    //     else if (path.length === 2) {
    //       const categoryIndex = newState.findIndex(cat => cat.name === path[0]);
    //       const subcategoryIndex = newState[categoryIndex].subcategories.findIndex(subcat => subcat.name === arr[0]);
    //       const subcategories = newState[categoryIndex].subcategories;

    //       const newSubcategory = { name: value, subcategories: [] };

    //       if (option === 'Above') {
    //         subcategories.splice(arr[1], 0, newSubcategory);
    //       } else if (option === 'Below') {
    //         subcategories.splice(arr[1] + 1, 0, newSubcategory);
    //       }else if(option == 'Inside'){
    //         newState[arr[0]].subcategories[arr[1]].subcategories.unshift(newSubcategory)
    //       }
    //     } 
    //     // Если добавляем подподкатегорию на четвертом уровне
    //     else if (path.length === 3) {
    //       const newSubsubcategory = { name: value, subcategories: [] };
      
    //       if (option === 'Above') {
    //         newState[arr[0]].subcategories[arr[1]].subcategories.splice(arr[2], 0, newSubsubcategory);
    //       } else if (option === 'Below') {
    //         newState[arr[0]].subcategories[arr[1]].subcategories.splice(arr[2] + 1, 0, newSubsubcategory);
    //       }else if(option == 'Inside'){
    //         newState[arr[0]].subcategories[arr[1]].subcategories[arr[2]].subcategories.unshift(newSubsubcategory)
    //       }
    //     }
    //     console.log(newState)
       
      
    //   if(option == 'Above'){
    //       if(path.length == 3){
    //         newArr = [arr[0], arr[1], arr[2] + 1]
    //         showInput(newArr, path)
    //       }
    //       else{
    //         let modal = document.querySelector('.modal-input-window')
    //         modal.style.display = 'none'
    //       }
    //     }
    //     setCategories(previous => newState)
        
      
    // };
    // ________________________
    
    return (
      // <div id="categories-wrapper">
      //   <Modal handleInputChange={handleInputChange} selectedOption={selectedOption} handleCheckboxChange={handleCheckboxChange} AddCategory={AddCategory} />
      //   <div id="categories-block">
      //     {categoriesState.map((category, index) => (
      //       <Category indexNumber={index} path={[index]} category={category} index={category.name} showInput={showInput} saveField={handleChangeInCategories} />
      //     ))}
      //   </div>
      // </div>
      <div>
        {categoriesState.map((catg) => categoriesRecursion(catg))}
      </div>
    );
};

export default Categories;
