import React, { useState, useEffect } from "react";
import CartForm from "./CartForm";
import ListCheckout from "./ListCheckout";
import TableList from "./TableList";

export default function CartList() {
  const listOfCart = [
    {
      prodId: 1,
      name: "Dell",
      price: 1500,
      qty: 1,
      subTotal: 1500,
      category: "Komputer",
      subCategory: "",
    },
    {
      prodId: 2,
      name: "T-Shirt",
      price: 500,
      qty: 1,
      subTotal: 500,
      category: "Fashion",
      subCategory: "",
    },
    {
      prodId: 3,
      name: "Samsung",
      price: 3500,
      qty: 1,
      subTotal: 3500,
      category: "Handphone",
      subCategory: "",
    },
  ];

  const listOfSubCategory = [
    { subname: "Baju Muslim", category: "Fashion" },
    { subname: "Kaos", category: "Fashion" },
    { subname: "Tablet", category: "Handphone" },
    { subname: "Casing", category: "Handphone" },
    { subname: "Laptop", category: "Komputer" },
    { subname: "Memory DDR3", category: "Komputer" },
  ];

  const listItems = [];
  const [category] = useState(["Fashion", "Komputer", "Handphone"]);
  const [subCategory, setSubCategory] = useState([]);
  const [carts, setCarts] = useState(listOfCart);
  const [totalHarga, setTotalHarga] = useState(0);
  const [totalQty, setTotalQty] = useState(0);
  const [display, setDisplay] = useState(false);
  const [displayItems, setDisplayItems] = useState(false);
  const [values, setValues] = useState({
    prod_name: undefined,
    prod_price: 0,
    prod_qty: 0,
    category: undefined,
    subCategory: undefined,
  });
  const [productCheck, setProductCheck] = useState(listItems);
  const [totalHargaList, setTotalHargaList] = useState(0);
  const [totalQtyList, setTotalQtyList] = useState(0);

  //replace phase componentDidMount, agar di excute 1 kali
  useEffect(() => {
    const totalSubTotal = carts.reduce((sum, el) => sum + el.subTotal, 0);
    setTotalHarga(totalSubTotal);

    const totalSubQty = carts.reduce((sum, el) => sum + el.qty, 0);
    setTotalQty(totalSubQty);
  }, []);

  useEffect(() => {
    const totalSubTotal = carts.reduce((sum, el) => sum + el.subTotal, 0);
    setTotalHarga(totalSubTotal);

    const totalSubQty = carts.reduce((sum, el) => sum + el.qty, 0);
    setTotalQty(totalSubQty);
  }, [carts]);

  useEffect(() => {
    const totalSubTotalList = productCheck.reduce(
      (sum, el) => sum + el.subTotal,
      0
    );
    setTotalHargaList(totalSubTotalList);

    const totalSubQtyList = productCheck.reduce((sum, el) => sum + el.qty, 0);
    setTotalQtyList(totalSubQtyList);
  }, []);

  useEffect(() => {
    const totalSubTotalList = productCheck.reduce(
      (sum, el) => sum + el.subTotal,
      0
    );
    setTotalHargaList(totalSubTotalList);

    const totalSubQtyList = productCheck.reduce((sum, el) => sum + el.qty, 0);
    setTotalQtyList(totalSubQtyList);
  }, [productCheck]);

  const addQty = (id) => {
    setCarts([
      ...carts.map((cart) => {
        if (id === cart.prodId) {
          cart.qty = cart.qty + 1;
          cart.subTotal = cart.price * cart.qty;
          return cart;
        } else {
          return cart;
        }
      }),
    ]);
  };

  const minusQty = (id) => {
    setCarts([
      ...carts.map((cart) => {
        if (id === cart.prodId) {
          if (cart.qty === 1) {
            cart.qty = 1;
          } else {
            cart.qty = cart.qty - 1;
          }

          cart.subTotal = cart.price * cart.qty;
          return cart;
        } else {
          return cart;
        }
      }),
    ]);
  };

  const deleteCart = (id) => {
    setCarts([...carts.filter((el) => el.prodId !== id)]);
  };

  const handleOnChange = (name) => (event) => {
    console.log(event.target.value);
    setValues({ ...values, [name]: event.target.value });
  };

  const onSelectChange = (e) => {
    const value =
      e.target.selectedIndex !== 0
        ? e.target.options[e.target.selectedIndex].value
        : null;
    setValues({ ...values, category: value });
    const categoryFilter = [
      ...listOfSubCategory.filter((v) => v.category === value),
    ];
    setSubCategory(categoryFilter);
  };

  const onCheckItem = (item) => (event) => {
    let status = event.target.checked;
    console.log("value of checkbox : ", status);
    console.log(item);

    let tampung = [status, item];
    console.log(tampung);
    productCheck.some(productCheck)
    if (tampung[0] === true) {
      setProductCheck([
        ...productCheck,
        {
          prodId: item.prodId,
          name: item.name,
          price: item.price,
          qty: item.qty,
          subTotal: item.price * item.qty,
          category: item.category,
          subCategory: item.subCategory,
        },
      ]);
    } else {
      setProductCheck([...productCheck]);
    }

    setDisplay(false);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    setCarts([
      ...carts,
      {
        prodId: Math.round(Math.random() * 10),
        name: values.prod_name,
        price: values.prod_price,
        qty: values.prod_qty,
        subTotal: values.prod_price * values.prod_qty,
        category: values.category,
        subCategory: values.subCategory,
      },
    ]);

    setDisplay(false);
  };

  return (
    <div>
      <h2>List Of Cart</h2>
      <button onClick={() => setDisplay(true)}>Add Product</button>
      {display ? (
        <CartForm
          onSubmit={onSubmit}
          handleOnChange={handleOnChange}
          onSelectChange={onSelectChange}
          category={category}
          subCategory={subCategory}
          setDisplay={setDisplay}
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
          <button onClick={() => setDisplayItems(true)}>Checkout</button>
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
