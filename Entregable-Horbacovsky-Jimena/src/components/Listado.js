import React from 'react'
import { ListadoCont } from '../styles/styles';
import data from './data.json';
import Item from './Item';

const Listado = ({ aumentarUno }) => {
  return (
    <ListadoCont>
      {
        data.map(item => (
          <Item key={item.id}
            aumentarUno={aumentarUno}
            nombre={item.producto.nombre}
            descripcion={item.producto.descripcion}
            img={item.producto.img}
            itemStock={item.stock} />
        ))
      }
    </ListadoCont>
  )
}

export default Listado;
