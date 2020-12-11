import React from "react";
import Container from '@material-ui/core/Container';
import SearchIcon from "@material-ui/icons/Search";

import Hidden from '@material-ui/core/Hidden';

import { Grid, InputAdornment } from "@material-ui/core";

import { SideMenu } from "../components/SideMenu";
import { SearchTextField } from "../components/SearchTextField";

import { Tag } from "../components/Tag";
import { useHomeStyles } from "./theme";
 
export const Layout = ({ children }) => {

  const classes = useHomeStyles()
  return (
    <Container className={classes.wrapper} maxWidth="lg">
      <Grid container spacing={3} >
        <Grid xs={2}  sm={1} md={3} item>
          <SideMenu classes={classes} />
        </Grid>

        <Grid item xs={10} sm={8} md={6}>
          {children}
        </Grid>
        <Hidden only='xs'>
          <Grid item sm={3} md={3}>
            <div className={classes.righSide} >
              <SearchTextField
                variant="outlined"
                placeholder="Search User"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon />
                    </InputAdornment>
                  )
                }}
              />
            </div>
          
            <Tag />
          </Grid>
        </Hidden>
      </Grid>   
    </Container>
  );
}
  
