import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import RadioGroup from "@mui/material/RadioGroup";
import Radio from "@mui/material/Radio";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import AddIcon from "@mui/icons-material/Add";
import CloseIcon from "@mui/icons-material/Close";
import QuestionMarkIcon from "@mui/icons-material/QuestionMark";
import { useEffect, useState } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import { Button } from "@mui/material";

const useStyles = makeStyles({
  container: {
    marginTop: "1%",
    justifyContent: "center",
  },
  head: {
    fontWeight: "bold !important",
    color: "#333 !important",
  },
  cardsWrapper: {
    width: "70%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: "40px",
    margin: "auto",
  },
  downloadCard: {
    width: "40%",
    display: "inline-block",
    backgroundColor: "#3d035d",
    borderRadius: "5px",
    padding: "25px",
  },
  textContent: {
    width: "50%",
    display: "inline-block",
  },
  text: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: "18px",
    marginBottom: "70px",
  },
  downloadBtn: {
    backgroundColor: "#CD1C6C !important",
    boxShadow: "none !important",
    height: "3.3em",
    fontSize: "12px !important",
  },
  loadingWrapper: {
    position: "relative",
    // bottom: "-10%",
    display: "block",
    margin: "auto",
    textAlign: "center",
    width: "50%",
    display: "inline-block",
  },
  circle: {
    // backgroundColor: "#E9F5F7",
    borderRadius: "50%",
    // border: "12px solid #E9F5F7",
    color: "#32CCA7 !important",
    width: "160px !important",
    height: "160px !important",
  },
  circleContent: {
    top: "-10%",
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
    fontSize: "40px",
    color: "#FFFFFF",
  },
  progressText: {
    margin: "0",
    color: "#FFFFFF",
    marginBottom: "5px",
  },
  linkCard: {
    width: "40%",
    display: "inline-block",
    backgroundColor: "#3d035d",
    borderRadius: "5px",
    padding: "25px",
  },
  shareText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: "18px",
    marginBottom: "10px",
  },
  link: {
    color: "#fff",
  },
  linkBtn: {
    marginTop: "10% !important",
    backgroundColor: "#CD1C6C !important",
    boxShadow: "none !important",
    height: "3.3em",
    fontSize: "12px !important",
    width: "100%",
  },
});

const ResultCards = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      {props.withTitle ? (
        <Typography
          align="center"
          variant="h5"
          gutterBottom
          component="div"
          className={classes.head}
        >
          Thanks for using the Rocket CRO tool
        </Typography>
      ) : (
        ""
      )}

      <div className={classes.cardsWrapper}>
        <div className={classes.downloadCard}>
          <div className={classes.textContent}>
            <p className={classes.text}>Download Your Results as PDF</p>
            <Button variant="contained" className={classes.downloadBtn}>
              Download PDF
            </Button>
          </div>
          {/* Loading */}
          <Box className={classes.loadingWrapper}>
            <CircularProgress
              variant="determinate"
              value="100"
              className={classes.circle}
            />
            <Box className={classes.circleContent}>
              <div>
                <p className={classes.progressText}>Your Score</p>
                <p className={classes.progress}>{props?.score}%</p>
              </div>
            </Box>
          </Box>
        </div>
        <div className={classes.linkCard}>
          <p className={classes.shareText}>Share Your Results</p>
          <a className={classes.link}>
            https://rocket-conversions.com/conversion-rate-optimization-checklist/
          </a>
          <Button variant="contained" className={classes.linkBtn}>
            Copy Link
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ResultCards;
