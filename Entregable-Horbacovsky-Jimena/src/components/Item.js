import React, { useState } from 'react';
import { ItemCont, Button } from '../styles/styles';

const Item = ({ aumentarUno, nombre, descripcion, img, itemStock }) => {
    const [stock, setStock] = useState(itemStock);

    const comprar = () => {
        setStock(stock - 1);
        aumentarUno();
    }

    console.log(img)

    return (
        <ItemCont>
            <h3>{nombre}</h3>
            <img src={img} alt='img' />
            <p>{descripcion}</p>
            <h5>Cantidad en stock: <span>{stock < 1 ? "Agotado" : stock}</span></h5>
            <Button disabled={stock < 1} onClick={() => { comprar(); }}>
                {stock <= 0 ? "Sin Stock" : "Comprar"}
            </Button>
        </ItemCont>
    )
}

export default Item;