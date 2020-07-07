import { actions } from '../actions';

const reducer = (state, action) => {
  switch (action.type) {
    case actions.setFavorite:
      return {
        ...state,
        mylist: state.mylist.filter((item) => item.id === action.payload.id).length === 0 ?
          [...state.mylist, action.payload] :
          [...state.mylist],
      };

    case actions.deleteFavorite:
      return {
        ...state,
        mylist: state.mylist.filter((items) => items.id !== action.payload),
      };

    case actions.loginRequest:
      return {
        ...state,
        user: action.payload,
      };

    case actions.logoutRequest:
      return {
        ...state,
        user: action.payload,
      };

    case actions.registerRequest:
      return {
        ...state,
        user: action.payload,
      };

    case actions.getVideoSource:
      return {
        ...state,
        playing: state.trends.concat(state.originals).find((item) => item.id === Number(action.payload)) || [],
      };

    default:
      return state;
  }
};

export default reducer;
