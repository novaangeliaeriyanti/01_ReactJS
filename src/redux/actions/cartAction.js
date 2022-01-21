import * as ActionType from '../constant'

//action type

export const doGetCart = (payload) => (
    {
        type: ActionType.GET_CART,
        payload
    }
);

export const doAddQty = (payload) =>({
    type : ActionType.ADD_QTY,
    payload
})

export const doMinusQty = (payload) =>({
    type : ActionType.MINUS_QTY,
    payload
})

export const doDeleteCart = (payload) =>({
    type : ActionType.DELETE_CART,
    payload
})

export const doTotalHarga = (payload) =>({
    type : ActionType.TOTAL_HARGA,
    payload
})

export const doTotalQty = (payload) =>({
    type : ActionType.TOTAL_QTY,
    payload
})

export const doGetCategory = (payload) =>({
    type : ActionType.GET_CATEGORY,
    payload
})

export const doGetSubCategory = (payload) =>({
    type : ActionType.GET_SUBCATEGORY,
    payload
})

export const doHandleOnChange = (payload) =>({
    type : ActionType.HANDLE_ONCHANGE,
    payload
})

export const doOnSubmit = (payload) =>({
    type : ActionType.ON_SUBMIT,
    payload
})

export const doOnSelectChange = (payload) =>({
    type : ActionType.ON_SELECTCHANGE,
    payload
})

export const doOnCheckItem = (payload) =>({
    type : ActionType.ON_CHECKITEM,
    payload
})

export const doTotalHargaList = (payload) =>({
    type : ActionType.TOTAL_HARGALIST,
    payload
})

export const doTotalQtyList = (payload) =>({
    type : ActionType.TOTAL_QTYLIST,
    payload
})

export const doSetDisplay = (payload) =>({
    type : ActionType.DISPLAY,
    payload
})

export const doSetDisplayItems = (payload) =>({
    type : ActionType.DISPLAY_ITEMS,
    payload
})