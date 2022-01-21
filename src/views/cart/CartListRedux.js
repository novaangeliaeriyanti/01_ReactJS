import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  doGetCart,
  doAddQty,
  doMinusQty,
  doDeleteCart,
  doTotalHarga,
  doTotalQty,
  doHandleOnChange,
  doOnSubmit,
  doOnSelectChange,
  doOnCheckItem,
  doTotalHargaList,
  doTotalQtyList,
  doSetDisplay,
  doSetDisplayItems,
} from "../../redux/actions/cartAction";
import CartForm from "./CartForm";
import ListCheckout from "./ListCheckout";
import TableList from "./TableList";

export default function CartListRedux() {
  const dispatch = useDispatch();
  const carts = useSelector((state) => state.carts);
  const category = useSelector((state) => state.category);
  const subCategory = useSelector((state) => state.subCategory);
  let totalHarga = useSelector((state) => state.totalHarga);
  let totalQty = useSelector((state) => state.totalQty);
  let totalHargaList = useSelector((state) => state.totalHargaList);
  let totalQtyList = useSelector((state) => state.totalQtyList);
  let productCheck = useSelector((state) => state.productChecked);
  const display = useSelector((state) => state.display);
  const displayItems = useSelector((state) => state.displayItems);

  // useEffect(() => {
  //   dispatch(doTotalHarga());
  //   dispatch(doTotalQty());
  // }, [carts]);

  // useEffect(() => {
  //   dispatch(doTotalHargaList());
  //   dispatch(doTotalQtyList());
  // }, [productCheck]);

  const addQty = (id) => {
    const payload = { id };
    dispatch(doAddQty(payload));
  };

  const minusQty = (id) => {
    const payload = { id };
    dispatch(doMinusQty(payload));
  };

  const deleteCart = (id) => {
    const payload = { id };
    dispatch(doDeleteCart(payload));
  };

  const handleOnChange = (name) => (event) => {
    console.log(event.target.value);
    const payload = { name, event };
    dispatch(doHandleOnChange(payload));
  };

  const onSelectChange = (e) => {
    const payload = {e};
    dispatch(doOnSelectChange(payload));
  };

  const onCheckItem = (item) => (event) => {
    let status = event.target.checked;
    const dataCheck = [status, item];
    const hasil = productCheck.filter((el) => el.prodId === item.prodId);
    console.log("value of checkbox : ", status);
    console.log(hasil.length);

    const index = productCheck.indexOf(item.prodId);

    if (dataCheck[0] === true && hasil.length === 0) {
      const payload = { item };
      dispatch(doOnCheckItem(payload));
    } else {
      productCheck.splice(index, 1);
    }
     dispatch(doSetDisplay(false));
  };

  const onSubmit = (event) => {
    event.preventDefault();
    const payload = { event };
    dispatch(doOnSubmit(payload));
    dispatch(doSetDisplay(false));
  };

  return (
    <div>
      <h2>List Of Cart with Redux</h2>
      <button onClick={() => dispatch(doSetDisplay(true))}>Add Product</button>
      {display ? (
        <CartForm
          onSubmit={onSubmit}
          handleOnChange={handleOnChange}
          onSelectChange={onSelectChange}
          category={category}
          subCategory={subCategory}
          setDisplay={display}
        />
      ) : (
        <>
          <TableList
            listItems={carts}
            onCheckItem={onCheckItem}
            productCheck={productCheck}
            addQty={addQty}
            minusQty={minusQty}
            deleteCart={deleteCart}
            totalHarga={totalHarga}
            totalQty={totalQty}
          />
          <button onClick={() => dispatch(doSetDisplayItems(true))}>
            Checkout
          </button>
          {displayItems ? (
            // <TableList
            //   listItems={productCheck}
            //   onCheckItem={onCheckItem}
            //   productCheck={productCheck}
            //   addQty={addQty}
            //   minusQty={minusQty}
            //   deleteCart={deleteCart}
            //   totalHarga={totalHargaList}
            //   totalQty={totalQtyList}
            // />
            <ListCheckout
              listItems={productCheck}
              totalHarga={totalHargaList}
              totalQty={totalQtyList}
            />
          ) : null}
        </>
      )}
    </div>
  );
}
