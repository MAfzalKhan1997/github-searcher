import { Axios } from "../../config/axiosConfig";
import API from "../../constants/apis";
import {
  USERS,
  REPOSITORIES,
  SELECTED_ENTITY,
  INPUT_VAL,
  ERROR_MESSAGE,
  LOADING,
} from "../../constants/reduxTypes";

export const getUsers = (query, selectedEntity) => async (dispatch) => {
  dispatch({ type: LOADING, payload: true });
  try {
    const response = await Axios.get(API.USERS_ENDPOINT, {
      params: { q: encodeURIComponent(query) },
    });

    // console.log(response.data, selectedEntity);
    if (!response.data?.items?.length) {
      dispatch({ type: ERROR_MESSAGE, payload: "No user found!" });
    }
    dispatch({ type: USERS, payload: response.data?.items || [] });
    dispatch({ type: SELECTED_ENTITY, payload: selectedEntity });
  } catch (error) {
    if (error.message) {
      dispatch({ type: ERROR_MESSAGE, payload: error.message });
    }
  } finally {
    setTimeout(() => {
      dispatch({ type: LOADING, payload: false });
    }, 1000);
  }
};

export const getRepositories = (query, selectedEntity) => async (dispatch) => {
  dispatch({ type: LOADING, payload: true });
  try {
    const response = await Axios.get(API.REPOSITORIES_ENDPOINT, {
      params: { q: encodeURIComponent(query) },
    });
    // console.log(response.data, selectedEntity);
    if (!response.data?.items?.length) {
      dispatch({
        type: ERROR_MESSAGE,
        payload: "No repository found!",
      });
    }
    dispatch({
      type: REPOSITORIES,
      payload: response.data?.items || [],
    });
    dispatch({ type: SELECTED_ENTITY, payload: selectedEntity });
  } catch (error) {
    if (error.message) {
      dispatch({ type: ERROR_MESSAGE, payload: error.message });
    }
  } finally {
    setTimeout(() => {
      dispatch({ type: LOADING, payload: false });
    }, 1000);
  }
};

export const emptyArrays = () => (dispatch) => {
  dispatch({
    type: REPOSITORIES,
    payload: [],
  });
  dispatch({
    type: USERS,
    payload: [],
  });
};

export const setInputVal = (inputVal = "") => (dispatch) => {
  dispatch({
    type: INPUT_VAL,
    payload: inputVal,
  });
  if (inputVal.length < 3) {
    dispatch({
      type: ERROR_MESSAGE,
      payload: "",
    });
  }
};
