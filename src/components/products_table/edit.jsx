export function Edit({ obj, setRows }) {
  function editClick() {
    const modal = document.querySelector('.modal-hidden')
    modal.classList.add('modal-visible')
    modal.classList.remove('modal-hidden')
    setRows(e =>
      e.map(row => {
        if (row.id == obj.id) {
          // добавляю поле со значением тру что бы отследить какой товар отрисовывать в модалке
          row.currentObject = true
          console.log(row)

          return row
        }

        return row
      })
    )
  }

  return (
    <>
      <button className='edit-button' onClick={editClick}>
        Edit {<div style={{margin: '10px 0 0 5px'}}>
            <svg width={20} height={20} viewBox='0 0 20 20' fill='none'>
              <path
                 d='M 0 13 L 10 3 M 11 3 L 2 3 M 10 3 L 10 11'
                 fill='transparent'
                 stroke='#fff'
                 strokeWidth='2'
              />
            </svg>
            </div>}
      </button>
    </>
  )
}
