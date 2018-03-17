import React, { Component } from 'react';
import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle} from 'reactstrap';

class UsersRsvp extends Component {
    constructor(props){
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            dropdownOpen : false
        }
    }

    toggle(){
        this.setState({
            dropdownOpen : !this.state.dropdownOpen
        })
    }

    render(){
        return(
            <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                <DropdownToggle caret>
                    Event Guests
               </DropdownToggle>
                <DropdownMenu>
                    <DropdownItem >Person 1</DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem >person 2</DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem>person 3</DropdownItem>
                </DropdownMenu>
            </Dropdown>
        );
    }
}

export default UsersRsvp;