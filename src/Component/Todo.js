import React, { useState, useEffect } from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import AddIcon from "@material-ui/icons/Add";
import Divider from "@material-ui/core/Divider";
import TodoContent from "./TodoContent";
import Fab from "@material-ui/core/Fab";

const Todo = () => {
  const classes = useStyles();
  const [list, setList] = useState([""]);

  const handleAdd = () => {
    if (list[list.length - 1] !== "") {
      setList([...list, ""]);
    }
  };

  useEffect(() => {
    function allStorage() {
      let value = [];
      let keys = Object.keys(localStorage);
      let i = keys.length;

      while (i--) {
        value.unshift(localStorage.getItem(keys[i]));
      }
      setList(value);
    }
    allStorage();
  }, []);

  const addList = (e, i) => {
    let newArr = [...list];
    newArr[i] = e.target.value;
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
      <Divider className={classes.dividerLine} variant="middle" />
      <TodoContent list={list} addList={addList} handleAdd={handleAdd} />
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
    justifyContent: "space-between",
    paddingTop: 50,
    paddingBottom: 15,
    margin: "0px 100px"
  },
  dividerLine: {
    height: 2,
    backgroundColor: "#46484A",
    marginBottom: 50
  }
}));

export default Todo;
