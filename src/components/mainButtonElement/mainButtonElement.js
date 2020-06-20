import React from 'react';
import './style.css';

function MainButtonElement(props) {

    return(
        <div className='mainButtonElement'>
            <a className='title' href="https://fontmeme.com/pt/fonte-de-pokemon/"><img src="https://fontmeme.com/permalink/200620/63003a6b38173454d2a74aa30a82d7f8.png" alt="fonte-de-pokemon" border="0"/></a>
            <div className='inputButtonElement'>
                <input className='mainInput' required value={props.name} onChange={(e)=> props.setName(e.target.value)}  type="text" placeholder='Digite o nome do Pokemon'></input>
                <button className='mainButton' type='submit' onClick={props.handlerSubmit}>Buscar</button>
            </div>
        </div>
    );
}

export default MainButtonElement;