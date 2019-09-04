import React, { Component } from "react";

const UserContext = React.createContext();
// Provider, Consumer

export class UserProvider extends Component {

    state = {
        users: [
            {
                id: 1,
                name: "Ahmet Zurnacı",
                salary: "10000",
                department: "Engineer"
            },
            {
                id: 2,
                name: "Peter Parker",
                salary: "6000",
                department: "Photographer"
            },
            {
                id: 3,
                name: "Harry Potter",
                salry: "7000",
                department: "Auror"
            }
        ]
    }

    render() {
        return (
            <UserContext.Provider value={this.state}>
                {this.props.children}
            </UserContext.Provider>
        )
    }
}
const UserConsumer = UserContext.Consumer;

export default UserConsumer;