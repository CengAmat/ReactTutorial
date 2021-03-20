import React from "react";
import PropTypes from "prop-types";
// import { Link } from "react-router-dom"

export default function Navbar(props) {
  return (
    <div>
      <h3>{props.title}</h3>
    </div>
  )
}


// export default function Navbar() {
//   return (
//     <div>
//       <h3>User App</h3>
//     </div>
//     // <nav className="navbar-nav navbar-expand-lg navbar-dark bg-dark mb-3 p-3">
//     //   <a href="/" className="navbar-brand">{title}</a>
//     //   <ul className="navbar-nav ml-auto">
//     //     <li className="nav-item active">
//     //       <Link to="/" className="nav-link">Home</Link>
//     //     </li>
//     //     <li className="nav-item active">
//     //       <Link to="/add" className="nav-link">Add User</Link>
//     //     </li>
//     //     <li className="nav-item active">
//     //       <Link to="/github" className="nav-link">Project Files</Link>
//     //     </li>
//     //   </ul>
//     // </nav>
//   )
// }


// ARROW FUNCTION
// const Navbar = () => {
//   return (
//     <div>
//       <h3>User App</h3>
//     </div>
//   )
// }
// export default Navbar;

// PROPS
Navbar.propTypes = {
  title: PropTypes.string.isRequired
}

Navbar.defaultProps = {
  title: "Default App"
}
