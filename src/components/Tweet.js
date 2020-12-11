import { Paper, Avatar, Typography, IconButton } from "@material-ui/core"


// import classNames from 'classnames';
import CommentIcon from '@material-ui/icons/ChatBubbleOutlineOutlined';
import RepostIcon from '@material-ui/icons/RepeatOutlined';
import LikeIcon from '@material-ui/icons/FavoriteBorderOutlined';
import ShareIcon from '@material-ui/icons/ReplyOutlined';
import MoreVertIcon from '@material-ui/icons/MoreVert';


import classNames from "classnames";
import { useHomeStyles } from "../pages/theme";



export const Tweet = ({ text, user ,createdAt ,postImg}) => {

  const classes = useHomeStyles()
  return(
    <Paper className={classNames(classes.tweet, 
      classes.tweetsHeader)} variant="outlined">
      <Avatar
        className={classes.tweetAvatar}
        alt={`Аватарка пользователя ${user.fullname}`}
        src={user.avatarUrl}
      />
      <div className={classes.tweetContent}>
        <div className={classes.tweetHeader}>
          <div>
            <b>{user.fullname}</b>&nbsp;
            <span className={classes.tweetUserName}>@{user.username}</span>&nbsp;
            <span className={classes.tweetUserName}>·</span>&nbsp;
            {/* <span className={classes.tweetUserName}>{formatDate(new Date(createdAt))}</span> */}
          </div>
          <div>
            <IconButton
              aria-label="more"
              aria-controls="long-menu"
              aria-haspopup="true"
              // onClick={handleClick}
            >
              <MoreVertIcon />
            </IconButton>
            {/* <Menu
              id="long-menu"
              anchorEl={anchorEl}
              keepMounted
              open={open}
              // onClose={handleClose}

            >
              <MenuItem onClick={handleClose}>
                Редактировать
              </MenuItem>
              <MenuItem onClick={handleClose}>
                Удалить твит
              </MenuItem>
            </Menu> */}
          </div>
        </div>
        <Typography variant="body1" gutterBottom>
          {text}
        </Typography>
{/*       
        <div 
          style={{maxWidth: '495px',
          borderRadius: 10,
          width: '100%', maxHeight: '495px',}}
        >

          <img src={postImg} alt="" style={{width: '100%', height: '100%',   borderRadius: 22,}}/>
        </div> */}

        <div className={classes.tweetFooter}>
          <div>
            <IconButton>
              <CommentIcon style={{ fontSize: 20 }} />
            </IconButton>
            <span>1</span>
          </div>
          <div>
            <IconButton>
              <RepostIcon style={{ fontSize: 20 }} />
            </IconButton>
          </div>
          <div>
            <IconButton>
              <LikeIcon style={{ fontSize: 20 }} />
            </IconButton>
          </div>
          <div>
            <IconButton>
              <ShareIcon style={{ fontSize: 20 }} />
            </IconButton>
          </div>
        </div>
      </div>
    </Paper>
  )
}
 