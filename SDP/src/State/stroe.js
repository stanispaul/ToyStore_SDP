import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import { authReducer } from "./Auth/Reducer";
import { customerProductReduer } from "./product/Reducer";
import { cartReducer } from "./Cart/Reducer";
import { orderReducer } from "./Order/Reducer";
import adminOrderReducer from "./Admin/Order/Reducer";

const rootReducers=combineReducers({
    auth:authReducer,
    products:customerProductReduer,
    cart:cartReducer,
    order:orderReducer,
    adminOrder:adminOrderReducer
})


export const store = legacy_createStore(rootReducers,applyMiddleware(thunk))