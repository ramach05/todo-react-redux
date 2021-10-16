export const inc = () => ({ type: "COUNTER_INC" });

export const dec = () => ({ type: "COUNTER_DEC" });

export const rnd = () => ({
  type: "COUNTER_RND",
  payload: Math.floor(Math.random() * 100),
});

export const addItemToStore = (payload) => {
  return {
    type: "ADD_ITEM",
    payload,
  };
};

export const deleteItemFromStore = (payload) => {
  return {
    type: "DELETE_ITEM",
    payload,
  };
};
