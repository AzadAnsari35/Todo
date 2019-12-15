import React from "react";
import Checkbox from "@material-ui/core/Checkbox";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";

const TodoContent = ({ list, updateList }) => {
  const classes = useStyles();

  const [check, setCheck] = React.useState(false);

  const toggleCheck = () => {
    setCheck(!check);
  };

  const changeText = (e, i) => {
    updateList(e, i);
  };

  return (
    <div>
      {list.map((cur, index) => (
        <div className={classes.oneRow} key={index}>
          <Checkbox checked={check} onChange={toggleCheck} />
          <TextField
            fullWidth
            value={cur}
            onChange={event => changeText(event, index)}
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
