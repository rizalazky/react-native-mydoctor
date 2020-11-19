import {createStore} from 'redux'

const initialState={
    isLoading:false
}

const reducer=(state=initialState,action)=>{
    switch(action.type){
        case 'SET_LOADING':
            return {
                ...state,
                isLoading:action.value
            }
    }
    return state
}

const store=createStore(reducer)

export default store