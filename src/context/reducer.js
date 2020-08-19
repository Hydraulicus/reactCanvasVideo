
const reducer = (state, action) => {
  const { type, payload, } = action;
  switch (type) {
    case 'SET_CTX':
      return { ...state, ctx: payload, };

    case 'SET_REFS':
      return { ...state, ...payload, };

    case 'PLAY':
      return { ...state, play: payload, };

    default:
      return state;
  }
};

export default reducer;

