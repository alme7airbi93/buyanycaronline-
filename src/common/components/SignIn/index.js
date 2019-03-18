import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';

// import { SignUpLink } from '../SignUp';
// import { PasswordForgetLink } from '../PasswordForget';
import { withFirebase } from '../Firebase';
import * as ROUTES from '../../constants/routes';

const SignInPage = () => (
  <div>
    <h1>SignIn</h1>
    <div class="modal fade" id="loginPopup">
      <div class="modal-dialog" style={{ maxWidth: "350px;" }}>
        <div class="modal-content popup-form">
          {/* <!-- Modal Header --> */}
          <div class="modal-header pf-header">
            <h4 class="pf-title">Login</h4>
            <button type="button" class="close pf-close" data-dismiss="modal">
              <i class="fa fa-times" aria-hidden="true"></i>
            </button>
          </div>
          <div class="pf-content">
            <div class="pf-label">Username</div>
            <input type="text" class="pf-textInput" name="name" value="" aria-required="true"
              aria-invalid="false" placeholder="Enter your username" size="40" />
            <div class="pf-label">Password</div>
            <input type="password" class="pf-textInput" name="password" value="" size="40" class=""
              aria-required="true" aria-invalid="false" placeholder="Enter your password" />
            <a href="#" class="pf-link">Forgot your password?</a>
            <input type="submit" value="Login" class="pf-submit" />
          </div>
        </div>
      </div>


      <div class="modal fade" id="registerPopup">
        <div class="modal-dialog" style={{ maxWidth: "350px;" }}>
          <div class="modal-content popup-form">
            {/* <!-- Modal Header --> */}
            <div class="modal-header pf-header">
              <h4 class="pf-title">Register</h4>
              <button type="button" class="close pf-close" data-dismiss="modal">
                <i class="fa fa-times" aria-hidden="true"></i>
              </button>
            </div>
            <div class="pf-content">
              <div class="pf-label">Username(email)</div>
              <input type="text" class="pf-textInput" name="name" value="" aria-required="true"
                aria-invalid="false" placeholder="Enter your username" size="40" />
              <div class="pf-label">Password</div>
              <input type="password" class="pf-textInput" name="password" value="" size="40" class=""
                aria-required="true" aria-invalid="false" placeholder="Enter your password" />
              <div class="pf-label">Re-type Password</div>
              <input type="password" class="pf-textInput" name="password" value="" size="40" class=""
                aria-required="true" aria-invalid="false" placeholder="Enter your password" />
              <input type="submit" value="Register" class="pf-submit" />
              <div class="pf-social">
                <div class="pf-label">OR</div>
                <div class="pf-social-buttons">
                  <a href="#" target="_blank">
                    <i class="fa fa-facebook"></i>
                  </a>
                  <a href="#" target="_blank">
                    <i class="fa fa-twitter"></i>
                  </a>
                  <a href="#" target="_blank">
                    <i class="fa fa-google"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div >

    <SignInForm />
    <SignInGoogle />
    <SignInFacebook />
    <SignInTwitter />
    {/* <PasswordForgetLink /> */}
    {/* <SignUpLink /> */}
  </div >
);

const INITIAL_STATE = {
  email: '',
  password: '',
  error: null,
};

const ERROR_CODE_ACCOUNT_EXISTS =
  'auth/account-exists-with-different-credential';

const ERROR_MSG_ACCOUNT_EXISTS = `
  An account with an E-Mail address to
  this social account already exists. Try to login from
  this account instead and associate your social accounts on
  your personal account page.
`;

class SignInFormBase extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = event => {
    const { email, password } = this.state;

    this.props.firebase
      .doSignInWithEmailAndPassword(email, password)
      .then(() => {
        this.setState({ ...INITIAL_STATE });
        this.props.history.push(ROUTES.HOME);
      })
      .catch(error => {
        this.setState({ error });
      });

