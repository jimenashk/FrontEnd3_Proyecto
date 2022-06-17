import React from 'react'
import { CabeceraCont } from '../styles/styles'

const Cabecera = ({productos}) => {
    return (
        <CabeceraCont>
            <h1>Carrito de compras</h1>
            <p>Cantidad de productos: <span>{productos}</span></p> 
        </CabeceraCont>
    )
}

export default Cabecera;