import React, { useState, useEffect, useRef } from 'react'
import { Uploader } from './img-uploader'

export function ModalContainer({ editObj, setRows, rows, modal }) {

  let obj = editObj 

  // cтейт со значениями инпутов
  const [editedValues, setEditedValues] = useState({})
  // стейт цветов
  const [colorsArr, setColorsArr] = useState([])

  // элемент инпута type='file'
  const filePicker = useRef(null)

  // запись цветов в стейт
  useEffect(() => {
    if (obj && obj.colors) {
      setColorsArr(obj.colors.map(e => ({ color: e.color })))
    }
  }, [obj])

  function handleInputChange(event, key) {
    const { value } = event.target

    setEditedValues(values => ({
      ...values,
      [key]: value
    }))
  }

  function handleColorChange(event, index) {
    const newColorsArr = [...colorsArr]
    newColorsArr[index] = { color: event.target.value }
    setColorsArr(newColorsArr)
  }

  function modalHider() {
    return modal.current.className = 'modal-hidden'
  }

  function modalEditClick() {
    setRows(
      [...rows].map(e => {
        if (e.id == obj.id) {
          for (let key in e) {
            if (
              editedValues.hasOwnProperty(key) &&
              e[key] !== editedValues[key] &&
              key !== 'colors' &&
              key !== 'publicationDate' && 
              key !== 'display' &&
              key !== 'price'
            ) {
              // запись в стейт товаров
              e[key] = editedValues[key]
            } else if (key === 'publicationDate' && editedValues.hasOwnProperty(key)) {
              const publicationDate = editedValues[key].split('.')
              const day = publicationDate[0]
              const mon = publicationDate[1]
              const year = publicationDate[2]
              const date = new Date(year, mon, day).toString()

              e[key] = date.slice(0, 15)
            } else if (key == 'colors') {
              e[key].map((el, i) => {
                el.color = colorsArr[i].color
              })
            } else if (key == 'price' && editedValues.hasOwnProperty(key)) {
              e[key] = Number(editedValues[key])
              console.log(e[key])
            }
          }

          modalHider()
        }
        return e
      })
    )
    setEditedValues({})
  }

  if (obj) {
    // скелет модалки
    return (
      <div className='modal-cell_content'>
              {/* закрывашка */}
        <div onClick={modalHider} className='close-wrapper'>
          <div className='close-border'>
            <div className='close'></div>
          </div>
        </div>
        {Object.entries(obj).map(data => {
          const key = data[0]
          const value = data[1]
          if (key !== 'img' && key !== 'colors' && key !== 'info' && key !== 'currentObject' && key !== 'display') {
            if (key === 'publicationDate') {
              return (
                <div className='item-block' key={key}>
                  <span key={value}>{key}</span>
                  <input
                    key={value + key}
                    className='modal-input'
                    type='text'
                    value={editedValues[key] !== undefined ? editedValues[key] : value}
                    placeholder='xx.xx.xxxx'
                    onChange={event => handleInputChange(event, key)}
                  />
                </div>
              )
            } else if (key == 'id') {
              return (
                <div className='item-block' key={key}>
                  <span key={value}>{key}</span>
                  <input
                    key={value + key}
                    disabled
                    className='modal-input'
                    type='text'
                    value={editedValues[key] !== undefined ? editedValues[key] : value}
                    onChange={event => handleInputChange(event, key)}
                  />
                </div>
              )
            } else {
              return (
                <div className='item-block' key={key}>
                  <span key={value}>{key}</span>
                  <input
                    key={value + key}
                    className='modal-input'
                    type='text'
                    value={editedValues[key] !== undefined ? editedValues[key] : value}
                    onChange={event => handleInputChange(event, key)}
                  />
                </div>
              )
            }
          } else if (key === 'colors') {
            return (
              <div className='colors-container' key={key}>
                  <span key={value}>{key}</span>
                {value.map((e, i) => (
                  <div className='color-block' key={e.color + i}>
                    <input
                      key={i + key}
                      className='input-color'
                      type='color'
                      defaultValue={e.color}
                      onChange={event => handleColorChange(event, i)}
                    />
                    <svg className='arrow-user' width={20} height={15} viewBox='0 0 20 15' fill='none' key={'arrow' + key}>
                      <path
                        key={'path' + key}
                        d='M 0 5 L 12 5 M 0 5 L 5 0 M 0 5 L 5 10'
                        fill='transparent'
                        stroke='#19a66'
                        strokeWidth='2'
                      />
                    </svg>
                    <span style={{ marginTop: '2px' }}>Click here !</span>
                  </div>
                ))}
              </div>
            )
          } else if (key == 'img') {
            return (<div className='upload-container' key={key}>
              <span key={value}>Choose an image</span>
              <Uploader key={value + key} ref={filePicker} currentRowId={ obj.id }/>
            </div>
            )
          }
        })}
        <button className='modal-edit' onClick={modalEditClick}>
          Edit
        </button>
      </div>
    )
  } else {
    return null
  }
}
