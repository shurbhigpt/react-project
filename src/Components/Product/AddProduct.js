import React, { useState } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { addProduct } from "./Product.api";
import "./styles.css";
const AddProduct = (props) => {
  const [productData, setProductData] = useState({
    name: "",
    price: "",
    quantity: "",
    status: "",
  });

  const onSubmit = () => {
    if (productData.name && productData.price) {
    addProduct(productData)
      .then((res) => {
        if (res.status) {
          props.history.push("/home");
          setProductData({ name: "", price: "", quantity: "", status: "" });
        } else {
        }
      })
      .catch((err) => {
        console.log(err);
      });
    }
    else {
      alert("Name and Price Required")
    }

  };

  return (
    <div className="form-div">
      <form>
        <input
          className="input"
          type="text"
          name="name"
          placeholder="Name"
          required
          value={productData.name}
          onChange={(e) => {
            setProductData({ ...productData, name: e.target.value });
          }}
        />
        <input
          className="input"
          type="number"
          name="price"
          placeholder="Price"
          required
          value={productData.price}
          onChange={(e) => {
            setProductData({ ...productData, price: e.target.value });
          }}
        />
        <input
          className="input"
          type="number"
          name="quantity"
          placeholder="Quantity"
          value={productData.quantity}
          onChange={(e) => {
            setProductData({ ...productData, quantity: e.target.value });
          }}
        />
        <input
          className="input"
          type="text"
          name="status"
          placeholder="Status"
          value={productData.status}
          onChange={(e) => {
            setProductData({ ...productData, status: e.target.value });
          }}
        />
        <button className="button" type="button" onClick={() => onSubmit()}>
          Add Product
        </button>
      </form>
    </div>
  );
};

const mapStateToProps = (state) => ({
  user: state.appReducer.user,
  product: state.appReducer.product,
});
export default withRouter(connect(mapStateToProps)(AddProduct));
