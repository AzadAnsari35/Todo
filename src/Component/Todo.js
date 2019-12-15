import React, { useState } from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import AddIcon from "@material-ui/icons/Add";
import Divider from "@material-ui/core/Divider";
import TodoContent from "./TodoContent";
import Fab from "@material-ui/core/Fab";

const Todo = () => {
  const classes = useStyles();
  const [list, setList] = useState(["", ""]);

  const handleAdd = () => {
    setList([...list, ""]);
  };

  const updateList = (e, i) => {
    let newArr = [...list];
    newArr[i] = e.target.value;
    console.log(newArr);
    setList(newArr);
  };

  return (
    <div className={classes.root}>
      <div className={classes.header}>
        <Typography variant="h2" style={{ color: "#FDD40A" }}>
          Todo
        </Typography>
        <Fab onClick={handleAdd}>
          <AddIcon className={classes.addIcon} />
        </Fab>
      </div>
      <Divider classname={classes.dividerLine} variant="middle" />
      <TodoContent list={list} updateList={updateList} />
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
    paddingTop: 50,
    paddingBottom: 50
  },
  dividerLine: {
    height: 2,
    backgroundColor: "#C1C1C1"
  }
}));

export default Todo;
