import React, { Component } from "react";

const UserContext = React.createContext();

// Provider, Consumer
const reducer = (state, action) => {
  switch (action.type) {
    case "DELETE_USER":
      return {
        ...state,
        users: state.users.filter((user) => action.payload !== user.id)
      };
    case "ADD_USER":
      return {
        ...state,
        users: [...state.users, action.payload]
      };
    default:
      return state;
  }
};

export class UserProvider extends Component {
  state = {
    users: [
      {
        id: "1",
        name: "Harry Potter",
        salary: "5000",
        department: "Wizard",
      },
      {
        id: "2",
        name: "Peter Parker",
        salary: "6000",
        department: "Hero",
      },
      {
        id: "3",
        name: "Ahmet Zurnaci",
        salary: "5000",
        department: "Developer",
      },
    ],
    dispatch: (action) => {
      this.setState((state) => reducer(state, action));
    },
  };

  render() {
    return (
      <UserContext.Provider value={this.state}>
        {this.props.children}
      </UserContext.Provider>
    );
  }
}

const UserConsumer = UserContext.Consumer;

export default UserConsumer;

// import axios from "axios";

// const reducer = (state, action) => {
//     switch (action.type) {
//         case "DELETE_USER":
//             return {
//                 ...state,
//                 users: state.users.filter(user => action.payload !== user.id)
//             }
//         case "ADD_USER":
//             return {
//                 ...state,
//                 users: [...state.users, action.payload]
//             }
//         case "UPDATE_USER":
//             return {
//                 ...state,
//                 users: state.users.map(user => user.id === action.payload.id ? action.payload : user)
//             }
//         default:
//             return state
//     }
// }

// export class UserProvider extends Component {

//     state = {
//         users: [],
//         dispatch: action => {
//             this.setState(state => reducer(state, action))
//         }
//     }

//     componentDidMount = async () => {
//         const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
//         this.setState({
//             users: response.data
//         })

//     }

//     render() {
//         return (
//             <UserContext.Provider value={this.state}>
//                 {this.props.children}
//             </UserContext.Provider>
//         )
//     }
// }
