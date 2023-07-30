import React from "react";
import './Modale.css';

const Modale = ({ isActive, enableClose, onClose, title, content, titleClass, contentClass }) => {
    return (
        <dialog className={ isActive ? "modale show" : "modale" }>
            { enableClose ? <div onClick={ () => onClose() } className="overlay"></div> : <div className="overlay"></div>}
            
            <div className="modale-container">
                { enableClose ? <button onClick={ () => onClose() } className="close">X</button> : null }
                { title ? <h1 className={ titleClass ? titleClass : null }>{ title }</h1> : null }
                { content ? <p className={ contentClass ? contentClass : null }>{ content }</p> : null }
            </div>
        </dialog>
    );
}

export default Modale;