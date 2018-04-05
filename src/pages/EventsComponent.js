import React, { Component } from 'react';
import { Card, Button, CardTitle, CardText, Row, Col, CardImg, Jumbotron, ButtonGroup } from 'reactstrap';

class Events extends Component {
    constructor(props){
        super(props);

        this.state = {
            name: '',
            cost: '',
            description: '',
            location: '',
        };
    }

    render(){
        return (
            <Jumbotron>
                <Row>
                    <Col sm="6">
                        <Card body>
                            <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
                            <CardTitle>Event Name goes here</CardTitle>
                            <CardText>Event description here</CardText>
                            <CardText>Cost here</CardText>
                            <Button>Event Details</Button>

                        </Card>
                    </Col>
                    {/* <Col sm="6">
                        <Card body>
                            <CardTitle>Event Name goes here</CardTitle>
                            <CardText>Event description here</CardText>
                            <CardText>Cost here</CardText>
                            <ButtonGroup>
                                <Button>Edit</Button>{''}
                                <Button>Delete</Button>{''}
                                <Button>Add new</Button>
                            </ButtonGroup>
                        </Card>
                    </Col> */}
                </Row>
            </Jumbotron>
        );
    }
}

export default Events;