import {
  USERS,
  REPOSITORIES,
  SELECTED_ENTITY,
  INPUT_VAL,
  ERROR_MESSAGE,
  LOADING,
} from "../../constants/reduxTypes";

const initialState = {
  users: [],
  repositories: [],
  selectedEntity: "users",
  inputVal: "",
  loading: false,
  errorMessage: "",
};

const appReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case USERS:
      return { ...state, users: payload };
    case REPOSITORIES:
      return { ...state, repositories: payload };
    case SELECTED_ENTITY:
      return { ...state, selectedEntity: payload };
    case INPUT_VAL:
      return { ...state, inputVal: payload };
    case ERROR_MESSAGE:
      return { ...state, errorMessage: payload };
    case LOADING:
      return { ...state, loading: payload };

    default:
      return state;
  }
};

export default appReducer;
