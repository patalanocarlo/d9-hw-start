const initialState = {
  jobs: [],
  favorites: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_JOBS":
      return {
        ...state,
        jobs: action.payload,
      };
    case "ADD_TO_FAVORITES":
      return {
        ...state,
        favorites: [...state.favorites, action.payload],
      };
    case "REMOVE_FROM_FAVORITES":
      return {
        ...state,
        favorites: state.favorites.filter((job) => job._id !== action.payload),
      };
    default:
      return state;
  }
};

export default rootReducer;
