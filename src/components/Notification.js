import Alert from '@material-ui/lab/Alert';
import Snackbar from '@material-ui/core/Snackbar';

import { useState } from "react"

export const Notification = ({children}) => {

  const [open, setOpen] = useState(true);

  const openNotification = () => {
    alert('this function call by children element')  
  }


  return(
    <>
     {children(openNotification)}
      <Snackbar open={open} 
        autoHideDuration={6000} 
        onClose={()=>setOpen(false)}>
        <Alert onClose={()=>setOpen(false)}>
          your data submited sucessfully..
        </Alert>
      </Snackbar>
    </>
  )
}
 
