export const SET_MESSAGES = "SET_MESSAGES";
export const SET_NEW_MESSAGE = "SET_NEW_MESSAGE";
export const SET_SUBJECT_ID = "SET_SUBJECT_ID";
export const SET_MESSAGES_LOADED = "SET_MESSAGES_LOADED";

export const setMessages = (messages) => ({
  type: SET_MESSAGES,
  payload: messages,
});
export const setNewMessage = (message) => ({
  type: SET_NEW_MESSAGE,
  payload: message,
});

export const setSubjectId = (id) => ({
  type: SET_SUBJECT_ID,
  payload: id,
});

export const setMessagesLoaded = (loaded) => ({
  type: SET_MESSAGES_LOADED,
  payload: loaded,
});
