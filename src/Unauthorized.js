import React from "react";
import { Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";

export default function Unauthorized() {
  const history = useHistory();

  return (
    <div className='container'>
      <div>
        <h1>403 - You Shall Not Pass</h1>
        <p>Uh oh, Gandalf is blocking the way!<br />Maybe you have a typo in the url? Or you meant to go to a different location? Like...Hobbiton?</p>
      </div>
      <p><Button onClick={() => history.goBack()}>Go Back</Button></p>
    </div>
  )
};
