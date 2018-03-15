import React, { Component } from 'react';
import { Grid, Navbar, Jumbotron, Button, Tabs, Tab, FormControl, FormGroup, Col, ControlLabel, Form, Checkbox} from 'react-bootstrap';
import CustomNavbar from '../components/NavbarComponent';
class Authentication extends Component {
    render() {
        return (
            <div>
                <CustomNavbar />
                <Jumbotron>
                    <Grid>
                        <h1>Bright Events</h1>
                        <Tabs defaultActiveKey={2} id="uncontrolled-tab-example">
                            <Tab eventKey={1} title="Login">
                                <Form horizontal>
                                    <FormGroup controlId="formHorizontalEmail">
                                        <Col componentClass={ControlLabel} sm={2}>
                                            Email
                                        </Col>
                                        <Col sm={10}>
                                            <FormControl type="email" placeholder="Email" />
                                        </Col>
                                    </FormGroup>

                                    <FormGroup controlId="formHorizontalPassword">
                                        <Col componentClass={ControlLabel} sm={2}>
                                            Password
                                        </Col>
                                        <Col sm={10}>
                                            <FormControl type="password" placeholder="Password" />
                                        </Col>
                                    </FormGroup>

                                    <FormGroup>
                                        <Col smOffset={2} sm={10}>
                                            <Checkbox>Remember me</Checkbox>
                                        </Col>
                                    </FormGroup>

                                    <FormGroup>
                                        <Col smOffset={2} sm={10}>
                                            <Button type="submit">Sign in</Button>
                                        </Col>
                                    </FormGroup>
                                </Form>;
                            </Tab>
                            <Tab eventKey={2} title="Signup">
                                Tab 2 content
                            </Tab>
                           
                        </Tabs>
                    </Grid>
                </Jumbotron>
            </div>
        );
    }
}

export default Authentication;