import React, { Component, useEffect, useState } from 'react'
import TicketDetails from './ticketDetails'
import { getDocs, collection, getFirestore } from 'firebase/firestore'




function ProfilePage() {
  const [ticketLists, setTicketList] = useState([]);
  const ticketCollectionRef = collection(getFirestore(), 'ticket');

  useEffect(() => {
    const getTickets = async () => {
      const data = await getDocs(ticketCollectionRef);
      setTicketList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
    };

    getTickets();
  })

  return (
    <div className='container'>

      <a href="/completed" className="right">Completed Tickets</a>

      <div>

        <h4 className='center' style={{ color: 'white' }}>My Tickets:</h4>

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

            {ticketLists.map((ticket) => {
              return (
                <tr>
                  <td>{ticket.title}</td>
                  <td>{ticket.assignedTo}</td>
                  <td>{ticket.severity}</td>
                  <td>
                    <TicketDetails/>
                  </td>
                </tr>
                )})}
        </tbody>
        </table>

      </div>
    </div>
    )
  }
  

export default ProfilePage;
