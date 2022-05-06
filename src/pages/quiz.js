import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import Question from "../components/question";
import { useEffect, useState } from "react";
import db from "../firebase.config";
import { collection, getDocs } from "firebase/firestore";
import { setQuestions, setUserScore, setUserAnswers } from "../actions";
import store from "../store";
import { Button } from "@mui/material";
import { makeStyles } from "@material-ui/core/styles";
import { useNavigate } from "react-router-dom";

const useStyles = makeStyles({
  contentWrapper: {
    marginTop: "8%",
    marginBottom: "8%",
    minHeight: "50vh",
  },
  btnWrapper: {
    marginTop: "50px",
    textAlign: "center",
  },
  nextBtn: {
    backgroundColor: "#CD1C6C !important",
    boxShadow: "none !important",
    height: "2.8em",
  },
});

const Quiz = () => {
  const [questions, setQuestionsData] = useState([]);
  let [score, setScore] = useState(0);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [questionsLength, setQuestionsLength] = useState(0);
  const classes = useStyles();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const selectedPage =
          store
            .getState()
            .selectedPage?.selectedPage.split(" ")[0]
            .toLowerCase() + "-questions";
        if (selectedPage) {
          const questionsData = await getDocs(collection(db, selectedPage));
          const questionsList = await questionsData?.docs?.map((doc) =>
            doc.data()
          )[0]["questions-list"];
          setQuestionsData(questionsList);
          handleQuestionsLength(questionsList);
          store.dispatch({ type: setQuestions, payload: questionsList });
        }
      } catch (error) {
        console.error(error.message);
      }
    };
    fetchQuestions();
  }, []);

  const handleAnswer = (answerData) => {
    if (answers?.length) {
      if (getIndex(answerData) > -1) {
        answers[getIndex(answerData)] = answerData;
      } else {
        answers.push(answerData);
      }
    } else {
      answers.push(answerData);
    }
    setAnswers(answers);
  };

  const getIndex = (answerData) => {
    let index = -1;
    answers.map((answer, idx) => {
      if (
        answer?.questionId === answerData?.questionId &&
        answer?.parentId === answerData?.parentId
      ) {
        index = idx;
      }
    });
    return index;
  };

  const handleQuestionsLength = (list) => {
    let count = 0;
    list.map((item) => {
      count += item.questions.length;
    });
    setQuestionsLength(count);
  };

  const calculateScore = () => {
    let correctCount = 0;
    answers?.map((answer) => {
      if (answer.correct) {
        correctCount++;
      }
    });
    if (score < 100) {
      score = score + Math.ceil((correctCount / questionsLength) * 100);
    }
    setScore(score);
  };

  const handleSubmit = () => {
    if (answers?.length === questions[questionIndex]?.questions?.length) {
      calculateScore();
      setQuestionIndex(
        questionIndex < questions.length - 1 ? questionIndex + 1 : questionIndex
      );
      store.dispatch({ type: setUserAnswers, payload: answers });
      store.dispatch({ type: setUserScore, payload: score })
      setAnswers([]);
    }
    if(questionIndex === questions.length - 1) {
      // store.dispatch({ type: setUserAnswers, payload: answers });
      // store.dispatch({ type: setUserScore, payload: score })
      navigate("/share-result");
    }
  };

  return (
    <React.Fragment>
      <Header
        score={score}
        sectionTitle={questions[questionIndex]?.title}
        questionIndex={questionIndex}
        questionsLength={questions?.length}
      />
      <div className={classes.contentWrapper}>
        {questions[questionIndex]?.questions?.map((question) => (
          <div className={classes.questionWrapper} key={question.id}>
            <Question
              handleAnswer={(e) =>
                handleAnswer({ ...e, parentId: questions[questionIndex]?.id })
              }
              questionData={question}
            />
          </div>
        ))}
        <div className={classes.btnWrapper}>
          <Button
            variant="contained"
            className={classes.nextBtn}
            onClick={handleSubmit}
          >
            {questionIndex + 1}/{questions?.length} - Next
          </Button>
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default Quiz;
