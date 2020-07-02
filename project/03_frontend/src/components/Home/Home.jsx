// Import modules
import React from "react";
import axios from "axios";

// Import styles
import './Home.scss';

// Import components
import { Row, Col } from "reactstrap";
import UserList from 'components/UserList'

// Import constants
import { API_URL_USERS } from '../constants';


// Create Home component
class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {users: []};
    }

    componentDidMount() {
        this.getUsers();
    }

    getUsers = () => {
        axios.get(API_URL_USERS)
            .then(response => this.setState({ users: response.data }))
            .catch(error => console.log(error));
    };

    render() {
        return (
            <Row>
                <Col>
                    <UserList users={this.state.users} />
                </Col>
            </Row>
        );
    }
}

export default Home;
