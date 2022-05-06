import React from "react";
import Background from "../assets/imgs/header-bg.png";
import Logo from "../assets/imgs/logo.png";
import Typography from "@mui/material/Typography";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import { makeStyles } from "@material-ui/core/styles";
import store from "../store";

const useStyles = makeStyles({
  header: {
    padding: "50px",
    textAlign: "center",
    backgroundImage: `url(${Background})`,
    backgroundSize: "100% 100%",
    position: "relative",
  },
  subHead: {
    color: "#fff",
    marginBottom: "20px !important",
    marginTop: "40px !important",
  },
  question: {
    color: "#fff",
    maxWidth: "60% !important",
    margin: "auto !important",
    fontWeight: "bold !important",
    paddingBottom: "90px",
    ["@media (max-width:768px)"]: {
      // eslint-disable-line no-useless-computed-key
      maxWidth: "90% !important",
    },
  },
  loadingWrapper: {
    position: "absolute",
    bottom: "-10%",
    display: "block",
    margin: "auto",
    textAlign: "center",
    width: "94%",
  },
  circle: {
    backgroundColor: "#E9F5F7",
    borderRadius: "50%",
    border: "12px solid #E9F5F7",
    color: "#32CCA7 !important",
    width: "120px !important",
    height: "120px !important",
  },
  circleContent: {
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    position: "absolute",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  progress: {
    margin: "0",
    fontWeight: "bold",
    fontSize: "30px",
  },
  divider: {
    display: "block",
    margin: "5px",
    backgroundColor: "#333",
    border: "2px solid #3333",
  },
  total: {
    margin: "0",
  },
  circleScoreView: {
    backgroundColor: "#E9F5F7",
    borderRadius: "50%",
    border: "12px solid #E9F5F7",
    color: "#32CCA7 !important",
    width: "120px !important",
    height: "120px !important",
  },
  circleContentScoreView: {
    top: "-10%",
    left: 0,
    bottom: 0,
    right: 0,
    position: "absolute",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  progressText: {
    margin: "0",
    fontWeight: "bold",
    fontSize: "30px",
    color: "#333",
  },
  scoreText: {
    margin: "0",
    color: "#333",
    marginBottom: "5px",
    fontSize: "14px"
  },
});

const Header = (props) => {
  const classes = useStyles();
  const selectedPage = store.getState().selectedPage?.selectedPage;
  return (
    <header className={classes.header}>
      <img src={Logo} alt="logo" />
      <Typography
        align="center"
        variant="h6"
        gutterBottom
        component="div"
        className={classes.subHead}
      >
        {selectedPage}
      </Typography>
      <Typography
        align="center"
        variant="h4"
        gutterBottom
        component="div"
        className={classes.question}
      >
        {props?.sectionTitle}
      </Typography>
      {/* Loading */}
      {props?.scoreView ? (
        <Box className={classes.loadingWrapper}>
          <CircularProgress
            variant="determinate"
            value="100"
            className={classes.circleScoreView}
          />
          <Box className={classes.circleContentScoreView}>
            <div>
              <p className={classes.scoreText}>Your Score</p>
              <p className={classes.progressText}>
                {props?.score ? props?.score : 0}%
              </p>
            </div>
          </Box>
        </Box>
      ) : (
        <Box className={classes.loadingWrapper}>
          <CircularProgress
            variant="determinate"
            value={props?.score}
            className={classes.circle}
          />
          <Box className={classes.circleContent}>
            <div>
              <p className={classes.progress}>
                {props?.score ? props?.score : 0}%
              </p>
              <span className={classes.divider}></span>
              <p className={classes.total}>
                {props?.questionIndex + 1}/{props?.questionsLength}
              </p>
            </div>
          </Box>
        </Box>
      )}
    </header>
  );
};

export default Header;
