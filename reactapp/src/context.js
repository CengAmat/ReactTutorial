import React, { Component } from "react";

const UserContext = React.createContext();
// Provider, Consumer
const reducer = (state, action) => {
    switch (action.type) {
        case "DELETE_USER":
            return {
                ...state,
                users: state.users.filter(user => action.payload !== user.id)
            }
        case "ADD_USER":
            return {
                ...state,
                users: [...state.users, action.payload]
            }
        default:
            return state
    }
}

export class UserProvider extends Component {

    state = {
        users: [
            {
                id: "unique-1",
                name: "Ahmet Zurnacı",
                salary: "10000",
                department: "Engineer"
            },
            {
                id: "unique-2",
                name: "Peter Parker",
                salary: "6000",
                department: "Photographer"
            },
            {
                id: "unique-3",
                name: "Harry Potter",
                salry: "7000",
                department: "Auror"
            }
        ],
        dispatch: action => {
            this.setState(state => reducer(state, action))
        }
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