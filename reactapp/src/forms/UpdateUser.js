import React, { Component } from 'react'
import UserConsumer from "../context";
import axios from "axios";

class UpdateUser extends Component {
    state = {
        name: "",
        salary: "",
        department: ""
    }

    changeInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    componentDidMount = async () => {
        const { id } = this.props.match.params;

        const response = await axios.get(`http://localhost:3004/users/${id}`);

        const { name, department, salary } = response.data;
        this.setState({
            name,
            department,
            salary
        })
    }


    updateUser = async (dispatch, e) => {
        e.preventDefault();

        // Update User
        const { name, department, salary } = this.state;
        const { id } = this.props.match.params;
        const updatedUser = {
            name,
            department,
            salary
        };

        const response = await axios.put(`http://localhost:3004/users/${id}`, updatedUser);
        dispatch({ type: "UPDATE_USER", payload: response.data });

        // Redirect
        this.props.history.push("/");
    }

    render() {
        const { name, salary, department } = this.state;
        return <UserConsumer>
            {
                value => {
                    const { dispatch } = value;
                    return (
                        <div className="col-md-8 mb-4">
                            <div className="card">
                                <div className="card-header">
                                    <h4>Update User Form</h4>
                                    <div className="card-body">
                                        <form onSubmit={this.updateUser.bind(this, dispatch)}>
                                            <div className="form-group">
                                                <label htmlFor="name">Name</label>
                                                <input
                                                    type="text"
                                                    name="name"
                                                    id="id"
                                                    placeholder="Enter Name"
                                                    className="form-control"
                                                    value={name}
                                                    onChange={this.changeInput}
                                                />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="salary">Salary</label>
                                                <input
                                                    type="text"
                                                    name="salary"
                                                    id="salary"
                                                    placeholder="Enter Salary"
                                                    className="form-control"
                                                    value={salary}
                                                    onChange={this.changeInput}

                                                />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="department">Department</label>
                                                <input
                                                    type="text"
                                                    name="department"
                                                    id="department"
                                                    placeholder="Enter Department"
                                                    className="form-control"
                                                    value={department}
                                                    onChange={this.changeInput}

                                                />
                                            </div>
                                            <button className="btn btn-danger btn-block" type="submit">Update User</button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }
            }
        </UserConsumer>
    }
}

export default UpdateUser;