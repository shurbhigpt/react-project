import { Router, Route, Switch } from "react-router-dom";
import Home from "./Components/Home/Home";
import NoMatch from "./Components/404Page/404Page"
import { setUser } from "./Components/containers/app/actions";
import { connect } from "react-redux";
import { useEffect } from "react";
import axios from "axios";
import { createBrowserHistory } from "history";
import AddUserForm from "./Components/Product/AddProduct";
import EditUserForm from "./Components/Product/UpdateProduct";
import NavBar from "./Components/Home/Navbar";
import Login from './Components/login/Login'


const backendUrl = "http://localhost:5000"

axios.interceptors.request.use(async (config) => {
  config.url = backendUrl + config.url
  config.headers= {
    ...config.headers,
  }
  const token = JSON.parse(localStorage.getItem("token"));

  if (token) {
    config.headers.Authorization = 'Bearer ' + token;
  }

  return config
});

const hist = createBrowserHistory();

const App = (props) => {
  useEffect(() => {
    if (localStorage.user) {
      var userData= JSON.parse(localStorage.getItem("user"));
        if(userData && userData !== null && userData !== undefined) {
          props.setUser(userData);
        }
    } else {
      console.log("err")
    }
  }, []);
  return (
    <div >
      <div className="container">
        <NavBar/>
            <Router history={hist}>
            <Switch>
                <Route exact path="/" component={Login} />
                <Route exact path="/home" component={Home} />
                <Route exact path="/product/add" component={AddUserForm} />
                <Route exact path="/updateProduct/:id" component={EditUserForm} />
                <Route path="*" component={NoMatch} />
            </Switch>
            </Router>
        </div>
    </div>
  );
}

export default connect(null,{setUser})(App);