import React, { Component } from 'react'
import PropTypes from 'prop-types'


class User extends Component {
    static  defaultProps = {
        name: "No Info",
        department: "No Info",
        salary: "No Info"
    }

    render() {
        const { name, department, salary } = this.props;
        return (
            <div className = "col-md-8 mb-4">
                <div className="card">
                    <div className="card-header d-flex justify-content-between">
                        <h4 className = "d-inline">{name}</h4>
                        <i className = "fas fa-chess-knight" style = {{ cursor: "pointer"}}></i>
                    </div>
                    <div className="card-body">
                        <p className="card-text">Department : {department}</p>
                        <p className="card-text">Salary : {salary}</p>
                    </div>
                </div>    
            </div>
        )
    }
}

User.propTypes = {
    name: PropTypes.string.isRequired,
    department: PropTypes.string.isRequired,
    salary: PropTypes.string.isRequired
}

// User.defaultProps = {
//     name: "No Info",
//     department: "No Info",
//     salary: "No Info"
// }

export default User;