// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Chip from '@mui/material/Chip'
import Table from '@mui/material/Table'
import TableRow from '@mui/material/TableRow'
import TableHead from '@mui/material/TableHead'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import Typography from '@mui/material/Typography'
import TableContainer from '@mui/material/TableContainer'

import { useState } from 'react'

import { Modal } from './modal.jsx'

import { ItemBox } from './item-box.jsx'

const DashboardTable = props => {
  const [rows, setRows] = useState([
    {
      id: 13425,
      price: 2.05,
      deliveryPrice: '₴ 0',
      title: 'Updated Item 1',
      img: '13425.jpg',
      desc: 'Чехол TPU+PC Army Collection для Apple iPhone XS Max (6.5") (Зеленый)',
      category: 'material',
      colors: [
        {
          color: '#FF0000',
          quantity: 3,
          pictures: ['', '']
        },
        {
          color: '#00FF00',
          quantity: 3,
          pictures: ['', '']
        },
        {
          color: '#0000FF',
          quantity: 3,
          pictures: ['', '']
        }
      ],
      info: [
        [
          'Хакактеристики',
          'Бренд: Epik\nКатегория: Чехлы\nФорм-фактор чехла: Накладка\nМатериал аксессуара: Пластик\nОсобенности чехла: MagSafe'
        ],
        [
          'Описание',
          'Рассчитан на длительное использование.\nИсключается деформация и выцветание материала.\nУстойчивость к царапинам и потертостям.\nЛегко очищается при загрязнениях.\nКнопки закрыты пыленепроницаемыми вставками.\nБыстрая установка и удаление.'
        ]
      ],
      publicationDate: 'Sat Jan 13 2024',
      quantity: 3
    },
    {
      id: 12345,
      price: 19.99,
      deliveryPrice: 4.99,
      title: 'Updated Item 2',
      img: '12345.jpg',
      desc: 'Updated Description 2',
      category: 'accessoryType',
      info: [
        [
          'Хакактеристики',
          'Бренд: Epik\nКатегория: Чехлы\nФорм-фактор чехла: Накладка\nМатериал аксессуара: Пластик\nОсобенности чехла: MagSafe'
        ],
        [
          'Описание',
          'Рассчитан на длительное использование.\nИсключается деформация и выцветание материала.\nУстойчивость к царапинам и потертостям.\nЛегко очищается при загрязнениях.\nКнопки закрыты пыленепроницаемыми вставками.\nБыстрая установка и удаление.'
        ]
      ],
      colors: [
        {
          color: '#FFFF00',
          quantity: 2,
          pictures: ['', '']
        },
        {
          color: '#FF00FF',
          quantity: 2,
          pictures: ['', '']
        },
        {
          color: '#00FFFF',
          quantity: 2,
          pictures: ['', '']
        }
      ],
      publicationDate: 'Fri Jan 12 2024',
      quantity: 2
    },
    {
      id: 67890,
      price: 15.49,
      deliveryPrice: 2.99,
      title: 'Updated Item 3',
      img: '67890.jpg',
      desc: 'Updated Description 3',
      category: 'brand',
      info: [
        [
          'Хакактеристики',
          'Бренд: Epik\nКатегория: Чехлы\nФорм-фактор чехла: Накладка\nМатериал аксессуара: Пластик\nОсобенности чехла: MagSafe'
        ],
        [
          'Описание',
          'Рассчитан на длительное использование.\nИсключается деформация и выцветание материала.\nУстойчивость к царапинам и потертостям.\nЛегко очищается при загрязнениях.\nКнопки закрыты пыленепроницаемыми вставками.\nБыстрая установка и удаление.'
        ]
      ],
      colors: [
        {
          color: '#FFFFFF',
          quantity: 5,
          pictures: ['', '']
        }
      ],
      publicationDate: 'Sun Jan 14 2024',
      quantity: 5
    },
    {
      id: 24680,
      price: 7.99,
      deliveryPrice: 1.99,
      title: 'Updated Item 4',
      img: '24680.jpg',
      desc: 'Updated Description 4',
      category: 'prints',
      colors: [],
      publicationDate: 'Thu Jan 11 2024',
      info: [
        [
          'Хакактеристики',
          'Бренд: Epik\nКатегория: Чехлы\nФорм-фактор чехла: Накладка\nМатериал аксессуара: Пластик\nОсобенности чехла: MagSafe'
        ],
        [
          'Описание',
          'Рассчитан на длительное использование.\nИсключается деформация и выцветание материала.\nУстойчивость к царапинам и потертостям.\nЛегко очищается при загрязнениях.\nКнопки закрыты пыленепроницаемыми вставками.\nБыстрая установка и удаление.'
        ]
      ],
      quantity: 1
    },
    {
      id: 13579,
      price: 12.99,
      deliveryPrice: 3.49,
      title: 'Updated Item 5',
      img: '13579.jpg',
      desc: 'Updated Description 5',
      info: [
        [
          'Хакактеристики',
          'Бренд: Epik\nКатегория: Чехлы\nФорм-фактор чехла: Накладка\nМатериал аксессуара: Пластик\nОсобенности чехла: MagSafe'
        ],
        [
          'Описание',
          'Рассчитан на длительное использование.\nИсключается деформация и выцветание материала.\nУстойчивость к царапинам и потертостям.\nЛегко очищается при загрязнениях.\nКнопки закрыты пыленепроницаемыми вставками.\nБыстрая установка и удаление.'
        ]
      ],
      category: 'general',
      colors: [
        {
          color: '#000000',
          quantity: 4,
          pictures: ['', '']
        }
      ],
      publicationDate: 'Mon Jan 15 2024',
      quantity: 4
    },
    {
      id: 98765,
      price: 8.49,
      deliveryPrice: 2.49,
      title: 'Updated Item 6',
      img: '98765.jpg',
      info: [
        [
          'Хакактеристики',
          'Бренд: Epik\nКатегория: Чехлы\nФорм-фактор чехла: Накладка\nМатериал аксессуара: Пластик\nОсобенности чехла: MagSafe'
        ],
        [
          'Описание',
          'Рассчитан на длительное использование.\nИсключается деформация и выцветание материала.\nУстойчивость к царапинам и потертостям.\nЛегко очищается при загрязнениях.\nКнопки закрыты пыленепроницаемыми вставками.\nБыстрая установка и удаление.'
        ]
      ],
      desc: 'Updated Description 6',
      category: 'material',
      colors: [
        {
          color: '#FF8000',
          quantity: 2,
          pictures: ['', '']
        },
        {
          color: '#0080FF',
          quantity: 2,
          pictures: ['', '']
        }
      ],
      publicationDate: 'Wed Jan 17 2024',
      quantity: 2
    },
    {
      id: 54321,
      price: 14.99,
      deliveryPrice: 3.99,
      title: 'Чехол Denim with MagSafe для Apple iPhone 15 Pro (6.1)',
      img: '54321.jpg',
      info: [
        [
          'Хакактеристики',
          'Бренд: Epik\nКатегория: Чехлы\nФорм-фактор чехла: Накладка\nМатериал аксессуара: Пластик\nОсобенности чехла: MagSafe'
        ],
        [
          'Описание',
          'Рассчитан на длительное использование.\nИсключается деформация и выцветание материала.\nУстойчивость к царапинам и потертостям.\nЛегко очищается при загрязнениях.\nКнопки закрыты пыленепроницаемыми вставками.\nБыстрая установка и удаление.'
        ]
      ],
      desc: 'Updated Description 7',
      category: 'accessoryType',
      colors: [
        {
          color: '#494542',
          quantity: 3,
          pictures: ['54321(1)', '54321(2)', '54321(3)', '54321(4)']
        },
        {
          color: '#e54d4c',
          quantity: 3,
          pictures: ['54321(8)', '54321(9)', '54321(10)']
        },
        {
          color: '#ea694a',
          quantity: 3,
          pictures: ['54321(11)', '54321(12)', '54321(13)']
        },
        {
          color: '#383f37',
          quantity: 3,
          pictures: ['54321(5)', '54321(6)', '54321(7)']
        },
        {
          color: '#63b8f1',
          quantity: 3,
          pictures: ['54321(14)', '54321(15)', '54321(16)']
        }
      ],
      publicationDate: 'Tue Jan 16 2024',
      quantity: 3
    }
  ])
  return (
    <Card>
      <TableContainer>
        <Table aria-label='table in dashboard'>
          <TableBody style={{ display: 'flex', backgroundColor: '#ffeeee', flexWrap: 'wrap', justifyContent: 'center', overflowY: 'hidden'}}>
            {rows.map((row, i) => (
              <div style={{ margin: '20px 0px 0px 10px', width: '270px', borderRadius: '15px', backgroundColor: '#fff', boxShadow: '5px solid black', boxShadow: '0px 2px 10px 0px rgba(58, 53, 65, )' }}><ItemBox row={row} setRows={ setRows } /></div>
            ))}
            <Modal rows={ rows } setRows={setRows} />
          </TableBody>
        </Table>
      </TableContainer>
    </Card>
  )
}

export default DashboardTable
