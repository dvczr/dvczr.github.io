import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, Image, Text, View, TextInput } from 'react-native';

const blockUpper = (
<>
<h1>Hello World!</h1>
<h3 style={{fontWeight:'450'}}>First React Native App</h3>
<p>This is a paragraph explaining what this app is all about. As you can see there are already many components including text, images and buttons</p>
</>
);

const subTitle1 = <h3>What would you like to get out of this course?</h3>;
const subTitle2 = <h3>An emoji describing how you are feeling about the course:</h3>;

const submit = <Text style={{color:'deepskyblue'}}><p>Submit</p></Text>


export default function App() {
  return (
    
    <View style={{width:'100%', height:'100%', margin:'0'}}>
      <View style={{height:'5%', backgroundColor:'midnightblue'}}></View>
      <View style={{backgroundColor:'lightblue'}}>
        <Text style={{maxWidth: '70%', minWidth:'70%'}}>
          {blockUpper}
        </Text>
      </View>
      <View style={{maxWidth: '45%', minWidth:'45%'}}>
        {subTitle1}
      </View>
      <View style={{maxWidth: '75%', minWidth:'75%', height:'20%', backgroundColor:'whitesmoke'}}>
        <TextInput placeholder="Initial Text" multiline="true"/>
      </View>
      <View style={{maxWidth: '42%', minWidth:'42%'}}>
        {subTitle2}
      </View>
      <Image style= {{width:100, height: 100}}
         source={require('./assets/icon.png')}/>
         <Button title={submit} color="white"/>
         <StatusBar style="auto" />
      </View>
   );
}

