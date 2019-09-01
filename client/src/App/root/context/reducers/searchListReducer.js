/* eslint-disable no-lone-blocks */
const searchListReducer = (state, action) => {
  switch (action.type) {
    case "update":
      {
        state[action.id] = { ...state[action.id], ...action.payload };
      }
      return { ...state };
    case "add":
      return action.payload;
    case "reset":
      return {};
    case "remove":
      {
        delete state[action.id];
      }
      return { ...state };
    default:
      return state;
  }
};

export default searchListReducer;
