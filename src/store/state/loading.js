const START = 'loading/START';
const STOP = 'loading/STOP';

export const startLoading = () => ({
    type: START
})

export const stopLoading = () => ({
    type: STOP
})

const initialState = {
    isLoading = false
}

export default (state = initialState, action) => {
    switch (action.type) {
        case START:
            return {
                ...state,
                isLoading: true
            }
        case STOP:
            return {
                ...state,
                isLoading: false
            }
        default:
            return state
    }
}