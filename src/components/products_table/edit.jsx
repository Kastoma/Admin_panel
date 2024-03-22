export function Edit({ obj, modal, editObj }) {
  function editClick() {
    modal.current.className = 'modal-visible'
    
    editObj(obj)
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
