export const logout = () => {
  localStorage.clear();
  window.location.pathname = "/";
};

export const checkUserDetails = (setIsLoading) => {
  const userDetails = localStorage.getItem("user");
  if (!userDetails) {
    logout();
  } else {
    setIsLoading(false);
  }
};
