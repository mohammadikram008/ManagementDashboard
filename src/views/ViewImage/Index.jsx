import React, { Fragment,useState } from 'react'
import Modal from 'react-modal';
import { useLocation } from 'react-router-dom';
Modal.setAppElement('#root');

const Index = () => {
    const location = useLocation();
    const [modalIsOpen, setModalIsOpen] = useState(true);
    console.log("modellcoation", location.state)
    const img = location.state;
    const openModal = (image) => {
        // setSelectedImage(image);
        setModalIsOpen(true);
      };
    
      const closeModal = () => {
        // setSelectedImage(null);
        setModalIsOpen(false);
      };
    return (
        <Fragment>
            <Modal
                  isOpen={modalIsOpen}
                  onRequestClose={closeModal}
                //   className="modal-content"
                  overlayClassName="modal-overlay"
                style={customStyles}
            >
                <img
                    src={`http://localhost:3005/${img}`}
                    alt="Image"
                    style={{ maxWidth: '100%' }}
                />
                <button onClick={closeModal} className=""/>
            </Modal>
        </Fragment>
    )
}

export default Index