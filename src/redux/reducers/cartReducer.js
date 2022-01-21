import {
  ADD_QTY,
  DELETE_CART,
  GET_CART,
  MINUS_QTY,
  TOTAL_HARGA,
  TOTAL_QTY,
  GET_CATEGORY,
  GET_SUBCATEGORY,
  HANDLE_ONCHANGE,
  ON_SUBMIT,
  ON_SELECTCHANGE,
  ON_CHECKITEM,
  TOTAL_HARGALIST,
  TOTAL_QTYLIST,
  DISPLAY,
  DISPLAY_ITEMS,
} from "../constant";

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

const category = ["Fashion", "Komputer", "Handphone"];

const listOfSubCategory = [
  { subname: "Baju Muslim", category: "Fashion" },
  { subname: "Kaos", category: "Fashion" },
  { subname: "Tablet", category: "Handphone" },
  { subname: "Casing", category: "Handphone" },
  { subname: "Laptop", category: "Komputer" },
  { subname: "Memory DDR3", category: "Komputer" },
];

const INIT_STATE = {
  carts: [...listOfCart],
  category: [...category],
  subCategory: [...listOfSubCategory],
  totalHarga: 0,
  totalQty: 0,
  productChecked: [],
  values: {
    prod_name: undefined,
    prod_price: 0,
    prod_qty: 0,
    category: undefined,
    subCategory: undefined,
  },
  totalHargaList: 0,
  totalQtyList: 0,
  display: false,
  displayItems: false,
};

//reducer (acc,el)
// table carts  = state.carts
const cartReducer = (state = INIT_STATE, action) => {
  // select * from carts
  switch (action.type) {
    case GET_CART:
      return { ...state };
    case GET_CATEGORY:
      return { ...state };
    case GET_SUBCATEGORY:
      return { ...state };
    case ADD_QTY:
      return applyAddQty(state, action);
    case MINUS_QTY:
      return applyMinusQty(state, action);
    case DELETE_CART:
      return applyDeleteCart(state, action);
    // case TOTAL_HARGA:
    //   return applyTotalHarga(state, action);
    // case TOTAL_QTY:
    //   return applyTotalQty(state, action);
    case HANDLE_ONCHANGE:
      return applyHandleOnChange(state, action);
    case ON_SUBMIT:
      return applyOnSubmit(state, action);
    case ON_SELECTCHANGE:
      return applyOnSelectChange(state, action);
    case ON_CHECKITEM:
      return applyOnCheckItem(state, action);
    case TOTAL_HARGALIST:
      return applyTotalHargaList(state, action);
    case TOTAL_QTYLIST:
      return applyTotalQtyList(state, action);
    case DISPLAY:
      return applySetDisplay(state, action);
    case DISPLAY_ITEMS:
      return applySetDisplayItems(state, action);
    default:
      return state;
  }
};

//action reducer
const applyAddQty = (state, action) => {
  const { payload } = action;
  return {
    ...state,
    carts: [
      ...state.carts.map((cart) => {
        if (payload.id === cart.prodId) {
          cart.qty = cart.qty + 1;
          cart.subTotal = cart.price * cart.qty;
          return cart;
        } else {
          return cart;
        }
      }),
    ],
    totalHarga: state.carts.reduce((sum, el) => sum + el.subTotal, 0),
    totalQty: state.carts.reduce((sum, el) => sum + el.qty, 0)
  };
};

const applyMinusQty = (state, action) => {
  const { payload } = action;
  return {
    ...state,
    carts: [
      ...state.carts.map((cart) => {
        if (payload.id === cart.prodId) {
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
    ],
    totalHarga: state.carts.reduce((sum, el) => sum + el.subTotal, 0),
    totalQty: state.carts.reduce((sum, el) => sum + el.qty, 0)
  };
};

const applyDeleteCart = (state, action) => {
  const { payload } = action;
  return {
    ...state,
    carts: [...state.carts.filter((el) => el.prodId !== payload.id)],
  };
};

// const applyTotalHarga = (state, action) => {
//   return {
//     ...state,
//     totalHarga: state.carts.reduce((sum, el) => sum + el.subTotal, 0),
//   };
// };

// const applyTotalQty = (state, action) => {
//   return {
//     ...state,
//     totalQty: state.carts.reduce((sum, el) => sum + el.qty, 0),
//   };
// };

const applyHandleOnChange = (state, action) => {
  const { payload } = action;
  return {
    ...state,
    values: { ...state.values, [payload.name]: payload.event.target.value },
  };
};

const applyOnSubmit = (state, action) => {
  return {
    ...state,
    carts: [
      ...state.carts,
      {
        prodId: Math.round(Math.random() * 10 + 3),
        name: state.values.prod_name,
        price: parseInt(state.values.prod_price),
        qty: parseInt(state.values.prod_qty),
        subTotal: state.values.prod_price * state.values.prod_qty,
        category: state.values.category,
      },
    ],
  };
};

const applyOnSelectChange = (state, action) => {
  const { payload } = action;

  const value =
    payload.e.target.selectedIndex !== 0
      ? payload.e.target.options[payload.e.target.selectedIndex].value
      : null;

  const categoryFilter = [
    ...state.subCategory.filter((v) => v.category === value),
  ];
  return {
    ...state,
    values: { ...state.values, category: value },
    subCategory: categoryFilter,
  };
};

const applyOnCheckItem = (state, action) => {
  const { payload } = action;
  return {
    ...state,
    productChecked: [
      ...state.productChecked,
      {
        prodId: payload.item.prodId,
        name: payload.item.name,
        price: payload.item.price,
        qty: payload.item.qty,
        subTotal: payload.item.price * payload.item.qty,
        category: payload.item.category,
        subCategory: payload.item.subCategory,
      },
    ],
  };
};

const applyTotalHargaList = (state, action) => {
  return {
    ...state,
    totalHargaList: state.productChecked.reduce(
      (sum, el) => sum + el.subTotal,
      0
    ),
  };
};

const applyTotalQtyList = (state, action) => {
  return {
    ...state,
    totalQtyList: state.productChecked.reduce((sum, el) => sum + el.qty, 0),
  };
};

const applySetDisplay = (state, action) => {
  const { payload } = action;
  return {
    ...state,
    display: payload
  };
};

const applySetDisplayItems = (state, action) => {
  const { payload } = action;
  return {
    ...state,
    displayItems: payload
  };
};

export default cartReducer;
