import { DELETE_PRODUCR_SUCCESS, FIND_PRODUCR_BY_ID_FAILURE, FIND_PRODUCR_BY_ID_REQUEST, FIND_PRODUCR_BY_ID_SUCCESS, FIND_PRODUCR_FAILURE, FIND_PRODUCR_REQUEST, FIND_PRODUCR_SUCCESS } from "./ActionType"

const initialState={
    products:[],
    product:null,
    loading:false,
    error:null,
    
}
export const customerProductReduer=(state=initialState,action)=>{

    switch(action.type){
        case FIND_PRODUCR_BY_ID_REQUEST:
        case FIND_PRODUCR_REQUEST:
            return{...state,loading:true,error:null}

        case FIND_PRODUCR_SUCCESS:
            return{...state,loading:false,error:null,products:action.payload}
        case FIND_PRODUCR_BY_ID_SUCCESS:
            return{...state,loading:false,error:null,product:action.payload}
        case DELETE_PRODUCR_SUCCESS:
            return{...state,loading:false,error:null,deleteProduct:action.payload}
        case FIND_PRODUCR_BY_ID_FAILURE:
        case FIND_PRODUCR_FAILURE:
            return{...state,loading:false,error:action.payload}

    default:
        return state;
    }
}