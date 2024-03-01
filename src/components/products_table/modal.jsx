import { ModalContainer } from './modal-container'

export function Modal({ rows, setRows }) {
  let receivedObj

  if (rows.filter(e => e.currentObject !== undefined).length > 0) {
    receivedObj = rows.filter(e => e.currentObject !== undefined)[0]
  }

  return (
    <div className='modal-hidden'>
      <ModalContainer obj={receivedObj} setRows={setRows} rows={rows} />
    </div>
  )
}
