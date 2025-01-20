import React from 'react'
import '../styles/Modal.css'
function Modal({title,content,onClose}){
	return(
		<div className='modal-overlay'>
			<div className='modal-content'>
				<h1>{title}</h1>
				<p>{content}</p>
				<button onClick={onClose}>Fermer le Modal</button>
			</div>
		</div>
	)
}

export default Modal;