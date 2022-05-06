import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import AddIcon from "@mui/icons-material/Add";
import CloseIcon from "@mui/icons-material/Close";
import QuestionMarkIcon from "@mui/icons-material/QuestionMark";

const useStyles = makeStyles({
  container: {
    marginTop: "1%",
  },
  exampleWrapper: {
    marginTop: "20px",
  },
  addIcon: {
    transform: "none !important",
  },
  example: {
    position: "relative",
    width: "90%",
    margin: "auto",
    display: "flex !important",
    justifyContent: "space-around",
    textAlign: "center",
    boxShadow: "0px 0px 8px 8px rgba(0,0,0,0.04)",
    padding: "10px 15px",
    borderRadius: "10px",
  },
  accordionWrapper: {
    display: "flex",
    margin: "auto",
    width: "91%",
  },
  accordion: {
    boxShadow: "none !important",
  },
  accordionText: {
    textAlign: "Start",
    color: "#333",
    fontSize: "12px",
    fontWeight: "bold !important",
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

const ResultQuestion = (props) => {
    const classes = useStyles();
  return (
    <div className={classes.container}>
        <div className={classes.exampleWrapper}>
          <div className={classes.example}>
            <div className={classes.accordionWrapper}>
              <Accordion className={classes.accordion}>
                <AccordionSummary
                  expandIcon={<CustomExpandIcon className={classes.addIcon} />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography className={classes.accordionText}>
                   {
                       props?.questionData?.question
                   }
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
    </div>
  );
};

export default ResultQuestion;
