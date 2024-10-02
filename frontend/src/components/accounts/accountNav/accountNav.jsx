import React from 'react';
import { Link } from 'react-router-dom';
import './accountNav.css';
import { useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

function AccountNav() {
  const navigate = useNavigate();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  function logOut() {
    // Add additional logic for logging the user out 
    navigate("/");
  }
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <img src='/img/pc-tech.tutor-bg.png' alt='Tech Tutor Logo' className='navbar-logo-img' />
        </Link>
        <ul className="nav-menu">
          <li className="nav-item">
          <Link to="/" className="nav-links">Home</Link>
          </li>
          <li className="nav-item">
          <Link to="/tutors" className="nav-links-2-nb">Find Tutors</Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-links">About</Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className="nav-links-2">Contact</Link>
          </li>
          <li className="nav-item">
          {/* <button className="log-out-button" onClick={() => navigate("/")}>Log Out</button> */}
          <Button
          id="basic-button"
          aria-controls={open ? 'basic-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClick}
          >
            Account
          </Button>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              'aria-labelledby': 'basic-button'
            }}
          >
            <MenuItem onClick={() => navigate("/user/account")}>My Account</MenuItem>
            {/* // Will have to add logic to the above function to change the route depending 
            // on if the user is a mentor */}
            <MenuItem onClick={logOut}>Logout</MenuItem>
          </Menu>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default AccountNav;