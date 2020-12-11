import { Paper, Typography } from "@material-ui/core";
import { useHomeStyles } from "../pages/theme";

export const Tag = () => {
  
  const classes = useHomeStyles();

  return(
    <Paper className={classes.rightSideBlock}>
      <Paper className={classes.rightSideBlockHeader} variant="outlined">
        <b>Prince Dewangan</b>
      </Paper>
    </Paper>
  );
}
 