import { createReducer, combineReducers } from "@reduxjs/toolkit";
import { setConfig, setPage, setQuestions, setUserScore, setUserAnswers} from "../actions";

const CONFIG_INITIAL_STATE = {
  pages: [],
  limit: 0,
};

const configReducer = createReducer(CONFIG_INITIAL_STATE, (builder) => {
  builder.addCase(setConfig, (state, action) => {
    return {
      ...state,
      pages: action?.payload?.pages,
      limit: action?.payload?.limit,
    };
  });
});

const SELECTED_PAGE_INITIAL_STATE = {
  selectedPage: ""
};

const selectedPageReducer = createReducer(SELECTED_PAGE_INITIAL_STATE, (builder) => {
  builder.addCase(setPage, (state, action) => {
    return {
      ...state,
      selectedPage: action?.payload,
    };
  });
});

const QUESTION_INITIAL_STATE = {
  selectedPageQuestions: [],
};

const questionsReducer = createReducer(QUESTION_INITIAL_STATE, (builder) => {
  builder.addCase(setQuestions, (state, action) => {
    return {
      ...state,
      selectedPageQuestions: action?.payload,
    };
  });
});

const SCORE_INITIAL_STATE = {
  score: 0,
};

const scoreReducer = createReducer(SCORE_INITIAL_STATE, (builder) => {
  builder.addCase(setUserScore, (state, action) => {
    return {
      ...state,
      score: action?.payload,
    };
  });
});

const USER_ANSWERS_INITIAL_STATE = {
  userAnswers: [],
};

const userAnswersReducer = createReducer(USER_ANSWERS_INITIAL_STATE, (builder) => {
  builder.addCase(setUserAnswers, (state, action) => {
    return {
      ...state,
      userAnswers: [...state.userAnswers, ...action?.payload]
    };
  });
});

const rootReducer = combineReducers({
  config: configReducer,
  selectedPage: selectedPageReducer,
  questions: questionsReducer,
  score: scoreReducer,
  userAnswers: userAnswersReducer,
});

export default rootReducer;
