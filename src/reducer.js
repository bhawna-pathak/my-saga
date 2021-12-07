import { USER_FETCH } from "./constants";

const initialState = {
  isLoading: false,
  isFetched: false,
  error: "",
  list: [],
};

const reducer = (state = initialState, action) => {
  console.log(action.type);
  switch (action.type) {
    case `${USER_FETCH}_PENDING`: {
      return {
        ...state,
        list: [],
        isLoading: true,
        isFetched: false,
      };
    }

    case `${USER_FETCH}_SUCCESS`: {
      return {
        ...state,
        isLoading: false,
        isFetched: true,
        list: action.payload,
      };
    }

    case `${USER_FETCH}_FAILED`: {
      return {
        ...state,
        isLoading: false,
        isFetched: false,
        list: [],
      };
    }
    default:
      return state;
  }
};

export default reducer;
