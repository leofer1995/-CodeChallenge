const initialState = {
    correct : 0,
    responses : [],
}


const rootReducer = (state = initialState, action) => {

    if(action.type === 'CORRECT'){
        return {
            ...state,
            correct : state.correct + 1
        }
    }

    if(action.type === 'NEXT'){
        return {
            ...state,
            responses: [...state.responses, action.payload],
        }
    }

    if(action.type === 'RESET'){
        return {
            correct:0,
            responses:[],
        }
    }
    return state
}

export default rootReducer