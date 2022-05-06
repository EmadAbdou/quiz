import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import List from "@mui/material/List";
import ListItemText from "@mui/material/ListItemText";
import CheckIcon from '@mui/icons-material/Check';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';

const useStyles = makeStyles({
  container: {
    marginTop: "1%",
  },
  contentWrapper: {
    position: "relative",
    width: "45%",
    margin: "auto",
    justifyContent: "center",
    textAlign: "center",
    boxShadow: "0px 0px 8px 8px rgba(0,0,0,0.04)",
    padding: "40px",
    borderRadius: "10px",
    ["@media (max-width:768px)"]: {
      // eslint-disable-line no-useless-computed-key
      width: "90%",
    },
  },
  head: {
    fontWeight: "bold !important",
  },
  list: {
    display: "block !important",
    flexDirection: "row",
    width: "100%",
    marginTop: "20px",
  },
  listItem: {
    width: "fit-content !important",
    display: "inline-flex !important",
    marginLeft: "10px",
    marginRight: "10px",
  },
  icon: {
    color: "#32CCA7",
    fontSize: "40px !important",
  },
  inputDiv: {
    width: "100%",
    justifyContent: "center",
    marginTop: "20px",
  },
  textField: {
    backgroundColor: "#E9F5F7",
    borderRadius: "5px",
    justifyContent: "center",
    marginRight: "10px !important",
    marginLeft: "10px !important",
    width: "68%",
    border: "none !important"
  },
  shareBtn: {
    backgroundColor: "#CD1C6C !important",
    boxShadow: "none !important",
    height: "3.3em",
    fontSize: "12px !important",
  },

});

const GetResult = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <div className={classes.contentWrapper}>
        <Typography
          align="center"
          variant="h5"
          gutterBottom
          component="div"
          className={classes.head}
        >
          Enter Your Email Below To Get
        </Typography>
        <div className={classes.list}>
          <List>
            <ListItem className={classes.listItem}>
              <ListItemIcon>
                <CheckIcon className={classes.icon} />
              </ListItemIcon>
              <ListItemText primary="Your Audit" />
            </ListItem>
            <ListItem className={classes.listItem}>
              <ListItemIcon>
                <CheckIcon className={classes.icon} />
              </ListItemIcon>
              <ListItemText primary="List Of Action Items" />
            </ListItem>
            <ListItem className={classes.listItem}>
              <ListItemIcon>
                <CheckIcon className={classes.icon} />
              </ListItemIcon>
              <ListItemText primary="Breakdown Of Results" />
            </ListItem>
          </List>
        </div>
        <div className="input-wrapper">
        <div className={classes.inputDiv}>
          <TextField
            className={classes.textField}
            hiddenLabel
            inputProps={{ inputMode: 'email'}}
            size="small"
          />
          <Button variant="contained" onClick={props.submit} className={classes.shareBtn}>
          Get My Free Audit
          </Button>
        </div>
      </div>
      </div>
    </div>
  );
};

export default GetResult;
