import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import ColorPicker from "./ColorsMap";

const ColorModal = ({ show, onHide }) => {
  return (
    <>
      <Modal
        show={show}
        onHide={onHide}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Select a Color to Customise
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ColorPicker />
        </Modal.Body>
        <Modal.Footer>
          <Button>Close</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ColorModal;
