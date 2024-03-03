import Category from "./Category";
import React, { useState } from 'react';

const Categories = ({ categories }) => {
    const [categoriesState, setCategories] = useState(categories);
    
    // const handleCategories = (pathArr, replaceBYstring) => {
    //   if (pathArr.length === 0) {
    //     // Достигли конца пути, возвращаем новый массив с установленным значением
    //     return replaceBYstring;
    //   }
    
    //   const index = pathArr[0];
    //   const subArr = Array.isArray(categoriesState) ? [...categoriesState] : []; // Создаем копию текущего массива
    //   subArr[index] = handleCategories(pathArr.slice(1), replaceBYstring); // Рекурсивно обрабатываем следующий уровень
    
    //   setCategories(subArr); // Обновляем состояние categoriesState
    
    //   return subArr;
    // };
    
    // console.log(categoriesState);
    // handleCategories([0,0], 'Амплитуда');
    // console.log(categoriesState);
    
    return (
      <div id="categories-wrapper">
        <div id="categories-block">
          {categoriesState.map((category, index) => (
            <Category key={index} category={category} index={index} />
          ))}
        </div>
      </div>
    );
};

export default Categories;