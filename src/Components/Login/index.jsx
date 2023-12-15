import React, { useEffect, useState } from "react";
import "./index.css";
import { LoginApiCall, initialFetchState, token } from "../../assets";
import { TailSpin } from "react-loader-spinner";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

const Login = (props) => {
  const [userName, setUserName] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [check, setCheck] = useState(false);
  const [fetchState, setFetchState] = useState(initialFetchState.INITIAL);

  const navigate = useNavigate();

  useEffect(() => {
    const token = Cookies.get("jwt_token");

    if (token !== undefined) {
      return navigate("/");
    }
  }, [navigate]);

  const submitLogin = async (e) => {
    e.preventDefault();
    try {
      setFetchState(initialFetchState.INPROGRESS);
      const apiResponse = await LoginApiCall(
        "https://apis.ccbp.in/login",
        userName,
        userPassword
      );
      Cookies.set("jwt_token", apiResponse.jwt_token, { expires: 30 });
      navigate("/");
    } catch (error) {
      setFetchState(initialFetchState.FAILURE);
      setErrorMsg(error.message);
    }
  };

  const changeUserName = (e) => {
    setUserName(e.target.value);
  };

  const changeUserPassword = (e) => {
    setUserPassword(e.target.value);
  };

  const clickPassword = (e) => {
    setCheck(e.target.checked);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="d-flex flex-column flex-lg-row justify-content-center justify-content-around align-items-center container-height">
          <div className="col-12 col-lg-5">
            <div className="text-center mb-5">
              <img
                src="https://res.cloudinary.com/dnmaskg3n/image/upload/v1676706562/Frame_274_m9mhjd.png"
                alt="login-page-logo"
                className="img-fluid"
              />
              <h1 className="text-warning">Tasty Kitchen</h1>
            </div>
            <div className="border border-primary rounded p-3">
              <h1 className="text-center mb-5">Login</h1>
              <form onSubmit={submitLogin}>
                <div className="mb-3">
                  <label htmlFor="userName" className="form-label">
                    User Name
                  </label>
                  <input
                    type="text"
                    id="userName"
                    placeholder="Enter User Name"
                    className="form-control"
                    value={userName}
                    onChange={changeUserName}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="userPassword" className="form-label">
                    User Password
                  </label>
                  <input
                    type={check ? "text" : "password"}
                    id="userPassword"
                    placeholder="Enter User Password"
                    className="form-control"
                    value={userPassword}
                    onChange={changeUserPassword}
                  />
                </div>
                <div className="form-check mb-3">
                  <input
                    type="checkbox"
                    id="check-input"
                    className="form-check-input"
                    value={check}
                    onClick={clickPassword}
                  />
                  <label htmlFor="check-input" className="form-check-label">
                    Show Password
                  </label>
                </div>
                <div className="d-grid mb-3">
                  <button type="submit" className="btn btn-lg btn-warning">
                    {fetchState === initialFetchState.INPROGRESS ? (
                      <div className="d-flex justify-content-center">
                        <TailSpin color="blue" height={30} width={30} />
                      </div>
                    ) : (
                      "Login"
                    )}
                  </button>
                </div>
                {fetchState === initialFetchState.FAILURE && (
                  <div className="alert alert-danger">{errorMsg}</div>
                )}
              </form>
            </div>
          </div>
          <div className="col-lg-5 d-none d-lg-block">
            <img
              src="https://res.cloudinary.com/dnmaskg3n/image/upload/v1698484158/Rectangle_1456_p9cbe1.png"
              alt="login-page-lg-banner"
              className="img-fluid rounded lg-login-banner"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
