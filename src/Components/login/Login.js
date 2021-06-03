import React from "react";
import { useEffect, useState } from "react";
import "./login.css";
import { withRouter } from "react-router-dom";
import { login, setUser } from "../containers/app/actions";
import { connect } from "react-redux";

const Login = (props) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  useEffect(() => {
    if (props.user) {
      props.history.push("/home");
    }
  },[props.user]);
  const onSubmit = (e) => {
    e.preventDefault();
    login(formData)
      .then((res) => {
        if (res.status) {
          localStorage.setItem("user", JSON.stringify(res.data));
          localStorage.setItem("token", JSON.stringify(res.token));
          props.setUser(res.data);
          props.history.push("/home");
        } else {
          console.log(res.message);
        }
      })
      .catch((err) => {
      });
  };
  return (
    <div className="login-div">
      <div className="logo-div"></div>
      <div>
        <form>
          <input
            className="input"
            type="email"
            placeholder="email..."
            name="email"
            required
            onChange={(e) => {
              setFormData({ ...formData, email: e.target.value });
            }}
            value={formData.name}
          />
          <input
            className="input"
            type="password"
            placeholder="password..."
            name="pwd"
            required
            onChange={(e) => {
              setFormData({ ...formData, password: e.target.value });
            }}
            value={formData.password}
          />
          <button className="button" type="button" onClick={(e) => onSubmit(e)}>
            Log in
          </button>
        </form>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => ({
  user: state.appReducer.user,
});
export default withRouter(connect(mapStateToProps, { setUser })(Login));
