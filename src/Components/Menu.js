import React, {useState, useContext, useEffect} from 'react'
import { store } from '../store.js';

function Menu() {
    const globalState = useContext(store);
    const { state, dispatch } = globalState;
    // const [options, setOptions] = useState(state.options);

    const handleCheckBox = () => {
        // Get the checkbox
        let checkBox = document.getElementById("passeBox");
        dispatch({type : 'UPDATE_OPTION', optionName : "passeManche1", value : checkBox.checked});
    } 

    const handleNumber = type => {
        let number = document.getElementById(type).value;
        dispatch({type : 'UPDATE_OPTION', optionName : type, value : number});
    } 

    return (
    <div>
        <ui>
            <li>
                <input type="checkbox" id='passeBox' name='passe' onClick={() => handleCheckBox()}/>
                <label htmlFor="passeBox">Passer au premier tour</label>
            </li>
            <li>
                <input type="number" id='deckSize' name='deck' onChange={() => handleNumber('deckSize')} min={5} max={100} value={state.options.deckSize} step={1}/>
                <label htmlFor="deckSize">Nombre de cartes</label>
            </li>
            <li>
                <input type="number" id='time' name='time' onChange={() => handleNumber('time')} min={10} max={120} value={state.options.time} step={1}/>
                <label htmlFor="passeBox">Temps par tour (secondes)</label>
                </li>
            <li>
                <input type="number" id='lostPasse' name='penalty' onChange={() => handleNumber('lostPasse')} min={0} max={10} value={state.options.lostPasse} step={1}/>
                <label htmlFor="passeBox">Pénalité pour passer (secondes)</label>
            </li>
        </ui>
    </div>
    );
}

export default Menu
