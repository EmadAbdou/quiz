import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import store from "../store";
import { Button } from "@mui/material";
import { makeStyles } from "@material-ui/core/styles";
import { useNavigate } from "react-router-dom";
import GetResult from "../components/get-result";

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

const ShareResult = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const headerMetaData = {
      score: store.getState().score?.score,
      title: 'Thanks for using the Rocket CRO Audit tool',
      questionIndex: 0,
      questionsLength: store.getState().questions?.selectedPageQuestions.length,
      scoreView: true
  }

  const handleSubmit = () => {
    navigate("/result");
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
          <GetResult submit={handleSubmit} />
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default ShareResult;
