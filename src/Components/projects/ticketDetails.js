import { Modal, Button } from 'react-materialize';


function TicketDetails(){

  
const trigger = <Button className='waves-effect waves-light btn modal-trigger #0d47a1 blue darken-4'>View</Button>;

return (
  <Modal trigger={trigger} className='#37474f blue-grey darken-3'>
    <div>
           <div className="#37474f blue-grey darken-3">
             <h4 style={{ color: 'white' }}>Debug</h4>
             <div style={{ padding: 20 }}></div>

             <table className='highlight centered' style={{ color: 'white' }}>
               <tr>
               <th>Steps To Reproduce Bug</th>
               <td>
                 <a href="#" className="href">Uploaded</a>
               </td>
               </tr>
               <tr>
                 <th>Expected / Actual Result</th>
                 <td>Should let people sign in if they have the right password</td>
               </tr>
               <tr>
                 <th>Assigned To</th>
                 <td>Ben</td>
               </tr>
               <tr>
                 <th>Bug Severity</th>
                 <td>Medium</td>
               </tr>
               <tr>
                   <th>Progress</th>
                   <td>
                   <div class="switch">
                   <label>
                     <input type="checkbox" />
                     <span class="lever"></span>
                     Complete
                   </label>
                   </div>
                   </td>
               </tr>
             </table>
           </div>
           <form className="complete">
           <div className="modal-footer #37474f blue-grey darken-3">
             <a href="#!" className="modal-close waves-effect waves-green btn-flat" style={{ color: 'white' }}>Edit</a>
             <a href="#!" className="modal-close waves-effect waves-green btn-flat" style={{ color: 'white' }}>Save</a>
           </div>
           </form>
          </div>
  </Modal>
)
}


export default TicketDetails




















// import React, { useEffect, useState } from "react";
// import { getDocs, collection, getFirestore } from 'firebase/firestore'

// function TicketDetails() {

  // const [ticketLists, setTicketList] = useState([]);
  // const ticketCollectionRef = collection(getFirestore(), 'ticket');

  // useEffect(() => {
  //   const getTickets = async () => {
  //     const data = await getDocs(ticketCollectionRef);
  //     setTicketList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
  //   };

  //   getTickets();
  // })

//     return (
//         <div>
//         {/* <!-- Modal Trigger --> */}
//         <a className="waves-effect waves-light btn modal-trigger #0d47a1 blue darken-4" href="#modal1">View</a>

//         {/* /* <!-- Modal Structure --> */}
//         {/* {ticketLists.map((ticket) => { */}
//         <div id="modal1" className="modal">
//           <div className="modal-content #37474f blue-grey darken-3">
//             <h4 style={{ color: 'white' }}>Debug</h4>
//             <div style={{ padding: 20 }}></div>

//             <table className='highlight centered' style={{ color: 'white' }}>
//               <tr>
//               <th>Steps To Reproduce Bug</th>
//               <td>
//                 <a href="#" className="href">Uploaded</a>
//               </td>
//               </tr>
//               <tr>
//                 <th>Expected / Actual Result</th>
//                 <td>Should let people sign in if they have the right password</td>
//               </tr>
//               <tr>
//                 <th>Assigned To</th>
//                 <td>Ben</td>
//               </tr>
//               <tr>
//                 <th>Bug Severity</th>
//                 <td>Medium</td>
//               </tr>
//               <tr>
//                   <th>Progress</th>
//                   <td>
//                   <div class="switch">
//                   <label>
//                     <input type="checkbox" />
//                     <span class="lever"></span>
//                     Complete
//                   </label>
//                   </div>
//                   </td>
//               </tr>
//             </table>
//           </div>
//           <form className="complete">
//           <div className="modal-footer #37474f blue-grey darken-3">
//             <a href="#!" className="modal-close waves-effect waves-green btn-flat" style={{ color: 'white' }}>Edit</a>
//             <a href="#!" className="modal-close waves-effect waves-green btn-flat" style={{ color: 'white' }}>Save</a>
//           </div>
//           </form>
//         </div>
//         {/* })} */}
//         </div>
//         )
// }

// export default TicketDetails