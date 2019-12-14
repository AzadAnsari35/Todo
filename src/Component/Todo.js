import React, { useState } from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import Divider from "@material-ui/core/Divider";
import TodoContent from "./TodoContent";

const Todo = () => {
  const classes = useStyles();
  const [list, setList] = useState([]);

  return (
    <div className={classes.root}>
      <div className={classes.header}>
        <Typography variant="h2" style={{ color: "#FDD40A" }}>
          Todo
        </Typography>
        <AddCircleIcon className={classes.addIcon} />
      </div>
      <Divider classname={classes.dividerLine} variant="middle" />
      <TodoContent list={list} />
    </div>
  );
};

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: "#1E2023",
    width: "100%",
    height: "100vh"
  },
  addIcon: {
    fontSize: 50,
    color: "#56585A"
  },
  header: {
    display: "flex",
    justifyContent: "space-around",
    paddingTop: 50
  },
  dividerLine: {
    height: 2,
    backgroundColor: "#C1C1C1"
  }
}));

export default Todo;
