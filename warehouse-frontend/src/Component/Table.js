import React from "react";

function Table(props) {
  return (
    <div>
      <div>
        <table
          id="datatable-buttons"
          class="table table-bordered dt-responsive nowrap w-100"
        >
          <thead>
            <tr>
              <th>{props.header1}</th>
              <th>Position</th>
              <th>Office</th>
              <th>Age</th>
              <th>Start date</th>
              <th>Salary</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>Tiger Nixon</td>
              <td>System Architect</td>
              <td>Edinburgh</td>
              <td>61</td>
              <td>2011/04/25</td>
              <td>$320,800</td>
            </tr>
            <tr>
              <td>Garrett Winters</td>
              <td>Accountant</td>
              <td>Tokyo</td>
              <td>63</td>
              <td>2011/07/25</td>
              <td>$170,750</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Table;
