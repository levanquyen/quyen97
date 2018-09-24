import * as Types from './../constant/ActionType';
import callApi from './../utils/apiCaller';

export const  actFetchProductRequest=()=>{
    return (dispatch)=>{
        return callApi('Product','GET',null).then(res=>{
            dispatch(actFetchProduct(res.data))
        });
    }
}
export const actFetchProduct =(product)=>{
    return{
        type:Types.FETCH_PRODUCTS,
        product
    }
}

export const actDeleteProduct=(id)=>{
    return {
        type:Types.DELTE_PRODUCT,
        id
    }
}
export const actDeleteProductRequest =(id)=>{
    return (dispatch)=>{
        return  callApi(`Product/${id}`,"DELETE",null).then(res=>{
            dispatch(actDeleteProduct(id))
        });
    }
}

export const addProduct =(product)=>{
    return{
        type:Types.ADD_PRODUCT,
        product
    }
}

export const addProductRequest =(product)=>{
    return (dispatch)=>{
        return callApi ("Product","POST",product).then(res=>{
            dispatch(addProduct(res.data))
        });
    }
}
export const actGetProductRequest =(id)=>{
    return (dispatch)=>{
        return callApi(`Product/${id}`,"GET",null).then(res=>{
            dispatch(actGetProduct(res.data))
        })
    }
}
export const actGetProduct =(product)=>{
    return {
        type:Types.EDIT_PRODUCT,
        product
    }
} 
export const actUpdateProductRequest=(product)=>{
    return dispatch=>{
        return callApi(`Product/${product.id}`,"PUT",product).then(res=>{
            dispatch(actUpdateProduct(res.data));
        })
    }
}
export const actUpdateProduct =(product)=>{
    return {
        type:Types.UPDATE_PRODUCT,
        product
    }
}