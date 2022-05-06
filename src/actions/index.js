import { createAction } from "@reduxjs/toolkit";

export const SET_CONFIG = "set_config";
export const SET_SELECTED_PAGE = "set_page";
export const SET_QUESTIONS = "set_questions";
export const SET_SCORE = "set_score";
export const SET_USER_ANSWERS = "set_user_answers";

const setConfig = createAction(SET_CONFIG, (payload) => {
  return {
    payload
  };
});

const setPage = createAction(SET_SELECTED_PAGE, (payload) => {
  return {
    payload
  };
});

const setQuestions = createAction(SET_QUESTIONS, (payload) => {
  return {
    payload
  };
});

const setUserScore = createAction(SET_SCORE, (payload) => {
  return {
    payload
  };
});

const setUserAnswers = createAction(SET_USER_ANSWERS, (payload) => {
  return {
    payload
  };
});

export { setConfig, setPage, setQuestions, setUserScore, setUserAnswers };
