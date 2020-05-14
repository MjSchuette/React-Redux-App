const initialState = {
    joke: '',
    isLoading: false
}

export const reducer = (state = initialState, action) => {
    switch(action.type) {
            case "FETCH_QUOTE_START":
                return{
                    ...state,
                    isLoading:true
                };
            case "FETCH_QUOTE_SUCCESS":
                return{
                    ...state,
                    isLoading: false,
                    joke: action.payload
                }
            default:
                return state;
    }
};