export const GET_USER = 'get_user'
const SET_USER = 'set_user'

export const getUser = () =>({
    type: GET_USER
})
export const setUser = (user) =>({
    type: SET_USER,
    user //user: user
})

const initialState = {
    user: undefined
}

export default (state = initialState, action) =>{
    switch (action.type) {
        case SET_USER:
            const { user } = action
            return { ...state, user } // user: user
        default:
            return state;
    }
}