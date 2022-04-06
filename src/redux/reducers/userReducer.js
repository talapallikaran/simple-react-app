import { userAction } from "../constants/actionsConstants";

const initialState = {
  user: [],
  apiLoading: false,
  apiGetDataSuccess: false,
  apiGetDataFail: false,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default userReducer;
