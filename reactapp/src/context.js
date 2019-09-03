import React, { Component } from "react";

const UserContext = React.createContext();
// Provider, Consumer

export class UserProvider extends Component {
    state = {
        users: [
            {
                id: 1,
                name: "Ahmet Zurnacı",
                salary: "5000",
                department: "Bilişim"
            },
            {
                id: 2,
                name: "Peter Parker",
                salary: "6000",
                department: "Pazarlama"
            },
            {
                id: 3,
                name: "Harry Potter",
                salry: "7000",
                department: "Magic"
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