import React, {Component} from "react";
import TicketDetails from "./ticketDetails";
import { Navigate } from 'react-router-dom'

class CompletedTickets extends Component {
  render(){

    if (!this.props.auth){ return <Navigate to='/login' /> }



    return (
        <div className="container">

<table className='highlight centered' style={{ color: 'white' }}>
          <thead>
            <tr>
              <th>Ticket Name</th>
              <th>Assigned To</th>
              <th>Bug Severity</th>
            </tr>
          </thead>

          <tbody>
                <tr>
                  <td>debug</td>
                  <td>ben</td>
                  <td>low</td>
                  <td>
                  <TicketDetails/>
                  </td>
                </tr>
          </tbody>
        </table>

        </div>
    )
}
}


export default CompletedTickets