import React, { Component } from 'react';
import { Jumbotron, Row, Col, Card, CardImg,
         Button, Form, FormGroup, Label, Input, CardBody } from 'reactstrap';

class AddEvent extends Component{

    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
            name: '',
            cost: '',
            description: '',
            location: '',
        };
    }

    render(){
        return(
            <Jumbotron>
                
                <Form>
                    <Row>
                        <Col sm="6">
                            <Card body>
                                <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
                            </Card>
                            
                        </Col>
                        <Col sm="6">
                            <FormGroup>
                                <Label for="eventName">Event Name</Label>
                                <Input type="text" name="email" id="eventName" placeholder="Name" />
                            </FormGroup>
                            <FormGroup>
                                <Label for="eventCost">Cost</Label>
                                <Input type="number" name="password" id="eventCost" placeholder="443000" />
                            </FormGroup>
                            <FormGroup>
                                <Label for="description">Description</Label>
                                <Input type="textarea" name="text" id="description" />
                            </FormGroup>

                            <Button>Submit</Button>
                        </Col>

                    </Row>
                </Form>

            </Jumbotron>
        );
    }
}

export default AddEvent;
