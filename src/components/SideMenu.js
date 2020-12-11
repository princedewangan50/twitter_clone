import { Link, NavLink } from "react-router-dom";
import TwitterIcon from "@material-ui/icons/Twitter";
import SearchIcon from '@material-ui/icons/Search';
import NotificationIcon from '@material-ui/icons/NotificationsNoneOutlined';
import MessageIcon from '@material-ui/icons/EmailOutlined';
import BookmarkIcon from '@material-ui/icons/BookmarkBorderOutlined';
import ListIcon from '@material-ui/icons/ListAltOutlined';
import HomeIcon from '@material-ui/icons/HomeOutlined';
import UserIcon from '@material-ui/icons/PermIdentityOutlined';
import CreateIcon from '@material-ui/icons/Create';


import { ModalBlock } from "./../components/ModalBlock";


import { Typography, IconButton, Hidden, Button, Avatar } from "@material-ui/core";
import { AddTweetForm } from "./AddTweetFrom";
import { UserSideProfile } from "./UserSideProfile";
import { useState } from "react";

export const SideMenu = ({ classes, list }) => {

  const [visibalAddTweet, setVisibalAddTweet] = useState(false)

  const handleClickOpenAddTweet = () => {
    setVisibalAddTweet(true)
  }

  const onCloseAddTweet = () => {
    setVisibalAddTweet(false)
  }

  return(
    <>
     <ul className={classes.sideMenuList}>
       <li className={classes.sideMenuListItem}>
         <Link to="/home">
            <IconButton
             className={classes.logo}
             >
                <TwitterIcon color="primary" className={classes.logoIcon}/>
            </IconButton>
         </Link>
       </li>

       <li className={classes.sideMenuListItem}>
         <NavLink to="/home" activeClassName={classes.activeSideMenuListItem}>
            <div>
             <HomeIcon className={classes.sideMenuListItemIcon}/>
              <Hidden>
                <Typography variant="h6" className={classes.sideMenuListItemLabel}>
                  Home
                </Typography>
               </Hidden>
            </div>
         </NavLink>
       </li>

       <li className={classes.sideMenuListItem}>
         <Link to="/notification">
            <div>
             <NotificationIcon className={classes.sideMenuListItemIcon}/>
              <Hidden>
                <Typography variant="h6" className={classes.sideMenuListItemLabel}>
                  Notification
                </Typography>
               </Hidden>
            </div>
         </Link>
       </li>

       <li className={classes.sideMenuListItem}>
         <Link to="/">
            <div>
             <MessageIcon className={classes.sideMenuListItemIcon}/>
              <Hidden>
                <Typography variant="h6" className={classes.sideMenuListItemLabel}>
                  Message
                </Typography>
               </Hidden>
            </div>
         </Link>
       </li>

       <li className={classes.sideMenuListItem}>
         <Link to="/">
            <div>
             <SearchIcon className={classes.sideMenuListItemIcon}/>
              <Hidden>
                <Typography variant="h6" className={classes.sideMenuListItemLabel}>
                  Search
                </Typography>
               </Hidden>
            </div>
         </Link>
       </li>


       <li className={classes.sideMenuListItem}>
         <Link to="/">
            <div>
             <BookmarkIcon className={classes.sideMenuListItemIcon}/>
              <Hidden>
                <Typography variant="h6" className={classes.sideMenuListItemLabel}>
                  Bookmark
                </Typography>
               </Hidden>
            </div>
         </Link>
       </li>

       <li className={classes.sideMenuListItem}>
         <Link to="/">
            <div>
             <ListIcon className={classes.sideMenuListItemIcon}/>
              <Hidden>
                <Typography variant="h6" className={classes.sideMenuListItemLabel}>
                  List
                </Typography>
               </Hidden>
            </div>
         </Link>
       </li>

       <li className={classes.sideMenuListItem}>
          <Button
            onClick={handleClickOpenAddTweet}
            className={classes.sideMenuTweetButton}
            variant="contained"
            color="primary"
            fullWidth>
            <Hidden smDown>Tweet</Hidden>
            <Hidden mdUp>
              <CreateIcon />
            </Hidden>
          </Button>

          {/* visibal, children, title, onClose */}
          <ModalBlock visibal={visibalAddTweet} onClose={onCloseAddTweet}>
            <div style={{width: 550}}>
              <AddTweetForm maxRow={15} classes={classes}/>
            </div>
          </ModalBlock>
        </li>

       <li className={classes.sideMenuListItem}>

       </li>
     </ul>
     <UserSideProfile />
    </>
  )
}
 