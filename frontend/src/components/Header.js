import React from 'react';
<<<<<<< HEAD
import { Route } from 'react-router-dom';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../actions/userActions';
import SearchBox from './SearchBox';
=======
import { Navbar, Nav, Container, NavDropdown, Dropdown } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../actions/userActions';
>>>>>>> fb81ae0978b89e4a2a835f959b99d76296a17c96

const Header = () => {
  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  const logoutHandler = () => {
    dispatch(logout());
  };
  return (
    <header>
      <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand>ProShop</Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Route render={({ history }) => <SearchBox history={history} />} />
            <Nav className="ml-auto">
              <LinkContainer to="/cart">
                <Nav.Link>
<<<<<<< HEAD
                  <i className="fas fa-shopping-cart"></i> Cart
=======
                  <i className="fas fa-shopping-cart" />
                  Cart
>>>>>>> fb81ae0978b89e4a2a835f959b99d76296a17c96
                </Nav.Link>
              </LinkContainer>
              {userInfo ? (
                <NavDropdown title={userInfo.name} id="username">
                  <LinkContainer to="/profile">
                    <NavDropdown.Item>Profile</NavDropdown.Item>
                  </LinkContainer>
<<<<<<< HEAD
                  <NavDropdown.Item onClick={logoutHandler}>
                    Logout
                  </NavDropdown.Item>
=======
                  <Dropdown.Item onClick={logoutHandler}>Logout</Dropdown.Item>
>>>>>>> fb81ae0978b89e4a2a835f959b99d76296a17c96
                </NavDropdown>
              ) : (
                <LinkContainer to="/login">
                  <Nav.Link>
<<<<<<< HEAD
                    <i className="fas fa-user"></i> Sign In
                  </Nav.Link>
                </LinkContainer>
              )}
              {userInfo && userInfo.isAdmin && (
                <NavDropdown title="Admin" id="adminmenu">
                  <LinkContainer to="/admin/userlist">
                    <NavDropdown.Item>Users</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to="/admin/productlist">
                    <NavDropdown.Item>Products</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to="/admin/orderlist">
                    <NavDropdown.Item>Orders</NavDropdown.Item>
                  </LinkContainer>
                </NavDropdown>
              )}
=======
                    <i className="fas fa-user" />
                    Sign-In
                  </Nav.Link>
                </LinkContainer>
              )}
>>>>>>> fb81ae0978b89e4a2a835f959b99d76296a17c96
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
