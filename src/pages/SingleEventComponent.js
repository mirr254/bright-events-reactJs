import React, { Component} from 'react';
import { Card, Button, CardTitle, CardText, Row, Col, CardImg, Jumbotron, ButtonGroup } from 'reactstrap';
import UsersRsvp from '../components/RsvpDropdownComponent';
import ModalPopUp from '../components/ModalComponent';

class EventDetails extends Component {
    constructor(props){
        super(props);
        this.state = {
            isLoading : false,
            name : '',
            cost : '',
            description : '',
            location : '',
        };
    }

    handleSubmit = async event => {
        event.preventDefault();
        this.setState( {isLoading : true})
    }



    render() {
        return (
            <Jumbotron>
            <ModalPopUp />
            <Row>
                <Col sm="6">
                    <Card body>
                        <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
                        <CardTitle>Event Name goes here</CardTitle>
                        <CardText>Event description here</CardText>
                        <CardText>Cost here</CardText>
                        
                    </Card>
                </Col>
                <Col sm="6">
                    <Card body>
                        <CardTitle>Event Name goes here</CardTitle>
                        <CardText>Event description here</CardText>
                        <CardText>Cost here</CardText>
                        <Row>
                            <Col sm="4">
                               <UsersRsvp />
                            </Col>
                            <Col >
                                <h4>This test will change</h4>
                            </Col>

                        </Row>
                        
                        <ButtonGroup>
                            <Button>Edit</Button>{''}
                                <Button color="danger">Delete</Button>{''}
                                <Button onClick={ModalPopUp}>Add new</Button>
                        </ButtonGroup>
                    </Card>
                </Col>
            </Row>
            </Jumbotron>
        );
    }

}

export default EventDetails;