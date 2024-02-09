import { socketActions } from "../actions/socketActions";

const initState = {
  socketOpen: false,
};

const socketReducer = (state = initState, action) => {
  switch (action.type) {
    case socketActions.SOCKET_OPEN:
      return {
        ...state,
        socketOpen: true,
      };
    case socketActions.SOCKET_CLOSE:
      return {
        ...state,
        socketOpen: false,
      };
    default:
      return state;
  }
};

export default socketReducer;
