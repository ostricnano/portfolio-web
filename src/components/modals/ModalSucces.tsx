import { Button } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import './Modals.css';

interface ModalSuccesProps {
  show: boolean;
  handleClose: () => void;
}

const ModalSucces = ({show, handleClose}: ModalSuccesProps) => {

  return (
    <>
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Thanks for contact me!!!</Modal.Title>
        </Modal.Header>
        <Modal.Body>I will be in touch as soon as posible</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalSucces;