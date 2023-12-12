import Cookies from "js-cookie";
import { TailSpin } from "react-loader-spinner";

export const initialFetchState = {
  INITIAL: "initial",
  SUCCESS: "success",
  FAILURE: "failure",
  INPROGRESS: "inprogress",
};

export const initialFilterValue = [
  {
    id: "Lowest",
    value: "Lowest",
  },
  {
    id: "Highest",
    value: "Highest",
  },
];

export const token = Cookies.get("jwt_token");

export const LoginApiCall = async (path, username, password) => {
  try {
    const url = path;
    const options = {
      method: "POST",
      body: JSON.stringify({ username, password }),
    };
    const req = await fetch(url, options);
    const res = await req.json();
    if (!req.ok) {
      throw new Error(res.error_msg);
    }
    return res;
  } catch (error) {
    throw new Error(error);
  }
};

export const GetApiCall = async (path) => {
  try {
    const url = `https://apis.ccbp.in/${path}`;
    const options = {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const req = await fetch(url, options);
    const res = await req.json();
    if (!req.ok) {
      throw new Error(res.error_msg);
    }
    return res;
  } catch (error) {
    throw new Error(error);
  }
};

export const FailureViewData = (msg) => (
  <div className="text-center my-5">
    <img
      src="https://res.cloudinary.com/dnmaskg3n/image/upload/v1674886994/Group_7737_ipxqpg.png"
      alt="failure"
      className="img-fluid mb-3"
    />
    <h5>{msg}</h5>
  </div>
);

export const LoadingViewData = () => (
  <div className="d-flex justify-content-center my-5">
    <TailSpin color="blue" height={50} width={50} />
  </div>
);
