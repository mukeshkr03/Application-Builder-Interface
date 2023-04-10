import React from "react";
import { Table } from "react-bootstrap";
import "./TableButton.css";

function TableButton() {
  return (
    <Table rules="all" striped="columns" className="table">
      <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Username</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Jacob</td>
          <td>Thorn</td>
          <td>@fat</td>
        </tr>
        <tr>
          <td>3</td>
          <td>Larry</td>
          <td>Otto</td>
          <td>@twitter</td>
        </tr>
      </tbody>
    </Table>
  );
}

export default TableButton;
