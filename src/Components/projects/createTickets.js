import React, { Component, useState } from 'react'
import { createTicket } from '../config/fbConfig'
import { connect } from 'react-redux'
import { Navigate } from 'react-router-dom'
// import ( useHistory ) from 'react-router-dom'


class CreateTickets extends Component {
    state = {
        title: '',
        steps: '',
        result: '',
        assignedTo: '',
        severity: '',
        submitted: false
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit = (e) => {
        // const navigate = useNavigate();
        e.preventDefault();
        //   console.log(this.state);
        this.props.createTicket(this.state)
        this.setState({submitted:true})
        // navigate('/profile')
        
    //     window.location.href='/profile'

        // this.context.history.push('/');

        // this.form.reset()
    }
    // handleClick = (e) => {
    //     if (this.handleSubmit === true) {
    //         window.location.href='/profile'
    //     }
    // }



    render() {
        if (!this.props.auth){ return <Navigate to='/login' /> }


        if(this.state.submitted){
            return <Navigate to="/profile" />
        }
        return (
            <div className="container">
                <form ref={form => this.form = form} onSubmit={this.handleSubmit} className="add">
                    <h5 style={{ color: 'white' }} className='center'>Create a New Ticket</h5>

                    <div className="input-field">
                        <label htmlFor="title"></label>
                        <input type="text" placeholder='Ticket Name' name="title" id="title" style={{ color: 'white' }} required onChange={this.handleChange} />
                    </div>


                    <div className="file-field input-field">
                        <div className="btn #78909c blue-grey lighten-1">
                            <span style={{ color: 'black' }}>Upload</span>
                            <input type="file" multiple name="steps" id="steps" onChange={this.handleChange} />
                        </div>
                        <div className="file-path-wrapper">
                            <input className="file-path" type="text" style={{ color: 'white' }} placeholder="Steps to Reproduce Bug..." />
                        </div>
                    </div>

                    <div className="input-field">
                        <label htmlFor="title"></label>
                        <input type="text" placeholder='Expected/Actual Result' name="result" id="result" style={{ color: 'white' }} required onChange={this.handleChange} />
                    </div>



                    <label>Assign Ticket to:</label>

                    <div style={{ padding: 5 }}></div>

                    <select className="browser-default" required name="assignedTo" id="assignedTo" onChange={this.handleChange} >
                        <option value="" disabled selected ref={option => this.option = option}></option>
                        <option value="Ben">Ben</option>
                        <option value="Josh">Josh</option>
                    </select>

                    <div style={{ padding: 10 }}></div>


                    <label>Severity of Bug:</label>

                    <p>
                        <label>
                            <input type="radio" name="severity" value="Low" id="severity" required onChange={this.handleChange} />
                            <span>Low</span>
                        </label>
                    </p>
                    <p>
                        <label>
                            <input type="radio" name="severity" value="Medium" id="severity" required onChange={this.handleChange} />
                            <span>Medium</span>
                        </label>
                    </p>
                    <p>
                        <label>
                            <input type="radio" name="severity" value="High" id="severity" required onChange={this.handleChange} />
                            <span>High</span>
                        </label>
                    </p>




                    <div className="input-field right" >
                        <button className="btn #37474f blue-grey darken-3">Submit</button>
                    </div>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {

    }
}



const mapDispatchToProps = dispatch => {
    return {
        createTicket: (ticket) => dispatch(createTicket(ticket))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateTickets)
