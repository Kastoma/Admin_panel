import React, { useState, useEffect, useRef } from "react";
import { Uploader } from "../products__Item/img-uploader";

export function ModalContainer({ editObj, setRows, rows, setShowModal }) {
  let obj = editObj;

  const [editedValues, setEditedValues] = useState({});
  const [colorsArr, setColorsArr] = useState([]);
  const filePicker = useRef(null);
  useEffect(() => {
    if (obj && obj.colors) {
      setColorsArr(obj.colors.map((e) => ({ color: e.color })));
    }
  }, [obj]);

  function handleInputChange(event, key) {
    const { value } = event.target;

    setEditedValues((values) => ({
      ...values,
      [key]: value,
    }));
  }

  function handleColorChange(event, index) {
    const newColorsArr = [...colorsArr];
    newColorsArr[index] = { color: event.target.value };
    setColorsArr(newColorsArr);
  }

  function modalHider() {
    return setShowModal(false)
  }

  function modalEditClick() {
    setRows(
      [...rows].map((e) => {
        if (e.id == obj.id) {
          for (let key in e) {
            if (
              editedValues.hasOwnProperty(key) &&
              e[key] !== editedValues[key] &&
              key !== "colors" &&
              key !== "publicationDate" &&
              key !== "display" &&
              key !== "price" &&
              key !== "deliveryPrice"
            ) {
              // запись в стейт товаров
              e[key] = editedValues[key];
            } else if (
              key === "publicationDate" &&
              editedValues.hasOwnProperty(key)
            ) {
              const publicationDate = editedValues[key].split(".");
              const day = publicationDate[0];
              const mon = publicationDate[1];
              const year = publicationDate[2];
              const date = new Date(year, mon, day).toString();

              e[key] = date.slice(0, 15);
            } else if (key == "colors") {
              e[key].map((el, i) => {
                el.color = colorsArr[i].color;
              });
            } else if (key == "price" && editedValues.hasOwnProperty(key)) {
              e[key] = editedValues[key] + '$';
            } else if (key == "deliveryPrice" && editedValues.hasOwnProperty(key)) {
              e[key] = '₴ ' + editedValues[key];
            }
          }

          modalHider();
        }
        return e;
      })
    );
    setEditedValues({});
  }

  if (obj) {
    return (
      <div className="modal-cell_content" onClick={e => e.stopPropagation()}>
        <div onClick={modalHider} className="close-wrapper">
          <div className="close-border">
            <div className="close"></div>
          </div>
        </div>
        {Object.entries(obj).map((data) => {
          const key = data[0];
          const value = data[1];
          if (
            key !== "img" &&
            key !== "colors" &&
            key !== "info" &&
            key !== "currentObject" &&
            key !== "userId"
          ) {
            if (key === "publicationDate") {
              return (
                <div className="item-block" key={key}>
                  <span>publication date</span>
                  <input
                    className="modal-input"
                    type="text"
                    value={
                      editedValues[key] !== undefined
                        ? editedValues[key]
                        : value.slice(0, 15)
                    }
                    placeholder="xx.xx.xxxx"
                    onChange={(event) => handleInputChange(event, key)}
                  />
                </div>
              );
            } else if (key == "id") {
              return (
                <div className="item-block" key={key}>
                  <span>ID</span>
                  <input
                    disabled
                    className="modal-input"
                    style={{backgroundColor: 'rgba(255, 200, 0, 0.1)'}}
                    type="text"
                    value={
                      editedValues[key] !== undefined
                        ? editedValues[key]
                        : value
                    }
                    onChange={(event) => handleInputChange(event, key)}
                  />
                </div>
              );
            } else if (key == 'price') {
              return (<div className="item-block" key={key}>
                  <span>{key}</span>
                  <input
                    className="modal-input"
                    type="text"
                    value={
                      editedValues[key] !== undefined
                        ? editedValues[key]
                        : value.slice(0, value.length - 1)
                    }
                    onChange={(event) => handleInputChange(event, key)}
                  />
                </div>)
            } else if (key == 'deliveryPrice') {
              return (<div className="item-block" key={key}>
                  <span>delivery price</span>
                  <input
                    className="modal-input"
                    type="text"
                    value={
                      editedValues[key] !== undefined
                        ? editedValues[key]
                        : value.slice(2, value.length)
                    }
                    onChange={(event) => handleInputChange(event, key)}
                  />
                </div>)
            } else {
              return (
                <div className="item-block" key={key}>
                  <span>{key == 'desc' ? 'description' : key}</span>
                  <input
                    className="modal-input"
                    type="text"
                    value={
                      editedValues[key] !== undefined
                        ? editedValues[key]
                        : value
                    }
                    onChange={(event) => handleInputChange(event, key)}
                  />
                </div>
              );
            }
          } else if (key === "colors") {
            return (
              <div className="colors-container" key={key}>
                <span>{key}</span>

                <div style={{display: 'flex'}}>
                {value.map((e, i) => (
                  <div className="color-block" key={e.color + i}>
                    <input
                      className="input-color"
                      type="color"
                      defaultValue={e.color}
                      onChange={(event) => handleColorChange(event, i)}
                    />
                  </div>
                ))}
                  </div>
              </div>
            );
          } else if (key == "img") {
            return (
              <div className="upload-container" key={key}>
                <span>Choose an image</span>
                <Uploader
                  ref={filePicker}
                  currentRowId={obj.img}
                />
              </div>
            );
          }
        })}
        <button className="modal-edit" onClick={modalEditClick}>
          Edit
        </button>
      </div>
    );
  }
}
