import {useRef, useContext} from 'react';
import AuthContext from '../Store/auth-context';
import classes from './ProfileForm.module.css';

const ProfileForm = () => {

  const newPasswordInputref = useRef();
  const authctx = useContext(AuthContext);

  const submitHandler = (event) =>{
    event.preventDefault();

    const enteredPassword = newPasswordInputref.current.value;

    fetch('https://identitytoolkit.googleleapis.com/v1/accounts:update?key=AIzaSyBBDf5Cpqha_CEBGP2carWWDjC9QIGa4jE',{
      method:'POST',
      body: JSON.stringify({
        idToken: authctx.token,
        password: enteredPassword,
        returnSecureToken:false
      }),
      headers: {
        'Content-Type':'application/json'
      }

    }).then(res=>{
      
    })


  }
  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={classes.control}>
        <label htmlFor='new-password'>New Password</label>
        <input type='password' id='new-password' minLength="7" ref={newPasswordInputref} />
      </div>
      <div className={classes.action}>
        <button>Change Password</button>
      </div>
    </form>
  );
}

export default ProfileForm;
