import React from 'react';
import Modal from 'react-modal';

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};

function LoadingModal(props) {
  return (
    <Modal
      isOpen={props.isLoading}
      style={customStyles}
      contentLabel="Example Modal"
    >
      <button onClick={
        ()=>{
          props.setIsLoading(false);
        }
        }>close</button>
      <div>Loading .......</div>

    </Modal>
  );
}
export default LoadingModal;