import React from "react";
import { withRouter } from "react-router";

const NoMatch = ({ history }) => {
  return (
    <div>
      <h1>404Page</h1>
      <p>
        Redirect to
        <span
          onClick={() => history.push("/home")}
          style={{
            color: "dodgerblue",
            paddingLeft: "10px",
            cursor: "pointer",
          }}
        >
          Home Page
        </span>
      </p>
    </div>
  );
};

export default withRouter(NoMatch);
