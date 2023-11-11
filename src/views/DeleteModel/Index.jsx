import React from 'react'
import { Fragment } from 'react'

const Index = ({ isOpen, onClose, onDelete, transactionId }) => {
    const handleDelete = async () => {
        try {
          // Call your delete API
          await axios.delete(`your-api-endpoint/${transactionId}`);
          onDelete(); // Trigger any additional actions after successful deletion
        } catch (error) {
          console.error('Error deleting transaction:', error);
        }
        onClose(); // Close the modal after deletion, whether successful or not
      };
    
  return (
  <Fragment>
    <div className={`modal ${isOpen ? 'is-active' : ''}`}>
      <div className="modal-background" onClick={onClose}></div>
      <div className="modal-content">
        <div className="box">
          <p>Are you sure you want to delete this transaction?</p>
          <button className="button is-danger" onClick={handleDelete}>
            Yes, delete
          </button>
          <button className="button" onClick={onClose}>
            No, cancel
          </button>
        </div>
      </div>
      <button className="modal-close is-large" aria-label="close" onClick={onClose}></button>
    </div>
  
  </Fragment>
  )
}

export default Index