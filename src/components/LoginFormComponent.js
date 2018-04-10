import React, { Component } from 'react';
import { FormGroup, Label, Col, Input, Button, Form } from 'reactstrap';

const LoginForm = (props) => {
    return(
        <Form>
            <FormGroup row>
                <Label for="username" sm={2} size="lg">Username</Label>
                <Col sm={12}>
                    <Input type="text" name="username" id="username" placeholder="username" bsSize="lg" />
                </Col>
            </FormGroup>
            <FormGroup row>
                <Label for="password" sm={2} size="lg">Password</Label>
                <Col sm={12}>
                    <Input type="password" name="password" id="password" placeholder="password" bsSize="lg" />
                </Col>
            </FormGroup>
            <Button color="primary">Submit</Button>{' '}
        </Form>
    );
};
export default LoginForm;