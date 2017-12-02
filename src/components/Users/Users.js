import React, {Component} from 'react';

class Users extends Component {
    constructor(props) {
        super(props);
        this.fetchData = this.fetchData.bind(this);
        this.state = {
            userTable:
            [{
                name: 'Patrycja'
            }, {
                name: 'Paulina'
            }, {
                name: 'Natalia'
            }],
        }

    }

    fetchData() {
        this.setState({loading: true});
        fetch('https://jsonplaceholder.typicode.com/users')
            .then( (response) =>  response.json())
            .then((data) => {
                this.setState({loading: false});
               return this.setState({userTable: data});
            })
    }

    renderIndicator() {
        if (this.state.loading) {
            return <div style={{color: 'red', fontSize: 16}}>Loading...</div>;
        }
    }


    render() {
        return (
            <div>
                <h1>Users</h1>
                {this.renderIndicator()}
                {this.state.userTable.map((user, index) => (
                    <div key={index}>
                        <div>Name: {user.name}</div>
                        <div>Email: {user.email}</div>
                    </div>

                ))}
                <button onClick={this.fetchData}>Pobierz dane</button>
            </div>
                );
    }
}

export default Users;