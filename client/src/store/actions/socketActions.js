export const socketActions = {
  SOCKET_OPEN: "SOCKET.OPEN",
  SOCKET_CLOSE: "SOCKET.CLOSE",
};

export const socketOpen = () => {
  return {
    type: socketActions.SOCKET_OPEN,
  };
};

export const socketClose = () => {
  return {
    type: socketActions.SOCKET_CLOSE,
  };
};
