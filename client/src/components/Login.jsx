import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
//
import axios from "axios";

function App() {
  //state variable for the screen, admin or user
  const [screen, setScreen] = useState("auth");
  //store input field data, user name and password
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const apiUrl = "http://localhost:5000/signin";
  //send username and password to the server
  // for initial authentication
  const authenticateUser = async () => {
    console.log("calling auth");
    console.log(username);
    try {
      //make a get request to /authenticate end-point on the server
      const loginData = { username, password };
      //call api
      const res = await axios.post(apiUrl, loginData);
      console.log(res.data.auth);
      console.log(res.data.screen);
      console.log(res.data);
      //process the response
      if (res.data.screen !== undefined) {
        setScreen(res.data.screen);
        console.log(res.data.screen);
      }
    } catch (e) {
      //print the error
      console.log(e);
    }
  };

  //check if the user already logged-in
  const readCookie = async () => {
    try {
      console.log("--- in readCookie function ---");

      //
      const res = await axios.get("/read_cookie");
      //
      if (res.data.screen !== undefined) {
        setScreen(res.data.screen);
        console.log(res.data.screen);
      }
    } catch (e) {
      setScreen("auth");
      console.log(e);
    }
  };
  //runs the first time the view is rendered
  //to check if user is signed in
  useEffect(() => {
    readCookie();
  }, []); //only the first render
  //
  return (
    <div className="App">
      {screen === "auth" ? (
        <div>
          <Form className="w-75 m-auto">
            <Form.Group size="lg">
              <Form.Label>User Name</Form.Label>
              <Form.Control
                type="text"
                name="username"
                id="username"
                placeholder="Enter user name"
                onChange={(e) => setUsername(e.target.value)}
              />
            </Form.Group>
            <Form.Group size="lg">
              <Form.Label>Password:</Form.Label>
              <Form.Control
                type="password"
                name="password"
                id="password"
                placeholder="Enter password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>

            <Button
              size="lg"
              className="mt-3"
              variant="primary"
              type="Button"
              onClick={authenticateUser}
            >
              Login
            </Button>
          </Form>
        </div>
      ) : (
        <div>Hello</div>
      )}
    </div>
  );
}
//
export default App;
