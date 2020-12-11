
import Dialog from '@material-ui/core/Dialog';

import DialogTitle from '@material-ui/core/DialogTitle';
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import { DialogContent, TextField, Button } from '@material-ui/core';

export const ModalBlock = ({visibal, children, title, onClose}) => {
  return(
    <Dialog 
      open={visibal}
      onClose={onClose}
      aria-labelledby="form-dialog-title"
      fullWidth
      >
      <DialogTitle>
        <IconButton color="secondary" aria-label="close">
          <CloseIcon style={{fontSize: 26}} color="primary"/>
        </IconButton>
        {title}
      </DialogTitle>
      <DialogContent>
        {children}
      </DialogContent>
    </Dialog>
  )
}
 







