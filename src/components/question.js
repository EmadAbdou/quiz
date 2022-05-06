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

const useStyles = makeStyles({
  container: {
    marginTop: "1%",
  },
  questionWrapper: {
    position: "relative",
    width: "50%",
    margin: "auto",
    justifyContent: "center",
    textAlign: "center",
    boxShadow: "0px 0px 8px 8px rgba(0,0,0,0.04)",
    padding: "10px 15px",
    borderRadius: "10px",
    ["@media (max-width:768px)"]: { // eslint-disable-line no-useless-computed-key
      width: "90%",
    }
  },
  questionBody: {
    minHeight: "7em",
    display: "flex",
    justifyContent: "space-around",
    width: "100%",
  },
  formControl: {
    width: "100%",
    display: "flex !important",
    flexDirection: "row !important",
    justifyContent: "space-around",
    alignItems: "center",
  },
  formLabel: {
    display: "inline-flex",
    width: "500px",
    textAlign: "start",
    justifyContent: "start",
    alignItems: "center",
  },
  index: {
    width: "15px !important",
    height: "15px !important",
    padding: "15px",
    border: "1px solid #CD1C6C",
    borderRadius: "50%",
    textAlign: "center",
    marginInlineEnd: "30px",
    lineHeight: "1em !important",
  },
  labelText: {
    display: "inline-block",
    width: "fit-content",
    textAlign: "Start",
    color: "#333",
    fontSize: "16px",
    fontWeight: "bold",
  },
  radioGroup: {
    display: "inline-block !important",
    width: "fit-content",
  },
  controlWrapper: {
    display: "inline-block",
    marginInlineStart: "15px",
  },
  label: {
    display: "block",
    width: "fit-content",
    margin: "0",
    paddingInlineStart: ".5em",
  },
  radio: {
    color: "#CD1C6C !important",
  },
  exampleWrapper: {
    marginTop: "20px",
  },
  addIcon: {
    transform: "none !important",
  },
  example: {
    position: "relative",
    width: "50%",
    margin: "auto",
    display: "flex !important",
    justifyContent: "space-around",
    textAlign: "center",
    boxShadow: "0px 0px 8px 8px rgba(0,0,0,0.04)",
    padding: "10px 15px",
    borderRadius: "10px",
    ["@media (max-width:768px)"]: { // eslint-disable-line no-useless-computed-key
      width: "90%",
    }
  },
  accordionWrapper: {
    display: "flex",
    margin: "auto",
    width: "91%",
  },
  accordion: {
    boxShadow: "none !important",
  },
  questionIcon: {
    color: "#32CCA7",
    fontSize: "16px !important",
  },
  accordionText: {
    textAlign: "Start",
    color: "#CD1C6C",
    fontSize: "16px",
    fontWeight: "bold !important",
    lineHeight: "3em !important",
  },
  exampleImg: {
    width: "100%",
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

const CustomExpandIcon = () => {
  return (
    <Box
      sx={{
        ".Mui-expanded & > .collapseIconWrapper": {
          display: "none",
          color: "#CD1C6C !important",
        },
        ".expandIconWrapper": {
          display: "none",
          color: "#CD1C6C !important",
        },
        ".Mui-expanded & > .expandIconWrapper": {
          display: "block",
          color: "#CD1C6C !important",
        },
      }}
    >
      <CloseIcon className="expandIconWrapper" />
      <AddIcon className="collapseIconWrapper" />
    </Box>
  );
};

const Question = (props) => {
  const [radioStatus, setRadioStatus] = useState(null);
  const classes = useStyles();

  const onSelectChange = (e) => {
    let value = e.target.value === "true" ? true : false;
    const answerObj = {
      questionId: props?.questionData?.id,
      answer: e.target.value,
      correct: props?.questionData?.answer === value ? true : false,
    };
    props.handleAnswer(answerObj);
    setRadioStatus(value);
    // setRadioStatus(null);
  };

  useEffect(() => {
    // setRadioValue(null);
  }, []);

  return (
    <div className={classes.container}>
      <div className={classes.questionWrapper}>
        <div className={classes.questionBody}>
          <FormControl
            className={classes.formControl}
            onChange={onSelectChange}
          >
            <FormLabel className={classes.formLabel}>
              <span className={classes.index}>1</span>
              <p className={classes.labelText}>
                {props?.questionData?.question}
              </p>
            </FormLabel>
            <RadioGroup value={radioStatus} className={classes.radioGroup}>
              <div className={classes.controlWrapper}>
                <p className={classes.label}>Yes</p>
                <Radio
                  className={classes.radio}
                  value="true"
                  // checked={radioValue === true}
                  control={<Radio />}
                />
              </div>
              <div className={classes.controlWrapper}>
                <p className={classes.label}>No</p>
                <Radio
                  className={classes.radio}
                  // checked={radioValue === false}
                  value="false"
                  control={<Radio />}
                />
              </div>
            </RadioGroup>
          </FormControl>
        </div>
      </div>
      {props?.questionData?.withExample ? (
        <div className={classes.exampleWrapper}>
          <div className={classes.example}>
            <div className={classes.accordionWrapper}>
              <Accordion className={classes.accordion}>
                <AccordionSummary
                  expandIcon={<CustomExpandIcon className={classes.addIcon} />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <span className={classes.index}>
                    <QuestionMarkIcon className={classes.questionIcon} />
                  </span>
                  <Typography className={classes.accordionText}>
                    Click Here To See An Example
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <img
                    src={props?.questionData?.exampleImg}
                    className={classes.exampleImg}
                    alt="example"
                  />
                </AccordionDetails>
              </Accordion>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Question;
