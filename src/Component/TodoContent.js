import React, { useEffect } from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";

const TodoContent = ({ list, addList, handleAdd }) => {
  const classes = useStyles();

  const [refs, setRefs] = React.useState([]);

  const changeText = (e, i) => {
    addList(e, i);
  };

  const handleKeyPress = async (event, index, cur) => {
    if (event.key === "Enter") {
      localStorage.setItem(index, cur);
      console.log("list", list);
      console.log("index", index);

      if (list.length - 1 === index) {
        await handleAdd();
        refs[index + 1].current.focus();
      }
      if (index < list.length - 1) {
        refs[index + 1].current.focus();
      }
    }
  };

  useEffect(() => {
    let references = [...Array(15)].map(r => React.createRef());
    setRefs(references);
  }, [list]);

  return (
    <div>
      {list.map((cur, index) => (
        <div className={classes.oneRow} key={index}>
          <TextField
            fullWidth
            value={cur}
            onChange={event => changeText(event, index)}
            onKeyPress={event => handleKeyPress(event, index, cur)}
            inputRef={refs[index]}
          />
        </div>
      ))}
    </div>
  );
};

const useStyles = makeStyles(theme => ({
  oneRow: {
    display: "flex",
    backgroundColor: "#bbbbbb",
    height: 60
  }
}));

export default TodoContent;
