import { createSlice } from '@reduxjs/toolkit'

const registrationSlice = createSlice({
    name: 'register',
    initialState: {
        username: '',
        email: '',
        password: '',
        passwordConfirmation: ''
    },
    reducers: {
        updateVal(state, { payload: {val, key}}) {
            // to access the value just assign it to a key:
            state[key] = val
        }
    }
})

export const { updateVal } = registrationSlice.actions

// Extract the action creators object and the reducer
const { actions, reducer } = registrationSlice
// Extract and export each action creator by name
export const { register } = actions
// Export the reducer, either as a default or named export
export default reducer