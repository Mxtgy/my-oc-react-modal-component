import React from "react";
import './Modale.css';

/**
 *
 * This is a react modal component
 *
 * @param {boolean} isActive - Activate/Deactivate the modale
 * @param {boolean} enableClose - Showing a close button
 * @param {function} onClose - Toggle the modale
 * @param {string} title - Modale title
 * @param {string} content - Modale content
 * @param {string} titleClass - Title's class
 * @param {string} contentClass - Content's class
 * @return {HTMLElement} Returns the modale's HTML
 */
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