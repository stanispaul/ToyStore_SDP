import { API_BASE_URL, api } from "../../config/apiconfig";
import { CREATE_PRODUCR_FAILURE, CREATE_PRODUCR_REQUEST, CREATE_PRODUCR_SUCCESS, DELETE_PRODUCR_FAILURE, DELETE_PRODUCR_REQUEST, DELETE_PRODUCR_SUCCESS, FIND_PRODUCR_BY_ID_FAILURE, FIND_PRODUCR_BY_ID_REQUEST, FIND_PRODUCR_BY_ID_SUCCESS, FIND_PRODUCR_FAILURE, FIND_PRODUCR_REQUEST, FIND_PRODUCR_SUCCESS } from "./ActionType";

export const findProducts = (reqData) => async (dispatch) => {
    dispatch({type:FIND_PRODUCR_REQUEST})
  const {
    colors,
    minPrice,
    maxPrice,
    minDiscount,
    category,
    stock,
    sort,
    pageNumber,
    pageSize,
  } = reqData;
  try {
    const{data}=await api.get(`/products?color=${colors}&minPrice=${minPrice}&maxPrice=${maxPrice}&minDiscount=${minDiscount}&category=${category}&stock=${stock}&sort=${sort}&pageNumber=${pageNumber}&pageSize=${pageSize}`)
    
    dispatch({type:FIND_PRODUCR_SUCCESS,payload:data})
  } catch (error) {
    dispatch({type:FIND_PRODUCR_FAILURE,payload:error.message})
  }
};


export const findProductsById = (reqData) => async (dispatch) => {
    dispatch({type:FIND_PRODUCR_BY_ID_REQUEST})
  const {productId} = reqData;
  try {
    const{data}= await api.get(`/products/id/${productId}`)
    console.log(data);
    dispatch({type:FIND_PRODUCR_BY_ID_SUCCESS,payload:data})
  } catch (error) {
    dispatch({type:FIND_PRODUCR_BY_ID_FAILURE,payload:error.message})
  }
};

export const createProduct=(product)=>async(dispatch)=>{
  try {
    dispatch({type:CREATE_PRODUCR_REQUEST})
    const {data}=await api.post(`/admin/products/`,product);
    console.log(data);
    dispatch({
      type:CREATE_PRODUCR_SUCCESS,
      payload:data,
    })
  } catch (error) {
    dispatch({type:CREATE_PRODUCR_FAILURE,payload:error.message})
  }
}



export const deleteProduct=(productId)=>async(dispatch)=>{
  try {
    dispatch({type:DELETE_PRODUCR_REQUEST})
    

    const {data}=await api.delete(`${API_BASE_URL}/admin/products/${productId}/delete`);
    
    dispatch({
      type:DELETE_PRODUCR_SUCCESS,
      payload:productId,
    })
  } catch (error) {
    dispatch({type:DELETE_PRODUCR_FAILURE,payload:error.message})
  }
}