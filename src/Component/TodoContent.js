import React, { useEffect } from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import Radio from "@material-ui/core/Radio";

const TodoContent = ({ list, addList, handleAdd }) => {
  const classes = useStyles();

  const [refs, setRefs] = React.useState([]);

  const changeText = (e, i) => {
    addList(e, i);
  };

  const handleKeyPress = async (event, index, cur) => {
    console.log(cur);
    if (event.key === "Enter") {
      if (cur === "") {
        alert("Empty String not allowed");
        return 0;
      }

      localStorage.setItem(index, cur);

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
    let references = [...Array(50)].map(r => React.createRef());
    setRefs(references);
  }, []);

  return (
    <div>
      {list.map((cur, index) => (
        <div className={classes.oneRow} key={index}>
          <Radio
            classes={{
              root: classes.RadioButtonIcon
            }}
          />
          <TextField
            fullWidth
            value={cur}
            onChange={event => changeText(event, index)}
            onKeyPress={event => handleKeyPress(event, index, cur)}
            inputRef={refs[index]}
            InputProps={{
              classes: {
                underline: classes.underline
              }
            }}
          />
        </div>
      ))}
    </div>
  );
};

const useStyles = makeStyles(theme => ({
  oneRow: {
    display: "flex",
    height: 60,
    color: "#ffffff",
    alignItems: "flex-start"
  },
  underline: {
    color: "#E0E0E0",
    "&:before": {
      borderBottom: "1px solid #46484A"
    },
    "&:after": {
      borderBottom: "1px solid #FDD40A"
    },
    "&:hover": {
      borderBottom: "1px solid #FDD40A"
    }
  },
  RadioButtonIcon: {
    color: "#46484A"
  }
}));

export default TodoContent;
