import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import store from "../store";
import { useNavigate } from "react-router-dom";
import ResultCards from "../components/result-cards";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@mui/material/Typography";
import CheckRoundedIcon from "@mui/icons-material/CheckRounded";
import ClearRoundedIcon from "@mui/icons-material/ClearRounded";
import ResultQuestion from "../components/result-question";

const useStyles = makeStyles({
  contentWrapper: {
    marginTop: "8%",
    marginBottom: "8%",
    minHeight: "50vh",
  },
  answersWrapper: {
    marginTop: "100px",
    marginBottom: "100px",
    textAlign: "center",
  },
  answer: {
    textAlign: "center",
    borderBottom: "3px solid #c4c4c4",
    width: "90%",
    margin: "auto",
    paddingBottom: "50px",
    marginBottom: "50px",
  },
  sectionHead: {
    color: "#333",
    fontWeight: "bold !important",
    width: "30% !important",
    margin: "auto !important",
  },
  resultsWrapper: {
    paddingTop: "60px",
    width: "90%",
    margin: "auto",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  rightAnswers: {
    width: "45%",
    display: "inline-block",
  },
  wrongAnswers: {
    width: "45%",
    display: "inline-block",
  },
  iconWrapper: {
    width: "100%",
    display: "block",
  },
  rightIcon: {
    fontSize: "35px !important",
    color: "#32CCA7",
    border: "4px solid",
    borderRadius: "50%",
    padding: "5px",
  },
  rightSubText: {
    fontSize: "16px !important",
    fontWeight: "bold",
    textTransform: "uppercase",
    paddingBottom: "30px",
    borderBottom: "2px solid #32CCA7",
  },
  wrongIcon: {
    fontSize: "35px !important",
    color: "#EC4B4B",
    border: "4px solid",
    borderRadius: "50%",
    padding: "5px",
  },
  wrongSubText: {
    fontSize: "16px !important",
    fontWeight: "bold",
    textTransform: "uppercase",
    paddingBottom: "30px",
    borderBottom: "2px solid #EC4B4B",
  },
  questionsWrapper: {},
});

const Result = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const questionsList = store.getState().questions?.selectedPageQuestions;
  const userAnswers = store.getState().userAnswers?.userAnswers;
  console.log("ans", userAnswers);
  const headerMetaData = {
    score: store.getState().score?.score,
    title: "Your Landing Page Audit Results",
    questionIndex: 0,
    questionsLength: store.getState().questions?.selectedPageQuestions.length,
    scoreView: true,
  };
  const cardsMetaData = {
    firstView: false,
    secondView: true,
  };

  return (
    <React.Fragment>
      <Header
        score={headerMetaData.score}
        sectionTitle={headerMetaData.title}
        questionIndex={headerMetaData.questionsLength - 1}
        questionsLength={headerMetaData.questionsLength}
        scoreView={headerMetaData.scoreView}
      />
      <div className={classes.contentWrapper}>
        <ResultCards
          score={headerMetaData.score}
          withTitle={cardsMetaData?.firstView}
        />
        <div className={classes.answersWrapper}>
          {questionsList &&
            questionsList.map((listItem, listIndex) => (
              <div className={classes.answer} key={listIndex}>
                <Typography
                  align="center"
                  variant="h5"
                  gutterBottom
                  component="div"
                  className={classes.sectionHead}
                >
                  {listItem?.title}
                </Typography>
                <div className={classes.resultsWrapper}>
                  <div className={classes.rightAnswers}>
                    <div className={classes.iconWrapper}>
                      <CheckRoundedIcon className={classes.rightIcon} />
                      <p className={classes.rightSubText}>
                        Here Are The Things You Are Doing Well
                      </p>
                    </div>
                    <div className={classes.questionsWrapper}>
                      {listItem?.questions?.map((question, index) =>
                        userAnswers[index].questionId === question.id &&
                        userAnswers[index].parentId === listItem?.id &&
                        userAnswers[index].correct ? (
                          <div
                            key={
                              question.id +
                              userAnswers[index].parentId.toString()+
                              listIndex
                            }
                          >
                            <ResultQuestion questionData={question} />
                          </div>
                        ) : (
                          ""
                        )
                      )}
                    </div>
                  </div>
                  <div className={classes.wrongAnswers}>
                    <div className={classes.iconWrapper}>
                      <ClearRoundedIcon className={classes.wrongIcon} />
                      <p className={classes.wrongSubText}>
                        Here Are The Things You Are Not Doing Well
                      </p>
                    </div>
                    <div className={classes.questionsWrapper}>
                      {listItem?.questions?.map((question, index) =>
                        userAnswers[index].questionId === question.id &&
                        userAnswers[index].parentId === listItem?.id &&
                        !userAnswers[index].correct ? (
                          <div
                            key={
                              question.id +
                              userAnswers[index].parentId.toString()+
                              listIndex
                            }
                          >
                            <ResultQuestion questionData={question} />
                          </div>
                        ) : (
                          ""
                        )
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
        <ResultCards
          score={headerMetaData.score}
          withTitle={cardsMetaData?.secondView}
        />
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default Result;
