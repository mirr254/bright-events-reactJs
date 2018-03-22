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
            modal : false,
        };
    }

    handleSubmit = async event => {
        event.preventDefault();
        this.setState( {isLoading : true})
    }

    toggleModal = () => {
        console.log('Pressed the button');
        this.setState({
            
            modal: !this.state.modal
        })
    }



    render() {
        return (
            <div>
                <ModalPopUp toggle={this.toggleModal} isOpen={this.state.modal} className={this.props.className} >
                  <p>this is a trial paragrapgh</p>
                </ModalPopUp>
            <Jumbotron>
            
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
                                <Button onClick={this.toggleModal}>Add new</Button> 
                        </ButtonGroup>
                    </Card>
                </Col>
            </Row>
            </Jumbotron>
            </div>
        );
    }

}

export default EventDetails;