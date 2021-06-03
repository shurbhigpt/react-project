import React, { useState, useEffect } from "react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { getProduct } from "../containers/app/actions";
import "./home.css";
import { Trash, PencilSquare } from "react-bootstrap-icons";
import { deleteProduct } from "../Product/Product.api";
const Home = (props) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    props.getProduct();
  }, []);
  useEffect(() => {
    if (props.product && props.product.length > 0) {
      setData(props.product);
    }
  }, [props.product]);
  const handleUpdate = (value) => {
    props.history.push(`/updateProduct/${value}`);
  };
  const handleDelete = (value) => {
    deleteProduct(value.id)
      .then((res) => {
        props.getProduct(props.user.id);
      })
      .catch((err) => {
        console.log(err)
      });
  };
  return (
    <div>
      <div className="button-div">
        <Link to="/product/add" className="btn btn-primary ml-auto">
          Add Product
        </Link>
      </div>
      <div className="table-div">
        {data.length ? (
          <table responsive="md">
            <thead>
              <tr>
                <th>Name</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {data.map((each,i) => (
                <tr key={i}>
                  <td data-label="Name">{each.name}</td>
                  <td data-label="Email">{each.price}</td>
                  <td data-label="Gender">{each.quantity}</td>
                  <td data-label="Status">{each.status}</td>
                  <td data-label="actions">
                    <span>
                      <button
                        type="button"
                        data={each}
                        onClick={() => handleUpdate(each._id)}
                      >
                        <PencilSquare />
                      </button>
                    </span>
                    <span onClick={() => handleDelete({ id: each._id })}>
                      <Trash />
                    </span>
                  </td>
                  </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <div className="loader"></div>
        )}
      </div>
    </div>
  );
};
const mapStateToProps = (state) => ({
  user: state.appReducer.user,
  product: state.appReducer.product,
});
export default withRouter(connect(mapStateToProps,{getProduct})(Home));
