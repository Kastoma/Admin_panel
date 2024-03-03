import { lightBlue } from '@mui/material/colors'
import { Edit } from './edit'

export function ItemBox({ row, setRows }) {
  return (
    <div className='item__content' style={{ margin: '10px' }}>
      <div
        className='status__wrapper'
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          borderBottom: '1px solid #3c4552'
        }}
      >
        <div style={{ width: '100%', display: 'flex', justifyContent: 'flex-end' }}>
          <div
            style={{
              width: '55px',
              textAlign: 'center',
              padding: '3px',
              backgroundColor: 'royalBlue',
              borderRadius: '8px',
              color: 'white',
              fontWeight: '700',
              height: '25px',
              fontSize: '12px',
              position: 'absolute'
            }}
          >
            status
          </div>
        </div>
        <div
          style={{
            height: '150px',
            display: 'flex',
            alignItems: 'center',
            textAlign: 'center',
            backgroundColor: 'rgb(205 205 205)',
            width: '90px',
            borderRadius: '5px',
            marginBottom: '3px',
            marginTop: '10px'
          }}
        >
          <img src='' alt='here will be image' />
        </div>
        <div style={{ width: '100%', marginBottom: '3px', display: 'flex', justifyContent: 'space-between' }}>
          <div
            style={{
              width: '70px',
              marginLeft: '10px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: 'orange',
              textAlign: 'center',
              color: 'white',
              borderRadius: '5px',
              fontSize: '15px'
            }}
          >
            {row.quantity + ' left'}
          </div>
          <span style={{ color: '#999999' }}>#{row.id}</span>
        </div>
      </div>
      <div>
        <p style={{ height: '80px' }}>{row.desc}</p>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            color: 'black',
            fontSize: '17px',
            paddingBottom: '15px',
            borderBottom: '1px solid #3c4552'
          }}
        >
          <span>{row.price}</span>
          <span>{row.deliveryPrice}</span>
        </div>
      </div>
      <div style={{ margin: '35px 0 35px 0', display: 'flex', justifyContent: 'center', width: '100%' }}>
        <Edit setRows={ setRows } obj={row} />
        <button
          className='basket'
        >
          к
        </button>
      </div>
    </div>
  )
}
