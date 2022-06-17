import React, {useState} from 'react';
import Cabecera from './components/Cabecera';
import Listado from './components/Listado';
import { AppCont } from './styles/styles';

function App() {
    const [total, setTotal] = useState(0);

    const aumentarUno = () => {
        setTotal(total + 1);
    }

    return (
        <AppCont>
            <Cabecera productos={total}/>
            <Listado aumentarUno={aumentarUno}/>
        </AppCont>
    );
}

export default App;
