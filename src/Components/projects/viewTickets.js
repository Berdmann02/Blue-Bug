import React from 'react'
import TicketDetails from './ticketDetails';


const ViewTickets = ({ tickets }) => {
  return (
    <div>
      <div>
        <h4 className='center-align' style={{ color: 'white' }}>Tickets</h4>
      </div>

      <div>
        <table className='highlight centered' style={{ color: 'white' }}>
          <thead>
            <tr>
              <th>Ticket Name</th>
              <th>Assigned To</th>
              <th>Bug Severity</th>
            </tr>
          </thead>
          <tbody>
            {tickets && tickets.map(ticket => {
              return (
                <tr>
                  <td>{ticket.title}</td>
                  <td>{ticket.assignedTo}</td>
                  <td>{ticket.severity}</td>
                  <td>
                  <TicketDetails />
                  </td>
                </tr>
              )
            })}
          </tbody>


        </table>
      </div>
    </div>






  )
}

export default ViewTickets;