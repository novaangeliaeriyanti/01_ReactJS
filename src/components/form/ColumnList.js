import React from "react";

export default function ColumnList(props) {
  return (
    <div>
        <th>Product Id</th>
        <th>Product Name</th>
        <th>Category</th>
        <th>Price</th>
        <th>Qty</th>
        <th>SubTotal</th>
        <th colSpan={3}>Action</th>
        <tbody>
          {(props.listItems || []).map((items) => (
            <tr key={items.prodId}>
              <td>{items.prodId}</td>
              <td>{items.name}</td>
              <td>{items.category}</td>
              <td>{new Intl.NumberFormat("ID").format(items.price)}</td>
              <td>{items.qty}</td>
              <td>{new Intl.NumberFormat("ID").format(items.subTotal)}</td>
            </tr>
          ))}
        </tbody>

      <h3>
              Total Harga : Rp.{" "}
              {new Intl.NumberFormat("ID").format(props.totalHarga)}
            </h3>
            <h3>Total Qty : {props.totalQty}</h3>
    </div>
  );
}
