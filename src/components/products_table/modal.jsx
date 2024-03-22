import React from 'react'
import { ModalContainer } from './modal-container'

export const Modal = React.forwardRef(({ rows, setRows, editObj, modal }, ref) => {
  return (
    <div ref={ref} className='modal-hidden'>
      <ModalContainer editObj={editObj} setRows={setRows} rows={rows} modal={modal} />
    </div>
  )
})
