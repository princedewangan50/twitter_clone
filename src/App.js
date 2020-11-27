import React from "react";

import { makeStyles, Typography, Button } from '@material-ui/core';
import TwitterIcon from "@material-ui/icons/Twitter";


export const useStyleSignIn = makeStyles((theme) => ({

  wrapper: {
    display: 'flex',
    // border: '1px solid',
    height: '100vh'
  },
  blueSide: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#71C9F8',

    position: 'relative',
    flex: '0 0 50%',
    overflow: 'hidden',
  },
  blueSideBigIcon: {
    position: 'absolute',
    left: '60%',
    top: '60%',
    transform: 'translate(-50%, -50%)',
    height: '210%',
    width: '210%'
  },

  loginSide: {
    // border: '1px solid',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flex: '0 0 50%',
  },
  loginSideTwitterIcon: {
    fontSize: 45
  },
  loginSideWraper: {
    width: 380,
    // marginBottom: 30,
    // border: '1px solid'
  },
  loginSideTitle: {
    fontSize: 32,
    fontWeight: 600,
    marginTop: 20,
    marginBottom: 60,
  },



}));
function App() {

  const classes = useStyleSignIn()


  return (
    <div className={classes.wrapper}>
      <section className={classes.blueSide}>
        <TwitterIcon color="primary" className={classes.blueSideBigIcon}></TwitterIcon>
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
            style={{marginBottom: 20}}  
            color="primary" 
            variant="contained" 
            fullWidth>
            Sign Up
          </Button>
          <Button 
            style={{marginBottom: 20}}
            variant="outlined" 
            color="primary" 
            fullWidth>
              Log in
           </Button>
        </div>
      </section>
    </div>
  );
}

export default App;
