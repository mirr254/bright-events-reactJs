import React, { Component } from "react";
import { Col, Form, FormGroup, Label, Input, Jumbotron, Button } from 'reactstrap';
import "../assets/login.css";

export default class Login extends Component {
    constructor(props){
        super(props);

        this.state = {
            isLoading : false,
            username : '',
            password : ''
        };
    }


    render() {
        return (
            <div>
                <Jumbotron>
                <div className="login">
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
                                <Input type="password" name="password" id="password" placeholder="password"  bsSize="lg"/>
                            </Col>
                        </FormGroup>
                        <Button color="primary">Submit</Button>{' '}
                    </Form>
                </div>
                </Jumbotron>
            </div>
        );
    }
}