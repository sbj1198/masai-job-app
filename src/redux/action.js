import * as types from "./actionTypes";
import axios from "axios";

export const postJobs = (payload) => (dispatch) => {
  dispatch({ type: types.JOB_POST_REQUEST });
  return axios
    .post("https://masaijobapp-xbow.onrender.com/jobs", payload)
    .then((res) => {
      dispatch({ type: types.JOB_POST_SUCCESS });
    })
    .catch((err) => {
      dispatch({ type: types.JOB_POST_FAILURE, payload: err });
    });
};

export const getJobs = () => (dispatch) => {
  dispatch({ type: types.GET_JOB_REQUEST });
  return axios
    .get("https://masaijobapp-xbow.onrender.com/jobs")
    .then((res) => {
      dispatch({ type: types.GET_JOB_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: types.GET_JOB_FAILURE, payload: err });
    });
};
