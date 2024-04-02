import axios from 'axios';
import React, { Component } from 'react'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';


class Employee_list extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      errorMessage: ''
    }
  };
  componentDidMount() {
    document.title = "Employee Lists";
    this.fetchEmployee();
  };
  fetchEmployee = () => {
    axios.get("http://localhost:5000/employees")
      .then(response => {
        this.setState({
          data: response.data
        })
      })
      .catch(e => {
        this.setState({
          errorMessage: "No result found!"
        })
      });
  };

  render() {
    return (
      <>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Position</th>
              <th>Theme</th>
              <th>Company</th>
              <th>Project</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {this.state.data && this.state.data.map(item => (
              <tr>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.position}</td>
                <td>{item.setting.theme}</td>
                <td>{item.company.name}</td>
                <td>
                  {item.projects.map(pj => (
                  <> {pj.name}{" | "}</>
                ))}</td>
                <td>
                <Button variant="outline-warning" class="btn btn-sm" >Edit</Button>{' '}
                <Button variant="outline-danger" class="btn btn-sm">Dalete</Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </>
    )
  }
}
export default Employee_list;