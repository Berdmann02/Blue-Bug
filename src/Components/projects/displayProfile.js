import React, { Component } from 'react'
import { connect } from 'react-redux'
import ProfilePage from './profilePage';
import { Navigate } from 'react-router-dom'


class displayProfile extends Component {
  render() {

    const { tickets, auth } = this.props;

    if (!this.props.auth){ return <Navigate to='/login' /> }


    return (
      <div>
          <div>
              <div className="col s12 m6 l3">
                <ProfilePage tickets={tickets} />
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

export default connect(mapStateToProps)(displayProfile)