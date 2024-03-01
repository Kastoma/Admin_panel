import React, { useState, useEffect } from 'react'

export function ModalContainer({ obj, setRows, rows }) {
  // cтейт со значениями инпутов
  const [editedValues, setEditedValues] = useState({})
  // стейт цветов
  const [colorsArr, setColorsArr] = useState([])

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
    const modal = document.querySelector('.modal-visible')
    modal.classList.add('modal-hidden')
    modal.classList.remove('modal-visible')

    setRows(
      rows.map(e => {
        if (e.currentObject) {
          delete e.currentObject
        }
        return e
      })
    )
  }

  function modalEditClick() {
    setRows(
      rows.map(e => {
        if (e.currentObject) {
          for (let key in e) {
            if (
              editedValues.hasOwnProperty(key) &&
              e[key] !== editedValues[key] &&
              key !== 'colors' &&
              key !== 'publicationDate'
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
      // закрывашка
      <div className='modal-cell_content'>
        <div onClick={modalHider} className='close-wrapper'>
          <div className='close-border'>
            <div className='close'></div>
          </div>
        </div>
        {Object.entries(obj).map(data => {
          const key = data[0]
          const value = data[1]
          if (key !== 'img' && key !== 'colors' && key !== 'info' && key !== 'currentObject') {
            if (key === 'publicationDate') {
              return (
                <div className='item-block' key={key}>
                  <span>{key}</span>
                  <input
                    className='modal-input'
                    type='text'
                    value={editedValues[key] !== undefined ? editedValues[key] : value}
                    placeholder='xx.xx.xxxx'
                    onChange={event => handleInputChange(event, key)}
                  />
                </div>
              )
            } else {
              return (
                <div className='item-block' key={key}>
                  <span>{key}</span>
                  <input
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
                <span>{key}</span>
                {value.map((e, i) => (
                  <div className='color-block' key={e.color}>
                    <input
                      key={i}
                      className='input-color'
                      type='color'
                      defaultValue={e.color}
                      onChange={event => handleColorChange(event, i)}
                    />
                    <svg className='arrow-user' width={20} height={15} viewBox='0 0 20 15' fill='none'>
                      <path
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
