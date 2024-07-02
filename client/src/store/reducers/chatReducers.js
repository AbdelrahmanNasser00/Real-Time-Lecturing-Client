import {
  SET_MESSAGES,
  SET_MESSAGES_LOADED,
  SET_NEW_MESSAGE,
  SET_SUBJECT_ID,
} from "../actions/chatActions";

const initialState = {
  messages: [],
  subjectId: null,
  messagesLoaded: false,
};

const chatReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_MESSAGES:
      return {
        ...state,
        messages: action.payload,
      };
    case SET_NEW_MESSAGE:
      return {
        ...state,
        messages: [...state.messages, action.payload],
      };
    case SET_SUBJECT_ID:
      return {
        ...state,
        subjectId: action.payload,
      };
    case SET_MESSAGES_LOADED:
      return {
        ...state,
        messagesLoaded: action.payload,
      };
    default:
      return state;
  }
};

export default chatReducer;
