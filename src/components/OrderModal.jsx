import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Row } from 'reactstrap';

const ModalExample = (props) => {
  const {
    buttonLabel,
    className
  } = props;

  const [modal, setModal] = useState(props.isOpen);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Modal isOpen={props.isOpen} toggle={props.toggle} className={className}>
        <ModalHeader toggle={props.toggle}>Titulo</ModalHeader>
        <ModalBody>
          <div>
            Descripcion<br />
            Oh so, your weak rhyme You doubt I'll bother, reading into it.
          </div>
          <div>
            <img
              alt="..."
              src={require("assets/img/order.png")}
              style={{ maxWidth: '150px', marginRight: '2%' }}
            />
            <img
              alt="..."
              src={require("assets/img/code.png")}
              style={{ maxWidth: '150px', marginRight: '2%' }}
            />
          </div>
        </ModalBody>
        <ModalFooter>
          <div>
            <span style={{ float: 'left' }}>Total Cost: $32</span>
          </div>
          <Button color="primary" onClick={props.toggle} style={{marginLeft: 'auto'}}>Next</Button>{' '}

        </ModalFooter>
      </Modal>
    </div>
  );
}

export default ModalExample;