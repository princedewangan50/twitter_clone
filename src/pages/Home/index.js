
import CircularProgress from '@material-ui/core/CircularProgress';


import { AddTweetForm } from "../../components/AddTweetFrom";
import { Paper, Typography } from "@material-ui/core"
import { Route } from "react-router-dom"
import { Tweet } from "../../components/Tweet"
import { BackButton } from "../../components/BackButton"
import { useHomeStyles } from "../theme"


export const Home = () => {

  const classes = useHomeStyles()
  return(
    <Paper className={classes.tweetWrapper} variant="outlined">
      <Paper className={classes.tweetTopHeader} variant="outlined">  

        <Route path="/tweet" exact>
          <BackButton />
        </Route>

        <Route path={['/home','/home/serch']} exact>
          <Typography  variant="h6">Home</Typography>
        </Route>
        <Route path="home/tweet">
          <Typography variant="h6" >Twieet</Typography>
        </Route>
      </Paper>

      <Route path={['/home','/home/search']} exact>
        <Paper>
          <div className={classes.addForm}>
            <AddTweetForm />
          </div>
          <div className={classes.addFormBottomLine} />
        </Paper>
      </Route>

      <Route path="/home" exact>
        {false ? (
          <div className={classes.tweetsCentred}>
            <CircularProgress />
          </div> 
        ) : (
          <>
           <Tweet 
              _id="1"
              text="Any more to move? You might need to adjust your stretching routines!Prototype and test end-to-end with the Local Emulator Suite, now with Firebase Authentication             "
              createdAt={new Date().toString()}
              user={{
                fullname: 'Prince Dewangna',
                username: 'prince',
                avatarUrl:
                 'https://post.healthline.com/wp-content/uploads/2019/09/man-city-urban-walking-serious-732x549-thumbnail.jpg',
              }}
              postImg="https://i.pinimg.com/originals/20/70/d8/2070d86f51beaffd84a706b64f58709c.png"
           />
            <Tweet 
              _id="1"
              text="Any more to move? You might need to adjust your stretching routines!Prototype and test end-to-end with the Local Emulator Suite, now with Firebase Authentication             "
              createdAt={new Date().toString()}
              user={{
                fullname: 'Prince Dewangna',
                username: 'prince',
                avatarUrl:
                 'https://post.healthline.com/wp-content/uploads/2019/09/man-city-urban-walking-serious-732x549-thumbnail.jpg',
              }}
              postImg="https://i.pinimg.com/originals/20/70/d8/2070d86f51beaffd84a706b64f58709c.png"
           />
           <Tweet 
              _id="1"
             text="Any more to move?"
             createdAt={new Date().toString()}
             user={{
               fullname: 'Arlene Andrews',
               username: 'ArleneAndrews_1',
               avatarUrl:
                 'https://post.healthline.com/wp-content/uploads/2019/09/man-city-urban-walking-serious-732x549-thumbnail.jpg',
             }}
             postImg="https://rawgit.com/gorangajic/react-icons/master/react-icons.svg"
           />
           <Tweet 
              _id="1"
             text="Any more to move? You might need to adjust your stretching routines!Prototype and end-to-end with the Local Emulator Suite, now with Firebase Authentication
             "
             createdAt={new Date().toString()}
             user={{
               fullname: 'Arlene Andrews',
               username: 'ArleneAndrews_1',
               avatarUrl:
                 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg',
             }}
             postImg="https://tsh.io/wp-content/uploads/2019/02/Asset-64BLOG_NPM2.jpg"
           />
           <Tweet 
              _id="1"
             text="Any more to move? You might need to adjust your stretching routines!"
             createdAt={new Date().toString()}
             user={{
               fullname: 'sam',
               username: 'sam_02',
               avatarUrl:
                'https://manofmany.com/wp-content/uploads/2019/06/50-Long-Haircuts-Hairstyle-Tips-for-Men-2.jpg',
             }}
             postImg="https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Npm-logo.svg/1200px-Npm-logo.svg.png"
           />
            <Tweet 
              _id="1"
              text="Any more to move? You might need to adjust your stretching routines!Prototype and test end-to-end with the Local Emulator Suite, now with Firebase Authentication             "
              createdAt={new Date().toString()}
              user={{
                fullname: 'Prince Dewangna',
                username: 'prince',
                avatarUrl:
                 'https://post.healthline.com/wp-content/uploads/2019/09/man-city-urban-walking-serious-732x549-thumbnail.jpg',
              }}
              postImg="https://i.pinimg.com/originals/20/70/d8/2070d86f51beaffd84a706b64f58709c.png"
           />
            <Tweet 
              _id="1"
              text="Any more to move? You might need to adjust your stretching routines!Prototype and test end-to-end with the Local Emulator Suite, now with Firebase Authentication             "
              createdAt={new Date().toString()}
              user={{
                fullname: 'Prince Dewangna',
                username: 'prince',
                avatarUrl:
                 'https://post.healthline.com/wp-content/uploads/2019/09/man-city-urban-walking-serious-732x549-thumbnail.jpg',
              }}
              postImg="https://i.pinimg.com/originals/20/70/d8/2070d86f51beaffd84a706b64f58709c.png"
           />
          </>
          )
        }
      </Route>



    </Paper>
  )
}
