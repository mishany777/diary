import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import styles from '../DeleteConfirmationModal/DeleteConfirmationModal.module.css'; // Импортируйте стили

const DeleteConfirmationModal = ({ show, handleClose, handleDelete }) => {
  return (
    <Modal show={true} onHide={handleClose} className={styles.modal}>
      <Modal.Header closeButton className={styles.modalHeader}>
        <Modal.Title className={styles.modalTitle}>Подтверждение удаления</Modal.Title>
      </Modal.Header>
      <Modal.Body className={styles.modalBody}>
        Вы уверены, что хотите удалить эту заметку?
      </Modal.Body>
      <Modal.Footer className={styles.modalFooter}>
        <Button variant="secondary" onClick={handleClose}>
          Отмена
        </Button>
        <Button variant="danger" onClick={handleDelete}>
          Удалить
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default DeleteConfirmationModal;