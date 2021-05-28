import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import writeStoryScreen from './screen/WriteStoryScreen';
import readStoryScreen from './screen/ReadStoryScreen';
import {SafeAreaProvider} from 'react-native-safe-area-context'
import {createSwitchNavigator} from 'react-navigation';
import LoginScreen from './screen/LoginScreen'

export default class App extends React.Component {
  render(){
    return (
      <SafeAreaProvider>
        
      
        <AppContainer/>
        </SafeAreaProvider>
      
    );
  }
}

const TabNavigator = createBottomTabNavigator({
  WriteStoryScreen: {screen: writeStoryScreen},
  ReadStoryScreen: {screen: readStoryScreen},
},
{
  defaultNavigationOptions: ({navigation})=>({
    tabBarIcon: ()=>{
      const routeName = navigation.state.routeName;
      console.log(routeName)
      if(routeName === "WriteStoryScreen"){
        return(
          <Image
          source={require("./assets/write.png")}
          style={{width:40, height:40}}
        />
        )
        
      }
      else if(routeName === "ReadStoryScreen"){
        return(
          <Image
          source={require("./assets/read.png")}
          style={{width:40, height:40}}
        />)
        
      }
    }
  })
}
);
const SwitchNav = createSwitchNavigator({
  LoginScreen : LoginScreen,
  TabNavigator : TabNavigator
})

const AppContainer =  createAppContainer(SwitchNav);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    alignItems: 'center',
    justifyContent: 'center',
  },
});