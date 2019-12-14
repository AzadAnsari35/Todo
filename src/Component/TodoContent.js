import React from "react";
import Checkbox from "@material-ui/core/Checkbox";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";

const TodoContent = ({ list }) => {
  const classes = useStyles();

  const [check, setCheck] = React.useState(false);

  const toggleCheck = () => {
    setCheck(!check);
  };

  return (
    <div>
      <div className={classes.oneRow}>
        <Checkbox checked={check} onChange={toggleCheck} />
        <TextField fullWidth />
      </div>
    </div>
  );
};

const useStyles = makeStyles(theme => ({
  oneRow: {
    display: "flex",
    backgroundColor: "#bbbbbb",
    height: 60,
    marginTop: 80
  }
}));

export default TodoContent;
