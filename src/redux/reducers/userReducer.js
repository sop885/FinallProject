import produce from 'immer';

const initialState = {
    user: {
        UserId: null,
        UserName: null,
        Password: null,
        Diploma: null,
        Gender: null,
        BirthDate: null,
        PhoneNumber: null,
        AreaCode: null,
        CityCode: null,
        Mail: null,
        Status: null,
        Job: null,
        Imag: null,
        Communication: null,
        ActionsHistory: null,
        ValidatePass: null
    }

};

export default produce((state, action) => {
    switch (action.type) {
        case 'CREATE_USER':
            { state.user = (action.payLoad) }
            break;
        case 'UPDATE_USER':

            {
                state.user = action.payLoad
            }
            break;
        // case 'DELETE_USER':
        //     {
        //         state.users = state.users.filter(x => x.id != action.payLoad.id)
        //     }
        //     break;
    }

}, initialState)