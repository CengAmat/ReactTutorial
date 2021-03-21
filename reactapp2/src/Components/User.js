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
            <div>
                <ul>
                    <li>Name : {name}</li>
                    <li>Department : {department}</li>
                    <li>Salary : {salary}</li>
                </ul>
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