import { subjectsActions } from "../actions/subjectsActions";
const initState = {
  subjects: [],
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case subjectsActions.SET_SUBJECTS:
      return {
        ...state,
        subjects: action.subjects,
      };

    default:
      return state;
  }
};

export default reducer;
