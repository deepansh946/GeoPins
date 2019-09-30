import React from 'react';
import {GoogleLogin} from 'react-google-login';
import {withStyles} from '@material-ui/core/styles';
// import Typography from "@material-ui/core/Typography";

const Login = ({classes}) => {
  const onSuccess = googleUser => {
    const idToken = googleUser.getAuthResponse().id_token;
    console.log(idToken);
  };

  return (
    <GoogleLogin
      clientId="188010903712-b577i1nc5191bprqjfik73hrjfp5cotg.apps.googleusercontent.com"
      onSuccess={onSuccess}
      onFailure={err => console.log('fail', err)}
      isSignedIn={true}
    />
  );
};

const styles = {
  root: {
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
  },
};

export default withStyles(styles)(Login);
