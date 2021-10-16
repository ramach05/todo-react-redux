// const initialState = {
//   counterNum: 15,
//   loading: false,
//   error: null,
// };

const initialState = {
  counterNum: 15,

  todoDataFromStore: [
    {
      id: 1,
      title: "Сделать ДЗ",
      important: false,
      done: false,
    },
    {
      id: 2,
      title: "Сходить в магазин",
      important: false,
      done: true,
    },

    {
      id: 234234,
      title: "asdasdasd",
      important: false,
      done: true,
    },
    {
      id: 2342342,
      title: "asd фыв",
      important: false,
      done: true,
    },

    {
      id: 3,
      title: "Позвонить маме",
      important: true,
      done: false,
    },
    {
      id: 4,
      title: "Погладить штаны",
      important: false,
      done: false,
    },
    {
      id: 5,
      title: "Приготовить еду",
      important: false,
      done: false,
    },
  ],
};

function reducer(state = initialState, action) {
  console.log("state :>> ", state);

  switch (action.type) {
    case "COUNTER_INC":
      return { ...state, counterNum: state.counterNum + 1 };
    case "COUNTER_DEC":
      return { ...state, counterNum: state.counterNum - 1 };
    case "COUNTER_RND":
      return { ...state, counterNum: state.counterNum + action.payload };

    case "ADD_ITEM":
      return { ...state, todoDataFromStore: action.payload };
    case "DELETE_ITEM":
      return { ...state, todoDataFromStore: action.payload };

    default:
      return state;
  }
}

export default reducer;
