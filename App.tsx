import React from 'react';
import { StatusBar } from 'react-native';
import { StyleSheet, Text, View, Image} from 'react-native';

export default function App() {
  return (

    <View style = {styles.container}>    
    <Image  style = {styles.stretch} source={{ uri: 'https://pbs.twimg.com/profile_images/1278313059631710208/f6fc8Yuo.jpg', }}/>          
      <View>
        <Text style = {styles.Home} >Home Work {'\n'}</Text>
      </View>
      <Text style={styles.text} numberOfLines = {2}> {'   '}Hello my group ☺{'\n'} I'm glad to see you!</Text>
      <StatusBar barStyle = 'default' />
    </View>
    
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'seashell',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  text:
  {
    fontSize: 25,
    color:'blue',
    paddingLeft:50,
    paddingRight:50,
    paddingVertical: 20,
    textShadowColor:'#585858',
    textShadowOffset:{width: 5, height: 5},
    textShadowRadius:10,
    borderColor: 'blue',
    borderWidth: 4,
    marginBottom: 125
  },
  Home:
  {
    fontSize: 60,
    color: 'tomato',
    justifyContent: 'space-between',
    textShadowOffset:{width: 3, height: 3},
    textShadowColor:'silver',
    textShadowRadius: 20
    
  },
  stretch: {
    flex: 0.5,
    width: 200,
    height: 200,
    paddingTop: 20,
    resizeMode: 'contain',
    marginBottom: 150

  }
});
