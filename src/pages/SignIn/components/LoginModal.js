import { ModalBlock } from "../../../components/ModalBlock"
import { Notification } from "./../../../components/Notification";
import { useForm, Controller } from "react-hook-form"
import { TextField, FormControl, FormGroup, Button } from "@material-ui/core";
import { useStylesSignIn } from "..";
import { useRef } from "react";

export const LoginModal = ({open, onClose }) => {


  const openNotificationRef = useRef(()=>{})
  const { control, handleSubmit, errors } = useForm();
  const classes = useStylesSignIn()

  const onSubmit = (data) => {
    console.log(data,'Submit Methods call....')  
  }

  return <Notification>
    {
      callback => {
        openNotificationRef.current = callback;
        return(
          <ModalBlock
          visibal={open}
          title="Create your account"
          classes={classes}
          onClose={onClose}
        >
          <form onSubmit={handleSubmit(onSubmit)}>
            <FormControl component="fieldset" className={classes.loginFormControl} fullWidth>
              <FormGroup aria-label="position" row>
                <Controller
                  control={control}
                  as={TextField}
                  id="email"
                  name="email"
                  InputLabelProps={{
                    shrink: true
                  }}
                  className={classes.loginSideField}
                  variant="filled"
                  type="email"
                  defaultValue=""
                  fullWidth
                  label="E-Mail"
                  autoFocus
                />
    
                <Controller 
                  control={control}
                  as={TextField}
                  id="password"
                  name="password"
                  InputLabelProps={{
                    shrink: true
                  }}
                  className={classes.loginSideField}
                  defaultValue=""
                  fullWidth
                  label="Password"
                  variant="filled"
                  type="password"
                />
                <Button 
                  fullWidth 
                  type="submit"
                  color="primary" 
                  variant="contained"
                >Sign In</Button>
              </FormGroup>
            </FormControl>
          </form>
        </ModalBlock>
        )
      }
    }
  </Notification>
} 
