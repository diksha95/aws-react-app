import React, { useState, useEffect } from "react";
import './App.css';
import logo from "./logo.svg";
import "@aws-amplify/ui-react/styles.css";
import {
  Button,
  // Flex,
  Heading,
  // Text,
  // TextField,
  View,
  withAuthenticator,
  Image,
  Card
} from "@aws-amplify/ui-react";
import { signOut } from "aws-amplify/auth";
function App() {
  return (
    <View className="App">
      <Card>
        <Image src={logo} className="App-logo" alt="logo" />
        <Heading level={1}>you now have Auth</Heading>
      </Card>
      <Button onClick={signOut}>Signout</Button>
    </View>
    // <div className="App">
    //   <h1>React App</h1>
    // </div>
  );
}

export default withAuthenticator(App);
