import { Paper, Avatar } from "@material-ui/core"
import { AddTweetForm } from "../../../components/AddTweetFrom"
import { useHomeStyles } from "../../theme"



export const FullTweet = () => {
  const classes = useHomeStyles()
  return (
    <Paper variant="outlined">
        <AddTweetForm classes={classes} />
      <div>
        <Avatar />

      </div>
    </Paper>
  )
}
 