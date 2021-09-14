import React, { useState } from "react";
import { ScrollView, View, Text, StatusBar, Image, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import Snackbar from "react-native-snackbar";
import propTypes from 'prop-types'
import {connect} from 'react-redux'
import { sendEmail } from "./action/list";

const Input = (props) => {
  var [focused, setFocused] = useState(false);

  return (
    <TextInput
      {...props}
      editable
      style={{
        borderWidth: 1.5,
        borderRadius: 8,
        width: "80%",
        marginBottom: 20,
        paddingHorizontal: 20,
        borderColor: focused ? "#FF225D" : "#c1c1c1"
      }}
      onFocus={() => { setFocused(true) }}
      onBlur={() => { setFocused(false) }}
    />
  );
}



const App = ({sendEmail}) => {

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const submit = () => {
    if (!name || !number || !email || !message) {
      Snackbar.show({
        text: 'Please fill all feilds',
        backgroundColor: "#FF225D",
      });
      return;
    }

    const emailContent =
      `Internship Assignment through Internshala

      Name    : ${name}
      Number  : ${number}
      Email   : ${email}
      Message : ${message}

      Thank you!
    `

    sendEmail(emailContent);
  }

  return (
    <>
      <StatusBar backgroundColor="#FF225D" />
      <ScrollView>
        <View style={styles.body}>
          <Image
            style={styles.image}
            source={require('./assets/iconlogo.png')}
          />
          <Text style={styles.heading}>Contact us</Text>
          <View style={styles.form}>
            <Input
              placeholder="Enter Name"
              placeholderTextColor="#c1c1c1"
              value={name}
              onChangeText={(name) =>
                setName(name)}
            />
            <Input
              keyboardType="numeric"
              placeholder="Enter Number"
              placeholderTextColor="#c1c1c1"
              value={number}
              onChangeText={(number) =>
                setNumber(number)}
            />
            <Input
              keyboardType="email-address"
              placeholder="Enter Email"
              placeholderTextColor="#c1c1c1"
              value={email}
              onChangeText={(email) =>
                setEmail(email)}
            />
            <Input
              placeholder="Enter Message"
              placeholderTextColor="#c1c1c1"
              multiline={true}
              numberOfLines={4}
              value={message}
              onChangeText={(message) =>
                setMessage(message)}
              style={{
                textAlignVertical: 'top'
              }}
            />
          </View>
          <TouchableOpacity style={styles.button}
            onPress={submit}
          >
            <Text
              style={{
                color: "#ffff",
                textAlign: 'center'
              }}
            >Submit</Text>
          </TouchableOpacity>
        </View>
        </ScrollView>
    </>
  )
}

const mapDispatchToProps = {
  sendEmail: (Email) => sendEmail(Email)
}

App.propTypes = {
  sendEmail: propTypes.func.isRequired
}

export default connect(null, mapDispatchToProps)(App);

const styles = StyleSheet.create({
  body: {
    marginTop: 70,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    height: 130,
    width: 130,
  },
  heading: {
    marginTop: 10,
    fontSize: 30,
    fontWeight: 'bold'
  },
  form: {
    marginTop: 30,
    width: "100%",
    justifyContent: 'center',
    alignItems: "center"
  },
  button: {
    textAlign: 'center',
    width: "80%",
    backgroundColor: "#FF225D",
    paddingVertical: 13,
    borderRadius: 8
  },
})
