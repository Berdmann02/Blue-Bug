const initState = {
  tickets: [],
  users: [],
  submitted: false
}


const ticketReducer = (state = initState, action) => {
  switch (action.type) {
    case 'CREATE_TICKET':
      return{
        ...state, 
        tickets: action.payload,
        submitted: true
      }
      return state;
    // case 'CREATE_TICKET_ERROR':
    //   console.log('create ticket error', action.err);
    //   return state;
    default: 
      return state;
      case 'CREATE_USER':
    return{
      ...state, 
      users: action.payload,
      submitted: true
    }
  }
};

export default ticketReducer;