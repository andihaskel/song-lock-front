/* eslint react/no-multi-comp: 0, react/prop-types: 0 */

import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Input, Label, Form, FormGroup, Container } from 'reactstrap';

const ShareModal = (props) => {
    const {
        className,
        onClose,
        isOpen
    } = props;
    const [unmountOnClose, setUnmountOnClose] = useState(true);

    return (
        <div>
            <Modal isOpen={isOpen} toggle={onClose} className={className} unmountOnClose={unmountOnClose}>
                <ModalHeader toggle={onClose}>Modal title</ModalHeader>
                <ModalBody>
                    <Container>
                        <Form onSubmit={(e) => e.preventDefault()}>
                            <FormGroup>
                                <Label for="passwordCheckbox">Password Protected</Label>
                                <Input type="checkbox" name="passwordCheckbox" id="passwordCheckbox" />
                            </FormGroup>
                            <FormGroup>
                                <Label for="unmountOnClose">Password</Label>{' '}
                                <Input type="text"></Input>
                            </FormGroup>
                            {' '}

                        </Form>
                    </Container>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={onClose}>Generate link</Button>
                    {/* <Button color="secondary" onClick={onClose}>Cancel</Button> */}
                </ModalFooter>
            </Modal>
        </div>
    );
}

export default ShareModal;