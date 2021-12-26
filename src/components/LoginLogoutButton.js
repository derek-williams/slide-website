import { useHistory } from "react-router";
import { setUser, unsetUser} from "../redux/actions";
import { Button } from "react-bootstrap";
import React from "react";
import { auth, provider } from "../firebase/firebase";
import { useDispatch, useSelector } from "react-redux";

export function LoginLogoutButton() {
  let history = useHistory();
  const selector = useSelector(state => state);
  const dispatch = useDispatch();

  function logout() {
    auth.signOut()
      .then(() => {
        dispatch(unsetUser());
        history.push("/");
      });
  }

  function login() {
    auth.signInWithPopup(provider)
      .then((result) => {
        dispatch(setUser(result.user.uid));
        history.push("/dashboard")
      });
  }

  return (
    selector.user ?
      <Button variant="warning" onClick={logout}>Log Out</Button>
      :
      <Button variant="warning" onClick={login}>Log In</Button>
  )
}

