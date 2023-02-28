import * as types from "./actionTypes";

const initialState = {
  isLoading: false,
  isError: false,
  postStatus: false,
  errorMessage: "",
  jobs: [],
};

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.JOB_POST_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case types.JOB_POST_SUCCESS:
      return {
        ...state,
        isLoading: false,
        postStatus: true,
      };
    case types.JOB_POST_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
        errorMessage: payload,
      };
    case types.GET_JOB_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case types.GET_JOB_SUCCESS:
      return {
        ...state,
        isLoading: false,
        jobs: payload,
      };
    case types.GET_JOB_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
        errorMessage: payload,
        jobs: [],
      };
    default:
      return state;
  }
};
