import { Avatar, TextareaAutosize, IconButton, Button } from "@material-ui/core"
import ImageOutlinedIcon from '@material-ui/icons/ImageOutlined';
import EmojiIcon from '@material-ui/icons/SentimentSatisfiedOutlined';
import CircularProgress from '@material-ui/core/CircularProgress';
import classNames from "classnames";
import { useState } from "react";
import { useHomeStyles } from "../pages/theme";

const MAX_LENGTH = 250

export const AddTweetForm = ({maxRows}) => {
  
  const classes = useHomeStyles()

  const [text, setText] = useState('')
  const [postImage, setPostImage] = useState(null)

  const textLimitPercent = Math.round((text.length / 280) * 100);
  const textCount = MAX_LENGTH - text.length

  const handleChangeTextarea = (e) => {
    if(e.currentTarget){
      setText(e.currentTarget.value)
    }
    console.log(e.currentTarget.value)
  }

  const handleChangeImage = (e) => {
    setPostImage(URL.createObjectURL(e.target.files[0]))
  }

  return(
   <form>
    <div className={classes.addFormBody}>
      <Avatar
        src="https://post.healthline.com/wp-content/uploads/2019/09/man-city-urban-walking-serious-732x549-thumbnail.jpg"
        className={classes.tweetAvatar}
      />
      <TextareaAutosize 
        placeholder="What's haping?"
        onChange={handleChangeTextarea}
        className={classes.addFormTextarea}
        value={text}
        rowsMax={maxRows}
      />
    </div>

    {/* {postImage &&
     <div 
     style={{maxWidth: '495px',
     borderRadius: 10,marginTop: '10px',
     width: '100%', maxHeight: '495px',}}
   >
     <img src={postImage} alt="" style={{width: '100%', height: '100%',   borderRadius: 22,}}/>
   </div> 
    }
 */}



    <div className={classes.addFormBottom}>
      <div className={classNames(classes.tweetFooter,classes.addFormBottomActions)}>

        <IconButton className={classes.addFormIcon} color="primary" >
          <input type="file" onChange={handleChangeImage} className={classes.addFormInputFile}/>
          <ImageOutlinedIcon style={{fontSize: 26}}/>
        </IconButton>
        <IconButton color="primary" >
          <EmojiIcon style={{ fontSize: 26 }} />
        </IconButton>

      </div>
      
      <div className={classes.addFormBottomRight}>
        {text && (
          <>
            <div className={classes.addFormCircleProgress}>
              <span>{textCount}</span>
              <CircularProgress 
                variant="static"
                size={22}
                thickness={5}
                value={text.length >= MAX_LENGTH ? 100 : textLimitPercent}
                style={text.length >= MAX_LENGTH ? { color: 'red' } : undefined}
              />
              <CircularProgress
                  style={{ color: 'rgba(0, 0, 0, 0.1)' }}
                  variant="static"
                  size={22}
                  thickness={5}
                  value={100}
                />
            </div>
          </>
        )}
        <Button type="submit"
         color="primary" 
         style={{marginLeft: 10}}
         disabled={!text || text.length >= MAX_LENGTH}
         variant="contained">Tweet</Button>

      </div>
    </div>
   </form>
  )
}