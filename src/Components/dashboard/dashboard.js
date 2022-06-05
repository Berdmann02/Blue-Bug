import React, { Component, useState } from 'react'
import ViewTickets from '../projects/viewTickets'
import { connect } from 'react-redux'
import { Navigate } from 'react-router-dom';
import { createUser, auth } from '../config/fbConfig'
import { signIn } from '../../Store/actions/authActions'
import { onAuthStateChanged } from 'firebase/auth'


class Dashboard extends Component {
  render() {

    const { tickets } = this.props;


    if (!this.props.auth){ return <Navigate to='/login' /> }


    return (
      <div className="dashboard container">
          <div className="container">
              <div className="col s12 m6 l3">
                <ViewTickets tickets={tickets}/>
              </div>
            <div>
          </div>
        </div>
      </div>
    )
  }
}


const mapStateToProps = (state) => {
  return {
    tickets: state.ticket.tickets
  }
}

export default connect(mapStateToProps)(Dashboard)