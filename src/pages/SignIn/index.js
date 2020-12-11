import React, { useState } from "react";

import { makeStyles, Typography, Button } from '@material-ui/core';
import TwitterIcon from "@material-ui/icons/Twitter";
import SearchIcon from "@material-ui/icons/Search";
import PeopleIcon from '@material-ui/icons/PeopleOutline';
import MessageIcon from '@material-ui/icons/ModeCommentOutlined'
import { LoginModal } from "./components/LoginModal";
import { RegisterModal } from "./components/RegisterModal";


import { Notification } from "./../../components/Notification";

export const useStylesSignIn = makeStyles((theme) => ({
  wrapper: {
    display: 'flex',
    height: '100vh',
  },
  blueSide: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#71C9F8',
    flex: '0 0 50%',
    overflow: 'hidden',
    position: 'relative',
  },
  blueSideBigIcon: {
    position: 'absolute',
    left: '50%',
    top: '53%',
    transform: 'translate(-50%, -50%)',
    width: '260%',
    height: '260%',
  },
  blueSideListInfo: {
    position: 'relative',
    listStyle: 'none',
    padding: 0,
    margin: 0,
    width: 380,
    '& h6': {
      display: 'flex',
      alignItems: 'center',
      color: 'white',
      fontWeight: 700,
      fontSize: 20,
    },
  },
  blueSideListInfoItem: {
    marginBottom: 40,
  },
  blueSideListInfoIcon: {
    fontSize: 32,
    marginRight: 15,
  },
  loginSide: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flex: '0 0 50%',

    // background: 'red',
    padding: 30,
  },
  loginSideWraper: {
    // background: 'green',
    maxWidth: 410
  },
  loginSideTwitterIcon: {
    fontSize: 45,
  },
  loginSideWrapper: {
    width: 380,
  },
  loginSideTitle: {
    fontWeight: 700,
    fontSize: 32,
    marginBottom: 60,
    marginTop: 20,
  },
  loginSideField: {
    marginBottom: 18,
  },
  registerField: {
    marginBottom: theme.spacing(5),
  },
  loginFormControl: {
    marginBottom: theme.spacing(2),
  },
}));


export const SignIn = () => {

  const classes = useStylesSignIn()
  const [ visibalModal, setVisibalModal ] = useState();


  const handleClickOpenSignIn = () => {
    setVisibalModal('signIn')
  }

  const handleClickOpenSignUp = () => {
    setVisibalModal('signUp')
  }

  const handleCloseModal = () => {
    setVisibalModal(undefined)
  }

  return (
    <div className={classes.wrapper}>

      <section className={classes.blueSide}>
        <TwitterIcon color="primary" className={classes.blueSideBigIcon} />

        <ul className={classes.blueSideListInfo}>
          <li className={classes.blueSideListInfoItem}>
            <Typography variant="h6">
              <SearchIcon className={classes.blueSideListInfoIcon}/>
                Follow your interests.
            </Typography>
          </li>

          <li className={classes.blueSideListInfoItem}>
            <Typography variant="h6">
              <PeopleIcon className={classes.blueSideListInfoIcon}/>
              Hear what people are talking about.
            </Typography>
          </li>

          <li className={classes.blueSideListInfoItem}>
            <Typography variant="h6">
              <MessageIcon className={classes.blueSideListInfoIcon}/>
              Join the conversation.
            </Typography>
          </li>
        </ul>
      </section>
      <section className={classes.loginSide}>
        <div className={classes.loginSideWraper}>
          <TwitterIcon className={classes.loginSideTwitterIcon} color="primary" />
          <Typography variant="h6"  className={classes.loginSideTitle}>
            See what’s happening in the world right now
          </Typography>
          <Typography>
            <b>Join Twitter today.</b>
          </Typography>
          <br/>
          <Button 
            onClick={handleClickOpenSignUp}
            style={{marginBottom: 20}}  
            color="primary" 
            variant="contained" 
            fullWidth>
            Sign Up
          </Button>
          <Button 
            onClick={handleClickOpenSignIn}
            style={{marginBottom: 20}}
            variant="outlined" 
            color="primary" 
            fullWidth>
              Log in
           </Button>
        </div>
      </section>
      <LoginModal open={visibalModal === 'signIn'} onClose={handleCloseModal}/>
      <RegisterModal open={visibalModal === 'signUp'} onClose={handleCloseModal}/>
    </div>
  );
}

