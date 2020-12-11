import { Avatar, Typography, Popover } from "@material-ui/core";
import { useHomeStyles } from "../pages/theme";


export const UserSideProfile = () => {
  const classes = useHomeStyles()
  return ( 
    <>
     <div
    //   onClick={handleOpenPopup} 
      className={classes.sideProfile}>
        <Avatar  />

        <div className={classes.sideProfileInfo}>
          <b>Prince Dewangna</b>
          <Typography 
        //    style={{ color: colors.grey[500] }}
           >@prince</Typography>
        </div>
        {/* <ArrowBottomIcon /> */}
      </div>
      <Popover
        // open={visiblePopup}
        // onClose={handleClosePopup}
        // anchorEl={anchorRef.current}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}>
        The content of the Popover.
      </Popover>
    </>
  );
}
 