import produce from 'immer';

const initialState = {
    Requests: [],

};

export default produce((state, action) => {
    switch (action.type) {
        case 'SET_REQUESTS':
            { state.Requests = action.payLoad }
            break;
        case 'ALL_REQUESTS':
            { state.Requests = action.payLoad }
            break;
        case 'CONFIRM_REQUEST':
            {return { 
                ...state, 
                Requests: state.Requests.map(
                    (req, i) => req._id ===action.payLoad._id ? {...req, status:true}: req
                                            
                )
             }
            
            }
            break;
        case 'DELETE_REQUEST':
            {
                state.Requests = state.Requests.filter(x => x._id != action.payLoad._id)
            }
            break;
    }

}, initialState)