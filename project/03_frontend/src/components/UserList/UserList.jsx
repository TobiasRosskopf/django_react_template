// Import modules
import React from "react";

// Import styles
import './UserList.scss';

// Import components
import { Table } from "reactstrap";


// Create UserList component
class UserList extends React.Component {

    render() {
        const users = this.props.users;
        
        return (
            <Table hover>
                <thead>
                    <tr>
                        <th>Benutzer</th>
                        <th>Email</th>
                        <th>Vorname</th>
                        <th>Nachname</th>
                    </tr>
                </thead>
                <tbody>
                    {!users || users.length <= 0 ? (
                        <tr>
                            <td colSpan="6" align="center"><b>keine Einträge</b></td>
                        </tr>
                    ) : (
                        users.map(users => (
                            <tr key={users.pk}>
                                <td>{users.username}</td>
                                <td>{users.email}</td>
                                <td>{users.first_name}</td>
                                <td>{users.last_name}</td>
                            </tr>
                        ))
                    )}
                </tbody>
            </Table>
        );
    }
}

export default UserList;
