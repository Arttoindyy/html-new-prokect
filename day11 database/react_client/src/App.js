import React, { Component } from 'react'
import { Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import Employee_list from './components/Employee_list.component';
import Employee_create from './components/Employee_create.component';
import Employee_update from './components/Employee_update.component';
import Employee_project from './components/Employee_project.component';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar collapseOnSelect expand="lg" bg="dark" data-bs-theme="dark">
          <Container>
            <Navbar.Brand href="/">ITDI</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="/">
                  Home
                  </Nav.Link>
                <NavDropdown title="/Employee" id="collapsible-nav-dropdown">
                  <NavDropdown.Item href="/">
                    List
                    </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="/employee_craete">
                    Craete
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="/employee_project">
                    Add employee to project
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
              <Nav>
                <Nav.Link href="#deets">More deets</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        <div className='container mt-3'>
          <Routes>
            <Route path='/' element={<Employee_list />} />
            <Route path='/employee_craete' element={<Employee_create />} />
            <Route path='/employee_update' element={<Employee_update />} />
            <Route path='/emplpoyee_project' element={<Employee_project />} />
          </Routes>
        </div>
      </div>
    );
  }
}
export default App;