import React, { Component } from 'react';
import { Modal, ModalBody, Button, ModalFooter, ModalHeader} from 'reactstrap';

class ModalPopUp extends Component{

    render(){
        return(
            <Modal isOpen={this.props.isOpen}  className={this.props.className}>
                <ModalHeader onClick={() => this.props.toggle}>Modal title</ModalHeader>
                <ModalBody>
                    {this.children}
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={() => this.props.toggle}>Do Something</Button>{' '}
                    <Button color="secondary" onClick={() => this.props.toggle}>Cancel</Button>
                </ModalFooter>
            </Modal>
        );
    }
}

export default ModalPopUp;
