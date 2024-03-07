export const reducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE_LOGIN":
      return {
        ...state,
        loginModal: !state.loginModal,
      };
    default:
      return state;
  }
};
