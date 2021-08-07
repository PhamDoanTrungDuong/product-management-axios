import * as types from "./../constants/ActionTypes"
import callApi from "./../utils//apiCaller"
//=====FETCH
export const actFetchProductRequest = () => {
    return (dispatch) => {
        return callApi('products', 'GET', null).then(res => {
                dispatch(actFetchProduct(res.data))
              // console.log(res)
        });
    }
}

export const actFetchProduct = (products) => {
    return {
        type: types.FETCH_PRODUCTS,
        products
    }
}
//====ADD
export const actAddProductRequest = (product) => {
    return (dispatch) => {
        return callApi('products', 'POST', product).then(res => {
                dispatch(actDeleteProduct(res.data))
        });
    }
}

export const actAddProduct = (product) => {
    return {
        type: types.ADD_PRODUCT,
        product
    }
}

//===DELETE
export const actDeleteProductRequest = (id) => {
    return (dispatch) => {
        return callApi(`product/${id}`, 'DELETE', null).then(res => {
                dispatch(actDeleteProduct(id))
        });
    }
}

export const actDeleteProduct = (id) => {
    return {
        type: types.DELETE_PRODUCT,
        id
    }
}

//===UPDATE
export const actUpdateProductRequest = (product) => {
    return (dispatch) => {
        return callApi(`products/${product.id}`, 'PUT', product).then(res => {
                dispatch(actUpdateProduct(product))
        });
    }
}

export const actUpdateProduct = (product) => {
    return {
        type: types.UPDATE_PRODUCT,
        product
    }
}

export const actGetProductRequest = (id) => {
    return (dispatch) => {
        return callApi(`products/${id}`, 'GET', null).then(res => {
                dispatch(actGetProduct(res.data))
        });
    }
}

export const actGetProduct = (product) => {
    return{
        type: types.EDIT_PRODUCT,
        product
    }
}