import Modal from 'react-modal';
import css from './Modal.module.css';

Modal.setAppElement('#root');

export const ModalWindow = ({ isOpen, onClose, imageUrl, imageAlt }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      className={css.Modal}
      overlayClassName={css.Overlay}
      contentLabel="Large image"
    >
      <img src={imageUrl} alt={imageAlt} />
    </Modal>
  );
};
