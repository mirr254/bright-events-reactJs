import React, { Component } from 'react'
import { FormControl, FormGroup, ControlLabel, HelpBlock } from 'react-bootstrap';

class ConfirmEmail extends Component {
    constructor(props){
        super(props);

        this.state = {
            confirmationCode : ''
        }
    }
    validateConfirmationForm() {
        this.state.confirmationCode > 0;
    }

    render() {
        return (
            <div className='Signup'>
                <form onSubmit={this.handleConfirmationSubmit}>
                    <FormGroup controlId="confirmationCode" bsSize="large">
                        <ControlLabel>Confirmation Code</ControlLabel>
                        <FormControl
                            autoFocus
                            type="text"
                            value={this.state.confirmationCode}
                            onChange={this.handleChange}
                        />
                        <HelpBlock>Please check your email for the code.</HelpBlock>
                    </FormGroup>
                    
                </form>
            </div>
            );
           
    }
}

export default ConfirmEmail;
