import { ModalBlock } from "../../../components/ModalBlock";
import { FormControl, FormGroup, TextField, Button } from "@material-ui/core";
import { Controller, useForm } from "react-hook-form";
import { useStylesSignIn } from "..";


export const RegisterModal = ({open, onClose}) => {

  const { control, handleSubmit, errors} = useForm()
  const classes = useStylesSignIn()

  const onSubmit = (data) => {
    console.log(data,'submit button call...') 
  }

  return ( 
    <ModalBlock
      visibal={open}
      title="Create your account"
      onClose={onClose}
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl  component="fieldset" className={classes.loginFormControl} fullWidth>
          <FormGroup aria-label="position" row >
            <Controller
              as={TextField}
              control={control}
              name="email"
              id="email"
              InputLabelProps={{
                shrink: true,
              }}
              className={classes.loginSideField}
              variant="filled"
              type="email"
              label="E-Mail"
              defaultValue=""
              autoFocus
              fullWidth
            />

            <Controller 
              as={TextField}
              control={control}
              name="username"
              id="username"
              InputLabelProps={{
                shrink: true
              }}
              className={classes.loginSideField}
              type="text"
              variant="filled"
              label="Username"
              defaultValue=""
              fullWidth
            />

            <Controller
              as={TextField}
              control={control}
              name="password"
              id="password"
              InputLabelProps={{
                shrink: true
              }}
              className={classes.loginSideField}
              type="password"
              variant="filled"
              label="Password"
              defaultValue=""
              fullWidth
            />
 
            <Controller
              as={TextField}
              control={control}
              name="password2"
              id="password2"
              InputLabelProps={{
                shrink: true
              }}
              className={classes.loginSideField}
              type="password"
              variant="filled"
              label="Conform Password"
              defaultValue=""
              fullWidth
            />

            <Button color="primary" variant="contained" fullWidth>Sign Up</Button>

          </FormGroup>
        </FormControl>
      </form>
    </ModalBlock>
  );
}
 