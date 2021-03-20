import React, { Component } from "react";
import PropTypes from "prop-types";
import UserConsumer from "../context";
// import axios from "axios";
// import { Link } from "react-router-dom"

export default class User extends Component {
  static defaultProps = {
    name: "No Info",
    salary: "No Info",
    department: "No Info",
  };

  constructor(props) {
    super(props);

    this.state = {
      isVisible: false,
    };
  }

  onClickEvent = (number, e) => {
    this.setState({
      isVisible: !this.state.isVisible,
    });
  };

  onDeleteUser = (dispatch, e) => {
    const { id } = this.props;

    // Consumer Dispatch
    dispatch({ type: "DELETE_USER", payload: id });
  };

  componentWillUnmount() {
    console.log("Component Will Unmount");
    
  }
  

  render() {
    //Desctructing
    const { name, salary, department } = this.props;
    const { isVisible } = this.state;

    return (
      <UserConsumer>
        {(value) => {
          const { dispatch } = value;

          return (
            <div className="col-md-8 mb-4">
              <div
                className="card"
                style={
                  isVisible
                    ? { backgroundColor: "#9e78db ", color: "white" }
                    : null
                }
              >
                <div className="card-header d-flex justify-content-between">
                  <h4
                    className="d-inline"
                    onClick={this.onClickEvent.bind(this, 61)}
                  >
                    {name}
                  </h4>
                  <i
                    onClick={this.onDeleteUser.bind(this, dispatch)}
                    className="far fa-trash-alt"
                    style={{ cursor: "pointer" }}
                  ></i>
                </div>
                {isVisible ? (
                  <div className="card-body">
                    <p className="card-text">Salary: {salary}</p>
                    <p className="card-text">Department: {department}</p>
                  </div>
                ) : null}
              </div>
            </div>
          );
        }}
      </UserConsumer>
    );
  }
}



//   onDeleteUser = async (dispatch, e) => {
//     const { id } = this.props;
//     // Delete Request
//     await axios.delete(`http://localhost:3004/users/${id}`);

//     // Consumer Dispatch
//     dispatch({ type: "DELETE_USER", payload: id });
//   };


//     return (
//       <UserConsumer>
//         {
//           value => {
//             const { dispatch } = value;

//             return (
//               <div className="col-md-8 mb-4">
//                 <div className="card" style={isVisible ? { backgroundColor: "#9e78db ", color: "white" } : null}>
//                   <div className="card-header d-flex justify-content-between">
//                     <h4 className="d-inline" onClick={this.onClickEvent.bind(this, 34)}>
//                       {name}
//                     </h4>
//                     <i
//                       onClick={this.onDeleteUser.bind(this, dispatch)}
//                       className="far fa-trash-alt"
//                       style={{ cursor: "pointer" }}
//                     ></i>
//                   </div>
//                   {isVisible ?
//                     <div className="card-body">
//                       <p className="card-text">Salary: {salary}</p>
//                       <p className="card-text">Department: {department}</p>
//                       <Link to={`edit/${id}`} className="btn btn-dark btn-block">Update User</Link>
//                     </div> : null}
//                 </div>
//               </div>
//             );
//           }
//         }
//       </UserConsumer >
//     )
//   }
// }

User.propTypes = {
  name: PropTypes.string.isRequired,
  salary: PropTypes.string.isRequired,
  department: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