    event.preventDefault();
  };

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const { email, password, error } = this.state;

    const isInvalid = password === '' || email === '';

    return (
      <form onSubmit={this.onSubmit}>
        <input
          name="email"
          value={email}
          onChange={this.onChange}
          type="text"
          placeholder="Email Address"
        />
        <input
          name="password"
          value={password}
          onChange={this.onChange}
          type="password"
          placeholder="Password"
        />
        <button disabled={isInvalid} type="submit">
          Sign In
        </button>

        {error && <p>{error.message}</p>}
      </form>
    );
  }
}

class SignInGoogleBase extends Component {
  constructor(props) {
    super(props);

    this.state = { error: null };
  }

  onSubmit = event => {
    this.props.firebase
      .doSignInWithGoogle()
      .then(socialAuthUser => {
        // Create a user in your Firebase Realtime Database too
        return this.props.firebase.user(socialAuthUser.user.uid).set({
          username: socialAuthUser.user.displayName,
          email: socialAuthUser.user.email,
          roles: [],
        });
      })
      .then(() => {
        this.setState({ error: null });
        this.props.history.push(ROUTES.HOME);
      })
      .catch(error => {
        if (error.code === ERROR_CODE_ACCOUNT_EXISTS) {
          error.message = ERROR_MSG_ACCOUNT_EXISTS;
        }

        this.setState({ error });
      });

    event.preventDefault();
  };

  render() {
    const { error } = this.state;

    return (
      <form onSubmit={this.onSubmit}>
        <button type="submit">Sign In with Google</button>

        {error && <p>{error.message}</p>}
      </form>
    );
  }
}

class SignInFacebookBase extends Component {
  constructor(props) {
    super(props);

    this.state = { error: null };
  }

  onSubmit = event => {
    this.props.firebase
      .doSignInWithFacebook()
      .then(socialAuthUser => {
        // Create a user in your Firebase Realtime Database too
        return this.props.firebase.user(socialAuthUser.user.uid).set({
          username: socialAuthUser.additionalUserInfo.profile.name,
          email: socialAuthUser.additionalUserInfo.profile.email,
          roles: [],
        });
      })
      .then(() => {
        this.setState({ error: null });
        this.props.history.push(ROUTES.HOME);
      })
      .catch(error => {
        if (error.code === ERROR_CODE_ACCOUNT_EXISTS) {
          error.message = ERROR_MSG_ACCOUNT_EXISTS;
        }

        this.setState({ error });
      });

    event.preventDefault();
  };

  render() {
    const { error } = this.state;

    return (
      <form onSubmit={this.onSubmit}>
        <button type="submit">Sign In with Facebook</button>

        {error && <p>{error.message}</p>}
      </form>
    );
  }
}

class SignInTwitterBase extends Component {
  constructor(props) {
    super(props);

    this.state = { error: null };
  }

  onSubmit = event => {
    this.props.firebase
      .doSignInWithTwitter()
      .then(socialAuthUser => {
        // Create a user in your Firebase Realtime Database too
        return this.props.firebase.user(socialAuthUser.user.uid).set({
          username: socialAuthUser.additionalUserInfo.profile.name,
          email: socialAuthUser.additionalUserInfo.profile.email,
          roles: [],
        });
      })
      .then(() => {
        this.setState({ error: null });
        this.props.history.push(ROUTES.HOME);
      })
      .catch(error => {
        if (error.code === ERROR_CODE_ACCOUNT_EXISTS) {
          error.message = ERROR_MSG_ACCOUNT_EXISTS;
        }

        this.setState({ error });
      });

    event.preventDefault();
  };

  render() {
    const { error } = this.state;

    return (
      <form onSubmit={this.onSubmit}>
        <button type="submit">Sign In with Twitter</button>

        {error && <p>{error.message}</p>}
      </form>
    );
  }
}

const SignInForm = compose(
  withRouter,
  withFirebase,
)(SignInFormBase);

const SignInGoogle = compose(
  withRouter,
  withFirebase,
)(SignInGoogleBase);

const SignInFacebook = compose(
  withRouter,
  withFirebase,
)(SignInFacebookBase);

const SignInTwitter = compose(
  withRouter,
  withFirebase,
)(SignInTwitterBase);

export default SignInPage;

export { SignInForm, SignInGoogle, SignInFacebook, SignInTwitter };
