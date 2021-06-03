import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { withRouter, useParams } from "react-router-dom";
import "./styles.css";
import { getProductById, updateProduct } from "./Product.api";

const UpdateProduct = (props) => {
  const { id } = useParams();
  const [productData, setProductData] = useState({
    id: "",
    name: "",
    price: "",
    quantity: "",
    status: "",
  });

  useEffect(() => {
    getProductById(id)
      .then((res) => {
        if (res.status) {
          setProductData(res.data);
        } else {
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const onSubmit = () => {
    updateProduct(id, productData)
      .then((res) => {
        if (res.status) {
          props.history.push("/home");
          setProductData({
            id: "",
            name: "",
            price: "",
            quantity: "",
            status: "",
          });
        } else {
        }
      })
      .catch((err) => {
        console.log(err);
      });
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
          required
          placeholder="Price"
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
          Update Product
        </button>
      </form>
    </div>
  );
};

const mapStateToProps = (state) => ({
  user: state.appReducer.user,
  product: state.appReducer.product,
});
export default withRouter(connect(mapStateToProps)(UpdateProduct));
