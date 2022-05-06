import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { makeStyles } from "@material-ui/core/styles";
import { useSelector } from "react-redux";
import store from "../store";
import { setPage } from "../actions";
import { useNavigate } from "react-router-dom";

const useStyles = makeStyles({
  box: {
    backgroundColor: "#333",
    paddingTop: "10%",
    height: "100vh",
  },
  innerBox: {
    minWidth: "30%",
    maxWidth: "30%",
    margin: "auto",
    backgroundColor: "#3d035d",
    height: "50vh",
    padding: "40px !important",
    borderRadius: "10px",
    ["@media (max-width:768px)"]: { // eslint-disable-line no-useless-computed-key
      minWidth: "60%",
      maxWidth: "60%",
    },
    ["@media (max-width:576px)"]: { // eslint-disable-line no-useless-computed-key
      minWidth: "90%",
      maxWidth: "90%",
      height: "65vh",
    },
  },
  title: {
    color: "#fff",
    marginBottom: "40px !important",
  },
  list: {
    width: "100%",
    maxWidth: "450px !important",
    backgroundColor: "#3d035d",
    margin: "auto !important",
  },
  listItem: {
    borderRadius: "5px !important",
    textAlign: "center !important",
    backgroundColor: "#CD1C6C !important",
    color: "#fff !important",
    marginBottom: "10px !important",
  },
});

const Welcome = () => {
  const classes = useStyles();
  const pages = useSelector((store) => store?.config?.pages);
  const navigate = useNavigate();
  const setSelectedPage = (e) => {
    store.dispatch({ type: setPage, payload: e?.target?.innerText });
    navigate("/quiz");
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Box className={classes.box}>
            <Box className={classes.innerBox}>
              <Typography
                align="center"
                variant="h5"
                gutterBottom
                component="div"
                className={classes.title}
              >
                Choose What You Want To Audit
              </Typography>
              <List className={classes.list} component="nav">
                {pages?.map((page) => (
                  <ListItemButton
                    className={classes.listItem}
                    key={page}
                    onClick={(page) => setSelectedPage(page)}
                  >
                    <ListItemText primary={page} />
                  </ListItemButton>
                ))}
              </List>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default Welcome;
