import {useState} from 'react';

function Home(){
    return (
        <div>
            <h1>Contador</h1>
            <Contador/>
        </div>
    )
}

function Contador(){
    const [contador, setContador] = useState(1);

    function adicionar(){
        setContador(contador + 1);
    }
    
    return(
        <div>
        <div>{contador}</div>
        <button onClick={adicionar}>Adicionar</button>
        </div>
    )
}

export default Home;